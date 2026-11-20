import { TrendingUp, DollarSign, PieChart, Award, BarChart3, Users, Globe, Download, FileText, Calendar } from 'lucide-react';

export default function Investors() {
  const financials = [
    { label: 'Revenue', value: '$35.4B', icon: DollarSign, color: 'text-blue-500' },
    { label: 'Net Income', value: '$7.5B', icon: TrendingUp, color: 'text-green-500' },
    { label: 'EBITDA', value: '$12.5B', icon: PieChart, color: 'text-purple-500' },
    { label: 'Total Assets', value: '$162B', icon: Award, color: 'text-orange-500' },
  ];

  const highlights = [
    { metric: 'Market Capitalization', value: '$110 Billion' },
    { metric: 'Dividend Yield', value: '3.5%' },
    { metric: 'Public Float', value: '61.0%' },
    { metric: 'Global Workforce', value: '52,000 employees' },
  ];

  const shareholders = [
    { name: 'Saburo Holdings', stake: '24%', description: 'Anwar Alhassan private holding' },
    {
      name: 'Institutional Investors',
      stake: '12%',
      description: 'IFC, BlackRock, NSIA',
    },
    { name: 'Alhassan Family Trust', stake: '3%', description: 'Family holdings' },
    {
      name: 'Public & Institutional',
      stake: '61%',
      description: 'NYSE & NGX float',
    },
  ];

  return (
    <section id="investors" className="py-24 bg-gradient-to-br from-neutral/10 to-neutral/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-clean rounded-full border border-neutral/20 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">NYSE: BLSD | NGX: BLSD</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Investor Relations
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Delivering consistent value to shareholders through operational excellence and
            strategic growth
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-clean mb-2">Financial Highlights (FY2024)</h3>
            <p className="text-neutral/70">Strong performance across all key metrics</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-clean/5 backdrop-blur-sm rounded-xl p-6 border border-accent/10 hover:bg-clean/10 transition-all group"
                >
                  <Icon className={`w-8 h-8 ${item.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <div className="text-3xl font-bold text-clean mb-1">{item.value}</div>
                  <div className="text-sm text-neutral/70">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-clean rounded-xl p-8 border border-neutral/20 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-accent" />
              Key Metrics
            </h3>
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-neutral/5 to-accent/5 rounded-lg hover:from-accent/10 hover:to-primary/10 transition-all duration-300 border border-neutral/10"
                >
                  <div className="text-primary font-medium">{item.metric}</div>
                  <div className="text-primary font-bold text-lg bg-white/50 px-3 py-1 rounded">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-clean rounded-xl p-8 border border-neutral/20 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              Major Shareholders
            </h3>
            <div className="space-y-4">
              {shareholders.map((shareholder, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-neutral/5 to-accent/5 rounded-lg hover:from-accent/10 hover:to-primary/10 transition-all duration-300 border border-neutral/10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-semibold text-primary">{shareholder.name}</div>
                    <div className="text-accent font-bold text-lg bg-white/50 px-3 py-1 rounded">{shareholder.stake}</div>
                  </div>
                  <div className="text-sm text-neutral">{shareholder.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-accent/10 to-clean rounded-xl p-8 border border-accent/20 shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <Award className="w-5 h-5 text-accent" />
              Credit Ratings
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-clean rounded-lg border border-accent/20 hover:bg-accent/5 transition-colors">
                <span className="text-primary font-medium">Moody's</span>
                <span className="px-3 py-1 bg-accent/20 text-accent font-bold rounded-md">
                  Baa2
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-clean rounded-lg border border-accent/20 hover:bg-accent/5 transition-colors">
                <span className="text-primary font-medium">S&P Global</span>
                <span className="px-3 py-1 bg-accent/20 text-accent font-bold rounded-md">
                  BBB-
                </span>
              </div>
            </div>
            <div className="mt-4 text-sm text-neutral">
              Investment Grade ratings reflecting strong financial position
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-clean rounded-xl p-8 border border-accent/20 shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-accent" />
              Historic Achievement
            </h3>
            <div className="mb-4">
              <div className="text-4xl font-bold text-accent mb-2">$18B</div>
              <div className="text-primary font-medium">Raised in 2023 NYSE Listing</div>
            </div>
            <p className="text-sm text-neutral leading-relaxed">
              Largest IPO by an African energy company in history, marking Blacksand's emergence
              as a truly global energy major with dual listings on NYSE and NGX.
            </p>
          </div>
        </div>

        {/* Investor Resources Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Investor Resources</h2>
            <p className="text-neutral max-w-2xl mx-auto">Access our latest financial reports, presentations, and regulatory filings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-clean rounded-xl p-6 border border-neutral/20 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Annual Reports</h4>
                  <p className="text-sm text-neutral">FY2024 & Historical</p>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-lg transition-colors group-hover:bg-accent group-hover:text-white">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            <div className="bg-clean rounded-xl p-6 border border-neutral/20 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Financial Statements</h4>
                  <p className="text-sm text-neutral">Quarterly & Annual</p>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-lg transition-colors group-hover:bg-accent group-hover:text-white">
                <Download className="w-4 h-4" />
                View Reports
              </button>
            </div>

            <div className="bg-clean rounded-xl p-6 border border-neutral/20 hover:shadow-lg transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Investor Calendar</h4>
                  <p className="text-sm text-neutral">Earnings & Events</p>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-lg transition-colors group-hover:bg-accent group-hover:text-white">
                <Calendar className="w-4 h-4" />
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
