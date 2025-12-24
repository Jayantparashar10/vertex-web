'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const xpTypes = [
  {
    id: 'logic',
    label: 'Logic XP',
    icon: '</>',
    color: 'logic-indigo',
    tasks: ['LeetCode Medium', 'Deep Learning 2hrs', 'Code Review'],
    mockCode: `// Vertex automatically detects LeetCode solves
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        ...
        ✓ Accepted: +50 XP`,
  },
  {
    id: 'routine',
    label: 'Routine XP',
    icon: '📅',
    color: 'routine-orange',
    tasks: ['Morning Review', 'Weekly Planning', 'Clean Workspace'],
    mockCode: `✓ Morning Review: +20 XP
✓ Weekly Planning: +30 XP
⏳ Clean Workspace (Pending)

Current Streak: 7 days`,
  },
  {
    id: 'health',
    label: 'Health XP',
    icon: '❤️',
    color: 'health-pink',
    tasks: ['Sleep 8hrs', 'Gym Session', 'Meditation'],
    mockCode: `Sleep Score: 8.5 hours ✓ +40 XP
Gym Check-in: 6:00 PM ✓ +35 XP

Steps: 8,234 / 10,000
Health Streak: 14 days`,
  },
];

export default function XPSystem() {
  const [activeTab, setActiveTab] = useState('logic');
  const activeXP = xpTypes.find(xp => xp.id === activeTab)!;

  // === NEW: Scroll Transition Logic ===
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Transform background from White -> Dark (#0A0A0A) -> Dark -> White
  // This creates a smooth "Entering the Void" effect
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ['#FAFAFA', '#0A0A0A', '#0A0A0A', '#FAFAFA']
  );

  // Map colors for dynamic classes since Tailwind doesn't allow string concatenation for full class names efficiently without safelisting
  const colorClasses = {
    'logic-indigo': { bg: 'bg-logic-indigo', shadow: 'shadow-glow-indigo', text: 'text-logic-indigo', bar: 'bg-logic-indigo' },
    'routine-orange': { bg: 'bg-routine-orange', shadow: 'shadow-glow-orange', text: 'text-routine-orange', bar: 'bg-routine-orange' },
    'health-pink': { bg: 'bg-health-pink', shadow: 'shadow-glow-pink', text: 'text-health-pink', bar: 'bg-health-pink' },
  };
  
  const currentColors = colorClasses[activeXP.color as keyof typeof colorClasses];

  return (
    // === UPDATED: motion.section with dynamic backgroundColor ===
    <motion.section 
      ref={ref}
      style={{ backgroundColor }}
      className="py-32 relative overflow-hidden text-white"
    >
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-logic-indigo/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-health-pink/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Gamify Your Growth
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Life is an RPG. Vertex tracks your stats across three core domains.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {xpTypes.map((xp) => {
             const xpColors = colorClasses[xp.color as keyof typeof colorClasses];
             const isActive = activeTab === xp.id;
             
             return (
              <motion.button
                key={xp.id}
                onClick={() => setActiveTab(xp.id)}
                className={`
                  px-6 py-3 rounded-full font-semibold transition-all flex items-center
                  ${isActive 
                     ? `${xpColors.bg} text-white ${xpColors.shadow}` 
                     : 'bg-white/10 text-gray-400 hover:bg-white/20'}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{xp.icon}</span>
                {xp.label}
              </motion.button>
            );
          })}
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            
            {/* Left: Description */}
            <div>
              <GlassCard variant="dark">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Level 42 {activeXP.label.split(' ')[0]}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Complete <span className="text-white font-medium">{activeXP.tasks.join(', ')}</span> to earn {activeXP.label}. 
                  Watch your skill tree branch out with {activeXP.color.split('-')[1]} nodes.
                </p>

                {/* XP Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-400 font-mono">
                    <span>XP PROGRESS</span>
                    <span>2450 / 3000</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${currentColors.bar}`}
                      initial={{ width: 0 }}
                      animate={{ width: '82%' }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p className="text-xs text-gray-500 uppercase mb-1">Current Streak</p>
                      <p className="text-2xl font-bold text-white">14 Days</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p className="text-xs text-gray-500 uppercase mb-1">Today's Gain</p>
                      <p className="text-2xl font-bold text-task-complete">+450 XP</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Right: Code Editor Mockup */}
            <div>
              <GlassCard variant="dark" className="!p-0 overflow-hidden min-h-[400px]">
                
                {/* Editor Header */}
                <div className="bg-black/50 px-6 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Code Content */}
                <div className="p-8 font-mono text-sm bg-gradient-to-br from-gray-900 to-black h-full">
                  <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {activeXP.mockCode}
                  </pre>
                </div>

              </GlassCard>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </motion.section>
  );
}
