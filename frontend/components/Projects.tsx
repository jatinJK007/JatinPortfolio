import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { DeviceFrame } from './DeviceFrame';

interface ProjectsProps {
  onHoverRow: (hovering: boolean) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onHoverRow }) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const projects: (ProjectItem & { variant: 'alert' | 'secure' | 'guardian' | 'ai' })[] = [
    {
      id: 'sentry-one',
      name: 'SentryOne',
      description: 'Live SOS emergency app on the Play Store: accelerometer-triggered alerts, GPS, offline-first, sub-200ms response.',
      tech: 'Kotlin · Room · Sensors · Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.jatinkumar.sentryone',
      variant: 'alert',
    },
    {
      id: 'secure-auth',
      name: 'SecureAuth',
      description: 'TEE-backed Keystore, Play Integrity verification and biometric-gated cryptography.',
      tech: 'Kotlin · Keystore · BiometricPrompt · Play Integrity',
      url: 'https://github.com/jatinjk007',
      variant: 'secure',
    },
    {
      id: 'guardian-plus',
      name: 'Guardian+',
      description: 'Personal safety, anti-theft and digital wellbeing in one app, built on sensors, services and system APIs.',
      tech: 'Kotlin · Services · Clean Architecture',
      url: 'https://github.com/jatinjk007',
      variant: 'guardian',
    },
    {
      id: 'legal-saathi',
      name: 'LegalSaathi',
      description: 'Indian legal assistant using retrieval-augmented generation, answering in Hinglish.',
      tech: 'Kotlin · MVVM · Room · Gemini · RAG',
      url: 'https://play.google.com/store/apps/details?id=com.application.LegalSathi',
      variant: 'ai',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    // Keep preview near mouse position
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleRowClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-10 max-w-[1280px] mx-auto border-b border-border/40 relative"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="font-inter font-medium text-[11px] tracking-label text-coral uppercase block mb-3">
            FEATURED BUILDS
          </span>
          <h2 className="font-syne font-semibold text-[clamp(30px,4vw,60px)] tracking-tighterH2 leading-tight text-foreground">
            What I&apos;ve built.
          </h2>
        </div>
        <p className="font-mono text-xs text-muted">
          CLICK ROW FOR PLAY STORE / REPO ↗
        </p>
      </div>

      {/* Large Project Rows */}
      <div className="divide-y divide-border/60 border-y border-border/60">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleRowClick(project.url)}
            onMouseEnter={() => {
              setActiveProject(project.id);
              onHoverRow(true);
            }}
            onMouseLeave={() => {
              setActiveProject(null);
              onHoverRow(false);
            }}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleRowClick(project.url);
            }}
            className="group py-8 md:py-10 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 hover:bg-card/40 px-3 -mx-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-coral"
          >
            {/* Left: Project title with row text shift 6px right */}
            <div className="flex-1 transform transition-transform duration-300 group-hover:translate-x-1.5">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-coral">
                  0{index + 1}
                </span>
                <h3 className="font-syne font-bold text-2xl md:text-4xl text-foreground group-hover:text-coral transition-colors flex items-center gap-3">
                  <span>{project.name}</span>
                  {project.url && (
                    <span className="hidden group-hover:inline-block font-mono text-[11px] text-coral bg-coral-dim px-2.5 py-0.5 rounded-full border border-coral/30">
                      LIVE ↗
                    </span>
                  )}
                </h3>
              </div>
              <p className="font-inter font-light text-base md:text-[17px] text-muted max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Right: Mono Tech Line + Coral Arrow with 10px slide */}
            <div className="flex items-center justify-between md:justify-end gap-6 shrink-0">
              <span className="font-mono text-xs md:text-sm text-foreground/70 bg-card px-3 py-1.5 rounded border border-border">
                {project.tech}
              </span>

              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-coral group-hover:border-coral group-hover:bg-coral group-hover:text-black transition-all duration-200">
                <ArrowUpRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Hover Screenshot Thumbnail near Cursor (Desktop only) */}
      {activeProject && (
        <div
          className="hidden lg:block fixed pointer-events-none z-30 transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x + 35}px`,
            top: `${mousePos.y - 170}px`,
          }}
        >
          {(() => {
            const p = projects.find((item) => item.id === activeProject);
            if (!p) return null;
            return (
              <DeviceFrame
                title={p.name}
                tagline={p.description}
                techTag={p.tech.split('·')[0].trim()}
                variant={p.variant}
              />
            );
          })()}
        </div>
      )}
    </section>
  );
};
