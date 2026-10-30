import React, { useState } from 'react';
import { ArrowDownToLine, MapPin, CheckCircle, Mail } from 'lucide-react';
import { ResumeModal } from './ResumeModal';
import { JatinPhoto } from './JatinPhoto';

export const Bio: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto border-b border-border/40">
      <div className="mb-10 sm:mb-14">
        <span className="font-inter font-medium text-[11px] tracking-label text-coral uppercase block mb-3">
          BACKGROUND & PHILOSOPHY
        </span>
        <h2 className="font-syne font-semibold text-[clamp(28px,4vw,60px)] tracking-tighterH2 leading-tight text-foreground">
          About me.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Real Portrait in soft frame */}
        <div className="md:col-span-5 w-full">
          <div className="relative rounded-3xl p-3 bg-card border border-border overflow-hidden shadow-2xl">
            <div className="w-full min-h-[380px] sm:min-h-[460px] rounded-2xl bg-gradient-to-b from-zinc-800 to-black flex flex-col justify-between p-5 sm:p-6 relative overflow-hidden">
              {/* Soft decorative background glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-coral/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex justify-between items-center text-xs font-mono text-muted relative z-10">
                <span className="flex items-center gap-1.5 text-coral">
                  <MapPin className="w-3.5 h-3.5" /> DELHI NCR
                </span>
                <span className="bg-border/60 px-2 py-0.5 rounded text-[10px]">
                  BATCH OF 2026
                </span>
              </div>

              {/* Exact Photo */}
              <div className="relative z-10 my-6 flex flex-col items-center text-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-coral/80 bg-zinc-950 flex items-center justify-center mb-4 shadow-[0_0_30px_hsla(8,92%,62%,0.25)] overflow-hidden">
                  <JatinPhoto variant="bio" className="w-full h-full" />
                </div>
                <h3 className="font-syne font-bold text-2xl text-foreground">
                  JATIN KUMAR
                </h3>
                <p className="font-mono text-xs text-coral mt-1 tracking-wider uppercase">
                  Mobile Engineer
                </p>
              </div>

              {/* Verified badges */}
              <div className="relative z-10 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-coral" /> KOTLIN + FLUTTER
                </span>
                <span className="text-coral">INDIRA GANDHI UNIV</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Three paragraphs and Download Resume link */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
          <div className="space-y-5 sm:space-y-6 font-inter font-light text-base sm:text-lg text-foreground/90 leading-[1.7]">
            <p>
              I&apos;m a mobile engineer based in Delhi NCR. I started with Android internships and now build fintech products as a Software Developer Executive.
            </p>
            <p>
              My work sits between product speed and security discipline: sensors, hardware-backed keys, compliance-aware flows. I&apos;m currently moving deeper into Flutter and Dart while keeping Kotlin as my foundation.
            </p>
            <p>
              I&apos;m completing a B.Tech in Computer Science (2026 batch) and I answer my own email.
            </p>
          </div>

          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => setShowResumeModal(true)}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-coral text-black font-inter font-medium text-xs tracking-label uppercase hover:bg-coral-hover transition-colors shadow-lg active:scale-95"
            >
              <ArrowDownToLine className="w-4 h-4 text-black group-hover:-translate-y-0.5 transition-transform" />
              <span>View & Download Resume</span>
            </button>

            <a
              href="mailto:jatinkumarjkk5@gmail.com?subject=Job%20Inquiry%20-%20Jatin%20Kumar"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-card border border-border text-foreground font-inter font-medium text-xs tracking-label uppercase hover:border-coral hover:text-coral transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-coral" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Full Resume Modal */}
      <ResumeModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} />
    </section>
  );
};
