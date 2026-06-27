import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import ProjectModal from '../ui/ProjectModal';
import { projects, type Project } from '../../data/projects';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <section id="projects" className="section-padding relative">
      <div
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[128px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-container relative z-10">
        <SectionHeading
          label="Featured Projects"
          title="Real Problems, Real Solutions"
          subtitle="Each project tells a story — from identifying the challenge to building the solution. Click to explore the full case study."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              custom={i}
              className="group relative"
            >
              <div
                onClick={() => openProject(project)}
                className="relative overflow-hidden rounded-2xl cursor-pointer
                  bg-white dark:bg-surface-dark
                  border border-gray-200/50 dark:border-white/5
                  hover:border-primary/30 dark:hover:border-primary/20
                  transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                role="button"
                tabIndex={0}
                aria-label={`View case study for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProject(project);
                  }
                }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Project visual */}
                  <div
                    className={`relative lg:w-2/5 h-56 lg:h-auto bg-gradient-to-br ${project.gradient}
                      flex items-center justify-center overflow-hidden`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width={640}
                        height={360}
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" aria-hidden="true" />

                        {/* Decorative grid */}
                        <div className="absolute inset-0 opacity-20" aria-hidden="true">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                            backgroundSize: '30px 30px',
                          }} />
                        </div>

                        <motion.span
                          className="relative text-7xl lg:text-8xl"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 200 }}
                          aria-hidden="true"
                        >
                          {project.icon}
                        </motion.span>
                      </>
                    )}

                    {/* Category badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold
                      bg-white/20 backdrop-blur-sm text-white border border-white/20 z-10">
                      {project.category}
                    </span>
                  </div>

                  {/* Project info */}
                  <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2
                      group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-4">{project.subtitle}</p>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                      {project.overview}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-medium
                            bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400
                            border border-gray-200/50 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Action row */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-white/5
                            hover:bg-primary/10 hover:text-primary
                            border border-gray-200/50 dark:border-white/5
                            transition-all duration-300 min-h-[44px] min-w-[44px]
                            flex items-center justify-center
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <FiGithub className="w-4 h-4" aria-hidden="true" />
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-white/5
                              hover:bg-primary/10 hover:text-primary
                              border border-gray-200/50 dark:border-white/5
                              transition-all duration-300 min-h-[44px] min-w-[44px]
                              flex items-center justify-center
                              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                          </a>
                        )}
                      </div>

                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary
                          group-hover:gap-2 transition-all duration-300"
                        aria-hidden="true"
                      >
                        View Case Study
                        <FiArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeProject}
      />
    </section>
  );
}
