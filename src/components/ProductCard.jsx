import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, Gauge, Layers, Shield } from 'lucide-react';

// Generates styled high-tech SVG motor graphics for product visual presentation
const RenderProductVisual = ({ imageType, name }) => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-secondary-navy via-primary-navy to-slate-900 rounded-t-lg relative overflow-hidden flex items-center justify-center p-6 border-b border-brand-gold/30 group">
      {/* Blueprint grid background inside card header */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

      {/* Outer Radial Ring HUD */}
      <div className="absolute w-36 h-36 rounded-full border border-dashed border-brand-gold/30 animate-spin-slow" />

      {/* SVG Motor Vector Illustration */}
      <div className="relative z-10 w-28 h-28 transform transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
          <defs>
            <linearGradient id={`grad-${imageType}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4C44E" />
              <stop offset="100%" stopColor="#E5A51A" />
            </linearGradient>
          </defs>

          {/* Motor / Gearbox Housing Geometry */}
          {imageType.includes('gearbox') ? (
            /* Pear Shaped Gearbox Body */
            <g>
              <path
                d="M 40,100 C 40,40 100,40 130,70 Q 160,100 160,130 C 160,170 100,170 40,100 Z"
                fill="none"
                stroke="url(#grad-gearbox-1)"
                strokeWidth="6"
              />
              <circle cx="90" cy="100" r="32" fill="#041B33" stroke="#F4C44E" strokeWidth="3" />
              <circle cx="90" cy="100" r="10" fill="#E5A51A" />
              <line x1="90" y1="100" x2="135" y2="65" stroke="#F4C44E" strokeWidth="4" strokeLinecap="round" />
            </g>
          ) : (
            /* Cylindrical AC Synchronous Motor Body */
            <g>
              <rect x="40" y="50" width="120" height="100" rx="12" fill="none" stroke="url(#grad-ac-motor-1)" strokeWidth="6" />
              <circle cx="100" cy="100" r="34" fill="#062B4F" stroke="#F4C44E" strokeWidth="3" />
              <circle cx="100" cy="100" r="12" fill="#E5A51A" />
              <path d="M 30,70 L 30,130 M 170,70 L 170,130" stroke="#F4C44E" strokeWidth="4" strokeLinecap="round" />
            </g>
          )}
        </svg>
      </div>

      {/* Category Overlay Tag */}
      <div className="absolute top-3 right-3 bg-primary-navy/90 text-brand-gold text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded border border-brand-gold/40 shadow-sm backdrop-blur">
        PRECISION MOTOR
      </div>
    </div>
  );
};

export default function ProductCard({ product, onSelect }) {
  const specs = product.specifications;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Card Visual Header */}
        <RenderProductVisual imageType={product.imageType} name={product.name} />

        {/* Content Body */}
        <div className="p-6">
          {/* Category Label */}
          <div className="text-xs font-extrabold text-brand-gold tracking-widest uppercase mb-1">
            {product.category}
          </div>

          {/* Product Title */}
          <h3 className="text-lg font-extrabold text-primary-navy group-hover:text-secondary-navy transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Technical Specs Key Highlights */}
          <div className="bg-bg-beige/70 p-3 rounded border border-slate-200/70 space-y-2 mb-4">
            {specs.speed && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-primary-navy" /> Speed:
                </span>
                <span className="font-extrabold text-primary-navy">{specs.speed}</span>
              </div>
            )}

            {specs.torque && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-primary-navy" /> Torque:
                </span>
                <span className="font-extrabold text-primary-navy">{specs.torque}</span>
              </div>
            )}

            {specs.gearTorque && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-primary-navy" /> Gear Torque:
                </span>
                <span className="font-extrabold text-primary-navy">{specs.gearTorque}</span>
              </div>
            )}

            {specs.outputShaft && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-primary-navy" /> Shaft:
                </span>
                <span className="font-extrabold text-slate-800">{specs.outputShaft}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="px-6 pb-6 pt-0">
        <button
          onClick={() => onSelect(product)}
          className="w-full py-2.5 px-4 rounded bg-primary-navy hover:bg-brand-gold text-white hover:text-primary-navy font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
        >
          <span>View Technical Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
