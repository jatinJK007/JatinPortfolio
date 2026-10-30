import React, { useState } from 'react';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { WhatIDo } from './components/WhatIDo';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Notes } from './components/Notes';
import { Numbers } from './components/Numbers';
import { Principle } from './components/Principle';
import { Bio } from './components/Bio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project'>('default');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-coral selection:text-black">
      {/* Effect 2: Coral spring cursor dot with expand 'View' mode */}
      <Cursor cursorVariant={cursorVariant} />

      {/* Top Navbar */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main>
        {/* 100vh Hero with name & portrait overlap + immediate links */}
        <Hero />

        {/* Tech Marquee */}
        <TechMarquee />

        {/* What I Do: 3 Columns */}
        <WhatIDo
          onSeeProjects={() => scrollToSection('projects')}
          onSeeWork={() => scrollToSection('work')}
          onReadNotes={() => scrollToSection('notes')}
        />

        {/* Projects: Large rows with hover previews */}
        <div
          onMouseEnter={() => setCursorVariant('project')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <Projects onHoverRow={(hovering) => setCursorVariant(hovering ? 'project' : 'default')} />
        </div>

        {/* Experience: 2-column grid */}
        <Experience />

        {/* Notes: Technical writeups */}
        <Notes />

        {/* Numbers: 4 large coral figures */}
        <Numbers />

        {/* Principle: Large Syne quote */}
        <Principle />

        {/* Bio: 2 columns + Resume */}
        <Bio />

        {/* Contact: Coral section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
