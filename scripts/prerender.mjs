import { createServer, loadEnv } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const environment=loadEnv('production',process.cwd(),'VITE_');
const configured=(process.env.VITE_SITE_URL || environment.VITE_SITE_URL || '').replace(/\/$/,'');
if(configured && !/^https:\/\/[^/]+$/.test(configured))throw new Error('VITE_SITE_URL must be an HTTPS origin without a path.');
const origin=configured || 'http://localhost:3002';
const base=await readFile('dist/index.html','utf8');
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const server=await createServer({server:{middlewareMode:true},appType:'custom',logLevel:'error'});
try {
 const renderer=await server.ssrLoadModule('/src/site/prerender.tsx');
 const paths=renderer.paths;
 for(const route of [...paths,'/404']) {
  const {html,metadata}=renderer.render(route);
  const title=route==='/'?'Blacksand Plc | Energy for what comes next':`${metadata.title} | Blacksand Plc`;
  const url=origin+route;
  const robots=configured&&metadata.exists?'index,follow,max-image-preview:large':'noindex,follow';
  const graph=[{'@type':'Organization','@id':origin+'/#organization',name:'Blacksand Plc',url:origin,foundingDate:'1952',logo:origin+'/brand/monogram.png',address:{'@type':'PostalAddress',addressLocality:'Abuja',addressCountry:'NG'}},{'@type':'WebSite','@id':origin+'/#website',url:origin,name:'Blacksand Plc'},{'@type':metadata.article?'Article':'WebPage',name:metadata.title,headline:metadata.title,description:metadata.description,url,isPartOf:{'@id':origin+'/#website'}}];
  if(route!=='/')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:origin},{'@type':'ListItem',position:2,name:metadata.title,item:url}]});
  let output=base.replace('<div id="root"></div>',`<div id="root">${html}</div>`).replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`).replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${escape(metadata.description)}" />`).replace(/<meta name="robots"[^>]*>/,`<meta name="robots" content="${robots}" />`);
  for(const [key,value]of Object.entries({'og:title':title,'og:description':metadata.description,'og:type':metadata.article?'article':'website','og:image':origin+'/brand/social-card.png'}))output=output.replace(new RegExp(`<meta property="${key}"[^>]*>`),`<meta property="${key}" content="${escape(value)}" />`);
  output=output.replace('</head>',`<link rel="canonical" href="${escape(url)}" /><meta property="og:url" content="${escape(url)}" /><meta property="og:site_name" content="Blacksand Plc" /><meta name="twitter:title" content="${escape(title)}" /><meta name="twitter:description" content="${escape(metadata.description)}" /><meta name="twitter:image" content="${origin}/brand/social-card.png" /><script type="application/ld+json" id="site-schema">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')}</script></head>`);
  const target=route==='/404'?'dist/404.html':route==='/'?'dist/index.html':path.join('dist',route,'index.html');
  await mkdir(path.dirname(target),{recursive:true});await writeFile(target,output);
 }
 const sitemap=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${escape(origin+p)}</loc></url>`).join('')}</urlset>`;
 await writeFile('dist/sitemap.xml',sitemap);
 await writeFile('dist/robots.txt',configured?`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
 const redirects={'/about':'/company','/leadership':'/company/leadership','/founder-profile':'/company/founder','/operations':'/businesses','/timeline':'/company/history','/global-presence':'/company/global-presence'};
 await writeFile('dist/_redirects',Object.entries(redirects).map(([from,to])=>`${from} ${to} 301`).join('\n')+'\n');
 await writeFile('dist/_headers','/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n/brand/*\n  Cache-Control: public, max-age=86400\n/media/*\n  Cache-Control: public, max-age=86400\n');
 console.log(`Pre-rendered ${paths.length} pages, a 404 page, sitemap, robots and redirects. ${configured?'Production indexing enabled.':'Local preview remains noindex.'}`);
} finally { await server.close(); }
