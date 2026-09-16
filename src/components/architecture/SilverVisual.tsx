'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const SilverVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg className="w-full h-full max-w-[150px] max-h-[105px]" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Left Side: Messy / Unfiltered Raw Points */}
        <g transform="translate(10, 20)">
          <rect width="40" height="70" rx="6" className="fill-slate-100 dark:fill-slate-900/60 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
          <text x="20" y="14" textAnchor="middle" className="fill-slate-500 font-mono text-[7px] font-bold">UNFILTERED</text>

          <circle cx="12" cy="30" r="2.5" className="fill-slate-400" />
          <circle cx="28" cy="26" r="2" className="fill-slate-400" />
          <circle cx="16" cy="45" r="3" className="fill-slate-400" />
          <circle cx="32" cy="48" r="2" className="fill-slate-400" />
          <circle cx="22" cy="60" r="2.5" className="fill-slate-400" />
        </g>

        {/* Center Filter / Deduplication / Delta MERGE Gate */}
        <g transform="translate(60, 32)">
          <polygon points="0,0 20,10 20,36 0,46" className="fill-cyan-500/10 stroke-cyan-500" strokeWidth="1.5" />
          <path d="M 10,12 L 10,34" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="2 2" />
          <text x="10" y="26" textAnchor="middle" className="fill-cyan-700 dark:fill-cyan-300 font-mono text-[6px] font-bold">MERGE</text>
        </g>

        {/* Right Side: Clean Validated Table Rows [✓][✓][✓] */}
        <g transform="translate(92, 20)">
          <rect width="58" height="70" rx="6" className="fill-slate-50 dark:fill-slate-900 stroke-cyan-500/60" strokeWidth="1.5" />
          <text x="29" y="14" textAnchor="middle" className="fill-cyan-700 dark:fill-cyan-300 font-mono text-[8px] font-bold">SILVER (CLEAN)</text>

          {/* Table Row 1 */}
          <rect x="6" y="22" width="46" height="11" rx="2" className="fill-cyan-100/60 dark:fill-cyan-950/60 stroke-cyan-400/40" strokeWidth="1" />
          <text x="12" y="30" className="fill-cyan-700 dark:fill-cyan-300 font-mono text-[7px] font-bold">✓ ID_101</text>

          {/* Table Row 2 */}
          <rect x="6" y="36" width="46" height="11" rx="2" className="fill-cyan-100/60 dark:fill-cyan-950/60 stroke-cyan-400/40" strokeWidth="1" />
          <text x="12" y="44" className="fill-cyan-700 dark:text-cyan-300 font-mono text-[7px] font-bold">✓ ID_102</text>

          {/* Table Row 3 */}
          <rect x="6" y="50" width="46" height="11" rx="2" className="fill-cyan-100/60 dark:fill-cyan-950/60 stroke-cyan-400/40" strokeWidth="1" />
          <text x="12" y="58" className="fill-cyan-700 dark:text-cyan-300 font-mono text-[7px] font-bold">✓ ID_103</text>
        </g>

        {/* Dynamic Transition Packet passing through gate */}
        {!shouldReduceMotion && (
          <motion.circle
            cx="48"
            cy="55"
            r="3"
            fill="#06b6d4"
            animate={{ cx: [48, 92] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </svg>
    </div>
  );
};

