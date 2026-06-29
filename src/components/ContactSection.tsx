'use client';

import { FormEvent, useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { PlaneIcon } from '@/components/ui/SectionIcons';

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="contact" className="py-24 px-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 flex items-center gap-3">
          <PlaneIcon className="h-8 w-8 flex-none" />
          Get in touch
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Contact info */}
          <div>
            <p className="text-lg text-gray-700 mb-8">
              I&apos;m always open to interesting projects and collaboration opportunities.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a
                  href="mailto:jmhanly@gmail.com"
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                >
                  jmhanly@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/jaydenhanly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                >
                  linkedin.com/in/jaydenhanly
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-0 py-2 border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-0 py-2 border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-0 py-2 border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors"
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-600 mt-4">Message sent! I&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
