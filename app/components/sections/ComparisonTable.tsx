'use client';

import { Check, X, Minus } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const features = [
  { name: "Interaction Model", traditional: "Nagging Notifications", vertex: "Negotiated Trade-offs" },
  { name: "Data Privacy", traditional: "Cloud Sync (Vulnerable)", vertex: "100% Offline (M-Series)" },
  { name: "Input Method", traditional: "Manual Data Entry", vertex: "Voice & Screenshot Parsing" },
  { name: "Motivation", traditional: "Guilt & Red Badges", vertex: "XP & Skill Tree Growth" },
  { name: "Platform", traditional: "Web / Cross-platform wrapper", vertex: "System-Native macOS Swift" },
];

export function ComparisonTable() {
  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12">
          
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-8 border-b border-white/10 pb-6 text-sm md:text-base">
            <div className="font-mono text-white/40 uppercase tracking-wider self-end">Metric</div>
            <div className="text-center text-white/40 font-medium">Traditional Apps</div>
            <div className="text-center text-vertex-indigo font-bold">Vertex Engine</div>
          </div>

          {/* Table Body */}
          <div className="space-y-6">
            {features.map((item, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 items-center text-sm md:text-base group">
                {/* Feature Name */}
                <div className="font-medium text-white/80">{item.name}</div>
                
                {/* Traditional Side (Negative/Neutral) */}
                <div className="text-center text-white/40 flex items-center justify-center gap-2">
                   <span className="hidden md:inline">{item.traditional}</span>
                   <X size={14} className="text-red-400/50 md:hidden" />
                </div>
                
                {/* Vertex Side (Positive) */}
                <div className="text-center text-white flex items-center justify-center gap-2 relative">
                   {/* Glow effect behind the winning cell */}
                   <div className="absolute inset-0 bg-vertex-indigo/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <Check size={16} className="text-vertex-indigo shrink-0" />
                   <span className="font-medium text-shadow-sm">{item.vertex}</span>
                </div>
              </div>
            ))}
          </div>
          
        </GlassCard>
      </div>
    </section>
  );
}
