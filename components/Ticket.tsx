'use client';

import { motion } from 'framer-motion';
import { Cpu, QrCode } from 'lucide-react';

interface TicketProps {
  ticketNumber: string;
  chip: string;
}

export function Ticket({ ticketNumber, chip }: TicketProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, rotateX: -20 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      transition={{ type: "spring", bounce: 0.4 }}
      className="relative w-full max-w-md mx-auto aspect-[1.8/1] bg-gradient-to-br from-vertex-bg to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl group select-none"
    >
      {/* Holographic Sheen Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />
      
      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
             <div className="p-1.5 bg-white/10 rounded-md"><Cpu size={16} className="text-vertex-indigo"/></div>
             <span className="font-mono font-bold tracking-widest text-white">VERTEX // 2026</span>
          </div>
          <span className="px-2 py-1 border border-white/20 rounded text-[10px] font-mono text-white/50">
            FIRST CLASS
          </span>
        </div>

        {/* Middle Info */}
        <div className="flex gap-8">
            <div>
                <div className="text-[10px] text-white/30 font-mono uppercase">Passenger ID</div>
                <div className="text-xl text-white font-mono tracking-wider">#{ticketNumber}</div>
            </div>
            <div>
                <div className="text-[10px] text-white/30 font-mono uppercase">Hardware</div>
                <div className="text-xl text-vertex-cyan font-mono">{chip}</div>
            </div>
        </div>

        {/* Footer / Barcode */}
        <div className="flex justify-between items-end border-t border-white/10 pt-4">
           <div className="text-[10px] text-white/30 font-mono">
              LAUNCH_DATE: 01.01.2026<br/>
              SECTOR: OPTIMIZATION
           </div>
           <QrCode className="text-white/20" size={32} />
        </div>
      </div>

      {/* Decorative Noise/Grain */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </motion.div>
  );
}
