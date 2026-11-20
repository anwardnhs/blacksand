import { Calendar } from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      year: '1952',
      title: 'Foundation',
      description: 'Blacksand Oil Company Limited founded by Alhaji Ibrahim Alhassan',
    },
    {
      year: '1978',
      title: 'First License',
      description: 'Awarded first onshore exploration license in Niger Delta Basin',
    },
    {
      year: '1992',
      title: 'Upstream Formation',
      description: 'Incorporation of Blacksand Energy Upstream Ltd.',
    },
    {
      year: '1995',
      title: 'First Discovery',
      description: 'Entry into offshore drilling and first oil discovery at Okiri Deep Field',
    },
    {
      year: '2004',
      title: 'Global Expansion',
      description: 'Establishment of Blacksand Global Trading FZE in Dubai',
    },
    {
      year: '2005',
      title: 'Petrochemical Complex',
      description: 'Commissioning of flagship refinery and polymer plant',
    },
    {
      year: '2019',
      title: 'Rebranding',
      description: 'Corporate rebranding to Blacksand, Inc. as multinational holding company',
    },
    {
      year: '2020',
      title: 'Leadership Transition',
      description: 'Anwar Alhassan appointed Chairman',
    },
    {
      year: '2023',
      title: 'NYSE Listing',
      description: 'Historic dual listing on NYSE - first Nigerian energy major to achieve this',
    },
    {
      year: '2024',
      title: 'Record Performance',
      description: '$35.4B revenue, $110B market cap, 52,000 global workforce',
    },
  ];

  return (
    <section id="overview" className="py-24 bg-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Seven Decades of Excellence
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            From a modest 1952 startup to a Fortune 500 multinational energy conglomerate
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-neutral to-accent hidden md:block"></div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex items-center gap-4 md:w-32 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <Calendar className="w-7 h-7 text-clean" />
                    </div>
                    <div className="md:hidden text-2xl font-bold text-primary">
                      {milestone.year}
                    </div>
                  </div>

                  <div className="hidden md:block text-2xl font-bold text-primary w-24 flex-shrink-0 pt-4">
                    {milestone.year}
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-neutral/10 to-clean rounded-xl p-6 lg:p-8 border border-neutral/20 hover:shadow-xl hover:border-accent transition-all group">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-neutral leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
