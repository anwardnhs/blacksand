import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import world from '../world-land.json';
import { regions } from '../content';

const hubs=[
 {name:'Abuja',region:0,lat:9.0765,lon:7.3986,role:'Corporate headquarters'},
 {name:'Lagos',region:0,lat:6.5244,lon:3.3792,role:'Operations headquarters'},
 {name:'Port Harcourt',region:0,lat:4.8156,lon:7.0498,role:'Refining & petrochemicals'},
 {name:'Johannesburg',region:0,lat:-26.2041,lon:28.0473,role:'Regional office'},
 {name:'Dubai',region:1,lat:25.2048,lon:55.2708,role:'Trading & investments'},
 {name:'Fujairah',region:1,lat:25.1288,lon:56.3265,role:'Refining complex'},
 {name:'London',region:2,lat:51.5072,lon:-.1276,role:'Finance & compliance'},
 {name:'Houston',region:3,lat:29.7604,lon:-95.3698,role:'Technology centre'},
 {name:'Singapore',region:4,lat:1.3521,lon:103.8198,role:'LNG sales hub'},
];
const point=(hub:typeof hubs[number])=>({x:(hub.lon+180)/360*1000,y:(85-hub.lat)*3.2});
export function WorldMap(){
 const [region,setRegion]=useState(0);
 const [selected,setSelected]=useState(0);
 const [hovered,setHovered]=useState<number|null>(null);
 const current=hubs[selected];const highlighted=hovered===null?selected:hovered;
 const origin=point(hubs[1]);
 function pick(index:number){setSelected(index);setRegion(hubs[index].region);}
 return <section className="world-network">
  <div className="network-top container"><h1>Our world.</h1><p>Operating assets. Local teams.<br/>International connections.</p></div>
  <div className="network-viewport"><svg className="network-map" viewBox="0 0 1000 510" aria-labelledby="map-title map-description">
   <title id="map-title">Blacksand global network</title><desc id="map-description">Select a city to explore our offices. All locations are also available in the buttons below the map. Connecting lines represent company relationships, not transport routes.</desc>
   <defs><pattern id="map-dots" width="4.5" height="4.5" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#899878"/></pattern><linearGradient id="route-gradient"><stop stopColor="#E4E6C3"/><stop offset="1" stopColor="#899878"/></linearGradient></defs>
   <path d={world.path} fill="url(#map-dots)" stroke="#899878" strokeWidth=".1" opacity=".66"/>
   {hubs.filter(h=>h.name!=='Lagos').map(h=>{const target=point(h);const rise=Math.min(120,Math.abs(target.x-origin.x)*.26+35);const path=`M ${origin.x},${origin.y} Q ${(origin.x+target.x)/2},${Math.min(origin.y,target.y)-rise} ${target.x},${target.y}`;return <path key={h.name} className={h.region===region?'network-route active':'network-route'} d={path} fill="none" stroke="url(#route-gradient)" strokeWidth={h.region===region?1.3:.6}/>;})}
   {hubs.map((h,i)=>{const p=point(h);return <g key={h.name} role="button" tabIndex={0} aria-label={`${h.name}: ${h.role}`} aria-pressed={selected===i} className={selected===i?'map-hub selected':'map-hub'} onClick={()=>pick(i)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick(i);}}} onPointerEnter={()=>setHovered(i)} onPointerLeave={()=>setHovered(null)} onFocus={()=>setHovered(i)} onBlur={()=>setHovered(null)}>
    <circle cx={p.x} cy={p.y} r="15" fill="transparent"/><circle className="hub-halo" cx={p.x} cy={p.y} r={selected===i?10:6} fill="#E4E6C3" opacity=".17"/><circle cx={p.x} cy={p.y} r={selected===i?4:2.8} fill="#F7F7F2"/>
    {(i===highlighted || ['London','Houston','Singapore','Johannesburg'].includes(h.name))&&<text x={p.x+10} y={p.y-11} fill="#F7F7F2" fontSize="11">{h.name}</text>}
   </g>;})}
   <text x="28" y="478" fill="#B7C1AF" fontSize="10" letterSpacing="1.5">NIGERIA → THE WORLD</text>
  </svg></div>
  <div className="network-bottom container"><div className="network-city" aria-live="polite"><MapPin size={22}/><div><h2>{current.name}</h2><p>{current.role}</p></div><span>{current.lat.toFixed(2)}° / {current.lon.toFixed(2)}°</span></div><div className="network-regions" aria-label="Choose region">{regions.map((r,i)=><button aria-pressed={region===i} key={r.name} onClick={()=>{setRegion(i);setSelected(hubs.findIndex(h=>h.region===i));}}>{r.name}<ArrowUpRight size={16}/></button>)}</div></div>
  <div className="container network-office-detail"><div><h2>{regions[region].name}</h2><p>{regions[region].text}</p><p>{regions[region].countries}</p></div><div className="network-office-buttons">{hubs.map((h,i)=>h.region===region&&<button aria-pressed={i===selected} key={h.name} onClick={()=>pick(i)}><span>{h.name}<small>{h.role}</small></span><ArrowUpRight size={20}/></button>)}</div></div>
 </section>;
}
