'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const DataStreamBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (shouldReduceMotion) return null;

  // Reduced particle paths on mobile for performance
  const paths = isMobile
    ? [
        { d: "M 20,100 Q 150,50 300,180 T 600,100", duration: 7, delay: 0 },
        { d: "M 0,300 Q 200,400 400,250 T 800,350", duration: 9, delay: 2 },
      ]
    : [
        { d: "M -50,120 Q 200,40 450,180 T 950,100 T 1450,220", duration: 8, delay: 0 },
        { d: "M 100,320 Q 400,420 750,260 T 1300,380 T 1800,240", duration: 10, delay: 1.5 },
        { d: "M -100,500 Q 300,380 650,520 T 1200,440 T 1700,560", duration: 12, delay: 3 },
        { d: "M 200,700 Q 550,600 900,740 T 1500,680", duration: 9, delay: 0.8 },
      ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-15 dark:opacity-20 transition-opacity duration-300">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="streamGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {paths.map((p, idx) => (
          <g key={idx}>
            {/* Faint stream connection line */}
            <path
              d={p.d}
              fill="none"
              stroke="url(#streamGradientDark)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              className="opacity-40"
            />
            
            {/* Animated data packet traveling along path */}
            <motion.circle
              r="3.5"
              fill="#22d3ee"
              className="drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
              }}
              style={{
                offsetPath: `path("${p.d}")`,
              }}
            />

            {/* Secondary trail packet */}
            <motion.circle
              r="2"
              fill="#60a5fa"
              className="opacity-70"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay + 0.4,
              }}
              style={{
                offsetPath: `path("${p.d}")`,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

