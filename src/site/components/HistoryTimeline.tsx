import { Link } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';
import { milestones } from '../content';
import './history-timeline.css';

const eras = [
  {
    start: 1952,
    end: 1982,
    title: 'Building in Nigeria',
    summary: 'From petroleum distribution in Kano, Blacksand moved into exploration in the Niger Delta and invested in storage in Kaduna.',
    markerY: 66,
  },
  {
    start: 1991,
    end: 2007,
    title: 'Expanding the business',
    summary: 'A stock market listing and a move offshore were followed by new businesses in trading, LNG and petrochemicals.',
    markerY: 52,
  },
  {
    start: 2012,
    end: 2019,
    title: 'Growing across borders',
    summary: 'Investment in Angola and Fujairah widened the group’s reach. The Blacksand Plc name reflected its new multinational structure.',
    markerY: 39,
  },
  {
    start: 2020,
    end: 2024,
    title: 'Connecting markets',
    summary: 'Under Anwar Alhassan’s chairmanship, the group expanded its gas infrastructure interests and added a marine logistics alliance.',
    markerY: 26,
  },
];

const markers = eras.map(({ markerY }, index) => ({ x: 125 + index * 250, y: markerY * 2.2 }));
const route = [{ x: 0, y: 159 }, ...markers, { x: 1000, y: 43 }].reduce((path, point, index, points) => {
  if (index === 0) return `M ${point.x} ${point.y}`;
  const previous = points[index - 1];
  const middle = (previous.x + point.x) / 2;
  return `${path} C ${middle} ${previous.y} ${middle} ${point.y} ${point.x} ${point.y}`;
}, '');

export function HistoryTimeline() {
  return <>
    <section className="history-hero" aria-labelledby="history-title">
      <div className="container history-hero-inner">
        <nav className="history-crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span aria-hidden="true">/</span>
          <Link to="/company">Company</Link><span aria-hidden="true">/</span>
          <span aria-current="page">History</span>
        </nav>
        <div className="history-heading">
          <h1 id="history-title">Built over<br /><em>generations.</em></h1>
          <p>From a petroleum distributor in Kano to an energy group working across borders. Explore the milestones that shaped Blacksand.</p>
        </div>
        <nav className="history-eras" aria-label="Jump to a period in Blacksand’s history">
          <svg viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <pattern id="history-grid" width="12.5" height="12.5" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="#899878" opacity=".45" />
              </pattern>
              <linearGradient id="history-light">
                <stop stopColor="#899878" />
                <stop offset=".58" stopColor="#e4e6c3" />
                <stop offset="1" stopColor="#a6b397" />
              </linearGradient>
            </defs>
            <rect width="1000" height="220" fill="url(#history-grid)" />
            {markers.map(({ x, y }) => <path key={x} d={`M ${x} ${y} V 220`}
              stroke="#899878" strokeOpacity=".6" strokeDasharray="3 6" vectorEffect="non-scaling-stroke" />)}
            <path d={route} fill="none" stroke="#899878" strokeWidth="14" opacity=".14" vectorEffect="non-scaling-stroke" />
            <path d={route} fill="none" stroke="url(#history-light)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          {eras.map((era, index) => <a className="history-era-link" key={era.start} href={`#history-${era.start}`}
            style={{ left: `${markers[index].x / 10}%`, top: `${era.markerY}%` }}
            aria-label={`${era.start} to ${era.end}: ${era.title}`}>
            <span className="history-era-marker" aria-hidden="true" />
            <span className="history-era-label">{era.start}<ArrowDownRight size={15} aria-hidden="true" /></span>
            <span className="history-era-caption">{era.title}</span>
          </a>)}
        </nav>
      </div>
    </section>
    <div className="container history-chapters">
      {eras.map(era => <section className="history-chapter" id={`history-${era.start}`} key={era.start}
        aria-labelledby={`history-heading-${era.start}`}>
        <div className="history-chapter-intro">
          <p className="history-range">{era.start}–{era.end}</p>
          <h2 id={`history-heading-${era.start}`}>{era.title}</h2>
          <p>{era.summary}</p>
        </div>
        <ol className="history-milestones" role="list">
          {milestones.filter(({ year }) => Number(year) >= era.start && Number(year) <= era.end)
            .map(({ year, title, description }) => <li className="history-milestone" key={`${year}-${title}`}>
              <time dateTime={year}>{year}</time>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>)}
        </ol>
      </section>)}
    </div>
  </>;
}
