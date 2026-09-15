#!/usr/bin/env node
/* Renders every entry in english-lessons.js into /lessons/<id>/index.html.
 *
 *   node tools/build-english.js .
 *
 * An English lesson is its own template, not the history one and not the
 * maths one. History teaches by story and asks questions answerable from the
 * text; maths teaches by worked example and makes you show your work. A rule
 * is neither: it has to be stated, demonstrated, and then applied to a
 * sentence the student has never seen.
 *
 * ⭐ THE GUARD IS THE POINT OF THIS FILE.
 *
 * `practice[].answer` is an index into the sentence split on spaces, and it is
 * written by hand in the data file. Get it wrong by one and the page marks a
 * correct answer wrong — the single worst bug this site could ship, because a
 * student who is already behind will believe the page over himself.
 *
 * So the index is RECOMPUTED here from `practice[].verb` and the build FAILS
 * on any mismatch. Same principle as the states game refusing to build when a
 * capital projects outside its own state: the guard is the only reason the
 * data can be trusted, and it has to run every time rather than once.
 *
 * The build also refuses a lesson whose Ground Control block is incomplete.
 * That block is the whole reason a parent would use this instead of a
 * workbook, and a lesson that quietly shipped without it would look finished.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { ENGLISH } = require("./english-lessons.js");
const { navMarkup, navScript, modeBoot, faviconTags, lessonHead, navCssTag } = require("./nav.js");
/* The closing instructions, and the guard that a lesson has some. Shared with
   history and maths so all three say the task the same way. */
const { partsFor, requireTodo, checkTodoCounts, checkOneSentence } = require("./lesson-instructions.js");
/* 🚨 ONE PLAYER, EVERY LESSON TYPE. The reading voice is not re-implemented
   here; it is sliced out of lesson-template.html so English, maths, history
   and later science all run the identical engine. Paul, 2026-08-29: "i want
   you to match the way we made the voice exactly like the history lessons
   even with the bar to go back so he can repeat. this is the standard for all
   future lessons we will have on the entire site." */
const player = require("./voice-player.js");

const ROOT = process.argv[2] || ".";
/* ONE back-link rule for every lesson generator - see lesson-back.js. These
   templates used to hardcode /maths/ and /english/, so a single-grade lesson
   sent the student to a subject root instead of the shelf they came from. */
const { backFor } = require("./lesson-back.js");
const TPL = path.join(__dirname, "english", "template.html");
const template = fs.readFileSync(TPL, "utf8");

function fail(msg) { console.error("FAIL: " + msg); process.exit(1); }

/* The five palettes are DEFINED in the history template and lifted from it,
   so the three lesson types can never drift apart on colour. Copied from
   build-math.js on purpose — one source of truth, two readers. */
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

/* Strip punctuation so "cleared." matches the verb "cleared". Apostrophes stay
   because they are inside words, not around them. */
