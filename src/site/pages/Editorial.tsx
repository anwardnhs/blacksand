import { useParams, useSearchParams, Link } from 'react-router-dom';
import { articles } from '../content';
import { PageIntro, ArticleCards, Photo, NextPage, TextLink } from '../components/UI';
import { NotFound } from './Utility';

export function Perspectives() {
 const [params,setParams]=useSearchParams(); const category=params.get('category') || 'All';
 const items=category==='All'?articles:articles.filter(a=>a.category===category);
 return <><PageIntro label="Perspectives" title="Perspectives." text="Energy, people and the business behind them." /><section className="section container"><div className="filter-row"><div className="segmented" aria-label="Filter perspectives">{['All','Energy','Responsibility','Company'].map(c=><button key={c} aria-pressed={category===c} onClick={()=>setParams(c==='All'?{}:{category:c})}>{c}</button>)}</div><span className="result-count" aria-live="polite">{items.length} {items.length===1?'perspective':'perspectives'}</span></div>{items.length?<ArticleCards items={items} />:<div className="notice"><h2>No perspectives in this category yet.</h2><button className="text-link" onClick={()=>setParams({})}>View all perspectives</button></div>}</section><NextPage to="/company" title="Get to know the business behind the stories." link="About Blacksand" /></>;
}
export function Article() {
 const {slug}=useParams(); const a=articles.find(item=>item.slug===slug);
 if(!a)return <NotFound />;
 return <><PageIntro label={a.category} title={a.title} text={a.summary} /><div className="container"><div className="article-byline"><span>Blacksand perspectives</span><span>{a.readTime}</span><span>Company explainer</span></div><Photo name={a.photo} className="page-banner" eager caption /></div><article className="section container article-body"><aside><span className="eyebrow">In this perspective</span>{a.sections.map((s,i)=><a key={s.heading} href={`#section-${i}`}>{s.heading}</a>)}<TextLink to="/perspectives">All perspectives</TextLink></aside><div className="prose">{a.sections.map((s,i)=><section id={`section-${i}`} key={s.heading}><h2>{s.heading}</h2><p>{s.text}</p></section>)}<p className="article-endnote">An editorial introduction based on the Blacksand project material.</p><Link className="text-link" to="/businesses">Explore our businesses →</Link></div></article><section className="section container"><h2 className="related-heading">Another <em>perspective.</em></h2><ArticleCards items={articles.filter(item=>item.slug!==a.slug)} /></section></>;
}
