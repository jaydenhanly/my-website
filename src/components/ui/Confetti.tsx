'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const COLORS = ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#577590', '#9B5DE5', '#F15BB5'];

interface Piece {
  id: number;
  dx: number;
  peak: number;
  fall: number;
  rotate: number;
  duration: number;
  delay: number;
  color: string;
  width: number;
  height: number;
  round: boolean;
}

function makePieces(count: number): Piece[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    dx: (Math.random() * 2 - 1) * 280,
    peak: -(70 + Math.random() * 170),
    fall: 160 + Math.random() * 280,
    rotate: (Math.random() * 2 - 1) * 600,
    duration: 1.5 + Math.random() * 1.3,
    delay: Math.random() * 0.15,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    width: 6 + Math.random() * 5,
    height: 9 + Math.random() * 7,
    round: Math.random() > 0.7,
  }));
}

/**
 * A burst of coloured confetti that fires once, the first time it scrolls into
 * view, emanating from the centre of its (relatively positioned) parent.
 * No-ops when the user prefers reduced motion.
 */
export default function Confetti({ count = 48 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            setPieces(makePieces(count));
            observer.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, prefersReducedMotion]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible">
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: piece.dx, y: [0, piece.peak, piece.fall], opacity: [1, 1, 0], rotate: piece.rotate }}
          transition={{ duration: piece.duration, delay: piece.delay, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '45%',
            width: piece.width,
            height: piece.height,
            backgroundColor: piece.color,
            borderRadius: piece.round ? '9999px' : '2px',
          }}
        />
      ))}
    </div>
  );
}
