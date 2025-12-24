'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, Check } from 'lucide-react';
import { joinWaitlist } from '@/app/actions';
import { Ticket } from './Ticket';
import { GlassCard } from './GlassCard';

export function WaitlistSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [ticketData, setTicketData] = useState({ id: '', chip: '' });

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    const chipVal = formData.get('chip') as string;
    
    // Call server action
    const result = await joinWaitlist(formData);
    
    if (result.success) {
      setTicketData({ id: result.ticketNumber, chip: chipVal });
      setStatus('success');
    }
  }

  return (
    <section className="py-24 px-4 relative z-20" id="waitlist">
      <div className="max-w-xl mx-auto text-center">
        
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="ticket"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Ticket ticketNumber={ticketData.id} chip={ticketData.chip} />
              
              <div className="space-y-2">
                <h3 className="text-2xl font-medium text-white">You're on the list.</h3>
                <p className="text-white/50 text-sm">Screenshot your ticket. See you in 2026.</p>
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=I%20just%20secured%20my%20spot%20for%20Vertex%202026.%20Ticket%20%23${ticketData.id}.%20%40vertex_app&hashtags=BuildInPublic`, '_blank')}
                  className="mt-4 px-6 py-2 bg-[#1DA1F2] hover:bg-[#1a91da] text-white text-sm font-medium rounded-full transition-colors"
                >
                  Share on X
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <h2 className="text-4xl font-semibold text-white mb-4 tracking-tight">
                Build Your Future Self.
              </h2>
              <p className="text-white/50 mb-8">
                Join the closed beta. Limited to M-Series Mac users.
              </p>

              <GlassCard className="p-2 pl-4 flex items-center">
                <form action={handleSubmit} className="flex flex-col md:flex-row gap-2 w-full">
                   {/* Email Input */}
                   <input 
                      name="email"
                      type="email" 
                      required
                      placeholder="alex@stanford.edu"
                      className="bg-transparent border-none focus:ring-0 text-white placeholder:text-white/20 flex-1 min-w-0"
                   />
                   
                   {/* Divider (Desktop) */}
                   <div className="hidden md:block w-px h-6 bg-white/10 self-center" />
                   
                   {/* Chip Selector */}
                   <select 
                      name="chip" 
                      className="bg-transparent text-white/70 text-sm border-none focus:ring-0 cursor-pointer hover:text-white"
                   >
                      <option value="M1 / M1 Pro">M1 / Pro / Max</option>
                      <option value="M2 / M2 Pro">M2 / Pro / Max</option>
                      <option value="M3 / M3 Pro">M3 / Pro / Max</option>
                      <option value="M4 (Future)">M4 (Pre-order)</option>
                   </select>

                   {/* Submit Button */}
                   <button 
                      disabled={status === 'loading'}
                      className="px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px]"
                   >
                      {status === 'loading' ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <>
                          <span>Join</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                   </button>
                </form>
              </GlassCard>
              
              <p className="mt-6 text-xs text-white/30">
                By joining, you agree to the <span className="underline decoration-white/30">Offline Manifesto</span>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
}
