import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';

const projectImageMap: Record<string, string> = {
  '3shape-2024': '/images/projects/3shape-2024-cover.jpg',
  'skybox-2022': '/images/projects/skybox-2022-cover.jpg',
  'cphux-2019': '/images/projects/cphux-2019-cover.jpg',
  '3p-learning-2016': '/images/projects/3p-learning-2016-cover.jpg',
};

interface ProjectPageProps {
  params: {
    id: string;
  };
}

function formatDateRange(start: string, end: string): string {
  const startMonth = new Date(start + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const endMonth = new Date(end + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  return `${startMonth} — ${endMonth}`;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);
  return {
    title: `${project?.title} – Jayden`,
    description: project?.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Project not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between h-16">
          <Link
            href="/#projects"
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Content */}
      <article className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-12">
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-500 mb-2">
                {project.company} • {formatDateRange(project.startDate, project.endDate)}
              </p>
              <h1 className="text-5xl font-bold text-black mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                {project.description}
              </p>
              <p className="text-sm font-medium text-gray-600">
                {project.role}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
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

          {/* Project Cover Image */}
          <div className="my-12 rounded-lg overflow-hidden bg-gray-100 aspect-video">
            <Image
              src={projectImageMap[project.id]}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-sm max-w-none">
            {/* Summary */}
            <section className="mb-12 py-12 border-y border-gray-200">
              <h2 className="text-3xl font-bold text-black mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.summary}
              </p>
            </section>

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-6">Results</h2>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="text-base text-gray-700 flex items-start gap-3">
                      <span className="text-black font-bold mt-0.5">→</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-black mb-6">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-base text-gray-700 flex items-start gap-3">
                      <span className="text-black font-bold mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <Link
              href="/#projects"
              className="inline-block px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
