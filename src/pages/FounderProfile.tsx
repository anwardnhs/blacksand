import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Mic } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// --- DATA ---

const founderDetails = {
  name: 'Alhaji Ibrahim Alhassan CFR',
  title: 'Founder & Managing Director (MD), Blacksand Oil Company Ltd |1952 – 1989| Chairman, Blacksand Oil Company Plc |1989-2005|',
  lifespan: '1927–2008',
  quote: 'Our dreams must be bigger. Our ambitions higher. Our commitment deeper. And our efforts greater. This is my dream for Blacksand and for Nigeria.',
  bio: `The story of Blacksand begins with our Founder Alhaji Ibrahim Alhassan CFR, a pioneering Northern Nigerian industrialist and entrepreneur who, after Nigeria's independence, became a figure in the drive for national energy self-sufficiency.

Born in Kano State, Ibrahim represents the pioneering generation of Nigerian businessmen who built formidable empires in the period leading up to and immediately following independence. Ibrahim began as a small-scale fuel merchant and transportation magnate in the 1950s, supplying imported refined petroleum products and derivatives and machinery to emerging industries. By the 1950s, before Nigeria's oil boom, he leveraged his experience and relationships with international partners to establish Blacksand Oil Company Limited.

Under Alhassan Ibrahim's stewardship:
- Blacksand acquired its first exploration license in the Niger Delta Basin (1978).
- He constructed a Storage and Product Depot in Kaduna (1982).
- Established its reputation as the first Northern-owned energy enterprise to attain a federal crude oil lifting contract and export status.

He passed away in 2008, having successfully guided the company through its transition into a publicly listed entity (1991), securing a foundational legacy of indigenous energy leadership.`,
  gallery: [
    { src: '/images/ibrahim.png', alt: 'Alhaji Ibrahim Alhassan CFR - Portrait', description: 'Official portrait of Alhaji Ibrahim Alhassan CFR, the visionary founder of Blacksand Oil Company.' },
    { src: '/images/photo1.png', alt: 'Company Founding', description: 'The founding moment of Blacksand Oil Company Limited in the 1950s, marking the beginning of indigenous energy leadership.' },
    { src: '/images/photo2.png', alt: 'Exploration License Ceremony', description: 'Receiving the first exploration license in the Niger Delta Basin (1978) - a milestone in Nigerian energy history.' },
    { src: '/images/photo3.png', alt: 'Early Business Ventures', description: 'Alhaji Ibrahim Alhassan CFR during his early days as a fuel merchant and transportation magnate in the 1950s.' },
    { src: '/images/photo4.png', alt: 'Kaduna Storage Depot', description: 'Construction of the Storage and Product Depot in Kaduna (1982), expanding Blacksand\'s infrastructure.' },
    { src: '/images/photo5.png', alt: 'Federal Recognition', description: 'Celebrating the attainment of federal crude oil lifting contract and export status - first Northern-owned enterprise to achieve this.' },
    { src: '/images/photo6.png', alt: 'Public Listing Achievement', description: 'The successful transition to a publicly listed entity (1991), securing Blacksand\'s legacy of indigenous energy leadership.' },
  ],
  speeches: {
    general: [
      { title: 'Lifetime Achievement Award Acceptance Speech', event: 'The Economic Times Awards for Corporate Excellence, 2007', date: '2007', image: '/images/speech.png', excerpt: 'In this landmark speech, Alhaji Ibrahim Alhassan shared his vision for sustainable energy leadership...' },
      { title: 'Vision for Nigeria\'s Energy Future', event: 'Presidential Honors Ceremony, Abuja, 1999', date: '1999', image: '/images/cfrr.png', excerpt: 'A momentous occasion where Alhaji Ibrahim Alhassan was honored with the prestigious national award - Commander of the Federal Republic (CFR) - recognizing his exceptional contributions to Nigeria\'s energy sector and national development.' },
      { title: 'Strategic Partnership Agreement Signing', event: 'International Energy Conference, Lagos, 1988', date: '1988', image: '/images/event.png', excerpt: 'A groundbreaking agreement signed with international partners to establish strategic alliances, marking a pivotal moment in Blacksand\'s journey toward becoming a leading indigenous energy enterprise in Nigeria.' },
    ],
    shareholders: [
      { date: 'Apr 08, 2002', title: 'Annual General Meeting Address', image: '/images/speech4.png', excerpt: 'Reviewing the year\'s achievements and outlining strategic priorities for growth...' },
      { date: 'Apr 12, 2001', title: 'Shareholders Meeting Speech', image: '/images/speech5.png', excerpt: 'Discussing market challenges and opportunities in the energy sector...' },
    ],
  },
  awards: [
    {
      year: '2004',
      awards: [ 'Lifetime Achievement Award - Nigerian Energy Sector']
    },
    {
      year: '2001',
      awards: ['Commander of the Federal Republic (CFR)', 'African Business Leader of the Year']
    },
    {
      year: '2002',
      awards: ['Nigerian National Merit Award', 'Energy Leadership Excellence Award']
    },
    {
      year: '2001',
      awards: ['Kano State Honorary Citizen', 'Distinguished Alumni Award - Ahmadu Bello University']
    },
  ],
};

// --- PAGE SECTIONS ---

/**
 * SECTION 1: Founder Hero
 * Full-width banner with founder's image background, text positioned upper left
 */
const FounderHero = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(/images/ib.png)' }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          "{founderDetails.quote}"
        </blockquote>
        <div className="mt-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{founderDetails.name}</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-2">{founderDetails.title}</p>
          <Badge variant="secondary" className="text-slate-400 bg-slate-800/50 border-slate-600">
            {founderDetails.lifespan}
          </Badge>
        </div>
      </div>
    </section>
  );
};

