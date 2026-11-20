import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Search, Menu, X, ChevronDown } from 'lucide-react';
import { navigation, searchPages } from '../content';

export function Brand({ light = false }: { light?: boolean }) {
  return <Link className={`brand ${light ? 'brand-light' : ''}`} to="/" aria-label="Blacksand home"><img src="/brand/monogram.png" alt="" width="36" height="44" /><span>blacksand</span></Link>;
}
export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [query, setQuery] = useState('');
  const search = useRef<HTMLDialogElement>(null);
  const header = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const results = searchPages.filter(page => `${page.title} ${page.description}`.toLowerCase().includes(query.toLowerCase())).slice(0, 9);
  useEffect(() => { setOpen(null); setMobile(false); search.current?.close(); }, [location.pathname, location.search]);
  useEffect(() => {
    function outside(event: PointerEvent) { if (!header.current?.contains(event.target as Node)) setOpen(null); }
    function escape(event: KeyboardEvent) { if (event.key === 'Escape') { setOpen(null); setMobile(false); } }
    document.addEventListener('pointerdown', outside); document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, []);
  useEffect(() => { if (!mobile) return; const before = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = before; }; }, [mobile]);
  function submit(event: FormEvent) { event.preventDefault(); if (results[0]) { search.current?.close(); navigate(results[0].path); } }
  function showSearch() { setOpen(null); setQuery(''); search.current?.showModal(); }
  return <>
    <header className="header-wrap" ref={header} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(null); }}>
      <div className="header"><Brand /><nav aria-label="Main navigation" className="desktop-nav">{navigation.map(group => <div className="nav-group" key={group.label}><button className={`nav-trigger ${location.pathname.startsWith(group.path) ? 'active' : ''}`} onClick={() => setOpen(open === group.label ? null : group.label)} aria-expanded={open === group.label} aria-controls={`nav-${group.label.toLowerCase()}`}>{group.label}<ChevronDown size={12} /></button></div>)}</nav><div className="header-actions"><button className="icon-button search-button" onClick={showSearch} aria-label="Search website"><Search size={19} /></button><Link className="header-contact" to="/contact">Let’s talk <ArrowUpRight size={16} /></Link><button className="icon-button mobile-toggle" onClick={() => setMobile(!mobile)} aria-expanded={mobile} aria-controls="mobile-navigation" aria-label={mobile ? 'Close navigation' : 'Open navigation'}>{mobile ? <X /> : <Menu />}</button></div></div>
      {open && <div className="mega-menu" id={`nav-${open.toLowerCase()}`}><div className="mega-intro"><h2>{open}</h2></div><div className="mega-links">{navigation.find(g => g.label === open)?.children.map(([label, path]) => <NavLink to={path} key={path} end>{label}<ArrowUpRight size={17} /></NavLink>)}</div></div>}
      {mobile && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{navigation.map(group => <details key={group.label}><summary>{group.label}<ChevronDown size={18} /></summary><div>{group.children.map(([label,path])=><Link key={path} to={path}>{label}<ArrowUpRight size={16} /></Link>)}</div></details>)}<Link to="/careers">Careers <ArrowUpRight size={16} /></Link><Link to="/contact">Contact us <ArrowUpRight size={16} /></Link></nav>}
    </header>
    <dialog ref={search} className="search-dialog" aria-labelledby="search-title" onClick={event => { if (event.target === event.currentTarget) search.current?.close(); }}><div className="search-dialog-inner"><div className="search-top"><h2 id="search-title">What are you looking for?</h2><button className="icon-button" onClick={() => search.current?.close()} aria-label="Close search"><X /></button></div><form onSubmit={submit}><label htmlFor="site-query" className="sr-only">Search pages and perspectives</label><Search size={22} /><input id="site-query" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search Blacksand…" autoComplete="off" /><button className="icon-button" type="submit" aria-label="Open first search result"><ArrowRight /></button></form><p className="eyebrow">{query ? `${results.length} matching pages` : 'Explore the website'}</p><div className="search-results">{results.length ? results.map(result => <Link to={result.path} key={result.path}>{result.title}<ArrowUpRight size={18} /></Link>) : <p>No results. Try “gas”, “leadership” or “investors”.</p>}</div></div></dialog>
  </>;
}
export function Intro() {
  const [visible, setVisible] = useState(() => { try { return !sessionStorage.getItem('blacksand-intro-v2') && !matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; } });
  useEffect(() => { if (!visible) return; const timer = window.setTimeout(() => { setVisible(false); try { sessionStorage.setItem('blacksand-intro-v2','seen'); } catch { /* Optional session persistence. */ } }, 1150); return () => clearTimeout(timer); }, [visible]);
  if (!visible) return null;
  return <div className="intro" role="status" aria-label="Welcome to Blacksand"><div className="intro-brand"><img src="/brand/monogram.png" width="64" height="76" alt="" /><span>blacksand</span><div className="intro-line" /></div><button onClick={() => setVisible(false)}>Skip intro <ArrowUpRight size={14} /></button></div>;
}
export function Footer({ onOpenCookieSettings }: { onOpenCookieSettings: () => void }) {
 return <footer className="footer"><div className="container"><div className="footer-top"><h2>Let’s talk.</h2><Link className="footer-contact-link" to="/contact">Contact Blacksand <ArrowUpRight size={34}/></Link></div><div className="footer-grid"><div className="footer-brand"><Brand light/><p>Abuja, Nigeria<br/>Est. 1952</p><a className="footer-email" href="mailto:info@blacksand.com">info@blacksand.com</a></div>{navigation.slice(0,4).map(group=><div className="footer-column" key={group.label}><h3>{group.label}</h3>{group.children.slice(0,4).map(([label,path])=><Link to={path} key={path}>{label}</Link>)}</div>)}</div><div className="footer-secondary"><div><Link to="/perspectives">Perspectives</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link><Link to="/credits">Image credits</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Blacksand Plc</span><div><Link to="/privacy">Privacy</Link><button type="button" className="footer-cookie-settings" aria-haspopup="dialog" aria-controls="cookie-settings" onClick={onOpenCookieSettings}>Cookie settings</button><Link to="/terms">Terms</Link><Link to="/accessibility">Accessibility</Link><Link to="/sitemap">Sitemap</Link></div><button onClick={()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>Back to top ↑</button></div></div></footer>;
}
export function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    const frame=requestAnimationFrame(()=> { if(location.hash) { document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView(); } else { window.scrollTo(0,0); } document.getElementById('main-content')?.focus({preventScroll:true}); });
    return ()=>cancelAnimationFrame(frame);
  },[location.pathname,location.hash]);
  return null;
}
