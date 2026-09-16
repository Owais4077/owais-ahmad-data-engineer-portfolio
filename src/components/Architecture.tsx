'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Database, 
  Layers, 
  Sparkles, 
  BarChart3, 
  Server, 
  Workflow, 
  ArrowRight,
  Shield
} from 'lucide-react';
import { MotionWrapper } from './MotionWrapper';
import { ArchitectureVisual } from './architecture/ArchitectureVisual';

export const Architecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [currentPulse, setCurrentPulse] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Automatic cycling pulse to demonstrate continuous pipeline data processing
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentPulse((prev) => (prev + 1) % 6);
    }, 2200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const pipelineSteps = [
    {
      step: "01",
      name: "Data Sources",
      badge: "SOURCES",
      color: "border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20",
      activeBg: "from-blue-100 dark:from-blue-950/80 to-white dark:to-slate-900/90 border-blue-500 shadow-blue-500/20",
      icon: <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      items: ["REST APIs", "Relational DBs (PostgreSQL/MySQL)", "JSON / CSV / Parquet Files", "Biometric Records"],
      details: "Raw transactional data, system logs, and hardware device feeds entering the data platform."
    },
    {
      step: "02",
      name: "Ingestion Layer",
      badge: "INGESTION",
      color: "border-cyan-500/40 text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/20",
      activeBg: "from-cyan-100 dark:from-cyan-950/80 to-white dark:to-slate-900/90 border-cyan-500 shadow-cyan-500/20",
      icon: <Workflow className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      items: ["Databricks Auto Loader", "JDBC Connectors", "FastAPI Endpoints", "Scheduled Data Workflows"],
      details: "Ingestion framework handling file arrival, schema preservation, and network retries."
    },
    {
      step: "03",
      name: "Bronze Layer",
      badge: "BRONZE",
      color: "border-amber-600/40 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20",
      activeBg: "from-amber-100 dark:from-amber-950/80 to-white dark:to-slate-900/90 border-amber-500 shadow-amber-500/20",
      icon: <Database className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      items: ["Raw Delta Lake Tables", "Raw Landing Tables", "Source Schema Preservation", "Ingestion Timestamps"],
      details: "Raw data landed directly into Delta Lake tables maintaining auditability without initial transformation."
    },
    {
      step: "04",
      name: "Silver Layer",
      badge: "SILVER",
      color: "border-slate-400/40 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/40",
      activeBg: "from-slate-200 dark:from-slate-800/90 to-white dark:to-slate-900/90 border-cyan-400 shadow-cyan-400/20",
      icon: <Layers className="w-5 h-5 text-slate-700 dark:text-slate-300" />,
      items: ["Schema Validation & Profiling", "Deduplication Logic", "Delta MERGE Upserts", "Data Quality Checks"],
      details: "Cleansed, structured, and validated data tables ready for downstream business logic."
    },
    {
      step: "05",
      name: "Gold Layer",
      badge: "GOLD",
      color: "border-yellow-500/40 text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/20",
      activeBg: "from-yellow-100 dark:from-yellow-950/80 to-white dark:to-slate-900/90 border-yellow-500 shadow-yellow-500/20",
      icon: <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
      items: ["Business Rule Processing", "Aggregated Business Datasets", "Sales & Customer KPIs", "Curated Delta Tables"],
      details: "Curated, aggregated data models optimized for business decision-making and KPI metrics."
    },
    {
      step: "06",
      name: "Analytics & BI",
      badge: "CONSUMPTION",
      color: "border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20",
      activeBg: "from-emerald-100 dark:from-emerald-950/80 to-white dark:to-slate-900/90 border-emerald-500 shadow-emerald-500/20",
      icon: <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      items: ["Power BI Dashboards", "Databricks SQL Dashboards", "Databricks AI/BI", "REST API Services"],
      details: "Reporting layer connecting downstream analytics tools directly to trusted data."
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-white/50 dark:bg-[#060913] relative overflow-hidden transition-colors duration-200">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 dark:bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Animated Cyan Line */}
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
              DATA PIPELINE ARCHITECTURE
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Medallion Lakehouse Architecture
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                How raw data flows from disparate sources into Bronze, Silver, and Gold Delta Lake layers for analytics & reporting.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-700 dark:text-slate-400 bg-white dark:bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
              <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Unity Catalog Governed</span>
            </div>
          </div>
        </MotionWrapper>

        {/* Pipeline Architecture Cards Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pipelineSteps.map((step, idx) => {
            const isActive = activeStep === idx || (activeStep === null && currentPulse === idx);
            return (
              <MotionWrapper key={step.step} delay={idx * 0.08}>
                <div
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`h-full p-6 rounded-2xl bg-gradient-to-b ${
                    isActive ? step.activeBg : 'from-white dark:from-slate-900/80 to-slate-50 dark:to-slate-950/80'
                  } border ${step.color} transition-all duration-300 relative group flex flex-col justify-between shadow-md dark:shadow-xl ${
                    isActive ? 'scale-[1.01] -translate-y-1' : ''
                  }`}
                >
                  <div>
                    {/* Card Top Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700/60">
                        {step.step}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${step.color} ${isActive ? 'animate-pulse' : ''}`}>
                        {step.badge}
                      </span>
                    </div>

                    {/* Card Main Header & Desktop Technical Visual */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="space-y-2 flex-grow">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 transition-transform ${isActive ? 'scale-110 border-cyan-500' : 'group-hover:scale-110'}`}>
                            {step.icon}
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                            {step.name}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {step.details}
                        </p>
                      </div>

                      {/* Desktop Upper-Right SVG Technical Visual */}
                      <div className="hidden sm:block w-[125px] h-[90px] shrink-0 opacity-90 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all">
                        <ArchitectureVisual step={step.step} />
                      </div>
                    </div>

                    {/* Mobile SVG Technical Visual */}
                    <div className="block sm:hidden w-full h-[95px] my-3 opacity-90">
                      <ArchitectureVisual step={step.step} />
                    </div>
                  </div>

                  {/* Sub-items list */}
                  <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800/80 mt-2">
                    {step.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-500 animate-ping' : 'bg-cyan-500 dark:bg-cyan-400/80'} shrink-0`} />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Visual Pipeline Summary Bar */}
        <MotionWrapper delay={0.6}>
          <div className="mt-12 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md backdrop-blur-md overflow-x-auto">
            <div className="min-w-[700px] flex items-center justify-between gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-800/60 text-blue-900 dark:text-blue-300 font-medium">
                Sources: APIs / DBs / Files
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/60 text-cyan-900 dark:text-cyan-300 font-medium">
                Auto Loader / JDBC Ingestion
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="px-3 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800/60 text-amber-900 dark:text-amber-300 font-medium">
                Bronze (Raw Delta)
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium">
                Silver (Validated Delta)
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="px-3 py-1.5 rounded-lg bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300 dark:border-yellow-800/60 text-yellow-900 dark:text-yellow-300 font-medium">
                Gold (Business Aggregates)
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-300 font-medium">
                Power BI & Databricks SQL
              </span>
            </div>
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
};
