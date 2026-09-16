'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const IngestionVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg className="w-full h-full max-w-[150px] max-h-[105px]" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Ingestion Engine Core Box */}
        <rect x="38" y="20" width="84" height="70" rx="8" className="fill-slate-100 dark:fill-slate-900 stroke-cyan-500/60" strokeWidth="1.5" />

        {/* Inner Framework Badges */}
        <g transform="translate(46, 28)">
          <rect width="68" height="14" rx="3" className="fill-cyan-50 dark:fill-cyan-950/80 stroke-cyan-500/40" strokeWidth="1" />
          <text x="34" y="10" textAnchor="middle" className="fill-cyan-700 dark:text-cyan-300 font-mono text-[8px] font-bold">Auto Loader</text>
        </g>

        <g transform="translate(46, 48)">
          <rect width="68" height="14" rx="3" className="fill-blue-50 dark:fill-blue-950/80 stroke-blue-500/40" strokeWidth="1" />
          <text x="34" y="10" textAnchor="middle" className="fill-blue-700 dark:text-blue-300 font-mono text-[8px] font-bold">JDBC Connector</text>
        </g>

        <g transform="translate(46, 68)">
          <rect width="68" height="14" rx="3" className="fill-teal-50 dark:fill-teal-950/80 stroke-teal-500/40" strokeWidth="1" />
          <text x="34" y="10" textAnchor="middle" className="fill-teal-700 dark:text-teal-300 font-mono text-[8px] font-bold">FastAPI / Cron</text>
        </g>

        {/* Incoming & Outgoing Flow Lines */}
        <path d="M 10,55 L 38,55" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 122,55 L 150,55" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Flow Arrow Heads */}
        <polygon points="35,52 40,55 35,58" fill="#06b6d4" />
        <polygon points="147,52 152,55 147,58" fill="#22d3ee" />

        {/* Packet Animation */}
        {!shouldReduceMotion && (
          <>
            <motion.circle
              cx="10"
              cy="55"
              r="3"
              fill="#06b6d4"
              animate={{ cx: [10, 38] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="122"
              cy="55"
              r="3"
              fill="#22d3ee"
              animate={{ cx: [122, 150] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: 0.7 }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

