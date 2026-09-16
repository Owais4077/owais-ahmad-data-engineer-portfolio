'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Github, 
  ArrowRight, 
  Layers, 
  CheckCircle2
} from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-slate-700/80 transition-all duration-300 shadow-md dark:shadow-xl backdrop-blur-md flex flex-col justify-between overflow-hidden group"
    >
      
      <div>
        {/* Top 16:9 Project Visual Container */}
        <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.featured}
            className="object-cover object-center transform transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 dark:from-slate-950/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Card Body */}
        <div className="p-6 pb-4 space-y-4">
          
          {/* Category & Featured Badge */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/40 px-2 py-0.5 rounded font-semibold">
                FEATURED PIPELINE
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Banner (If metrics exist, e.g., Retail Lakehouse) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/30">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg font-extrabold font-mono text-cyan-700 dark:text-cyan-300">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400 font-sans">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Architecture Flow Box with Micro-animated Data Flow Indicator */}
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
            <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>ARCHITECTURE FLOW</span>
              </span>
              <span className="flex items-center gap-1 text-[9px] text-cyan-600 dark:text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                ACTIVE
              </span>
            </div>
            <div className="text-[11px] font-mono text-cyan-800 dark:text-cyan-300 leading-relaxed break-words font-medium">
              {project.architecture.description}
            </div>
          </div>

          {/* Highlights bullets */}
          <div className="space-y-2 pt-1">
            {project.highlights.slice(0, 3).map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Tech Stack Badges & Buttons Footer */}
      <div className="p-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-4 bg-slate-50/50 dark:bg-slate-950/40">
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Repository</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              Case Study
            </span>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border border-cyan-400/30 transition-all shadow-sm active:scale-95"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>

    </motion.div>
  );
};
