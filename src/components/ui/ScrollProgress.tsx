'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A thin progress bar fixed to the top of the viewport that fills as the user
 * scrolls through the page — a lightweight cue for a long-form scroll story.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-16 z-50 h-1 w-full origin-left bg-black"
      aria-hidden="true"
    />
  );
}
