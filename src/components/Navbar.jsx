import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="relative flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/80 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg font-bold text-black transition-transform duration-300 group-hover:rotate-6">
              T
            </div>

            <div className="hidden sm:block">
              <span className="text-lg font-semibold tracking-tight text-white">
                Tripti
              </span>

              <span className="ml-1 text-xs text-zinc-500">
                .dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const sectionName = link.href.replace("#", "");
              const isActive = activeSection === sectionName;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative rounded-lg px-3 py-2 text-xs font-medium transition-colors duration-300 xl:px-4"
                >
                  <span
                    className={
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-white"
                    }
                  >
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-zinc-200 lg:flex"
          >
            Let's Talk

            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10 lg:hidden"
          >
            {isOpen ? (
              <FiX size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const sectionName = link.href.replace("#", "");
                  const isActive =
                    activeSection === sectionName;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleNavClick}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-white text-black"
                          : "text-zinc-500 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}

                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
                >
                  Let's Talk
                  <FiArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}