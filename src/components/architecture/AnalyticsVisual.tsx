'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AnalyticsVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg className="w-full h-full max-w-[150px] max-h-[105px]" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Main Dashboard Window Container */}
        <rect x="15" y="10" width="130" height="90" rx="8" className="fill-slate-50 dark:fill-slate-900 stroke-emerald-500/60" strokeWidth="1.5" />
        
        {/* Dashboard Header Bar */}
        <path d="M 15,22 L 145,22" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        <circle cx="24" cy="16" r="2" fill="#ef4444" />
        <circle cx="30" cy="16" r="2" fill="#eab308" />
        <circle cx="36" cy="16" r="2" fill="#22c55e" />
        <text x="80" y="18" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 font-mono text-[7px] font-bold">POWER BI & DATABRICKS SQL</text>

        {/* Top KPI Cards Grid */}
        <g transform="translate(22, 28)">
          <rect width="32" height="18" rx="3" className="fill-emerald-100/60 dark:fill-emerald-950/60 stroke-emerald-500/40" strokeWidth="1" />
          <text x="16" y="8" textAnchor="middle" className="fill-slate-500 font-mono text-[5px]">PIPELINE</text>
          <text x="16" y="14" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-mono text-[7px] font-bold">100%</text>
        </g>

        <g transform="translate(64, 28)">
          <rect width="32" height="18" rx="3" className="fill-cyan-100/60 dark:fill-cyan-950/60 stroke-cyan-500/40" strokeWidth="1" />
          <text x="16" y="8" textAnchor="middle" className="fill-slate-500 font-mono text-[5px]">QUERY LATENCY</text>
          <text x="16" y="14" textAnchor="middle" className="fill-cyan-700 dark:fill-cyan-300 font-mono text-[7px] font-bold">&lt; 200ms</text>
        </g>

        <g transform="translate(106, 28)">
          <rect width="32" height="18" rx="3" className="fill-blue-100/60 dark:fill-blue-950/60 stroke-blue-500/40" strokeWidth="1" />
          <text x="16" y="8" textAnchor="middle" className="fill-slate-500 font-mono text-[5px]">RECORDS</text>
          <text x="16" y="14" textAnchor="middle" className="fill-blue-700 dark:text-blue-300 font-mono text-[7px] font-bold">540K+</text>
        </g>

        {/* Animated Bar Chart Graphic */}
        <g transform="translate(24, 55)">
          <rect x="0" y="0" width="55" height="38" rx="3" className="fill-slate-100/80 dark:fill-slate-950/80 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
          
          {/* Animated Bars */}
          <motion.rect
            x="8" y="22" width="6" height="10" rx="1" className="fill-emerald-500"
            initial={{ height: 0, y: 32 }}
            whileInView={{ height: 12, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.rect
            x="18" y="14" width="6" height="18" rx="1" className="fill-cyan-500"
            initial={{ height: 0, y: 32 }}
            whileInView={{ height: 20, y: 12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.rect
            x="28" y="18" width="6" height="14" rx="1" className="fill-blue-500"
            initial={{ height: 0, y: 32 }}
            whileInView={{ height: 16, y: 16 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.rect
            x="38" y="8" width="6" height="24" rx="1" className="fill-emerald-400"
            initial={{ height: 0, y: 32 }}
            whileInView={{ height: 24, y: 8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </g>

        {/* Line Chart Sparkline */}
        <g transform="translate(86, 55)">
          <rect x="0" y="0" width="52" height="38" rx="3" className="fill-slate-100/80 dark:fill-slate-950/80 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
          <path d="M 6,28 L 18,18 L 30,22 L 44,8" stroke="#10b981" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="44" cy="8" r="2.5" fill="#10b981" />
        </g>

      </svg>
    </div>
  );
};

