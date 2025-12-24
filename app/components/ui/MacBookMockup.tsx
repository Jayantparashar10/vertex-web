'use client';

import { motion } from 'framer-motion';
import TaskNode from './TaskNode';

export default function MacBookMockup({ content }: { content?: React.ReactNode }) {
  
  // Default Content: The Skill Tree Visualization
  const DefaultScreen = (
    <div className="relative w-full h-full bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0F] via-[#16161E] to-[#0B0B0F]" />
      
      {/* The Nodes Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-8 scale-90">
         <div className="flex flex-col gap-6 mt-8">
            <TaskNode status="complete" label="Deep Work" xpType="logic" size="md" />
            <TaskNode status="complete" label="LeetCode" xpType="logic" size="lg" />
         </div>
         <div className="flex flex-col gap-6">
            <TaskNode status="progress" label="Gym" xpType="health" size="md" />
            <TaskNode status="pending" label="Reading" xpType="routine" size="sm" />
            <TaskNode status="pending" label="Sleep" xpType="health" size="md" />
         </div>
         <div className="flex flex-col gap-6 mt-12">
            <TaskNode status="skipped" label="Meditate" xpType="health" size="sm" />
            <TaskNode status="pending" label="Planning" xpType="routine" size="md" />
         </div>
      </div>

      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <line x1="30%" y1="40%" x2="50%" y2="50%" stroke="#6366F1" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="70%" y2="60%" stroke="#EC4899" strokeWidth="2" />
        <line x1="50%" y1="50%" x2="50%" y2="30%" stroke="#FB923C" strokeWidth="2" />
      </svg>
    </div>
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto perspective-1000">
      <motion.div 
        initial={{ rotateX: 10, opacity: 0, y: 50 }}
        animate={{ rotateX: 0, opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative bg-[#e3e3e3] rounded-[2rem] border-4 border-[#d4d4d4] shadow-2xl overflow-hidden aspect-[16/10]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Bezel */}
        <div className="absolute inset-1 bg-black rounded-[1.7rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-50 flex justify-center items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[0_0_5px_rgba(255,255,255,0.1)]" />
          </div>
          {/* Render Content */}
          <div className="absolute inset-0">
             {content || DefaultScreen}
          </div>
        </div>
        {/* Glass Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-40 rounded-[2rem]" />
      </motion.div>
    </div>
  );
}
