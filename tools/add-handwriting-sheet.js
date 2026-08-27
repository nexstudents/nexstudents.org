/* Wires the manuscript alphabet in as a real worksheet.

   Paul, 2026-08-27, set the pricing rule while we were deciding this one:
   "everything preschool ... and kindergarten will be free. everything from
   first grade will have a few options free resources and more paid packs."
   So this sheet is Kindergarten and $0, and that is a rule, not a one-off. */
const fs = require("fs");
let n = 0;
const patch = (file, a, b) => {
  let s = fs.readFileSync(file, "utf8");
  if (!s.includes(a)) { console.error("MISS in " + file + ": " + a.slice(0, 60)); process.exitCode = 1; return; }
  fs.writeFileSync(file, s.replace(a, b), "utf8");
  n++;
};

/* ── 1. the sheet itself ─────────────────────────────────────────────────── */
patch("worksheets.js", "const SHEETS = [\n", `const SHEETS = [

/* ═══════════════════ 0. MANUSCRIPT ALPHABET (handwriting) ═══════════════════
   kind "handwriting" - the page is rendered from tools/handwriting/, which owns
   the 52 letterforms. build-worksheets.js delegates rather than duplicating
   them, so the printable and the review preview can never drift apart. */
{
  slug: "manuscript-alphabet", subject: "English", grade: "K",
  kind: "handwriting",
  title: "Manuscript Alphabet: Stroke Order and Direction",
  dek: "Every letter, capital and small, with arrows showing where each stroke starts and which way the pencil goes.",
  blurb: "All 52 letterforms with stroke-order arrows, then a faded copy of each to trace.",
  contains: [
    "All 26 letters, capital and small, on one page",
    "Arrows showing where every stroke starts and which way it travels",
    "A faded copy of each letter to trace over",
    "Ruled lines with a dashed midline, the way handwriting paper is ruled",
  ],
  unit: "Printable &middot; no answer key needed",
  price: "$0", buy: null, art: false, thumb: true,
},
`);

/* ── 2. build-worksheets renders it from the handwriting generator ───────── */
patch("build-worksheets.js",
  'const { navMarkup, navScript , modeBoot, faviconTags } = require("./nav.js");',
  'const { navMarkup, navScript , modeBoot, faviconTags } = require("./nav.js");\nconst HW = require("./handwriting/build-handwriting.js");');

patch("build-worksheets.js",
  '  const html = s.kind === "blank"      ? blankHtml(s)',
  `  const html = s.kind === "handwriting" ? handwritingHtml(s)
             : s.kind === "blank"      ? blankHtml(s)`);

patch("build-worksheets.js", "const written = [];\nfor (const s of SHEETS) {", `/* THE HANDWRITING SHEET. The letters come from tools/handwriting/, which is the
   single source for all 52 forms and for their stroke order - see the note at
   the top of that file. This function only supplies the page around them, so
   the sheet gets the same nav, the same canonical and the same print behaviour
   as every other printable. */
function handwritingHtml(s) {
  const subjectSlug = s.subject.toLowerCase();
  return \`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://nexstudents.org/worksheets/\${subjectSlug}/\${s.slug}/">
\${modeBoot()}
\${faviconTags()}
<title>\${s.title} — NexStudents</title>
<meta name="description" content="\${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=\${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=\${CSS_V}">
<style>\${HW.LETTER_CSS}</style>
</head>
<body>

\${navMarkup("w")}

<div class="bar">
  <a class="back" href="/\${subjectSlug}/worksheets/">&larr; \${s.subject} Worksheets</a>
</div>

<div class="sheet">

  <div class="head">
    <p class="eyebrow">\${s.subject} &middot; Kindergarten &middot; Handwriting</p>
    <h1>\${s.title}</h1>
    <p class="dek">\${s.dek}</p>
  </div>

  <div class="note">
    <p><b>How to use this sheet.</b> Print it at 100%, not "fit to page" - a shrunken
    letter teaches a shrunken hand. Work one letter at a time rather than one page at
    a time. Say the stroke out loud while your child traces it: "down, around, down
    again." And watch the pencil rather than the paper, because a letter that ends up
    looking right but was drawn upside down will fall apart as soon as they write at
    speed. That is what the arrows are for.</p>
  </div>

  \${HW.DEFS}
  <div class="hw">
    \${HW.wsRows()}
  </div>

  <p class="dek" style="margin-top:18px">Alphabetical order is not teaching order. Start with
  the letters made from straight lines &mdash; l, t, i, L, T, I, F, E, H &mdash; then the
  round ones &mdash; o, c, a, d, g, O, C, Q &mdash; and leave the diagonals &mdash; v, w, x,
  y, z, K, M, N &mdash; until last, because they are the hardest.</p>

</div>

\${navScript()}
</body>
</html>
\`;
}

const written = [];
for (const s of SHEETS) {`);

/* ── 3. Kindergarten sorts FIRST, and a numeric sort cannot do that ──────── */
patch("build-pages.js", `const liveGrades = () => [...new Set(
  LESSONS.map(l => l.grade).concat(WORKSHEETS.flatMap(w => w.grades))
)].sort((a, b) => a - b).map(String);`,
`/* ⚠️ Sorted against the real grade order, NOT numerically. "K" - 3 is NaN, and
   a comparator that returns NaN leaves the array in whatever order it happened
   to be in - which would then disagree with LIVE_GRADES and fail the build for
   no visible reason. */
const GRADE_ORDER = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];
const liveGrades = () => [...new Set(
  LESSONS.map(l => l.grade).concat(WORKSHEETS.flatMap(w => w.grades))
)].map(String).sort((a, b) => GRADE_ORDER.indexOf(a) - GRADE_ORDER.indexOf(b));`);

/* ── 4. the nav has to agree, or build-pages fails on purpose ────────────── */
patch("nav.js", 'const LIVE_GRADES = ["3", "6", "7", "8"];',
  'const LIVE_GRADES = ["K", "3", "6", "7", "8"];');

console.log("applied " + n + " of 6");