/**
 * SECTION 2: Biography
 */
const Biography = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Biography</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-900/20 to-slate-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/ib2.png"
                  alt="Alhaji Ibrahim Alhassan CFR"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-lg font-semibold">Alhaji Ibrahim Alhassan CFR</p>
                  <p className="text-slate-300 text-sm">1927–2008</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              {founderDetails.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-700 leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SECTION 3: Image Gallery
 */
const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === founderDetails.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? founderDetails.gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Photo Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {founderDetails.gallery.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-96 md:h-[600px] lg:h-[700px] object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-xl transition-all duration-500 hover:scale-110 border border-slate-200"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-xl transition-all duration-500 hover:scale-110 border border-slate-200"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {founderDetails.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-slate-900 scale-125 shadow-lg'
                    : 'bg-slate-400 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Image Description */}
          <div className="mt-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-900 to-slate-600 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {founderDetails.gallery[currentIndex].alt}
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-lg mb-4">
                    {founderDetails.gallery[currentIndex].description}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <p className="text-slate-500 text-sm font-medium">
                      {currentIndex + 1} of {founderDetails.gallery.length}
                    </p>
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * SECTION 4: Memorable Speeches
 */
const MemorableSpeeches = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-black via-black to-black overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: 'url(/images/alhaji.png)' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Memorable Speeches</h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Discover the powerful words and visionary insights that shaped Blacksand's legacy through Alhaji Ibrahim Alhassan's most impactful speeches.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founderDetails.speeches.general.map((speech, index) => (
            <Card key={index} className="group bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full font-[Poppins] shadow-xl">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={speech.image}
                  alt={speech.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-black font-bold font-[Poppins] px-3 py-1">
                    {speech.date}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-white to-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mic className="w-7 h-7 text-black" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-2xl font-bold text-white mb-3 leading-tight font-[Poppins]">{speech.title}</h4>
                    <p className="text-white/80 text-base font-medium mb-4 font-[Poppins]">{speech.event}</p>
                  </div>
                </div>
                <p className="text-white/90 text-base leading-relaxed mb-6 flex-grow font-[Poppins]">{speech.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-white text-lg font-bold hover:text-accent transition-colors font-[Poppins]">Read More →</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * SECTION 5: Awards & Recognitions
 */
const AwardsRecognitions = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Awards & Recognitions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-900 to-slate-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Top-Left */}
          <div className="md:text-right">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-900 inline-block">National Honors</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 md:justify-end">
                <img src="/images/ibrahim.png" alt="CFR Award" className="w-16 h-16 object-cover rounded-full md:ml-auto" />
                <div className="md:text-right">
                  <p className="font-semibold text-slate-900">Commander of the Federal Republic (CFR)</p>
                  <p className="text-slate-600 text-sm">1999 - Presidential Honors</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:justify-end">
                <img src="/images/photo1.png" alt="National Merit Award" className="w-16 h-16 object-cover rounded-full md:ml-auto" />
                <div className="md:text-right">
                  <p className="font-semibold text-slate-900">Nigerian National Merit Award</p>
                  <p className="text-slate-600 text-sm">2002 - Excellence in Energy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Central Image */}
          <div className="md:row-span-2 flex justify-center">
            <div className="relative">
              <img src="/images/ib3.png" alt="Alhaji Ibrahim Alhassan CFR - Awards Ceremony" className="w-full max-w-lg h-[500px] object-cover rounded-2xl shadow-2xl" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <p className="text-slate-900 font-semibold">Lifetime Achievement</p>
                <p className="text-slate-600 text-sm">Nigerian Energy Sector</p>
              </div>
            </div>
          </div>

          {/* Top-Right */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-900 inline-block">International Recognition</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/images/photo2.png" alt="African Business Leader" className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <p className="font-semibold text-slate-900">African Business Leader of the Year</p>
                  <p className="text-slate-600 text-sm">2001 - Continental Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="/images/photo3.png" alt="Lifetime Achievement Award" className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <p className="font-semibold text-slate-900">Lifetime Achievement Award</p>
                  <p className="text-slate-600 text-sm">2004 - The Economic Times</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Left */}
          <div className="md:text-right">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-900 inline-block">State Honors</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 md:justify-end">
                <img src="/images/photo4.png" alt="Kano State Honor" className="w-16 h-16 object-cover rounded-full md:ml-auto" />
                <div className="md:text-right">
                  <p className="font-semibold text-slate-900">Kano State Honorary Citizen</p>
                  <p className="text-slate-600 text-sm">2001 - State Recognition</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:justify-end">
                <img src="/images/photo5.png" alt="Alumni Award" className="w-16 h-16 object-cover rounded-full md:ml-auto" />
                <div className="md:text-right">
                  <p className="font-semibold text-slate-900">Distinguished Alumni Award</p>
                  <p className="text-slate-600 text-sm">2001 - Ahmadu Bello University</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-Right */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-900 inline-block">Industry Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/images/photo6.png" alt="Energy Leadership Award" className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <p className="font-semibold text-slate-900">Energy Leadership Excellence Award</p>
                  <p className="text-slate-600 text-sm">2002 - Industry Recognition</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="/images/refinery.jpg" alt="Corporate Excellence" className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <p className="font-semibold text-slate-900">Corporate Excellence Award</p>
                  <p className="text-slate-600 text-sm">2003 - Business Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



/**
 * DEFAULT EXPORT: The Founder Profile Page
 */
const FounderProfile = () => {
  return (
    <div className="bg-slate-50">
      <FounderHero />
      <Biography />
      <ImageGallery />
      <MemorableSpeeches />
      <AwardsRecognitions />
    </div>
  );
};

export default FounderProfile;
