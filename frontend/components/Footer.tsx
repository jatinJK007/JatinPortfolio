import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const emailAddress = "jatinkumarjkk5@gmail.com";

  return (
    <footer className="w-full bg-background border-t border-border/60 py-10 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-inter text-xs tracking-wider">
        {/* Name and brand */}
        <div className="font-syne font-bold text-sm tracking-wide text-foreground">
          JATIN KUMAR
        </div>

        {/* Links row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-muted">
          <a
            href={`mailto:${emailAddress}`}
            className="hover:text-coral transition-colors flex items-center gap-1"
          >
            <span>{emailAddress}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://github.com/jatinjk007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://www.linkedin.com/in/kumarjatinjk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Copyright */}
        <div className="font-mono text-xs text-muted">
          © 2026
        </div>
      </div>
    </footer>
  );
};
