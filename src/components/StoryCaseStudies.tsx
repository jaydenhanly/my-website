'use client';

import type { ReactNode } from 'react';
import type { CaseStudyImage, CaseStudySection } from '@/lib/projects';
import ImageLightbox from './ui/ImageLightbox';
import Reveal from './ui/Reveal';
import Confetti from './ui/Confetti';

/** A full-viewport stage that vertically centres a single content piece. */
function Scene({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={`flex min-h-[50vh] flex-col justify-center py-10 ${className ?? ''}`}>
      {children}
    </section>
  );
}

/** A caption with more than two words is treated as prose worth pairing. */
function hasPairableText(image: CaseStudyImage): boolean {
  return !!image.caption && image.caption.trim().split(/\s+/).length > 2;
}

/**
 * One full-screen stage per image. Images with a descriptive caption are paired
 * side-by-side with that text (alternating sides for rhythm); short labels
 * (Before/After/Mockup…) stay centred beneath the image.
 */
function ImageScene({
  image,
  index,
  celebrate = false,
}: {
  image: CaseStudyImage;
  index: number;
  celebrate?: boolean;
}) {
  const content = !hasPairableText(image) ? (
    <Reveal distance={80} scale={0.94} duration={0.9} className="w-full">
      <div className="mx-auto max-h-[82vh] w-full overflow-hidden">
        <ImageLightbox image={image} />
      </div>
    </Reveal>
  ) : (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <Reveal distance={70} scale={0.96} duration={0.9} className={index % 2 === 1 ? 'md:order-2' : ''}>
        <ImageLightbox image={image} showCaption={false} />
      </Reveal>
      <Reveal distance={50} delay={0.1} className={index % 2 === 1 ? 'md:order-1' : ''}>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">{image.caption}</p>
      </Reveal>
    </div>
  );

  return (
    <Scene className={celebrate ? 'relative' : undefined}>
      {celebrate && <Confetti count={90} />}
      {content}
    </Scene>
  );
}

export default function StoryCaseStudies({
  studies,
  celebrateFinalImage = false,
}: {
  studies: CaseStudySection[];
  celebrateFinalImage?: boolean;
}) {
  // Prefer an explicit finale block for the celebration; otherwise fall back to
  // the project's very last image.
  let finaleBlockIdx = -1;
  if (celebrateFinalImage) {
    for (let k = studies.length - 1; k >= 0; k--) {
      if (studies[k].finale) {
        finaleBlockIdx = k;
        break;
      }
    }
  }

  const studiesWithImages = studies
    .map((study, idx) => ({ idx, count: study.images?.length ?? 0 }))
    .filter((s) => s.count > 0);
  const finale =
    celebrateFinalImage && finaleBlockIdx === -1 && studiesWithImages.length > 0
      ? studiesWithImages[studiesWithImages.length - 1]
      : null;

  return (
    <div>
      {studies.map((study, i) => (
        <div key={i}>
          {/* Chapter intro — number, title, and the framing narrative */}
          <Scene>
            <Reveal distance={70} duration={0.8}>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-black">
                {study.title}
              </h2>
            </Reveal>

            {study.body?.map((paragraph, j) => (
              <Reveal key={j} delay={0.1 + j * 0.05} distance={50} className="mt-8 max-w-2xl">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}

            {study.problem && (
              <Reveal delay={0.15} distance={50} className="mt-10 max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Problem</p>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">{study.problem}</p>
              </Reveal>
            )}
          </Scene>

          {study.solution && (
            <Scene>
              <Reveal distance={60} duration={0.8} className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Solution</p>
                <p className="text-2xl md:text-3xl text-black leading-snug">{study.solution}</p>
              </Reveal>
            </Scene>
          )}

          {study.points && study.points.length > 0 && (
            <Scene>
              <ol className="space-y-8">
                {study.points.map((point, j) => (
                  <Reveal key={j} delay={j * 0.1} distance={50}>
                    <li className="flex items-start gap-6">
                      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gray-900 text-lg font-semibold text-white">
                        {j + 1}
                      </span>
                      <span className="pt-1 text-2xl md:text-3xl text-black leading-snug">{point}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </Scene>
          )}

          {study.lists && study.lists.length > 0 && (
            <Scene>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {study.lists.map((list, j) => (
                  <Reveal key={j} delay={j * 0.1} distance={50}>
                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">{list.heading}</h3>
                    <ul className="space-y-4">
                      {list.items.map((item, k) => (
                        <li key={k} className="flex items-start gap-3 text-lg md:text-xl text-gray-700 leading-relaxed">
                          <span className="mt-1 font-bold text-black">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </Scene>
          )}

          {/* One full-screen stage per image, paired with its text where possible */}
          {study.images?.map((img, j) => (
            <ImageScene
              key={j}
              image={img}
              index={j}
              celebrate={!!finale && finale.idx === i && j === finale.count - 1}
            />
          ))}

          {/* Celebratory finale — a line of text over two side-by-side images */}
          {study.finale && (
            <Scene className="relative">
              {finaleBlockIdx === i && <Confetti count={120} />}
              {study.finale.text && (
                <Reveal distance={50} duration={0.8} className="mx-auto max-w-3xl text-center">
                  <p className="text-3xl md:text-4xl font-medium text-black leading-snug">
                    {study.finale.text}
                  </p>
                </Reveal>
              )}
              <div className="mt-12 grid grid-cols-2 items-start gap-4 sm:gap-8 md:gap-12">
                {study.finale.images.map((img, j) => (
                  <Reveal key={j} delay={0.1 + j * 0.1} distance={70} scale={0.96} duration={0.9}>
                    <ImageLightbox image={img} />
                  </Reveal>
                ))}
              </div>
            </Scene>
          )}

          {/* Outcome — results narrative and headline metrics */}
          {(study.resultsText || (study.metrics && study.metrics.length > 0)) && (
            <Scene>
              {study.resultsText && (
                <Reveal distance={60} className="max-w-2xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Results</p>
                  <p className="text-2xl md:text-3xl text-black leading-snug">{study.resultsText}</p>
                </Reveal>
              )}

              {study.metrics && study.metrics.length > 0 && (
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {study.metrics.map((metric, j) => (
                    <Reveal key={j} delay={j * 0.15} distance={40} scale={0.8} duration={0.9}>
                      <div className="relative text-center">
                        <Confetti count={55} interactive />
                        <p className="text-7xl md:text-8xl font-bold tracking-tighter text-black">{metric.value}</p>
                        <p className="mt-4 text-base uppercase tracking-wide text-gray-500">{metric.label}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
            </Scene>
          )}
        </div>
      ))}
    </div>
  );
}
