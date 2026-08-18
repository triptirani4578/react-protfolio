import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "MERN Stack Development",
    description:
      "Building modern, scalable full-stack web applications using MongoDB, Express.js, React.js and Node.js.",
    icon: FiCode,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    number: "02",
    title: "AI Development",
    description:
      "Integrating AI capabilities into web applications to build intelligent, automated and personalized digital experiences.",
    icon: FiCpu,
    tags: [
      "AI APIs",
      "LLM Integration",
      "AI Apps",
      "Automation",
    ],
  },
  {
    number: "03",
    title: "Backend & API Development",
    description:
      "Creating secure and reliable backend systems, REST APIs, authentication systems and database architectures.",
    icon: FiDatabase,
    tags: [
      "REST API",
      "Authentication",
      "MongoDB",
      "Node.js",
    ],
  },
  {
    number: "04",
    title: "Web Applications",
    description:
      "Developing responsive and user-friendly web applications with clean interfaces, smooth interactions and modern architecture.",
    icon: FiLayers,
    tags: [
      "Responsive UI",
      "Dashboards",
      "E-Commerce",
      "Real-Time Apps",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
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
              What I Do
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Building solutions that{" "}
              <span className="text-zinc-500">
                work.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-zinc-500">
              From frontend interfaces to backend systems and
              AI-powered applications, I build complete digital
              solutions.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] sm:p-9"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/[0.03] blur-3xl transition-all duration-500 group-hover:bg-white/[0.08]" />

                <div className="relative">

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-zinc-600">
                      /{service.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-400 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-black px-3 py-2 text-xs text-zinc-500 transition hover:border-white/20 hover:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-9 flex items-center justify-between border-t border-white/5 pt-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                      Service
                    </span>

                    <a
                      href="#contact"
                      className="group/link flex items-center gap-2 text-xs font-medium text-zinc-400 transition hover:text-white"
                    >
                      Discuss a project

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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Have an idea?
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Let's turn it into a working product.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-black transition hover:bg-zinc-200"
          >
            Start a Project

            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}