import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiLayers,
  FiZap,
} from "react-icons/fi";

const stats = [
  {
    number: "10+",
    label: "Projects Built",
  },
  {
    number: "MERN",
    label: "Full Stack",
  },
  {
    number: "AI",
    label: "Development",
  },
  {
    number: "24/7",
    label: "Learning",
  },
];

const highlights = [
  {
    icon: FiCode,
    title: "Full Stack Development",
    description:
      "Building modern, scalable web applications using MongoDB, Express, React and Node.js.",
  },
  {
    icon: FiCpu,
    title: "AI Integration",
    description:
      "Integrating AI capabilities into web applications to create smarter and more useful digital products.",
  },
  {
    icon: FiLayers,
    title: "Modern Architecture",
    description:
      "Creating clean, responsive and maintainable applications with modern development practices.",
  },
  {
    icon: FiZap,
    title: "Performance Focused",
    description:
      "Focused on creating fast, responsive and smooth user experiences across devices.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-600" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              About Me
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Turning ideas into{" "}
            <span className="text-zinc-500">
              digital products.
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-zinc-300">
              I'm{" "}
              <span className="font-semibold text-white">
                Tripti
              </span>
              , a MERN Stack & AI Developer passionate about
              building modern web applications and intelligent
              digital experiences.
            </p>

            <p className="mt-6 leading-7 text-zinc-500">
              I enjoy working across the complete development
              process — from designing interfaces and developing
              APIs to working with databases and integrating
              AI-powered functionality.
            </p>

            <p className="mt-6 leading-7 text-zinc-500">
              My goal is simple: build products that look great,
              perform well, and solve real-world problems.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Let's work together

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Right Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 text-center sm:p-8 ${
                index !== 0
                  ? "border-t border-white/10 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {stat.number}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-600">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}