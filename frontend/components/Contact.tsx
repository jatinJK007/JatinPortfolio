import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const emailAddress = "jatinkumarjkk5@gmail.com";
  const mailtoLink = `mailto:${emailAddress}?subject=Project%20Enquiry%20-%20Mobile%20Engineering&body=Hi%20Jatin,%0A%0A1.%20What%20the%20app%20does:%0A2.%20Who%20uses%20it:%0A3.%20Timeline:%0A4.%20Where%20the%20current%20build%20hurts:%0A`;

  return (
    <section id="contact" className="w-full bg-coral text-black py-24 md:py-32 px-6 md:px-10 selection:bg-black selection:text-coral">
      <div className="max-w-[1280px] mx-auto">
        <span className="font-inter font-medium text-[11px] tracking-label text-black/80 uppercase block mb-4">
          START A CONVERSATION
        </span>

        <h2 className="font-syne font-semibold text-[clamp(36px,5vw,72px)] tracking-tighterH2 leading-[1.05] text-black mb-10 max-w-4xl">
          Let&apos;s build something.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end border-t border-black/20 pt-10">
          <div className="space-y-6 font-inter text-lg md:text-xl text-black/90 leading-relaxed">
            <p className="font-normal">
              Tell me what the app does, who uses it, your timeline, and where the current build hurts. That last one is the most useful thing you can include.
            </p>
            <p className="text-black/80 text-base md:text-lg">
              Open to full-time roles, MVP builds and security reviews of Android apps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-end gap-4">
            <a
              href={mailtoLink}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-black text-coral font-inter font-medium text-xs tracking-label uppercase hover:bg-zinc-900 active:scale-95 transition-all shadow-xl"
            >
              <Mail className="w-4 h-4" />
              <span>{emailAddress}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
