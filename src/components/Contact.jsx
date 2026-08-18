import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:your@email.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

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
              Contact
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="text-zinc-500">
              meaningful.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            Have a project, idea, or opportunity in mind?
            I'm always open to discussing new projects and
            collaborations.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            {/* Availability */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Available for freelance
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Let's talk about your project.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Whether you need a website, full-stack application,
                dashboard, e-commerce platform, or AI-powered
                solution, let's discuss your idea.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-4 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Get In Touch
              </p>

              <div className="mt-6 space-y-5">

                {/* Email */}
                <a
                  href="mailto:your@email.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-400 transition group-hover:bg-white group-hover:text-black">
                    <FiMail size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-700">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-zinc-400 transition group-hover:text-white">
                      triptirani4578@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-400">
                    <FiMapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-700">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">
                     Kaithal, Haryana,India
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 border-t border-white/5 pt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Social
                </p>

                <div className="mt-4 flex gap-2">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-500 transition hover:bg-white hover:text-black"
                  >
                    <FiGithub size={17} />
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-500 transition hover:bg-white hover:text-black"
                  >
                    <FiLinkedin size={17} />
                  </a>

                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black text-zinc-500 transition hover:bg-white hover:text-black"
                  >
                    <FiInstagram size={17} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10"
          >
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Send a Message
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Start a conversation.
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs text-zinc-500">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-zinc-500">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/30"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-xs text-zinc-500">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/30"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs text-zinc-500">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/30"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Send Message

                <FiSend
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Have a quick question?
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              You can also reach me directly through email.
            </p>
          </div>

          <a
            href="mailto:your@email.com"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black px-5 py-3 text-xs font-semibold text-zinc-300 transition hover:bg-white hover:text-black"
          >
            Email Me

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