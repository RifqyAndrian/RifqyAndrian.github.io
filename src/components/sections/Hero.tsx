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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-100" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-container px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Profile photo */}
        <motion.div variants={fadeInUp} custom={0} className="mb-8 flex justify-center">
          <div className="relative p-[3px] rounded-full bg-gradient-to-br from-primary via-accent to-primary shadow-xl shadow-primary/20">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white dark:bg-background-dark p-[3px]">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
                loading="eager"
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
        <motion.div variants={fadeInUp} custom={2} className="mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
            <TypeWriter words={personalInfo.roles} speed={70} deleteSpeed={40} pauseDuration={2500} />
          </p>
        </motion.div>

        {/* Bio in Decorative Container */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          className="relative p-6 sm:p-8 md:p-10 rounded-2xl 
            bg-white/40 dark:bg-surface-dark/40 backdrop-blur-md 
            border border-gray-200/50 dark:border-primary/10 
            shadow-xl shadow-black/5 dark:shadow-black/20
            max-w-3xl mx-auto mb-10 overflow-hidden text-center"
        >
          {/* Futuristic/Modern corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/60 rounded-tl-md" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/60 rounded-tr-md" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/60 rounded-bl-md" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/60 rounded-br-md" />

          {/* Additional decorative top/bottom lines */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          custom={4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton variant="primary" onClick={scrollToWork}>
            <FiArrowDown className="w-4 h-4" />
            Explore My Work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
