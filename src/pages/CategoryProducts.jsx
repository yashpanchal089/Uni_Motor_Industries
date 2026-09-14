import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Send, Search, Compass, Layers, Shield, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import SectionHeading from '../components/SectionHeading';
import { productsData, categoryShowcase } from '../data/products';

// Detailed overview & application content extracted directly from Mechtex category pages
const categoryContent = {
  "synchronous-motors": {
    name: "Synchronous Motors",
    categoryKey: "Synchronous Motors",
    badge: "AC PERMANENT MAGNET SYNCHRONOUS MOTORS",
    headline: "High Precision Constant-Speed AC Synchronous Motor Solutions",
    intro: "UL- and CE-certified bi-directional AC synchronous motors engineered for precise, constant-speed performance with zero rotational slip under rated load conditions. Available across voltages from 12V to 240V AC and power ratings up to 30W.",
    characteristics: [
      "Constant speed operation: Maintains fixed RPM regardless of variable mechanical loads.",
      "High-accuracy speed control: Precise synchronisation with external systems with zero slip.",
      "Extended service life: Robust construction with self-lubricating sintered bronze bearings.",
      "Stall-protected design: Integrated safety features prevent winding damage during stall.",
      "Direct gearbox coupling: Readily combines with spur gearboxes for high output torque."
    ],
    applications: [
      "Recorders & Timing Instrumentation",
      "Automated Valve Actuators & Dampers",
      "Peristaltic & Chemical Dosing Pumps",
      "Medical Laboratory Equipment",
      "Textile & Diamond Machinery",
      "Air Conditioning & Refrigeration Controls",
      "Automatic Vending Machines",
      "CCTV Camera Positioning Systems"
    ]
  },
  "pm-stepper-motors": {
    name: "PM Stepper Motors",
    categoryKey: "PM Stepper Motors",
    badge: "PERMANENT MAGNET STEPPING MOTOR RANGE",
    headline: "Precision Angular Stepper Motors for Incremental Motion",
    intro: "High-performance permanent magnet stepper motors engineered for discrete angular positioning, rapid pulse acceleration, and reliable detent holding torque. Available in 7.5°, 11.25°, and 15° step angles in bipolar and unipolar configurations.",
    characteristics: [
      "Discrete angular positioning: 24, 32, and 48 steps per revolution.",
      "High holding torque: Strong detent and dynamic holding torque up to 30 cNm.",
      "Rapid start-stop response: Fast settling times with minimal overshoot.",
      "Wide drive voltage compatibility: Operates smoothly on 3V to 24V DC drive systems.",
      "Continuous duty resilience: Thermal endurance ratings up to 130°C (Class F)."
    ],
    applications: [
      "Textile Machinery & Yarn Motion Feeders",
      "Medical Infusion Pumps & Diagnostic Equipment",
      "Commercial Combi Ovens & Food Automation",
      "Industrial Voltage Stabilizers & Servo Regulators",
      "Camera Focus & Optical Filter Positioners",
      "Analytical Specimen Liquid Handlers",
      "Currency & Ticket Dispensing Mechanisms",
      "Robotic End-Effector Drives"
    ]
  },
  "spur-gearbox": {
    name: "Spur Gearbox",
    categoryKey: "Spur Gearbox",
    badge: "PRECISION SPUR REDUCTION GEARHEADS",
    headline: "Engineered Reduction Gearboxes for Torque Multiplication",
    intro: "Die-cast metal alloy reduction gearboxes featuring hardened ground steel gear trains, reinforced sleeve or ball bushings, and wide reduction ratios. Designed for smooth power transmission and high lateral force resistance.",
    characteristics: [
      "High gear torque transmission: Output ratings ranging from 0.5 Nm up to 15 Nm.",
      "Extensive gear ratio flexibility: Reduction options up to 5.4 lac:1.",
      "High lateral force tolerance: Built to absorb severe radial loads up to 600 N.",
      "Multi-position universal mounting: Symmetrical mounting holes with circular and pear-shaped frames.",
      "Long-life synthetic lubrication: Factory sealed for zero maintenance."
    ],
    applications: [
      "Automated Industrial Valve Controls",
      "Conveyor Belt Indexing & Material Feeder Drives",
      "Industrial Agitators & Liquid Mixing Vats",
      "Automated Gates, Barriers & Access Turnstiles",
      "Packaging Sealing & Crimping Drives",
      "Display Turntables & Rotary Carousels",
      "Vending Machine Delivery Mechanisms",
      "Overhead Hoists & Heavy Linear Actuators"
    ]
  },
  "dc-geared-motors": {
    name: "DC Geared Motors",
    categoryKey: "DC Geared Motors",
    badge: "DC MOTORS & SPEED REDUCERS",
    headline: "DC Geared Motors - Coming soon",
    intro: "Our upcoming product line of low-RPM brushed DC motors with integrated reduction gearheads is currently undergoing electrical testing and certification. Standard voltages in 12V, 24V, and 48V DC will be available soon for OEM applications.",
    characteristics: [
      "Coming soon for OEM prototyping and volume manufacturing.",
      "Variable speed regulation using standard PWM DC motor controllers.",
      "Tailored gear ratios and output shaft flats to customer drawings.",
      "High power-to-weight ratio for portable and automated machinery."
    ],
    applications: [
      "Battery-Powered Automated Guided Vehicles",
      "Solar Panel Multi-Axis Trackers",
      "Medical Patient Mobility Equipment",
      "OEM Automated Dispensing Systems"
    ]
  }
};

