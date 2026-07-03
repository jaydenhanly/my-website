'use client';

import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.8,
        ease: easeOut,
        delay: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section className="px-8 pt-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="grid grid-cols-1 items-end gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text - Right */}
          <div className="order-2 space-y-8 pb-24 md:order-2">
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight">
                Product designer.
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                I help teams build products grounded in great collaboration across stakeholders, developers, and the wider organization. 15 years of experience in product development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Get in touch
              </a>
              <a
                href="/resume.pdf"
                download="Jayden_Hanly_Resume.pdf"
                className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Download resume
              </a>
            </motion.div>
          </div>

          {/* Headshot - Left (free-floating cutout, anchored to bottom) */}
          <motion.div variants={imageVariants} className="order-1 flex justify-center self-end md:order-1 md:justify-start">
            <Image
              src="/images/profile/hero-headshot.png"
              alt="Jayden Hanly"
              width={888}
              height={1005}
              priority
              className="h-auto w-full max-w-[55.5rem] object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
