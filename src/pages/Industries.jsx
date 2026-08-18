import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import EcosystemDiagram from '../components/EcosystemDiagram';
import Button from '../components/Button';
import { industriesData } from '../data/industries';
import { useNavigate } from 'react-router-dom';

export default function Industries() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Industrial Motor Applications | Uni Motors Industries</title>
        <meta name="description" content="Explore low-RPM synchronous motor applications across industrial automation, robotics, conveyors, packaging, medical devices, and appliances." />
      </Helmet>

      <div className="pt-24 lg:pt-28">
        
        {/* ================= INDUSTRIES HERO ================= */}
        <section className="bg-primary-navy text-white py-16 relative overflow-hidden border-b-4 border-brand-gold">
          <div className="absolute inset-0 blueprint-grid-dark opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-3.5 py-1 rounded bg-brand-gold text-primary-navy text-xs font-black uppercase tracking-widest mb-3">
              APPLICATION ECOSYSTEM
            </span>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              INDUSTRIAL & COMMERCIAL SECTORS
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mt-3 font-medium">
              Targeted low-RPM motion solutions engineered for precision equipment, continuous conveyor duty, and packaging machinery.
            </p>
          </div>
        </section>


        {/* ================= ANIMATED ECOSYSTEM DIAGRAM ================= */}
        <section className="py-20 bg-bg-beige blueprint-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="INTERACTIVE ECOSYSTEM"
              title="Central Motion Hub for Industry"
              subtitle="UNI MOTORS serves as the motion engine powering six key machinery pillars."
              centered={true}
            />

            <div className="mt-8">
              <EcosystemDiagram />
            </div>
          </div>
        </section>


        {/* ================= EDITORIAL INDUSTRY CARDS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="DETAILED SECTOR BREAKDOWN"
              title="10 Application Profiles"
              subtitle="Understand how our AC synchronous motors and gearboxes perform in specific operational environments."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {industriesData.map((ind, idx) => (
                <IndustryCard key={ind.id} industry={ind} index={idx} />
              ))}
            </div>
          </div>
        </section>


        {/* ================= CUSTOM APPLICATION CTA ================= */}
        <section className="py-16 bg-primary-navy text-white border-t-2 border-brand-gold relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <h2 className="text-3xl font-black text-white">
              Don't See Your Exact Application Listed?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Our engineering team regularly customizes shaft dimensions, gear reduction ratios, and coil voltages for specialized OEM machinery.
            </p>
            <div className="pt-2">
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Consult an Application Engineer
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
