import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlowCard from '../ui/GlowCard';
import { aboutCards } from '../../data/personal';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-container relative z-10">
        <SectionHeading
          label="About Me"
          title="More Than Just a Developer"
          subtitle="I believe in building software that makes a difference — not just code that works, but experiences that resonate."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {aboutCards.map((card, i) => (
            <motion.div key={card.title} variants={fadeInUp} custom={i}>
              <GlowCard
                glowColor={i % 2 === 0 ? 'primary' : 'accent'}
                delay={0}
                className="p-8 h-full"
              >
                <span className="text-4xl mb-4 block">{card.emoji}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
