import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden rounded-2xl
              bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full
                bg-gray-100 dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-surface-dark-hover
                transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="h-full overflow-y-auto">
              {/* Hero visual */}
              <div className={`relative h-48 md:h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <span className="text-5xl mb-3 block">{project.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
                  <p className="text-white/80 text-lg mt-1">{project.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 space-y-10">
                {/* Overview */}
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.overview}</p>
                </section>

                {/* Challenge */}
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-orange-500 rounded-full" />
                    The Challenge
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
                </section>

                {/* Solution */}
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-emerald-500 rounded-full" />
                    The Solution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
                </section>

                {/* Technologies */}
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full" />
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

                {/* Key Features */}
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-cyan-500 rounded-full" />
                    Key Features
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Outcome */}
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-yellow-500 rounded-full" />
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
                      hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Source Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                        border-2 border-primary text-primary
                        hover:bg-primary/10 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
