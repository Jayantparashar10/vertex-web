'use client';

import { motion } from 'framer-motion';
import NeonButton from '../ui/NeonButton';
import GlassCard from '../ui/GlassCard';

export default function DownloadCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-vertex-gray to-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard variant="light" className="text-center">
            
            {/* Coming Soon Banner */}
            <div className="inline-block px-6 py-2 bg-logic-indigo/10 border border-logic-indigo/30 rounded-full mb-8">
              <p className="text-logic-indigo font-semibold">
                Coming New Year 2026
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-vertex-text">
              Ready to Transform Your Desktop?
            </h2>
            
            <p className="text-xl text-vertex-text-secondary mb-10 max-w-2xl mx-auto">
              Download Vertex for macOS Sequoia and start building the future 
              you've always imagined.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <NeonButton variant="primary" color="indigo">
                Download Vertex.dmg
              </NeonButton>
              <NeonButton variant="secondary" color="indigo">
                Join Waitlist
              </NeonButton>
            </div>

            <p className="text-sm text-vertex-text-secondary font-mono">
              Requirements: macOS Sequoia 15.0+ • Apple Silicon (M1/M2/M3)
            </p>

            {/* Email Signup */}
            <div className="mt-12 pt-12 border-t border-vertex-text-secondary/20">
              <p className="text-sm text-vertex-text-secondary mb-4">
                Get early access and updates
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-indigo-600 transition-all text-gray-900 placeholder:text-gray-400"
                />
                <button className="px-8 py-3 bg-vertex-text text-white rounded-full font-semibold hover:bg-logic-indigo transition-all">
                  Notify Me
                </button>
              </div>
            </div>

          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
}
