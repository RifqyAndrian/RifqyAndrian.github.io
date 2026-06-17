import { useTheme } from './hooks/useTheme';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import ScrollProgress from './components/layout/ScrollProgress';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useLenis(); // Smooth scrolling with Lenis

  return (
    <div className="relative min-h-screen noise bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Scroll indicator progress bar */}
      <ScrollProgress />

      {/* Floating Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Layout */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