const bare = (w) => w.replace(/[^A-Za-z']/g, "").toLowerCase();

/* 🚨 A DERIVED COUNT STILL HAS TO READ LIKE PROSE. The note said "Five done for
   you" when it was typed; deriving it turned that into "5 done for you" on a
   page nobody had otherwise touched. The count comes from the data either way -
   this only decides how it is spelled. */
const NUMWORD = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
                 "eleven","twelve","thirteen","fourteen","fifteen","sixteen"];
const numWord = (n) => (n < NUMWORD.length ? NUMWORD[n] : String(n));
const Num = (n) => { const w = numWord(n); return w.charAt(0).toUpperCase() + w.slice(1); };

/* ── the guard ──────────────────────────────────────────────────────────── */
function verifyPractice(L) {
  L.practice.forEach((p, n) => {
    const where = L.slug + " practice[" + n + "]";
    /* "word" is the honest name on a lesson that is not about verbs. One field,
       two spellings, so the guard below still recomputes the index either way. */
    if (!p.verb && p.word) p.verb = p.word;
    const words = p.sentence.split(" ");

    const hits = [];
    words.forEach((w, i) => { if (bare(w) === bare(p.verb)) hits.push(i); });

    if (hits.length === 0)
      fail(where + ': the verb "' + p.verb + '" does not appear in "' + p.sentence + '"');
    if (hits.length > 1)
      fail(where + ': the verb "' + p.verb + '" appears ' + hits.length + " times in \"" + p.sentence +
           '" — the click target is ambiguous, reword the sentence');
    if (hits[0] !== p.answer)
      fail(where + ': answer is ' + p.answer + ' ("' + words[p.answer] + '") but the verb "' +
           p.verb + '" is at index ' + hits[0] + ' — this page would mark a correct answer wrong');

    if (!p.why || p.why.length < 20)
      fail(where + ": every answer needs a why, and it has to say more than 'correct'");
  });

  /* ⭐ POSITION SPREAD. The first draft of the verbs lesson put eight of ten
     verbs at index 2, so "always click the third word" scored 80% without
     understanding anything — the sentence-level version of writing every
     correct answer first in a multiple choice. Vary the SUBJECT length to fix
     it, never the verb. */
  const spread = {};
  L.practice.forEach((p) => { spread[p.answer] = (spread[p.answer] || 0) + 1; });
  const worst = Object.keys(spread).reduce((a, b) => (spread[a] > spread[b] ? a : b));
  const share = spread[worst] / L.practice.length;
  if (share > 0.4)
    fail(L.slug + ": " + spread[worst] + " of " + L.practice.length + " verbs sit at word " +
         worst + " (" + Math.round(share * 100) + "%). A student can score that high by " +
         "clicking the same position every time. Vary the length of the subjects.");
}

/* ── PART B: which KIND of verb ───────────────────────────────────────────
   Two answers only, so the guessing floor is 50%. That makes the checks below
   matter more than they would on a four-option question: an uneven mix, or a
   run of the same answer, and the part measures nothing. */
const BEING = ["am", "is", "are", "was", "were", "be", "been", "being"];

function checkSort(L) {
  if (!Array.isArray(L.sort) || L.sort.length < 4)
    fail(L.slug + ": needs a `sort` array of at least four sentences for Part B");

  L.sort.forEach((p, i) => {
    const where = L.slug + " sort[" + i + "]";
    const words = String(p.sentence).split(" ");
    if (typeof p.at !== "number" || !words[p.at])
      fail(where + ": `at` must be the index of the verb in the sentence");
    if (p.kind !== "action" && p.kind !== "being")
      fail(where + ': kind must be "action" or "being", not "' + p.kind + '"');
    if (!p.why || p.why.length < 20)
      fail(where + ": needs a real reason, not a label");

    /* 🚨 The two kinds are checked against the word itself, because this is the
       one place a typo becomes a wrong answer taught confidently. A being verb
       has to BE one of the eight; an action verb must not be, or the lesson is
       telling a student that "is" is an action. */
    const w = words[p.at].replace(/[^A-Za-z']/g, "").toLowerCase();
    const isBeing = BEING.indexOf(w) >= 0;
    if (p.kind === "being" && !isBeing)
      fail(where + ': "' + w + '" is marked being, but the being verbs are ' + BEING.join(", "));
    if (p.kind === "action" && isBeing)
      fail(where + ': "' + w + '" is marked action, but it is one of the eight being verbs');
  });

  const being = L.sort.filter((p) => p.kind === "being").length;
  const action = L.sort.length - being;
  if (!being || !action)
    fail(L.slug + ": Part B is all " + (being ? "being" : "action") + " verbs. It has to have both.");
  if (Math.max(being, action) / L.sort.length > 0.7)
    fail(L.slug + ": Part B is " + Math.round(Math.max(being, action) / L.sort.length * 100) +
         "% one kind. Answering the same way every time would score that, so even it up.");

  /* ⚠️ An even count still reads as a pattern if it alternates or comes in one
     long run. Three of the same answer in a row and a student stops reading. */
  let run = 1;
  for (let i = 1; i < L.sort.length; i++) {
    run = L.sort[i].kind === L.sort[i - 1].kind ? run + 1 : 1;
    if (run > 2) fail(L.slug + ": three Part B answers in a row are " + L.sort[i].kind +
                      " (items " + (i - 2) + "-" + i + "). Break the run up.");
  }
}

/* A worked example whose underlined word is not in its own sentence would
   render as plain text with nothing marked, and look like an oversight rather
   than a bug. */
function verifyExamples(L) {
  L.examples.forEach((e, n) => {
    const where = L.slug + " examples[" + n + "]";
    /* The object shape marks TWO words and is checked on both of them. An
       example whose marked word is not in its own sentence renders as plain
       text with nothing lit, which reads as an oversight rather than a bug. */
    const sentence = Array.isArray(e) ? e[0] : e.sentence;
    const marks = Array.isArray(e) ? [e[1]] : [e.subject, e.predicate];
    const why = Array.isArray(e) ? e[2] : e.why;
    marks.forEach((m) => {
      if (!m) fail(where + ": a two-colour example needs both a subject and a predicate");
      if (sentence.split(" ").findIndex((w) => bare(w) === bare(m)) < 0)
        fail(where + ': "' + m + '" does not appear in "' + sentence + '"');
    });
    if (!Array.isArray(e) && bare(e.subject) === bare(e.predicate))
      fail(where + ": the subject and the predicate are the same word");
    if (!why || why.length < 20) fail(where + ": needs a real explanation");
  });
}

function verifyGround(L) {
  const g = L.ground || {};
  for (const k of ["whatItIs", "whyItMatters", "commonMistake"]) {
    if (!g[k] || g[k].length < 60)
      fail(L.slug + ": ground." + k + " is missing or too thin. This block is the reason the " +
           "lesson exists — a workbook already has the exercises.");
  }
  if (!Array.isArray(g.whenStuck) || g.whenStuck.length < 2)
    fail(L.slug + ': ground.whenStuck needs at least two things to actually SAY, not "review the material"');
}

/* ── THE CHOOSE PART ───────────────────────────────────────────────────────
   The words are offered rather than hunted for, which makes a different set of
   ways to be wrong:
     · an option that is not in the sentence teaches him to compare buttons
       instead of reading the line, which is the habit the find part undoes
     · the right word missing from the options makes a correct answer
       unreachable, and he would believe the page over himself
     · all six asking for the same half teaches the position of the answer
   Every one of those is silent on the page, so each is checked here. */
const HALVES = ["subject", "predicate"];
function verifyChoose(L) {
  if (!L.choose) return;
  if (L.choose.length < 4) fail(L.slug + ": a `choose` part needs at least four sentences");
  L.choose.forEach((c, n) => {
    const where = L.slug + " choose[" + n + "]";
    if (HALVES.indexOf(c.ask) < 0)
      fail(where + ': ask must be "subject" or "predicate", not "' + c.ask + '"');
    if (!Array.isArray(c.options) || c.options.length < 3 || c.options.length > 5)
      fail(where + ": needs three to five options. Two is a coin toss and six is a word search.");
    const words = c.sentence.split(" ").map(bare);
    if (words.indexOf(bare(c.word)) < 0)
      fail(where + ': the answer "' + c.word + '" is not in "' + c.sentence + '"');
    if (!c.options.some((o) => bare(o) === bare(c.word)))
      fail(where + ': the answer "' + c.word + '" is not among its own options. ' +
           "The right answer would be unreachable and he would believe the page over himself.");
    c.options.forEach((o) => {
      if (words.indexOf(bare(o)) < 0)
        fail(where + ': option "' + o + '" is not a word in the sentence. Every option has to be ' +
             "readable off the line, or he learns to compare buttons instead of reading.");
    });
    if (new Set(c.options.map(bare)).size !== c.options.length)
      fail(where + ": the same word appears twice in the options");
    if (!c.why || c.why.length < 25) fail(where + ": needs a real explanation");
  });
  HALVES.forEach((h) => {
    if (!L.choose.some((c) => c.ask === h))
      fail(L.slug + ": the choose part never asks for the " + h + ". It has to ask for both.");
  });
  let run = 1;
  for (let i = 1; i < L.choose.length; i++) {
    run = L.choose[i].ask === L.choose[i - 1].ask ? run + 1 : 1;
    if (run > 2) fail(L.slug + ": three choose questions in a row ask for the " + L.choose[i].ask +
                      ". He would learn the pattern instead of the words.");
  }
}

/* ── THE MARKED-UP STORY ───────────────────────────────────────────────────
   🚨 THE SAME RULE build-split.js USES, and for the same reason: the story is on
   the page twice, once read aloud and once marked in colour, and two copies of a
   sentence is how a page teaches one thing and reads another. So a showcase
   sentence must appear VERBATIM in the story. */
function verifyShowcase(L) {
  if (!L.showcase) return;
  const story = (L.parts || []).flatMap((pt) => pt.s || []).map((x) => String(x).trim());
  L.showcase.forEach((sc, n) => {
    const where = L.slug + " showcase[" + n + "]";
    if (!story.includes(sc.sentence.trim()))
      fail(where + ": this sentence is not in the story word for word.\n" +
           "      The page would read one sentence aloud and colour a different one.\n" +
           "        " + sc.sentence);
    const words = sc.sentence.split(" ").map(bare);
    ["subject", "predicate"].forEach((half) => {
      if (!sc[half]) fail(where + ": needs a " + half);
      if (words.indexOf(bare(sc[half])) < 0)
        fail(where + ': the ' + half + ' "' + sc[half] + '" is not a word in its own sentence');
    });
    if (bare(sc.subject) === bare(sc.predicate))
      fail(where + ": the subject and the predicate are the same word");
    if (!sc.note || sc.note.length < 20) fail(where + ": needs a note saying how you could tell");
  });
}

/* ── rendering ──────────────────────────────────────────────────────────── */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function groundHtml(g) {
  return [
    '<h4>What it is</h4><p>' + g.whatItIs + '</p>',
    '<h4>Why it matters</h4><p>' + g.whyItMatters + '</p>',
    '<h4>What he will get wrong</h4><p>' + g.commonMistake + '</p>',
    '<h4>What to say when he is stuck</h4><ul>' +
      g.whenStuck.map((s) => "<li>" + s + "</li>").join("") + '</ul>'
  ].join("\n");
}

function partsHtml(parts) {
  return parts.map((p) =>
    '<div class="part">\n  <h3>' + p.title + '</h3>\n' +
    p.s.map((line) => "  <p>" + esc(line) + "</p>").join("\n") +
    "\n</div>"
  ).join("\n");
}

/* Two shapes. The array is one underlined word, which is what a verbs lesson
   needs. The object marks TWO words in the unit's own colours, for a lesson
   whose answer is a pair. Never a third shape without a reason. */
function markPair(sentence, subject, predicate) {
  return sentence.split(" ").map((w) =>
    bare(w) === bare(subject)   ? '<span class="subj">' + esc(w) + "</span>" :
    bare(w) === bare(predicate) ? '<span class="pred">' + esc(w) + "</span>" : esc(w)).join(" ");
}
function examplesHtml(examples) {
  return examples.map((e) => {
    const marked = Array.isArray(e)
      ? e[0].split(" ").map((w) => bare(w) === bare(e[1]) ? "<u>" + esc(w) + "</u>" : esc(w)).join(" ")
      : markPair(e.sentence, e.subject, e.predicate);
    const why = Array.isArray(e) ? e[2] : e.why;
    return '<div class="ex">\n  <p class="sent">' + marked + '</p>\n' +
           '  <p class="why">' + esc(why) + "</p>\n</div>";
  }).join("\n");
}

function showcaseHtml(L) {
  if (!L.showcase) return "";
  return '<h2 class="section-head">' + esc(L.showcaseHead || "The Story, Marked") + '</h2>\n' +
    '<p class="sclegend">' + (L.showcaseNote ||
      'The same sentences you just heard. <span class="subj">Green</span> is the simple subject and ' +
      '<span class="pred">orange</span> is the simple predicate.') + '</p>\n' +
    '<div class="showcase">' + L.showcase.map((sc) =>
      '\n  <div class="sc">\n    <p class="sent">' + markPair(sc.sentence, sc.subject, sc.predicate) +
      '</p>\n    <p class="why">' + esc(sc.note) + "</p>\n  </div>").join("") + "\n</div>";
}

/* 🚨 THE PARTS ARE EMITTED BY THE BUILD, NOT FIXED IN THE TEMPLATE, because
   which two of the three shapes a lesson uses is a property of the lesson. A
   lesson with a `choose` opens with it and closes on the unaided find; one
   without keeps the original find-then-name pair. A part whose container is
   absent renders nothing, so there is no empty heading to hide. */
function partSections(L) {
  const sec = (head, note, id) =>
    '  <section class="wspart">\n    <h3 class="ws-head">' + esc(head) + '</h3>\n' +
    '    <p class="ws-note">' + esc(note) + '</p>\n    <div id="' + id + '"></div>\n  </section>';
  if (L.choose) {
    return [
      sec(L.headA || "Part A. Pick The Word.",
          L.noteA || (Num(L.choose.length) + " sentences. The words are laid out for you. Tap the one the question asks for."),
          "chooses"),
      sec(L.headB || "Part B. Find It Yourself.",
          L.noteB || (Num(L.practice.length) + " more sentences, and this time nothing is laid out. Tap the word in the line."),
          "problems")
    ].join("\n\n");
  }
  return [
    sec(L.headA || "Part A. Find The Verb.",
        L.noteA || (L.practice.length + " sentences. Click the verb in each one. A wrong click tells you why and lets you try again."),
        "problems"),
    sec(L.headB || "Part B. Action Or Being?",
        L.noteB || (L.sort.length + " more sentences, and the verb is underlined for you. Decide whether it is an action verb or a being verb."),
        "kinds")
  ].join("\n\n");
}

/* Everything the page says out loud, defaulted to what the verbs lesson has
   always said so that lesson renders byte for byte as before. */
function labelsFor(L) {
  const d = {
    tagFind: "Click the verb", tagFindDone: "Found it",
    tagKind: "Action or being", tagKindDone: "Got it",
    tagChoose: "Pick the word", tagChooseDone: "Got it",
    kindAKey: "action", kindBKey: "being",
    kindA: "Action verb", kindB: "Being verb",
    wrongKindA: "Not action. Try to film this sentence - if nothing happens that you could point a camera at, the verb is a being verb.",
    wrongKindB: "Not being. The being verbs are am, is, are, was, were, be, been and being. This underlined word is not one of them, so something is happening.",
    wrongFind: "Not that one. Put \u201CYesterday\u201D at the front and read it again \u2014 which word has to change shape?",
    wrongSubject: "Not that one. Ask who or what the sentence is about, then say it in one word.",
    wrongPredicate: "Not that one. Ask what the subject DOES. That word is the simple predicate.",
    askPrefix: "Which word is the", askSubject: "simple subject", askPredicate: "simple predicate",
    beingCheck: false
  };
  return Object.assign(d, L.labels || {});
}

const written = [];
for (const L of ENGLISH) {
  verifyGround(L);
  verifyExamples(L);
  verifyPractice(L);
  /* ⚠️ A lesson that opens with `choose` does not have a naming part, so the
     Part B guard would fail it for missing data it is not meant to carry. */
  if (!L.choose) checkSort(L);
  verifyChoose(L);
  verifyShowcase(L);
  /* 🚨 THESE THREE WERE IMPORTED AND NEVER CALLED. lesson-instructions.js says
     requireTodo "FAILS THE BUILD on a lesson that does not carry one" and this
     generator was the one place it did not, so an English lesson could ship
     with no assignment at the end while history and maths could not. */
  requireTodo(L, L.slug);
  checkTodoCounts(L, L.slug);
  checkOneSentence(L, L.slug);

  /* The page only ever needs the sentence, the index and the why. Shipping
     `verb` too would put the answer in plain sight in the page source. */
  const practiceForPage = L.practice.map((p) => ({
    sentence: p.sentence, answer: p.answer, why: p.why, ask: p.ask
  }));
  /* Part B needs the kind in the page, because that IS the answer and the page
     has to check it. Nothing else about the item goes out. */
  const sortForPage = (L.sort || []).map((p) => ({
    sentence: p.sentence, at: p.at, kind: p.kind, why: p.why
  }));
  /* The answer travels here because the page has to check it, but nothing else
     about the item does. */
  const chooseForPage = (L.choose || []).map((c) => ({
    sentence: c.sentence, word: c.word, ask: c.ask, options: c.options, why: c.why
  }));

  let h = template
    .replace(/__BACKHREF__/g, backFor(L, L.id.split("/")[0], ROOT, L.id).href)
    .replace(/__BACKLABEL__/g, backFor(L, L.id.split("/")[0], ROOT, L.id).label)
    .replace(/__TITLE__/g, L.title)
    .replace(/__DEK__/g, L.dek)
    .replace(/__ID__/g, L.id)
    .replace("__GROUND__", groundHtml(L.ground))
    .replace("__RULE_SHORT__", L.rule.short)
    .replace("__RULE_LONG__", L.rule.long)
    .replace("__RULE_TEST__", L.rule.test
      ? '<p class="ruletest"><b>Run this test.</b> ' + L.rule.test + "</p>" : "")
    .replace("__PLAYER_CSS__", player.playerCss)
    .replace("__FIELD_CSS__", player.fieldCss)
    .replace("__PLAYER_MARKUP__", player.playerMarkup)
    .replace("__PLAYER_JS__", player.playerScript)
    .replace("__EXAMPLES_HTML__", examplesHtml(L.examples))
    /* 🚨 THIS LINE USED TO BE TYPED INTO THE TEMPLATE. It said "Five done for
       you. The underlined word is the verb" on a lesson with four examples, no
       underlining and nothing to do with verbs. A count and a mechanic both
       hardcoded in a shared template is two lies waiting for the second lesson. */
    .replace("__EXAMPLES_NOTE__", () => L.examplesNote ||
      (Num(L.examples.length) + " done for you. The line under each one says how you could have known."))
    .replace("__PRACTICE_NOTE__", L.practiceNote ||
      /* ⚠️ Do not put a COUNT in here. It used to say "Ten sentences", and the
         moment the practice split into two parts that sentence was wrong on a
         page that had not otherwise changed. Each part states its own count. */
      "Two parts, like a worksheet. Part A asks which word is the verb. Part B asks what kind of verb it is. A wrong answer tells you why and lets you try again, so nothing here counts against you.")
    /* Each part states its OWN count, and it comes from the data rather than
       being typed, so it cannot drift when an item is added or removed. */
    .replace("__PART_SECTIONS__", () => partSections(L))
    .replace("__SHOWCASE_HTML__", () => showcaseHtml(L))
    .replace("__CHOOSE__", () => JSON.stringify(chooseForPage))
    .replace("__LABELS__", () => JSON.stringify(labelsFor(L)))
    .replace("__PARTS__", JSON.stringify(partsFor(L)))
    .replace("__PRACTICE__", JSON.stringify(practiceForPage))
    .replace("__SORT__", JSON.stringify(sortForPage))
    .replace("__THEMES__", themesBlock)
    /* Canonical, share card and breadcrumb come from nav.js so all four
       lesson generators emit the same head. backFor() is the SAME call the
       back link uses, so the breadcrumb and the visible link agree. */
    .replace("__CANONICAL__", () => lessonHead({
      id: L.id, title: L.title, desc: L.dek,
      backLabel: backFor(L, L.id.split("/")[0], ROOT, L.id).label,
      backHref: backFor(L, L.id.split("/")[0], ROOT, L.id).href,
    }))
    .replace("__MODEBOOT__", modeBoot)
    .replace("__NAVCSS__", navCssTag(ROOT))
    .replace("__FAVICON__", faviconTags)
    .replace("__NAV__", () => navMarkup(null, "navbtn"))
    .replace("__NAVSCRIPT__", navScript);

  for (const slot of ["__TITLE__", "__DEK__", "__ID__", "__GROUND__", "__RULE_SHORT__",
                      "__RULE_LONG__", "__RULE_TEST__", "__PARTS_HTML__", "__EXAMPLES_HTML__",
                      "__PRACTICE_NOTE__", "__PART_SECTIONS__", "__SHOWCASE_HTML__", "__EXAMPLES_NOTE__",
                      "__PARTS__", "__PRACTICE__", "__SORT__", "__CHOOSE__", "__LABELS__", "__THEMES__",
                      "__PLAYER_CSS__", "__FIELD_CSS__", "__PLAYER_MARKUP__", "__PLAYER_JS__",
                      "__CANONICAL__", "__MODEBOOT__", "__NAVCSS__", "__FAVICON__", "__NAV__", "__NAVSCRIPT__"]) {
    if (h.includes(slot)) fail("unfilled slot " + slot + " in " + L.slug);
  }

  const dir = path.join(ROOT, "lessons", ...L.id.split("/"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h, "utf8");

  written.push({
    id: L.id,
    parts: L.parts.length,
    examples: L.examples.length,
    practice: L.practice.length,
    answerSpread: L.practice.reduce((m, p) => { m[p.answer] = (m[p.answer] || 0) + 1; return m; }, {})
  });
}
console.log(JSON.stringify(written, null, 1));
