'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { MotionWrapper } from './MotionWrapper';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Lakehouse', 'ETL/ELT', 'API & Integration', 'AI & Automation'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-100/70 dark:bg-[#080c17]/90 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionWrapper>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-cyan-500 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-semibold">
              FEATURED ENGINEERING WORK
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Featured Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Data Engineering projects, Databricks workflows, PySpark processing, and REST API integrations.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <MotionWrapper key={project.slug} delay={idx * 0.08}>
              <ProjectCard project={project} />
            </MotionWrapper>
          ))}
        </div>

      </div>
    </section>
  );
};
