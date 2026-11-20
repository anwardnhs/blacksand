import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { articles, businesses, priorities, searchPages } from '../content';

export function getMetadata(path:string) {
 const page=searchPages.find(p=>p.path.split('?')[0]===path);
 const business=businesses.find(b=>path===`/businesses/${b.slug}`);
 const article=articles.find(a=>path===`/perspectives/${a.slug}`);
 const priority=priorities.find(p=>path===`/sustainability/${p.slug}`);
 const utility:Record<string,{title:string;description:string}>={
  '/company/founder':{title:'Our founder',description:'The story of Alhaji Ibrahim Alhassan CFR, founder of Blacksand Oil Company Limited in 1952.'},
  '/sitemap':{title:'Sitemap',description:'Explore the company, businesses, sustainability priorities and investor information at Blacksand Plc.'},
  '/credits':{title:'Image credits',description:'Photography credits and illustrative imagery used across the Blacksand Plc website.'},
  '/terms':{title:'Terms of use',description:'Information about using the Blacksand Plc website and its published content.'},
 };
 return {title:article?.title || business?.name || priority?.title || page?.title || utility[path]?.title || 'Page not found',description:article?.summary || business?.description || priority?.description || page?.description || utility[path]?.description || 'We could not find this page. Explore the Blacksand website.',exists:!!(page||business||article||priority||utility[path]),article};
}
export function SEO() {
 const {pathname}=useLocation();
 useEffect(()=>{
  const data=getMetadata(pathname); const configured=(import.meta.env.VITE_SITE_URL || '').replace(/\/$/,'');
  const origin=configured || window.location.origin; const url=origin+pathname;
  const title=pathname==='/'?'Blacksand Plc | Energy for what comes next':`${data.title} | Blacksand Plc`;
  document.title=title;
  const set=(key:string,value:string,property=false)=>{let node=document.head.querySelector<HTMLMetaElement>(`meta[${property?'property':'name'}="${key}"]`);if(!node){node=document.createElement('meta');node.setAttribute(property?'property':'name',key);document.head.append(node);}node.content=value;};
  set('description',data.description);set('robots',configured&&data.exists?'index,follow,max-image-preview:large':'noindex,follow');
  set('og:title',title,true);set('og:description',data.description,true);set('og:url',url,true);set('og:type',data.article?'article':'website',true);set('og:image',`${origin}/brand/social-card.png`,true);set('og:site_name','Blacksand Plc',true);set('og:image:alt','Blacksand Plc — Energy for what comes next',true);
  set('twitter:card','summary_large_image');set('twitter:title',title);set('twitter:description',data.description);set('twitter:image',`${origin}/brand/social-card.png`);
  let canonical=document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.append(canonical);}canonical.href=url;
  const graph:object[]=[{'@type':'Organization','@id':origin+'/#organization',name:'Blacksand Plc',url:origin,logo:origin+'/brand/monogram.png',foundingDate:'1952',address:{'@type':'PostalAddress',addressLocality:'Abuja',addressCountry:'NG'}},{'@type':'WebSite','@id':origin+'/#website',name:'Blacksand Plc',url:origin,publisher:{'@id':origin+'/#organization'}},{'@type':data.article?'Article':'WebPage',name:data.title,headline:data.title,description:data.description,url,isPartOf:{'@id':origin+'/#website'},...(data.article?{author:{'@id':origin+'/#organization'}}:{})}];
  if(pathname!=='/')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:origin},{'@type':'ListItem',position:2,name:data.title,item:url}]});
  let schema=document.head.querySelector<HTMLScriptElement>('#site-schema');if(!schema){schema=document.createElement('script');schema.id='site-schema';schema.type='application/ld+json';document.head.append(schema);}schema.textContent=JSON.stringify({'@context':'https://schema.org','@graph':graph});
 },[pathname]);
 return null;
}
