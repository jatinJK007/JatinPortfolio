import React from 'react';
import { ExperienceItem } from '../types';
import { Smartphone, Shield, Radio, Code2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences: (ExperienceItem & { icon: React.ReactNode })[] = [
    {
      id: 'fss',
      title: 'FintechSmartSolutions',
      result: 'Software Developer Executive on fintech/NBFC mobile products: lending flows, KYC and compliance-aware UX.',
      tag: 'JUN 2026 – PRESENT · EXECUTIVE',
      context: 'Lending Architecture & Compliance UX',
      icon: <Shield className="w-5 h-5 text-coral" />,
    },
    {
      id: 'dsr',
      title: 'DSRSecureTech',
      result: 'Developed secure, offline-first Android applications using Kotlin, MVVM, Room, and Firebase.',
      tag: 'JUN 2024 – SEP 2024 · INTERNSHIP',
      context: 'Offline Encrypted Storage & Auth',
      icon: <Smartphone className="w-5 h-5 text-coral" />,
    },
    {
      id: 'hackathon',
      title: 'Agora hackathon',
      result: 'Built a multilingual Hindi/English civic-complaint voice agent in eight hours, with tool-calling and human escalation.',
      tag: 'HACKATHON · MULTILINGUAL AI',
      context: '8-Hour Sprint · Real-time Voice Agent',
      icon: <Radio className="w-5 h-5 text-coral" />,
    },
    {
      id: 'freelance',
      title: 'Freelance',
      result: 'MVP builds for startups, Android first.',
      tag: 'CONTRACT · ARCHITECTURE',
      context: 'Zero-to-One Offline-First Delivery',
      icon: <Code2 className="w-5 h-5 text-coral" />,
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10 max-w-[1280px] mx-auto border-b border-border/40">
      <div className="mb-16">
        <span className="font-inter font-medium text-[11px] tracking-label text-coral uppercase block mb-3">
          TRACK RECORD
        </span>
        <h2 className="font-syne font-semibold text-[clamp(30px,4vw,60px)] tracking-tighterH2 leading-tight text-foreground">
          Recent <span className="italic text-coral font-light">work</span>.
        </h2>
      </div>

      {/* Two-column grid of 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group relative rounded-2xl bg-card border border-border/80 overflow-hidden p-7 flex flex-col justify-between hover:border-coral/50 transition-colors"
          >
            {/* Top row: context & icon */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[11px] text-coral tracking-wider">
                {exp.tag}
              </span>
              <div className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center">
                {exp.icon}
              </div>
            </div>

            {/* Device-frame mockup placeholder */}
            <div className="my-4 w-full h-44 rounded-xl bg-background border border-border/60 p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-dim via-transparent to-transparent opacity-60" />

              <div
                className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center transition-transform duration-[900ms] ease-out group-hover:scale-105"
              >
                <div className="w-12 h-1 rounded-full bg-border mb-3" />
                <span className="font-mono text-xs text-foreground/90 font-medium tracking-wide">
                  {exp.context}
                </span>
                <span className="font-mono text-[10px] text-muted mt-1">
                  OFFLINE CACHING · STRICT KEY PROTECTION
                </span>
              </div>

              <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-muted border-t border-border/40 pt-2">
                <span>STAGE: PRODUCTION READY</span>
                <span className="text-coral">VERIFIED BUILD</span>
              </div>
            </div>

            {/* Details */}
            <div className="mt-4">
              <h3 className="font-syne font-semibold text-2xl text-foreground mb-2 group-hover:text-coral transition-colors">
                {exp.title}
              </h3>
              <p className="font-inter font-light text-[17px] leading-[1.7] text-muted">
                {exp.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
