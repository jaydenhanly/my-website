'use client';

import Table from './ui/Table';

export default function ExperienceSection() {
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

  const columns = [
    { key: 'year', label: 'Year' },
    { key: 'company', label: 'Company' },
    { key: 'role', label: 'Position' },
  ];

  return (
    <section id="experience" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">Experience</h2>
        <Table title="Work History" columns={columns} rows={experiences} />
      </div>
    </section>
  );
}
