'use client';

import { motion, easeOut } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { SmileyIcon } from '@/components/ui/SectionIcons';

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 flex items-center gap-3">
          <SmileyIcon className="h-8 w-8 flex-none" />
          About
        </h2>

        <motion.div
          ref={ref}
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            I&apos;m driven by the intersection of great design and great collaboration. In an era defined by speed, it&apos;s easy to prioritize velocity over substance. But meaningful impact requires something more.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Throughout my career, I&apos;ve learned that the best products emerge when designers, developers, and stakeholders work as a unified team. I&apos;ve led teams, built design systems, and shaped strategy—always with collaboration at the core.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Currently, I&apos;m a Senior UX Designer and Team Lead at 3Shape, where I work on dental technology that impacts millions of patients worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
