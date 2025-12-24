'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  variant = 'light', 
  className = '',
  hover = true 
}: GlassCardProps) {
  
  // Select the correct CSS utility class based on variant
  const baseClasses = variant === 'light' 
    ? 'glass-card-light' 
    : 'glass-card-dark';
    
  const hoverScale = hover ? 1.02 : 1;
    
  return (
    <motion.div
      className={`${baseClasses} rounded-2xl p-8 ${className}`}
      whileHover={{ scale: hoverScale }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {children}
    </motion.div>
  );
}

// Named export for backward compatibility
export { GlassCard };
