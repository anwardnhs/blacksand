 import { FaArrowRight, FaLayerGroup, FaShip, FaIndustry, FaBolt, FaGlobe, FaTimes, FaCrown, FaUsers } from 'react-icons/fa';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useState, ReactNode } from 'react';


const FadeInWhenVisible = ({ children }: { children: ReactNode }) => {
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
    >
      {children}
    </motion.div>
  );
};


function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <FadeInWhenVisible>
      <section id="home" ref={targetRef} className="relative h-screen overflow-hidden">

        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/images/offshorerig.jpg"
          style={{ y: videoY }}
        >
          <source src="/videos/oilrigsunset.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>



        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 z-10"></div>

        {/* Content */}
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center z-20"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="text-center">



            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-poppins mb-6 tracking-tight">
              Powering Global Progress
              <span className="block text-white font-bold font-poppins mt-2">
                Through Energy Excellence
              </span>
            </h1>


            <p className="text-xl text-white font-bold font-poppins max-w-3xl mx-auto mb-12 leading-relaxed">
              Founded in 1952, Blacksand has evolved from a pioneering Nigerian enterprise to a Fortune Global 500 energy leader,
              operating across six continents with integrated upstream, midstream, and downstream capabilities that power
              economies and drive sustainable development worldwide.
            </p>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#investors"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-semibold font-poppins hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
              >
                Investor Relations
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#operations"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold font-poppins rounded-lg border border-gray-200/20 hover:bg-white/20 transition-all"
              >
                Our Operations
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            </div>
          </div>
        </motion.div>
      </section>
    </FadeInWhenVisible>
  );
}


