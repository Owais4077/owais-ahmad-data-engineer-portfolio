'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 shrink-0 ${className}`} />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? 'light' : 'dark';

    // View Transitions API Radial Expansion
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const rect = buttonRef.current?.getBoundingClientRect() || {
        left: e.clientX,
        top: e.clientY,
        width: 0,
        height: 0,
      };
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: 'ease-in-out',
            pseudoElement: isDark
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
          }
        );
      });
    } else {
      // Graceful Fallback
      setTheme(nextTheme);
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleToggle}
      className={`w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 shrink-0 group ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        {/* Sun Icon */}
        <Sun
          className={`w-4 h-4 text-amber-500 dark:text-amber-400 absolute transition-all duration-300 ease-out transform ${
            isDark
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`w-4 h-4 text-slate-700 dark:text-slate-300 absolute transition-all duration-300 ease-out transform ${
            isDark
              ? 'opacity-0 rotate-90 scale-75'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
      </div>
    </button>
  );
};
