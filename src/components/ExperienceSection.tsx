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

  return (
    <section id="experience" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-8">
              <div className="w-20 flex-shrink-0">
                <p className="text-sm font-medium text-gray-500">{exp.year}</p>
              </div>
              <div className="flex-grow pb-8 border-b border-gray-100">
                <h3 className="text-lg font-medium text-black">{exp.company}</h3>
                <p className="text-sm text-gray-600 mt-1">{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
