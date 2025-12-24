'use client';

import { motion, useScroll } from 'framer-motion';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export function MobileStickyCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling past the Hero (300px)
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
    >
      <button className="w-full flex items-center justify-center gap-2 bg-vertex-indigo text-white font-medium py-3 rounded-full shadow-lg shadow-vertex-indigo/25 border border-white/20 backdrop-blur-xl">
        <Download size={18} />
        <span>Download Vertex</span>
      </button>
    </motion.div>
  );
}
