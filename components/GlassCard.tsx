import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false }: GlassCardProps) {
  return (
    <div className={cn(
      // Base Physics
      "relative overflow-hidden rounded-3xl", 
      // Glass Material
      "bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10",
      // Shadow Depth
      "shadow-[0_8px_16px_-6px_rgba(0,0,0,0.5)]",
      // Interactive State
      hoverEffect && "group hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.1)]",
      className
    )}>
      
      {/* 1. The "Top Shine" (Simulates ceiling light hitting the edge) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

      {/* 2. The Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* 3. The "Hover Glow" (Follows cursor logic can be added here later, for now it's a static gradient) */}
      {hoverEffect && (
         <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </div>
  );
}
