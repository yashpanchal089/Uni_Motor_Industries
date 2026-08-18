import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRightLeft, Box, Activity, Wind, Home, Compass, Cog, Bot, Sun, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  Cpu,
  ArrowRightLeft,
  Box,
  Activity,
  Wind,
  Home,
  Compass,
  Cog,
  Bot,
  Sun
};

export default function IndustryCard({ industry, index }) {
  const navigate = useNavigate();
  const IconComponent = iconMap[industry.iconName] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-white rounded-lg border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Card Editorial Banner */}
        <div className="bg-primary-navy p-6 relative overflow-hidden text-white border-b-2 border-brand-gold">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block mb-1">
                SECTOR APPLICATION #{index + 1}
              </span>
              <h3 className="text-xl font-extrabold text-white group-hover:text-brand-gold transition-colors">
                {industry.title}
              </h3>
            </div>
            <div className="p-2.5 rounded-lg bg-secondary-navy text-brand-gold border border-brand-gold/30 shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
          </div>

          <p className="relative z-10 text-xs text-slate-300 mt-2 font-medium">
            {industry.subtitle}
          </p>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            {industry.description}
          </p>

          {/* Typical Motor Requirement Box */}
          <div className="bg-bg-beige p-3.5 rounded border-l-4 border-primary-navy text-xs">
            <span className="font-extrabold text-primary-navy uppercase block mb-1">
              Typical Motor Spec:
            </span>
            <span className="text-slate-700 font-medium">
              {industry.typicalRequirement}
            </span>
          </div>

          {/* Applications list */}
          <div>
            <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
              Common Use Cases:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {industry.applications.map((app, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="truncate">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <button
          onClick={() => navigate(`/contact?industry=${encodeURIComponent(industry.title)}`)}
          className="w-full py-2.5 px-4 rounded bg-slate-100 hover:bg-primary-navy text-primary-navy hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-slate-200"
        >
          <span>Explore Application Requirements</span>
          <ArrowRight className="w-4 h-4 text-brand-gold transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
