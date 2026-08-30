#!/usr/bin/env node
/* Renders every entry in integers-lessons.js into /lessons/<id>/index.html.
 *
 *   node tools/build-integers.js .
 *
 * ⭐ WHY THIS IS NOT build-math.js.
 *
 * build-math.js is a LONG DIVISION builder. Its bracket, its guards and its
 * captions are all division, and the project CLAUDE.md already says the next
 * arithmetic type gets a sibling rather than a bent version of that one. An
 * integers problem is a single line with one or two answer boxes, which has
 * nothing in common with a division bracket beyond both being maths.
 *
 * ⭐ WHY IT IS NOT build-english.js EITHER, despite the shape being borrowed.
 *
 * The DATA shape here is deliberately the English one - ground, rule, parts,
 * todo - because a sign rule is a rule the way a grammar rule is: useless
 * until applied to a problem never seen before. But English practice is
 * "click the word in the sentence" and this is "type a number", so the
 * practice engine is its own.
 *
 * ⭐ THE PROBLEMS ARE GENERATED, NOT LISTED.
 *
 * Same principle as build-math.js. Paul, 2026-08-26: "retesting yourself with
 * the same questions doesn't help improve." The page rolls its own set from
 * `practice`, seeded by the date, so it holds still all day and changes
 * tomorrow. What this build does is prove the spec can actually produce
 * enough distinct problems, and that every sign combination it promises
 * actually appears, before the page ships.
 *
 * ⭐ THE GUARDS.
 *
 * verifyGround   the teaching half for the parent, which is the entire reason
 *                this exists rather than a workbook page
 * verifyRule     a rule stated loosely is the failure mode of the whole
 *                rules-first approach, so the short rule must carry the
 *                conditional and must NOT contain the folk version
 * poolFor        every problem the spec can produce, enumerated, so a thin or
 *                impossible spec fails here rather than on a live page
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { INTEGERS } = require("./integers-lessons.js");
const { navMarkup, navScript, modeBoot, faviconTags } = require("./nav.js");
const { partsFor, requireTodo } = require("./lesson-instructions.js");
/* 🚨 ONE PLAYER, EVERY LESSON TYPE. Sliced out of lesson-template.html so
   history, maths, English and this all run the identical engine. Paul,
   2026-08-29: "this is the standard for all future lessons we will have on
   the entire site." */
const player = require("./voice-player.js");

const ROOT = process.argv[2] || ".";
const TPL = path.join(__dirname, "integers", "template.html");
const template = fs.readFileSync(TPL, "utf8");

function fail(msg) { console.error("FAIL: " + msg); process.exit(1); }

/* The five palettes are DEFINED in the history template and lifted from it,
   so no lesson type can drift on colour. Same as build-math and
   build-english: one source of truth, several readers. */
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

/* ── guards ─────────────────────────────────────────────────────────────── */

function verifyGround(L) {
  const g = L.ground || {};
  for (const k of ["whatItIs", "whyItMatters", "commonMistake"]) {
    if (!g[k] || g[k].length < 60)
      fail(L.slug + ": ground." + k + " is missing or too thin. This block is the reason the " +
           "lesson exists - a workbook already has the exercises.");
  }
  if (!Array.isArray(g.whenStuck) || g.whenStuck.length < 2)
    fail(L.slug + ': ground.whenStuck needs at least two things to actually SAY, not "review the material"');
}

/* 🚨 THE RULE GUARD IS THE POINT OF THE RULES-FIRST APPROACH.
   Paul chose rules-first on 2026-08-30 for speed. The way that approach fails
   is a rule stated loosely enough to be wrong: "two negatives make a positive"
   is false for addition, and it is the single most common wrong thing a
   student is told. So the short rule has to carry a real conditional, and the
   folk version must not appear in it. */
const FOLK = [
  /two\s+negatives?\s+(make|makes|equals?)\s+a?\s*positive/i,
  /two\s+minus(es)?\s+(make|makes)\s+a?\s*plus/i,
];
function verifyRule(L) {
  const r = L.rule || {};
  if (!r.short || r.short.length < 40)
    fail(L.slug + ": rule.short is missing or too short to be a usable rule");
  if (!r.long || r.long.length < 120) fail(L.slug + ": rule.long is missing or too thin");
  if (!r.test || r.test.length < 60)
    fail(L.slug + ": rule.test is missing. Every lesson carries a test the student can run alone.");
  for (const re of FOLK) {
    if (re.test(r.short))
      fail(L.slug + ': rule.short contains the folk version of the sign rule ("two negatives make a ' +
           'positive"). It is FALSE for addition - -3 + (-5) is -8 - and shipping it is the one way ' +
           'the fast route goes wrong. State the full conditional instead.');
  }
  /* The short rule has to actually distinguish the cases, or it is a slogan.
     Both lessons key off either matching signs or the keep-change-change
     conversion, so one of those words has to be in there. */
  if (!/sign|keep|change|opposite/i.test(r.short))
    fail(L.slug + ": rule.short never mentions signs or the conversion, so it does not tell a " +
         "student which case they are in.");
}

