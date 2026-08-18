import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Award, Globe2, Cpu, ArrowRight, CheckCircle2, Phone, MessageSquare, Zap, Layers, RefreshCw } from 'lucide-react';

import MotorAnimation from '../components/MotorAnimation';
import SectionHeading from '../components/SectionHeading';
import USPCard from '../components/USPCard';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import ClientLogo from '../components/ClientLogo';
import Button from '../components/Button';

import { productsData } from '../data/products';
import { industriesData } from '../data/industries';
import { clientsData } from '../data/clients';

export default function Home() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 5 USPs defined explicitly for Uni Motors
  const uspList = [
    {
      number: 1,
      title: "PRECISION ENGINEERING",
      description: "Motors engineered for accurate, consistent and dependable motion.",
      iconName: "Compass"
    },
    {
      number: 2,
      title: "LOW-RPM PERFORMANCE",
      description: "Designed to deliver controlled motion and dependable torque at low speeds.",
      iconName: "Gauge"
    },
    {
      number: 3,
      title: "APPLICATION-FOCUSED SOLUTIONS",
      description: "Solutions developed around your equipment, operating conditions and performance requirements.",
      iconName: "Cpu"
    },
    {
      number: 4,
      title: "BUILT FOR LONG LIFE",
      description: "Robust motor solutions designed for reliable operation and extended service life.",
      iconName: "ShieldCheck"
    },
    {
      number: 5,
      title: "RESPONSIVE TECHNICAL SUPPORT",
      description: "Practical technical assistance from requirement understanding to product selection.",
      iconName: "Headphones"
    }
  ];

  // Pick top 4 products for homepage preview
  const featuredProducts = productsData.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Uni Motors Industries | Low RPM & Synchronous Geared Motors</title>
        <meta name="description" content="UNI MOTORS Industries is a leading manufacturer of low-RPM synchronous geared motors, AC synchronous motors and DC geared motors in Mumbai, India." />
      </Helmet>

      <div className="pt-24 lg:pt-28">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[90vh] flex items-center bg-bg-beige blueprint-grid overflow-hidden py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headline & Action */}
              <div className="lg:col-span-7 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-navy/5 border border-primary-navy/15 text-primary-navy text-xs font-bold uppercase tracking-widest"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                  MUMBAI, INDIA • MOTOR MANUFACTURER
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-navy tracking-tight leading-[1.1]"
                >
                  PRECISION <br />
                  <span className="text-brand-gold">IN MOTION.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl font-semibold text-slate-800 leading-relaxed max-w-2xl"
                >
                  Reliable Low-RPM Synchronous & Geared Motor Solutions for Industry.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-sm text-slate-600 leading-relaxed max-w-xl"
                >
                  Engineered for precision. Built for reliability. Designed for continuous performance across automation, machinery, and commercial applications.
                </motion.p>

                {/* Hero CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="pt-2 flex flex-wrap items-center gap-4"
                >
                  <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
                    Explore Products
                  </Button>
                  <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>
                    Talk to an Engineer
                  </Button>
                </motion.div>

                {/* Hero Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-slate-300/60 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-bold uppercase tracking-wider"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span>Established 2006</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-gold" />
                    <span>Low-RPM Geared Experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-brand-gold" />
                    <span>Global Export Reach</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Signature Rotating Motor Visualization */}
              <div className="lg:col-span-5">
                <MotorAnimation />
              </div>

            </div>
          </div>
        </section>


        {/* ================= TRUST / CAPABILITY STRIP ================= */}
        <section className="bg-primary-navy text-white py-12 border-y-2 border-brand-gold relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <p className="text-brand-gold text-xs font-extrabold uppercase tracking-widest">
                TRUSTED ENGINEERING & INDUSTRIAL CAPABILITIES
              </p>
              <h3 className="text-lg md:text-xl font-bold text-slate-200 mt-1">
                "Engineered for applications that demand dependable motion."
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-secondary-navy/60 rounded border border-brand-gold/20">
                <div className="text-3xl md:text-4xl font-black text-brand-gold">2006</div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-300 mt-1">Since</div>
                <div className="text-[11px] text-slate-400">Continuous Manufacturing</div>
              </div>

              <div className="p-4 bg-secondary-navy/60 rounded border border-brand-gold/20">
                <div className="text-3xl md:text-4xl font-black text-brand-gold">10+</div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-300 mt-1">Industrial Sectors</div>
                <div className="text-[11px] text-slate-400">Applications Powered</div>
              </div>

              <div className="p-4 bg-secondary-navy/60 rounded border border-brand-gold/20">
                <div className="text-3xl md:text-4xl font-black text-brand-gold">100%</div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-300 mt-1">Custom Solutions</div>
                <div className="text-[11px] text-slate-400">Tailored Shafts & Gears</div>
              </div>

              <div className="p-4 bg-secondary-navy/60 rounded border border-brand-gold/20">
                <div className="text-3xl md:text-4xl font-black text-brand-gold">Global</div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-300 mt-1">Market Reach</div>
                <div className="text-[11px] text-slate-400">Domestic & Export Markets</div>
              </div>
            </div>
          </div>
        </section>


        {/* ================= ABOUT PREVIEW ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <SectionHeading
                  badge="ABOUT UNIMOTOR INDUSTRIES"
                  title="Engineering Reliable Motion Since 2006"
                  subtitle="Established in 2006, UNIMOTOR Industries is a leading manufacturer of synchronous geared motors and low-RPM geared motors based in Mumbai, India."
                />

                <p className="text-slate-600 text-sm leading-relaxed">
                  With years of manufacturing experience, we are committed to delivering reliable, efficient, and high-quality motor solutions for a wide range of industrial and commercial applications.
                </p>

                <div className="bg-bg-beige p-5 rounded-lg border-l-4 border-brand-gold space-y-3">
                  <span className="text-xs font-extrabold uppercase text-primary-navy tracking-wider block">
                    Our Products are Developed with a Strong Focus On:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      <span>Precision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      <span>Consistent Performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      <span>Durability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      <span>High Efficiency</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-semibold">
                  We serve OEMs, Distributors, and Industrial Customers with customized solutions and dependable technical support.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <Button variant="primary" onClick={() => navigate('/about')}>
                    Discover Our Story
                  </Button>
                  <span className="text-xs font-black text-primary-navy uppercase tracking-widest">
                    UNIMOTOR Industries — Reliable Motion. Precise Performance.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-primary-navy p-8 rounded-xl text-white border-2 border-brand-gold/40 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="inline-block bg-brand-gold/20 text-brand-gold px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-brand-gold/30">
                      MANUFACTURING PHILOSOPHY
                    </div>

                    <h3 className="text-2xl font-extrabold text-white">
                      Built Around What Your Equipment Demands.
                    </h3>

                    <div className="space-y-4 text-sm text-slate-300">
                      <p>
                        Every gear train, stator winding, and shaft pinion produced at our Mumbai facility is engineered to withstand continuous operating cycles with zero maintenance overhead.
                      </p>
                      <p>
                        Whether powering precision scientific instruments or heavy-duty packaging machinery, our low-RPM motors deliver consistent velocity and torque stability.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-brand-gold font-bold">
                      <span>MUMBAI MANUFACTURING FACILITY</span>
                      <span>MADE IN INDIA</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ================= PRODUCT SHOWCASE ================= */}
        <section className="py-20 bg-bg-beige blueprint-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="PRODUCT SHOWCASE"
              title="Featured Motor & Gearbox Categories"
              subtitle="Explore our precision bi-directional AC synchronous motors, reduction gearboxes, and custom low-RPM drive solutions."
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
                View Complete Technical Catalogue
              </Button>
            </div>
          </div>
        </section>


        {/* ================= USP SECTION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="WHY PARTNER WITH US"
              title="5 Core Engineering Advantages"
              subtitle="Distinctive capabilities that make Uni Motors Industries the preferred choice for industrial machinery manufacturers."
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {uspList.map((usp) => (
                <USPCard
                  key={usp.number}
                  number={usp.number}
                  title={usp.title}
                  description={usp.description}
                  iconName={usp.iconName}
                />
              ))}
            </div>
          </div>
        </section>


        {/* ================= INDUSTRIES PREVIEW ================= */}
        <section className="py-20 bg-bg-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="APPLICATION SECTORS"
              title="Engineered for Key Industries"
              subtitle="Providing exact speed control and dependable low-RPM torque across diverse industrial applications."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industriesData.slice(0, 6).map((ind, i) => (
                <div
                  key={ind.id}
                  className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block mb-1">
                    SECTOR #{i + 1}
                  </span>
                  <h4 className="text-lg font-extrabold text-primary-navy group-hover:text-secondary-navy transition-colors mb-2">
                    {ind.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                  <button
                    onClick={() => navigate('/industries')}
                    className="text-xs font-bold text-primary-navy group-hover:text-brand-gold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    <span>View Applications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" onClick={() => navigate('/industries')}>
                Explore All 10 Industry Sectors
              </Button>
            </div>
          </div>
        </section>


        {/* ================= WHY UNI MOTORS (DARK NAVY SECTION) ================= */}
        <section className="py-20 bg-primary-navy text-white relative overflow-hidden border-y-4 border-brand-gold">
          <div className="absolute inset-0 blueprint-grid-dark opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              badge="OUR PROMISE"
              title="Motion That Keeps Your Business Moving."
              subtitle="Four pillars of reliability that ensure your machinery runs uninterrupted."
              theme="dark"
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-secondary-navy/80 rounded-lg border border-brand-gold/30 hover:border-brand-gold transition-all">
                <ShieldCheck className="w-8 h-8 text-brand-gold mb-4" />
                <h4 className="text-base font-extrabold text-white uppercase tracking-wider mb-2">
                  Reliable Engineering
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Precision gear ratios and robust coil windings designed for zero speed variance under load.
                </p>
              </div>

              <div className="p-6 bg-secondary-navy/80 rounded-lg border border-brand-gold/30 hover:border-brand-gold transition-all">
                <Cpu className="w-8 h-8 text-brand-gold mb-4" />
                <h4 className="text-base font-extrabold text-white uppercase tracking-wider mb-2">
                  Application-Specific
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Custom shaft flats, lengths, and mounting hole configurations tailored to OEM blueprints.
                </p>
              </div>

              <div className="p-6 bg-secondary-navy/80 rounded-lg border border-brand-gold/30 hover:border-brand-gold transition-all">
                <RefreshCw className="w-8 h-8 text-brand-gold mb-4" />
                <h4 className="text-base font-extrabold text-white uppercase tracking-wider mb-2">
                  Consistent Performance
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rigorous quality testing ensuring every unit meets exact torque and thermal parameters.
                </p>
              </div>

              <div className="p-6 bg-secondary-navy/80 rounded-lg border border-brand-gold/30 hover:border-brand-gold transition-all">
                <Award className="w-8 h-8 text-brand-gold mb-4" />
                <h4 className="text-base font-extrabold text-white uppercase tracking-wider mb-2">
                  Long-Term Partnerships
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Trusted by leading equipment manufacturers across domestic and international markets.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ================= CLIENTS NETWORK ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="INDUSTRIAL NETWORK"
              title="Trusted by Industry"
              subtitle="Serving leading equipment manufacturers, instrument developers, and distributors across India and abroad."
              centered={true}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientsData.map((client, idx) => (
                <ClientLogo key={client.id} client={client} index={idx} />
              ))}
            </div>
          </div>
        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-slate-900 text-white border-t-2 border-brand-gold relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <span className="inline-block bg-brand-gold text-primary-navy px-3.5 py-1 rounded text-xs font-black uppercase tracking-widest shadow-md">
              START A CONVERSATION
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Need the Right Motor for Your Application?
            </h2>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us your application requirements and our technical team will help you identify the right motor and gearbox solution.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Request a Quote
              </Button>
              <Button
                variant="goldOutline"
                size="lg"
                href="https://wa.me/919619683758"
              >
                WhatsApp Us (+91 96196 83758)
              </Button>
            </div>
          </div>
        </section>

      </div>

      {/* Technical Detail Modal Overlay */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
