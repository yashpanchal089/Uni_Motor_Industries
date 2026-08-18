import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8 border-t-4 border-brand-gold relative overflow-hidden">
      {/* Background blueprint subtle graphic */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/80">
          
          {/* Brand Info (2 columns wide on lg screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block bg-white/95 p-3 rounded-md shadow-lg transition-transform hover:scale-105">
              <img src={logoImg} alt="UNI MOTOR INDUSTRIES" className="h-14 md:h-16 w-auto object-contain" />
            </Link>
            <p className="text-brand-gold font-bold tracking-wider text-sm uppercase pt-2">
              Reliable Motion. Precise Performance.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              UNIMOTOR Industries manufactures reliable low-RPM synchronous and geared motor solutions for industrial and commercial applications.
            </p>
            
            {/* Quick Contact Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919619683758"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-secondary-navy hover:bg-brand-gold hover:text-primary-navy text-xs font-semibold transition-all border border-slate-600/40"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 96196 83758
              </a>
              <a
                href="https://wa.me/919619683758"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-950/60 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-semibold transition-all border border-emerald-500/30"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp Direct
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm pb-1 border-b border-slate-700">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-brand-gold transition-colors flex items-center gap-1 group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-brand-gold transition-colors flex items-center gap-1 group">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={scrollToTop} className="hover:text-brand-gold transition-colors flex items-center gap-1 group">
                  <span>Products</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/industries" onClick={scrollToTop} className="hover:text-brand-gold transition-colors flex items-center gap-1 group">
                  <span>Industries</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-brand-gold transition-colors flex items-center gap-1 group">
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm pb-1 border-b border-slate-700">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/products" onClick={scrollToTop} className="hover:text-brand-gold transition-colors">
                  AC Synchronous Motors
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={scrollToTop} className="hover:text-brand-gold transition-colors">
                  DC Geared Motors
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={scrollToTop} className="hover:text-brand-gold transition-colors">
                  Low-RPM Motors
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={scrollToTop} className="hover:text-brand-gold transition-colors">
                  Pear-Shaped Gearboxes
                </Link>
              </li>
              <li>
                <Link to="/products" onClick={scrollToTop} className="hover:text-brand-gold transition-colors">
                  Custom Motor Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Applications & Address Column */}
          <div className="space-y-3">
            <h4 className="text-brand-gold font-bold uppercase tracking-wider text-sm pb-1 border-b border-slate-700">
              Works & Office
            </h4>
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <p className="font-semibold text-white">UNIMOTORS Industries</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  Arshiwad Industrial Estate No.3/109,<br />
                  Ram Mandir West, Mumbai 400104, India
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+919619683758" className="hover:text-brand-gold transition-colors font-medium">
                  +91 96196 83758
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Uni Motors Industries. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-gold cursor-pointer transition-colors">Terms & Conditions</span>
            <button
              onClick={scrollToTop}
              className="text-brand-gold font-bold hover:underline ml-2 uppercase tracking-widest text-[11px]"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
