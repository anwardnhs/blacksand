import { Award, TrendingUp, Zap } from 'lucide-react';

export default function Legacy() {
  const generations = [
    {
      generation: '1st Generation',
      name: 'Alhaji Ibrahim Alhassan CFR',
      years: '1927-2008',
      role: 'Founder & Pioneer CEO (1952-1989)',
      description:
        'A pioneering Northern Nigerian industrialist who established Blacksand as a fuel merchant and transportation enterprise, acquiring the first exploration license in the Niger Delta Basin in 1978.',
      achievements: [
        'Founded Blacksand Oil Company Limited (1952)',
        'First exploration license in Niger Delta (1978)',
        'Constructed Kaduna Storage & Product Depot (1982)',
        'First Northern-owned energy enterprise to reach federal export status',
      ],
      icon: Award,
    },
    {
      generation: '2nd Generation',
      name: 'Abdallah Alhassan CON',
      years: '1954-2020',
      role: 'GCEO (1989-2005) | Chairman (2005-2020)',
      description:
        'An engineer and economist educated at University of Lagos and Stanford, who transformed Blacksand from a domestic player into a pan-African integrated energy conglomerate.',
      achievements: [
        'Formation of Blacksand Energy Upstream Ltd. (1992)',
        'Commissioning of Blacksand Petrochemical Complex (2005)',
        'Established Blacksand Global Trading FZE in Dubai (2004)',
        'Launched Blacksand Foundation for education and rural electrification (2008)',
      ],
      icon: TrendingUp,
    },
    {
      generation: '3rd Generation',
      name: 'Anwar Alhassan',
      years: 'Born 1978',
      role: 'Non-Executive Chairman (2020-Present)',
      description:
        'Harvard-educated leader who pioneered Blacksand\'s global expansion, securing the historic NYSE dual listing and establishing the company as a multinational energy powerhouse.',
      achievements: [
        'Led successful NYSE dual listing (2023) - $18B raised',
        'Secured Casablanca Refinery modernization (300,000 bpd)',
        'Championed B-TAG continental gas infrastructure project',
        'World Economic Forum Board of Trustees member',
      ],
      icon: Zap,
    },
  ];

  return (
    <section id="legacy" className="py-24 bg-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            The Alhassan Legacy
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Three generations of visionary leadership building one of Africa's most successful
            energy conglomerates
          </p>
        </div>

        <div className="space-y-12">
          {generations.map((gen, index) => {
            const Icon = gen.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-neutral/10 to-clean rounded-2xl p-8 lg:p-12 border border-neutral/20 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-clean" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral uppercase tracking-wide">
                          {gen.generation}
                        </div>
                        <div className="text-xs text-neutral/70">{gen.years}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{gen.name}</h3>
                    <div className="text-sm font-medium text-neutral mb-4">{gen.role}</div>
                    <p className="text-neutral leading-relaxed">{gen.description}</p>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                      Key Achievements
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {gen.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-clean rounded-lg border border-neutral/20 hover:border-accent transition-colors"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <div className="text-sm text-primary leading-relaxed">
                            {achievement}
                          </div>
                        </div>
                      ))}
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
