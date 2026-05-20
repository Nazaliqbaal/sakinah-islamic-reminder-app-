"use client";

import { motion } from "framer-motion";
import { THEMES, Theme } from "@/lib/verses";
import { cn } from "@/lib/utils";

interface ThemeFilterProps {
  selected: Theme | null;
  onChange: (theme: Theme | null) => void;
}

export default function ThemeFilter({ selected, onChange }: ThemeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
          selected === null
            ? "bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20"
            : "bg-white dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-emerald-300 dark:hover:border-emerald-700"
        )}
      >
        All Verses
      </button>
      {THEMES.map(({ key, label, emoji }, i) => (
        <motion.button
          key={key}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.03 }}
          onClick={() => onChange(selected === key ? null : key)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border flex items-center gap-1.5",
            selected === key
              ? "bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20"
              : "bg-white dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-emerald-300 dark:hover:border-emerald-700"
          )}
        >
          <span>{emoji}</span>
          <span>{label}</span>
        </motion.button>
      ))}
    </div>
  );
}
