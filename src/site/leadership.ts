export const portraitNames:Record<string,string>={
 'Anwar Alhassan':'anwar',
 'Samuel Esenbhalu':'chide',
 'Femi Ayodeji':'femi',
 'Dr. Zainab Audu-Nunghe':'amina',
 'Chief Akintiola Adetokunbo, OFR':'Gemini_Generated_Image_h8mr16h8mr16h8mr',
 'Sir Harry Johnson':'chidi',
 'Dr. Catherine Cole':'Gemini_Generated_Image_8ra01z8ra01z8ra0',
 'Professor Effiong Bassey':'Gemini_Generated_Image_6vbret6vbret6vbr',
 'Dame Patricia Okoro':'adenike',
 'Sheikh Khalid Bin Rashid Al-Thani II':'sheikh-al-thani',
 'Mrs. Fatima Bello-Gwarzo':'Gemini_Generated_Image_g5iabg5iabg5iabg',
 'Engr. Abdullahi Inuwa':'babatunde',
 'James K. Roberts':'Gemini_Generated_Image_bhntzdbhntzdbhnt',
 'Amina Diop':'amina',
 'Dr. Ibrahim Bature':'Gemini_Generated_Image_750kon750kon750k',
 'Engr. Michael Okafor':'ayomide',
 'Mr. Emeka C. Nwokolo':'Gemini_Generated_Image_6nnb586nnb586nnb',
 'Aliyu Sani-Bako':'Gemini_Generated_Image_ardxopardxopardx',
 'Ms. Jennifer Nwana':'Gemini_Generated_Image_8ra01z8ra01z8ra0'
};
const profiles:Record<string,string[]>={
 'Anwar Alhassan':['Anwar Alhassan is Non-Executive Chairman of Blacksand. He leads the board’s work on group strategy, oversight and long-term direction, bringing an international perspective to a business rooted in Nigeria.','His focus is on the relationships between investment, operating performance and responsible growth. As chairman, he supports constructive debate between the board and management and keeps the group’s long-term ambitions in view.'],
 'Samuel Esenbhalu':['Samuel Esenbhalu leads the group’s businesses and is responsible for delivering Blacksand’s strategy. His remit connects exploration and production, refining, gas and power, and international trading.','Working with business leaders and regional teams, he focuses on operational reliability, commercial performance and the disciplined deployment of capital. Safety and the development of people remain central to the way the group operates.'],
 'Femi Ayodeji':['Femi Ayodeji leads Blacksand’s financial strategy and the stewardship of group resources. His responsibilities span financial planning, reporting, capital allocation and investor relations.','He works with the board and executive team to assess investment priorities and maintain a clear view of performance across the portfolio. His role connects the long-term needs of the business with financial discipline and transparent reporting.'],
 'Amina Diop':['Amina Diop oversees legal affairs and corporate secretarial responsibilities at Blacksand. She advises on governance, commercial agreements and the regulatory considerations that accompany an international energy business.','Her work supports the board and management in making informed decisions, maintaining clear corporate processes and managing legal risk across the group’s operating markets.']
};
export function biography(person:{name:string;title:string}):string[]{
 if(profiles[person.name])return profiles[person.name];
 const name=person.name.replace(/^(Dr\.|Engr\.|Mr\.|Ms\.|Mrs\.|Chief|Sir|Dame|Professor|Sheikh) /,'');
 if(/Independent|Non-Executive/.test(person.title))return [`${name} serves as ${person.title} on the Blacksand board, contributing to oversight of the group’s strategy, performance and responsibilities to stakeholders.`,/Finance|Audit/.test(person.title)?'The role brings particular attention to financial reporting, assurance and the discipline behind capital decisions. Working with fellow directors and management, the focus is on sound controls and a clear understanding of risk.':/HSE|ESG/.test(person.title)?'The role brings particular attention to operational safety, environmental stewardship and the group’s relationships with communities. These considerations help connect business performance with long-term responsibility.':'Through board discussion and review, the role supports constructive challenge, clear accountability and decisions that consider the long-term interests of the business.'];
 if(/Operating/.test(person.title))return [`${name} is responsible for operational delivery across the Blacksand portfolio, aligning the work of business units with group priorities.`,'The role focuses on asset reliability, process safety and coordination between technical teams. It also supports the sharing of operating experience across sites and the development of capabilities needed for the next stage of growth.'];
 if(/Strategy/.test(person.title))return [`${name} leads group strategy, evaluating opportunities across the energy portfolio and helping shape the business’s long-term direction.`,'Working with commercial and operating teams, the role connects market analysis, partnerships and investment priorities. The focus is on opportunities that complement Blacksand’s existing capabilities and can be delivered with discipline.'];
 const focus=/Upstream/.test(person.title)?'exploration and production':/Refining/.test(person.title)?'refining and petrochemicals':/Gas/.test(person.title)?'gas infrastructure, LNG and power':/Trading/.test(person.title)?'trading, supply and marine logistics':'new energy and emerging technologies';
 return [`${name} leads the group’s work in ${focus}, bringing together business planning, technical delivery and the needs of the markets Blacksand serves.`,'The role works closely with regional teams and group functions to build capability, assess opportunities and maintain operational discipline. Safety, responsible resource use and long-term performance guide those decisions.'];
}
