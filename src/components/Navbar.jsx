import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-header-light py-1.5 shadow-md'
          : 'bg-bg-beige/90 backdrop-blur-md py-2.5 border-b border-primary-navy/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link to="/" className="flex items-center group py-0.5">
            <img
              src={logoImg}
              alt="UNI MOTOR INDUSTRIES"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled ? 'h-12 sm:h-14 md:h-16 lg:h-18' : 'h-14 sm:h-16 md:h-20 lg:h-24'
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-1 text-sm font-bold tracking-wide uppercase transition-colors duration-200 ${
                    isActive ? 'text-primary-navy font-extrabold' : 'text-slate-700 hover:text-primary-navy'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Enquire CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 rounded-sm bg-primary-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-secondary-navy border border-primary-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-primary-navy text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-navy border-b border-brand-gold/30 shadow-2xl overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between py-3 border-b border-slate-700/50 text-base font-bold tracking-wider uppercase transition-colors ${
                      isActive ? 'text-brand-gold pl-2' : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-gold' : 'text-slate-500'}`} />
                  </Link>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/contact');
                  }}
                  className="w-full py-3 bg-brand-gold text-primary-navy font-bold uppercase tracking-wider rounded-sm text-center shadow-md"
                >
                  Request a Quote
                </button>
                <div className="flex items-center justify-around pt-2 text-slate-300 text-xs font-semibold">
                  <a href="tel:+919619683758" className="flex items-center gap-1.5 hover:text-brand-gold">
                    <Phone className="w-4 h-4 text-brand-gold" />
                    +91 96196 83758
                  </a>
                  <a href="https://wa.me/919619683758" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
