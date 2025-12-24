'use client';

import { GlassCard } from '@/components/GlassCard';
import { motion } from 'framer-motion';
import { Activity, Brain, Lock, Moon, Zap, Network } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-32 px-4 relative z-10">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
          System-Native. Gamified. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vertex-indigo to-vertex-cyan">
            Completely Private.
          </span>
        </h2>
        <p className="text-white/50 text-lg">
          Vertex doesn't just manage your time. It negotiates it using your live biometric and usage data.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6">
        
        {/* Card 1: The Aura Wallpaper (Span 4) */}
        <GlassCard className="md:col-span-4 p-8 min-h-[400px] flex flex-col justify-between group overflow-hidden" hoverEffect>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-vertex-indigo/20 rounded-lg text-vertex-indigo"><Network size={20} /></div>
                    <h3 className="text-xl font-medium text-white">The Aura Layer</h3>
                </div>
                <p className="text-white/60 max-w-sm">
                    Your desktop wallpaper is now a living neural network. Complete LeetCode problems to grow new nodes. 
                    Skip tasks, and the network decays.
                </p>
            </div>

            {/* Visual: Neural Network Simulation */}
            <div className="absolute top-0 right-0 w-[60%] h-full opacity-40 group-hover:opacity-60 transition-opacity">
                 <svg className="w-full h-full" viewBox="0 0 400 400">
                    <motion.path 
                        d="M50 350 Q 200 200 350 50" 
                        stroke="#5E5CE6" strokeWidth="2" fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                    />
                    <circle cx="50" cy="350" r="4" fill="#5E5CE6" />
                    <circle cx="350" cy="50" r="4" fill="#5E5CE6" />
                    {/* Glowing Nodes */}
                    <motion.circle cx="200" cy="200" r="8" fill="#5E5CE6" opacity="0.5" animate={{ r: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 3 }} />
                 </svg>
            </div>
        </GlassCard>

        {/* Card 2: Health Sync (Span 2) */}
        <GlassCard className="md:col-span-2 p-8 flex flex-col justify-between" hoverEffect>
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-vertex-pink/20 rounded-lg text-vertex-pink"><Activity size={20} /></div>
                <h3 className="text-xl font-medium text-white">Bio-Negotiation</h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
                Vertex reads your sleep data. If you got less than 6 hours, it automatically reschedules deep work.
            </p>
            
            {/* Visual: Health Graph */}
            <div className="space-y-3 mt-auto">
                <div className="flex justify-between text-xs font-mono text-white/40">
                    <span>SLEEP (HKHealth)</span>
                    <span className="text-red-400">5h 20m</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-red-500 rounded-full" />
                </div>
                
                <div className="flex justify-between text-xs font-mono text-white/40 pt-2">
                    <span>GAMING (Steam)</span>
                    <span className="text-vertex-indigo">0h 00m</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[0%] bg-vertex-indigo rounded-full" />
                </div>
            </div>
        </GlassCard>

        {/* Card 3: Offline Privacy Chip (Span 6 - Full Width) */}
        <GlassCard className="md:col-span-6 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12" hoverEffect>
            <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Lock size={20} /></div>
                    <h3 className="text-2xl font-medium text-white">Zero API Costs. Zero Leaks.</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                    Vertex runs 100% locally on the Apple Neural Engine. Your routine screenshots, 
                    journal entries, and health data never leave your M-series chip.
                </p>
                <div className="mt-8 flex gap-4">
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/70">Apple CoreML</span>
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/70">On-Device Only</span>
                </div>
            </div>

            {/* Visual: M-Series Chip Simulation */}
            <div className="w-64 h-64 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center">
                    <span className="font-mono text-white/20 text-4xl font-bold tracking-tighter">M4</span>
                    
                    {/* The "Loop" Animation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <rect x="10" y="10" width="236" height="236" rx="20" fill="none" stroke="white" strokeOpacity="0.1" />
                        <motion.rect 
                            x="10" y="10" width="236" height="236" rx="20" 
                            fill="none" 
                            stroke="#4ADE80" 
                            strokeWidth="2"
                            strokeDasharray="20 400"
                            animate={{ strokeDashoffset: -420 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                </div>
                {/* Floating "Data" Particles */}
                <motion.div 
                    className="absolute -top-4 -right-4 bg-vertex-bg border border-white/10 px-3 py-1 rounded-lg text-[10px] text-green-400 font-mono"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    DATA SECURE
                </motion.div>
            </div>
        </GlassCard>

      </div>
    </section>
  );
}
