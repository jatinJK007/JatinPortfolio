import React from 'react';

export const TechMarquee: React.FC = () => {
  const techStack = [
    'Kotlin',
    'Flutter',
    'Dart',
    'Coroutines',
    'MVVM',
    'Clean Architecture',
    'Room',
    'Drift',
    'Firebase',
    'Keystore',
    'BiometricPrompt',
    'Play Integrity',
    'Gemini',
    'RAG',
  ];

  return (
    <div className="w-full border-y border-border py-4 md:py-5 overflow-hidden bg-background">
      <div className="animate-marquee flex items-center space-x-8 text-foreground/55 hover:text-foreground/100 transition-opacity duration-300">
        {/* First set */}
        <div className="flex items-center space-x-8 shrink-0">
          {techStack.map((tech, idx) => (
            <React.Fragment key={`first-${idx}`}>
              <span className="font-syne font-semibold text-sm md:text-base tracking-wide uppercase select-none hover:text-coral transition-colors">
                {tech}
              </span>
              <span className="text-coral text-xs select-none">·</span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate set for seamless infinite loop */}
        <div className="flex items-center space-x-8 shrink-0" aria-hidden="true">
          {techStack.map((tech, idx) => (
            <React.Fragment key={`second-${idx}`}>
              <span className="font-syne font-semibold text-sm md:text-base tracking-wide uppercase select-none hover:text-coral transition-colors">
                {tech}
              </span>
              <span className="text-coral text-xs select-none">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
