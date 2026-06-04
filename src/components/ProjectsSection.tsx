import { projects } from '@/lib/projects';

function formatDateRange(start: string, end: string): string {
  const startMonth = new Date(start + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const endMonth = new Date(end + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `${startMonth} — ${endMonth}`;
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">Projects</h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="pb-12 border-b border-gray-100 last:border-b-0">
              {/* Project Title & Company */}
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {project.company} • {formatDateRange(project.startDate, project.endDate)}
                </p>
              </div>

              {/* Role & Description */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {project.role}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
