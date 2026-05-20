"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-16 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl md:text-6xl mb-6 select-none"
        >
          ☽
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="gradient-text">Sakinah</span>
        </h1>

        <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-lg mx-auto leading-relaxed mb-2">
          Tranquility through the words of Allah
        </p>
        <p className="text-sm text-stone-400 dark:text-stone-600 max-w-sm mx-auto">
          سَكِينَة — peace, calm, serenity
        </p>
      </motion.div>
    </section>
  );
}
