'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';

const HEADSHOTS = [
  '/images/profile/headshot-1.png',
  '/images/profile/headshot-2.png',
  '/images/profile/headshot-3.png',
];

/**
 * Cycles through the black-and-white, background-removed headshots with a slow
 * cross-fade, advancing once every two seconds. Holds on the first image when
 * the user prefers reduced motion.
 */
export default function CyclingHeadshot() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HEADSHOTS.length);
    }, 2000);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div className="relative aspect-[3/4] w-full">
      {HEADSHOTS.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Jayden Hanly"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
