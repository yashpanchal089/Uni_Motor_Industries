import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Box, ArrowRightLeft, Activity, Cog, Home, Zap } from 'lucide-react';

const nodes = [
  { name: "Automation", icon: Cpu, angle: 0 },
  { name: "Packaging", icon: Box, angle: 60 },
  { name: "Conveyors", icon: ArrowRightLeft, angle: 120 },
  { name: "Precision Equipment", icon: Activity, angle: 180 },
  { name: "Industrial Machinery", icon: Cog, angle: 240 },
  { name: "Appliances", icon: Home, angle: 300 },
];

export default function EcosystemDiagram() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square md:aspect-[16/10] flex items-center justify-center p-4 bg-primary-navy rounded-xl shadow-2xl border-2 border-brand-gold/40 overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

      {/* Background Rotating Ring */}
      <div className="absolute w-[80%] aspect-square rounded-full border border-dashed border-brand-gold/20 animate-spin-slow pointer-events-none" />

      {/* SVG Connecting Vector Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <g stroke="#E5A51A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4">
          <line x1="50%" y1="50%" x2="80%" y2="50%" />
          <line x1="50%" y1="50%" x2="65%" y2="80%" />
          <line x1="50%" y1="50%" x2="35%" y2="80%" />
          <line x1="50%" y1="50%" x2="20%" y2="50%" />
          <line x1="50%" y1="50%" x2="35%" y2="20%" />
          <line x1="50%" y1="50%" x2="65%" y2="20%" />
        </g>
      </svg>

      {/* CENTER NODE: UNI MOTORS */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-36 h-36 rounded-full bg-gradient-to-br from-brand-gold via-light-gold to-amber-600 p-1 shadow-[0_0_40px_rgba(229,165,26,0.5)] flex items-center justify-center text-center"
      >
        <div className="w-full h-full rounded-full bg-primary-navy flex flex-col items-center justify-center p-2 border-2 border-brand-gold">
          <Zap className="w-6 h-6 text-brand-gold animate-bounce mb-1" />
          <span className="text-xs font-black tracking-widest text-white uppercase">UNI MOTORS</span>
          <span className="text-[9px] font-bold text-brand-gold uppercase tracking-tighter">MOTION HUB</span>
        </div>
      </motion.div>

      {/* SATELLITE APPLICATION NODES */}
      
      {/* Node 1: Automation */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute top-[12%] right-[18%] z-10 bg-secondary-navy text-white px-3.5 py-2 rounded-lg border border-brand-gold/60 shadow-lg flex items-center gap-2"
      >
        <Cpu className="w-4 h-4 text-brand-gold" />
        <span className="text-xs font-bold uppercase tracking-wider">Automation</span>
      </motion.div>

      {/* Node 2: Packaging */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[46%] right-[5%] z-10 bg-secondary-navy text-white px-3.5 py-2 rounded-lg border border-brand-gold/60 shadow-lg flex items-center gap-2"
      >
        <Box className="w-4 h-4 text-brand-gold" />
        <span className="text-xs font-bold uppercase tracking-wider">Packaging</span>
      </motion.div>

      {/* Node 3: Conveyors */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-[12%] right-[18%] z-10 bg-secondary-navy text-white px-3.5 py-2 rounded-lg border border-brand-gold/60 shadow-lg flex items-center gap-2"
      >
        <ArrowRightLeft className="w-4 h-4 text-brand-gold" />
        <span className="text-xs font-bold uppercase tracking-wider">Conveyors</span>
      </motion.div>

      {/* Node 4: Precision Equipment */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 3.8, repeat: Infinity }}
        className="absolute bottom-[12%] left-[18%] z-10 bg-secondary-navy text-white px-3.5 py-2 rounded-lg border border-brand-gold/60 shadow-lg flex items-center gap-2"
      >
        <Activity className="w-4 h-4 text-brand-gold" />
        <span className="text-xs font-bold uppercase tracking-wider">Precision Equipment</span>
      </motion.div>

      {/* Node 5: Industrial Machinery */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4.2, repeat: Infinity }}
        className="absolute top-[46%] left-[5%] z-10 bg-secondary-navy text-white px-3.5 py-2 rounded-lg border border-brand-gold/60 shadow-lg flex items-center gap-2"
      >
        <Cog className="w-4 h-4 text-brand-gold" />
        <span className="text-xs font-bold uppercase tracking-wider">Industrial Machinery</span>
      </motion.div>

      {/* Node 6: Appliances */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 3.6, repeat: Infinity }}
        className="absolute top-[12%] left-[18%] z-10 bg-secondary-navy text-white px-3.5 py-2 rounded-lg border border-brand-gold/60 shadow-lg flex items-center gap-2"
      >
        <Home className="w-4 h-4 text-brand-gold" />
        <span className="text-xs font-bold uppercase tracking-wider">Appliances</span>
      </motion.div>

    </div>
  );
}
