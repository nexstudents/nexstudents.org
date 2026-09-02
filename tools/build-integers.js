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
 * The DATA shape here is deliberately the English one - ground, rule, todo -
 * because a sign rule is a rule the way a grammar rule is: useless until
 * applied to a problem never seen before. But English practice is "click the
 * word in the sentence" and this is "type a number", so the practice engine
 * is its own.
 *
 * ⭐ THE LESSON IS A WALKTHROUGH, NOT PROSE.
 *
 * Paul, 2026-08-30: *"i think you doubled up the sign part of the number and
 * the lesson"*, then *"i just want you to consolidate the reading and what he
 * needs to do"* and *"i would of also like you to do the same thing where you
 * would show how to do it kind of like the way we did with the long
 * divisions."* The first version stated the rule three times before the
 * student did anything. Now it is stated once in `rule`, summarised once in
 * `signTable`, and DEMONSTRATED by integer-captions.js stepping through two
 * worked examples while the number line draws. There is no prose section
 * restating it, and verifyNoProse() below refuses to build one back in.
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
const { requireTodo } = require("./lesson-instructions.js");
/* The walkthrough, shared with tools/bake-voice.js so the words on the page
   and the words in the audio come from one place. */
const { captions, solve } = require("./integer-captions.js");
/* 🚨 ONE PLAYER, EVERY LESSON TYPE. Sliced out of lesson-template.html so
   history, maths, English and this all run the identical engine. Paul,
   2026-08-29: "this is the standard for all future lessons we will have on
   the entire site." */
const player = require("./voice-player.js");

const ROOT = process.argv[2] || ".";
/* ONE back-link rule for every lesson generator - see lesson-back.js. These
   templates used to hardcode /maths/ and /english/, so a single-grade lesson
   sent the student to a subject root instead of the shelf they came from. */
