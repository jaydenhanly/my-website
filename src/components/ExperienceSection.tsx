'use client';

import { motion, easeOut } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInView<HTMLTableSectionElement>();

  const experiences = [
    {
      year: '2024',
      company: '3Shape',
      role: 'Senior UX Designer / Team Lead',
    },
    {
      year: '2022',
      company: 'Skybox Technologies',
      role: 'Senior Product Designer / Team Lead',
    },
    {
      year: '2019',
      company: 'CPHUX',
      role: 'Cofounder and Product Lead',
    },
    {
      year: '2018',
      company: 'Self-employed',
      role: 'Product Designer Consultant',
    },
    {
      year: '2016',
      company: '3P Learning',
      role: 'Digital Producer / Content Editor',
    },
    {
      year: '2015',
      company: 'IntoScience',
      role: 'UX Designer',
    },
    {
      year: '2011',
      company: 'IntoScience',
      role: 'Content Designer',
    },
  ];

  const rowVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -16 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.4,
        ease: easeOut,
        delay: prefersReducedMotion ? 0 : index * 0.05,
      },
    }),
  };

  return (
    <section id="experience" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">Experience</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-700 bg-gray-50">Year</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-700 bg-gray-50">Company</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-700 bg-gray-50">Position</th>
              </tr>
            </thead>
            <tbody ref={ref}>
              {experiences.map((exp, index) => (
                <motion.tr
                  key={index}
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="border-b border-gray-100 hover:bg-gray-100 transition-colors group relative"
                >
                  <td className="py-4 px-4">
                    <p className="text-sm font-semibold text-gray-900">{exp.year}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm font-medium text-gray-900">{exp.company}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{exp.role}</p>
                  </td>
                  <td className="absolute left-0 top-0 h-full w-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
