import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Layers, Download, CheckCircle2, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Button from '../components/Button';
import { productsData, productCategories } from '../data/products';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>AC Synchronous & Geared Motors | Uni Motors Industries</title>
        <meta name="description" content="Technical catalogue of bi-directional AC synchronous motors, low-RPM geared motors, and pear-shaped gearboxes (UM1, GB5PS, GB3S, UM4, GB3, GB4)." />
      </Helmet>

      <div className="pt-24 lg:pt-28">
        
        {/* ================= PRODUCTS HERO ================= */}
        <section className="bg-primary-navy text-white py-16 relative overflow-hidden border-b-4 border-brand-gold">
          <div className="absolute inset-0 blueprint-grid-dark opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block px-3.5 py-1 rounded bg-brand-gold text-primary-navy text-xs font-black uppercase tracking-widest mb-3">
              TECHNICAL MOTOR CATALOGUE
            </span>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              PRECISION MOTOR & GEARBOX RANGE
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mt-3 font-medium">
              Explore technical specifications for bi-directional 500 RPM synchronous motors and pear-shaped reduction gearboxes.
            </p>
          </div>
        </section>


        {/* ================= FILTER & SEARCH CONTROLS ================= */}
        <section className="py-8 bg-bg-beige border-b border-slate-200 sticky top-[68px] z-30 shadow-sm backdrop-blur-md bg-bg-beige/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {productCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-primary-navy text-brand-gold border border-brand-gold shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search model or spec..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded bg-white border border-slate-300 text-xs font-semibold focus:outline-none focus:border-primary-navy text-primary-navy shadow-inner"
                />
              </div>

            </div>
          </div>
        </section>


        {/* ================= PRODUCT GRID ================= */}
        <section className="py-16 bg-white min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-bg-beige rounded-lg border border-slate-200">
                <p className="text-slate-500 font-bold text-sm">No motors found matching your search criteria.</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                  className="mt-4 text-xs font-black text-primary-navy underline uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((prod) => (
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


        {/* ================= TECHNICAL COMPARISON MATRIX ================= */}
        <section className="py-20 bg-bg-beige blueprint-grid border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="ENGINEERING SUMMARY"
              title="Gearbox Torque & Shaft Comparison"
              subtitle="Quick reference sheet for Uni Motors pear-shaped gear reduction units."
            />

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-slate-300">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-primary-navy text-white uppercase text-[11px] font-bold">
                  <tr>
                    <th className="py-3.5 px-4 border-b border-brand-gold">Gearbox Model</th>
                    <th className="py-3.5 px-4 border-b border-brand-gold">Gear Torque</th>
                    <th className="py-3.5 px-4 border-b border-brand-gold">Lateral Torque</th>
                    <th className="py-3.5 px-4 border-b border-brand-gold">Output Shaft</th>
                    <th className="py-3.5 px-4 border-b border-brand-gold">Outer Dimensions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  <tr className="hover:bg-amber-50/60 transition-colors">
                    <td className="py-3 px-4 font-black text-primary-navy">UM1</td>
                    <td className="py-3 px-4 text-slate-800">3 kg-cm</td>
                    <td className="py-3 px-4 text-slate-800">5 kg-cm</td>
                    <td className="py-3 px-4 font-mono">4 x 12 mm</td>
                    <td className="py-3 px-4 font-mono text-slate-600">55.2 x 62 x 12 mm</td>
                  </tr>
                  <tr className="hover:bg-amber-50/60 transition-colors">
                    <td className="py-3 px-4 font-black text-primary-navy">GB5PS</td>
                    <td className="py-3 px-4 text-slate-800">5 kg-cm</td>
                    <td className="py-3 px-4 text-slate-800">6 kg-cm</td>
                    <td className="py-3 px-4 font-mono">4 x 11.5 mm</td>
                    <td className="py-3 px-4 font-mono text-slate-600">55.2 x 65.8 x 16.5 mm</td>
                  </tr>
                  <tr className="hover:bg-amber-50/60 transition-colors">
                    <td className="py-3 px-4 font-black text-primary-navy">GB3S</td>
                    <td className="py-3 px-4 text-slate-800">5 kg-cm</td>
                    <td className="py-3 px-4 text-slate-800">6 kg-cm</td>
                    <td className="py-3 px-4 font-mono">4 x 12 mm</td>
                    <td className="py-3 px-4 font-mono text-slate-600">41 x 16.5 mm</td>
                  </tr>
                  <tr className="hover:bg-amber-50/60 transition-colors">
                    <td className="py-3 px-4 font-black text-primary-navy">UM4</td>
                    <td className="py-3 px-4 text-slate-800">10 kg-cm</td>
                    <td className="py-3 px-4 text-slate-800">6 kg-cm</td>
                    <td className="py-3 px-4 font-mono">4 x 10.5 mm</td>
                    <td className="py-3 px-4 font-mono text-slate-600">55 x 63.8 x 12 mm</td>
                  </tr>
                  <tr className="hover:bg-amber-50/60 transition-colors">
                    <td className="py-3 px-4 font-black text-primary-navy">GB3</td>
                    <td className="py-3 px-4 text-slate-800">50 kg-cm</td>
                    <td className="py-3 px-4 text-slate-800">40 kg-cm</td>
                    <td className="py-3 px-4 font-mono">8 x 17 mm</td>
                    <td className="py-3 px-4 font-mono text-slate-600">60 x 60 x 19 mm</td>
                  </tr>
                  <tr className="hover:bg-amber-50/60 transition-colors">
                    <td className="py-3 px-4 font-black text-primary-navy">GB4</td>
                    <td className="py-3 px-4 text-slate-800">100 kg-cm</td>
                    <td className="py-3 px-4 text-slate-800">80 kg-cm</td>
                    <td className="py-3 px-4 font-mono">8 x 18 mm</td>
                    <td className="py-3 px-4 font-mono text-slate-600">70 x 70 x 19 mm / 78 x 72 x 19 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </section>

      </div>

      {/* Technical Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
