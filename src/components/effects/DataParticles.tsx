'use client';

import React, { useMemo, useCallback } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import { useTheme } from 'next-themes';
import { useReducedMotion } from 'framer-motion';
import { getParticlesConfig } from '@/lib/particlesConfig';

export const DataParticles: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const isDark = resolvedTheme === 'dark';
  const isReducedMotion = !!shouldReduceMotion;

  const options = useMemo(() => {
    return getParticlesConfig(isDark, isReducedMotion);
  }, [isDark, isReducedMotion]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <ParticlesProvider init={particlesInit}>
        <Particles
          id="tsparticles-hero"
          options={options}
          className="w-full h-full pointer-events-none"
        />
      </ParticlesProvider>
    </div>
  );
};

