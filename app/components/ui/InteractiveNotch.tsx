'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InteractiveNotch() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative z-50 flex justify-center">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ width: 160, height: 32, borderRadius: 16 }}
        animate={{
          width: isHovered ? 340 : 160,
          height: isHovered ? 140 : 32, // Expands down
          borderRadius: isHovered ? 24 : 16,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className={cn(
          "bg-black border border-white/10 overflow-hidden flex flex-col items-center",
          "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] cursor-default"
        )}
      >
        {/* COLLAPSED STATE: Camera Hardware */}
        <motion.div 
          className="absolute top-0 w-full h-8 flex items-center justify-center pointer-events-none"
          animate={{ opacity: isHovered ? 0 : 1 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-vertex-indigo shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
        </motion.div>

        {/* EXPANDED STATE: The "Notch Coach" UI */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="w-full h-full p-5 flex flex-col justify-between"
            >
              {/* AI Insight */}
              <div className="flex gap-3 items-start">
                <div className="p-1.5 bg-vertex-indigo/20 rounded-lg text-vertex-indigo mt-1">
                   <Sparkles size={12} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-white/90 font-medium leading-relaxed">
                    "You've been coding for 2 hours."
                  </p>
                  <p className="text-[10px] text-white/50">
                    Take a 5m break to restore cognitive load?
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                 <button className="py-1.5 bg-white text-black text-[10px] font-bold rounded hover:bg-gray-200 transition-colors">
                    Start Break
                 </button>
                 <button className="py-1.5 bg-white/5 border border-white/10 text-white text-[10px] rounded hover:bg-white/10 transition-colors">
                    Dismiss
                 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
