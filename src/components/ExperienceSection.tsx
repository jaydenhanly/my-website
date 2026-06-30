'use client';

import Table from './ui/Table';
import { BriefcaseIcon } from '@/components/ui/SectionIcons';

export default function ExperienceSection() {
  const experiences = [
    {
      year: '2024',
      company: '3Shape',
      role: 'Senior UX Designer / Team Lead',
      description:
        'As interim team lead, I strengthened design operations across marketing, eCommerce and in-product experiences, delivering the first design roadmap synchronised with multiple development teams. I led an after-sales redesign that lifted 7-day retention 32.5%, and a homepage that grew engagement 400%, while mentoring designers and championing UX culture company-wide.',
    },
    {
      year: '2022',
      company: 'Skybox Technologies',
      role: 'Senior Product Designer / Team Lead',
      description:
        'Brought in as the first design hire, I built and scaled the team to three. I established our ways of working, ran sprints and built a design system from scratch, while contributing to product and project management, an internal documentation portal, and a healthy team culture that carried us from concept to launch.',
    },
    {
      year: '2019',
      company: 'CPHUX',
      role: 'Cofounder and Product Lead',
      description:
        'As co-founder I wore many hats — developing our core business model, owning the prioritised backlog, and managing contributors with Scrum. I researched, prototyped and tested our job-matching platform from concept to launch, then led sales and customer success, growing the CPHUX job board into the community’s primary revenue source.',
    },
    {
      year: '2018',
      company: 'Self-employed',
      role: 'Product Designer Consultant',
      description:
        'Working independently as jaydenhanly.com, I led the design approach and information architecture for a shift-work scheduling app from the ground up. I also redesigned the UI of an educational app, collaborating closely with in-house development teams to ship polished, user-centred experiences across a range of client products.',
    },
    {
      year: '2016',
      company: '3P Learning',
      role: 'Digital Producer / Content Editor',
      description:
        'I coordinated in-house and off-site teams to take a product from ideation and prototyping through to production and release, proudly launching Numbeanies: Number Forest on iOS. I ran quarterly user testing with teachers, parents and kids, applying a broad mix of production management, game design, UI design and Unity development.',
    },
    {
      year: '2015',
      company: 'IntoScience',
      role: 'UX Designer',
      description:
        'I practiced hands-on UX research — running user testing sessions, interviews and school visits — and documented information architecture, competitor analysis and user personas to sharpen both product design and marketing messaging. I also founded and ran the internal ‘UX Guild’, facilitating design reviews and upskilling colleagues across the team.',
    },
    {
      year: '2011',
      company: 'IntoScience',
      role: 'Content Designer',
      description:
        'I designed and built interactive content that taught science to early-secondary students, living in Unity to lay out UI, animate assets and craft educational games. Over the years I refined QA techniques and unified workflows across art, code, design and stakeholders. As a Certified ScrumMaster, I also facilitated workshops and retrospectives.',
    },
  ];

  const columns = [
    { key: 'year', label: 'Year' },
    { key: 'company', label: 'Company' },
    { key: 'role', label: 'Position' },
  ];

  return (
    <section id="experience" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 flex items-center gap-3">
          <BriefcaseIcon className="h-8 w-8 flex-none" />
          Experience
        </h2>
        <Table columns={columns} rows={experiences} />
      </div>
    </section>
  );
}
