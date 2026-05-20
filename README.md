# Sakinah — Quran Reflections

> *سَكِينَة* — tranquility, peace, serenity

A modern Islamic web application that surfaces meaningful Quranic verses as standalone spiritual reflections. Built with Next.js 15, TypeScript, and Tailwind CSS.

---

## Features

- **Daily Guidance** — a verse that rotates each day, deterministically chosen from the curated dataset
- **Random Verse Generator** — animated shuffle through 30 handpicked verses
- **Theme Explorer** — filter verses by Hope, Patience, Peace, Gratitude, Trust, Mercy, Strength, Prayer, Guidance, and more
- **Beautiful Verse Cards** — Arabic text (Amiri font), English translation, Surah reference, and a contextual reflection
- **Dark Mode** — system-aware with manual override, persisted in localStorage
- **iPhone Widget API** — `/api/widget` returns JSON for use in Scriptable or iOS widgets
- **Smooth Animations** — powered by Framer Motion

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Font | Amiri (Arabic), Geist (Latin) |
| Data | Local JSON |
| Deploy | Vercel |

---

## Folder Structure

```
sakinah/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, ThemeProvider, Navbar
│   │   ├── page.tsx                # Homepage — daily verse + random generator
│   │   ├── globals.css             # Tailwind + custom utilities
│   │   ├── explore/
│   │   │   └── page.tsx            # Theme-filtered verse browser
│   │   └── api/
│   │       └── widget/
│   │           └── route.ts        # GET /api/widget — iPhone widget endpoint
│   ├── components/
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx   # Dark mode context
│   │   ├── ui/
│   │   │   ├── Navbar.tsx
│   │   │   ├── DarkModeToggle.tsx
│   │   │   ├── VerseCard.tsx       # hero / default / compact variants
│   │   │   └── ThemeFilter.tsx     # Pill-button theme selector
│   │   └── sections/
│   │       ├── Hero.tsx            # Homepage header
│   │       └── RandomVerse.tsx     # Animated random verse section
│   ├── lib/
│   │   ├── verses.ts               # Data helpers + type definitions
│   │   └── utils.ts                # cn() and misc utils
│   └── data/
│       └── verses.json             # 30 curated Quranic verses
├── public/
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Widget API

The `/api/widget` endpoint returns JSON suitable for iOS widgets (Scriptable, WidgetKit via server-side fetch).

**Daily verse:**
```
GET /api/widget
GET /api/widget?mode=daily
```

**Random verse:**
```
GET /api/widget?mode=random
```

**Response shape:**
```json
{
  "id": 1,
  "arabic": "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
  "translation": "Verily, in the remembrance of Allah do hearts find rest.",
  "surah": "Ar-Ra'd",
  "surahNumber": 13,
  "ayah": 28,
  "theme": ["peace", "remembrance"],
  "reflection": "When the world feels heavy...",
  "reference": "Ar-Ra'd 13:28",
  "generatedAt": "2026-05-20T00:00:00.000Z",
  "mode": "daily"
}
```

---

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo to Vercel for automatic deployments.

---

## Adding Verses

Edit `src/data/verses.json`. Each verse follows this shape:

```json
{
  "id": 31,
  "arabic": "...",
  "translation": "...",
  "surah": "Al-Fatiha",
  "surahNumber": 1,
  "ayah": 1,
  "theme": ["guidance", "prayer"],
  "reflection": "..."
}
```

Themes available: `hope`, `patience`, `peace`, `gratitude`, `trust`, `mercy`, `strength`, `prayer`, `guidance`, `remembrance`, `love`, `reflection`.

---

*Built with care. May it bring you peace.*
