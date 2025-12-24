'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Command } from 'lucide-react';
import { cn } from '@/lib/utils';

export function NotchDemo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative z-50 flex justify-center perspective-1000">
      <motion.div
        layout
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        initial={{ width: 180, height: 36, borderRadius: 12 }}
        animate={{
          width: isExpanded ? 420 : 180,
          height: isExpanded ? 180 : 36,
          borderRadius: 24
        }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
        className={cn(
          "bg-black relative overflow-hidden flex flex-col items-center",
          "border border-white/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]", // Heavy hardware shadow
          "group cursor-default"
        )}
      >
        {/* HARDWARE REFLECTION (The white line at the top) */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
        
        {/* COLLAPSED STATE (Camera Housing) */}
        <motion.div 
            layout="position" 
            className="absolute top-0 w-full h-9 flex items-center justify-center pointer-events-none"
        >
            <div className={cn("flex items-center gap-3 transition-opacity duration-200", isExpanded ? "opacity-0" : "opacity-100")}>
               <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
               <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">Deep Focus</span>
            </div>
        </motion.div>

        {/* EXPANDED STATE (The UI) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(5px)" }} // Faster exit
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full h-full p-6 flex flex-col justify-between"
            >
              {/* AI Chat Bubble */}
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30">
                    <Sparkles size={14} className="text-indigo-400" />
                 </div>
                 <div className="flex-1">
                    <p className="text-sm text-white/90 font-medium leading-relaxed">
                       You've been on "Red Dead" for 2 hours.
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                       Swap for 30m of LeetCode to restore your streak?
                    </p>
                 </div>
              </div>

              {/* Action Bar */}
              <div className="flex gap-2 mt-2">
                 <button className="flex-1 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">
                    Accept Trade
                 </button>
                 <button className="px-3 py-2 bg-white/5 border border-white/10 text-white text-xs font-medium rounded-lg hover:bg-white/10 transition-colors">
                    Dismiss
                 </button>
              </div>

              {/* Footer */}
              <div className="absolute bottom-3 right-4 flex items-center gap-1 opacity-20">
                 <Command size={10} className="text-white" />
                 <span className="text-[10px] text-white font-mono">K</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
