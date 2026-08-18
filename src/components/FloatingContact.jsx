import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingContact() {
  return (
    <>
      {/* Bottom-Left Floating Phone Button */}
      <div className="fixed bottom-6 left-6 z-40 group">
        {/* Tooltip */}
        <div className="absolute left-14 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-primary-navy text-white text-xs font-bold py-1.5 px-3 rounded shadow-lg whitespace-nowrap border border-brand-gold/30">
          Call Sales & Engineering (+91 96196 83758)
        </div>

        <motion.a
          href="tel:+919619683758"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-13 h-13 rounded-full bg-primary-navy text-brand-gold shadow-2xl border-2 border-brand-gold cursor-pointer"
          aria-label="Call Uni Motors Industries"
        >
          {/* Pulsing ring around button */}
          <span className="absolute -inset-1 rounded-full bg-brand-gold/30 animate-ping opacity-75" />
          <Phone className="w-6 h-6 relative z-10" />
        </motion.a>
      </div>

      {/* Bottom-Right Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 group">
        {/* Tooltip */}
        <div className="absolute right-14 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-lg whitespace-nowrap border border-emerald-500/30">
          Instant WhatsApp Enquiry
        </div>

        <motion.a
          href="https://wa.me/919619683758"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 text-white shadow-2xl border-2 border-emerald-300 cursor-pointer"
          aria-label="WhatsApp Uni Motors Industries"
        >
          {/* Pulsing green ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75" />
          <MessageSquare className="w-6 h-6 relative z-10 fill-current" />
        </motion.a>
      </div>
    </>
  );
}
