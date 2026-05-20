import versesData from "@/data/verses.json";

export type Theme =
  | "hope"
  | "patience"
  | "peace"
  | "gratitude"
  | "trust"
  | "mercy"
  | "strength"
  | "prayer"
  | "guidance"
  | "remembrance"
  | "love"
  | "reflection";

export interface Verse {
  id: number;
  arabic: string;
  translation: string;
  surah: string;
  surahNumber: number;
  ayah: number;
  theme: Theme[];
  reflection: string;
}

export const verses: Verse[] = versesData as Verse[];

export const THEMES: { key: Theme; label: string; emoji: string }[] = [
  { key: "hope", label: "Hope", emoji: "🌅" },
  { key: "patience", label: "Patience", emoji: "⏳" },
  { key: "peace", label: "Peace", emoji: "🕊️" },
  { key: "gratitude", label: "Gratitude", emoji: "🤲" },
  { key: "trust", label: "Trust", emoji: "⚓" },
  { key: "mercy", label: "Mercy", emoji: "💚" },
  { key: "strength", label: "Strength", emoji: "💪" },
  { key: "prayer", label: "Prayer", emoji: "📿" },
  { key: "guidance", label: "Guidance", emoji: "🌟" },
  { key: "remembrance", label: "Remembrance", emoji: "✨" },
  { key: "love", label: "Love", emoji: "❤️" },
  { key: "reflection", label: "Reflection", emoji: "🔮" },
];

export function getDailyVerse(): Verse {
  const today = new Date();
  const dayOfYear =
    Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        86400000
    ) - 1;
  return verses[dayOfYear % verses.length];
}

export function getRandomVerse(excludeId?: number): Verse {
  const pool = excludeId ? verses.filter((v) => v.id !== excludeId) : verses;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getVersesByTheme(theme: Theme): Verse[] {
  return verses.filter((v) => v.theme.includes(theme));
}

export function getVerseById(id: number): Verse | undefined {
  return verses.find((v) => v.id === id);
}