function OurScope() {
  const segments = [
    {
      icon: FaLayerGroup,
      name: 'Upstream Excellence',
      description: 'Leading exploration and production across strategic basins, employing deepwater technology and sustainable practices to responsibly develop resources.',
      image: '/images/offshorerig.jpg',
    },
    {
      icon: FaShip,
      name: 'Midstream Mastery',
      description: 'Comprehensive transportation and logistics infrastructure, ensuring reliable and efficient energy distribution across regions.',
      image: '/images/tank3.jpg',
    },
    {
      icon: FaIndustry,
      name: 'Downstream Innovation',
      description: 'Advanced refining and petrochemical operations delivering high-quality fuels and specialty products through continuous optimization and innovation.',

      image: '/images/refinery.jpg',
    },
    {
      icon: FaBolt,
      name: 'Future Energy',
      description: 'Pioneering renewable energy solutions, green hydrogen initiatives, and next‑generation petrochemicals to support a sustainable energy transition.',
      stats: 'Expanding',
      image: '/images/windmill.jpg',
    },
  ];

  return (
    <section id="operations" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span
              className="inline-block px-6 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg"
            >
              Our Operations
            </span>
            <h2
              className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900 font-poppins tracking-tight leading-tight"
            >
              Integrated Energy Ecosystem
            </h2>
            <p
              className="mt-6 text-xl text-slate-700 font-medium font-poppins max-w-4xl mx-auto leading-relaxed"
            >
              From deepwater exploration to sustainable energy solutions, Blacksand delivers end-to-end energy excellence
              across the entire value chain, powering global economies with innovation and reliability.
            </p>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {segments.map((item) => (
              <div
                key={item.name}
                className="group relative h-[500px] lg:h-[600px] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >

                
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />

                <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end text-white">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/30">
                        <item.icon className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white font-poppins group-hover:text-white transition-colors leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-base font-semibold text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-poppins border border-white/30">
                          {item.stats}
                        </span>
                      </div>
                      <p className="text-white leading-relaxed font-poppins text-lg font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="text-center mt-20">
            <a
              href="#operations"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-clean font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-poppins"
            >
              Explore all Our Operations
              <FaArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}


const legacyData = [
  {
    id: 1,
    generation: 'Founder',
    name: 'Alhaji Ibrahim Alhassan CFR',
    title: 'Founder & Managing Director (1952–1991)\nChairman (1991–2007)',
    image: '/images/ibrahim.png',
    summary:
      'Alhaji Ibrahim Alhassan laid the foundation of Blacksand in 1952, pioneering Nigeria\'s energy sector through strategic trading, storage, and logistics. As Chairman, he fostered institutional growth, secured key infrastructure, and built long-term partnerships that propelled national expansion and global aspirations.',
    quote: 'We forged an enterprise driven by self-reliance and national progress.',
  },
  {
    id: 2,
    generation: 'Expansion Era',
    name: 'Abdallah Alhassan CON',
    title: 'Group Chief Executive Officer (1991–2007)\nChairman (2007–2020)',
    image: '/images/abdallah.png',
    summary:
      'Abdallah Alhassan expanded Blacksand\'s horizons as Group Chief Executive Officer, leading upstream ventures and launching the flagship petrochemical complex. As Chairman, he championed governance, forged strategic alliances, and established international trading and LNG networks, elevating Blacksand to a global powerhouse.',
    quote: 'Our mission: Connect Nigeria to the world, and the world to Nigeria.',
  },
  {
    id: 3,
    generation: 'Global Vision',
    name: 'Anwar Alhassan',
    title: 'President, Blacksand Africa (2016–2020)\nNon-Executive Chairman (2020–Present)',
    image: '/images/anwar.png',
    summary:
      'Anwar Alhassan, stepping into the Chair in 2020 after leading Blacksand Africa, has modernized assets, driven strategic acquisitions, and advanced continental gas infrastructure. His leadership culminated in a triumphant 2023 dual listing, fueling Blacksand\'s worldwide ambitions.',
    quote: 'Energy\'s future lies in mastering the complete supply chain.',
  },
];

function OurLegacy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGen, setSelectedGen] = useState<typeof legacyData[number] | null>(null);

  const openModal = (gen: typeof legacyData[number]) => {
    setSelectedGen(gen);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGen(null);
  };


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  } as const;

  const cardVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  } as const;

  return (
    <section id="legacy" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <FadeInWhenVisible>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-black font-poppins tracking-tight leading-tight text-center mb-4"
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <FaUsers className="inline w-8 h-8 mr-3 mb-1" />
                </motion.div>
                Three Generations of Leadership
              </motion.h2>
              <motion.p
                className="text-2xl text-black font-bold font-poppins max-w-5xl mx-auto leading-relaxed text-center"
              >
                A legacy forged through vision, resilience, and unwavering commitment to energy excellence across generations.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {legacyData.map((gen, index) => (
              <motion.button
                key={gen.id}
                onClick={() => openModal(gen)}
                variants={cardVariant}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] focus:outline-none text-left transition-all duration-500 border border-slate-200/50"
                whileHover={{
                  boxShadow: "0 40px 80px -12px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative overflow-hidden rounded-t-3xl h-80 lg:h-96">
                  <motion.img
                    src={gen.image}
                    alt={gen.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-900 font-bold text-sm uppercase tracking-wider rounded-full shadow-lg">
                      {gen.generation}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {gen.name}
                  </motion.h3>
                  <motion.div
                    className="text-base text-slate-600 font-semibold mb-6 uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {gen.title.split('\n').map((line, idx) => (
                      <div key={idx} className="mb-1">{line}</div>
                    ))}
                  </motion.div>
                  <motion.p
                    className="text-slate-700 leading-relaxed font-medium mb-8 line-clamp-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {gen.summary}
                  </motion.p>
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                      Read biography
                      <motion.div
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <FaArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.div>
                </div>
              </motion.button>
                ))}
              </motion.div>


          <AnimatePresence>
            {isModalOpen && selectedGen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
              >
                <motion.div
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={closeModal}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.div
                  initial={{ y: 60, scale: 0.95, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 60, scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative max-w-6xl w-full bg-white rounded-3xl shadow-[0_60px_120px_-12px_rgba(0,0,0,0.25)] p-8 lg:p-12 z-10 border border-slate-200/50 max-h-[90vh] overflow-y-auto"
                >
                  <motion.button
                    onClick={closeModal}
                    className="absolute right-6 top-6 text-slate-600 hover:text-slate-900 bg-white/80 hover:bg-white rounded-full p-3 transition-all duration-200 shadow-lg hover:shadow-xl"
                    aria-label="Close biography"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTimes className="w-6 h-6" />
                  </motion.button>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <motion.div
                      className="lg:col-span-1"
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <img
                          src={selectedGen.image}
                          alt={selectedGen.name}
                          className="w-full h-80 lg:h-[28rem] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                          <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-900 font-bold text-sm uppercase tracking-wider rounded-full shadow-lg">
                            {selectedGen.generation}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="lg:col-span-2 flex flex-col justify-center space-y-8"
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div>
                        <motion.h3
                          className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 leading-tight"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {selectedGen.name}
                        </motion.h3>
                        <motion.div
                          className="text-lg text-slate-600 font-semibold mb-8 uppercase tracking-wide"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {selectedGen.title.split('\n').map((line, idx) => (
                            <div key={idx} className="mb-2">{line}</div>
                          ))}
                        </motion.div>
                      </div>

                      <motion.div
                        className="text-lg text-slate-700 leading-relaxed font-medium space-y-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {selectedGen.summary.split('. ').map((sentence, idx) => (
                          <p key={idx} className="mb-4">{sentence}{sentence.endsWith('.') ? '' : '.'}</p>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <blockquote className="border-l-4 border-accent pl-8 py-6 bg-slate-50 rounded-r-lg">
                          <p className="text-xl text-primary italic font-semibold leading-relaxed mb-4">
                            "{selectedGen.quote}"
                          </p>
                          <cite className="text-base text-slate-600 font-medium">
                            — {selectedGen.name}
                          </cite>
                        </blockquote>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

function GCEOMessage() {
  return (
    <section id="gceo-message" className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  src="/images/gceo.png"
                  alt="GCEO"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <motion.span
                  className="inline-block px-6 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Message from the Group Chief Executive Officer
                </motion.span>
                <motion.h2
                  className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900 font-poppins tracking-tight leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Leading with Vision
                </motion.h2>
              </div>

              <motion.blockquote
                className="text-xl text-slate-700 font-medium font-poppins leading-relaxed border-l-4 border-accent pl-6 italic"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                "Guided by a legacy of stewardship and operational excellence, we remain committed to advancing innovation, sustainability, and responsible growth—delivering reliable energy solutions and enduring value to our stakeholders worldwide."
              </motion.blockquote>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <p className="text-lg text-slate-600 font-medium font-poppins">
                  - Samuel Esenbhalu, Group CEO Blacksand Plc.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}


function GlobalFootprint() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const locations = [
    'Abuja, Nigeria (HQ)',
    'Lagos, Nigeria',
    'Dubai, UAE',
    'London, UK',
    'Houston, USA',
    'Singapore',
  ];

  return (
    <section id="global" ref={ref} className="relative py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden -mt-16">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  src="/images/footprint.jpg"
                  alt="Global Footprint"
                  className="w-full h-[500px] object-cover"
                  style={{ y: imgY }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <motion.span
                  className="inline-block px-6 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Global Footprint
                </motion.span>
                <motion.h2
                  className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900 font-poppins tracking-tight leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Connecting Markets, Delivering Energy
                </motion.h2>
              </div>

              <motion.p
                className="text-xl text-slate-700 font-medium font-poppins leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                From our headquarters in Abuja, Nigeria, Blacksand's global network spans six continents,
                ensuring seamless operations, strategic trading, and comprehensive financing solutions.
                Our integrated presence enables us to deliver energy excellence worldwide, fostering
                sustainable development and economic growth across diverse markets.
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 font-poppins mb-6">
                  Key Locations
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {locations.map((loc, i) => (
                    <motion.li
                      key={loc}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 1.2 }}
                      className="flex items-center space-x-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <FaGlobe className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      <span className="text-lg font-poppins text-slate-800">{loc}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}


function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <motion.span
                  className="inline-block px-6 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Partner With Us
                </motion.span>
                <motion.h2
                  className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900 font-poppins tracking-tight leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Partner with a Global Leader
                </motion.h2>
              </div>

              <motion.p
                className="text-xl text-slate-700 font-medium font-poppins leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Join forces with Blacksand, a Fortune 500 energy powerhouse with over 70 years of excellence.
                Whether you're an investor seeking growth opportunities, a partner exploring collaboration,
                or a professional ready to shape the future of energy, we offer unparalleled expertise and
                global reach to drive mutual success.
              </motion.p>



              <motion.div
                className="flex flex-col sm:flex-row items-center justify-start gap-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <a
                  href="#investors"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                >
                  Investor Relations
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#careers"
                  className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-white transition-all shadow-sm hover:shadow-md"
                >
                  Explore Careers
                </a>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  src="/images/workers.jpg"
                  alt="Our Team"
                  className="w-full h-[500px] object-cover"
                  style={{ y: imgY }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}


function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const highlights = [
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'Operating across six continents with strategic presence in key energy markets worldwide.',
      image: '/images/footprint.jpg'
    },
    {
      icon: FaIndustry,
      title: 'Integrated Operations',
      description: 'Full-spectrum energy solutions from exploration to sustainable energy technologies.',
      image: '/images/refinery.jpg'
    },
    {
      icon: FaUsers,
      title: '70+ Years of Excellence',
      description: 'A legacy of innovation, reliability, and sustainable energy leadership since 1952.',
      image: '/images/workers.jpg'
    }
  ];

  return (
    <section id="who-we-are" ref={ref} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <FadeInWhenVisible>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-6 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Who We Are
            </motion.span>
            <motion.h2
              className="mt-6 text-4xl lg:text-6xl font-bold text-slate-900 font-poppins tracking-tight leading-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Blacksand Plc
            </motion.h2>
            <motion.p
              className="mt-6 text-xl text-slate-700 font-medium font-poppins max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Blacksand is a Fortune Global 500 multinational, integrated energy conglomerate with a distinguished record spanning more than 70 years. We deliver comprehensive solutions across exploration, production, refining, petrochemicals and emerging low‑carbon technologies. Founded in 1952 in Nigeria, the company has matured into a global leader committed to operational excellence, responsible resource stewardship and sustainable long‑term value creation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ y: imgY }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <div className="relative p-8 bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-poppins">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-poppins">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg text-slate-600 font-medium font-poppins max-w-3xl mx-auto leading-relaxed">
              Our commitment to energy excellence drives everything we do. From deepwater exploration to renewable energy innovations,
              we deliver sustainable solutions that power economies and create lasting value for stakeholders worldwide.
            </p>
          </motion.div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

export default function HomePage() {
  return (

    <div className="bg-primary">
      <Hero />
      <WhoWeAre />
      <OurScope />

      <div className="flex justify-center py-16">
        <motion.div
          className="relative w-80 h-20 border-4 border-accent rounded-full bg-gradient-to-r from-slate-100 to-slate-200 shadow-lg flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: { duration: 0.3 }
          }}
        >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm text-black font-bold text-sm uppercase tracking-wider rounded-full border border-accent/30 font-poppins"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaCrown className="w-4 h-4" />
            </motion.div>
            Our Legacy
          </motion.span>
        </motion.div>
      </div>
      <OurLegacy />
      <GCEOMessage />
      <GlobalFootprint />
      <CTA />

    </div>
  );
}