function verifyTable(L) {
  const t = L.signTable;
  if (!t || !Array.isArray(t.rows) || t.rows.length < 2)
    fail(L.slug + ": signTable needs at least two rows - the chart is half the lesson");
  if (!Array.isArray(t.head) || !t.head.length) fail(L.slug + ": signTable needs a head row");
  t.rows.forEach((r, i) => {
    if (!Array.isArray(r) || r.length !== t.head.length)
      fail(L.slug + ": signTable row " + i + " has " + (r || []).length + " cells but the head has " +
           t.head.length);
  });
}

/* ⚠️ The closing instructions SAY how many problems there are. Change
   practice.count and that sentence quietly becomes a lie, which is worse than
   saying nothing: the student stops when the page says to stop. Same check
   build-math.js runs, and for the same reason. */
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

/* ── the problem pool ───────────────────────────────────────────────────── */
/* Every problem the spec can produce, enumerated. Cheap at these sizes, and
   it means a spec that cannot fill a page, or that silently never produces
   one of the sign combinations it promises, fails here rather than on a page
   a student is already looking at. */
const SIGNS = {
  pp: [ 1,  1],
  nn: [-1, -1],
  pn: [ 1, -1],
  np: [-1,  1],
};
function poolFor(spec) {
  const out = [];
  for (const key of spec.mix) {
    const s = SIGNS[key];
    if (!s) fail("unknown sign combination in mix: " + key);
    for (let a = 1; a <= spec.max; a++) {
      for (let b = 1; b <= spec.max; b++) {
        const x = a * s[0], y = b * s[1];
        /* An answer of exactly 0 is a real case but a poor practice item: it
           hides a sign error, because 0 has no sign to get wrong. */
        if (spec.kind === "add" && x + y === 0) continue;
        if (spec.kind === "subtract" && x - y === 0) continue;
        out.push({ a: x, b: y, mix: key });
      }
    }
  }
  return out;
}

/* ── rendering ──────────────────────────────────────────────────────────── */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function groundHtml(g) {
  return [
    '<h4>What it is</h4><p>' + g.whatItIs + '</p>',
    '<h4>Why it matters</h4><p>' + g.whyItMatters + '</p>',
    '<h4>What they will get wrong</h4><p>' + g.commonMistake + '</p>',
    '<h4>What to say when they are stuck</h4><ul>' +
      g.whenStuck.map((s) => "<li>" + s + "</li>").join("") + '</ul>'
  ].join("\n");
}

function partsHtml(parts) {
  return parts.map((p) =>
    '<div class="part">\n  <h3>' + esc(p.title) + '</h3>\n' +
    p.s.map((line) => "  <p>" + esc(line) + "</p>").join("\n") +
    "\n</div>"
  ).join("\n");
}

function tableHtml(t) {
  return '<table class="signs"><caption>' + esc(t.caption) + '</caption>\n<thead><tr>' +
    t.head.map((h) => "<th>" + esc(h) + "</th>").join("") + "</tr></thead>\n<tbody>" +
    t.rows.map((r) => "<tr>" + r.map((c) => "<td>" + esc(c) + "</td>").join("") + "</tr>").join("\n") +
    "</tbody></table>";
}

/* One static number line, drawn as inline SVG so it needs no library and
   prints. It illustrates the rule ONCE - the fast route earns its speed by
   not making a student draw fifteen of them. Colours come from the palette
   via currentColor and the accent variable, so it re-themes with the page. */
