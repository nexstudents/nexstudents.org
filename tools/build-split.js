#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   BUILD THE SPLIT LESSONS.   node tools/build-split.js .

   A split lesson asks WHERE a sentence divides, then WHICH half is which.
   `build-english.js` is find-the-verb then name-its-kind, and its validators
   are verb-specific from top to bottom, so this is a separate generator rather
   than a branch inside that one.

   🚨 IT DOES NOT CONTAIN A PLAYER. The reading player is sliced out of
   lesson-template.html by voice-player.js, exactly like the other three
   generators. One player, every lesson type. Never copy it in here.

   WHAT THE GUARDS ARE FOR, each one written after something it would have caught:
     · every `split` is recomputed from the sentence, so a reworded sentence
       cannot keep a stale index and silently mark the wrong answer correct
     · `showcase` sentences must appear verbatim in `parts`, because the story
       exists twice on the page (read aloud, and marked with colour) and two
       copies of a sentence is how a page teaches one thing and reads another
     · Part B must use BOTH sides and never three of a side in a row, or the
       student learns the position instead of the words
     · the todo's counts come from the data, never typed
   ───────────────────────────────────────────────────────────────────────── */
'use strict';
const fs = require('fs');
const path = require('path');
const { SPLIT } = require('./split-lessons.js');
const { navMarkup, navScript, modeBoot, faviconTags, lessonHead } = require('./nav.js');
const { partsFor, requireTodo } = require('./lesson-instructions.js');
const { backFor } = require('./lesson-back.js');
const player = require('./voice-player.js');

const ROOT = process.argv[2] || '.';
const TPL = path.join(__dirname, 'split', 'template.html');

