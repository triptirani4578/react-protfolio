import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiShoppingCart,
  FiMessageCircle,
  FiBox,
  FiLink,
} from "react-icons/fi";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiSocketdotio,
  SiEthereum,
} from "react-icons/si";

const projects = [
  {
    number: "01",
    title: "E-Commerce",
    subtitle: "Full Stack Shopping Platform",
    description:
      "A complete MERN stack e-commerce application with authentication, product management, cart functionality, orders, and a REST API.",
    category: "MERN Stack",
    icon: FiShoppingCart,

    technologies: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
    ],

    features: [
      "User Authentication",
      "Product CRUD",
      "Shopping Cart",
      "Order Management",
      "REST API",
      "MongoDB Database",
    ],

    github: "#",
    live: "#",
  },

  {
    number: "02",
    title: "Real-Time Chat App",
    subtitle: "Live Messaging Platform",
    description:
      "A real-time communication platform built with MERN and Socket.IO featuring instant messaging, online users, and typing indicators.",
    category: "MERN + Socket.IO",
    icon: FiMessageCircle,

    technologies: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],

    features: [
      "Real-Time Messaging",
      "Online Users",
      "Typing Indicator",
      "User Authentication",
      "Instant Updates",
      "Socket.IO",
    ],

    github: "#",
    live: "#",
  },

  {
    number: "03",
    title: "Real-Time E-Commerce",
    subtitle: "Live Shopping Experience",
    description:
      "An advanced e-commerce platform combining MERN, Redux Toolkit, and Socket.IO to deliver live product updates, real-time carts, and an admin dashboard.",
    category: "MERN + Redux + Socket.IO",
    icon: FiBox,

    technologies: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],

    features: [
      "Live Product Updates",
      "Real-Time Cart",
      "Redux Toolkit",
      "Admin Dashboard",
      "Order Management",
      "Socket.IO",
    ],

    github: "#",
    live: "#",
  },

  {
    number: "04",
    title: "Blockchain Basics",
    subtitle: "Web3 / DApp Project",
    description:
      "An introduction to Web3 development exploring wallet connections, smart contract fundamentals, and decentralized application concepts.",
    category: "Web3",
    icon: FiLink,

    technologies: [
      { name: "Ethereum", icon: SiEthereum },
      { name: "Web3", icon: FiLink },
      { name: "React", icon: SiReact },
    ],

    features: [
      "Wallet Connection",
      "Smart Contracts",
      "Web3 Integration",
      "DApp Introduction",
      "Blockchain Basics",
    ],

    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

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
              Featured Projects
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Things I've{" "}
              <span className="text-zinc-500">
                built.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-zinc-500">
              A selection of full-stack, real-time, e-commerce,
              and Web3 projects built with modern technologies.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl transition-all duration-500 group-hover:bg-white/[0.08]" />

                <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">

                  {/* Left */}
                  <div className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-sm text-zinc-600">
                        /{project.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-300 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                        <ProjectIcon size={22} />
                      </div>
                    </div>

                    <div className="mt-16">
                      <span className="rounded-full border border-white/10 bg-black px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                        {project.category}
                      </span>

                      <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        {project.subtitle}
                      </p>

                      <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500">
                        {project.description}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.live}
                        className="group/button inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-black transition hover:bg-zinc-200"
                      >
                        Live Demo

                        <FiArrowUpRight
                          size={15}
                          className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                        />
                      </a>

                      <a
                        href={project.github}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black px-5 py-3 text-xs font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
                      >
                        <FiGithub size={15} />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="p-7 sm:p-10">

                    {/* Technologies */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                        Technologies
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => {
                          const TechIcon = tech.icon;

                          return (
                            <div
                              key={tech.name}
                              className="flex items-center gap-2 rounded-lg border border-white/10 bg-black px-3 py-2 text-xs text-zinc-400"
                            >
                              <TechIcon size={14} />
                              {tech.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-12">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                        Key Features
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />

                            <span className="text-xs text-zinc-400">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Number */}
                    <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-5">
                      <span className="text-xs text-zinc-600">
                        Project {project.number}
                      </span>

                      <span className="text-xs text-zinc-700">
                        {String(index + 1).padStart(2, "0")} / 04
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Have a project in mind?
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Let's build something great together.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-black transition hover:bg-zinc-200"
          >
            Start a Conversation

            <FiArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}