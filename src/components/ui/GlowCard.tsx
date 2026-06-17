import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'accent';
  delay?: number;
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'primary',
  delay = 0,
}: GlowCardProps) {
  const glowClass = glowColor === 'primary' ? 'hover:glow-primary' : 'hover:glow-accent';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`
        relative group rounded-2xl overflow-hidden
        bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm
        border border-gray-200/50 dark:border-white/5
        hover:border-primary/30 dark:hover:border-primary/20
        transition-all duration-300 ease-out
        ${glowClass}
        ${className}
      `}
    >
      {/* Gradient hover overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
          ${glowColor === 'primary'
            ? 'bg-gradient-to-br from-primary/5 to-transparent'
            : 'bg-gradient-to-br from-accent/5 to-transparent'
          }`}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
