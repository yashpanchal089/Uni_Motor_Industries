import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Gauge, Cpu, ShieldCheck, Headphones } from 'lucide-react';

const iconMap = {
  Compass: Compass,
  Gauge: Gauge,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Headphones: Headphones
};

export default function USPCard({ title, description, iconName, number }) {
  const IconComponent = iconMap[iconName] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white p-8 rounded-lg border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
    >
      {/* Top Gold Line Accent on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-gold transition-colors duration-300" />

      {/* Numbering Watermark */}
      <div className="absolute top-3 right-4 text-4xl font-extrabold text-slate-100 group-hover:text-amber-100/60 transition-colors pointer-events-none select-none">
        0{number}
      </div>

      {/* Engineering Icon */}
      <div className="w-14 h-14 rounded-lg bg-bg-beige group-hover:bg-primary-navy transition-colors duration-300 flex items-center justify-center mb-6 text-primary-navy group-hover:text-brand-gold shadow-inner border border-primary-navy/10">
        <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-extrabold text-primary-navy tracking-tight mb-3 uppercase group-hover:text-secondary-navy transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
