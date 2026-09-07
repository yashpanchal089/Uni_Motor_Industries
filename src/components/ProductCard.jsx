import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileCheck } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  const [imgError, setImgError] = useState(false);
  const specs = product.specifications || {};

  // Extract the exact 3 concise key lines matching Mechtex card display
  const renderCardExcerpt = () => {
    if (product.category === "Synchronous Motors") {
      return (
        <div className="space-y-1 text-xs text-slate-700 font-medium py-1">
          <p><span className="font-bold text-primary-navy">Speed:</span> {specs.speed ? specs.speed.split('(')[0].trim() : '500 RPM'}</p>
          <p><span className="font-bold text-primary-navy">Torque:</span> {specs.torque || '1.35 Ncm'}</p>
          <p><span className="font-bold text-primary-navy">Input Power:</span> {specs.inputPower ? specs.inputPower.split('(')[0].trim() : '2.1 W'}</p>
        </div>
      );
    } else if (product.category === "PM Stepper Motors") {
      return (
        <div className="space-y-1 text-xs text-slate-700 font-medium py-1">
          <p><span className="font-bold text-primary-navy">Step Angle:</span> {specs.stepAngle ? specs.stepAngle.split('(')[0].trim() : '15°'}</p>
          <p><span className="font-bold text-primary-navy">Holding Torque:</span> {specs.holdingTorque || '2.5 cNm'}</p>
          <p><span className="font-bold text-primary-navy">Voltage:</span> {specs.voltage || '6V to 24V DC'}</p>
        </div>
      );
    } else {
      // Spur Gearbox
      return (
        <div className="space-y-1 text-xs text-slate-700 font-medium py-1">
          <p><span className="font-bold text-primary-navy">Gear Torque:</span> {specs.gearTorque || '0.5 to 1 Nm'}</p>
          <p><span className="font-bold text-primary-navy">Lateral Force:</span> {specs.lateralForce || '60 N'}</p>
          <p><span className="font-bold text-primary-navy">Dimensions:</span> {specs.dimensions || '55.2 x 65.8 mm'}</p>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Card Visual Header */}
        <div className="w-full h-52 bg-slate-50 relative overflow-hidden flex items-center justify-center p-4 border-b border-slate-200 group">
          {product.image && !imgError ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="max-h-44 max-w-full object-contain filter drop-shadow-sm transform transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="text-slate-400 font-bold text-sm">Uni Motors Model</div>
          )}

          {/* Drawing Available Badge */}
          {product.drawingImage && (
            <div className="absolute top-2.5 left-2.5 bg-emerald-700/95 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow flex items-center gap-1 backdrop-blur">
              <FileCheck className="w-3 h-3" />
              <span>Drawing</span>
            </div>
          )}

          {/* Category Tag */}
          <div className="absolute top-2.5 right-2.5 bg-primary-navy/90 text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-brand-gold/30">
            {product.category}
          </div>
        </div>

        {/* Content Body: Clean, concise text matching Mechtex cards */}
        <div className="p-5 text-center">
          {/* Product Title */}
          <h3 className="text-xl font-black text-primary-navy group-hover:text-secondary-navy transition-colors mb-2">
            {product.name}
          </h3>

          {/* Concise Excerpt - strictly limited to 3 key specs, no cluttered text */}
          <div className="bg-slate-50 rounded p-3 border border-slate-100 text-left">
            {renderCardExcerpt()}
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="px-5 pb-5 pt-0">
        <button
          onClick={() => onSelect(product)}
          className="w-full py-2.5 px-4 rounded bg-primary-navy hover:bg-brand-gold text-white hover:text-primary-navy font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm cursor-pointer"
        >
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
