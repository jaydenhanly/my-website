import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import ImageLightbox from '@/components/ui/ImageLightbox';
import Reveal from '@/components/ui/Reveal';
import ScrollProgress from '@/components/ui/ScrollProgress';
import StoryCaseStudies from '@/components/StoryCaseStudies';

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
      {project.storytelling && <ScrollProgress />}

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
          {project.storytelling ? (
            <section className="flex min-h-screen flex-col justify-center">
              <Reveal distance={70} scale={0.96} duration={0.9}>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video">
                  <Image
                    src={projectImageMap[project.id]}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </section>
          ) : (
            <div className="my-12 rounded-lg overflow-hidden bg-gray-100 aspect-video">
              <Image
                src={projectImageMap[project.id]}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-sm max-w-none">
            {/* Summary */}
            {project.storytelling ? (
              <section className="flex min-h-screen flex-col justify-center">
                <Reveal distance={60} duration={0.8}>
                  <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Overview</p>
                  <p className="max-w-3xl text-3xl md:text-4xl font-medium text-black leading-snug">
                    {project.summary}
                  </p>
                </Reveal>
              </section>
            ) : (
              <section className="mb-12 py-12 border-y border-gray-200">
                <h2 className="text-3xl font-bold text-black mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.summary}
                </p>
              </section>
            )}

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

            {/* Case Studies — immersive scroll story */}
            {project.caseStudies && project.caseStudies.length > 0 && project.storytelling && (
              <StoryCaseStudies studies={project.caseStudies} />
            )}

            {/* Case Studies — standard layout */}
            {project.caseStudies && project.caseStudies.length > 0 && !project.storytelling && (
              <div className="space-y-16">
                {project.caseStudies.map((study, i) => (
                  <section key={i}>
                    <h2 className="text-3xl font-bold text-black mb-6">{study.title}</h2>

                    {study.body?.map((paragraph, j) => (
                      <p key={j} className="text-base text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}

                    {study.points && study.points.length > 0 && (
                      <ol className="my-6 space-y-3">
                        {study.points.map((point, j) => (
                          <li key={j} className="text-base text-gray-700 flex items-start gap-3">
                            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                              {j + 1}
                            </span>
                            <span className="pt-0.5">{point}</span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {study.lists && study.lists.length > 0 && (
                      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {study.lists.map((list, j) => (
                          <div key={j}>
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">{list.heading}</h3>
                            <ul className="space-y-2">
                              {list.items.map((item, k) => (
                                <li key={k} className="text-base text-gray-700 flex items-start gap-3">
                                  <span className="text-black font-bold mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {study.problem && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Problem</h3>
                        <p className="text-base text-gray-700 leading-relaxed">{study.problem}</p>
                      </div>
                    )}

                    {study.solution && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Solution</h3>
                        <p className="text-base text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                    )}

                    {study.images && study.images.length > 0 && (
                      <div className="my-8 space-y-6">
                        {study.images.length === 1 ? (
                          <ImageLightbox image={study.images[0]} />
                        ) : (
                          <>
                            {/* Odd count: lead with a full-width hero image */}
                            {study.images.length % 2 === 1 && <ImageLightbox image={study.images[0]} />}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {(study.images.length % 2 === 1 ? study.images.slice(1) : study.images).map((img, j) => (
                                <ImageLightbox key={j} image={img} />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {study.resultsText && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Results</h3>
                        <p className="text-base text-gray-700 leading-relaxed">{study.resultsText}</p>
                      </div>
                    )}

                    {study.metrics && study.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {study.metrics.map((metric, j) => (
                          <div key={j} className="bg-gray-100 rounded-xl px-6 py-8 text-center">
                            <p className="text-4xl font-bold text-black mb-1">{metric.value}</p>
                            <p className="text-sm text-gray-600">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>
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
