import { getDailyVerse, getRandomVerse } from "@/lib/verses";
import Hero from "@/components/sections/Hero";
import VerseCard from "@/components/ui/VerseCard";
import RandomVerse from "@/components/sections/RandomVerse";
import Link from "next/link";

export default function Home() {
  const daily = getDailyVerse();
  const randomInitial = getRandomVerse(daily.id);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Daily Verse */}
      <section className="px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-stone-700 dark:text-stone-300">
                Today&rsquo;s Guidance
              </h2>
              <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <Link
              href="/explore"
              className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
            >
              Browse all →
            </Link>
          </div>
          <VerseCard verse={daily} variant="hero" />
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-2xl mx-auto px-4 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800 to-transparent" />
      </div>

      <RandomVerse initial={randomInitial} />
    </div>
  );
}
