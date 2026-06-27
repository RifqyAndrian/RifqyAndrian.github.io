import { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { personalInfo } from '../../data/personal';
import { fadeInUp } from '../../utils/animations';

// Defined outside component to avoid re-creation on every render
const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: personalInfo.social.github,
    external: true,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: personalInfo.social.linkedin,
    external: true,
  },
  {
    icon: FiMail,
    label: 'Contact',
    href: `mailto:${personalInfo.social.email}`,
    external: false,
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const statusRegionId = useId();

  const isSending = status === 'sending';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rifqyandriansyah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background glows */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[128px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-2xl overflow-hidden
            bg-white/60 dark:bg-surface-dark/60 backdrop-blur-md
            border border-gray-200/50 dark:border-primary/10
            shadow-xl shadow-black/5 dark:shadow-black/20"
        >
          {/* Inner content */}
          <div className="relative px-6 py-14 sm:px-12 sm:py-16 md:py-20 flex flex-col items-center">

            {/* Avatar icon with decorative elements */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="relative mb-8 flex justify-center"
            >
              {/* Decorative side dots and lines — hidden on very small screens to prevent overflow */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-16 hidden xs:flex items-center gap-1.5 pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-4 sm:w-10 h-px bg-gradient-to-r from-transparent to-primary/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              </div>
              <div
                className="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-16 hidden xs:flex items-center gap-1.5 pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <div className="w-4 sm:w-10 h-px bg-gradient-to-l from-transparent to-primary/40" />
              </div>

              {/* Avatar circle */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full
                  bg-gradient-to-br from-primary/20 to-accent/10
                  border-2 border-primary/30
                  flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-primary/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                Let's Connect!
              </h2>
              {/* Small underline accent */}
              <div className="w-10 h-1 rounded-full bg-primary mx-auto mb-6" aria-hidden="true" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mb-10 text-center"
            >
              I'm always open to new opportunities, collaborations, or just a friendly conversation.
              <br className="hidden sm:block" />
              Fill out the form below or reach out via social media!
            </motion.p>

            {/* Contact Form */}
            <motion.form
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              onSubmit={handleSubmit}
              aria-busy={isSending}
              className="w-full max-w-md space-y-4 mb-10 text-left"
              noValidate
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                  disabled={isSending}
                  autoComplete="name"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10
                    bg-white/50 dark:bg-surface-dark/40 backdrop-blur-sm text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                    transition-all duration-300 disabled:opacity-50 min-h-[44px]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@example.com"
                  disabled={isSending}
                  autoComplete="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10
                    bg-white/50 dark:bg-surface-dark/40 backdrop-blur-sm text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                    transition-all duration-300 disabled:opacity-50 min-h-[44px]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  disabled={isSending}
                  autoComplete="off"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-white/10
                    bg-white/50 dark:bg-surface-dark/40 backdrop-blur-sm text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
                    transition-all duration-300 disabled:opacity-50 resize-none"
                />
              </div>

              {/* Status messages — live region for screen readers */}
              <div
                id={statusRegionId}
                aria-live="polite"
                aria-atomic="true"
                className="min-h-[0px]"
              >
                {status === 'success' && (
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm">
                    <FiCheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>Your message has been sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm">
                    <FiAlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>Failed to send message. Please try again or reach out directly via email.</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                aria-describedby={statusRegionId}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                  bg-primary hover:bg-primary/95 text-white dark:text-background-dark
                  shadow-lg shadow-primary/20 dark:shadow-none hover:shadow-xl hover:shadow-primary/30
                  transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group
                  min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white dark:text-background-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </motion.form>

            {/* Social links row */}
            <motion.nav
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              aria-label="Social media links"
            >
              <ul className="flex items-center gap-4 sm:gap-6 list-none p-0 m-0">
                {socialLinks.map((link, index) => (
                  <li key={link.label} className="flex items-center gap-4 sm:gap-6">
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-2.5 text-gray-600 dark:text-gray-300
                        hover:text-primary dark:hover:text-primary transition-colors duration-300
                        min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg px-1"
                      aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
                    >
                      <link.icon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <span className="text-sm font-semibold">{link.label}</span>
                    </a>

                    {/* Divider between links (not after the last one) */}
                    {index < socialLinks.length - 1 && (
                      <div className="w-px h-5 bg-gray-300 dark:bg-white/10" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
