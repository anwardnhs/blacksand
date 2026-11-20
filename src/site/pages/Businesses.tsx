import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { businesses } from '../content';
import { PageIntro, Photo, NextPage, TextLink } from '../components/UI';
import { NotFound } from './Utility';

const sectors:Record<string,string>={upstream:'Upstream',downstream:'Refining & petrochemicals','gas-power':'Gas & power',trading:'Trading & supply'};
export function Businesses(){
 return <><PageIntro label="Businesses" title={<>The companies<br/><em>behind Blacksand.</em></>} text="From exploration to delivery."/><div className="business-chapters">{businesses.map((b,i)=><section className={`business-chapter chapter-${i}`} key={b.slug}><Photo name={b.photo}/><div className="chapter-copy"><span className="sector-label">{sectors[b.slug]}</span><h2>{b.name}</h2><p>{b.description}</p><Link to={`/businesses/${b.slug}`} className="chapter-link">Explore the company <ArrowUpRight size={26}/></Link></div></section>)}</div><NextPage to="/company/global-presence" title="Across borders." link="Our global presence"/></>;
}
export function BusinessDetail(){
 const {slug}=useParams();const b=businesses.find(item=>item.slug===slug);if(!b)return <NotFound/>;
 const next=businesses[(businesses.indexOf(b)+1)%businesses.length];
 return <><section className="subsidiary-hero"><Photo name={b.photo} eager/><div className="subsidiary-shade"/><div className="container"><Link to="/businesses" className="back-link">All businesses</Link><span className="sector-label">{sectors[b.slug]}</span><h1>{b.name}</h1></div></section><section className="subsidiary-intro container"><div><span className="subsidiary-metric">{b.metric}</span><p>{b.metricLabel}</p></div><div><h2>{b.short}</h2>{b.paragraphs.map(p=><p key={p}>{p}</p>)}</div></section><section className="section container portfolio-table"><h2>Assets & operations</h2><div className="table-wrap"><table><caption className="sr-only">{b.name} asset portfolio</caption><thead><tr><th scope="col">Asset</th><th scope="col">Location</th><th scope="col">Capacity / role</th></tr></thead><tbody>{b.assets.map(a=><tr key={a.name}><th scope="row">{a.name}</th><td>{a.location}</td><td>{a.detail}</td></tr>)}</tbody></table></div></section><section className="business-responsibility"><Photo name={b.slug==='downstream'?'retail':b.slug==='gas-power'?'power':'fieldwork'}/><div><h2>How we work.</h2><p>Operational safety. Environmental care. Local relationships.</p><TextLink to="/sustainability">Our responsibilities</TextLink></div></section><NextPage title={next.name} to={`/businesses/${next.slug}`} link="Next company"/></>;
}