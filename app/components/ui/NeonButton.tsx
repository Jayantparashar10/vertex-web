'use client';

import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  color?: 'indigo' | 'orange' | 'pink';
  onClick?: () => void;
  className?: string;
}

export default function NeonButton({ 
  children, 
  variant = 'primary',
  color = 'indigo',
  onClick,
  className = ''
}: NeonButtonProps) {
  
  // FIXED: Using standard Tailwind colors to ensure visibility immediately
  const styles = {
    primary: `bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:bg-indigo-700 hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] border border-white/10`,
    
    secondary: `bg-white text-gray-900 border-2 border-indigo-100 hover:border-indigo-600 hover:text-indigo-600`,
    
    ghost: `bg-transparent text-gray-600 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 backdrop-blur-sm`
  };

  return (
    <motion.button
      className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${styles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// Named export for backward compatibility
export { NeonButton };
