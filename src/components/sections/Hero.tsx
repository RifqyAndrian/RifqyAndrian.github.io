import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import TypeWriter from '../ui/TypeWriter';
import MagneticButton from '../ui/MagneticButton';
import { personalInfo } from '../../data/personal';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-100" aria-hidden="true" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" aria-hidden="true" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-container w-full px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Profile photo */}
        <motion.div variants={fadeInUp} custom={0} className="mb-8 flex justify-center">
          <div className="relative p-[3px] rounded-full bg-gradient-to-br from-primary via-accent to-primary shadow-xl shadow-primary/20">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white dark:bg-background-dark p-[3px]">
              <img
                src={personalInfo.avatarUrl}
                alt={`${personalInfo.name} profile photo`}
                className="w-full h-full rounded-full object-cover"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                width={112}
                height={112}
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-4"
        >
          Hi, I'm{' '}
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div variants={fadeInUp} custom={2} className="mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
            <TypeWriter words={personalInfo.roles} speed={70} deleteSpeed={40} pauseDuration={2500} />
          </p>
        </motion.div>

        {/* Bio in Decorative Container */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          className="relative p-5 sm:p-6 md:p-8 rounded-2xl
            bg-white/40 dark:bg-surface-dark/40 backdrop-blur-md
            border border-gray-200/50 dark:border-primary/10
            shadow-xl shadow-black/5 dark:shadow-black/20
            max-w-3xl mx-auto mb-10 text-center"
        >
          {/* Corner accents — perfectly aligned with the container border & 2xl border radius */}
          <div className="absolute top-[-1px] left-[-1px] w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-2xl" aria-hidden="true" />
          <div className="absolute top-[-1px] right-[-1px] w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-2xl" aria-hidden="true" />
          <div className="absolute bottom-[-1px] left-[-1px] w-6 h-6 border-b-2 border-l-2 border-primary/60 rounded-bl-2xl" aria-hidden="true" />
          <div className="absolute bottom-[-1px] right-[-1px] w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-2xl" aria-hidden="true" />

          {/* Decorative lines — aligned to sit perfectly on the border line */}
          <div className="absolute top-[-1px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-[-1px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden="true" />

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          custom={4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            variant="primary"
            onClick={scrollToWork}
            ariaLabel="Scroll down to explore my work"
          >
            <FiArrowDown className="w-4 h-4" aria-hidden="true" />
            Explore My Work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
