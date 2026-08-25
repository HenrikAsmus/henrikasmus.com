# Website loadassumptions.xyz — Spezifikation (Fassung 2)

Diese Fassung ersetzt die vorherige vollständig. Die alte Gestaltung — Source Serif,
Flaggen, Haarlinie, Versalien-Rubriken — ist verworfen. Alles hier ist verbindlich.
Nichts hinzufügen, was nicht dasteht.

## Technik

- Astro, blank. Kein Tailwind, kein UI-Framework, **kein JavaScript**.
- Ein Layout, eine CSS-Datei.
- Schrift selbst gehostet als WOFF2 unter `public/fonts/`. Keine Google-Fonts-CDN.
- GitHub Pages über GitHub Actions.

## Seiten

| Pfad | Inhalt |
|---|---|
| `/` | Profil, deutsch |
| `/lastannahmen/` | Die Arbeit, deutsch |
| `/en/` | Profil, englisch |
| `/en/load-assumptions/` | Die Arbeit, englisch |

## Schrift

**Geist**, serifenlos, Schnitte 400 und 500. Nur diese beiden.
Fallback-Kette: `Geist, Inter, system-ui, sans-serif`.

**Keine Monospace. Keine Versalien. Keine Kursive. Kein Schnitt über 500.**

## Farben

| Rolle | Wert |
|---|---|
| Grund | `#FFFFFF`, flach |
| Text | `#121517` |
| Fließtext | `#61686E` |
| Beischrift unter dem Namen | `#8A9197` |
| Rubriken und Metazeilen | `#AAB1B6` |
| Gedämpfte Links (PDF) | `#9BA2A8` |
| Umschalter inaktiv | `#A9B0B5` |
| Trennstrich im Umschalter | `#DFE3E6` |

Kein Dark Mode, `color-scheme: light only`. Keine weiteren Farben.

## Silber

Verläufe sind an **genau zwei Stellen** erlaubt, sonst nirgends.

**Untertitel der Arbeit** (zweite Titelzeile), über `background-clip: text`:

```
linear-gradient(100deg,#78828A 0%,#C3CACF 50%,#78828A 100%)
```

Immer zusammen mit `-webkit-background-clip: text` und `color: transparent`.
Niemals auf Fließtext oder Links anwenden.

**Zeichen** (SVG), auf Strich und Linie:

```
linearGradient x1=0 y1=0 x2=1 y2=1
stop 0    #D6DCE0
stop 0.45 #6E777E
stop 1    #AAB2B8
```

## Zeichen

Auflagersymbol aus der Baustatik. Inline-SVG, 18 px, `viewBox="0 0 20 20"`,
Strichstärke 1.4, `stroke-linejoin: round`, keine Füllung.

```
Dreieck: M10 3 L16.5 14 H3.5 Z
Linie:   M2 17 H18   (stroke-linecap: round)
```

Position: oben links, gleiche Zeile wie der Umschalter.

## Sprachumschalter

Oben rechts, gleiche Zeile wie das Zeichen. Text, **keine Flaggen**.
`DE / EN`, 13 px, `letter-spacing: -0.005em`. Aktive Sprache `#121517`,
inaktive `#A9B0B5`, Schrägstrich `#DFE3E6` mit 6 px Abstand links und rechts.

Verlinkt jeweils die gespiegelte Seite, nicht die Startseite:

- `/` ↔ `/en/`
- `/lastannahmen/` ↔ `/en/load-assumptions/`

Dazu `<link rel="alternate" hreflang="…">` in beiden Richtungen.

## Größen

| Element | Grad | Schnitt | Laufweite | Zeilenabstand | Farbe |
|---|---|---|---|---|---|
| Name | 38 px | 500 | −0.032em | 1.05 | Text |
| Beischrift unter dem Namen | 15 px | 400 | −0.008em | 1.55 | `#8A9197` |
| Rubrik (Arbeiten, Kontakt) | 13 px | 400 | −0.005em | — | `#AAB1B6` |
| Werktitel Zeile 1 | 21 px | 500 | −0.032em | 1.22 | Text |
| Werktitel Zeile 2 | 21 px | 500 | −0.032em | 1.22 | Silberverlauf |
| Metazeile | 13 px | 400 | −0.005em | — | `#AAB1B6` |
| Fließtext | 15 px | 400 | −0.007em | 1.72 | `#61686E` |
| Links | 14 px | 400 | −0.008em | — | Text bzw. `#9BA2A8` |
| E-Mail | 15 px | 400 | −0.008em | — | Text |

