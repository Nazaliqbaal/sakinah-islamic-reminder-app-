import { NextResponse } from "next/server";
import { getDailyVerse, getRandomVerse } from "@/lib/verses";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") ?? "daily";

  const verse = mode === "random" ? getRandomVerse() : getDailyVerse();

  const payload = {
    id: verse.id,
    arabic: verse.arabic,
    translation: verse.translation,
    surah: verse.surah,
    surahNumber: verse.surahNumber,
    ayah: verse.ayah,
    theme: verse.theme,
    reflection: verse.reflection,
    reference: `${verse.surah} ${verse.surahNumber}:${verse.ayah}`,
    generatedAt: new Date().toISOString(),
    mode,
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": mode === "daily" ? "public, s-maxage=3600" : "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
