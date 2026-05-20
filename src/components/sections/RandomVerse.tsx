"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getRandomVerse } from "@/lib/verses";
import { Verse } from "@/lib/verses";
import VerseCard from "@/components/ui/VerseCard";
import { Shuffle } from "lucide-react";

interface RandomVerseProps {
  initial: Verse;
}

export default function RandomVerse({ initial }: RandomVerseProps) {
  const [verse, setVerse] = useState<Verse>(initial);
  const [key, setKey] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const handleNew = () => {
    setSpinning(true);
    setTimeout(() => {
      setVerse(getRandomVerse(verse.id));
      setKey((k) => k + 1);
      setSpinning(false);
    }, 300);
  };

  return (
    <section className="px-4 pb-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-300">
            Random Verse
          </h2>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleNew}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors duration-200 shadow-lg shadow-emerald-500/25"
          >
            <motion.span
              animate={spinning ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Shuffle size={15} strokeWidth={2} />
            </motion.span>
            New Verse
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <VerseCard verse={verse} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
