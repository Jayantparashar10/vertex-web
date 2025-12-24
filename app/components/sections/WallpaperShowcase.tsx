'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TaskNode from '../ui/TaskNode';
import MacBookMockup from '../ui/MacBookMockup';

export default function WallpaperShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Parallax Scale Effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          style={{ opacity }}
        >
          <h2 className="text-5xl font-bold mb-6 text-vertex-text">
            Your Future Self Lives on
            <span className="text-gradient-indigo"> Your Desktop</span>
          </h2>
          <p className="text-xl text-vertex-text-secondary max-w-3xl mx-auto">
            Every completed task lights up a node in your skill tree wallpaper. 
            Visual proof of your cognitive effort, always visible.
          </p>
        </motion.div>

        {/* MacBook with Skill Tree Wallpaper */}
        <motion.div 
          className="relative mx-auto max-w-6xl"
          style={{ scale }}
        >
          <MacBookMockup 
            content={
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black overflow-hidden p-8">
                {/* Skill Tree Grid */}
                <div className="grid grid-cols-4 gap-4 h-full items-center justify-items-center relative z-10 scale-90">
                  <TaskNode status="complete" label="Deep Learning" xpType="logic" size="md" />
                  <TaskNode status="complete" label="Gym" xpType="health" size="md" />
                  <TaskNode status="progress" label="LeetCode" xpType="logic" size="lg" />
                  <TaskNode status="pending" label="Read Paper" xpType="logic" size="md" />
                  <TaskNode status="pending" label="Run" xpType="health" size="md" />
                  <TaskNode status="pending" label="Review" xpType="routine" size="md" />
                  <TaskNode status="skipped" label="Meditate" xpType="health" size="sm" />
                  <TaskNode status="skipped" label="Stretch" xpType="health" size="sm" />
                </div>
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                  <line x1="25%" y1="30%" x2="50%" y2="30%" stroke="white" strokeWidth="2" />
                  <line x1="50%" y1="30%" x2="75%" y2="50%" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            }
          />

          {/* Floating Feature Annotations */}
          <motion.div 
            className="absolute -left-12 top-1/3 hidden xl:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="glass-card-light p-5 rounded-2xl shadow-lg border-l-4 border-logic-indigo max-w-xs backdrop-blur-md bg-white/80">
              <p className="text-sm font-bold text-vertex-text mb-1">
                ✓ Live Task Tracking
              </p>
              <p className="text-xs text-vertex-text-secondary leading-relaxed">
                Nodes glow instantly as you complete tasks.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -right-12 bottom-1/3 hidden xl:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="glass-card-light p-5 rounded-2xl shadow-lg border-l-4 border-health-pink max-w-xs backdrop-blur-md bg-white/80">
              <p className="text-sm font-bold text-vertex-text mb-1">
                ⚠ Visual Accountability
              </p>
              <p className="text-xs text-vertex-text-secondary leading-relaxed">
                Tree wilts if you skip daily habits.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-12 mt-24 border-t border-gray-100 pt-16">
          <div className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌳</div>
            <h3 className="font-semibold mb-2 text-vertex-text">Always Visible</h3>
            <p className="text-sm text-vertex-text-secondary leading-relaxed">
              No need to open an app. Your progress lives on your wallpaper.
            </p>
          </div>
          <div className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="font-semibold mb-2 text-vertex-text">Real-Time Updates</h3>
            <p className="text-sm text-vertex-text-secondary leading-relaxed">
              Nodes light up the moment you log a task via the Notch Coach.
            </p>
          </div>
          <div className="text-center group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
            <h3 className="font-semibold mb-2 text-vertex-text">Color-Coded XP</h3>
            <p className="text-sm text-vertex-text-secondary leading-relaxed">
              Logic (Indigo), Routine (Orange), Health (Pink). Track all three.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// Named export for convenience
export { WallpaperShowcase };
