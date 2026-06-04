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
    <section className="pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headshot - Left (with frame) */}
          <motion.div variants={imageVariants} className="flex items-center justify-center order-2 md:order-1">
            <div className="w-full max-w-md bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/images/profile/headshot.avif"
                alt="Jayden Hanly"
                width={400}
                height={533}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text - Right */}
          <div className="space-y-8 order-1 md:order-2">
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

            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
