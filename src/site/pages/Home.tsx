import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { financials } from '../content';
import { Photo, TextLink, BusinessCards, ArticleCards, Metrics } from '../components/UI';

export default function Home(){
 return <>
 <section className="home-hero hero-v3"><Photo name="refinery" eager className="hero-photo"/><div className="hero-shade"/><div className="hero-content container"><h1>Energy.<br/><em>In motion.</em></h1><div className="hero-bottom"><p>We produce, refine and move the energy<br/>that keeps economies working.</p><Link className="hero-cta" to="/businesses">Our businesses <span className="round-arrow"><ArrowUpRight size={27}/></span></Link></div><a className="hero-scroll" href="#introduction" aria-label="Explore Blacksand"><ArrowDown size={23}/></a></div></section>
 <section id="introduction" className="section container home-statement"><div className="statement-origin"><span>1952</span><p>Founded in Nigeria.</p></div><div><h2>Local knowledge.<br/><em>Far-reaching ambition.</em></h2><p>From a petroleum distribution business to operations across Africa and the Middle East, Blacksand brings more than seven decades of experience to the world’s energy needs.</p><TextLink to="/company">The Blacksand story</TextLink></div></section>
 <section className="home-businesses container"><div className="plain-heading"><h2>Our businesses</h2><TextLink to="/businesses">View the portfolio</TextLink></div><BusinessCards compact/></section>
 <section className="people-feature"><Photo name="workers"/><div className="people-feature-copy"><h2>The people<br/><em>behind the energy.</em></h2><p>Engineers. Operators. Problem solvers.<br/>The expertise that makes our business work.</p><TextLink to="/careers">Working at Blacksand</TextLink></div></section>
 <section className="home-responsibility container"><div className="responsibility-title"><h2>Our future<br/>is <em>shared.</em></h2><TextLink to="/sustainability">Sustainability</TextLink></div><div className="responsibility-photo"><Photo name="forest"/><div className="responsibility-note"><p>Protecting people.<br/>Respecting the places<br/>we work.</p><Link to="/sustainability/safety" aria-label="Safety and wellbeing"><ArrowUpRight size={30}/></Link></div></div></section>
 <section className="home-investors"><div className="container"><div className="plain-heading"><h2>For the<br/><em>long term.</em></h2><TextLink to="/investors">Investor relations</TextLink></div><Metrics items={financials.slice(0,3)}/><p className="financial-period">FY2024 · USD · Historical figures, pending verification.</p></div></section>
 <section className="section container"><div className="plain-heading"><h2>Perspectives</h2><TextLink to="/perspectives">Read more</TextLink></div><ArticleCards/></section>
 </>;
}