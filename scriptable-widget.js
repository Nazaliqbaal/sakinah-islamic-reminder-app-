const API = "https://your-app.vercel.app/api/widget?mode=daily"

const res = await new Request(API).loadJSON()
const family = config.widgetFamily
const w = new ListWidget()

// ── Lock screen: inline (single line at top of lock screen) ──────────────────
if (family === "accessoryInline") {
  const text = w.addText(`${res.reference}  •  ${res.translation}`)
  text.font = Font.systemFont(12)
  text.lineLimit = 1

// ── Lock screen: rectangular ─────────────────────────────────────────────────
} else if (family === "accessoryRectangular") {
  w.setPadding(4, 4, 4, 4)

  const badge = w.addText(res.theme[0].toUpperCase() + "  •  " + res.reference)
  badge.font = Font.boldSystemFont(9)
  badge.textOpacity = 0.6

  w.addSpacer(5)

  const trans = w.addText(`"${res.translation}"`)
  trans.font = Font.italicSystemFont(12)
  trans.lineLimit = 3

// ── Lock screen: circular ────────────────────────────────────────────────────
} else if (family === "accessoryCircular") {
  w.addSpacer()
  const ref = w.addText(`${res.surahNumber}:${res.ayah}`)
  ref.font = Font.boldSystemFont(16)
  ref.centerAlignText()
  const surah = w.addText(res.surah.slice(0, 8))
  surah.font = Font.systemFont(9)
  surah.centerAlignText()
  w.addSpacer()

// ── Home screen: small ───────────────────────────────────────────────────────
} else if (family === "small") {
  w.backgroundColor = new Color("#0f0d0c")
  w.setPadding(14, 14, 14, 14)

  const badge = w.addText(res.theme[0].toUpperCase())
  badge.font = Font.boldSystemFont(9)
  badge.textColor = new Color("#10b981")

  w.addSpacer(8)

  const trans = w.addText(`"${res.translation}"`)
  trans.font = Font.italicSystemFont(11)
  trans.textColor = new Color("#d6d3d1")
  trans.lineLimit = 5

  w.addSpacer()

  const ref = w.addText(`— ${res.reference}`)
  ref.font = Font.mediumSystemFont(9)
  ref.textColor = new Color("#10b981")

// ── Home screen: medium ──────────────────────────────────────────────────────
} else if (family === "medium") {
  w.backgroundColor = new Color("#0f0d0c")
  w.setPadding(16, 16, 16, 16)

  const badge = w.addText(res.theme[0].toUpperCase())
  badge.font = Font.boldSystemFont(9)
  badge.textColor = new Color("#10b981")

  w.addSpacer(10)

  const arabic = w.addText(res.arabic)
  arabic.font = new Font("KFGQPCHafsEx1Quran", 18)
  arabic.textColor = new Color("#f5f3f1")
  arabic.rightAlignText()
  arabic.lineLimit = 2

  w.addSpacer(8)

  const trans = w.addText(`"${res.translation}"`)
  trans.font = Font.italicSystemFont(11)
  trans.textColor = new Color("#a8a29e")
  trans.lineLimit = 2

  w.addSpacer()

  const ref = w.addText(`— ${res.reference}`)
  ref.font = Font.mediumSystemFont(9)
  ref.textColor = new Color("#10b981")

// ── Home screen: large (default) ─────────────────────────────────────────────
} else {
  w.backgroundColor = new Color("#0f0d0c")
  w.setPadding(20, 20, 20, 20)

  const badge = w.addText(res.theme[0].toUpperCase())
  badge.font = Font.boldSystemFont(10)
  badge.textColor = new Color("#10b981")

  w.addSpacer(12)

  const arabic = w.addText(res.arabic)
  arabic.font = new Font("KFGQPCHafsEx1Quran", 22)
  arabic.textColor = new Color("#f5f3f1")
  arabic.rightAlignText()

  w.addSpacer(14)

  const divider = w.addText("· · ·")
  divider.font = Font.lightSystemFont(10)
  divider.textColor = new Color("#10b981")
  divider.centerAlignText()

  w.addSpacer(14)

  const trans = w.addText(`"${res.translation}"`)
  trans.font = Font.italicSystemFont(13)
  trans.textColor = new Color("#d6d3d1")

  w.addSpacer(12)

  const reflect = w.addText(res.reflection)
  reflect.font = Font.systemFont(11)
  reflect.textColor = new Color("#a8a29e")

  w.addSpacer()

  const ref = w.addText(`— ${res.reference}`)
  ref.font = Font.mediumSystemFont(10)
  ref.textColor = new Color("#10b981")
}

Script.setWidget(w)
Script.complete()
