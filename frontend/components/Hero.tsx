import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { JatinPhoto } from './JatinPhoto';

export const Hero: React.FC = () => {
  const transitionEase = [0.22, 1, 0.36, 1];

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-[76px] md:pt-[88px] pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Top Label & Quick Signals */}
      <div className="max-w-[1280px] w-full mx-auto pt-2 sm:pt-4 md:pt-6 flex flex-wrap justify-between items-center gap-3 z-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center space-x-2"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-coral animate-ping" />
          <span className="font-inter font-medium text-[10px] sm:text-[11px] tracking-label text-coral uppercase">
            ANDROID · FLUTTER · SECURITY
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden sm:flex items-center gap-4 text-xs font-mono text-muted"
        >
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-coral" /> &lt;200ms OFFLINE
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-coral" /> TEE KEYSTORE
          </span>
        </motion.div>
      </div>

      {/* Main Center Area: Effect 1 — Name and portrait overlap */}
      <div className="relative my-auto w-full max-w-[1360px] mx-auto flex flex-col justify-center items-center select-none py-4 sm:py-6">
        
        {/* Desktop & Tablet Overlap Layout (md and up) */}
        <div className="relative w-full text-center hidden md:block">
          {/* Line 1: JATIN (z-0 behind portrait) */}
          <div className="overflow-hidden relative z-0">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: transitionEase }}
              className="font-syne font-extrabold text-[clamp(68px,14.5vw,250px)] leading-[0.82] tracking-tightest uppercase text-foreground m-0 p-0"
            >
              JATIN
            </motion.h1>
          </div>

          {/* Real Photo in the center (z-10) — overlaps line 1 & 2 */}
          <motion.div
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: transitionEase }}
            className="relative z-10 mx-auto -mt-[10.5vw] h-[52vh] max-h-[500px] min-h-[300px] w-[320px] lg:w-[380px] flex items-center justify-center"
          >
            <JatinPhoto variant="hero" className="w-full h-full" />
          </motion.div>

          {/* Line 2: KUMAR (z-20 in front of the chest) */}
          <div className="overflow-hidden relative z-20 -mt-[17.5vw]">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.12, ease: transitionEase }}
              className="font-syne font-extrabold text-[clamp(68px,14.5vw,250px)] leading-[0.82] tracking-tightest uppercase text-foreground m-0 p-0"
            >
              KUMAR
            </motion.h1>
          </div>
        </div>

        {/* Mobile View (<768px): Clean, stacked & responsive */}
        <div className="md:hidden flex flex-col items-center text-center w-full py-2 space-y-2 sm:space-y-3">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-syne font-extrabold text-[clamp(44px,14vw,72px)] leading-[0.9] tracking-tightest uppercase text-foreground"
          >
            JATIN
          </motion.h1>

          {/* Exact Photo Centered on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-48 sm:w-56 h-60 sm:h-72 my-1"
          >
            <JatinPhoto variant="hero" className="w-full h-full" />
          </motion.div>

          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-syne font-extrabold text-[clamp(44px,14vw,72px)] leading-[0.9] tracking-tightest uppercase text-foreground"
          >
            KUMAR
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
              <span className="font-mono text-[10px] text-foreground tracking-wider uppercase">
                ANDROID & FLUTTER SPECIALIST
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Area: Positioning Statement + Instant Proof Links */}
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-t border-border/40 pt-4 sm:pt-6 z-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-inter font-light text-sm sm:text-base md:text-[18px] leading-[1.6] md:leading-[1.7] text-foreground/90 max-w-2xl"
        >
          I build mobile apps where speed and security are not afterthoughts.
        </motion.p>

        {/* Immediate Proof Links - visible above the fold */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center space-x-6 shrink-0"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.jatinkumar.sentryone"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-inter font-medium text-xs tracking-label text-coral hover:text-foreground transition-colors"
          >
            <span>PLAY STORE</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://github.com/jatinjk007"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-inter font-medium text-xs tracking-label text-muted hover:text-foreground transition-colors"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
