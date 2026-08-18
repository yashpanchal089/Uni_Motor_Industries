import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Gauge, Zap, RotateCw } from 'lucide-react';

export default function MotorAnimation() {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center select-none">
      
      {/* Background Engineering Blueprint HUD Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer Tech Ring with Degree Markers */}
        <div className="w-[85%] h-[85%] rounded-full border border-dashed border-primary-navy/20 animate-spin-slow flex items-center justify-center">
          <div className="absolute top-0 w-2 h-2 bg-brand-gold rounded-full shadow-[0_0_8px_#E5A51A]" />
          <div className="absolute bottom-0 w-2 h-2 bg-primary-navy rounded-full" />
          <div className="absolute left-0 w-2 h-2 bg-primary-navy rounded-full" />
          <div className="absolute right-0 w-2 h-2 bg-brand-gold rounded-full" />
        </div>

        {/* Reverse Rotating Measurement HUD Ring */}
        <div className="absolute w-[70%] h-[70%] rounded-full border-2 border-primary-navy/15 animate-spin-reverse flex items-center justify-center">
          <div className="w-full h-full rounded-full border-t-2 border-brand-gold/60" />
        </div>

        {/* Pulsing Concentric Radial Lines */}
        <div className="absolute w-[50%] h-[50%] rounded-full border border-primary-navy/30 animate-pulse-subtle" />
      </div>

      {/* Axis Blueprint Crosshair Lines */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary-navy/25 to-transparent" />
        <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-primary-navy/25 to-transparent absolute" />
      </div>

      {/* Main Motor Body & Rotating Shaft Visual */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[64%] aspect-square flex items-center justify-center"
      >
        {/* Motor Drop Shadow */}
        <div className="absolute -bottom-6 w-3/4 h-8 bg-primary-navy/20 blur-xl rounded-full" />

        {/* Outer Pear-Shaped / Cylindrical Motor Body SVG Graphic */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="casingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B3A63" />
                <stop offset="50%" stopColor="#062B4F" />
                <stop offset="100%" stopColor="#031628" />
              </linearGradient>

              <linearGradient id="goldCapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F4C44E" />
                <stop offset="50%" stopColor="#E5A51A" />
                <stop offset="100%" stopColor="#B37E0E" />
              </linearGradient>

              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E5A51A" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E5A51A" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base Housing Flange */}
            <path
              d="M 60,150 Q 60,60 150,60 Q 240,60 240,150 Q 240,240 150,240 Q 60,240 60,150 Z"
              fill="url(#casingGrad)"
              stroke="#E5A51A"
              strokeWidth="2.5"
            />

            {/* Pear-shaped Shaft Offset Mount Bracket */}
            <path
              d="M 120,60 L 180,60 L 195,110 L 105,110 Z"
              fill="url(#casingGrad)"
              stroke="#062B4F"
              strokeWidth="2"
            />

            {/* External Stator Fin Ribs (Engineering lines) */}
            <line x1="75" y1="120" x2="225" y2="120" stroke="#E5A51A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="75" y1="150" x2="225" y2="150" stroke="#E5A51A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="75" y1="180" x2="225" y2="180" stroke="#E5A51A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

            {/* Pear-Shaped Gear Housing Outline */}
            <circle cx="150" cy="150" r="68" fill="none" stroke="url(#goldCapGrad)" strokeWidth="3" />

            {/* Concentric Rotor Bearing Ring */}
            <circle cx="150" cy="150" r="42" fill="#041B33" stroke="#F4C44E" strokeWidth="2" />

            {/* Inner Shaft Center Hub Glow */}
            <circle cx="150" cy="150" r="30" fill="url(#hubGlow)" />
          </svg>

          {/* Continuous Rotating Motor Drive Shaft Centerpiece */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative w-16 h-16 flex items-center justify-center"
            >
              {/* Shaft D-Cut Flat Notch & Keyway */}
              <div className="w-12 h-12 rounded-full border-4 border-brand-gold bg-gradient-to-tr from-slate-900 via-secondary-navy to-slate-800 shadow-inner flex items-center justify-center relative">
                {/* Keyway Notch Line */}
                <div className="w-1.5 h-6 bg-brand-gold rounded-sm absolute top-1" />
                {/* Shaft Center Core */}
                <div className="w-4 h-4 bg-white rounded-full shadow-md" />
              </div>
            </motion.div>
          </div>

          {/* Technical Center Rotation Indicator Badge */}
          <div className="absolute bottom-2 bg-primary-navy/90 text-brand-gold text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-brand-gold/40 flex items-center gap-1 shadow-md">
            <RotateCw className="w-3 h-3 animate-spin" />
            <span>SHAFT ROTATION :: 500 RPM</span>
          </div>
        </div>
      </motion.div>

      {/* FLOATING TECHNICAL HUD SPECIFICATION BADGES */}
      
      {/* Top Left Badge - 500 RPM */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-6 left-0 bg-white/95 backdrop-blur border-l-4 border-brand-gold py-2 px-3.5 rounded shadow-lg flex items-center gap-2.5"
      >
        <div className="p-1.5 rounded bg-primary-navy text-brand-gold">
          <Gauge className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Synchronous Speed</div>
          <div className="text-sm font-extrabold text-primary-navy">500 RPM</div>
        </div>
      </motion.div>

      {/* Top Right Badge - HIGH TORQUE */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-10 right-0 bg-white/95 backdrop-blur border-r-4 border-primary-navy py-2 px-3.5 rounded shadow-lg flex items-center gap-2.5"
      >
        <div className="p-1.5 rounded bg-brand-gold text-primary-navy">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Gear Output</div>
          <div className="text-sm font-extrabold text-primary-navy">HIGH TORQUE (100 kg-cm)</div>
        </div>
      </motion.div>

      {/* Bottom Left Badge - LOW NOISE */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-12 left-2 bg-white/95 backdrop-blur border-l-4 border-emerald-500 py-2 px-3.5 rounded shadow-lg flex items-center gap-2.5"
      >
        <div className="p-1.5 rounded bg-emerald-100 text-emerald-800">
          <Activity className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Acoustic Profile</div>
          <div className="text-sm font-extrabold text-primary-navy">LOW NOISE OPERATING</div>
        </div>
      </motion.div>

      {/* Bottom Right Badge - PRECISION ENGINEERED */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 right-2 bg-white/95 backdrop-blur border-r-4 border-brand-gold py-2 px-3.5 rounded shadow-lg flex items-center gap-2.5"
      >
        <div className="p-1.5 rounded bg-primary-navy text-brand-gold">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Quality Standard</div>
          <div className="text-sm font-extrabold text-primary-navy">PRECISION ENGINEERED</div>
        </div>
      </motion.div>

    </div>
  );
}
