import { useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// All keyboard-focusable elements
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  // Body scroll lock + focus management
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Save scroll position and lock body on iOS/Android
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll'; // keep scrollbar width stable

      // Move focus to first focusable element
      const timer = setTimeout(() => {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
        focusable?.[0]?.focus();
      }, 50);

      return () => clearTimeout(timer);
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  // Escape key + focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — z-50, behind modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal container — z-51, above backdrop */}
          <div
            className="fixed inset-0 z-[51] flex items-center justify-center p-4 md:p-8 lg:p-16"
            aria-hidden="false"
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-h-[92dvh] max-w-4xl rounded-2xl
                bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10
                flex flex-col overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Sticky close button ── always visible above all content */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-20 flex items-center justify-center
                  w-11 h-11 rounded-full
                  bg-gray-100/90 dark:bg-surface-dark/90 backdrop-blur-sm
                  hover:bg-gray-200 dark:hover:bg-surface-dark-hover
                  border border-gray-200/50 dark:border-white/10
                  transition-colors
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* ── Scrollable content ── */}
              <div className="flex-1 overflow-y-auto overscroll-contain">

                {/* Hero image / gradient */}
                <div className={`relative bg-gradient-to-br ${project.gradient}`}>
                  {project.image ? (
                    <div className="relative w-full bg-black/20">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-auto block"
                        style={{ maxHeight: '55vh', objectFit: 'contain' }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    // Fallback: gradient + emoji when no image
                    <div className="flex items-center justify-center h-48 md:h-64">
                      <span className="text-7xl md:text-8xl" aria-hidden="true">{project.icon}</span>
                    </div>
                  )}

                  {/* Overlay with title — sits on top of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-10 pointer-events-none">
                    <span className="text-4xl sm:text-5xl mb-3 block" aria-hidden="true">{project.icon}</span>
                    <h2 id={titleId} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg mt-1">{project.subtitle}</p>
                  </div>
                </div>

                {/* Content sections */}
                <div className="p-5 sm:p-8 md:p-10 space-y-8">

                  <section aria-labelledby="modal-overview">
                    <h3 id="modal-overview" className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true" />
                      Overview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.overview}</p>
                  </section>

                  <section aria-labelledby="modal-challenge">
                    <h3 id="modal-challenge" className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-orange-500 rounded-full" aria-hidden="true" />
                      The Challenge
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
                  </section>

                  <section aria-labelledby="modal-solution">
                    <h3 id="modal-solution" className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-emerald-500 rounded-full" aria-hidden="true" />
                      The Solution
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
                  </section>

                  <section aria-labelledby="modal-tech">
                    <h3 id="modal-tech" className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-accent rounded-full" aria-hidden="true" />
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium
                            bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section aria-labelledby="modal-features">
                    <h3 id="modal-features" className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-cyan-500 rounded-full" aria-hidden="true" />
                      Key Features
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section aria-labelledby="modal-outcome">
                    <h3 id="modal-outcome" className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-6 bg-yellow-500 rounded-full" aria-hidden="true" />
                      Outcome
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.outcome}</p>
                  </section>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                        bg-gray-900 dark:bg-white text-white dark:text-gray-900
                        hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <FiGithub className="w-4 h-4" aria-hidden="true" />
                      View Source Code
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                          border-2 border-primary text-primary
                          hover:bg-primary/10 transition-colors
                          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
