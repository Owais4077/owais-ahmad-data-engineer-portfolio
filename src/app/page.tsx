import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Architecture } from '@/components/Architecture';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-200 flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Architecture />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
