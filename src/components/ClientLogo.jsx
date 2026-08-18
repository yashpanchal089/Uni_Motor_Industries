import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2 } from 'lucide-react';

export default function ClientLogo({ client, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -4, borderColor: '#E5A51A' }}
      className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-36 group relative overflow-hidden"
    >
      {/* Corner Gold Highlight Accent */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-brand-gold/10 rounded-bl-full pointer-events-none group-hover:bg-brand-gold/30 transition-colors" />

      <div className="flex items-start justify-between gap-2">
        <Building2 className="w-5 h-5 text-primary-navy group-hover:text-brand-gold transition-colors shrink-0" />
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
          <Globe className="w-3 h-3 text-slate-400" />
          {client.location}
        </span>
      </div>

      <div className="my-auto">
        <h4 className="text-sm font-extrabold text-primary-navy group-hover:text-secondary-navy transition-colors tracking-tight line-clamp-2">
          {client.name}
        </h4>
        <p className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-1">
          {client.sector}
        </p>
      </div>

      <div className="w-full h-0.5 bg-slate-100 group-hover:bg-brand-gold transition-colors rounded-full" />
    </motion.div>
  );
}
