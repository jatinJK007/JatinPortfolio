import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WhatIDoProps {
  onSeeProjects: () => void;
  onSeeWork: () => void;
  onReadNotes: () => void;
}

export const WhatIDo: React.FC<WhatIDoProps> = ({
  onSeeProjects,
  onSeeWork,
  onReadNotes,
}) => {
  const pillars = [
    {
      index: '01',
      title: 'Android',
      body: 'Kotlin apps on MVVM and Clean Architecture with Coroutines, Room and Jetpack. Sensors, background services and offline-first behaviour are my default territory.',
      cta: 'See projects',
      action: onSeeProjects,
    },
    {
      index: '02',
      title: 'Flutter',
      body: 'Flutter and Dart apps for fintech: local caching with Drift, push-triggered sync, and performance profiling in DevTools.',
      cta: 'See work',
      action: onSeeWork,
    },
    {
      index: '03',
      title: 'Security & AI',
      body: 'Hardware-backed keys, biometric flows and Play Integrity checks, plus RAG-based assistants on Gemini with Hinglish output.',
      cta: 'Read the notes',
      action: onReadNotes,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1280px] mx-auto border-b border-border/40">
      <div className="mb-14">
        <span className="font-inter font-medium text-[11px] tracking-label text-coral uppercase block mb-3">
          DISCIPLINES & CAPABILITIES
        </span>
        <h2 className="font-syne font-semibold text-[clamp(30px,4vw,60px)] tracking-tighterH2 leading-tight text-foreground">
          Engineering focused on what matters under pressure.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.index}
            className="group relative flex flex-col justify-between p-8 rounded-2xl bg-card border border-border/80 hover:border-coral/50 transition-all duration-300"
          >
            <div>
              <div className="font-mono text-sm text-coral mb-6 tracking-widest font-medium">
                {pillar.index} — {pillar.title}
              </div>
              <h3 className="font-syne font-semibold text-2xl text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="font-inter font-light text-[17px] leading-[1.7] text-muted group-hover:text-foreground/90 transition-colors">
                {pillar.body}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-border/40">
              <button
                onClick={pillar.action}
                className="inline-flex items-center gap-2 font-inter font-medium text-xs tracking-label text-coral hover:text-foreground transition-colors uppercase group-hover:translate-x-1 duration-200"
              >
                <span>{pillar.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
