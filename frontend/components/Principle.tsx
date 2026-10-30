import React from 'react';

export const Principle: React.FC = () => {
  return (
    <section className="py-28 md:py-36 px-6 md:px-10 max-w-[1280px] mx-auto border-b border-border/40">
      <div className="max-w-5xl">
        <span className="font-inter font-medium text-[11px] tracking-label text-coral uppercase block mb-6">
          CORE PHILOSOPHY
        </span>
        <blockquote className="font-syne font-semibold text-[clamp(28px,4.2vw,56px)] leading-[1.18] tracking-tighterH2 text-foreground">
          &ldquo;If a feature can&apos;t work offline and can&apos;t be trusted under stress, it isn&apos;t ready to ship.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center space-x-3">
          <div className="w-8 h-px bg-coral" />
          <cite className="font-mono text-xs uppercase text-muted tracking-widest not-italic">
            Engineering Standard · Jatin
          </cite>
        </div>
      </div>
    </section>
  );
};
