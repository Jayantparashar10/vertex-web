'use client';

import { motion } from 'framer-motion';

interface TaskNodeProps {
  status: 'complete' | 'progress' | 'pending' | 'skipped';
  label: string;
  xpType: 'logic' | 'routine' | 'health';
  size?: 'sm' | 'md' | 'lg';
}

export default function TaskNode({ 
  status, 
  label, 
  xpType,
  size = 'md' 
}: TaskNodeProps) {
  
  const sizeMap = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-20 h-20 text-base'
  };

  const colorMap = {
    logic: 'border-logic-indigo',
    routine: 'border-routine-orange',
    health: 'border-health-pink'
  };

  return (
    <motion.div 
      className="relative flex flex-col items-center gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* The Circular Node */}
      <div 
        className={`
          ${sizeMap[size]} 
          rounded-full 
          border-4 
          ${colorMap[xpType]}
          ${status === 'complete' ? 'task-node-complete' : ''}
          ${status === 'progress' ? 'task-node-progress' : ''}
          ${status === 'pending' ? 'task-node-pending' : ''}
          ${status === 'skipped' ? 'task-node-skipped' : ''}
          flex items-center justify-center
          transition-all duration-300
        `}
      >
        {status === 'complete' && '✓'}
        {status === 'progress' && '⏳'}
      </div>
      
      {/* The Task Label */}
      <span className="text-xs text-vertex-text-secondary font-mono">
        {label}
      </span>
    </motion.div>
  );
}

// Named export for convenience
export { TaskNode };
