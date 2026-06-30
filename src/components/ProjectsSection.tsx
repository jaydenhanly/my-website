'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { projects } from '@/lib/projects';
import { useInView } from '@/hooks/useInView';
import { FolderIcon } from '@/components/ui/SectionIcons';

function formatDateRange(start: string, end: string): string {
  const startMonth = new Date(start + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const endMonth = new Date(end + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `${startMonth} — ${endMonth}`;
}

const projectImageMap: Record<string, string> = {
  '3shape-2024': '/images/projects/3shape-2024-cover.jpg',
  'skybox-2022': '/images/projects/skybox-2022-cover.jpg',
  'cphux-2019': '/images/projects/cphux-2019-cover.jpg',
  '3p-learning-2016': '/images/projects/3p-learning-2016-cover.jpg',
};

export default function ProjectsSection() {
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
    <section id="projects" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 flex items-center gap-3">
          <FolderIcon className="h-8 w-8 flex-none" />
          Projects
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.filter((project) => !project.sideProject).map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/projects/${project.id}`}>
                <div className="group h-full rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
                  {/* Project Cover Image */}
                  <div className="w-full aspect-video bg-gray-100 overflow-hidden">
                    <Image
                      src={projectImageMap[project.id]}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Project Title & Company */}
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-black mb-1 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {project.company} • {formatDateRange(project.startDate, project.endDate)}
                      </p>
                    </div>

                    {/* Role & Description */}
                    <div className="mb-4 flex-grow">
                      <p className="text-xs font-medium text-gray-700 mb-1">
                        {project.role}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="inline-block px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Read More Link */}
                    <p className="text-xs font-medium text-gray-900 group-hover:text-black transition-colors">
                      Read more <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
