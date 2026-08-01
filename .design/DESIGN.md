# NexStudents — Design System
**Last modified: 2026-08-01** · Documents what is built. Changes no pixels.

> **Why this file exists.** Every decision below previously lived only as a comment in
> `assets/site.css`. That meant the reasoning survived exactly as long as nobody edited without
> reading. This is the contract the site is held to.

The subject: a **free placement assessment for homeschool parents**. The audience is a parent,
usually mid-morning, deciding what to teach. The page's single job is to get a student into the
exam and to make the result trustworthy. Every choice below serves that or it should not be here.

---

## Colour

The palette is **warm**, taken from thethinkacademy.com at Paul's direction — the closest thing to
a competitor doing this well. Cream rather than cool white, orange rather than blue, soft charcoal
rather than black.

| Token | Value | Job |
|---|---|---|
| `--bg` | `#fdf7f1` | Warm cream ground |
| `--bg-2` | `#ffffff` | Cards, raised surfaces |
| `--bg-3` | `#f7ebe0` | Recessed bands — final CTA, footer |
| `--fg` | `#2b2a2e` | Soft charcoal. **Never pure black** |
| `--muted` | `#6d6157` | Warm grey — 5.5:1 on cream |
| `--line` / `--line-2` | `#eeddcf` / `#ddc6b2` | Hairlines, borders |
| `--accent` | `#e2560a` | **ACTIONS** — 4.6:1 on cream |
| `--accent-2` | `#0a6fb4` | **INFORMATION** — 4.6:1 on cream |

### 🚨 The one rule that governs every colour decision
**ORANGE IS FOR ACTIONS. BLUE IS FOR INFORMATION.**
Buttons, the selected answer option, the hero ring, the live-status dot → orange.
Icon tiles, list bullets, section kickers, the exam progress bar, the verdict rail → blue.
**Do not swap these roles.** The moment both mean "look here", the page stops telling the reader
where to click. This was applied to the landing page first and the exam page missed it, which Paul
caught — the exam's progress bar and instruction bullets were orange, i.e. the page was inviting
clicks on things you cannot click.

### Contrast floors are not negotiable
Both accents are deliberately **darker than their sources**. Think Academy's orange is `#ff5c00`
(2.9:1 on cream, fails). Orange's true complement is `#0a8ee2` (3.2:1, fails). Both were pulled
down to **4.6:1** while holding hue. The exam's original status green `#3ecf8e` failed on cream and
is now `#2f9e69`.
**Any new colour must clear 4.5:1 against `--bg` before it ships.**

### Deriving glows
`--accent-rgb` and `--accent-2-rgb` exist so `rgba()` shadows and tints derive from the accent
instead of being hardcoded. Eight hardcoded NexEdge reds once survived a rebrand this way and made
the status dot pulse pink. **Never hardcode an accent channel value.**

---

## Type

One family — the system stack — carrying everything, differentiated by **weight and tracking**
rather than by mixing faces. Deliberate: a second webfont is a network request, and the site ships
no external requests of any kind.

| Role | Size | Weight | Tracking |
|---|---|---|---|
| Hero `h1` | `clamp(2.7rem, 8.8vw, 5.8rem)` | 900 | `-.045em`, **uppercase** |
| Section `.h2` | `clamp(1.7rem, 4.4vw, 2.6rem)` | 900 | `-.035em` |
| `.lede` | `clamp(1.02rem, 2.1vw, 1.18rem)` | 400 | — |
| `.flip` (the turn) | `clamp(1.04rem, 2.2vw, 1.26rem)` | 700 | — |
| Card `h3` | `1.14–1.22rem` | 700 | `-.02em` |
| `.kicker` | `11px` | 700 | `.2em`, uppercase, **blue** |
| Passage body | `17px / 1.75`, `max-width:64ch` | 400 | — |

**The heavy negative tracking at display sizes is the personality.** 900 weight at `-.045em` is
what stops the system stack reading as an unstyled default.

---

## Layout

- Container `--max: 1180px`, gutter `--gutter: 30px`.
  ⚠️ **The 30px gutter is load-bearing** — it is what stops `overflow-x:hidden` slicing the hero
  ring. Do not shrink it to solve a mobile fit; shrink the nav's own padding instead.
- **Bento grid** for the explanatory section: 12 columns, cells spanning 8/4/4/8 so the row rhythm
  is asymmetric rather than a uniform card wall.
- Radii: `999px` pills, `24px` cards, `16px` icon tiles. Round and soft throughout — this is a
  children's-education brand, not a tech product.
- Breakpoint **880px**: inline tabs hide, burger appears. `.burger` and `.tabs` must stay in sync.

### The exam column
`760px` max-width, and the footer explicitly opts back out to `--max`. **The passage gets the room,
not the answers** — it was once trapped in a 300px inner scroll box while four options filled the
screen, which is backwards. Never put a passage in a fixed-height scroll box.

### The mobile drawer
`330px` — 77% of a 430px phone, so the page stays visible behind it.
⚠️ **Deliberately diverges from the NexEdge sheet**, which uses 600px and `clamp(1.4rem, 4.4vw,
1.95rem)` links. On a phone that cap never binds and the drawer becomes the whole screen. Do not
port it back.

---

## Signature

**The hand-drawn ring** around a single word in the hero — currently "places" in *A placement test
that actually places*. Inherited from nexedgestudios.com, and the one element tying the two brands
together visually.

Two rules:
1. **It measures its own path** via `getTotalLength()`. A hardcoded `stroke-dasharray` leaves the
   circle visibly unfinished.
2. **Ring one or two short words, never a phrase.** It first wrapped "actually places", which filled
   an entire line and swallowed half the headline.

---

## Relationship to nexedgestudios.com

Same stylesheet, structure and type scale — **copied, not shared**. There is no build step and no
CDN by design, so the two are separate files. A structural fix in one must be ported by hand.

What differs, and why:

| | NexEdge Tech | NexStudents |
|---|---|---|
| Ground | Near-black `#0b0d12` | Warm cream `#fdf7f1` |
| Accent | Red `#ee2b39` | Orange `#e2560a` + blue `#0a6fb4` |
| Drawer | 600px | 330px |
| Reads as | Gear / gaming | Children's education |

⚠️ **Known brand risk, unresolved:** NexEdge red and NexStudents orange are neighbouring hues. Side
by side they may read as one brand rather than two siblings. Flagged to Paul 2026-08-01; his call.

---

## Quality floor

Non-negotiable on every page: responsive to 320px · visible keyboard focus · `prefers-reduced-motion`
respected (`.reveal` and the drawer both honour it) · no external requests, ever · every internal
link resolves to a real file — **no placeholder URLs**, which is why Games and Resources are real
pages saying plainly that nothing is there yet.

---

## Voice

Plain, specific, and willing to say what the product does not do. The "What this does not do"
section refusing to invent a percentile is **not modesty, it is the differentiator** — it is the
one thing the paid competitors will not say. Errors and empty states explain and invite; they do
not apologise. Buttons name the action that happens: *Start the exam*, not *Submit*.
