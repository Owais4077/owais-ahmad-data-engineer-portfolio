'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const BronzeVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg className="w-full h-full max-w-[150px] max-h-[105px]" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Bronze Cylinder / Delta Table Cylinder Storage */}
        {/* Bottom Ellipse */}
        <ellipse cx="80" cy="85" rx="42" ry="12" className="fill-amber-100 dark:fill-amber-950/80 stroke-amber-500/70" strokeWidth="1.5" />
        
        {/* Cylinder Body */}
        <path d="M 38,45 L 38,85 C 38,91.6 56.8,97 80,97 C 103.2,97 122,91.6 122,85 L 122,45" className="fill-amber-50/50 dark:fill-amber-950/40 stroke-amber-500/70" strokeWidth="1.5" />
        
        {/* Middle Line */}
        <ellipse cx="80" cy="65" rx="42" ry="12" className="stroke-amber-500/50" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Top Ellipse Cap */}
        <ellipse cx="80" cy="45" rx="42" ry="12" className="fill-amber-200/60 dark:fill-amber-900/60 stroke-amber-500" strokeWidth="1.5" />

        <text x="80" y="49" textAnchor="middle" className="fill-amber-900 dark:fill-amber-200 font-mono text-[9px] font-extrabold tracking-wider">BRONZE (RAW)</text>

        {/* Incoming Unstructured Raw File Blocks Landing into Storage */}
        <g transform="translate(30, 8)">
          <rect width="18" height="14" rx="2" className="fill-amber-100 dark:fill-amber-900/80 stroke-amber-600/60" strokeWidth="1" />
          <text x="9" y="10" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 font-mono text-[7px] font-bold">JSON</text>
        </g>

        <g transform="translate(71, 4)">
          <rect width="18" height="14" rx="2" className="fill-amber-100 dark:fill-amber-900/80 stroke-amber-600/60" strokeWidth="1" />
          <text x="9" y="10" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 font-mono text-[7px] font-bold">CSV</text>
        </g>

        <g transform="translate(112, 8)">
          <rect width="18" height="14" rx="2" className="fill-amber-100 dark:fill-amber-900/80 stroke-amber-600/60" strokeWidth="1" />
          <text x="9" y="10" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 font-mono text-[7px] font-bold">ROW</text>
        </g>

        {/* Falling Raw Data Blocks Motion */}
        {!shouldReduceMotion && (
          <motion.circle
            cx="80"
            cy="20"
            r="2.5"
            fill="#f59e0b"
            animate={{ cy: [20, 36], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }}
          />
        )}
      </svg>
    </div>
  );
};

