import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'WORK', href: '#work' },
    { label: 'NOTES', href: '#notes' },
    { label: 'ABOUT', href: '#about' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-[72px] bg-background/85 backdrop-blur-md border-b border-border/40 transition-colors">
        <div className="max-w-[1280px] h-full mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Subtle branding */}
          <a
            href="#hero"
            aria-label="Back to top"
            className="group flex items-center space-x-2 text-foreground/80 hover:text-coral transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-coral inline-block group-hover:scale-125 transition-transform" />
            <span className="font-mono text-xs tracking-widest text-muted group-hover:text-foreground transition-colors uppercase">
              JATIN KUMAR · MOBILE ENG
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter font-medium text-[11px] tracking-label text-muted hover:text-foreground transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={onContactClick}
              className="ml-4 px-5 py-2 rounded-full bg-coral text-primary-foreground font-inter font-medium text-[11px] tracking-label hover:bg-coral-hover active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
            >
              HIRE ME
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile Right Group */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onContactClick}
              className="px-3.5 py-1.5 rounded-full bg-coral text-primary-foreground font-inter font-medium text-[10px] tracking-label active:scale-95 transition-all"
            >
              HIRE ME
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="p-2 text-foreground hover:text-coral transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-30 bg-background flex flex-col justify-between pt-24 pb-12 px-8 md:hidden"
        >
          <div className="flex flex-col space-y-6">
            <span className="font-inter font-medium text-[11px] tracking-label text-coral">
              NAVIGATION
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="font-syne font-semibold text-3xl text-foreground hover:text-coral transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="border-t border-border pt-6 flex flex-col space-y-4">
            <span className="font-mono text-xs text-muted">DELHI NCR · AVAILABLE FOR WORK</span>
            <button
              onClick={() => {
                setMobileOpen(false);
                onContactClick();
              }}
              className="w-full py-4 rounded-xl bg-coral text-black font-inter font-medium text-xs tracking-label uppercase"
            >
              Hire Me · Direct Mail
            </button>
          </div>
        </div>
      )}
    </>
  );
};