function numberLineSvg(nl) {
  if (!nl) return "";
  const W = 640, H = 96, pad = 26;
  const span = nl.to - nl.from;
  const x = (v) => pad + ((v - nl.from) / span) * (W - pad * 2);
  const axisY = 62;
  const ticks = [];
  for (let v = nl.from; v <= nl.to; v++) {
    const isZero = v === 0;
    ticks.push('<line x1="' + x(v).toFixed(1) + '" y1="' + (axisY - (isZero ? 9 : 5)) +
      '" x2="' + x(v).toFixed(1) + '" y2="' + (axisY + (isZero ? 9 : 5)) +
      '" stroke="currentColor" stroke-width="' + (isZero ? 2 : 1) + '"/>');
    if (isZero || v === nl.from || v === nl.to || v === nl.start || v === nl.start + nl.move) {
      ticks.push('<text x="' + x(v).toFixed(1) + '" y="' + (axisY + 26) +
        '" text-anchor="middle" font-size="12" fill="currentColor">' + v + "</text>");
    }
  }
  const x1 = x(nl.start), x2 = x(nl.start + nl.move);
  const arrow =
    '<path d="M ' + x1.toFixed(1) + ' 30 L ' + x2.toFixed(1) + ' 30" stroke="var(--a)" ' +
      'stroke-width="2.5" fill="none" marker-end="url(#nlarrow)"/>' +
    '<circle cx="' + x1.toFixed(1) + '" cy="' + axisY + '" r="4.5" fill="var(--a)"/>' +
    '<text x="' + ((x1 + x2) / 2).toFixed(1) + '" y="20" text-anchor="middle" font-size="12.5" ' +
      'fill="var(--a)">' + (nl.move >= 0 ? "+" : "") + nl.move + "</text>";
  return '<figure class="nl"><svg viewBox="0 0 ' + W + " " + H + '" role="img" ' +
    'aria-label="' + esc(nl.caption) + '">' +
    '<defs><marker id="nlarrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" ' +
      'markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--a)"/></marker></defs>' +
    '<line x1="' + pad + '" y1="' + axisY + '" x2="' + (W - pad) + '" y2="' + axisY +
      '" stroke="currentColor" stroke-width="1.5"/>' +
    ticks.join("") + arrow +
    "</svg><figcaption>" + esc(nl.caption) + "</figcaption></figure>";
}

const written = [];
for (const L of INTEGERS) {
  verifyGround(L);
  verifyRule(L);
  verifyTable(L);
  checkTodoCount(L);

  const pool = poolFor(L.practice);
  if (pool.length < L.practice.count * 4) {
    fail(L.slug + ": the practice spec yields only " + pool.length +
         " problems, too few for a set of " + L.practice.count);
  }
  /* Every combination the mix promises has to be reachable. A mix listing
     four cases where one produces nothing would quietly teach three. */
  for (const key of L.practice.mix) {
    if (!pool.some((p) => p.mix === key))
      fail(L.slug + ": the mix lists " + key + " but the spec produces none of them");
  }

  let h = template
    .replace(/__TITLE__/g, L.title)
    .replace(/__DEK__/g, L.dek)
    .replace(/__ID__/g, L.id)
    .replace("__GROUND__", groundHtml(L.ground))
    .replace("__RULE_SHORT__", L.rule.short)
    .replace("__RULE_LONG__", L.rule.long)
    .replace("__RULE_TEST__", '<p class="ruletest"><b>Run this test.</b> ' + L.rule.test + "</p>")
    .replace("__SIGN_TABLE__", tableHtml(L.signTable))
    .replace("__NUMBER_LINE__", numberLineSvg(L.numberLine))
    .replace("__PARTS_HTML__", partsHtml(L.parts))
    .replace("__PRACTICE_NOTE__", L.practiceNote ||
      (L.practice.count + " problems, and they change every day. A wrong answer tells you which " +
       "rule to look at and lets you try again, so nothing here counts against you."))
    .replace("__PARTS__", JSON.stringify(partsFor(L)))
    .replace("__SPEC__", JSON.stringify(L.practice))
    .replace("__THEMES__", themesBlock)
    .replace("__PLAYER_CSS__", player.playerCss)
    .replace("__FIELD_CSS__", player.fieldCss)
    .replace("__PLAYER_MARKUP__", player.playerMarkup)
    .replace("__PLAYER_JS__", player.playerScript)
    .replace("__CANONICAL__", '<link rel="canonical" href="https://nexstudents.org/lessons/' + L.id + '/">')
    .replace("__MODEBOOT__", modeBoot)
    .replace("__FAVICON__", faviconTags)
    .replace("__NAV__", () => navMarkup(null, "navbtn"))
    .replace("__NAVSCRIPT__", navScript);

  for (const slot of ["__TITLE__", "__DEK__", "__ID__", "__GROUND__", "__RULE_SHORT__",
                      "__RULE_LONG__", "__RULE_TEST__", "__SIGN_TABLE__", "__NUMBER_LINE__",
                      "__PARTS_HTML__", "__PRACTICE_NOTE__", "__PARTS__", "__SPEC__",
                      "__THEMES__", "__PLAYER_CSS__", "__FIELD_CSS__", "__PLAYER_MARKUP__",
                      "__PLAYER_JS__", "__CANONICAL__", "__MODEBOOT__", "__FAVICON__",
                      "__NAV__", "__NAVSCRIPT__"]) {
    if (h.includes(slot)) fail("unfilled slot " + slot + " in " + L.slug);
  }

  const dir = path.join(ROOT, "lessons", ...L.id.split("/"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h, "utf8");

  const spread = pool.reduce((m, p) => { m[p.mix] = (m[p.mix] || 0) + 1; return m; }, {});
  written.push({ id: L.id, parts: L.parts.length, poolSize: pool.length,
                 perSet: L.practice.count, spread });
}
console.log(JSON.stringify(written, null, 1));
