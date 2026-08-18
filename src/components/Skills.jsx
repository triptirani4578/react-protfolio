import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { PiOpenAiLogoLight } from "react-icons/pi";


const skills = [
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    level: "Advanced",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    level: "Advanced",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: SiReact,
    level: "Advanced",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: SiJavascript,
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: SiTypescript,
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    level: "Advanced",
  },
  {
    name: "Python",
    category: "Language",
    icon: SiPython,
    level: "Intermediate",
  },
  {
    name: "OpenAI",
    category: "AI Development",
    icon: PiOpenAiLogoLight,
    level: "Advanced",
  },
  {
    name: "Git",
    category: "Tools",
    icon: SiGit,
    level: "Advanced",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: SiGithub,
    level: "Advanced",
  },
  {
    name: "Figma",
    category: "Design",
    icon: SiFigma,
    level: "Intermediate",
  },
];

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "AI Development",
  "Tools",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-600" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Skills & Technologies
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Tools I use to{" "}
              <span className="text-zinc-500">
                build things.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-zinc-500">
              A modern technology stack focused on full-stack
              development, AI integration and scalable digital
              products.
            </p>
          </div>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {categories.map((category, index) => (
            <span
              key={category}
              className={`rounded-full border px-4 py-2 text-xs font-medium ${
                index === 0
                  ? "border-white/20 bg-white text-black"
                  : "border-white/10 bg-white/[0.03] text-zinc-500"
              }`}
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl transition-all duration-500 group-hover:bg-white/[0.08]" />

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-300 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
                      <Icon size={24} />
                    </div>

                    <FiArrowUpRight
                      size={17}
                      className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-white">
                      {skill.name}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-600">
                      {skill.category}
                    </p>
                  </div>

                  {/* Level */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                      Proficiency
                    </span>

                    <span className="text-xs font-medium text-zinc-400">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stack */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Core Stack
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                MERN Stack + Artificial Intelligence
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Express", "React", "Node.js", "AI"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black px-4 py-2 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}