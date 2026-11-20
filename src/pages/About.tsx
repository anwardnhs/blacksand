/**
 * about.tsx
 *
 * (FINAL VERSION - PATH B: HYBRID)
 *
 * This component is a "clone" of the oandoplc.com/about-us page UI,
 * but it is populated with the OFFICIAL "Blacksand Plc" corporate profile.
 *
 * - FONT: Simulates 'Millik' (with font-serif) and 'Manrope' (with font-sans).
 * - COLOR: Uses Oando's green color scheme (e.g., #006c42).
 * - COMPONENTS: Custom-styled to match the clone.
 * - CONTENT: Uses the official, detailed corporate profile provided by the user.
 */

import React, { useState, ReactNode } from 'react';
import {
  LuTrendingUp,
  LuCalendar,
  LuShield,
  LuZap,
  LuArrowRight,
  LuUser,
} from 'react-icons/lu';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';

// --- (OANDO CLONE) BRAND COLORS ---
const OANDO_GREEN = '#006c42';
const OANDO_TEXT_GRAY = '#333333';
const OANDO_LIGHT_GRAY_BG = '#f4f4f4';

// --- TYPES ---

interface Generation {
  id: number;
  generation: string;
  name: string;
  title: string;
  image: string;
  summary: ReactNode; // Can include JSX for bullet points
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Subsidiary {
  name: string;
  description: string;
  icon: React.ElementType;
}

interface Leader {
  name: string;
  title: string;
  image: string;
  bio: string;
}

interface FinancialStat {
  metric: string;
  value: string;
}

interface BoardMember {
  name: string;
  title: string;
  type: 'Executive' | 'Independent' | 'Non-Independent';
}

interface Executive {
  name: string;
  title: string;
}

// --- ANIMATION UTILITY ---

const FadeInWhenVisible = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- DATA MOCKS (FROM OFFICIAL PROFILE) ---

const generations: Generation[] = [
  {
    id: 1,
    generation: '1ST GENERATION: THE FOUNDER',
    name: 'Alhaji Ibrahim Alhassan CFR (1927– 2009)',
    title: 'Founder & MD (1952–1991); Chairman (1991-2007)',
    image: '/images/alhaji.png', // Placeholder image
    summary: (
      <>
        <p className="mb-4">
          Born in Kano State, Ibrahim represents the pioneering generation of
          Northern Nigerian industrialists. Beginning as a small-scale fuel
          merchant in the 1940s, he established Blacksand Oil Company Limited in
          1952 with initial capital of £8,000.
        </p>
        <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Acquired first exploration license in the Niger Delta (1978).</li>
          <li>Constructed Storage and Product Depot in Kaduna (1982).</li>
          <li>
            First Northern-owned enterprise to attain a federal crude oil lifting
            contract.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    generation: '2ND GENERATION: THE EXPANSION ERA',
    name: 'Abdallah Alhassan CON (1950 – 2020)',
    title: 'GCEO (1991–2007); Chairman (2007-2020)',
    image: '/images/abdallah.png', // Placeholder image
    summary: (
      <>
        <p className="mb-4">
          An engineer and economist (University of Lagos, Stanford University),
          Abdallah transformed Blacksand from a domestic player into a
          pan-African integrated energy conglomerate, bringing technical
          expertise and a global outlook.
        </p>
        <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Initiated massive expansions in refining and partnerships.</li>
          <li>
            Diversified into gas and petrochemicals during the 2014-2016 oil
            price collapse.
          </li>
          <li>Secured strategic offshore blocks in Angola (2012).</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    generation: '3RD GENERATION: GLOBALIZATION ERA',
    name: 'Anwar Alhassan (Born 1974)',
    title: 'Chairman (2020 - Present); Regional President (2016-2020)',
    image: '/images/anwar.png', // Placeholder image
    summary: (
      <>
        <p className="mb-4">
          Anwar ascended to the Chairmanship in 2020. With a B.Eng. from Ahmadu
          Bello University and a Master’s from Harvard Kennedy School, he guides
          the company's global strategy.
        </p>
        <h4 className="font-semibold text-gray-800 mb-2">
          Leadership Achievements:
        </h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Led landmark secondary listing on the London Stock Exchange (2023).</li>
          <li>Navigated COVID-19 pandemic impacts on global energy demand.</li>
          <li>Championed expansion into renewable energy investments.</li>
          <li>Maintained family legacy while professionalizing governance.</li>
        </ul>
      </>
    ),
  },
];

const milestones: Milestone[] = [
  { year: '1952', title: 'Pioneer Era Begins', description: 'Blacksand Oil Company Limited founded by Alhaji Ibrahim Alhassan CFR in Kano.' },
  { year: '1978', title: 'First Upstream Asset', description: 'Acquired first indigenous onshore exploration license (OML) in the Niger Delta Basin.' },
  { year: '1982', title: 'Domestic Infrastructure', description: 'Completed construction of a major national Storage and Product Depot in Kaduna.' },
  { year: '1991', title: 'Expansion Era & Landmark IPO', description: 'Abdallah Alhassan appointed GCEO. Blacksand Oil Company Plc. lists on the Nigerian Stock Exchange.' },
  { year: '1995', title: 'Offshore Entry', description: 'Entered offshore drilling operations and made the first oil discovery in the Okiri Deep Field.' },
  { year: '2004', title: 'Trading & Midstream', description: 'Established Blacksand Global Trading FZE in Dubai and Blacksand LNG Ltd.' },
  { year: '2005', title: 'Downstream Flagship', description: 'Commissioning of the first phase of the Blacksand Petrochemical Complex in Port Harcourt.' },
  { year: '2007', title: 'Leadership Transition', description: 'Samuel Esenbhalu appointed GCEO; Abdallah Alhassan becomes Non-Executive Chairman.' },
  { year: '2012', title: 'International Upstream M&A', description: 'Acquired 51% controlling interest in Azura E&P Angola Ltd. for $3.5 billion.' },
  { year: '2017', title: 'Middle East Expansion', description: 'Completed $6 billion greenfield Blacksand Fujairah Refining & Petrochemicals facility.' },
  { year: '2019', title: 'Corporate Rebranding', description: 'Name officially changed to Blacksand Plc., reflecting its multinational holding structure.' },
  { year: '2020', title: 'Globalization Era', description: 'Anwar Alhassan appointed Chairman. Company successfully navigated COVID-19.' },
  { year: '2023', title: 'Global Listing & Gas Expansion', description: 'Achieved landmark secondary listing on the London Stock Exchange (LSE: BLSD). Acquired 60% stake in WestGas Infrastructure Ghana Ltd.' },
  { year: '2024', title: 'Logistics Alliance', description: 'Finalized the 45% strategic alliance with Helios Marine Logistics B.V.' },
];

const subsidiaries: Subsidiary[] = [
  { name: 'Upstream', description: 'Exploration & Production (Nigeria, Angola, Egypt, Ghana)', icon: LuTrendingUp },
  { name: 'Downstream & Refining', description: 'Refining & Petrochemicals (Port Harcourt, Fujairah, Morocco)', icon: LuShield },
  { name: 'Gas & Power', description: 'LNG Export & Regional Gas Distribution (Okoloba, WestGas)', icon: LuZap },
  { name: 'Trading & Supply', description: 'Global Trading, Shipping, and Logistics (Dubai, London)', icon: LuArrowRight },
];

const leaders: Leader[] = [
  {
    name: 'Anwar Alhassan',
    title: 'Non-Executive Chairman',
    image: '/images/anwar.png', // Placeholder
    bio: 'Anwar Alhassan is the Non-Executive Chairman of Blacksand Plc and Danhassan Holdings Ltd. He ascended to the Chairmanship in 2020, guiding the company’s global strategy, LSE listing, and energy transition investments.',
  },
  {
    name: 'Samuel Esenbhalu',
    title: 'Group Chief Executive Officer',
    image: '/images/samuel.png', // Placeholder
    bio: 'As GCEO, Samuel oversees all global operations. A longtime executive, he manages the company’s performance, strategy implementation, and day-to-day operational excellence across all divisions.',
  },
];

const financialStats: FinancialStat[] = [
  { metric: 'Revenue', value: '$58.4 billion' },
  { metric: 'Net Income', value: '$6.5 billion' },
  { metric: 'EBITDA', value: '$14.5 billion' },
  { metric: 'Total Assets', value: '$128.7 billion' },
  { metric: 'Market Capitalization', value: '$96 billion' },
  { metric: 'Global Workforce', value: '52,400' },
  { metric: 'Debt-to-equity', value: '0.56x' },
  { metric: 'Credit Rating (S&P)', value: 'BBB+ (stable)' },
];

const boardMembers: BoardMember[] = [
  { name: 'Anwar Alhassan', title: 'Non-Executive Chairman', type: 'Non-Independent' },
  { name: 'Samuel Esenbhalu', title: 'Group CEO & Executive Director', type: 'Executive' },
  { name: 'Femi Ayodeji', title: 'Group CFO & Executive Director', type: 'Executive' },
  { name: 'Dr. Zainab Audu-Nunghe', title: 'Lead Independent Director', type: 'Independent' },
  { name: 'Chief Akintiola Adetokunbo, OFR', title: 'Independent Director (Governance)', type: 'Independent' },
  { name: 'Sir Harry Johnson', title: 'Independent Director (Finance & Audit)', type: 'Independent' },
  { name: 'Dr. Catherine Cole', title: 'Independent Director (HSE & ESG)', type: 'Independent' },
  { name: 'Professor Effiong Bassey', title: 'Independent Director', type: 'Independent' },
  { name: 'Dame Patricia Okoro', title: 'Independent Director', type: 'Independent' },
  { name: 'Sheikh Khalid Bin Rashid Al-Thani II', title: 'Non-Executive Director (QIA)', type: 'Non-Independent' },
  { name: 'Mrs. Fatima Bello-Gwarzo', title: 'Non-Executive Director', type: 'Non-Independent' },
];

const executives: Executive[] = [
  { name: 'Samuel Esenbhalu', title: 'Group Chief Executive Officer' },
  { name: 'Engr. Abdullahi Inuwa', title: 'Group Chief Operating Officer' },
  { name: 'Femi Ayodeji', title: 'Group Chief Financial Officer' },
  { name: 'James K. Roberts', title: 'Chief Strategy Officer (CSO)' },
  { name: 'Amina Diop', title: 'General Counsel & Corporate Secretary' },
  { name: 'Dr. Ibrahim Bature', title: 'EVP, Upstream' },
  { name: 'Engr. Michael Okafor', title: 'EVP, Downstream & Refining' },
  { name: 'Mr. Emeka C. Nwokolo', title: 'EVP, Gas & Power' },
  { name: 'Aliyu Sani-Bako', title: 'EVP, Trading & Supply' },
  { name: 'Ms. Jennifer Nwana', title: 'EVP, New Energy' },
];


// --- PAGE SECTIONS (CLONE STYLED + OFFICIAL CONTENT) ---

/**
 * SECTION 1: About Hero
 * Cloned to use a video background, 'Millik' font.
 */
const AboutHero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        poster="/images/refinery2.jpg" // Blacksand poster
      >
        <source src="/videos/chairman.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 px-6">
        {/* FONT-CLONE: 'font-serif' is a stand-in for 'Millik' */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif tracking-tight leading-tight">
          About Blacksand Plc
        </h1>
        {/* FONT-CLONE: 'font-sans' is a stand-in for 'Manrope' */}
        <p className="text-xl md:text-2xl text-white/90 font-sans mt-4">
          Africa's Integrated Energy Leader, Powering the Future
        </p>
      </div>
    </div>
  );
};

/**
 * SECTION 2: Corporate Overview
 * Updated with official text and new "Headquarters" section.
 */
const CorporateOverview = () => {
  const offices = [
    { name: 'West Africa', location: 'Lagos (Operations HQ)' },
    { name: 'Southern Africa', location: 'Johannesburg, South Africa' },
    { name: 'Middle East', location: 'Dubai, UAE (Trading)' },
    { name: 'Europe', location: 'London, UK (Finance)' },
    { name: 'Asia-Pacific', location: 'Singapore (LNG Sales)' },
    { name: 'North America', location: 'Houston, TX (Tech)' },
  ];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className={`text-[${OANDO_TEXT_GRAY}] font-sans`}>
              {/* FONT-CLONE: Heading uses 'font-serif' (Millik) */}
              <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#000]">
                Corporate Overview
              </h2>

              <p className="mt-6 text-lg leading-relaxed">
                Blacksand Plc is a Nigerian multinational energy conglomerate
                headquartered in Abuja, with integrated operations spanning oil
                and gas exploration and production, refining and petrochemicals,
                and emerging energy solutions across Africa, the Middle East, and
                select international markets.
              </p>
              <p className="mt-4 text-base text-gray-700">
                Founded in 1952 by Alhaji Ibrahim Alhassan CFR, the company has
                evolved from a modest petroleum distribution business into one of
                Africa's largest publicly listed energy companies, with dual
                listings on the Nigerian Exchange (NGX: BLSD) and the London
                Stock Exchange (LSE: BLSD).
              </p>
            </div>

            {/* Right Column: HQ Info */}
            <div className={`h-full w-full bg-[${OANDO_LIGHT_GRAY_BG}] p-8 rounded-lg`}>
              <h3 className="text-2xl font-bold font-serif text-[#000] mb-4">
                Corporate Headquarters
              </h3>
              <p className="font-sans text-base text-gray-700">
                Blacksand Towers, Plot 1 Energy Drive
                <br />
                Central Business District, Abuja 900211
                <br />
                Federal Republic of Nigeria
              </p>
              <div className="mt-4 space-x-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  NGX: BLSD
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  LSE: BLSD
                </span>
              </div>
            </div>
          </div>

          {/* Regional Offices Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold font-serif text-[#000] mb-8 text-center">
              Regional Headquarters & Key Offices
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {offices.map((office) => (
                <div key={office.name} className={`bg-[${OANDO_LIGHT_GRAY_BG}] p-4 rounded-lg shadow-sm`}>
                  <p className="font-sans font-semibold text-base text-[#000]">
                    {office.name}
                  </p>
                  <p className="font-sans text-sm text-gray-600">
                    {office.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

/**
 * SECTION 3: Financial Highlights (NEW)
 * Cloned from Oando's "By the numbers" style.
 */
const FinancialHighlights = () => {
  return (
    <section className={`py-20 lg:py-28 bg-[${OANDO_GREEN}] text-white`}>
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif tracking-tight">
              By The Numbers
            </h2>
            <p className="mt-6 text-lg text-white/90 font-sans">
              Financial Highlights (FY2024). All values in USD.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {financialStats.map((stat) => (
              <div
                key={stat.metric}
                className="bg-white/10 p-6 rounded-lg text-center"
              >
                {/* FONT-CLONE: 'font-serif' (Millik) for value */}
                <h3 className="text-3xl font-bold font-serif text-white">
                  {stat.value}
                </h3>
                {/* FONT-CLONE: 'font-sans' (Manrope) for label */}
                <p className="mt-2 text-base font-sans text-white/80">
                  {stat.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};


/**
 * SECTION 4: Our Heritage
 * Updated with official 3-generation content.
 */
const OurHeritage = () => {
  const [activeGen, setActiveGen] = useState<Generation>(generations[0]);

  return (
    <section id="legacy" className="py-20 lg:py-28 bg-white">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-4xl lg:text-5xl font-bold font-serif text-[#000] tracking-tight`}>
              The Alhassan Legacy
            </h2>
            <p className={`mt-6 text-lg text-[${OANDO_TEXT_GRAY}] font-sans`}>
              Three generations of energy leadership have guided the company
              from a regional trading operation to a multinational energy
              conglomerate.
            </p>
          </div>

          {/* Tab Headers */}
          <div className={`mt-12 flex flex-col sm:flex-row justify-center border-b border-gray-300`}>
            {generations.map((gen) => (
              <button
                key={gen.id}
                onClick={() => setActiveGen(gen)}
                className={`w-full sm:w-auto px-6 py-3 text-base font-sans font-semibold transition-all -mb-px
                  ${
                    activeGen.id === gen.id
                      ? `text-[${OANDO_GREEN}] border-b-2 border-[${OANDO_GREEN}]`
                      : `text-gray-500 hover:text-gray-800`
                  }`}
              >
                {gen.generation}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-12 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGen.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* 1. Portrait */}
                <div className="lg:col-span-1">
                  <img
                    src={activeGen.image}
                    alt={activeGen.name}
                    className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/5]"
                  />
                </div>
                {/* 2. Info */}
                <div className={`lg:col-span-1 font-sans text-[${OANDO_TEXT_GRAY}]`}>
                  <h3 className="text-3xl font-bold font-serif text-[#000]">
                    {activeGen.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-600">
                    {activeGen.title}
                  </p>
                  <div className="mt-4 text-base text-gray-700">
                    {activeGen.summary}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

/**
 * SECTION 5: Leadership Overview
 * Updated with official bios for Anwar and Samuel.
 */
const LeadershipOverview = () => {
  return (
    <section className={`py-20 lg:py-28 bg-[${OANDO_LIGHT_GRAY_BG}]`}>
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#000] tracking-tight">
              Guided by Vision & Experience
            </h2>
            <p className={`mt-6 text-lg text-[${OANDO_TEXT_GRAY}] font-sans`}>
              Blacksand is led by a world-class board and executive team,
              blending a legacy of wisdom with deep operational expertise.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-lg shadow-2xl overflow-hidden"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-8 font-sans">
                  <h3 className="text-3xl font-bold font-serif text-[#000]">
                    {leader.name}
                  </h3>
                  <p className={`mt-1 text-lg font-medium text-[${OANDO_GREEN}]`}>
                    {leader.title}
                  </p>
                  <p className={`mt-4 text-[${OANDO_TEXT_GRAY}]`}>
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};


/**
 * SECTION 6: Our Businesses (f.k.a. Subsidiaries)
 * Updated with the 4 main divisions.
 */
const OurBusinesses = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#000] tracking-tight">
              Our Businesses
            </h2>
            <p className={`mt-6 text-lg text-[${OANDO_TEXT_GRAY}] font-sans`}>
              Blacksand operates through specialized subsidiaries, each driving
              innovation and excellence in their domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subsidiaries.map((sub) => (
              <div
                key={sub.name}
                className={`bg-[${OANDO_LIGHT_GRAY_BG}] p-6 rounded-lg shadow-lg border-t-4 border-[${OANDO_GREEN}]`}
              >
                <sub.icon className={`w-12 h-12 text-[${OANDO_GREEN}] mb-4`} />
                <h3 className="text-2xl font-bold font-serif text-[#000] mb-2">
                  {sub.name}
                </h3>
                <p className={`text-base font-sans text-[${OANDO_TEXT_GRAY}]`}>
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};


/**
 * SECTION 7: Governance (NEW)
 * New component for Board, Execs, and Shareholding.
 */
const Governance = () => {
  return (
    <section className={`py-20 lg:py-28 bg-[${OANDO_LIGHT_GRAY_BG}]`}>
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#000] tracking-tight">
              Governance & Leadership
            </h2>
            <p className={`mt-6 text-lg text-[${OANDO_TEXT_GRAY}] font-sans`}>
              Operating with integrity and transparency, guided by a diverse
              and experienced board and executive management team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Column 1: Board & Shareholding */}
            <div>
              <h3 className="text-3xl font-bold font-serif text-[#000] mb-6">
                Board of Directors
              </h3>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-300">
                  {boardMembers.map((person) => (
                    <li key={person.name} className="flex items-center py-4 space-x-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white bg-[${OANDO_GREEN}]`}>
                        <LuUser className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold font-sans text-gray-900 truncate">
                          {person.name}
                        </p>
                        <p className="text-sm font-sans text-gray-600 truncate">
                          {person.title}
                        </p>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${person.type === 'Independent' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700'}`}>
                        {person.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-3xl font-bold font-serif text-[#000] mt-12 mb-6">
                Major Shareholding
              </h3>
              <div className="font-sans text-base text-gray-700 space-y-2">
                <p><strong>Danhassan Holdings Ltd:</strong> 12%</p>
                <p><strong>Alhassan Family Investment Trust:</strong> 8%</p>
                <p><strong>Strategic/Anchor Institutional Investors:</strong> 16%</p>
                <p><strong>Global Passive Funds:</strong> 8%</p>
                <p><strong>Public Float (NGX/LSE) & Retail:</strong> 56%</p>
              </div>
            </div>

            {/* Column 2: Senior Executives */}
            <div>
              <h3 className="text-3xl font-bold font-serif text-[#000] mb-6">
                Senior Executive Leadership
              </h3>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-300">
                  {executives.map((person) => (
                    <li key={person.name} className="flex items-center py-4 space-x-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white bg-[${OANDO_TEXT_GRAY}]`}>
                        <LuUser className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold font-sans text-gray-900 truncate">
                          {person.name}
                        </p>
                        <p className="text-sm font-sans text-gray-600 truncate">
                          {person.title}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};


/**
 * SECTION 8: Blacksand Foundation
 * Updated with official text.
 */
const BlacksandFoundation = () => {
  return (
    <section className={`py-20 lg:py-28 bg-[${OANDO_GREEN}] text-white`}>
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Column 1: Text Content */}
            <div className="font-sans">
              <h2 className="text-4xl lg:text-5xl font-bold font-serif tracking-tight">
                Blacksand Foundation
              </h2>
              <p className="mt-6 text-lg text-white/90">
                • <span className="font-semibold">Executive Director:</span> Chiamaka O.Ezechi
                <br />
                • <span className="font-semibold">Focus Areas:</span> Education, Healthcare, Energy Access (Rural Electrification), and Community Development.
                <br />
                • <span className="font-semibold">2024 CSR Investment:</span> $135 million across Nigeria, Ghana, Angola, and other operational territories.
              </p>
              <a
                href="/foundation"
                className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-white group"
              >
                Learn More About Our Initiatives
                <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Column 2: Video (re-using for visual) */}
            <div className="h-full w-full">
              <video
                src="/videos/chairman.mp4" // Placeholder video path
                controls
                className="rounded-lg shadow-xl object-cover w-full h-full max-h-[450px]"
                poster="/images/wind.jpg" // Poster image
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

/**
 * SECTION 9: Corporate Timeline
 * Updated with official timeline data.
 */
const CorporateTimeline = () => {
  return (
    <section id="timeline" className="py-20 lg:py-28 bg-white">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#000] mb-4">
              Our History
            </h2>
            <p className={`text-xl text-[${OANDO_TEXT_GRAY}] font-sans max-w-3xl mx-auto`}>
              From a modest 1952 startup to a multinational energy conglomerate
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-8 items-start">
                
                {/* 1. Year */}
                <div className="text-2xl md:text-3xl font-bold font-serif text-[#000] md:text-right">
                  {milestone.year}
                </div>

                {/* 2. Timeline Icon and Line */}
                <div className="flex md:flex-col items-center h-full">
                  <div className={`w-8 h-8 bg-[${OANDO_GREEN}] rounded-full flex items-center justify-center shadow-lg z-10`}>
                    <LuCalendar className="w-4 h-4 text-white" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className={`w-0.5 h-full bg-[${OANDO_GREEN}]/30 md:flex-1 -mt-1`}></div>
                  )}
                </div>

                {/* 3. Content */}
                <div className="pb-8">
                  <h3 className="text-xl font-bold font-sans text-gray-800">
                    {milestone.title}
                  </h3>
                  <p className={`mt-2 text-base font-sans text-[${OANDO_TEXT_GRAY}]`}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};


/**
 * MAIN PAGE COMPONENT
 * Assembles all the "cloned" sections with official content.
 */
const About = () => {
  return (
    <div className={`min-h-screen bg-white font-sans text-[${OANDO_TEXT_GRAY}]`}>
      <AboutHero />
      <CorporateOverview />
      <FinancialHighlights />
      <OurHeritage />
      <LeadershipOverview />
      <OurBusinesses />
      <CorporateTimeline />
    </div>
  );
};

export default About;