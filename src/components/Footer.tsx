'use client';

import React from 'react';
import Link from 'next/link';
import { Database, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '@/data/personal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/90 dark:bg-[#04060d] border-t border-slate-200 dark:border-slate-800/80 py-12 text-slate-600 dark:text-slate-400 font-sans relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {personalData.name}
              </div>
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                Data Engineer • Lahore, Pakistan
              </div>
            </div>
          </div>

          {/* Quick Footer Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            <Link href="#about" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">About</Link>
            <Link href="#architecture" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">Architecture</Link>
            <Link href="#experience" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">Experience</Link>
            <Link href="#skills" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">Projects</Link>
            <Link href="#certifications" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">Certifications</Link>
            <Link href="#contact" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex items-center justify-center text-xs font-mono text-slate-700 dark:text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} Owais Ahmad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
