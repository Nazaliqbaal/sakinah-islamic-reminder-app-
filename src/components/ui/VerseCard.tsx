"use client";

import { motion } from "framer-motion";
import { Verse } from "@/lib/verses";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface VerseCardProps {
  verse: Verse;
  variant?: "hero" | "default" | "compact";
  className?: string;
  animationDelay?: number;
}

export default function VerseCard({
  verse,
  variant = "default",
  className,
  animationDelay = 0,
}: VerseCardProps) {
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay, ease: "easeOut" }}
      className={cn(
        "card-glass rounded-2xl overflow-hidden",
        isHero && "rounded-3xl shadow-2xl shadow-emerald-900/10",
        !isHero &&
          "shadow-lg shadow-stone-900/5 hover:shadow-xl transition-shadow duration-300",
        className,
      )}
    >
      {/* Gradient accent bar */}
      <div
        className={cn(
          "w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400",
          isHero ? "h-1.5" : "h-1",
        )}
      />

      <div className={cn("p-6", isHero && "p-8 md:p-12", isCompact && "p-5")}>
        {/* Theme badge */}
        <div className="flex flex-wrap gap-2 mb-6">
          {verse.theme.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/40 capitalize"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Arabic text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: animationDelay + 0.15 }}
          className={cn(
            "font-arabic leading-loose text-stone-700 dark:text-stone-100 mb-8",
            isHero ? "text-3xl md:text-4xl" : "text-2xl",
            isCompact && "text-xl mb-6",
          )}
          lang="ar"
        >
          {verse.arabic}
        </motion.p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-700 to-transparent" />
          <Sparkles
            size={14}
            className="text-amber-400 shrink-0"
            strokeWidth={1.5}
          />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-700 to-transparent" />
        </div>

        {/* Translation */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: animationDelay + 0.25 }}
          className={cn(
            "text-stone-700 dark:text-stone-300 font-medium leading-relaxed italic mb-6",
            isHero ? "text-xl md:text-2xl" : "text-lg",
            isCompact && "text-base",
          )}
        >
          &ldquo;{verse.translation}&rdquo;
        </motion.blockquote>

        {/* Surah ref */}
        <p
          className={cn(
            "text-sm text-stone-500 dark:text-stone-500 font-medium mb-6",
            isCompact && "mb-4",
          )}
        >
          — Surah {verse.surah}, {verse.surahNumber}:{verse.ayah}
        </p>

        {/* Reflection */}
        {!isCompact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: animationDelay + 0.35 }}
            className="rounded-xl bg-amber-50/60 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20 p-4"
          >
            <p className="text-sm text-amber-800 dark:text-amber-300/80 leading-relaxed">
              <span className="font-semibold text-amber-700 dark:text-amber-400">
                Reflection:{" "}
              </span>
              {verse.reflection}
            </p>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}
