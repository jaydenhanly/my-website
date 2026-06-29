'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { AnimatePresence, motion, easeOut, useReducedMotion } from 'framer-motion';
import type { CaseStudyImage } from '@/lib/projects';

export default function ImageLightbox({
  image,
  showCaption = true,
}: {
  image: CaseStudyImage;
  showCaption?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(false), []);

  // Escape to close, lock body scroll, and move focus into/out of the dialog.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open, close]);

  const overlayDuration = prefersReducedMotion ? 0 : 0.2;
  const contentScale = prefersReducedMotion ? 1 : 0.96;

  return (
    <figure className="m-0">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View larger image: ${image.alt}`}
        className="group relative block w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        {/* Hover affordance — darken slightly and reveal a "View" pill */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
          <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-gray-900 opacity-0 translate-y-1 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 8v6M8 11h6M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />
            </svg>
            View
          </span>
        </span>
      </button>

      {showCaption && image.caption && (
        <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">{image.caption}</figcaption>
      )}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={image.alt}
                onClick={close}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: overlayDuration, ease: easeOut }}
                className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
              >
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close image"
                  className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <motion.figure
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: contentScale }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: contentScale }}
                  transition={{ duration: overlayDuration, ease: easeOut }}
                  className="m-0 flex max-h-full max-w-5xl flex-col items-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={1067}
                    className="h-auto w-auto max-h-[85vh] max-w-full rounded-lg object-contain"
                  />
                  {image.caption && (
                    <figcaption className="mt-4 max-w-2xl text-center text-sm text-gray-300 leading-relaxed">
                      {image.caption}
                    </figcaption>
                  )}
                </motion.figure>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </figure>
  );
}
