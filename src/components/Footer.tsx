import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaArrowRight,
  FaChevronUp,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {

  const quickLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Our Legacy', href: '#legacy' },
      { name: 'Global Presence', href: '#global' },
      { name: 'Careers', href: '/careers' },
      { name: 'Media Center', href: '/media' },
    ],
    operations: [
      { name: 'Upstream', href: '/operations#upstream' },
      { name: 'Midstream', href: '/operations#midstream' },
      { name: 'Downstream', href: '/operations#downstream' },
      { name: 'Petrochemicals', href: '/operations#petrochemicals' },
      { name: 'LNG & Gas', href: '/operations#lng' },
      { name: 'New Energy', href: '/operations#renewable' },
    ],
    investors: [
      { name: 'Financial Reports', href: '/investors/reports' },
      { name: 'Stock Information', href: '/investors/stock' },
      { name: 'Corporate Governance', href: '/investors/governance' },
      { name: 'Shareholder Services', href: '/investors/shareholders' },
      { name: 'SEC Filings', href: '/investors/sec' },
      { name: 'Presentations', href: '/investors/presentations' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com/blacksandenergy', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com/blacksandenergy', label: 'Twitter' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/company/blacksandenergy', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/blacksandenergy', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com/blacksandenergy', label: 'YouTube' },
  ];





  return (
    <footer className="relative bg-gradient-to-br from-[#0A2B3D] via-[#0A2B3D] to-[#0A2B3D] text-white overflow-hidden font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -20],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#A3B1C2] to-[#FFFFFF] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-[#0A2B3D] font-bold text-2xl">B</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight font-poppins">BLACKSAND</div>
                  <div className="text-sm text-white -mt-1 font-medium">Energy for the World</div>
                </div>
              </div>

              <p className="text-white leading-relaxed mb-6 text-lg">
                A Fortune 500 multinational integrated energy conglomerate with over 70 years of excellence
                in exploration, production, refining, petrochemicals, and sustainable energy solutions.
              </p>


            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Links */}
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-6 flex items-center gap-2">
                    <FaGlobe className="w-5 h-5 text-[#A3B1C2]" />
                    Company
                  </h4>
                  <ul className="space-y-3">
                    {quickLinks.company.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <a
                          href={link.href}
                          className="text-white hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                          <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Operations Links */}
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-6 flex items-center gap-2">
                    <FaArrowRight className="w-5 h-5 text-[#A3B1C2]" />
                    Operations
                  </h4>
                  <ul className="space-y-3">
                    {quickLinks.operations.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <a
                          href={link.href}
                          className="text-white hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                          <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Investors Links */}
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-6 flex items-center gap-2">
                    <FaChevronUp className="w-5 h-5 text-[#A3B1C2]" />
                    Investors
                  </h4>
                  <ul className="space-y-3">
                    {quickLinks.investors.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <a
                          href={link.href}
                          className="text-white hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                          <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="border-t border-white/10 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
              Stay Connected
            </h3>
            <p className="text-white mb-8 text-lg">
              Subscribe to our newsletter for the latest updates on energy innovation and corporate developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all"
              />
              <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">
                Subscribe
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-white font-medium text-sm mr-2">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#A3B1C2]/10 hover:bg-[#A3B1C2]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="w-4 h-4 text-[#A3B1C2] group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright & Legal */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center sm:text-left">
                © 2024 Blacksand Energy Plc. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a href="/privacy" className="hover:text-white transition-colors font-medium">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-white transition-colors font-medium">
                  Terms of Service
                </a>
                <a href="/compliance" className="hover:text-white transition-colors font-medium">
                  Compliance
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </footer>
  );
}
