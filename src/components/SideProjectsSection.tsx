'use client';

import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { sideProjects, type SideProject } from '@/lib/projects';
import { useInView } from '@/hooks/useInView';

export default function SideProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="side-projects" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">Side Projects</h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {sideProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <SideProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SideProjectCard({ project }: { project: SideProject }) {
  const card = (
    <div className="group h-full rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
      {/* Placeholder cover — branded gradient with the project initial */}
      <div className="w-full aspect-video bg-gradient-to-br from-[#C7D0FF] to-[#5c86ff] flex items-center justify-center overflow-hidden">
        <span className="text-6xl font-bold text-white/90 transition-transform duration-400 group-hover:scale-105">
          {project.name.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-black mb-1 line-clamp-2">
            {project.name}
          </h3>
          <p className="text-xs text-gray-500">{project.tagline}</p>
        </div>

        <div className="mb-4 flex-grow">
          <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.url) {
    return (
      <Link href={project.url} className="cursor-pointer">
        {card}
      </Link>
    );
  }

  return card;
}