Rubriken in **Satzform**, nicht in Versalien: „Arbeiten", „Kontakt".

Mobil unter 640 px: Name 30 px, Werktitel 19 px, Rest unverändert.

## Maße und Abstände

- Container: `max-width: 620px; margin: 0 auto; padding: 96px 24px 140px;`
- Inhalt darin linksbündig; Fließtext zusätzlich `max-width: 540px`
- Kopfzeile liegt innerhalb des Containers: Zeichen am linken, Umschalter am rechten Rand der 620 px

Abstände von oben nach unten:

| Von | Nach | px |
|---|---|---|
| Kopfzeile (Zeichen/Umschalter) | Name | 72 |
| Name | Beischrift | 14 |
| Beischrift | Rubrik „Arbeiten" | 80 |
| Rubrik | Werktitel | 20 |
| Werktitel | Metazeile | 16 |
| Metazeile | Fließtext | 20 |
| Fließtext | Linkzeile | 24 |
| Linkzeile | Rubrik „Kontakt" | 80 |
| Rubrik | E-Mail | 18 |

Linkzeile: Abstand zwischen den Links 24 px.

## Bewegung

Genau zwei Regeln, beide unter `@media (prefers-reduced-motion: no-preference)`:

1. Inhalt blendet beim Laden auf, `opacity 0 → 1` über 400 ms. **Keine Verschiebung.**
2. Links: ohne Unterstreichung; bei `:hover` Unterstreichung mit
   `text-underline-offset: 3px`, Übergang 120 ms.

Sonst nichts.

## Verboten

Verläufe im Grund, Linien, Trennstriche, Rahmen, Kästen, Flächen hinter Inhalten,
Schatten, Animationen außer den beiden oben, Scroll-Effekte, Icons, Flaggen,
Monospace, Versalien, Fettung über 500, Blocksatz, Silbentrennung, Dark Mode,
JavaScript, Bilder außer dem Zeichen.

---

# Texte

Wörtlich. Nichts umformulieren.

## `/` — Startseite deutsch

Kopfzeile: Zeichen links, DE / EN rechts

**Henrik Asmus**
Student des Wirtschaftsingenieurwesens. Neugierig.

Arbeiten

**Lastannahmen**
Ethereum als fundamentale digitale Infrastruktur  ← zweite Zeile im Silberverlauf
Masterarbeit, Eigenverlag, Juli 2026, 324 Seiten

> Die Arbeit prüft Ethereum an zwölf Kriterien für fundamentale Infrastruktur, in
> zwei Zuständen: im heutigen, Stand März 2026, und in dem, der sich bei vollständig
> umgesetzter Roadmap ergäbe. Sie ist an keiner Hochschule eingereicht. Geschrieben
> für Entscheider in Unternehmen, Kapitalgeber, technische Architekten und Politik,
> nicht für die Szene.

Zur Arbeit → `/lastannahmen/`
PDF Deutsch → `/pdf/Lastannahmen.pdf`
PDF English → `/pdf/Load-Assumptions.pdf`

Kontakt

HenrikAsmus@proton.me

## `/en/` — Startseite englisch

Kopfzeile: Zeichen links, DE / EN rechts

**Henrik Asmus**
Industrial engineering student. Curious.

Work

**Load Assumptions**
Ethereum as Fundamental Digital Infrastructure  ← zweite Zeile im Silberverlauf
Master's thesis, self-published, July 2026, 299 pages

> The study examines Ethereum against twelve criteria for fundamental
> infrastructure, in two states: the current one, as of March 2026, and the one that
> would result from full implementation of the roadmap. It was not submitted to any
> university. Written for corporate decision-makers, capital allocators, technical
> architects and policy-makers, not for the crypto scene.

Read more → `/en/load-assumptions/`
PDF Deutsch → `/pdf/Lastannahmen.pdf`
PDF English → `/pdf/Load-Assumptions.pdf`

Contact

HenrikAsmus@proton.me

## Werkseiten

Aufbau beider Seiten identisch, gleiche Gestaltungsregeln:

1. Titel zweizeilig wie auf der Startseite, Zeile 2 in Silber
2. Metazeile
3. Was die Arbeit fragt (ein Absatz)
4. Wie sie prüft (ein Absatz)
5. Was herauskommt (ein Absatz)
6. Für wen sie geschrieben ist (zwei Sätze)
7. Beide PDFs
8. Rücklink zur Startseite

Fließtext wird nachgereicht.

---

# Eingetragen

- E-Mail: HenrikAsmus@proton.me
- Domain: loadassumptions.xyz
