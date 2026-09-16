'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const GoldVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg className="w-full h-full max-w-[150px] max-h-[105px]" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Curated Gold Aggregation Card 1: Revenue KPI */}
        <g transform="translate(15, 15)">
          <rect width="60" height="36" rx="5" className="fill-yellow-50 dark:fill-yellow-950/70 stroke-yellow-500/60" strokeWidth="1.2" />
          <text x="8" y="14" className="fill-yellow-800 dark:fill-yellow-400 font-mono text-[7px] font-bold">REVENUE KPI</text>
          <rect x="8" y="20" width="30" height="8" rx="2" className="fill-yellow-500/20" />
          <text x="10" y="26" className="fill-yellow-900 dark:fill-yellow-200 font-mono text-[6px] font-bold">Aggregated</text>
        </g>

        {/* Curated Gold Aggregation Card 2: Sales Data Mart */}
        <g transform="translate(85, 15)">
          <rect width="60" height="36" rx="5" className="fill-yellow-50 dark:fill-yellow-950/70 stroke-yellow-500/60" strokeWidth="1.2" />
          <text x="8" y="14" className="fill-yellow-800 dark:fill-yellow-400 font-mono text-[7px] font-bold">SALES MART</text>
          <rect x="8" y="20" width="30" height="8" rx="2" className="fill-yellow-500/20" />
          <text x="10" y="26" className="fill-yellow-900 dark:fill-yellow-200 font-mono text-[6px] font-bold">Business Data</text>
        </g>

        {/* Main Combined Gold Delta Lake Layer Block */}
        <g transform="translate(30, 60)">
          <rect width="100" height="40" rx="6" className="fill-yellow-100/80 dark:fill-yellow-900/60 stroke-yellow-500" strokeWidth="1.5" />
          <text x="50" y="18" textAnchor="middle" className="fill-yellow-900 dark:fill-yellow-200 font-mono text-[9px] font-extrabold tracking-wider">GOLD DELTA TABLE</text>
          <text x="50" y="30" textAnchor="middle" className="fill-yellow-800 dark:fill-yellow-300 font-mono text-[7px] font-medium">Analytics & AI Ready</text>
        </g>

        {/* Dynamic Combining Arrow Packets */}
        {!shouldReduceMotion && (
          <>
            <motion.circle
              cx="45"
              cy="52"
              r="2.5"
              fill="#eab308"
              animate={{ cy: [52, 62] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx="115"
              cy="52"
              r="2.5"
              fill="#eab308"
              animate={{ cy: [52, 62] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

