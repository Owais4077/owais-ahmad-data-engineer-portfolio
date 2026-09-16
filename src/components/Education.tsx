'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Calendar
} from 'lucide-react';
import { educationData } from '@/data/education';
import { MotionWrapper } from './MotionWrapper';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-100/70 dark:bg-[#080c17]/90 relative transition-colors duration-200">
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
              ACADEMIC BACKGROUND
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
        </MotionWrapper>

        <div className="mt-10 max-w-4xl mx-auto">
          <MotionWrapper delay={0.1} direction="scale">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md dark:shadow-xl relative overflow-hidden group">
              
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                
                {/* Icon & Degree Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                        Specialization: {educationData.specialization}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                        {educationData.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-1 text-slate-700 dark:text-slate-300 font-medium">
                    <div className="text-lg text-cyan-900 dark:text-cyan-200 font-semibold">
                      {educationData.institution}
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        {educationData.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        Graduation: {educationData.graduationYear}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Academic Standing</span>
                  <span className="text-xl font-bold font-mono text-cyan-700 dark:text-cyan-300 mt-0.5">
                    CGPA: {educationData.cgpa}
                  </span>
                </div>

              </div>

            </div>
          </MotionWrapper>
        </div>

      </div>
    </section>
  );
};
