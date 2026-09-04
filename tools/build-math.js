/* Renders every entry in math-lessons.js into /lessons/<id>/index.html.

   A math lesson is its own template, not the history one. Paul, 2026-08-26:
   "math is about showing your work not about just reading." So the page is a
   division bracket he types into, with the worked example narrated step by
   step. The history template stays untouched.

   The practice problems are GENERATED in the page from a spec, not listed, so
   the same five never come back. What this build does is prove the spec can
   actually produce enough distinct problems before the page ships.

   Usage:  node tools/build-math.js .
*/
const fs = require("fs");
const path = require("path");
const { MATH } = require("./math-lessons.js");
/* Same nav as every other page. Paul, 2026-08-26: a lesson with no way back
   into the site is what stops it feeling like a website. */
const { navMarkup, navScript, modeBoot, faviconTags, lessonHead } = require("./nav.js");
/* The shared field, arrow and key-panel rules. Maths keeps its own stepping
   engine - a step here drives the division animation, not just narration - but
   the CHROME is identical to every other lesson. Paul, 2026-08-29. */
const player = require("./voice-player.js");
/* One source for the narration, shared with tools/bake-voice.js so the words
   on the page and the words in the audio cannot drift apart. */
const { captions, solve } = require("./math-captions.js");
const { requireTodo } = require("./lesson-instructions.js");

const ROOT = process.argv[2] || ".";
/* ONE back-link rule for every lesson generator - see lesson-back.js. These
   templates used to hardcode /maths/ and /english/, so a single-grade lesson
   sent the student to a subject root instead of the shelf they came from. */
const { backFor } = require("./lesson-back.js");
const TPL = path.join(__dirname, "math", "template.html");
const template = fs.readFileSync(TPL, "utf8");

/* The five colour palettes are DEFINED in the history template and lifted from
   it here, so the two lesson types can never drift apart on colour. Paul,
   2026-08-26: "maybe you can also add the theme color like history". */
function themesBlock() {
  const src = fs.readFileSync(path.join(__dirname, "lesson-template.html"), "utf8");
  const a = src.indexOf("var THEMES = {");
  const b = src.indexOf("\n};", a);
  if (a < 0 || b < 0) fail("could not lift THEMES out of lesson-template.html");
  const block = src.slice(a, b + 3);
  for (const key of ["forest", "ocean", "ember", "graphite"]) {
    if (!block.includes(key + ":")) fail("THEMES block is missing " + key);
  }
  return block;
}

/* The bracket layout always needs the quotient to fill the top row exactly.
   A remainder is fine ONLY when the lesson's practice spec says allowRemainder
   - that guard exists so a lesson cannot silently ship a problem nobody
   designed the narration or the grid for. Do not delete it; add the flag to
   the lesson instead, the way long-division-remainders does. */
function check(dividend, divisor, where, allowRemainder) {
  const q = Math.floor(dividend / divisor);
  if (!allowRemainder && dividend % divisor !== 0) fail(where + ": " + dividend + " / " + divisor + " leaves a remainder");
  if (String(q).length !== String(dividend).length) fail(where + ": " + dividend + " / " + divisor + " does not fill the top row");
}
function fail(msg) { console.error("FAIL: " + msg); process.exit(1); }

/* ⚠️ The closing instructions SAY how many problems there are ("Do all five").
   Change practice.count and that sentence quietly becomes a lie, which is worse
   than saying nothing at all: the student stops when the voice says to stop.
   Checked in words, because that is how it gets spoken. */
const COUNT_WORDS = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
                     "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
                     "eighteen","nineteen","twenty"];
function checkTodoCount(L) {
  requireTodo(L, L.id);
  const n = L.practice && L.practice.count;
  if (!n) fail(L.id + ": no practice.count to check the instructions against");
  const word = COUNT_WORDS[n];
  const said = L.todo.s.join(" ").toLowerCase();
  if (!word || (!said.includes(word) && !said.includes(String(n)))) {
    fail(L.id + ": the instructions never say how many problems there are. practice.count is " +
         n + ', so they need to say "' + word + '" (or "' + n + '") somewhere.');
  }
}