export default function CategoryProducts() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const content = categoryContent[categorySlug] || {
    name: "Product Category",
    categoryKey: categorySlug,
    badge: "MOTOR CATEGORY",
    headline: "Precision Motor Range",
    intro: "Explore our certified engineering motor and gearbox units.",
    characteristics: [],
    applications: []
  };

  const isComingSoon = categorySlug === "dc-geared-motors";

  // Filter motors belonging strictly to this category
  const categoryMotors = useMemo(() => {
    return productsData.filter((p) => {
      const matchesCategory = p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug ||
                              p.category === content.categoryKey;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [categorySlug, content.categoryKey, searchQuery]);

  return (
    <>
      <Helmet>
        <title>{`${content.name} | Uni Motors Technical Catalogue`}</title>
        <meta name="description" content={content.intro} />
      </Helmet>

      <div className="pt-24 lg:pt-28">
        
        {/* ================= BREADCRUMB & BACK BAR ================= */}
        <section className="bg-slate-100 border-b border-slate-200 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <Link to="/" className="hover:text-primary-navy">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary-navy">Products</Link>
              <span>/</span>
              <span className="text-primary-navy font-bold">{content.name}</span>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-navy hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Categories</span>
            </Link>
          </div>
        </section>


        {/* ================= CATEGORY HEADER HERO ================= */}
        <section className="bg-primary-navy text-white py-14 relative overflow-hidden border-b-4 border-brand-gold">
          <div className="absolute inset-0 blueprint-grid-dark opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded bg-brand-gold text-primary-navy text-xs font-black uppercase tracking-widest mb-3 shadow">
                {content.badge}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
                {content.headline}
              </h1>

              <p className="text-base text-slate-300 mt-4 leading-relaxed font-medium">
                {content.intro}
              </p>
            </div>
          </div>
        </section>


        {/* ================= ENGINEERING OVERVIEW & APPLICATIONS ================= */}
        {!isComingSoon && (
          <section className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Key Characteristics Box */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-black uppercase tracking-wider text-primary-navy mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-brand-gold" /> Key Engineering Characteristics
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                    {content.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Applications Box */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-black uppercase tracking-wider text-primary-navy mb-4 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-gold" /> Specified Applications & Industries
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    {content.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-1.5 bg-white rounded border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span className="truncate">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}


        {/* ================= CATEGORY MOTORS LISTING ================= */}
        <section className="py-16 bg-slate-50 min-h-[50vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header with Search */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-primary-navy uppercase tracking-tight">
                  {content.name} Models
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {isComingSoon
                    ? "Product line in preparation."
                    : `Showing ${categoryMotors.length} certified models with 2D drawings & technical datasheets.`}
                </p>
              </div>

              {!isComingSoon && (
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder={`Search ${content.name}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded bg-slate-50 border border-slate-300 text-xs font-semibold focus:outline-none focus:border-primary-navy text-primary-navy shadow-inner"
                  />
                </div>
              )}
            </div>

            {/* Special Section: DC Geared Motors "Comming soon" */}
            {isComingSoon ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl border border-brand-gold/50 shadow-md p-8 md:p-12 text-center max-w-3xl mx-auto my-8"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <span className="inline-block px-3 py-1 rounded bg-brand-gold text-primary-navy text-xs font-black uppercase tracking-widest mb-3">
                  NEW PRODUCT LINE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-primary-navy uppercase mb-3">
                  DC Geared Motors - Coming soon
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-6">
                  Our dedicated range of low-RPM brushed DC motors with integrated spur reduction gearheads is currently completing electrical and endurance testing. Custom configurations in 12V, 24V, and 48V DC will be available for OEM equipment prototyping.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => navigate('/contact?subject=DC%20Geared%20Motors%20Inquiry')}
                    className="w-full sm:w-auto px-6 py-3 rounded bg-primary-navy hover:bg-brand-gold text-white hover:text-primary-navy font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <Send className="w-4 h-4" />
                    <span>Inquire About Early DC Motor Samples</span>
                  </button>
                  <Link
                    to="/products"
                    className="w-full sm:w-auto px-6 py-3 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    View All Categories
                  </Link>
                </div>
              </motion.div>
            ) : categoryMotors.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg border border-slate-200 shadow-sm">
                <p className="text-slate-500 font-bold text-sm">No models found matching "{searchQuery}".</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-xs font-black text-primary-navy underline uppercase tracking-wider cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryMotors.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onSelect={(p) => setSelectedProduct(p)}
                  />
                ))}
              </div>
            )}

          </div>
        </section>


        {/* ================= FULL SPECIFICATIONS COMPARISON TABLE ================= */}
        {!isComingSoon && (
          <section className="py-16 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                badge="TECHNICAL SPEC SHEET"
                title={`${content.name} Engineering Matrix`}
                subtitle={`Full parameter matrix for active ${content.name} models with dimensional drawings and ratings.`}
              />

              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-slate-300">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-primary-navy text-white uppercase text-[11px] font-bold">
                    <tr>
                      <th className="py-3.5 px-4 border-b border-brand-gold">Model Name</th>
                      <th className="py-3.5 px-4 border-b border-brand-gold">Speed / Steps</th>
                      <th className="py-3.5 px-4 border-b border-brand-gold">Torque Rating</th>
                      <th className="py-3.5 px-4 border-b border-brand-gold">Input Rating</th>
                      <th className="py-3.5 px-4 border-b border-brand-gold">Drawing Available</th>
                      <th className="py-3.5 px-4 border-b border-brand-gold text-right">Datasheet</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium">
                    {categoryMotors.map((p) => {
                      const speedOrSteps = p.specifications?.speed || p.specifications?.stepAngle || p.specifications?.gearType || 'Direct';
                      const torque = p.specifications?.torque || p.specifications?.holdingTorque || p.specifications?.gearTorque || 'High Torque';
                      const input = p.specifications?.inputPower || p.specifications?.voltage || p.specifications?.axialThrust || 'Standard';

                      return (
                        <tr
                          key={p.id}
                          onClick={() => setSelectedProduct(p)}
                          className="hover:bg-amber-50/60 transition-colors cursor-pointer"
                        >
                          <td className="py-3 px-4 font-black text-primary-navy">
                            <span>{p.name}</span>
                          </td>
                          <td className="py-3 px-4 font-mono text-slate-700">{speedOrSteps}</td>
                          <td className="py-3 px-4 font-mono text-slate-900 font-bold">{torque}</td>
                          <td className="py-3 px-4 font-mono text-slate-600">{input}</td>
                          <td className="py-3 px-4">
                            {p.drawingImage ? (
                              <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Yes (2D CAD)
                              </span>
                            ) : (
                              <span className="text-slate-400 text-xs">On Request</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className="text-xs font-bold text-primary-navy hover:text-brand-gold uppercase tracking-wider underline">
                              View Specs & Drawing &rarr;
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

            </div>
          </section>
        )}

      </div>

      {/* Technical Specification & Drawing Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
