'use client';

import { motion } from 'framer-motion';
import NeonButton from '../ui/NeonButton';
import MacBookMockup from '../ui/MacBookMockup';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-logic-indigo/5 via-transparent to-health-pink/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold leading-tight text-vertex-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Stop Reminding.
              <br />
              <span className="text-gradient-indigo">
                Start Negotiating.
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-vertex-text-secondary leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Vertex brings your future onto your desktop. 
              Watch your skill tree grow as you build the habits 
              that matter.
            </motion.p>

            <motion.div 
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <NeonButton variant="primary" color="indigo">
                Download for macOS Sequoia
              </NeonButton>
              <NeonButton variant="ghost" color="indigo">
                Watch Demo (1:30)
              </NeonButton>
            </motion.div>

            <motion.p 
              className="text-sm text-vertex-text-secondary font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Coming New Year 2026 • macOS 15.0+
            </motion.p>
          </motion.div>

          {/* Right: The Silver MacBook */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <MacBookMockup />
          </motion.div>

        </div>
      </div>

      {/* Bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// Named export for backward compatibility
export { Hero };
