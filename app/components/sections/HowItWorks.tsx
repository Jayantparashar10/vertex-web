'use client';

import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

const steps = [
  {
    number: '01',
    title: 'Speak Your Routine',
    description: 'Hold Command and speak: "I need 2 hours for Deep Learning and a gym break at 5."',
    icon: '🎤',
  },
  {
    number: '02',
    title: 'AI Parses & Plans',
    description: "Vertex's local LLM converts your voice into a structured schedule between your classes.",
    icon: '🧠',
  },
  {
    number: '03',
    title: 'Negotiate Trade-offs',
    description: 'Running late? The Notch Coach offers: "Skip gym to save the Deep Learning streak?"',
    icon: '💬',
  },
  {
    number: '04',
    title: 'Watch Your Tree Grow',
    description: 'Every focused hour adds a glowing node. Visual proof of your cognitive effort.',
    icon: '🌟',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-vertex-gray">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-vertex-text">How Vertex Works</h2>
          <p className="text-xl text-vertex-text-secondary max-w-2xl mx-auto">
            Four steps to transform your desktop into a habit engine
          </p>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard variant="light" className="h-full relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-logic-indigo rounded-full flex items-center justify-center text-white font-bold shadow-glow-indigo">
                  {step.number}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-vertex-text">{step.title}</h3>
                <p className="text-sm text-vertex-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-logic-indigo rounded-full flex items-center justify-center text-white font-bold shadow-glow-indigo flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 flex-1 bg-gradient-to-b from-logic-indigo to-health-pink mt-4" />
                )}
              </div>
              <GlassCard variant="light" className="flex-1">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-vertex-text">{step.title}</h3>
                <p className="text-sm text-vertex-text-secondary">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
