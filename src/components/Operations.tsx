import { Droplet, Truck, Factory, Flame, Globe, Anchor, MapPin, Users, Award, TrendingUp, Zap, Shield } from 'lucide-react';

export default function Operations() {
  const segments = [
    {
      id: 'upstream',
      title: 'Blacksand Upstream',
      subtitle: 'Exploration & Production',
      description: 'Our Upstream division balances a high-margin portfolio between OPEC+ and non-OPEC jurisdictions, giving us flexible production capacity to manage global supply dynamics.',
      stats: [
        { label: 'Total Production', value: '685,000 boe/d' },
        { label: 'Proven Reserves', value: '5.8 billion boe' },
        { label: 'OPEC+ Mix', value: '45%' },
      ],
      details: [
        { title: 'Angola Offshore Blocks (BS-07, BS-08)', value: '210,000 boe/d' },
        { title: 'Niger Delta Fields', value: '195,000 boe/d' },
        { title: 'Egypt Western Desert Fields', value: '155,000 boe/d' },
        { title: 'Oman Gas Condensate JV', value: '80,000 boe/d' },
        { title: 'Ghana Jubilee Field Stake', value: '15% (45,000 boe/d)' },
      ],
      icon: Droplet,
      color: 'bg-blue-600',
      imagePlaceholderColor: 'bg-blue-900/20',
    },
    {
      id: 'downstream',
      title: 'Downstream & Midstream',
      subtitle: 'Refining, Retail & Logistics',
      description: 'A vertically integrated network spanning refining, petrochemicals, and a vast retail footprint across Africa and the Middle East.',
      stats: [
        { label: 'Refining Capacity', value: '655,000 bpd' },
        { label: 'Retail Network', value: '1,440 Stations' },
        { label: 'Pipeline Network', value: '5,200 km' },
      ],
      details: [
        { title: 'Blacksand Petrochemical Complex (Nigeria)', value: '350,000 bpd' },
        { title: 'Blacksand Fujairah Refining (UAE)', value: '200,000 bpd' },
        { title: 'Maghreb Petro-Refining S.A. (Morocco)', value: '105,000 bpd' },
        { title: 'Petrochemical Production', value: '3.8 MMTPA' },
        { title: 'Marine Fleet', value: '18 Proprietary Vessels' },
      ],
      icon: Factory,
      color: 'bg-emerald-600',
      imagePlaceholderColor: 'bg-emerald-900/20',
    },
    {
      id: 'gas',
      title: 'Gas & Power',
      subtitle: 'LNG & Low-Carbon Energy',
      description: 'Driving the energy transition with significant investments in LNG export infrastructure and regional gas distribution.',
      stats: [
        { label: 'LNG Capacity', value: '6.4 MTPA' },
        { label: 'Gas Production', value: '1,260 MMscfd' },
        { label: 'LNG Export Alloc.', value: '48%' },
      ],
      details: [
        { title: 'Okoloba LNG Export Terminal', value: '6.4 MTPA' },
        { title: 'WestGas Ghana Infrastructure', value: '210 MMscfd' },
        { title: 'Domestic Power Generation', value: '34% Allocation' },
        { title: 'Regional Pipeline Exports', value: '12% Allocation' },
      ],
      icon: Flame,
      color: 'bg-orange-600',
      imagePlaceholderColor: 'bg-orange-900/20',
    },
  ];

  return (
    <section id="operations" className="py-24 bg-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Images */}
        <div className="relative mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold text-primary mb-6 tracking-tight">
                Operations & Asset Portfolio
              </h2>
              <p className="text-xl text-neutral max-w-3xl leading-relaxed mb-8">
                Blacksand's operations are segmented into 3 core business lines: Upstream, Downstream & Trading, and Gas & Power, delivering end-to-end energy solutions across 15+ countries.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">685K</div>
                  <div className="text-sm text-neutral">BOE/D Production</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-neutral">Countries</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">52K</div>
                  <div className="text-sm text-neutral">Employees</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/offshorerig.jpg" alt="Offshore Oil Rig" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                <img src="/images/refinery.jpg" alt="Refinery Operations" className="w-full h-48 object-cover rounded-lg shadow-lg mt-8" />
                <img src="/images/gas.jpg" alt="Gas Processing" className="w-full h-48 object-cover rounded-lg shadow-lg -mt-8" />
                <img src="/images/workers.jpg" alt="Field Workers" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-xl">
                <div className="text-sm font-bold">Global Operations</div>
                <div className="text-xs">Africa • Middle East • Europe</div>
              </div>
            </div>
          </div>
        </div>

        {/* Operations Segments */}
        <div className="space-y-32">
          {segments.map((segment, index) => {
            const isEven = index % 2 === 0;
            const Icon = segment.icon;

            return (
              <div key={segment.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                {/* Image Placeholder Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`aspect-[4/3] rounded-2xl overflow-hidden relative group ${segment.imagePlaceholderColor}`}>
                    {/* Placeholder Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-primary/20" />
                      <span className="absolute bottom-8 text-primary/40 font-medium tracking-widest uppercase text-sm">
                        {segment.title} Image
                      </span>
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                    {/* Floating Stat Card */}
                    <div className={`absolute bottom-6 ${isEven ? 'left-6' : 'right-6'} bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-xs`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${segment.color} bg-opacity-10`}>
                          <Icon className={`w-5 h-5 ${segment.color.replace('bg-', 'text-')}`} />
                        </div>
                        <span className="font-bold text-primary text-sm uppercase tracking-wider">Key Capacity</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {segment.stats[0].value}
                      </div>
                      <div className="text-xs text-neutral mt-1">
                        {segment.stats[0].label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${segment.color} bg-opacity-10 text-sm font-semibold ${segment.color.replace('bg-', 'text-')} mb-4`}>
                      {segment.subtitle}
                    </div>
                    <h3 className="text-4xl font-bold text-primary mb-4">{segment.title}</h3>
                    <p className="text-lg text-neutral leading-relaxed">
                      {segment.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 border-y border-neutral/10 py-6">
                    {segment.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-xs text-neutral uppercase tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Detailed List */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Key Assets & Operations</h4>
                    {segment.details.map((detail, i) => (
                      <div key={i} className="flex items-center justify-between group p-3 rounded-lg hover:bg-neutral/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${segment.color}`}></div>
                          <span className="text-neutral group-hover:text-primary transition-colors font-medium">{detail.title}</span>
                        </div>
                        <span className="font-bold text-primary text-sm bg-primary/5 px-2 py-1 rounded">{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Additional Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral/10">
                    <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                      <div className="text-lg font-bold text-primary">{segment.stats[1].value}</div>
                      <div className="text-xs text-neutral uppercase tracking-wide">{segment.stats[1].label}</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg">
                      <div className="text-lg font-bold text-primary">{segment.stats[2].value}</div>
                      <div className="text-xs text-neutral uppercase tracking-wide">{segment.stats[2].label}</div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
