import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { skillCategories } from '../../data/skills';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[128px]" />

      <div className="max-container relative z-10">
        <SectionHeading
          label="Skills & Tools"
          title="My Technical Arsenal"
          subtitle="Technologies I use daily to bring ideas to life — from backend systems to polished frontends."
        />

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
                <h3 className="text-sm font-semibold tracking-widest uppercase text-primary">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
                {category.description}
              </p>

              {/* Skills grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeInUp}
                      custom={i}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group relative"
                    >
                      <div
                        className={`
                          relative flex flex-col items-center gap-3 p-5 rounded-2xl
                          bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm
                          border border-gray-200/50 dark:border-white/5
                          transition-all duration-300 cursor-default
                          ${isHovered
                            ? 'border-primary/30 dark:border-primary/20 scale-105 shadow-lg shadow-primary/10'
                            : 'hover:border-gray-300 dark:hover:border-white/10'
                          }
                        `}
                        style={isHovered ? {
                          boxShadow: `0 0 20px ${skill.color}20, 0 0 60px ${skill.color}10`,
                        } : undefined}
                      >
                        <Icon
                          className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                          {skill.name}
                        </span>
                      </div>

                      {/* Tooltip */}
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-lg
                            bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium
                            whitespace-nowrap shadow-lg"
                        >
                          {skill.tooltip}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2
                            bg-gray-900 dark:bg-white rotate-45" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
