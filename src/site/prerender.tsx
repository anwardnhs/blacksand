import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Site } from './App';
import { getMetadata } from './components/SEO';
import { searchPages } from './content';

export const paths = [...new Set([...searchPages.map(p=>p.path.split('?')[0]),'/company/founder','/sitemap','/credits','/terms'])];
export function render(path:string) {
 return { html:renderToString(<MotionConfig reducedMotion="always"><StaticRouter location={path}><Site /></StaticRouter></MotionConfig>),metadata:getMetadata(path) };
}
