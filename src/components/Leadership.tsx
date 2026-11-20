import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function Leadership() {
  const [activeTab, setActiveTab] = useState('board');



  const board = [
    {
      name: 'Anwar Alhassan',
      role: 'Chairman',
      image: '/images/anwar.png',
      bio: 'Anwar Alhassan is the Chairman of Blacksand, bringing over 30 years of experience in the energy sector. He has led strategic initiatives across Africa and the Middle East, focusing on sustainable energy development and corporate governance.'
    },
    {
      name: 'Samuel Esenbhalu',
      role: 'GCEO & Executive Director',
      image: '/images/samuel.png',
      bio: 'Samuel Esenbhalu serves as Group Chief Executive Officer, overseeing global operations. With extensive experience in upstream and downstream energy, he drives innovation and operational excellence across Blacksand\'s portfolio.'
    },
    {
      name: 'Femi Ayodeji',
      role: 'GCFO & Executive Director',
      image: '/images/ayodeji.png',
      bio: 'Femi Ayodeji is the Group Chief Financial Officer, managing financial strategy and investor relations. He has a strong background in energy finance and has been instrumental in Blacksand\'s capital markets activities.'
    },
    {
      name: 'Engr Abdallah Inuwa',
      role: 'GCOO & Executive Director',
      image: '/images/inuwa.png',
      bio: 'As Group Chief Operating Officer, Engr Abdallah Inuwa oversees operational efficiency across all business units. His engineering expertise and operational leadership have been key to Blacksand\'s growth in exploration and production.'
    },
    {
      name: 'Angela Aduradu',
      role: 'Lead Independent Director',
      image: '/images/adaobi.png',
      bio: 'Angela Aduradu brings extensive experience in corporate governance and risk management. As Lead Independent Director, she ensures robust oversight and compliance with international standards.'
    },
    {
      name: 'Chief Akintiola Adetokunbo, OFR',
      role: 'Independent Director',
      image: '/images/akintola.png',
      bio: 'Chief Akintiola Adetokunbo, OFR, is a distinguished business leader with expertise in strategic planning and stakeholder engagement. He contributes valuable insights to Blacksand\'s board deliberations.'
    },
    {
      name: 'Harry Johnston',
      role: 'Independent Director',
      image: '/images/harry.png',
      bio: 'Harry Johnston provides international perspective to the board with his background in global energy markets and regulatory affairs. He focuses on sustainable business practices and long-term value creation.'
    },
    {
      name: 'Zainab Audu-Nunghe',
      role: 'Independent Director',
      image: '/images/zainab.png',
      bio: 'Zainab Audu-Nunghe is an expert in corporate social responsibility and community relations. Her contributions help align Blacksand\'s operations with sustainable development goals.'
    },
    {
      name: 'HRH Khalid Bin Rashid Al-Thani II',
      role: 'Non-Executive Director',
      image: '/images/HRH.png',
      bio: 'HRH Khalid Bin Rashid Al-Thani II brings royal leadership and diplomatic experience to the board. His international connections strengthen Blacksand\'s global partnerships and strategic initiatives.'
    },
    {
      name: 'Hassana Julde',
      role: 'Non-Executive Director',
      image: '/images/hassana.png',
      bio: 'Hassana Julde contributes expertise in policy and regulatory affairs. As a Non-Executive Director, she provides guidance on navigating complex regulatory environments in the energy sector.'
    },
  ];

  const executives = [
    {
      name: 'Samuel Esenbhalu',
      role: 'Group Chief Executive Officer',
      image: '/images/samuel.png',
      bio: 'Samuel Esenbhalu serves as Group Chief Executive Officer, overseeing global operations. With extensive experience in upstream and downstream energy, he drives innovation and operational excellence across Blacksand\'s portfolio.'
    },
    {
      name: 'Abdallah Inuwa',
      role: 'Group Chief Operating Officer',
      image: '/images/inuwa.png',
      bio: 'As Group Chief Operating Officer, Engr Abdallah Inuwa oversees operational efficiency across all business units. His engineering expertise and operational leadership have been key to Blacksand\'s growth in exploration and production.'
    },
    {
      name: 'Femi Ayodeji',
      role: 'Group Chief Financial Officer',
      image: '/images/ayodeji.png',
      bio: 'Femi Ayodeji is the Group Chief Financial Officer, managing financial strategy and investor relations. He has a strong background in energy finance and has been instrumental in Blacksand\'s capital markets activities.'
    },
    {
      name: 'James Roberts',
      role: 'Chief Strategy Officer',
      image: '/images/james.png',
      bio: 'James Roberts leads strategic planning and business development. His expertise in market analysis and strategic partnerships has expanded Blacksand\'s global footprint and diversified its energy portfolio.'
    },
    {
      name: 'Faruk Lawal',
      role: 'Chief Risk Officer',
      image: '/images/faruk.png',
      bio: 'Faruk Lawal manages enterprise risk across Blacksand\'s operations. With deep knowledge of regulatory compliance and risk mitigation, he ensures operational safety and financial stability.'
    },
    {
      name: 'Chinwe Azinne',
      role: 'Chief Communications & Corporate Affairs Officer',
      image: '/images/chinwe.png',
      bio: 'Chinwe Azinne oversees corporate communications and stakeholder engagement. She manages Blacksand\'s brand reputation and ensures transparent communication with all stakeholders.'
    },
    {
      name: 'Amina Diop',
      role: 'Chief Legal Officer & General Counsel',
      image: '/images/diop.png',
      bio: 'Amina Diop leads the legal department, providing counsel on corporate governance, contracts, and regulatory matters. Her expertise ensures compliance and protects Blacksand\'s interests globally.'
    },
    {
      name: 'Adiza Salisu',
      role: 'Chief Human Resources Officer',
      image: '/images/adiza.png',
      bio: 'Adiza Salisu manages human capital strategy and organizational development. She focuses on talent acquisition, employee development, and creating a high-performance culture at Blacksand.'
    },
  ];

  const evps = [
    {
      name: 'Ibrahim Bature',
      role: 'EVP, Global Exploration & Production (E&P)',
      image: '/images/ibrahim_bature.png',
      bio: 'Ibrahim Bature leads global exploration and production operations. With extensive experience in upstream activities, he manages Blacksand\'s oil and gas assets across multiple continents.'
    },
    {
      name: 'Michael Okafor',
      role: 'EVP, Global Refining & Marketing (Downstream)',
      image: '/images/michael_okafor.png',
      bio: 'Michael Okafor oversees refining and marketing operations. His expertise in downstream logistics and product distribution ensures efficient supply chain management and market penetration.'
    },
    {
      name: 'Mr. Emeka Nwokolo',
      role: 'EVP, Gas & Power',
      image: '/images/emeka_nwokolo.png',
      bio: 'Mr. Emeka Nwokolo manages gas and power business units. He drives the development of natural gas infrastructure and power generation projects to meet growing energy demands.'
    },
    {
      name: 'Ms. Jennifer Nwana',
      role: 'EVP, New Energy',
      image: '/images/jennifer_nwana.png',
      bio: 'Ms. Jennifer Nwana leads new energy initiatives, focusing on renewable energy and sustainable technologies. She spearheads Blacksand\'s transition to cleaner energy solutions.'
    },
    {
      name: 'Aliyu Sani',
      role: 'EVP, Global Trading & Supply',
      image: '/images/aliyu_sani.png',
      bio: 'Aliyu Sani manages global trading and supply chain operations. His strategic trading expertise optimizes commodity flows and maximizes value across Blacksand\'s trading portfolio.'
    },
  ];



  return (
    <section id="leadership" className="py-24 bg-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6 font-poppins">
            Leadership & Governance
          </h2>
          <p className="text-xl text-neutral max-w-4xl mx-auto leading-relaxed">
            World-class leadership driving sustainable growth and shareholder value through strategic vision and operational excellence
          </p>
        </div>

        {/* Tab Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-transparent w-full justify-center p-0 h-auto rounded-none border-b border-accent/30 mb-16">
            <TabsTrigger
              value="board"
              className="
                bg-transparent text-neutral font-semibold text-xl px-8 py-4 shadow-none rounded-none
                border-b-[3px] border-transparent font-poppins
                hover:text-primary transition-colors duration-200
                data-[state=active]:text-primary
                data-[state=active]:shadow-none
                data-[state=active]:border-primary
              "
            >
              Board of Directors
            </TabsTrigger>

            <TabsTrigger
              value="executives"
              className="
                bg-transparent text-neutral font-semibold text-xl px-8 py-4 shadow-none rounded-none
                border-b-[3px] border-transparent font-poppins
                hover:text-primary transition-colors duration-200
                data-[state=active]:text-primary
                data-[state=active]:shadow-none
                data-[state=active]:border-primary
              "
            >
              Executive Management
            </TabsTrigger>

            <TabsTrigger
              value="senior"
              className="
                bg-transparent text-neutral font-semibold text-xl px-8 py-4 shadow-none rounded-none
                border-b-[3px] border-transparent font-poppins
                hover:text-primary transition-colors duration-200
                data-[state=active]:text-primary
                data-[state=active]:shadow-none
                data-[state=active]:border-primary
              "
            >
              Senior Leadership
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="board" className="mt-8">
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-6 font-poppins">Board of Directors</h3>
                <p className="text-lg text-neutral max-w-3xl mx-auto leading-relaxed">
                  Our Board comprises distinguished leaders with extensive experience in energy, finance, and governance, providing strategic oversight and ensuring sustainable value creation.
                </p>
              </div>

              {/* Board Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {board.map((member, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-accent/20 group cursor-pointer">
                        {/* Image */}
                        <div className="aspect-[3/4] overflow-hidden relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = '/images/ibrahim.png'; // Fallback to founder image
                            }}
                          />
                          {/* Subtle Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>

                          {/* Text Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h4 className="text-xl font-bold mb-2 leading-tight font-poppins">{member.name}</h4>
                            <p className="text-sm font-medium opacity-90">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader className="pb-4">
                        <DialogTitle className="text-3xl font-bold text-primary font-poppins mb-2">{member.name}</DialogTitle>
                        <p className="text-lg font-semibold text-accent">{member.role}</p>
                      </DialogHeader>
                      <div className="flex flex-col md:flex-row gap-6 mt-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-lg mx-auto md:mx-0 flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.src = '/images/ibrahim.png';
                          }}
                        />
                        <div className="flex-1 space-y-4">
                          <div className="prose prose-lg max-w-none">
                            <p className="text-neutral leading-relaxed text-base font-medium first-letter:text-2xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                              {member.bio}
                            </p>
                          </div>
                          <div className="pt-4 border-t border-accent/20">
                            <p className="text-sm text-neutral/80 italic">
                              Click outside this dialog or press Escape to close
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="executives" className="mt-8">
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-6 font-poppins">Executive Management</h3>
                <p className="text-lg text-neutral max-w-3xl mx-auto leading-relaxed">
                  Our executive team brings together world-class expertise and strategic vision to drive operational excellence and sustainable growth across all business segments.
                </p>
              </div>

              {/* Executive Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {executives.map((exec, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-accent/20 group cursor-pointer">
                        {/* Image */}
                        <div className="aspect-[3/4] overflow-hidden relative">
                          <img
                            src={exec.image}
                            alt={exec.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = '/images/ibrahim.png'; // Fallback to founder image
                            }}
                          />
                          {/* Subtle Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>

                          {/* Text Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h4 className="text-xl font-bold mb-2 leading-tight font-poppins">{exec.name}</h4>
                            <p className="text-sm font-medium opacity-90">{exec.role}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader className="pb-4">
                        <DialogTitle className="text-3xl font-bold text-primary font-poppins mb-2">{exec.name}</DialogTitle>
                        <p className="text-lg font-semibold text-accent">{exec.role}</p>
                      </DialogHeader>
                      <div className="flex flex-col md:flex-row gap-6 mt-4">
                        <img
                          src={exec.image}
                          alt={exec.name}
                          className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-lg mx-auto md:mx-0 flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.src = '/images/ibrahim.png';
                          }}
                        />
                        <div className="flex-1 space-y-4">
                          <div className="prose prose-lg max-w-none">
                            <p className="text-neutral leading-relaxed text-base font-medium first-letter:text-2xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                              {exec.bio}
                            </p>
                          </div>
                          <div className="pt-4 border-t border-accent/20">
                            <p className="text-sm text-neutral/80 italic">
                              Click outside this dialog or press Escape to close
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="senior" className="mt-8 space-y-16">
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-6 font-poppins">Executive Vice Presidents</h3>
                <p className="text-lg text-neutral max-w-3xl mx-auto leading-relaxed">
                  Strategic Business Unit Leaders driving operational excellence and innovation across our core business segments.
                </p>
              </div>

              {/* EVP Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {evps.map((evp, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-accent/20 group cursor-pointer">
                        {/* Image */}
                        <div className="aspect-[3/4] overflow-hidden relative">
                          <img
                            src={evp.image}
                            alt={evp.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = '/images/ibrahim.png'; // Fallback to founder image
                            }}
                          />
                          {/* Subtle Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>

                          {/* Text Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h4 className="text-xl font-bold mb-2 leading-tight font-poppins">{evp.name}</h4>
                            <p className="text-sm font-medium opacity-90">{evp.role}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-primary font-poppins">{evp.name}</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col md:flex-row gap-6 mt-4">
                        <img
                          src={evp.image}
                          alt={evp.name}
                          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg mx-auto md:mx-0"
                          onError={(e) => {
                            e.currentTarget.src = '/images/ibrahim.png';
                          }}
                        />
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-primary mb-2">{evp.role}</p>
                          <p className="text-neutral leading-relaxed">{evp.bio}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              {/* Header */}
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-6 font-poppins">Corporate Social Responsibility</h3>
                <p className="text-lg text-neutral max-w-3xl mx-auto leading-relaxed">
                  Leading sustainable initiatives and community impact through dedicated leadership and strategic partnerships.
                </p>
              </div>

              {/* CSR Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-accent/20 group cursor-pointer">
                      {/* Image */}
                      <div className="aspect-[3/4] overflow-hidden relative">
                        <img
                          src="/images/nifemi.png"
                          alt="Nifemi Bankiro"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = '/images/ibrahim.png'; // Fallback to founder image
                          }}
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h4 className="text-xl font-bold mb-2 leading-tight font-poppins">Nifemi Bankiro</h4>
                          <p className="text-sm font-medium opacity-90">President, Blacksand Foundation</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader className="pb-4">
                      <DialogTitle className="text-3xl font-bold text-primary font-poppins mb-2">Nifemi Bankiro</DialogTitle>
                      <p className="text-lg font-semibold text-accent">President, Blacksand Foundation</p>
                    </DialogHeader>
                    <div className="flex flex-col md:flex-row gap-6 mt-4">
                      <img
                        src="/images/nifemi.png"
                        alt="Nifemi Bankiro"
                        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-lg mx-auto md:mx-0 flex-shrink-0"
                        onError={(e) => {
                          e.currentTarget.src = '/images/ibrahim.png';
                        }}
                      />
                      <div className="flex-1 space-y-4">
                        <div className="prose prose-lg max-w-none">
                          <p className="text-neutral leading-relaxed text-base font-medium first-letter:text-2xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                            Nifemi Bankiro leads Blacksand's corporate social responsibility initiatives through the Blacksand Foundation. With a passion for community development and sustainable impact, she oversees programs that create lasting positive change in the communities where we operate.
                          </p>
                        </div>
                        <div className="pt-4 border-t border-accent/20">
                          <p className="text-sm text-neutral/80 italic">
                            Click outside this dialog or press Escape to close
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
