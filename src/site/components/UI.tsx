import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { photos, articles, businesses, imageUrl } from '../content';

export function Reveal({children,className=''}:{children:ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el||!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches||el.getBoundingClientRect().top<window.innerHeight)return;
 const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){el.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:550,easing:'cubic-bezier(.22,1,.36,1)'});observer.disconnect();}},{threshold:.06});observer.observe(el);return()=>observer.disconnect();},[]);
 return <div ref={ref} className={className}>{children}</div>;
}
export function TextLink({to,children,light=false}:{to:string;children:ReactNode;light?:boolean}){return <Link to={to} className={`text-link ${light?'is-light':''}`}>{children}<ArrowUpRight size={22} aria-hidden="true"/></Link>;}
export function ButtonLink({to,children,secondary=false}:{to:string;children:ReactNode;secondary?:boolean}){return <Link to={to} className={`button ${secondary?'button-secondary':''}`}>{children}<ArrowUpRight size={22} aria-hidden="true"/></Link>;}
export function Photo({name,className='',eager=false,caption=false}:{name:keyof typeof photos;className?:string;eager?:boolean;caption?:boolean}){
 const [failed,setFailed]=useState(false);const photo=photos[name];const src=(w:number)=>imageUrl(name,w);
 return <figure className={`photo ${className}`}>{failed?<div className="photo-unavailable" role="img" aria-label={photo.alt}/>:<img src={src(1920)} srcSet={`${src(640)} 640w, ${src(1200)} 1200w, ${src(1920)} 1920w`} sizes="(max-width: 700px) 100vw, 75vw" alt={photo.alt} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setFailed(true)}/>}
 {caption&&<figcaption><a href={photo.source} target="_blank" rel="noreferrer">{photo.credit} / Unsplash <ArrowUpRight size={12}/></a></figcaption>}</figure>;
}
export function SectionHeading({title,children,to,link='Explore more'}:{label?:string;title:ReactNode;children?:ReactNode;to?:string;link?:string}){return <Reveal className="section-heading"><h2>{title}</h2><div className="section-heading-side">{children&&<p>{children}</p>}{to&&<TextLink to={to}>{link}</TextLink>}</div></Reveal>;}
export function PageIntro({label,title,text,photo}:{label:string;title:ReactNode;text?:string;photo?:keyof typeof photos}){return <><section className="page-intro container"><div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>{label}</span></div><h1>{title}</h1>{text&&<p className="page-lead">{text}</p>}</section>{photo&&<div className="container"><Photo name={photo} eager className="page-banner" caption/></div>}</>;}
const sectors:Record<string,string>={upstream:'Upstream',downstream:'Refining & petrochemicals','gas-power':'Gas & power',trading:'Trading & supply'};
export function BusinessCards({compact=false}:{compact?:boolean}){return <div className={`business-index ${compact?'compact':''}`}>{businesses.map(b=><Reveal key={b.slug}><Link to={`/businesses/${b.slug}`} className="business-row"><Photo name={b.photo}/><div><h3>{sectors[b.slug]}</h3><p>{b.name}</p></div><ArrowUpRight className="business-row-arrow" size={38}/></Link></Reveal>)}</div>;}
export function ArticleCards({items=articles}:{items?:typeof articles}){return <div className="article-grid">{items.map(a=><Reveal key={a.slug}><Link className="article-card" to={`/perspectives/${a.slug}`}><div className="article-image"><Photo name={a.photo}/><span className="round-arrow"><ArrowUpRight size={24}/></span></div><div className="article-meta"><span>{a.category}</span><span>{a.readTime}</span></div><h3>{a.title}</h3></Link></Reveal>)}</div>;}
export function NextPage({title='Talk to Blacksand.',to='/contact',link='Contact us'}:{label?:string;title?:string;to?:string;link?:string}){return <section className="next-page container"><div><h2>{title}</h2><Link to={to} className="next-link"><span>{link}</span><ArrowRight size={32}/></Link></div></section>;}
export function Metrics({items,note}:{items:{value:string;label:string}[];note?:string}){return <><div className="metrics">{items.map(item=><div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>{note&&<p className="data-note">{note}</p>}</>;}
