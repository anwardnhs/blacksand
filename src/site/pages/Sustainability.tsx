import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { priorities } from '../content';
import { PageIntro, Photo, NextPage, TextLink } from '../components/UI';
import { NotFound } from './Utility';
export function Sustainability(){
 return <><PageIntro label="Sustainability" title={<>Our work.<br/><em>Our responsibility.</em></>} text="For the people and places that make our business possible."/><div className="sustainability-cover"><Photo name="forest" eager/><div><h2>Progress is<br/><em>shared.</em></h2></div></div><section className="section container sustainability-intro"><h2>Responsibility<br/>in practice.</h2><p>From the water we use to the safety of our people, our decisions have an impact. We focus on practical improvements in how we operate and on lasting relationships with the communities around us.</p></section><section className="container sustainability-grid">{priorities.map(p=><Link className="priority-card" to={`/sustainability/${p.slug}`} key={p.slug}><Photo name={p.slug==='communities'?'workers':p.slug==='safety'?'fieldwork':'wind'}/><div><h3>{p.title}</h3><p>{p.description}</p><span className="text-link">Our approach <ArrowUpRight size={22}/></span></div></Link>)}</section><NextPage title="Sustainability enquiries." to="/contact?topic=sustainability" link="Talk to the team"/></>;
}
export function SustainabilityDetail(){
 const {slug}=useParams();const p=priorities.find(item=>item.slug===slug);if(!p)return <NotFound/>;
 return <><PageIntro label={p.title} title={p.title} text={p.description} photo={p.slug==='communities'?'workers':p.slug==='safety'?'fieldwork':p.photo}/><section className="section container governance-rows">{p.items.map(item=><div key={item.title}><h2>{item.title}</h2><p>{item.body}</p></div>)}</section><section className="section soft-section"><div className="container split-copy"><h2>Talk to us.</h2><div><p>For questions about an operating site, include the location and business relevant to your enquiry.</p><TextLink to="/contact?topic=sustainability">Contact the team</TextLink></div></div></section><NextPage to="/sustainability" title="Our responsibility." link="All priorities"/></>;
}
