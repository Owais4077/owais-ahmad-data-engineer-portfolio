'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowRight,
  Database,
  Layers,
  Server,
  BarChart3,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { personalData } from '@/data/personal';
import { MotionWrapper } from './MotionWrapper';
import { DataStreamBackground } from './DataStreamBackground';
import { DataParticles } from './effects/DataParticles';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      
      {/* Interactive Data Particles Network Layer */}
      <DataParticles />

      {/* Animated Data Stream Background Layer */}
      <DataStreamBackground />

      {/* Dynamic Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/15 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content with Staggered Entrance */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Status Badge */}
            <MotionWrapper delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-xs font-mono text-cyan-700 dark:text-cyan-400 backdrop-blur-sm shadow-sm hover:border-cyan-500/50 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalData.status}</span>
              </div>
            </MotionWrapper>

            {/* Location, Name & Headline */}
            <MotionWrapper delay={0.15}>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-mono text-xs uppercase tracking-widest font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>{personalData.location}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {personalData.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-500 dark:from-cyan-400 dark:via-blue-400 dark:to-teal-300 bg-clip-text text-transparent animate-text-gradient">
                  Building Reliable Data Pipelines & Scalable Lakehouse Solutions
                </p>
              </div>
            </MotionWrapper>

            {/* Professional Summary */}
            <MotionWrapper delay={0.25}>
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-[19px] leading-relaxed max-w-[740px] font-normal">
                <span className="text-cyan-700 dark:text-cyan-300 font-medium">Data Engineer</span> specializing in scalable <span className="text-cyan-700 dark:text-cyan-300 font-medium">ETL/ELT pipelines, Lakehouse architectures, data integration, and analytics-ready solutions</span>. Skilled in <span className="text-cyan-700 dark:text-cyan-300 font-medium">Python, SQL, PySpark, Databricks, Apache Spark, Delta Lake, PostgreSQL, FastAPI, Docker, and Power BI</span>, with a focus on transforming raw data into <span className="text-cyan-700 dark:text-cyan-300 font-medium">reliable, high-quality, and actionable datasets</span>.
              </p>
            </MotionWrapper>

            {/* Core Technology Badges */}
            <MotionWrapper delay={0.35}>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Python",
                  "SQL",
                  "PySpark",
                  "Databricks",
                  "Apache Spark",
                  "Delta Lake",
                  "ETL/ELT"
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all cursor-default group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0 group-hover:animate-pulse" />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </MotionWrapper>

            {/* Call to Actions */}
            <MotionWrapper delay={0.45}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-900/20 border border-cyan-400/30 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Owais-Ahmad-Data-Engineer-CV.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                >
                  <FileDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </MotionWrapper>

            {/* Quick Contact & Links */}
            <MotionWrapper delay={0.55}>
              <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-600 dark:text-slate-400">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>github.com/Owais4077</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{personalData.email}</span>
                </a>
              </div>
            </MotionWrapper>

          </div>

          {/* Right Column: Animated Data Pipeline Graphic */}
          <div className="lg:col-span-5">
            <MotionWrapper delay={0.3} direction="scale">
              <div className="relative rounded-2xl bg-white/95 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 p-6 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl backdrop-blur-md">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">Medallion_Pipeline.py</span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-800/40 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                    LIVE DATA FLOW
                  </span>
                </div>

                {/* Pipeline Flow Diagram */}
                <div className="space-y-4 relative">

                  {/* 1. Sources */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between group hover:border-blue-400 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/40">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white">Data Sources</div>
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">REST APIs | Relational DBs | Files</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-slate-200/80 dark:bg-slate-800 px-2 py-0.5 rounded font-medium">INGEST</span>
                  </div>

                  {/* Flow Arrow 1 */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-blue-500 to-cyan-500 relative">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    </div>
                  </div>

                  {/* 2. Bronze Layer */}
                  <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 flex items-center justify-between hover:border-amber-400 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800/50">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                          Bronze Layer
                          <span className="text-[9px] font-mono bg-amber-200/80 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-1.5 py-0.2 rounded font-medium">RAW</span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Auto Loader / JDBC Ingestion</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400/90 font-medium">Append-Only</span>
                  </div>

                  {/* Flow Arrow 2 */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-amber-500 to-slate-400 relative">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    </div>
                  </div>

                  {/* 3. Silver Layer */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between hover:border-cyan-400 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-2">
                          Silver Layer
                          <span className="text-[9px] font-mono bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-1.5 py-0.2 rounded font-medium">CLEANED</span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Deduplicated & Validated (MERGE)</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 font-medium">PySpark</span>
                  </div>

                  {/* Flow Arrow 3 */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-slate-400 to-yellow-500 relative">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    </div>
                  </div>

                  {/* 4. Gold Layer */}
                  <div className="p-3.5 rounded-xl bg-yellow-50/70 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-600/40 flex items-center justify-between hover:border-yellow-400 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-700/50">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-yellow-900 dark:text-yellow-200 flex items-center gap-2">
                          Gold Layer
                          <span className="text-[9px] font-mono bg-yellow-200/80 dark:bg-yellow-900/60 text-yellow-800 dark:text-yellow-300 px-1.5 py-0.2 rounded font-medium">CURATED</span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Business KPIs & Aggregates</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-yellow-700 dark:text-yellow-400 font-medium">Delta Lake</span>
                  </div>

                  {/* Flow Arrow 4 */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-yellow-500 to-emerald-500 relative">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                  </div>

                  {/* 5. Analytics & BI */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-between hover:border-emerald-400 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/50">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-900 dark:text-emerald-200">Analytics & BI</div>
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">Power BI | Databricks SQL | AI-BI</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>

                </div>

                {/* Footer Metric Snippet */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>Latency: Real-time / Batch</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Status: Healthy
                  </span>
                </div>

              </div>
            </MotionWrapper>
          </div>

        </div>
      </div>
    </section>
  );
};
