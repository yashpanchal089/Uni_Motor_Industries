import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Award, Globe2, Cpu, ArrowRight, CheckCircle2, Phone, MessageSquare, Zap, Layers, RefreshCw, Compass, Check } from 'lucide-react';

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

  // Motion Container Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    <>
      <Helmet>
        <title>Uni Motors Industries | Low RPM & Synchronous Geared Motors</title>
        <meta name="description" content="UNI MOTORS Industries is a leading manufacturer of low-RPM synchronous geared motors, AC synchronous motors and DC geared motors in Mumbai, India." />
      </Helmet>

      <div className="pt-24 lg:pt-28">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[90vh] flex items-center bg-bg-beige blueprint-grid overflow-hidden py-16">
          {/* Glowing background ambient spotlight */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/15 rounded-full blur-3xl pointer-events-none"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headline & Action */}
              <div className="lg:col-span-7 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-navy/5 border border-primary-navy/15 text-primary-navy text-xs font-extrabold uppercase tracking-widest shadow-sm cursor-default"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-gold"></span>
                  </span>
                  <span>MUMBAI, INDIA • MOTOR MANUFACTURER</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-navy tracking-tight leading-[1.1]"
                >
                  PRECISION <br />
                  <motion.span
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="text-brand-gold"
                  >
                    IN MOTION.
                  </motion.span>
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
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
                      Explore Products
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>
                      Talk to an Engineer
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Floating Highlight Feature Pills */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-2 pt-2"
                >
                  {[
                    "Bi-Directional AC Synchronous",
                    "Gearbox Option Available",
                    "Continuous Duty Operating Cycle"
                  ].map((chip, idx) => (
                    <motion.span
                      key={chip}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 43, 79, 0.08)" }}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/80 border border-slate-300 text-[11px] font-bold text-primary-navy shadow-xs"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-gold stroke-[3]" />
                      {chip}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Hero Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-slate-300/60 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-bold uppercase tracking-wider"
                >
                  <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span>Established 2006</span>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-gold" />
                    <span>Low-RPM Geared Experts</span>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-brand-gold" />
                    <span>Global Export Reach</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Column: Signature Rotating Motor Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <MotorAnimation />
              </motion.div>

            </div>
          </div>
        </section>


        {/* ================= TRUST / CAPABILITY STRIP ================= */}
        <section className="bg-primary-navy text-white py-12 border-y-2 border-brand-gold relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-brand-gold text-xs font-extrabold uppercase tracking-widest">
                TRUSTED ENGINEERING & INDUSTRIAL CAPABILITIES
              </p>
              <h3 className="text-lg md:text-xl font-bold text-slate-200 mt-1">
                "Engineered for applications that demand dependable motion."
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              {[
                { number: "2006", label: "Since", sub: "Continuous Manufacturing" },
                { number: "10+", label: "Industrial Sectors", sub: "Applications Powered" },
                { number: "100%", label: "Custom Solutions", sub: "Tailored Shafts & Gears" },
                { number: "Global", label: "Market Reach", sub: "Domestic & Export Markets" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.03, borderColor: "rgba(229, 165, 26, 0.6)" }}
                  className="p-5 bg-secondary-navy/60 rounded border border-brand-gold/25 shadow-lg transition-all duration-300 backdrop-blur-xs"
                >
                  <div className="text-3xl md:text-4xl font-black text-brand-gold tracking-tight">{stat.number}</div>
                  <div className="text-xs uppercase font-extrabold tracking-wider text-slate-200 mt-1.5">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 font-medium">{stat.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* ================= ABOUT PREVIEW ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <SectionHeading
                  badge="ABOUT UNIMOTOR INDUSTRIES"
                  title="Engineering Reliable Motion Since 2006"
                  subtitle="Established in 2006, UNIMOTOR Industries is a leading manufacturer of synchronous geared motors and low-RPM geared motors based in Mumbai, India."
                />

                <p className="text-slate-600 text-sm leading-relaxed">
                  With years of manufacturing experience, we are committed to delivering reliable, efficient, and high-quality motor solutions for a wide range of industrial and commercial applications.
                </p>

                <div className="bg-bg-beige p-5 rounded-lg border-l-4 border-brand-gold space-y-3 shadow-xs">
                  <span className="text-xs font-extrabold uppercase text-primary-navy tracking-wider block">
                    Our Products are Developed with a Strong Focus On:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                    {[
                      "Precision",
                      "Consistent Performance",
                      "Durability",
                      "High Efficiency"
                    ].map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-semibold">
                  We serve OEMs, Distributors, and Industrial Customers with customized solutions and dependable technical support.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="primary" onClick={() => navigate('/about')}>
                      Discover Our Story
                    </Button>
                  </motion.div>
                  <span className="text-xs font-black text-primary-navy uppercase tracking-widest">
                    UNIMOTOR Industries — Reliable Motion. Precise Performance.
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-primary-navy p-8 rounded-xl text-white border-2 border-brand-gold/40 shadow-2xl relative overflow-hidden transition-all duration-300"
                >
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
                </motion.div>
              </motion.div>

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

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {featuredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard
                    product={product}
                    onSelect={(p) => setSelectedProduct(p)}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
                  View Complete Technical Catalogue
                </Button>
              </motion.div>
            </motion.div>
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

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch"
            >
              {uspList.map((usp) => (
                <motion.div key={usp.number} variants={itemVariants} className="h-full flex flex-col">
                  <USPCard
                    number={usp.number}
                    title={usp.title}
                    description={usp.description}
                    iconName={usp.iconName}
                  />
                </motion.div>
              ))}
            </motion.div>
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

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {industriesData.slice(0, 6).map((ind, i) => (
                <motion.div
                  key={ind.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block mb-1">
                      SECTOR #{i + 1}
                    </span>
                    <h4 className="text-lg font-extrabold text-primary-navy group-hover:text-secondary-navy transition-colors mb-2">
                      {ind.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {ind.description}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('/industries')}
                    className="text-xs font-bold text-primary-navy group-hover:text-brand-gold flex items-center gap-1.5 transition-colors uppercase tracking-wider pt-2"
                  >
                    <span>View Applications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <motion.div className="inline-block" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" onClick={() => navigate('/industries')}>
                  Explore All 10 Industry Sectors
                </Button>
              </motion.div>
            </motion.div>
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

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Reliable Engineering",
                  desc: "Precision gear ratios and robust coil windings designed for zero speed variance under load."
                },
                {
                  icon: Cpu,
                  title: "Application-Specific",
                  desc: "Custom shaft flats, lengths, and mounting hole configurations tailored to OEM blueprints."
                },
                {
                  icon: RefreshCw,
                  title: "Consistent Performance",
                  desc: "Rigorous quality testing ensuring every unit meets exact torque and thermal parameters."
                },
                {
                  icon: Award,
                  title: "Long-Term Partnerships",
                  desc: "Trusted by leading equipment manufacturers across domestic and international markets."
                }
              ].map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03, borderColor: '#E5A51A' }}
                  className="p-6 bg-secondary-navy/80 rounded-lg border border-brand-gold/30 transition-all duration-300 shadow-lg group"
                >
                  <pillar.icon className="w-8 h-8 text-brand-gold mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                  <h4 className="text-base font-extrabold text-white uppercase tracking-wider mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* ================= CLIENTS NETWORK (CONTINUOUS HORIZONTAL LINE MARQUEE) ================= */}
        <section className="py-20 bg-white overflow-hidden border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <SectionHeading
              badge="INDUSTRIAL NETWORK"
              title="Trusted by Industry"
              subtitle="Serving leading equipment manufacturers, instrument developers, and distributors across India and abroad."
              centered={true}
            />
          </div>

          {/* Continuous Non-Stop Single Horizontal Line */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left & Right Soft Fade Masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="animate-marquee-infinite flex items-center">
              {[...clientsData, ...clientsData, ...clientsData].map((client, idx) => (
                <ClientLogo key={`${client.id}-${idx}`} client={client} />
              ))}
            </div>
          </div>
        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="py-20 bg-gradient-to-br from-primary-navy via-secondary-navy to-slate-900 text-white border-t-2 border-brand-gold relative overflow-hidden">
          {/* Animated Background Pulse */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-brand-gold text-primary-navy px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest shadow-md cursor-default"
            >
              START A CONVERSATION
            </motion.span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Need the Right Motor for Your Application?
            </h2>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us your application requirements and our technical team will help you identify the right motor and gearbox solution.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                  Request a Quote
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="goldOutline"
                  size="lg"
                  href="https://wa.me/919619683758"
                >
                  WhatsApp Us (+91 96196 83758)
                </Button>
              </motion.div>
            </div>
          </motion.div>
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

