#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   import-lesson.js — drop rewritten prose into a lesson and re-sync the
   answer-hunt indexes.

       node tools/import-lesson.js <lesson-id> <rewritten.txt> [--write]

   Without --write it is a DRY RUN: it reports every change and touches
   nothing. Always dry-run first.

   🚨 WHY THIS EXISTS. Paul, 2026-09-13, on the drafts I wrote: "your writing
   is all off ... it would take me a very long time to edit through all these
   lessons." He is having ChatGPT rewrite them. Pasting new prose in by hand
   is not the hard part - re-pointing every question's `find` at the right new
   sentence is, and getting one wrong ships a lesson whose hint highlights the
   wrong line.

   ══ WHAT IT TOUCHES ══
   ONLY the `parts` array and `findsAt`, plus the `find` list on each question.
   It does not touch plan, ground, words, questions text, choices or todo.
   Those are edited by hand, deliberately.

   ══ THE INPUT FORMAT ══
   Plain text. Markdown-ish, because that is what ChatGPT emits naturally.

       ## Section Title
       One sentence per line.
       Another sentence.

       A blank line is a paragraph break.

       ## Next Section Title
       ...

   🚨 ONE SENTENCE PER LINE IS NOT A STYLE CHOICE. Each line becomes one
   highlight, one audio clip and one line in the visual panel. Two sentences on
   one line are read, lit and shown as a single unit, and build-lessons.js
   refuses it. ⚠️ But one sentence may be as LONG as it likes - I wrongly wrote
   short choppy ones all day because I confused the two.

   ══ HOW THE INDEXES ARE RE-SYNCED ══
   Before replacing anything it records the actual TEXT each `find` currently
   points at. After replacing, it finds where that text went in the new prose by
   word-overlap similarity, and writes the new index.
   · >= 0.55 similarity  -> remapped automatically, reported
   · below that          -> left alone and FLAGGED for a human
   A flagged lesson still builds; the index is simply stale, which findsAt will
   catch on the next build. Nothing is silently wrong.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';
const fs = require('fs');
const path = require('path');

const [, , LESSON_ID, TXT, ...rest] = process.argv;
const WRITE = rest.includes('--write');

if (!LESSON_ID || !TXT) {
  console.error('usage: node tools/import-lesson.js <lesson-id> <rewritten.txt> [--write]');
  console.error('   eg: node tools/import-lesson.js science/unit-1-review rewrite.txt');
  process.exit(1);
}

/* ── find the lesson's source file by its id, across every content folder ── */
function findSource(id) {
  const root = path.join(__dirname, 'content');
  const hits = [];
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.js')) {
        const src = fs.readFileSync(p, 'utf8');
        if (src.includes('id: "' + id + '"')) hits.push(p);
      }
    }
  })(root);
  if (hits.length !== 1) {
    console.error(hits.length ? 'FAIL: more than one file claims id ' + id
                              : 'FAIL: no lesson file has id ' + id);
    process.exit(1);
  }
  return hits[0];
}

const FILE = findSource(LESSON_ID);
const before = require(FILE);

/* ── the sentences a `find` currently points at, captured BEFORE we replace ── */
const flat = (parts) => {
  const out = [];
  for (const p of (parts || [])) for (const t of (p.s || [])) {
    if (String(t).trim()) out.push(String(t));
  }
  return out;
};
const oldFlat = flat(before.parts);
const oldTargets = (before.questions || []).map(q =>
  (q.find || []).map(i => oldFlat[i]).filter(Boolean));

