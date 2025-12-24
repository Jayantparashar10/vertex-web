'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  // Interpolate colors based on scroll position (0 to 1)
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.8], [0, 0.4]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 1], [0, 0.4]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Layer 1: Top (Indigo) - Fades out */}
      <motion.div 
        style={{ opacity: opacity1 }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-radial-gradient from-vertex-indigo/20 to-transparent blur-[120px]"
      />

      {/* Layer 2: Middle (Orange/Pink) - Fades in/out */}
      <motion.div 
        style={{ opacity: opacity2 }}
        className="absolute top-[30%] right-[-10%] w-[80vw] h-[80vh] bg-radial-gradient from-vertex-pink/15 to-transparent blur-[120px]" 
      />

      {/* Layer 3: Bottom (Blue) - Fades in */}
      <motion.div 
        style={{ opacity: opacity3 }}
        className="absolute bottom-[-20%] left-[-10%] w-[100vw] h-[80vh] bg-radial-gradient from-vertex-indigo/15 to-transparent blur-[120px]" 
      />
      
      {/* Noise Texture Overlay (Persistent) */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
    </div>
  );
}
