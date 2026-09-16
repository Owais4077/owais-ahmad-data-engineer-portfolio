'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  id?: string;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion || direction === 'none') return { opacity: 1, x: 0, y: 0, scale: 1 };
    switch (direction) {
      case 'left': return { opacity: 0, x: -30, y: 0, scale: 1 };
      case 'right': return { opacity: 0, x: 30, y: 0, scale: 1 };
      case 'down': return { opacity: 0, x: 0, y: -20, scale: 1 };
      case 'scale': return { opacity: 0, x: 0, y: 0, scale: 0.96 };
      case 'up':
      default: return { opacity: 0, x: 0, y: 24, scale: 1 };
    }
  };

  const variant = {
    hidden: getInitialPosition(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
};
