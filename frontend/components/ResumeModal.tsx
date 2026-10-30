import React from 'react';
import { X, Printer, Download, Mail, Phone, ExternalLink } from 'lucide-react';
import { JATIN_RESUME } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#0f0f10] border border-border text-foreground rounded-xl sm:rounded-2xl shadow-2xl my-auto overflow-hidden flex flex-col max-h-[94vh]">
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-border bg-card">
          <div className="flex items-center gap-2.5 truncate">
            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse shrink-0" />
            <span className="font-syne font-bold text-sm sm:text-base text-foreground tracking-wide truncate">
              Jatin Kumar — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 text-xs font-mono text-foreground hover:bg-zinc-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-coral" />
              <span>Print / PDF</span>
            </button>
            <a
              href="mailto:jatinkumarjkk5@gmail.com?subject=Job%20Opportunity%20-%20Jatin%20Kumar"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-coral text-black text-xs font-inter font-medium tracking-wide hover:bg-coral-hover transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="p-4 sm:p-8 md:p-10 overflow-y-auto font-inter text-foreground/90 space-y-6 bg-[#0a0a0b] print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-border pb-4 print:border-black">
            <h1 className="font-syne font-extrabold text-2xl sm:text-4xl text-foreground print:text-black">
              {JATIN_RESUME.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-muted mt-2">
              <a
                href={`mailto:${JATIN_RESUME.email}`}
                className="hover:text-coral transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-coral" />
                <span className="break-all">{JATIN_RESUME.email}</span>
              </a>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-coral" />
                {JATIN_RESUME.phone}
              </span>
              <span>·</span>
              <a
                href={JATIN_RESUME.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-coral transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href={JATIN_RESUME.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-coral transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-syne font-bold text-xs sm:text-sm uppercase tracking-wider text-coral mb-2">
              Summary
            </h2>
            <p className="font-light text-xs sm:text-[14px] leading-relaxed text-muted print:text-neutral-800">
              {JATIN_RESUME.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-syne font-bold text-xs sm:text-sm uppercase tracking-wider text-coral mb-2.5">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono bg-card/60 p-3.5 sm:p-4 rounded-xl border border-border/80">
              {JATIN_RESUME.skills.map((skill, i) => (
                <div key={i} className="leading-snug">
                  <span className="font-semibold text-foreground/90">{skill.category}: </span>
                  <span className="text-muted">{skill.items}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-syne font-bold text-xs sm:text-sm uppercase tracking-wider text-coral mb-3">
              Experience
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {JATIN_RESUME.experience.map((exp, i) => (
                <div key={i} className="border-l-2 border-border pl-3 sm:pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-0.5">
                    <span className="font-bold text-foreground">
                      {exp.role} <span className="font-normal text-coral">— {exp.company}</span>
                    </span>
                    <span className="font-mono text-[11px] text-muted">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-muted font-light leading-relaxed">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-syne font-bold text-xs sm:text-sm uppercase tracking-wider text-coral mb-3">
              Projects
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {JATIN_RESUME.projects.map((proj, i) => (
                <div key={i} className="border-l-2 border-coral/60 pl-3 sm:pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-foreground text-xs sm:text-sm">
                        {proj.name}
                      </span>
                      <span className="text-xs text-muted">— {proj.subtitle}</span>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[10px] text-coral bg-coral-dim px-2 py-0.5 rounded border border-coral/30"
                        >
                          Live on Play Store ↗
                        </a>
                      )}
                    </div>
                    <span className="font-mono text-[11px] text-muted">{proj.period}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-muted font-light leading-relaxed">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-border pt-4">
            <h2 className="font-syne font-bold text-xs sm:text-sm uppercase tracking-wider text-coral mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
              <span className="font-medium text-foreground">
                {JATIN_RESUME.education.degree}{' '}
                <span className="text-muted">({JATIN_RESUME.education.institution})</span>
              </span>
              <span className="font-mono text-xs text-muted">
                {JATIN_RESUME.education.period}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-4 sm:px-6 py-3 bg-card border-t border-border flex items-center justify-between">
          <span className="font-mono text-[11px] text-muted">
            DELHI NCR · AVAILABLE FOR FULL-TIME ROLES
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-800 text-foreground font-mono text-xs uppercase hover:bg-zinc-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
