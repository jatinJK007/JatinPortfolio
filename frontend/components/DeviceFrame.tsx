import React from 'react';
import { ShieldCheck, Cpu, Smartphone, BellRing, Database } from 'lucide-react';

interface DeviceFrameProps {
  title: string;
  tagline: string;
  techTag: string;
  variant?: 'alert' | 'secure' | 'guardian' | 'ai' | 'fintech' | 'generic';
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  title,
  tagline,
  techTag,
  variant = 'generic',
}) => {
  return (
    <div className="w-[260px] h-[340px] rounded-[32px] p-2.5 bg-black border-2 border-border/90 shadow-2xl flex flex-col relative overflow-hidden select-none">
      {/* Top Phone speaker & camera notch */}
      <div className="w-full flex justify-center items-center py-1">
        <div className="w-16 h-3 bg-zinc-900 rounded-full flex items-center justify-center space-x-1 px-1">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-1 bg-zinc-800 rounded-full" />
        </div>
      </div>

      {/* Screen area */}
      <div className="flex-1 rounded-[22px] bg-gradient-to-b from-zinc-900 to-black p-3.5 flex flex-col justify-between border border-border/40 overflow-hidden relative">
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-coral/20 rounded-full blur-2xl pointer-events-none" />

        {/* Status Bar */}
        <div className="flex justify-between items-center text-[9px] font-mono text-muted mb-2">
          <span>09:41</span>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-1.5 border border-muted inline-block" />
            <span className="text-coral">5G</span>
          </div>
        </div>

        {/* Content badge */}
        <div className="my-auto space-y-2.5">
          <div className="w-9 h-9 rounded-xl bg-coral-dim border border-coral/30 flex items-center justify-center text-coral">
            {variant === 'alert' && <BellRing className="w-5 h-5" />}
            {variant === 'secure' && <ShieldCheck className="w-5 h-5" />}
            {variant === 'guardian' && <Smartphone className="w-5 h-5" />}
            {variant === 'ai' && <Cpu className="w-5 h-5" />}
            {variant === 'fintech' && <Database className="w-5 h-5" />}
            {variant === 'generic' && <Smartphone className="w-5 h-5" />}
          </div>

          <div>
            <span className="text-[10px] font-mono text-coral tracking-widest uppercase block">
              {techTag}
            </span>
            <h4 className="font-syne font-bold text-base text-foreground tracking-tight leading-tight">
              {title}
            </h4>
          </div>

          <p className="font-inter text-[11px] text-muted line-clamp-3 leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Bottom mock action card */}
        <div className="pt-2 border-t border-border/40 flex items-center justify-between">
          <span className="text-[9px] font-mono text-foreground/80 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            OFFLINE READY
          </span>
          <span className="text-[9px] font-mono text-coral">v2.4.0</span>
        </div>
      </div>
    </div>
  );
};
