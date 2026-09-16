'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const DataSourcesVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg className="w-full h-full max-w-[150px] max-h-[105px]" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dsGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Source Nodes */}
        {/* 1. API Node */}
        <g transform="translate(15, 12)">
          <rect width="36" height="18" rx="4" className="fill-slate-100 dark:fill-slate-800 stroke-blue-500/50" strokeWidth="1.2" />
          <text x="18" y="12" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-mono text-[9px] font-bold">API</text>
        </g>

        {/* 2. DB Node */}
        <g transform="translate(15, 38)">
          <rect width="36" height="18" rx="4" className="fill-slate-100 dark:fill-slate-800 stroke-cyan-500/50" strokeWidth="1.2" />
          <text x="18" y="12" textAnchor="middle" className="fill-cyan-600 dark:fill-cyan-400 font-mono text-[9px] font-bold">DB</text>
        </g>

        {/* 3. CSV/JSON File Node */}
        <g transform="translate(15, 64)">
          <rect width="36" height="18" rx="4" className="fill-slate-100 dark:fill-slate-800 stroke-slate-400/50 dark:stroke-slate-600" strokeWidth="1.2" />
          <text x="18" y="12" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 font-mono text-[9px] font-bold">FILES</text>
        </g>

        {/* 4. IoT/Device Node */}
        <g transform="translate(15, 88)">
          <rect width="36" height="16" rx="4" className="fill-slate-100 dark:fill-slate-800 stroke-teal-500/50" strokeWidth="1.2" />
          <text x="18" y="11" textAnchor="middle" className="fill-teal-600 dark:fill-teal-400 font-mono text-[8px] font-bold">LOGS</text>
        </g>

        {/* Stream Connecting Paths */}
        <path d="M 51,21 C 80,21 95,50 115,50" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 51,47 C 75,47 95,50 115,50" stroke="#06b6d4" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 51,73 C 75,73 95,52 115,52" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 51,96 C 80,96 95,54 115,54" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />

        {/* Central Data Platform Ingestion Target Hub */}
        <circle cx="126" cy="51" r="14" className="fill-blue-500/10 dark:fill-cyan-950/60 stroke-cyan-500" strokeWidth="1.5" />
        <circle cx="126" cy="51" r="6" className="fill-cyan-500 dark:fill-cyan-400" />

        {/* Moving Data Packets */}
        {!shouldReduceMotion && (
          <>
            <motion.circle
              r="2.5"
              fill="#3b82f6"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: `path("M 51,21 C 80,21 95,50 115,50")` }}
            />
            <motion.circle
              r="2.5"
              fill="#06b6d4"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.6 }}
              style={{ offsetPath: `path("M 51,47 C 75,47 95,50 115,50")` }}
            />
            <motion.circle
              r="2.5"
              fill="#22d3ee"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
              style={{ offsetPath: `path("M 51,73 C 75,73 95,52 115,52")` }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

