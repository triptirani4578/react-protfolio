import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 1.8 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-black"
        >
          T
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-5 text-xl font-semibold text-white"
        >
          Tripti
          <span className="text-zinc-600">.dev</span>
        </motion.h1>

        {/* Loading Line */}
        <div className="mx-auto mt-6 h-px w-32 overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-white"
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="mt-4 text-[10px] uppercase tracking-[0.3em] text-zinc-600"
        >
          MERN × AI Developer
        </motion.p>
      </div>
    </motion.div>
  );
}