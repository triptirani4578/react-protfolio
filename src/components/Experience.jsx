import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiExternalLink,
} from "react-icons/fi";

const experiences = [
  {
    type: "Internship",
    year: "Internship",
    role: "Web Development Intern",
    company: "Hartron India",
    description:
      "Worked on web development projects during my internship, contributing to the development and improvement of web-based platforms and digital solutions.",
    projects: [
      "Hartron India Website",
      "LMS Dashboard",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    icon: FiBriefcase,
  },

  {
    type: "Freelance",
    year: "Freelance",
    role: "MERN Stack & AI Developer",
    company: "Freelance Developer",
    description:
      "Working as a freelance developer, building modern websites, full-stack applications, dashboards, e-commerce platforms, and AI-powered digital solutions for clients and projects.",
    projects: [
      "Business Websites",
      "MERN Applications",
      "Admin Dashboards",
      "AI-Powered Applications",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
      "Tailwind CSS",
    ],
    icon: FiCode,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-3xl" />

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
              Experience & Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              My{" "}
              <span className="text-zinc-500">
                professional journey.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-zinc-500">
              From internship experience to freelance development,
              building real-world digital products and applications.
            </p>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.type}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] sm:p-9"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl transition-all duration-500 group-hover:bg-white/[0.07]" />

                <div className="relative">

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-flex rounded-full border border-white/10 bg-black px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                        {experience.type}
                      </span>

                      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
                        {experience.year}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-400 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      <Icon size={21} />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-zinc-400">
                      {experience.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-sm leading-7 text-zinc-500">
                    {experience.description}
                  </p>

                  {/* Projects */}
                  <div className="mt-8">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      Work
                    </p>

                    <div className="space-y-2">
                      {experience.projects.map((project) => (
                        <div
                          key={project}
                          className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/40 px-4 py-3"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/[0.05]">
                            <FiExternalLink
                              size={12}
                              className="text-zinc-500"
                            />
                          </span>

                          <span className="text-xs text-zinc-400">
                            {project}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-black px-3 py-2 text-xs text-zinc-500 transition hover:border-white/20 hover:text-zinc-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-9 flex items-center justify-between border-t border-white/5 pt-5">
                    <span className="text-xs text-zinc-700">
                      0{index + 1}
                    </span>

                    <a
                      href="#projects"
                      className="group/link flex items-center gap-2 text-xs font-medium text-zinc-400 transition hover:text-white"
                    >
                      View Projects

                      <FiArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center sm:p-8"
        >
          <p className="text-sm text-zinc-500">
            Currently focused on{" "}
            <span className="font-medium text-white">
              MERN Stack Development
            </span>{" "}
            and{" "}
            <span className="font-medium text-white">
              AI-powered applications.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}