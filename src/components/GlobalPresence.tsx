import { MapPin, Building2 } from 'lucide-react';

export default function GlobalPresence() {
  const regions = [
    {
      name: 'Africa',
      headquarters: 'Abuja, Nigeria',
      president: 'Ibrahim Murtala',
      offices: [
        { city: 'Abuja', country: 'Nigeria', type: 'Corporate HQ' },
        { city: 'Lagos', country: 'Nigeria', type: 'Operations HQ' },
        { city: 'Port Harcourt', country: 'Nigeria', type: 'Refining Complex' },
        { city: 'Johannesburg', country: 'South Africa', type: 'Regional HQ' },
      ],
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: 'Middle East',
      headquarters: 'Dubai, UAE',
      president: 'Omar Al-Karim',
      offices: [
        { city: 'Dubai', country: 'UAE', type: 'Trading & Investments' },
        { city: 'Fujairah', country: 'UAE', type: 'Refining Complex' },
      ],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Europe',
      headquarters: 'London, UK',
      president: 'Jean-Paul Renard',
      offices: [
        { city: 'London', country: 'United Kingdom', type: 'Finance & Compliance' },
        { city: 'Casablanca', country: 'Morocco', type: 'Refinery Complex' },
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Americas',
      headquarters: 'Houston, USA',
      president: 'Clara Johnson',
      offices: [{ city: 'Houston', country: 'Texas, USA', type: 'Technology Center' }],
      color: 'from-red-500 to-rose-500',
    },
    {
      name: 'Asia-Pacific',
      headquarters: 'Singapore',
      president: 'Omar Al-Karim',
      offices: [{ city: 'Singapore', country: 'Singapore', type: 'LNG Sales Hub' }],
      color: 'from-purple-500 to-fuchsia-500',
    },
  ];

  return (
    <section id="global" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-clean mb-4">Global Presence</h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Operations spanning six continents with regional headquarters strategically positioned
            worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-clean/5 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/10 hover:bg-clean/10 transition-all group"
            >
              <div className={`h-1.5 bg-gradient-to-r ${region.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-clean mb-1">{region.name}</h3>
                    <div className="text-sm text-neutral/70">Regional Operations</div>
                  </div>
                  <MapPin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>

                <div className="mb-4 pb-4 border-b border-accent/10">
                  <div className="text-xs text-neutral/70 mb-1">Regional President</div>
                  <div className="text-sm font-medium text-clean">{region.president}</div>
                </div>

                <div className="space-y-3">
                  {region.offices.map((office, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-clean/5 rounded-lg hover:bg-clean/10 transition-colors"
                    >
                      <Building2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-clean">
                          {office.city}, {office.country}
                        </div>
                        <div className="text-xs text-neutral/70">{office.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary to-primary rounded-2xl p-8 lg:p-12 border border-accent/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-clean mb-2">Corporate Headquarters</h3>
            <p className="text-neutral/70">Blacksand Towers, Central Business District</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-clean mb-1">52,000+</div>
              <div className="text-sm text-neutral/70">Global Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-clean mb-1">6</div>
              <div className="text-sm text-neutral/70">Continents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-clean mb-1">15+</div>
              <div className="text-sm text-neutral/70">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
