 import { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

import { Menu, X, ChevronDown } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';



export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);



  const navigation = [

    { name: 'Home', href: '/' },

    {

      name: 'Who We Are',

      href: '/about',

      dropdown: [

        { name: 'About Us', href: '/about' },

        { name: 'Leadership', href: '/leadership' },

        { name: 'Founder', href: '/founder-profile' },

      ],

    },

    { name: 'What We Do', href: '/operations' },

    { name: 'Sustainability', href: '/sustainability' },

    { name: 'Investors', href: '/investors' },

  ];



  return (

    <header className="relative left-0 right-0 z-50 bg-primary/90 backdrop-blur-xl border-b border-accent/10 shadow-lg">

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* UPDATED: Added 'relative' for absolute centering of nav */}

        <div className="relative flex justify-between items-center h-20">

          {/* Branded Logo */}

          <div className="flex items-center">

            <motion.div

              whileHover={{ scale: 1.05 }}

              transition={{ duration: 0.2 }}

            >

              <Link to="/" className="flex items-center space-x-3">

                <img

                  src="/images/logo.png"

                  alt="Blacksand PLC Logo"

                  className="h-12 w-auto"

                />

                <div className="flex flex-col">

                  <div className="text-xl text-clean tracking-tight font-poppins">

                    BLACKSAND PLC.

                  </div>

                </div>

              </Link>

            </motion.div>

          </div>



          {/* UPDATED: Desktop Navigation (Now centered) */}

          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">

            {navigation.map((item) => (

              <motion.div

                key={item.name}

                whileHover={{ y: -2 }}

                transition={{ duration: 0.2 }}

                className="relative"

              >

                {item.dropdown ? (

                  <div>

                    <button

                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}

                      className="relative text-sm font-bold transition-colors duration-200 font-poppins text-accent/80 hover:text-clean flex items-center gap-1"

                    >

                      {item.name}

                      <ChevronDown className="w-4 h-4" />

                    </button>

                    <AnimatePresence>

                      {isAboutDropdownOpen && (

                        <motion.div

                          initial={{ opacity: 0, y: -10 }}

                          animate={{ opacity: 1, y: 0 }}

                          exit={{ opacity: 0, y: -10 }}

                          transition={{ duration: 0.2 }}

                          className="absolute top-full left-0 mt-2 w-48 bg-primary/95 backdrop-blur-md rounded-lg shadow-lg border border-accent/20 py-2 z-50"

                        >

                          {item.dropdown.map((subItem) => (

                            <NavLink

                              key={subItem.name}

                              to={subItem.href}

                              onClick={() => setIsAboutDropdownOpen(false)}

                              className={({ isActive }) =>

                                `block px-4 py-2 text-sm font-bold transition-colors duration-200 font-poppins ${

                                  isActive

                                    ? 'text-clean bg-accent/10'

                                    : 'text-accent/80 hover:text-clean hover:bg-accent/5'

                                }`

                              }

                              end={subItem.href === '/'}

                            >

                              {subItem.name}

                            </NavLink>

                          ))}

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </div>

                ) : (

                  <NavLink

                    to={item.href}

                    className={({ isActive }) =>

                      `relative text-sm font-bold transition-colors duration-200 font-poppins ${

                        isActive

                          ? 'text-clean'

                          : 'text-accent/80 hover:text-clean'

                      }`

                    }

                    end={item.href === '/'}

                  >

                    {({ isActive }) => (

                      <>

                        {item.name}

                        {!isActive && (

                          <motion.div

                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-clean"

                            whileHover={{ width: '100%' }}

                            transition={{ duration: 0.3 }}

                          />

                        )}

                      </>

                    )}

                  </NavLink>

                )}

              </motion.div>

            ))}

          </div>



          {/* Desktop CTA Button */}

          <div className="hidden lg:flex items-center">

            <motion.div

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: 0.95 }}

            >

              <Link

                to="/contact"

                className="px-6 py-2.5 bg-white text-slate-900 text-sm font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 font-poppins shadow-md hover:shadow-lg"

              >

                Contact Us

              </Link>

            </motion.div>

          </div>



          {/* Mobile Menu Button */}

          {/* UPDATED: Ensure z-index is high enough if it overlaps centered nav (it shouldn't) */}

          <button

            onClick={() => setIsMenuOpen(!isMenuOpen)}

            className="lg:hidden p-2 text-accent/80 hover:text-clean transition-colors duration-200 z-10"

          >

            <span className="sr-only">Open menu</span>

            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

          </button>

        </div>



        {/* Mobile Menu Dropdown */}

        <AnimatePresence>

          {isMenuOpen && (

            <motion.div

              initial={{ opacity: 0, height: 0 }}

              animate={{ opacity: 1, height: 'auto' }}

              exit={{ opacity: 0, height: 0 }}

              transition={{ duration: 0.3 }}

              className="lg:hidden py-4 border-t border-accent/20 bg-primary/90 backdrop-blur-xl"

            >

              {navigation.map((item, index) => (

                <motion.div

                  key={item.name}

                  initial={{ opacity: 0, x: -20 }}

                  animate={{ opacity: 1, x: 0 }}

                  transition={{ delay: index * 0.1 }}

                >

                  {item.dropdown ? (

                    <div>

                      <div className="px-4 py-3 text-base  text-accent/80 font-poppins">

                        {item.name}

                      </div>

                      {item.dropdown.map((subItem, subIndex) => (

                        <motion.div

                          key={subItem.name}

                          initial={{ opacity: 0, x: -20 }}

                          animate={{ opacity: 1, x: 0 }}

                          transition={{ delay: (index + subIndex + 1) * 0.1 }}

                        >

                          <NavLink

                            to={subItem.href}

                            onClick={() => setIsMenuOpen(false)}

                            className={({ isActive }) =>

                              `block px-8 py-2 text-sm font-bold transition-colors duration-200 font-poppins ${

                                isActive

                                  ? 'text-clean bg-accent/10 rounded-md'

                                  : 'text-accent/80 hover:text-clean'

                              }`

                            }

                            end={subItem.href === '/'}

                          >

                            {subItem.name}

                          </NavLink>

                        </motion.div>

                      ))}

                    </div>

                  ) : (

                    <NavLink

                      to={item.href}

                      onClick={() => setIsMenuOpen(false)}

                      className={({ isActive }) =>

                        `block px-4 py-3 text-base font-bold transition-colors duration-200 font-poppins ${

                          isActive

                            ? 'text-clean bg-accent/10 rounded-md'

                            : 'text-accent/80 hover:text-clean'

                        }`

                      }

                      end={item.href === '/'}

                    >

                      {item.name}

                    </NavLink>

                  )}

                </motion.div>

              ))}

              <motion.div

                className="px-4 pt-4"

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: (navigation.length + 1) * 0.1 }}

              >

                <Link

                  to="/contact"

                  onClick={() => setIsMenuOpen(false)}

                  className="block w-full px-6 py-3 bg-accent text-clean text-sm font-bold rounded-lg text-center hover:bg-accent/80 transition-all duration-200 font-poppins shadow-md hover:shadow-lg"

                >

                  Contact Us

                </Link>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </nav>

    </header>

  );

}