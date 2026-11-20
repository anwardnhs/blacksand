import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Header, Footer, Intro, RouteEffects } from './components/Shell';
import { SEO } from './components/SEO';
import Home from './pages/Home';
import { Company, Leadership, Governance, History, Founder, GlobalPresence } from './pages/Company';
import { Businesses, BusinessDetail } from './pages/Businesses';
import { Sustainability, SustainabilityDetail } from './pages/Sustainability';
import { Investors, Financials, Reports } from './pages/Investors';
import { Perspectives, Article } from './pages/Editorial';
import { Contact, Careers, Sitemap, Credits, Policy, NotFound } from './pages/Utility';

export function Site() {
 const location=useLocation();
 return <><SEO /><RouteEffects /><a className="skip-link" href="#main-content">Skip to content</a><Header /><Intro /><main id="main-content" tabIndex={-1} key={location.pathname}>
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/company" element={<Company />} />
   <Route path="/company/leadership" element={<Leadership />} />
   <Route path="/company/governance" element={<Governance />} />
   <Route path="/company/history" element={<History />} />
   <Route path="/company/founder" element={<Founder />} />
   <Route path="/company/global-presence" element={<GlobalPresence />} />
   <Route path="/businesses" element={<Businesses />} />
   <Route path="/businesses/:slug" element={<BusinessDetail />} />
   <Route path="/sustainability" element={<Sustainability />} />
   <Route path="/sustainability/:slug" element={<SustainabilityDetail />} />
   <Route path="/investors" element={<Investors />} />
   <Route path="/investors/financials" element={<Financials />} />
   <Route path="/investors/reports" element={<Reports />} />
   <Route path="/perspectives" element={<Perspectives />} />
   <Route path="/perspectives/:slug" element={<Article />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/careers" element={<Careers />} />
   <Route path="/sitemap" element={<Sitemap />} />
   <Route path="/credits" element={<Credits />} />
   <Route path="/privacy" element={<Policy kind="privacy" />} />
   <Route path="/terms" element={<Policy kind="terms" />} />
   <Route path="/accessibility" element={<Policy kind="accessibility" />} />
   <Route path="/about" element={<Navigate to="/company" replace />} />
   <Route path="/leadership" element={<Navigate to="/company/leadership" replace />} />
   <Route path="/founder-profile" element={<Navigate to="/company/founder" replace />} />
   <Route path="/operations" element={<Navigate to="/businesses" replace />} />
   <Route path="/timeline" element={<Navigate to="/company/history" replace />} />
   <Route path="/global-presence" element={<Navigate to="/company/global-presence" replace />} />
   <Route path="*" element={<NotFound />} />
  </Routes>
 </main><Footer /></>;
}
export default function App(){return <MotionConfig reducedMotion="user"><BrowserRouter><Site /></BrowserRouter></MotionConfig>;}
