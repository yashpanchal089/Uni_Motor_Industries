import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge = "ENGINEERING PRECISION",
  title,
  subtitle,
  centered = false,
  theme = "light",
  className = ""
}) {
  const isDark = theme === "dark";

  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border ${
            isDark
              ? 'bg-brand-gold/10 text-brand-gold border-brand-gold/30'
              : 'bg-primary-navy/5 text-primary-navy border-primary-navy/15'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-primary-navy'
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 w-20 gold-gradient-line mt-4 mb-4 rounded-full ${
          centered ? 'mx-auto origin-center' : 'origin-left'
        }`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className={`text-base md:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
