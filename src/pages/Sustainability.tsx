import { Leaf, Recycle, Zap, Droplets, Wind, Sun, Target, Award, TrendingDown, Users, Globe, BarChart3 } from 'lucide-react';

export default function Sustainability() {
  const initiatives = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Carbon Neutral Operations',
      description: 'Committed to achieving carbon neutrality across all operations by 2030 through innovative emission reduction technologies and renewable energy integration.',
      stats: 'Target: 50% reduction by 2025',
      image: '/images/windmill.jpg',
      impact: '2.1M tons CO₂ reduced annually'
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-600" />,
      title: 'Circular Economy',
      description: 'Implementing circular economy principles in our refining processes to maximize resource efficiency and minimize waste generation.',
      stats: '85% waste recycling rate',
      image: '/images/refinery2.jpg',
      impact: '3.2M tons waste diverted from landfills'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Renewable Energy Transition',
      description: 'Investing heavily in renewable energy sources including solar, wind, and hydrogen to transition from fossil fuels to sustainable alternatives.',
      stats: '$2.5B invested in renewables',
      image: '/images/wind.jpg',
      impact: '1.8GW renewable capacity developed'
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-600" />,
      title: 'Water Conservation',
      description: 'Advanced water treatment and recycling systems ensure minimal freshwater usage and zero discharge of untreated water.',
      stats: '60% water reuse achieved',
      image: '/images/gas2.jpg',
      impact: '45M cubic meters water conserved'
    },
    {
      icon: <Wind className="w-8 h-8 text-indigo-600" />,
      title: 'Clean Energy Solutions',
      description: 'Developing and deploying clean energy technologies including carbon capture, hydrogen production, and energy storage systems.',
      stats: '12 clean energy patents',
      image: '/images/gas.jpg',
      impact: '5 hydrogen production facilities'
    },
    {
      icon: <Sun className="w-8 h-8 text-orange-600" />,
      title: 'Solar Integration',
      description: 'Installing solar panels across our facilities and developing solar-powered solutions for remote communities.',
      stats: '500MW solar capacity planned',
      image: '/images/solar.jpg',
      impact: '127 communities powered by solar'
    }
  ];

  const milestones = [
    { year: '2020', achievement: 'Achieved ISO 14001 certification' },
    { year: '2021', achievement: 'Reduced emissions by 15%' },
    { year: '2022', achievement: 'Launched renewable energy division' },
    { year: '2023', achievement: 'Carbon neutral in 3 major facilities' },
    { year: '2024', achievement: '50% renewable energy usage target' },
    { year: '2025', achievement: 'Carbon neutral across all operations' }
  ];

  return (
    <section className="py-24 bg-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Sustainability
          </h1>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Leading the energy transition with innovative solutions for a sustainable future
          </p>
        </div>

        {/* Key Initiatives */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Sustainability Initiatives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-clean rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral/20 group"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/images/footprint.jpg'; // Fallback image
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    {initiative.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {initiative.title}
                    </h3>
                    <div className="text-sm font-semibold text-accent bg-white/20 backdrop-blur-sm rounded px-2 py-1 inline-block">
                      {initiative.stats}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-neutral mb-4 leading-relaxed">
                    {initiative.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-primary">
                      Impact: {initiative.impact}
                    </div>
                    <div className="text-accent font-semibold text-sm hover:text-primary transition-colors cursor-pointer">
                      Learn More →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Roadmap */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Sustainability Roadmap
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-accent rounded-full"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-accent rounded-full absolute left-1/2 transform -translate-x-1/2 z-10`}
                  ></div>
                  <div
                    className={`bg-clean border border-neutral/20 rounded-lg p-6 shadow-md max-w-md ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <div className="text-lg font-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-neutral">
                      {milestone.achievement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-primary text-clean rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-neutral max-w-2xl mx-auto">
              Measuring our progress towards a sustainable energy future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2.1M</div>
              <div className="text-sm text-neutral">Tons CO₂ Reduced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">45%</div>
              <div className="text-sm text-neutral">Renewable Energy Usage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">78%</div>
              <div className="text-sm text-neutral">Water Recycling Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">127</div>
              <div className="text-sm text-neutral">Community Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
