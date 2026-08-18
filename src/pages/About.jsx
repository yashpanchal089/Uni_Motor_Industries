import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Compass, Users, TrendingUp, MapPin, Phone, Mail, Award, CheckCircle2, Factory } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const coreValues = [
    {
      title: "PRECISION",
      description: "Uncompromising focus on exact gear reduction ratios, shaft tolerances, and rotational consistency.",
      icon: Compass
    },
    {
      title: "RELIABILITY",
      description: "Building motor assemblies designed for continuous operation under variable thermal and mechanical loads.",
      icon: ShieldCheck
    },
    {
      title: "CUSTOMER FOCUS",
      description: "Direct engineering collaboration from requirement understanding to sample evaluation and full production.",
      icon: Users
    },
    {
      title: "CONTINUOUS IMPROVEMENT",
      description: "Ongoing optimization of gear tooth geometry, coil winding techniques, and housing durability.",
      icon: TrendingUp
    }
  ];

  const timelineEvents = [
    {
      year: "2006",
      title: "Company Founded in Mumbai",
      description: "UNIMOTOR Industries was established with a focus on manufacturing synchronous geared motors for local industrial customers."
    },
    {
      year: "Growing Years",
      title: "Building Motor Expertise",
      description: "Expanded our gear reduction portfolio to include pear-shaped gearboxes (UM1, GB5PS, GB3, GB4) and bi-directional AC motors."
    },
    {
      year: "Present & Future",
      title: "Serving Global Markets",
      description: "Supplying OEMs, equipment distributors, and industrial clients across domestic markets and international exports."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Uni Motors Industries | Motor Manufacturing in Mumbai</title>
        <meta name="description" content="Learn about Uni Motors Industries, established in 2006 in Mumbai. Manufacturers of low-RPM synchronous geared motors and custom drive solutions." />
      </Helmet>

      <div className="pt-24 lg:pt-28">
        
        {/* ================= ABOUT HERO ================= */}
        <section className="bg-primary-navy text-white py-20 relative overflow-hidden border-b-4 border-brand-gold">
          <div className="absolute inset-0 blueprint-grid-dark opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3.5 py-1 rounded bg-brand-gold text-primary-navy text-xs font-black uppercase tracking-widest mb-4"
            >
              OUR HERITAGE & EXPERIENCE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
            >
              ENGINEERED WITH EXPERIENCE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed font-medium"
            >
              Reliable motion solutions from Mumbai to industrial applications across markets.
            </motion.p>
          </div>
        </section>


        {/* ================= TIMELINE SECTION ================= */}
        <section className="py-16 bg-bg-beige blueprint-grid">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="MILESTONES"
              title="Journey of Engineering Growth"
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-12">
              {timelineEvents.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white p-6 rounded-lg border-t-4 border-brand-gold shadow-md relative"
                >
                  <div className="text-2xl font-black text-primary-navy mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ================= COMPANY STORY ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="OUR PROFILE"
              title="Company Story & Background"
              subtitle="Structure and commitments that define Uni Motors Industries."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              
              <div className="bg-bg-beige p-8 rounded-lg border border-slate-200 space-y-3">
                <span className="text-xs font-black text-brand-gold uppercase tracking-widest">
                  01 / OUR BEGINNING
                </span>
                <h3 className="text-xl font-extrabold text-primary-navy">
                  Established in 2006 in Mumbai
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Established in 2006, UNIMOTOR Industries is a leading manufacturer of synchronous geared motors and low-RPM geared motors based in Mumbai, India. We started with a clear focus on fulfilling the need for precision-built low-speed drives in domestic industrial equipment.
                </p>
              </div>

              <div className="bg-bg-beige p-8 rounded-lg border border-slate-200 space-y-3">
                <span className="text-xs font-black text-brand-gold uppercase tracking-widest">
                  02 / OUR EXPERTISE
                </span>
                <h3 className="text-xl font-extrabold text-primary-navy">
                  Specialized Motor Manufacturing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  With years of manufacturing experience, we specialize in low-RPM, bi-directional AC synchronous motors and pear-shaped gearboxes. Our technical team understands the precise mechanical and electrical balances required for long operational life.
                </p>
              </div>

              <div className="bg-bg-beige p-8 rounded-lg border border-slate-200 space-y-3">
                <span className="text-xs font-black text-brand-gold uppercase tracking-widest">
                  03 / OUR APPROACH
                </span>
                <h3 className="text-xl font-extrabold text-primary-navy">
                  Application-Focused Development
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our products are developed with a strong focus on precision, consistent performance, durability, efficiency, and customer requirements. We work directly alongside machinery designers to supply exact motor specifications.
                </p>
              </div>

              <div className="bg-bg-beige p-8 rounded-lg border border-slate-200 space-y-3">
                <span className="text-xs font-black text-brand-gold uppercase tracking-widest">
                  04 / OUR COMMITMENT
                </span>
                <h3 className="text-xl font-extrabold text-primary-navy">
                  Dependable Technical Support
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We serve OEMs, distributors, and industrial customers with customized solutions and dependable technical support from initial selection to continuous supply logistics.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ================= CORE VALUES ================= */}
        <section className="py-20 bg-primary-navy text-white border-y-4 border-brand-gold relative">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              badge="GUIDING PRINCIPLES"
              title="Our Core Values"
              subtitle="The foundational standards that govern our product development and client service."
              theme="dark"
              centered={true}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <div key={idx} className="bg-secondary-navy/90 p-8 rounded-lg border border-brand-gold/30 hover:border-brand-gold transition-all">
                    <div className="w-12 h-12 rounded bg-brand-gold text-primary-navy flex items-center justify-center font-bold mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ================= MANUFACTURING PHILOSOPHY ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <SectionHeading
                badge="ENGINEERING INTEGRITY"
                title="Built Around What Your Application Demands."
                centered={true}
              />

              <div className="text-slate-600 text-sm leading-relaxed space-y-4 text-left bg-bg-beige p-8 rounded-lg border border-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-primary-navy block">Application Analysis</span>
                    <span>Deep technical review of required duty cycles, ambient operating temperature, and rotational velocity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-primary-navy block">Motor Characteristic Selection</span>
                    <span>Matching stator power (2.1W to 7.0W) and gear reduction stages (3 kg-cm to 100 kg-cm).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-primary-navy block">Focus on Quality & Durability</span>
                    <span>Precision machining of spur gear trains and shaft bushings for extended service life.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-primary-navy block">Customization & Support</span>
                    <span>Custom shaft dimensions (2x6mm, 3x7mm, 4x12mm, 8x18mm) and mounting setups with full engineering guidance.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                  Discuss Your Custom Motor Requirements
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* ================= LOCATION & MAP ================= */}
        <section className="py-20 bg-bg-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="FACILITY LOCATION"
              title="Works & Registered Office"
              subtitle="Located in the heart of Mumbai's industrial corridor."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-5 bg-primary-navy text-white p-8 rounded-lg border-2 border-brand-gold flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-brand-gold font-black uppercase text-sm tracking-wider">
                    <Factory className="w-6 h-6" />
                    <span>UNIMOTORS Industries</span>
                  </div>

                  <div className="space-y-4 text-sm text-slate-200">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                      <div>
                        <strong className="block text-white">Address:</strong>
                        Arshiwad Industrial Estate No.3/109,<br />
                        Ram Mandir West, Mumbai 400104,<br />
                        Maharashtra, India
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                      <div>
                        <strong className="block text-white">Phone / WhatsApp:</strong>
                        <a href="tel:+919619683758" className="hover:text-brand-gold transition-colors font-bold">
                          +91 96196 83758
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Sales Office
                  </Button>
                </div>
              </div>

              {/* OpenStreetMap / Interactive Map Frame */}
              <div className="lg:col-span-7 rounded-lg overflow-hidden border border-slate-300 min-h-[320px] shadow-md bg-slate-200 relative">
                <iframe
                  title="Uni Motors Industries Mumbai Location Map"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[320px] border-0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.8300%2C19.1400%2C72.8600%2C19.1600&amp;layer=mapnik&amp;marker=19.1500%2C72.8450"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 px-3 py-1 rounded text-[10px] font-bold text-slate-700 shadow">
                  Ram Mandir West, Mumbai 400104
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
