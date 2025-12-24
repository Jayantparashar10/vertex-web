'use client';

import { Activity, Cpu, Layers, Lock, Zap } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 relative z-10">
      
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          System-Native. <span className="text-vertex-indigo">Gamified.</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Vertex replaces your static wallpaper with a living neural network that grows as you work.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Feature 1: The Aura (Wallpaper) */}
        <GlassCard className="p-8 min-h-[320px] flex flex-col justify-between group" variant="light">
          <div>
            <div className="w-12 h-12 rounded-xl bg-vertex-indigo/10 flex items-center justify-center mb-6 text-vertex-indigo group-hover:scale-110 transition-transform">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">The Aura Layer</h3>
            <p className="text-white/60 leading-relaxed">
              Your wallpaper is no longer static. It's a visualization of your brain's "compute usage," growing nodes as you complete LeetCode tasks.
            </p>
          </div>
          {/* Visual Hint */}
          <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
            <div className="h-full w-[45%] bg-vertex-indigo rounded-full" />
          </div>
        </GlassCard>

        {/* Feature 2: The Notch Coach */}
        <GlassCard className="p-8 min-h-[320px] flex flex-col justify-between group" variant="light">
          <div>
            <div className="w-12 h-12 rounded-xl bg-vertex-pink/10 flex items-center justify-center mb-6 text-vertex-pink group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">The Notch Coach</h3>
            <p className="text-white/60 leading-relaxed">
              It doesn't nag. It negotiates. If you've been gaming for 2 hours, the Notch gently glows to suggest a trade-off for focus time.
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="text-[10px] px-2 py-1 rounded border border-vertex-pink/30 text-vertex-pink bg-vertex-pink/10">High Agency</span>
            <span className="text-[10px] px-2 py-1 rounded border border-white/10 text-white/40">Zero Nags</span>
          </div>
        </GlassCard>

        {/* Feature 3: Privacy (Intelligence) */}
        <GlassCard className="p-8 min-h-[320px] flex flex-col justify-between group" variant="light">
          <div>
            <div className="w-12 h-12 rounded-xl bg-vertex-orange/10 flex items-center justify-center mb-6 text-vertex-orange group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">On-Device Intelligence</h3>
            <p className="text-white/60 leading-relaxed">
              Powered by Apple Neural Engine. Your routine data, screenshots, and habits never leave your M-Series chip.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-6 text-xs text-white/40">
            <Lock size={12} />
            <span>Local Processing Only</span>
          </div>
        </GlassCard>

      </div>
    </section>
  );
}
