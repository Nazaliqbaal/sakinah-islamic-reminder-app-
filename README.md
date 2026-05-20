# Sakinah — Quran Reflections

> *سَكِينَة* — tranquility, peace, serenity

**Live:** [sakinah-islamic-reminder-app.vercel.app](https://sakinah-islamic-reminder-app.vercel.app)

Sakinah is an Islamic web app that surfaces meaningful Quranic verses as daily spiritual reflections. Each verse is shown with its original Arabic text, an English translation, Surah reference, and a short contextual reflection to help you connect with its meaning.

---

## What it does

- **Daily Verse** — a new verse each day, deterministically chosen so every visitor sees the same one
- **Random Generator** — shuffle through 30 hand-curated verses on demand
- **Theme Explorer** — browse verses filtered by themes: Hope, Patience, Peace, Gratitude, Trust, Mercy, Strength, Prayer, Guidance, Remembrance, Love, Reflection
- **Dark Mode** — system-aware with manual toggle, persisted across sessions
- **iPhone Widget** — live verse on your home screen or lock screen via Scriptable

---

## iPhone Widget Setup

The app exposes an API endpoint that Scriptable reads to display a verse directly on your iPhone.

### 1. Install Scriptable

Download [Scriptable](https://apps.apple.com/app/scriptable/id1405459188) from the App Store (free).

### 2. Create the script

Open Scriptable → tap **+** → paste the contents of [`scriptable-widget.js`](./scriptable-widget.js) from this repo. Replace the API URL at the top with:

```
https://sakinah-islamic-reminder-app.vercel.app/api/widget?mode=daily
```

### 3. Add to Home Screen

Long-press your home screen → **+** → search **Scriptable** → choose a size → tap the widget → select your script.

Supported sizes and what they show:

| Size | Content |
|------|---------|
| Large | Arabic text, translation, reflection, reference |
| Medium | Arabic text, translation, reference |
| Small | Translation and reference |

### 4. Add to Lock Screen

Long-press your lock screen → **Customize** → tap the widget area → **+** → **Scriptable** → select your script.

Supported lock screen variants:

| Variant | Content |
|---------|---------|
| Rectangular | Theme, translation (3 lines), reference |
| Inline | Single-line verse reference + translation |
| Circular | Surah number and name |

The widget refreshes automatically — iOS controls the interval (typically every 15–60 minutes).

---

*Built with care. May it bring you peace.*
