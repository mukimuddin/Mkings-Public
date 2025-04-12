import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/courses', label: 'Courses' },
    { path: '/store', label: 'Store' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg border-b border-[#FF4500]/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-[#FF4500] to-[#FFD700] bg-clip-text text-transparent">
                    M Kings
                  </span>
                </h1>
                <span className="hidden md:block text-sm text-white/70">
                  Group & Company Ltd.
                </span>
              </div>
              <span className="block text-xs text-white/50 group-hover:text-[#FF4500] transition-colors duration-300">
                Building the Future, One Pixel at a Time
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-sm font-medium transition-colors group ${
                    location.pathname === link.path
                      ? 'text-[#FF4500]'
                      : 'text-white hover:text-[#FF4500]'
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF4500] to-[#FFD700] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"
                    initial={false}
                    animate={location.pathname === link.path ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-white hover:text-[#FF4500] focus:outline-none transition-colors duration-200"
              >
                <span className="sr-only">Open menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0F0F0F]/95 backdrop-blur-md border-t border-[#FF4500]/10"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#FF4500] bg-white/5'
                        : 'text-white hover:text-[#FF4500] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-24" />
    </>
  );
};

export default Navbar; 