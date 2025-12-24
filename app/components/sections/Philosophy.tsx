'use client';

import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section className="py-32 px-4 relative flex flex-col items-center justify-center text-center">
      
      {/* Background Decor: The "Void" Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vertex-indigo/5 to-transparent pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
          "Life doesn't need another reminder app. <br />
          It needs a system that <span className="text-vertex-indigo">respects your agency</span>."
        </h2>
        
        <div className="flex flex-col items-center gap-4">
          <div className="h-px w-24 bg-white/20" />
          <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
            Built for the developer generation
          </p>
        </div>
      </motion.div>
    </section>
  );
}
