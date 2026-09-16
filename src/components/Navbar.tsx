'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FileDown, 
  Github, 
  Linkedin, 
  Menu, 
  X, 
  Database
} from 'lucide-react';
import { personalData } from '@/data/personal';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#060913]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-lg dark:shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors">
              <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                {personalData.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 tracking-wider uppercase font-semibold">
                Data Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, Social & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 rounded-lg border border-transparent hover:border-slate-300 dark:hover:border-slate-700/60 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 rounded-lg border border-transparent hover:border-slate-300 dark:hover:border-slate-700/60 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Owais-Ahmad-Data-Engineer-CV.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border border-cyan-400/30 shadow-md shadow-cyan-900/20 transition-all active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions & Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Owais-Ahmad-Data-Engineer-CV.pdf"
              className="p-2 rounded-lg text-xs text-cyan-600 dark:text-cyan-400 bg-cyan-100/60 dark:bg-cyan-950/50 border border-cyan-300 dark:border-cyan-800/40"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-xl backdrop-blur-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium text-center transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/40 font-semibold'
                      : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800"
              >
                <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                GitHub
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800"
              >
                <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                LinkedIn
              </a>
            </div>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Owais-Ahmad-Data-Engineer-CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 px-3.5 py-2 rounded-lg shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
