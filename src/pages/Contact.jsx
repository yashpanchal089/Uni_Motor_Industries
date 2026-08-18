import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageSquare, MapPin, Mail, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productRequirement: '',
    applicationIndustry: '',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Parse query params for pre-filling product or industry requirement
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prod = params.get('product');
    const ind = params.get('industry');

    if (prod) {
      setFormData((prev) => ({ ...prev, productRequirement: prod }));
    }
    if (ind) {
      setFormData((prev) => ({ ...prev, applicationIndustry: ind }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Uni Motors Industries | Mumbai</title>
        <meta name="description" content="Contact Uni Motors Industries in Mumbai. Call +91 96196 83758 or submit your motor & gearbox application requirements online." />
      </Helmet>

      <div className="pt-24 lg:pt-28">
        
        {/* ================= CONTACT HERO ================= */}
        <section className="bg-primary-navy text-white py-16 relative overflow-hidden border-b-4 border-brand-gold">
          <div className="absolute inset-0 blueprint-grid-dark opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-3.5 py-1 rounded bg-brand-gold text-primary-navy text-xs font-black uppercase tracking-widest mb-3">
              TECHNICAL CONSULTATION
            </span>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              LET'S BUILD THE RIGHT MOTION SOLUTION.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mt-3 font-medium">
              Have a motor requirement? Tell us about your application and equipment parameters.
            </p>
          </div>
        </section>


        {/* ================= CONTACT DETAILS & FORM ================= */}
        <section className="py-20 bg-bg-beige blueprint-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Direct Contact Details & WhatsApp Button */}
              <div className="lg:col-span-5 space-y-8">
                <SectionHeading
                  badge="GET IN TOUCH"
                  title="Direct Contact & Office"
                  subtitle="Reach our sales and engineering support directly."
                />

                <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-md space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded bg-primary-navy text-brand-gold shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                        Works & Registered Office
                      </h4>
                      <p className="text-sm font-extrabold text-primary-navy mt-1">
                        UNIMOTORS Industries
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        Arshiwad Industrial Estate No.3/109,<br />
                        Ram Mandir West, Mumbai 400104,<br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Phone Direct */}
                  <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                    <div className="p-3 rounded bg-primary-navy text-brand-gold shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                        Direct Phone / Inquiry
                      </h4>
                      <a
                        href="tel:+919619683758"
                        className="text-base font-extrabold text-primary-navy hover:text-brand-gold transition-colors block mt-1"
                      >
                        +91 96196 83758
                      </a>
                      <span className="text-[11px] text-slate-500">Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                    </div>
                  </div>

                  {/* WhatsApp Direct Action */}
                  <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                    <div className="p-3 rounded bg-emerald-600 text-white shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                        Instant WhatsApp Consultation
                      </h4>
                      <a
                        href="https://wa.me/919619683758"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        <span>Chat on WhatsApp</span>
                        <Send className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>

                {/* Assurance Box */}
                <div className="bg-primary-navy text-white p-6 rounded-lg border-l-4 border-brand-gold space-y-3">
                  <div className="flex items-center gap-2 text-brand-gold text-xs font-extrabold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Technical Support Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our engineering team reviews all motor requirements within 24 business hours to provide exact torque ratings, shaft dimensions, and sample trial availability.
                  </p>
                </div>

              </div>

              {/* Right Column: Interactive B2B Contact Form */}
              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-lg border border-slate-200 shadow-xl">
                
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-black text-primary-navy">
                        Enquiry Submitted Successfully!
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you for contacting <strong>UNIMOTORS Industries</strong>. Our engineering team will review your specifications and get back to you shortly at <strong>{formData.email}</strong>.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '', companyName: '', email: '', phone: '', productRequirement: '', applicationIndustry: '', quantity: '', message: ''
                          });
                        }}
                        className="px-6 py-2.5 rounded bg-primary-navy text-white font-bold text-xs uppercase tracking-wider hover:bg-secondary-navy transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="border-b border-slate-200 pb-4">
                        <h3 className="text-xl font-extrabold text-primary-navy">
                          Request a Technical Quote / Inquiry
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Fill in your equipment details for prompt assistance.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-3.5 py-2.5 rounded border text-xs font-semibold focus:outline-none ${
                              errors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-primary-navy'
                            }`}
                          />
                          {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                        </div>

                        {/* Company Name */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Acme Automation Pvt Ltd"
                            className={`w-full px-3.5 py-2.5 rounded border text-xs font-semibold focus:outline-none ${
                              errors.companyName ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-primary-navy'
                            }`}
                          />
                          {errors.companyName && <p className="text-[11px] text-red-500 mt-1">{errors.companyName}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full px-3.5 py-2.5 rounded border text-xs font-semibold focus:outline-none ${
                              errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-primary-navy'
                            }`}
                          />
                          {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Phone / WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className={`w-full px-3.5 py-2.5 rounded border text-xs font-semibold focus:outline-none ${
                              errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-primary-navy'
                            }`}
                          />
                          {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                        </div>

                        {/* Product Requirement */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Product / Motor Category
                          </label>
                          <input
                            type="text"
                            name="productRequirement"
                            value={formData.productRequirement}
                            onChange={handleChange}
                            placeholder="e.g. AC Synchronous Motor 500 RPM"
                            className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs font-semibold focus:outline-none focus:border-primary-navy"
                          />
                        </div>

                        {/* Quantity */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g. 50 units / Batch"
                            className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs font-semibold focus:outline-none focus:border-primary-navy"
                          />
                        </div>

                      </div>

                      {/* Application / Industry */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Application / Equipment Type
                        </label>
                        <input
                          type="text"
                          name="applicationIndustry"
                          value={formData.applicationIndustry}
                          onChange={handleChange}
                          placeholder="e.g. Packaging Conveyor Indexing Drive"
                          className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs font-semibold focus:outline-none focus:border-primary-navy"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Message & Specific Requirements
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Provide any specific shaft size (e.g. 3x7mm), gear torque requirements, or mounting constraints..."
                          className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs font-semibold focus:outline-none focus:border-primary-navy"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        Send Enquiry
                      </Button>

                    </form>
                  )}
                </AnimatePresence>

              </div>

            </div>
          </div>
        </section>


        {/* ================= MAP SECTION ================= */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="MUMBAI HEADQUARTERS"
              title="Visit Our Manufacturing Facility"
              centered={true}
            />

            <div className="rounded-lg overflow-hidden border border-slate-300 h-96 shadow-lg mt-8 relative">
              <iframe
                title="Uni Motors Industries Google Maps Location"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8300%2C19.1400%2C72.8600%2C19.1600&amp;layer=mapnik&amp;marker=19.1500%2C72.8450"
              />
              <div className="absolute top-4 left-4 bg-primary-navy text-white px-4 py-2 rounded shadow-lg border border-brand-gold text-xs font-bold">
                Arshiwad Industrial Estate No.3/109, Ram Mandir West, Mumbai 400104
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
