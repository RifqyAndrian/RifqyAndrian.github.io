import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../data/experience';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[128px] pointer-events-none" aria-hidden="true" />

      <div className="max-container relative z-10">
        <SectionHeading
          label="Career"
          title="Work Experience"
          subtitle="Professional journey in software quality and testing — delivering reliable, high-quality digital experiences."
          align="left"
        />

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                custom={index}
                className="relative pl-10"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-8 flex items-center justify-center">
                  <div className="w-[22px] h-[22px] rounded-full border-[3px] border-primary bg-background-light dark:bg-background-dark flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Experience card */}
                <div
                  className="rounded-2xl overflow-hidden
                    bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm
                    border border-gray-200/50 dark:border-white/5
                    hover:border-primary/20 dark:hover:border-primary/15
                    transition-all duration-300"
                >
                  {/* Card header */}
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Company logo */}
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-center"
                        style={{ backgroundColor: exp.logo.bgColor }}
                      >
                        <span
                          className="text-[8px] font-bold leading-tight whitespace-pre-line"
                          style={{ color: exp.logo.textColor }}
                        >
                          {exp.logo.text}
                        </span>
                      </div>

                      {/* Role info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-primary mt-0.5">
                              {exp.company}
                            </p>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {exp.type}
                            </span>
                          </div>

                          {/* Date badge */}
                          <span
                            className="inline-flex self-start px-3 py-1 rounded-lg text-xs font-semibold
                              bg-primary/10 text-primary border border-primary/20
                              whitespace-nowrap"
                          >
                            {exp.startDate} – {exp.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mx-5 sm:mx-6 h-px bg-gray-200/60 dark:bg-white/5" />

                  {/* Bullet points */}
                  <div className="p-5 sm:p-6 pt-4 sm:pt-5">
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