function fail(msg) { console.error('FAIL: build-split.js — ' + msg); process.exit(1); }
if (!fs.existsSync(TPL)) fail('cannot find split/template.html');
const template = fs.readFileSync(TPL, 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* The five palettes are LIFTED from lesson-template.html at build time, the same
   way build-math.js does it, so a colour picked in a history lesson is already
   picked here. Never copy them into split/template.html. */
function themesBlock() {
  const src = fs.readFileSync(path.join(__dirname, 'lesson-template.html'), 'utf8');
  const a = src.indexOf('var THEMES = {');
  if (a < 0) fail('THEMES literal is gone from lesson-template.html');
  const b = src.indexOf('\n};', a);
  if (b < 0) fail('THEMES literal has no close');
  return src.slice(a, b + 3);
}

/* ── the guards ─────────────────────────────────────────────────────────── */

function checkSplit(item, where) {
  const w = item.sentence.split(' ');
  if (!Number.isInteger(item.split)) fail(where + ': split must be a whole number');
  if (item.split < 1) fail(where + ': split of ' + item.split + ' leaves no complete subject');
  if (item.split >= w.length) fail(where + ': split of ' + item.split + ' leaves no complete predicate');
  /* A one-word predicate is legal English but a poor question: there is only one
     place the line can go and the student never has to think. */
  if (w.length - item.split < 2) fail(where + ': the predicate is one word, so the answer is forced');
}

function checkShowcaseMatchesStory(L) {
  const said = new Set();
  for (const p of L.parts) for (const line of p.s) said.add(line.trim());
  for (const s of L.showcase) {
    if (!said.has(s.sentence.trim()))
      fail('showcase sentence is not in the story, so the page would show words the voice never says:\n  ' + s.sentence);
  }
  if (!said.has(L.example.sentence.trim()))
    fail('the worked example is not in the story:\n  ' + L.example.sentence);
}

function checkPartB(L) {
  const sides = L.sort.map((s) => s.shaded);
  for (const s of sides) if (s !== 'subject' && s !== 'predicate')
    fail('Part B `shaded` must be "subject" or "predicate", got ' + JSON.stringify(s));
  if (!sides.includes('subject') || !sides.includes('predicate'))
    fail('Part B shades only one side, so the answer is the position rather than the words');
  let run = 1;
  for (let i = 1; i < sides.length; i++) {
    run = sides[i] === sides[i - 1] ? run + 1 : 1;
    if (run > 2) fail('three Part B answers in a row are "' + sides[i] + '". Alternate them.');
  }
}

const numWord = (n) => ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve'][n] || String(n);

/* ⚠️ Fill the counts from the data before anything reads the todo. Typing
   "seven sentences" is how a lesson ends up telling the student to stop early. */
function fillTodo(L) {
  const a = numWord(L.practice.length), b = numWord(L.sort.length);
  return Object.assign({}, L, {
    todo: {
      title: L.todo.title,
      s: L.todo.s.map((line) => String(line).replace(/\{a\}/g, a).replace(/\{b\}/g, b))
    }
  });
}

/* ── rendering ──────────────────────────────────────────────────────────── */

function halves(sentence, split) {
  const w = sentence.split(' ');
  return { s: w.slice(0, split).join(' '), p: w.slice(split).join(' ') };
}

function showcaseHtml(list) {
  return list.map((it) => {
    const h = halves(it.sentence, it.split);
    return '  <p class="scline"><span class="subj">' + esc(h.s) + '</span>' +
      '<span class="sp" aria-hidden="true">|</span>' +
      '<span class="pred">' + esc(h.p) + '</span></p>';
  }).join('\n');
}

function exampleHtml(ex) {
  const h = halves(ex.sentence, ex.split);
  return '<div class="halves">\n' +
    '  <div class="h subject"><span class="lbl">Complete subject</span>' + esc(h.s) + '</div>\n' +
    '  <div class="divider" aria-hidden="true"></div>\n' +
    '  <div class="h predicate"><span class="lbl">Complete predicate</span>' + esc(h.p) + '</div>\n' +
    '</div>';
}

function groundHtml(g) {
  const stuck = Array.isArray(g.whenStuck) ? g.whenStuck : [g.whenStuck];
  return [
    '<h4>What it is</h4><p>' + g.whatItIs + '</p>',
    '<h4>Why it matters</h4><p>' + g.whyItMatters + '</p>',
    '<h4>What he will get wrong</h4><p>' + g.commonMistake + '</p>',
    '<h4>What to say when he is stuck</h4><ul>' +
      stuck.map((s) => '<li>' + s + '</li>').join('') + '</ul>'
  ].join('\n');
}

function partsHtml(parts) {
  return parts.map((p) =>
    '<div class="part">\n  <h3>' + esc(p.title) + '</h3>\n' +
    p.s.filter((l) => l.trim()).map((l) => '  <p>' + esc(l) + '</p>').join('\n') +
    '\n</div>').join('\n');
}


/* ── THE VISUAL PANEL ────────────────────────────────────────────────────────
   The panel is the pinned frame that follows the reading (the dbox in
   lesson-template.html). As each story sentence is read it shows that sentence
   with the COMPLETE SUBJECT highlighted, and a line underneath saying why.

   🚨 `at` IS COMPUTED, NEVER TYPED. It is an index into the flattened sentence
   list, blanks skipped, exactly the way `find` indexes work. Hand-counting them
   is how a reworded story ends up pointing the panel at the wrong line, so the
   data names the SENTENCE and the build finds its index. If a sentence is not
   found the build stops rather than silently showing nothing. */
function visualsFor(L) {
  const flat = [];
  for (const part of partsFor(L)) for (const line of part.s) {
    if (String(line).trim()) flat.push(String(line).trim());
  }
  /* 🚨 WHICH HALF THE NARRATION IS ACTUALLY TALKING ABOUT.
       'subject'   lock green      'predicate' lock orange     'both' trade
     A showcase frame reads the story sentence itself, so it always trades. An
     explanation frame reads prose ABOUT the sentence, and most of that prose is
     about the complete subject alone - lighting the predicate there claims
     something the narration never said.
     `flipAt` on a 'both' frame is a PHRASE in the read sentence, and the build
     turns it into the fraction where the trade happens. Naming the phrase means
     a reworded sentence cannot leave a hand-counted number pointing at nothing;
     the build stops instead. */
  const lockFor = (half) => half === 'subject' ? 0 : half === 'predicate' ? 1 : null;
  const frame = (readSentence, showSentence, split, note, half, flipAt) => {
    const at = flat.indexOf(readSentence.trim());
    if (at < 0) fail('the panel points at a sentence the lesson does not contain: ' + readSentence);
    const h = halves(showSentence, split);
    /* 🚨 `flip` IS HOW FAR THROUGH THE *READ* SENTENCE THE SPLIT SITS, as a
       fraction. The panel walks from the green half to the orange one when the
       reading crosses it, and NexVoice reports its position as a word index, so
       a fraction is what survives the page tokenising words its own way.

       It is only set when the sentence being READ is the sentence being SHOWN.
       An explanation frame reads prose ABOUT the example, and that prose has no
       split of its own - guessing a midpoint there would flip the panel at a
       word that means nothing. Those frames keep both halves lit. */
    let flip = null;
    if (readSentence.trim() === showSentence.trim()) {
      const words = showSentence.trim().split(/\s+/).length;
      if (words > 0) flip = split / words;
    } else if (flipAt) {
      const cut = readSentence.indexOf(flipAt);
      if (cut < 0) fail('flipAt names a phrase the sentence does not contain: ' + flipAt);
      flip = cut / readSentence.length;
    } else if (half === 'both' || half == null) {
      flip = 0.5;
    }
    /* Both halves are shaded, so both are named, each chip in its own colour and
       in the order they appear in the sentence. `kinds` replaces the single
       `kind` here; the shared panel still accepts either. */
    return { at: at, flip: flip, lock: lockFor(half),
             kinds: [ { text: 'Complete subject',   cls: 'is-subject' },
                      { text: 'Complete predicate', cls: 'is-predicate' } ],
             pre: h.s, body: ' ' + h.p,
             note: note || 'The highlighted part tells you who or what the sentence is about.' };
  };
  /* Frames for the story, then frames for the explanation. Both, because the
     panel blanks the moment the reading leaves a frame's paragraph, and the
     explanation is a different paragraph that talks about the same sentences. */
  const out = L.showcase.map((sc) => frame(sc.sentence, sc.sentence, sc.split, sc.note, 'both'));
  for (const pf of (L.panel || [])) {
    if (pf.half && !['subject','predicate','both'].includes(pf.half))
      fail('a panel frame `half` must be subject, predicate or both: ' + pf.half);
    /* A stepped frame carries no top-level sentence of its own; its first step
       IS the opening frame, so that is what the base is built from. */
    const base = (pf.steps && pf.steps.length) ? pf.steps[0] : pf;
    const f = frame(pf.sentence, base.show, base.split,
                    base.note || pf.note, pf.half || 'both', pf.flipAt);
    /* 🚨 A SENTENCE THAT NAMES TWO EXAMPLES NEEDS TWO FRAMES, NOT ONE.
       `steps` is those frames in order. `from` is a PHRASE in the sentence, and
       the build turns it into the fraction of the way through at which that step
       takes over - so a reworded sentence stops the build instead of leaving the
       panel on the wrong example. The first step needs no `from`; it starts at
       the beginning by definition. */
    if (pf.steps && pf.steps.length) {
      f.steps = pf.steps.map((st, i) => {
        let from = 0;
        if (i > 0) {
          if (!st.from) fail(pf.sentence.slice(0, 40) + ': every step after the first needs a `from` phrase');
          const cut = pf.sentence.indexOf(st.from);
          if (cut < 0) fail('a step `from` names a phrase the sentence does not contain: ' + st.from);
          from = cut / pf.sentence.length;
        }
        const half = st.half || pf.half || 'both';
        const h = halves(st.show, st.split);
        let flip = null;
        if (half === 'both') {
          const words = st.show.trim().split(/\s+/).length;
          if (words > 0) flip = st.split / words;
        }
        return { from, pre: h.s, body: h.p ? ' ' + h.p : '',
                 note: st.note || pf.note, lock: lockFor(half), flip };
      });
      if (f.steps[0].from !== 0) fail('the first step must start at the beginning');
    }
    out.push(f);
  }
  return out.sort((a, b) => a.at - b.at);
}

/* ── build ──────────────────────────────────────────────────────────────── */

const written = [];
for (const raw of SPLIT) {
  const L = fillTodo(raw);

  requireTodo(L, L.id);
  checkShowcaseMatchesStory(L);
  L.showcase.forEach((s, i) => checkSplit(s, L.slug + ' showcase[' + i + ']'));
  checkSplit(L.example, L.slug + ' example');
  L.practice.forEach((p, i) => checkSplit(p, L.slug + ' practice[' + i + ']'));
  L.sort.forEach((p, i) => checkSplit(p, L.slug + ' sort[' + i + ']'));
  checkPartB(L);
  for (const p of L.practice) if (!p.why || p.why.length < 25)
    fail(L.slug + ': every Part A item needs a `why`, and it is what he sees when he is wrong');

  const back = backFor(L, L.id.split('/')[0], ROOT, L.id);

  /* Only what the page needs. The `why` has to ship because the page shows it,
     but nothing else about an item goes out. */
  const practiceForPage = L.practice.map((p) => ({ sentence: p.sentence, split: p.split, why: p.why }));
  const sortForPage = L.sort.map((p) => ({
    sentence: p.sentence, split: p.split, shaded: p.shaded, why: p.why
  }));

  let h = template
    .replace(/__BACKHREF__/g, back.href)
    .replace(/__BACKLABEL__/g, back.label)
    .replace(/__TITLE__/g, L.title)
    .replace(/__DEK__/g, L.dek)
    .replace(/__EYEBROW__/g, esc(L.eyebrow + ' · ' + L.unit))
    .replace(/__ID__/g, L.id)
    .replace('__GROUND__', groundHtml(L.ground))
    .replace('__STORY__', partsHtml(L.parts))
    .replace('__SHOWCASE__', showcaseHtml(L.showcase))
    .replace('__EXAMPLE__', exampleHtml(L.example))
    /* 🚨 A FULL SENTENCE, NOT A COUNT WITH A FULL STOP AFTER IT. Paul,
       2026-09-08: "there are seven sentences". The note opened on a bare
       "seven sentences." which reads as a label, not as someone telling the
       student what is in front of him.
       🚨 "PLACE", NOT "DRAG", AND NAME BOTH HALVES. Paul, same evening: "i would
       no directly say drag the line but place the line. and say where the
       complete subject ends and the complete predicate starts".
       Drag also described the wrong gesture - every gap is a button, so the
       line is tapped into position, not dragged along the sentence. */
    .replace('__NOTE_A__', 'There are ' + numWord(L.practice.length) +
      ' sentences. Place the line where the complete subject ends and the ' +
      'complete predicate starts, then check it.')
    .replace('__NOTE_B__', 'There are ' + numWord(L.sort.length) +
      ' sentences, already divided. One half is shaded. Say which half it is.')
    .replace('__PLAYER_CSS__', player.playerCss)
    .replace('__PANEL_CSS__', player.panelCss)
    .replace('__PANEL_MARKUP__', player.panelMarkup)
    .replace('__FIELD_CSS__', player.fieldCss)
    .replace('__PLAYER_MARKUP__', player.playerMarkup)
    .replace('__PLAYER_JS__', player.playerScript)
    .replace('__PARTS__', JSON.stringify(partsFor(L)))
    .replace('__PRACTICE__', JSON.stringify(practiceForPage))
    .replace('__SORT__', JSON.stringify(sortForPage))
    .replace('__VISUALS__', JSON.stringify(visualsFor(L)))
    .replace('__THEMES__', themesBlock())
    .replace('__CANONICAL__', () => lessonHead({
      id: L.id, title: L.title, desc: L.dek,
      backLabel: back.label, backHref: back.href
    }))
    .replace('__MODEBOOT__', modeBoot)
    .replace('__FAVICON__', faviconTags)
    .replace('__NAV__', () => navMarkup(null, 'navbtn'))
    .replace('__NAVSCRIPT__', navScript);

  for (const slot of ['__TITLE__', '__DEK__', '__EYEBROW__', '__ID__', '__GROUND__', '__STORY__',
    '__SHOWCASE__', '__EXAMPLE__', '__NOTE_A__', '__NOTE_B__', '__PARTS__', '__PRACTICE__',
    '__SORT__', '__VISUALS__', '__THEMES__', '__PLAYER_CSS__', '__PANEL_CSS__', '__PANEL_MARKUP__', '__FIELD_CSS__', '__PLAYER_MARKUP__',
    '__PLAYER_JS__', '__CANONICAL__', '__MODEBOOT__', '__FAVICON__', '__NAV__', '__NAVSCRIPT__',
    '__BACKHREF__', '__BACKLABEL__']) {
    if (h.includes(slot)) fail('unfilled slot ' + slot + ' in ' + L.slug);
  }

  const dir = path.join(ROOT, 'lessons', ...L.id.split('/'));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), h, 'utf8');
  written.push({ id: L.id, story: L.parts.length, showcase: L.showcase.length,
    partA: L.practice.length, partB: L.sort.length });
}
console.log(JSON.stringify(written, null, 1));
