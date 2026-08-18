import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiCode,
} from "react-icons/fi";
import { PiOpenAiLogoLight } from "react-icons/pi";

const img = "https://ik.imagekit.io/k7z2aon9j/tripti.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-5 pt-28 text-white sm:px-8 lg:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

        <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-zinc-600/[0.08] blur-3xl" />

        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-zinc-400/[0.05] blur-3xl" />
      </div>

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT CONTENT */}
          <div>
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>

              <span className="text-xs font-medium tracking-wide text-zinc-300">
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Building
              <br />

              <span className="text-zinc-500">digital</span>{" "}
              <span className="text-white">experiences.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
            >
              Hi, I'm{" "}
              <span className="font-semibold text-white">Tripti</span>,
              a MERN Stack & AI Developer focused on building scalable
              web applications, intelligent products, and modern digital
              experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200"
              >
                View My Work

                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                <FiDownload size={17} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="mr-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
                Connect
              </span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <FiGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <FiLinkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE - PROFILE PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[470px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-white/[0.05] blur-3xl" />

            {/* Rotating Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-white/10"
            />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 p-2 shadow-2xl shadow-black">
              <div className="relative overflow-hidden rounded-[2rem]">

                {/* IMPORTANT: src={img}, NOT src="{img}" */}
                <img
                  src={img}
                  alt="Tripti - MERN Stack and AI Developer"
                  className="h-[500px] w-full object-cover object-center  *: transition-all duration-700 hover:scale-105 hover:grayscale-0 sm:h-[560px]"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                    MERN Stack × AI
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Tripti
                  </h3>
                </div>
              </div>
            </div>

            {/* AI Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-12 hidden rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
                  <PiOpenAiLogoLight size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    AI Developer
                  </p>

                  <p className="text-[10px] text-zinc-500">
                    Building intelligent apps
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MERN Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 bottom-16 hidden rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
                  <FiCode size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    MERN Stack
                  </p>

                  <p className="text-[10px] text-zinc-500">
                    Full Stack Development
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}