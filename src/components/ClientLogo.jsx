import React from 'react';
import { Cpu, Activity, FlaskConical, HeartPulse, Stethoscope, Cog, Globe, Building2, Zap } from 'lucide-react';

const iconMap = {
  Cpu,
  Activity,
  FlaskConical,
  HeartPulse,
  Stethoscope,
  Cog,
  Globe,
  Building2,
  Zap
};

export default function ClientLogo({ client }) {
  const IconComponent = iconMap[client.icon] || Building2;

  return (
    <div className="w-60 sm:w-68 h-36 mx-3.5 shrink-0 bg-white rounded-xl border border-slate-200/90 hover:border-brand-gold shadow-xs hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center justify-center text-center group select-none cursor-pointer">
      {/* Company Logo Badge */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 border shadow-xs transition-transform duration-300 group-hover:scale-110 ${client.badgeColor || 'bg-slate-50 text-primary-navy border-slate-200'}`}>
        <div className="flex flex-col items-center justify-center">
          <IconComponent className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] font-black tracking-wider uppercase mt-0.5">{client.initials}</span>
        </div>
      </div>

      {/* Below Only Company Name */}
      <div className="text-xs sm:text-sm font-extrabold text-primary-navy group-hover:text-secondary-navy transition-colors tracking-tight line-clamp-2 px-2 leading-snug">
        {client.name}
      </div>
    </div>
  );
}
