import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Settings, Layers, HeartHandshake, ShieldCheck, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categoryShowcase } from '../data/products';

export default function Products() {
  const navigate = useNavigate();

  const stats = [
    {
      number: "2006",
      label: "Since",
      sub: "Continuous Manufacturing"
    },
    {
      number: "10+",
      label: "Industrial Sectors",
      sub: "Applications Powered"
    },
    {
      number: "100%",
      label: "Custom Solutions",
      sub: "Tailored Shafts & Gears"
    },
    {
      number: "Global",
      label: "Market Reach",
      sub: "Domestic & Export Markets"
    }
  ];

  const usps = [
    {
      title: "Customisation Option",
      description: "We delivers tailored made solutions for customers unique needs and Requirements",
      icon: Settings
    },
    {
      title: "Wide Product Range",
      description: "Offering a diverse range of motors and gearbox to cater to various industries and applications need",
      icon: Layers
    },
    {
      title: "Customer Centric Approach",
      description: "Prioritizing customer satisfaction by providing user-friendly, economical, and high-quality products",
      icon: HeartHandshake
    },
    {
      title: "Safety and Compliance",
      description: "An ISO 9001:2015 and 14001:2015 Certified Organization. Our Products are ROHs, UL and CE certified meeting industry standards for safety and reliability.",
      icon: ShieldCheck
    },
    {
      title: "Technical Expertise",
      description: "Dedicated to research and development and Providing technically superior products with superior performance for enhanced efficiency.",
      icon: Cpu
    }
  ];

  return (
    <>
      <Helmet>
        <title>Technical Motor & Gearbox Range | Uni Motors Industries</title>
        <meta
          name="description"
          content="Explore Uni Motors Industries 4 core industrial product categories: Synchronous Motors, PM Stepper Motors, Spur Gearbox, and DC Geared Motors."
        />
      </Helmet>

      <div className="pt-24 lg:pt-28">
        
        {/* ================= PRODUCTS HERO ================= */}
        <section className="bg-primary-navy text-white py-14 relative overflow-hidden border-b-4 border-brand-gold">
          <div className="absolute inset-0 blueprint-grid-dark opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-3.5 py-1 rounded bg-brand-gold text-primary-navy text-xs font-black uppercase tracking-widest mb-3 shadow-md">
              TECHNICAL MOTOR & GEARBOX CATALOGUE
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              Precision Motors & Gearboxes
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-3 font-medium leading-relaxed">
              Explore our core motion technology range designed for continuous duty industrial machinery and precision timing systems.
            </p>
          </div>
        </section>


        {/* ================= 4 CORE CATEGORY SHOWCASE (PHOTO & NAME ONLY) ================= */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryShowcase.map((cat, index) => {
                const isComingSoon = cat.status === "Comming soon";

                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    onClick={() => navigate(`/products/${cat.id}`)}
                    className="rounded-xl border border-slate-200 hover:border-brand-gold transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl group bg-white cursor-pointer hover:-translate-y-1"
                  >
                    {/* Image Container */}
                    <div className="relative h-56 w-full bg-slate-50 overflow-hidden flex items-center justify-center p-6 border-b border-slate-100 group-hover:bg-amber-50/20 transition-colors">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                      />
                      {isComingSoon && (
                        <div className="absolute top-3 left-3 bg-amber-500 text-primary-navy text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded shadow">
                          Comming soon
                        </div>
                      )}
                    </div>

                    {/* Below Photo: ONLY THE NAME (nothing else) */}
                    <div className="p-5 text-center bg-white group-hover:bg-slate-50/60 transition-colors flex items-center justify-center gap-2">
                      <h3 className="text-lg font-black text-primary-navy group-hover:text-secondary-navy transition-colors">
                        {cat.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ================= WHY CHOOSE UNIMOTORINDUSTRIES FOR YOUR BUSINESS ================= */}
        <section className="py-16 bg-primary-navy text-white relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
              Why choose UniMotorIndustries for your business
            </h2>

            <p className="text-sm sm:text-base text-brand-gold font-bold italic max-w-2xl mx-auto mb-12">
              "Engineered for applications that demand dependable motion."
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-secondary-navy/70 border border-brand-gold/30 rounded-xl p-6 backdrop-blur shadow-md hover:border-brand-gold transition-all"
                >
                  <div className="text-3xl sm:text-5xl font-black text-brand-gold mb-2 tracking-tight">
                    {s.number}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-1">
                    {s.label}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {s.sub}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* ================= UNIQUE SELLING PROPOSITION ( USP ) ================= */}
        <section className="py-20 bg-bg-beige border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold bg-primary-navy px-3 py-1 rounded">
                OUR CORE ADVANTAGES
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-primary-navy uppercase tracking-tight mt-3">
                Unique Selling Proposition ( USP )
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usps.map((usp, idx) => {
                const IconComponent = usp.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-amber-50 border border-brand-gold/30 flex items-center justify-center text-primary-navy mb-4">
                        <IconComponent className="w-6 h-6 text-primary-navy" />
                      </div>
                      <h3 className="text-base font-black text-primary-navy uppercase mb-2">
                        {usp.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {usp.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
