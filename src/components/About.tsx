'use client';

import React from 'react';
import { 
  Database, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';
import { MotionWrapper } from './MotionWrapper';

export const About: React.FC = () => {
  const principles = [
    {
      icon: <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: "Medallion Architecture",
      description: "Structured Bronze-Silver-Gold data layers for clean, audited, and analytics-ready datasets."
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Incremental Processing",
      description: "Efficient Delta MERGE & Auto Loader routines minimizing batch latency and compute overhead."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Data Quality & Governance",
      description: "Centralized schema validation, deduplication rules, and Unity Catalog access control."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-100/70 dark:bg-[#080c17]/90 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionWrapper>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-cyan-500 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-semibold">
              BACKGROUND & PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-stretch">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <MotionWrapper delay={0.1}>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none backdrop-blur-sm space-y-4">
                <p>
                  I’m a <strong className="text-slate-900 dark:text-white font-semibold">Data Engineer</strong> specializing in designing and building scalable <strong className="text-slate-900 dark:text-white font-semibold">ETL/ELT pipelines, Lakehouse architectures, data integrations, and analytics-ready solutions</strong>. I work with <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">Python</span>, <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">SQL</span>, <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">PySpark</span>, <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">Apache Spark</span>, <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">Databricks</span>, <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">Delta Lake</span>, <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">PostgreSQL</span>, <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">FastAPI</span>, <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">Docker</span>, and <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm">Power BI</span> to transform raw data into clean, reliable, and actionable datasets.
                </p>
                <p>
                  I have hands-on experience with <strong className="text-slate-900 dark:text-white font-semibold">Bronze-Silver-Gold Medallion Architecture, incremental data processing, data transformation, data quality validation, REST API development, workflow orchestration, and business intelligence reporting</strong>. I focus on developing <strong className="text-slate-900 dark:text-white font-semibold">scalable, reliable, and maintainable data infrastructure</strong> that enables efficient analytics and data-driven decision-making.
                </p>
                <p>
                  With a background in <strong className="text-slate-900 dark:text-white font-semibold">Data Science and AI/ML</strong>, I also enjoy building intelligent solutions that combine <strong className="text-slate-900 dark:text-white font-semibold">data engineering, machine learning, and modern software technologies</strong> to solve real-world problems.
                </p>
              </div>
            </MotionWrapper>

            {/* Quick Core Competencies Checklist */}
            <MotionWrapper delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Lakehouse Architecture Design",
                  "PySpark & Distributed Computing",
                  "Delta Lake MERGE Operations",
                  "Automated Auto Loader Ingestion",
                  "FastAPI & REST Integrations",
                  "Power BI & Databricks Dashboards"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>

          {/* Core Engineering Principles Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {principles.map((p, idx) => (
              <MotionWrapper key={p.title} delay={0.2 + idx * 0.1}>
                <div className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}

            <MotionWrapper delay={0.5}>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-cyan-800/50 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs font-mono text-cyan-950 dark:text-cyan-300 shadow-sm">
                <span className="flex items-center gap-2 font-semibold">
                  <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  Primary Focus: Reliability &amp; Maintainability
                </span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">Lahore, PK</span>
              </div>
            </MotionWrapper>
          </div>

        </div>
      </div>
    </section>
  );
};
