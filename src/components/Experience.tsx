'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Building2,
  ChevronRight,
  ExternalLink,
  FileText
} from 'lucide-react';
import { experienceData } from '@/data/experience';
import { MotionWrapper } from './MotionWrapper';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100/70 dark:bg-[#080c17]/90 relative transition-colors duration-200">
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
              CAREER & INDUSTRY EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
        </MotionWrapper>

        {/* Timeline Container */}
        <div className="mt-12 relative max-w-4xl mx-auto space-y-10">
          
          {/* Animated Vertical Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-slate-300 dark:bg-slate-800 origin-top"
          />

          {experienceData.map((exp, idx) => (
            <MotionWrapper key={exp.id} delay={0.15 * (idx + 1)}>
              <div className="relative pl-10 sm:pl-16 group">
                
                {/* Timeline Node Badge */}
                <div className="absolute left-0 top-1.5 w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md dark:shadow-lg dark:shadow-cyan-950/50 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-md dark:shadow-xl backdrop-blur-md space-y-6">
                  
                  {/* Header: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold mb-1 flex-wrap">
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={exp.ariaLabel || exp.companyLinkLabel}
                            className="hover:text-cyan-600 dark:hover:text-cyan-300 hover:underline transition-colors flex items-center gap-1 group/company"
                          >
                            <span className="break-words">{exp.company}</span>
                            <ExternalLink className="w-3 h-3 text-cyan-600 dark:text-cyan-400/80 group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <span className="break-words">{exp.company}</span>
                        )}

                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        {exp.isCurrent ? (
                          <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800/40 font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current Role
                          </span>
                        ) : (
                          <span className="text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/60 font-semibold">
                            Previous Role
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {exp.role}
                      </h3>

                      {/* Secondary Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2 pt-1.5">
                        {exp.companyUrl && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={exp.ariaLabel || exp.companyLinkLabel}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800/40 hover:border-cyan-400/50 transition-all group/link font-medium"
                          >
                            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            <span>{exp.companyLinkLabel || "View Company Profile"} ↗</span>
                          </a>
                        )}

                        {exp.experienceLetterUrl && (
                          <a
                            href={exp.experienceLetterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Experience Letter PDF"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 transition-all group/letter font-medium"
                          >
                            <FileText className="w-3 h-3 text-slate-600 dark:text-slate-400 group-hover/letter:translate-x-0.5 group-hover/letter:-translate-y-0.5 transition-transform" />
                            <span>View Experience Letter ↗</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-600 dark:text-slate-400 shrink-0">
                      <div className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-300 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Responsibilities Scanning List (Only rendered if present) */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        Key Engineering Responsibilities:
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <div key={respIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Employment Details Scanning List (Only rendered if present) */}
                  {exp.employmentDetails && exp.employmentDetails.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        EMPLOYMENT DETAILS:
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {exp.employmentDetails.map((detail, detailIdx) => (
                          <div key={detailIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Badges (Only rendered if present) */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">Technologies used:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            </MotionWrapper>
          ))}

        </div>
      </div>
    </section>
  );
};
