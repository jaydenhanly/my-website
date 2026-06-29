'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const COLORS = ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#5c86ff', '#9B5DE5', '#F15BB5', '#5cffa1'];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  g: number;
  drag: number;
  w: number;
  h: number;
  rot: number;
  vr: number;
  color: string;
  round: boolean;
  life: number;
  decay: number;
}

/**
 * A burst of coloured confetti rendered onto a fixed, full-viewport canvas
 * overlay (pointer-events: none). Fires once when the element reaches the
 * middle of the viewport, emanating from the centre of its (relatively
 * positioned) parent and falling with gravity. When `interactive` is set the
 * overlay is clickable to re-fire. No-ops when the user prefers reduced motion.
 */
export default function Confetti({ count = 90, interactive = false }: { count?: number; interactive?: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const anchorRef = useRef<HTMLButtonElement>(null);
  const fired = useRef(false);
  const burstsRef = useRef<Set<() => void>>(new Set());

  const fire = useCallback(() => {
    if (prefersReducedMotion) return;
    const anchor = anchorRef.current;
    if (!anchor) return;

    const rect = anchor.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
      position: 'fixed',
      left: '0',
      top: '0',
      width: '100%',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: '60',
    });
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      canvas.remove();
      return;
    }

    const viewW = window.innerWidth;
    const viewH = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = viewW * dpr;
    canvas.height = viewH * dpr;
    ctx.scale(dpr, dpr);

    let raf: number | null = null;
    const cleanup = () => {
      if (raf) cancelAnimationFrame(raf);
      canvas.remove();
      burstsRef.current.delete(cleanup);
    };
    burstsRef.current.add(cleanup);

    const particles: Particle[] = Array.from({ length: count }, () => {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.3; // upward fan
      const speed = 6 + Math.random() * 9;
      return {
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 3,
        vy: Math.sin(angle) * speed,
        g: 0.18 + Math.random() * 0.12,
        drag: 0.985,
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        round: Math.random() > 0.7,
        life: 1,
        decay: 0.005 + Math.random() * 0.006,
      };
    });

    const frame = () => {
      ctx.clearRect(0, 0, viewW, viewH);
      let alive = false;

      for (const p of particles) {
        if (p.life <= 0) continue;
        p.vy += p.g;
        p.vx *= p.drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= p.decay;
        if (p.life > 0 && p.y < viewH + 40) alive = true;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.round) {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      }

      if (alive) {
        raf = requestAnimationFrame(frame);
      } else {
        cleanup();
      }
    };

    raf = requestAnimationFrame(frame);
  }, [count, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const anchor = anchorRef.current;
    if (!anchor) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            fire();
            observer.disconnect();
          }
        }
      },
      // Collapse the root to a line at the vertical centre so the burst fires
      // only once the element reaches the middle of the viewport.
      { threshold: 0, rootMargin: '-50% 0px -50% 0px' },
    );

    observer.observe(anchor);

    const bursts = burstsRef.current;
    return () => {
      observer.disconnect();
      bursts.forEach((c) => c());
    };
  }, [fire, prefersReducedMotion]);

  return (
    <button
      ref={anchorRef}
      type="button"
      onClick={interactive ? fire : undefined}
      aria-hidden={interactive ? undefined : true}
      aria-label={interactive ? 'Celebrate this result' : undefined}
      tabIndex={interactive ? 0 : -1}
      className={`absolute inset-0 bg-transparent ${interactive ? 'cursor-pointer' : 'pointer-events-none'}`}
    />
  );
}