/* Every problem the spec can ever produce, enumerated. Cheap at these sizes,
   and it means an impossible or thin spec fails here rather than on a page
   that quietly shows the same problem twice. */
function poolFor(spec) {
  const lo = Math.pow(10, spec.digits - 1), hi = Math.pow(10, spec.digits) - 1;
  const pool = [];
  for (const divisor of spec.divisors) {
    for (let q = lo; q <= hi; q++) {
      if (!spec.allowZeroDigit && String(q).indexOf("0") >= 0) continue;
      if (spec.allowRemainder) {
        /* Every nonzero remainder the divisor allows - never 0, that would be
           a clean-division problem sneaking into a remainder lesson. */
        for (let r = 1; r < divisor; r++) {
          const dividend = q * divisor + r;
          if (String(dividend).length !== spec.digits) continue;
          if (String(Math.floor(dividend / divisor)).length !== spec.digits) continue;
          pool.push({ dividend, divisor });
        }
      } else {
        const dividend = q * divisor;
        if (String(dividend).length !== spec.digits) continue;
        pool.push({ dividend, divisor });
      }
    }
  }
  return pool;
}

const written = [];
for (const L of MATH) {
  checkTodoCount(L);
  check(L.demo.dividend, L.demo.divisor, L.slug + " demo", L.practice.allowRemainder);

  const pool = poolFor(L.practice);
  if (pool.length < L.practice.count * 4) {
    fail(L.slug + ": the practice spec yields only " + pool.length +
         " problems, too few for a set of " + L.practice.count);
  }
  pool.forEach(p => check(p.dividend, p.divisor, L.slug + " pool", L.practice.allowRemainder));

  let h = template
    .replace(/__BACKHREF__/g, backFor(L, L.id.split("/")[0], ROOT, L.id).href)
    .replace(/__BACKLABEL__/g, backFor(L, L.id.split("/")[0], ROOT, L.id).label)
    .replace(/__TITLE__/g, L.title)
    .replace(/__DEK__/g, L.dek)
    .replace(/__ID__/g, L.id)
    .replace("__DEMO__", JSON.stringify(L.demo))
    .replace("__CAPTIONS__", JSON.stringify(captions(solve(L.demo.dividend, L.demo.divisor), L)))
    .replace("__SPEC__", JSON.stringify(L.practice))
    .replace("__THEMES__", themesBlock)
    .replace("__PLAYER_CSS__", player.playerCss)
    .replace("__FIELD_CSS__", player.fieldCss)
    .replace("__PLAYER_MARKUP__", player.playerMarkup)
    .replace("__PLAYER_JS__", player.playerScript)
    /* Canonical, share card and breadcrumb come from nav.js so all four
       lesson generators emit the same head. backFor() is the SAME call the
       back link uses, so the breadcrumb and the visible link agree. */
    .replace("__CANONICAL__", () => lessonHead({
      id: L.id, title: L.title, desc: L.dek,
      backLabel: backFor(L, L.id.split("/")[0], ROOT, L.id).label,
      backHref: backFor(L, L.id.split("/")[0], ROOT, L.id).href,
    }))
    .replace("__MODEBOOT__", modeBoot)
    .replace("__FAVICON__", faviconTags)
    .replace("__NAV__", () => navMarkup(null, "navbtn"))
    .replace("__NAVSCRIPT__", navScript);

  for (const slot of ["__DEMO__", "__CAPTIONS__", "__SPEC__", "__TITLE__", "__THEMES__", "__FIELD_CSS__", "__PLAYER_CSS__", "__PLAYER_MARKUP__", "__PLAYER_JS__", "__NAV__", "__NAVSCRIPT__", "__CANONICAL__", "__MODEBOOT__", "__FAVICON__"]) {
    if (h.includes(slot)) fail("unfilled slot " + slot + " in " + L.slug);
  }

  const dir = path.join(ROOT, "lessons", ...L.id.split("/"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h, "utf8");
  written.push({ id: L.id, poolSize: pool.length, perSet: L.practice.count });
}
console.log(JSON.stringify(written, null, 1));
