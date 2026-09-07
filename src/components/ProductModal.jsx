import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, FileText, Send, Compass, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProductModal({ product, onClose }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [drawingError, setDrawingError] = useState(false);

  if (!product) return null;

  const handleEnquire = () => {
    onClose();
    navigate(`/contact?product=${encodeURIComponent(product.name)}`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10 bg-primary-navy/80 backdrop-blur-md">
        
        {/* Backdrop click listener */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden border border-brand-gold/40 z-10 my-8"
        >
          {/* Modal Header */}
          <div className="bg-primary-navy text-white px-6 py-5 flex items-center justify-between border-b-2 border-brand-gold">
            <div>
              <div className="text-xs font-extrabold text-brand-gold tracking-widest uppercase mb-1">
                {product.category} Specification & Drawing
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-white">
                {product.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-secondary-navy transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            
            {/* Overview & Image section */}
            <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 p-6 rounded-lg border border-slate-200">
              {product.image && !imgError && (
                <div className="w-full md:w-56 h-48 bg-white rounded-lg border border-slate-200 p-3 flex items-center justify-center shrink-0 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={() => setImgError(true)}
                    className="max-h-full max-w-full object-contain filter drop-shadow"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-sm font-extrabold text-primary-navy uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-gold" /> Technical Overview
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-3">
                  {product.description}
                </p>
                <div className="inline-block bg-primary-navy/10 text-primary-navy text-xs font-bold px-3 py-1 rounded">
                  Category: <span className="font-extrabold">{product.category}</span>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <div>
              <h3 className="text-sm font-extrabold text-primary-navy uppercase tracking-wider mb-3">
                Technical Specifications & Engineering Parameters
              </h3>
              <div className="overflow-x-auto rounded border border-slate-200">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-primary-navy text-white uppercase text-[11px] font-bold">
                    <tr>
                      <th className="py-3 px-4">Parameter</th>
                      <th className="py-3 px-4">Engineering Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-slate-50/50">
                    {Object.entries(product.specifications || {}).map(([key, val]) => (
                      <tr key={key} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2.5 px-4 font-bold text-primary-navy capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </td>
                        <td className="py-2.5 px-4 font-mono font-semibold text-slate-800">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dimensional Drawing Section */}
            {product.drawingImage && !drawingError && (
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-extrabold text-primary-navy uppercase tracking-wider flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-gold" /> Dimensional Drawing & Mounting Details
                  </h3>
                  <a
                    href={product.drawingImage}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-primary-navy hover:text-brand-gold flex items-center gap-1 underline cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Full Resolution Drawing</span>
                  </a>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 flex items-center justify-center border border-slate-200 overflow-hidden">
                  <img
                    src={product.drawingImage}
                    alt={`Dimensional Drawing of ${product.name}`}
                    onError={() => setDrawingError(true)}
                    className="max-w-full max-h-[360px] object-contain rounded filter contrast-105"
                  />
                </div>
                <p className="text-[11px] text-slate-500 italic mt-2 text-center">
                  Certified engineering dimensional schematic for model {product.name}. All dimensions in millimeters (mm) unless otherwise specified.
                </p>
              </div>
            )}

            {/* Features & Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Features List */}
              <div className="bg-bg-beige/80 p-5 rounded border border-primary-navy/10">
                <h4 className="text-xs font-extrabold text-primary-navy uppercase tracking-wider mb-3">
                  Key Engineering Features
                </h4>
                <ul className="space-y-2">
                  {product.features?.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Applications List */}
              <div className="bg-bg-beige/80 p-5 rounded border border-primary-navy/10">
                <h4 className="text-xs font-extrabold text-primary-navy uppercase tracking-wider mb-3">
                  Recommended Applications
                </h4>
                <ul className="space-y-2">
                  {product.applications?.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-navy shrink-0 mt-1.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="bg-slate-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <div className="text-xs text-slate-600 font-medium">
              Need custom shaft dimensions, specific gear ratios, or voltage windings for this model?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-primary-navy uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={handleEnquire}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-brand-gold text-primary-navy hover:bg-light-gold font-extrabold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enquire About This Product</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
