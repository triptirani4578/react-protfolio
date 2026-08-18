import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-12 text-white sm:px-8 lg:px-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-black">
                T
              </span>

              <span className="text-xl font-bold">
                Tripti
                <span className="text-zinc-600">.dev</span>
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-600">
              MERN Stack & AI Developer building modern,
              scalable and intelligent digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-zinc-700">
              Connect
            </p>

            <div className="flex gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-500 transition hover:bg-white hover:text-black"
              >
                <FiGithub size={17} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-500 transition hover:bg-white hover:text-black"
              >
                <FiLinkedin size={17} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-500 transition hover:bg-white hover:text-black"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="mailto:your@email.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-zinc-500 transition hover:bg-white hover:text-black"
              >
                <FiMail size={17} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="border-b border-white/10 py-8">
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-zinc-600 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Tripti. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-zinc-700">
              Built with React + Tailwind
            </span>

            <a
              href="#home"
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition hover:bg-white hover:text-black"
            >
              <FiArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}