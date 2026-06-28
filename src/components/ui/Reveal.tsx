'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in seconds for sequencing sibling reveals. */
  delay?: number;
  /** Upward travel distance in px before settling. */
  distance?: number;
  /** Initial scale before settling (1 = no scale). */
  scale?: number;
  /** Entrance duration in seconds. */
  duration?: number;
  className?: string;
}

/**
 * Reveals its children with a fade + upward translate (and optional scale) the
 * first time they scroll into view. Uses transform/opacity only and collapses
 * to a quick fade when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  distance = 24,
  scale = 1,
  duration = 0.6,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : distance,
      scale: prefersReducedMotion ? 1 : scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.2 : duration,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReducedMotion ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
