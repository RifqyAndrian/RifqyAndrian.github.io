import { personalInfo } from '../../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200/50 dark:border-white/5">
      <div className="max-container px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-3">
          {/* Left decorative line */}
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />

          {/* Copyright text */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {personalInfo.name}
          </p>

          {/* Right decorative line */}
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </footer>
  );
}
