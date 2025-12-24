'use client';

import { motion } from 'framer-motion';
import { Cpu, Download, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function NavBar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-style spring physics
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-1 p-2 bg-vertex-glass/80 backdrop-blur-2xl border border-vertex-border rounded-full shadow-2xl">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/5 transition-colors group">
          <div className="relative">
             <Cpu size={18} className="text-white group-hover:text-vertex-indigo transition-colors" />
             {/* Tiny glow behind logo */}
             <div className="absolute inset-0 blur-md bg-vertex-indigo/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-medium text-sm tracking-tight text-white/90">Vertex</span>
        </Link>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 mx-2" />

        {/* Navigation Links */}
        <div className="flex items-center gap-1 text-sm text-white/70">
          <Link href="#features" className="px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-all">Features</Link>
          <Link href="#manifesto" className="px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-all">Manifesto</Link>
        </div>

        {/* CTA Button */}
        <button className="ml-2 flex items-center gap-2 px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <Sparkles size={14} className="text-vertex-indigo" />
          <span>Join Waitlist</span>
        </button>
      </div>
    </motion.nav>
  );
}
