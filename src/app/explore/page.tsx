"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { verses, THEMES, Theme } from "@/lib/verses";
import VerseCard from "@/components/ui/VerseCard";
import ThemeFilter from "@/components/ui/ThemeFilter";

export default function ExplorePage() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const filtered = useMemo(() => {
    if (!selectedTheme) return verses;
    return verses.filter((v) => v.theme.includes(selectedTheme));
  }, [selectedTheme]);

  const activeThemeData = selectedTheme
    ? THEMES.find((t) => t.key === selectedTheme)
    : null;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            <span className="gradient-text">Explore Verses</span>
          </h1>
          <p className="text-stone-500 dark:text-stone-400">
            {filtered.length} curated reflection
            {filtered.length !== 1 ? "s" : ""}
            {activeThemeData ? ` on ${activeThemeData.label}` : ""}
          </p>
        </motion.div>

        {/* Theme filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <ThemeFilter selected={selectedTheme} onChange={setSelectedTheme} />
        </motion.div>

        {/* Verse grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTheme ?? "all"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((verse, i) => (
              <VerseCard
                key={verse.id}
                verse={verse}
                animationDelay={i * 0.06}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-stone-400 dark:text-stone-600">
            <p className="text-4xl mb-4">🌙</p>
            <p className="text-lg">No verses found for this theme yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
