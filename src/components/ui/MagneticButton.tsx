import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  download?: boolean;
}

export default function MagneticButton({
  children,
  className = '',
  variant = 'primary',
  href,
  onClick,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = `
    relative inline-flex items-center gap-2 px-7 py-3.5
    font-semibold text-sm tracking-wide rounded-xl
    transition-all duration-300 ease-out
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-primary to-accent text-white
      hover:shadow-lg hover:shadow-primary/25
      active:scale-[0.97]
    `,
    secondary: `
      bg-transparent border-2 border-primary/50 text-primary
      hover:bg-primary/10 hover:border-primary
      active:scale-[0.97]
    `,
    ghost: `
      bg-transparent text-gray-600 dark:text-gray-300
      hover:text-primary hover:bg-primary/5
      active:scale-[0.97]
    `,
  };

  const content = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" download={download}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
}
