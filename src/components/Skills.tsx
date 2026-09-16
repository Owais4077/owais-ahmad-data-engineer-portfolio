'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Workflow, 
  Layers, 
  Cloud, 
  Database, 
  BarChart3, 
  Network, 
  Cpu, 
  Wrench
} from 'lucide-react';
import { skillCategoriesData } from '@/data/skills';
import { MotionWrapper } from './MotionWrapper';

export const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-600 dark:text-cyan-300" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Network': return <Network className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-slate-600 dark:text-slate-300" />;
      default: return <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-[#060913] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionWrapper>
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-0.5 bg-cyan-500 rounded-full"
            />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-semibold">
              TECHNICAL STACK & COMPETENCIES
            </span>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Technologies, frameworks, and tools used for building scalable ETL/ELT pipelines and Lakehouse architectures.
            </p>
          </div>
        </MotionWrapper>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData.map((cat, idx) => (
            <MotionWrapper key={cat.category} delay={idx * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all shadow-md dark:shadow-lg hover:shadow-cyan-500/10 backdrop-blur-md flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                      {getIcon(cat.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all flex items-center gap-1.5 cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400/80" />
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>

      </div>
    </section>
  );
};
