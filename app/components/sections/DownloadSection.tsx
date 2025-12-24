'use client';

import { Apple, ArrowRight, Download, Sparkles } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';

export function DownloadSection() {
  return (
    <section className="py-24 px-4 relative z-10" id="download">
      <div className="max-w-4xl mx-auto">
        
        {/* The Main "Update" Card */}
        <GlassCard className="p-8 md:p-16 text-center relative overflow-hidden group">
          
          {/* Background Glow (Pulse) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vertex-indigo/20 blur-[100px] rounded-full animate-pulse-slow pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Icon */}
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center mb-8 shadow-glass-hover">
               <Apple size={40} className="text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to <span className="text-vertex-indigo">Upgrade Your Mind?</span>
            </h2>
            
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Join the 2026 cohort. Experience the first system-native habit engine built exclusively for Apple Silicon.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
               <NeonButton variant="primary" color="indigo" className="w-full sm:w-auto min-w-[200px]">
                 <Download size={18} />
                 Download Vertex.dmg
               </NeonButton>
               
               <NeonButton variant="ghost" color="indigo" className="w-full sm:w-auto">
                 Join Waitlist
                 <ArrowRight size={18} />
               </NeonButton>
            </div>

            {/* System Requirements / Trust Badges */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white/30 font-mono">
               <span className="flex items-center gap-2">
                 <Sparkles size={12} className="text-vertex-pink" />
                 macOS Sequoia 15.0+
               </span>
               <span className="hidden md:inline">•</span>
               <span>Apple Silicon (M1/M2/M3)</span>
               <span className="hidden md:inline">•</span>
               <span>v1.0 (Build 2026)</span>
            </div>

          </div>
        </GlassCard>

      </div>
    </section>
  );
}