/* ── parse the rewritten text ── */
const raw = fs.readFileSync(TXT, 'utf8').replace(/\r\n/g, '\n');
const parts = [];
let cur = null;
for (const line of raw.split('\n')) {
  const t = line.trim();
  const h = t.match(/^#{1,6}\s+(.*)$/);
  if (h) { cur = { title: h[1].trim(), s: [] }; parts.push(cur); continue; }
  if (!cur) { if (t) { cur = { title: 'Untitled', s: [] }; parts.push(cur); } else continue; }
  /* A blank line is a paragraph break, but never two in a row and never first. */
  if (!t) { if (cur.s.length && cur.s[cur.s.length - 1] !== '') cur.s.push(''); continue; }
  cur.s.push(t);
}
while (parts.length && !parts[parts.length - 1].s.some(x => x.trim())) parts.pop();
for (const p of parts) while (p.s.length && p.s[p.s.length - 1] === '') p.s.pop();

if (!parts.length) { console.error('FAIL: no sections found. Did you use "## Heading" lines?'); process.exit(1); }

/* 🚨 Refuse two sentences on one line here rather than letting the build catch
   it later - the message is far clearer at the point of import. */
const SPLIT = /[.!?]["'”’]?\s+["'“‘]?[A-Z]/;
const ABBR = /(?:^|[\s("'“‘])(?:Mr|Mrs|Ms|Dr|Prof|Rev|St|Mt|Jr|Sr|No|vs|etc|[A-Z])\.$/;
let bad = 0;
parts.forEach((p, pi) => p.s.forEach((line, li) => {
  if (!line.trim()) return;
  SPLIT.lastIndex = 0;
  const re = new RegExp(SPLIT.source, 'g');
  let m;
  while ((m = re.exec(line)) !== null) {
    if (ABBR.test(line.slice(0, m.index + 1))) continue;
    bad++;
    console.error('FAIL: section ' + (pi + 1) + ' "' + p.title + '", line ' + (li + 1) +
                  ' holds more than one sentence:\n      ' + line.slice(0, 110));
    break;
  }
}));
if (bad) { console.error('\n' + bad + ' line(s) to split. One sentence per line - it may be long.'); process.exit(1); }

const newFlat = flat(parts);

/* ── similarity: word overlap, order-insensitive, cheap and good enough ── */
const words = (s) => String(s).toLowerCase().replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean);
function sim(a, b) {
  const A = words(a), B = new Set(words(b));
  if (!A.length) return 0;
  let hit = 0;
  for (const w of A) if (B.has(w)) hit++;
  return hit / Math.max(A.length, words(b).length || 1);
}

const THRESHOLD = 0.55;
const remapped = [];
const flagged = [];
const newFinds = oldTargets.map((targets, qi) => {
  const out = [];
  for (const text of targets) {
    let best = -1, score = 0;
    newFlat.forEach((cand, i) => { const s = sim(text, cand); if (s > score) { score = s; best = i; } });
    if (best >= 0 && score >= THRESHOLD) {
      out.push(best);
      remapped.push({ q: qi + 1, to: best, score, text: newFlat[best] });
    } else {
      flagged.push({ q: qi + 1, score, was: text });
    }
  }
  return [...new Set(out)].sort((a, b) => a - b);
});

/* ── report ── */
console.log('lesson : ' + LESSON_ID);
console.log('file   : ' + path.relative(path.join(__dirname, '..'), FILE));
console.log('prose  : ' + oldFlat.length + ' sentences -> ' + newFlat.length +
            '   (' + parts.length + ' sections)');
console.log('');
for (const r of remapped) {
  console.log('  Q' + r.q + ' -> [' + r.to + ']  ' + r.score.toFixed(2) + '  ' + r.text.slice(0, 62));
}
if (flagged.length) {
  console.log('\n🚨 ' + flagged.length + ' find target(s) could not be matched. Re-pick these by hand:');
  for (const f of flagged) {
    console.log('  Q' + f.q + '  best score ' + f.score.toFixed(2) +
                '\n     was pointing at: ' + String(f.was).slice(0, 72));
  }
}

/* ── write ── */
function replaceBlock(src, key, replacement) {
  const start = src.indexOf('\n  ' + key + ': [');
  if (start < 0) return null;
  let i = src.indexOf('[', start), depth = 0, end = -1;
  for (; i < src.length; i++) {
    const c = src[i];
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (!depth) { end = i; break; } }
  }
  if (end < 0) return null;
  return src.slice(0, start) + '\n  ' + key + ': ' + replacement + src.slice(end + 1);
}

const esc = (s) => JSON.stringify(String(s));
const partsLit = '[\n' + parts.map(p =>
  '    { title: ' + esc(p.title) + ', s: [\n' +
  p.s.map(x => '      ' + esc(x)).join(',\n') + '\n    ]}').join(',\n\n') + '\n  ]';

if (!WRITE) {
  console.log('\nDRY RUN. Nothing written. Add --write to apply.');
  process.exit(flagged.length ? 2 : 0);
}

let src = fs.readFileSync(FILE, 'utf8');
const swapped = replaceBlock(src, 'parts', partsLit);
if (!swapped) { console.error('FAIL: could not locate the parts block to replace.'); process.exit(1); }
src = swapped;

/* findsAt must equal the STORY count - todo is appended after and never counted. */
src = src.replace(/\n(\s*)findsAt: \d+,/, '\n$1findsAt: ' + newFlat.length + ',');

/* rewrite each question's find list, in order */
let qi = 0;
src = src.replace(/find: \[[^\]]*\]/g, () => {
  const list = newFinds[qi++] || [];
  return 'find: [' + list.join(', ') + ']';
});

fs.writeFileSync(FILE, src, 'utf8');
console.log('\nWRITTEN. Now run:');
console.log('  node tools/build-lessons.js . tools/lesson-template.html');
console.log('  node tools/check-spelling.js .');
if (flagged.length) console.log('\n⚠️ ' + flagged.length + ' find(s) left stale on purpose - fix them before shipping.');