const { backFor } = require("./lesson-back.js");
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
  /* 🚨 NO `long`. The rule is a reference card inside Teacher Notes, not a
     second lesson above the walkthrough - Paul, 2026-08-30. A long version
     would be the third time the student is told the same thing in prose. */
  if (r.long)
    fail(L.slug + ": rule.long is not used any more. The teaching happens once, in the walkthrough; " +
         "the stated rule lives in Teacher Notes. Fold anything worth keeping into ground.whatItIs.");
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
    /* ⚠️ Table cells are escaped on the way out, so an HTML entity in the data
       ships as literal "&minus;" on the page. Shipped exactly that once. */
    r.forEach((c) => {
      if (/&[a-z]+;|&#\d+;/i.test(String(c)))
        fail(L.slug + ': signTable row ' + i + ' contains an HTML entity ("' + c + '"). Cells are ' +
             'escaped when rendered, so it would print literally. Use a plain character.');
    });
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
/* The magnitudes a tier allows for each side. `aRound` is a fixed short list
   (10, 15, 20 …) so the "bigger" tier still reads as a friendly sum rather
   than 41 + (-40). */
function magnitudes(tier, side) {
  const round = side === "a" ? tier.aRound : tier.bRound;
  if (round) return round.slice();
  const max = side === "a" ? tier.aMax : tier.bMax;
  if (!max) fail("a tier has neither " + side + "Round nor " + side + "Max");
  return Array.from({ length: max }, (_, i) => i + 1);
}

function poolFor(spec, tier) {
  const out = [];
  const As = magnitudes(tier, "a"), Bs = magnitudes(tier, "b");
  for (const key of spec.mix) {
    const s = SIGNS[key];
    if (!s) fail("unknown sign combination in mix: " + key);
    for (const a of As) {
      for (const b of Bs) {
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

/* 🚨 THE RULE LIVES IN HERE, NOT ON THE PAGE.
   Paul, 2026-08-30: the rule box was "over shadowing the walk through
   considering you have teacher notes and then the walk through", and he
   settled what each block is for - *"the teacher notes is the explaination
   for the techer to help and the walk through is for the student."* Then,
   on where it should go: *"no dont move it but add it with the techer
   notes."* So the student meets the idea ONCE, in the walkthrough, and the
   stated rule is part of what the teacher opens up. */
function groundHtml(g, rule) {
  return [
    '<h4>The rule</h4><p class="grule">' + rule.short + '</p>',
    '<h4>What it is</h4><p>' + g.whatItIs + '</p>',
    '<h4>Why it matters</h4><p>' + g.whyItMatters + '</p>',
    '<h4>What they will get wrong</h4><p>' + g.commonMistake + '</p>',
    '<h4>How to check an answer</h4><p>' + rule.test + '</p>',
    '<h4>What to say when they are stuck</h4><ul>' +
      g.whenStuck.map((s) => "<li>" + s + "</li>").join("") + '</ul>'
  ].join("\n");
}

/* 🚨 NO PROSE SECTION. Paul, 2026-08-30, on the first version: "i think you
   doubled up the sign part of the number and the lesson." The rule box and
   the sign chart already state it; a `parts` block would be the third telling
   and is exactly what he asked to be removed. The build refuses one rather
   than trusting a future session to remember. */
function verifyNoProse(L) {
  if (L.parts)
    fail(L.slug + ": this lesson type has no `parts` block. The rule is stated once in `rule`, " +
         "summarised once in `signTable` and demonstrated by `demo`. A prose section would be the " +
         "third telling of the same rule, which is what Paul asked to be removed on 2026-08-30.");
}

function verifyDemo(L) {
  if (!Array.isArray(L.demo) || L.demo.length < 2)
    fail(L.slug + ": needs at least two worked examples in `demo`, one per case the rule covers");
  L.demo.forEach((d, i) => {
    if (typeof d.a !== "number" || typeof d.b !== "number")
      fail(L.slug + ": demo[" + i + "] needs numeric a and b");
    const ans = L.practice.kind === "subtract" ? d.a - d.b : d.a + d.b;
    /* Zero has no sign, so a worked example landing on it demonstrates
       nothing about the one thing this lesson teaches. */
    if (ans === 0) fail(L.slug + ": demo[" + i + "] comes to zero, which shows no sign behaviour");
  });
  /* Both cases have to be shown. An adding lesson whose two examples are both
     same-sign teaches half the rule and looks complete. */
  const kinds = new Set(L.demo.map((d) => {
    const b = L.practice.kind === "subtract" ? -d.b : d.b;
    return (d.a < 0) === (b < 0) ? "same" : "different";
  }));
  if (kinds.size < 2)
    fail(L.slug + ": both worked examples are the " + [...kinds][0] + "-sign case. Show one of each, " +
         "or the walkthrough demonstrates half the rule.");
}

function tableHtml(t) {
  return '<table class="signs"><caption>' + esc(t.caption) + '</caption>\n<thead><tr>' +
    t.head.map((h) => "<th>" + esc(h) + "</th>").join("") + "</tr></thead>\n<tbody>" +
    t.rows.map((r) => "<tr>" + r.map((c) => "<td>" + esc(c) + "</td>").join("") + "</tr>").join("\n") +
    "</tbody></table>";
}

/* ⚠️ THE NUMBER LINE IS NO LONGER DRAWN HERE. It used to be a static SVG
   baked in beside the prose, which meant the page showed a finished jump the
   student had not been walked through - one more thing saying the same rule.
   It is drawn in the page now, by the demo, one step at a time as the
   narration reaches it. Same division of labour as the long division bracket:
   the data says WHAT to draw, the page draws it when the voice gets there. */

const written = [];
for (const L of INTEGERS) {
  verifyGround(L);
  verifyRule(L);
  verifyTable(L);
  verifyNoProse(L);
  verifyDemo(L);
  checkTodoCount(L);

  /* EVERY TIER is checked on its own. Checking the tiers pooled together
     would hide a thin one: the single-digit tier is far smaller than the
     others, and it is the one that fills most of the page. */
  const tiers = L.practice.tiers;
  if (!Array.isArray(tiers) || !tiers.length) fail(L.slug + ": practice needs a `tiers` list");
  const dealt = tiers.reduce((n, t) => n + t.n, 0);
  if (dealt !== L.practice.count)
    fail(L.slug + ": the tiers deal " + dealt + " problems but practice.count is " +
         L.practice.count + ". Those have to agree or the page comes up short.");

  let pool = [];
  tiers.forEach((t, ti) => {
    const p = poolFor(L.practice, t);
    if (p.length < t.n * 4)
      fail(L.slug + ": tier " + ti + " yields only " + p.length + " problems, too few to deal " +
           t.n + " distinct ones from");
    /* Every combination the mix promises has to be reachable IN EVERY TIER.
       A tier that cannot produce one of them quietly teaches three. */
    for (const key of L.practice.mix) {
      if (!p.some((q) => q.mix === key))
        fail(L.slug + ": tier " + ti + " produces no " + key + " problems, but the mix lists it");
    }
    pool = pool.concat(p);
  });

  /* 🚨 THE FIRST TIER HAS TO MATCH THE WALKTHROUGH. Paul, 2026-08-30: "your
     wlk through was only single digits so why would you make the questions
     not the same?" The demo teaches with single digits, so the questions have
     to start there rather than opening on 41 + (-40). */
  const demoMax = Math.max(...L.demo.flatMap((d) => [Math.abs(d.a), Math.abs(d.b)]));
  const tier0 = tiers[0];
  const tier0Max = Math.max(...magnitudes(tier0, "a"), ...magnitudes(tier0, "b"));
  /* Compared by SIZE CLASS, not exact value. A demo topping out at 8 against
     a first tier reaching 9 is the same kind of sum; a demo at 8 against a
     first tier at 60 is not. Digit count is what a student actually notices. */
  const sizeClass = (n) => String(n).length;
  if (sizeClass(tier0Max) > sizeClass(demoMax))
    fail(L.slug + ": the walkthrough only goes up to " + demoMax + " but the first tier of " +
         "questions reaches " + tier0Max + ". Start the questions on the same size of number the " +
         "worked examples used, or the student is taught on one and tested on another.");

  const CAPS = captions(L);

  let h = template
    .replace(/__BACKHREF__/g, backFor(L, L.id.split("/")[0], ROOT, L.id).href)
    .replace(/__BACKLABEL__/g, backFor(L, L.id.split("/")[0], ROOT, L.id).label)
    .replace(/__TITLE__/g, L.title)
    .replace(/__DEK__/g, L.dek)
    .replace(/__ID__/g, L.id)
    .replace("__GROUND__", groundHtml(L.ground, L.rule))
    .replace("__SIGN_TABLE__", tableHtml(L.signTable))
    .replace("__PRACTICE_NOTE__", L.practiceNote ||
      (L.practice.count + " problems, and they change every day. A wrong answer tells you which " +
       "rule to look at and lets you try again, so nothing here counts against you."))
    /* The walkthrough. CAPS drives both the narration and the drawing, so the
       voice and the demo cannot fall out of step - same hook as maths. */
    /* Used as the heading of the SECOND part handed to the player, so the
       questions read as their own titled section rather than more of the same
       paragraph. There is no separate instructions block on the page. */
    .replace("__TODO_TITLE__", esc(L.todo.title))
    .replace("__CAPTIONS__", JSON.stringify(CAPS))
    .replace("__DEMO__", JSON.stringify(L.demo.map((d) => solve(d.a, d.b, L.practice.kind))))
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

  for (const slot of ["__TITLE__", "__DEK__", "__ID__", "__GROUND__", "__SIGN_TABLE__",
                      "__PRACTICE_NOTE__", "__TODO_TITLE__",
                      "__CAPTIONS__", "__DEMO__", "__SPEC__",
                      "__THEMES__", "__PLAYER_CSS__", "__FIELD_CSS__", "__PLAYER_MARKUP__",
                      "__PLAYER_JS__", "__CANONICAL__", "__MODEBOOT__", "__FAVICON__",
                      "__NAV__", "__NAVSCRIPT__", "__BACKHREF__", "__BACKLABEL__"]) {
    if (h.includes(slot)) fail("unfilled slot " + slot + " in " + L.slug);
  }

  const dir = path.join(ROOT, "lessons", ...L.id.split("/"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h, "utf8");

  const spread = pool.reduce((m, p) => { m[p.mix] = (m[p.mix] || 0) + 1; return m; }, {});
  written.push({ id: L.id, examples: L.demo.length, captions: CAPS.length,
                 poolSize: pool.length, perSet: L.practice.count, spread });
}
console.log(JSON.stringify(written, null, 1));
