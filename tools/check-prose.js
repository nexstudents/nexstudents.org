#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   MEASURE THE PROSE.   node tools/check-prose.js .

   Paul, 2026-09-15, after reading two history lessons:
     "you keep stopping every thing with a period. you make one short sentence
      [period]. then another sentence [period]. and so on. you are not using
      commas, apostrophes, ; etc... there is no depth with some of you
      sentencing ... plus all your sentences feel the same length. it's one
      reason why I almost thought the voice scrubber was gone? why, because you
      made the story so long and so many short sentences it faded into the
      background."

   🚨 THE CAUSE IS A GUARD BEING SATISFIED THE LAZY WAY.
   `checkOneSentence()` fails a build when one `s` entry holds two SENTENCES,
   and it is right to: one entry is one highlight band and one audio clip. But
   it says nothing about how long a sentence may be. A sentence carrying three
   clauses, two commas and a semicolon is still ONE sentence and passes.

   I read that guard as "write short lines" and it never said that. So the
   lessons came out as a stack of eight-word declaratives, every one the same
   length, and the reader's eye has nothing to ride. On this site it is worse
   than on paper, because every entry is a separate highlight band: 183 of them
   in conquest-and-city-life, crawling one at a time, which is why Paul thought
   the scrub bar had stopped working.

   THE CONTROL, measured 2026-09-15. Paul's own writing against mine:

     lesson                                lines  avg  median  ,%    <8w
     PAUL: complete-subjects-and-predicates   18  19.6    17   17%    0%
     PAUL: what-makes-something-alive         64  10.0    10   31%   33%
     ME:   conquest-and-city-life            183   9.2     8   21%   48%

   Nearly half of mine are under eight words. None of his are.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || '.';
const DIR = path.join(__dirname, 'content');

/* ⚠️ WARN, DO NOT FAIL, ON THE NUMBERS. Prose is a judgement and a hard gate on
   a median would get gamed by padding sentences, which is the same disease in
   the other direction. The BANNED PHRASES below do fail: those are not
   judgement calls, they are a template tic. */
const MEDIAN_FLOOR = 11;   /* Paul's own two lessons sit at 17 and 10 */
const SHORT_CEILING = 30;  /* % of lines under eight words */
const COMMA_FLOOR = 25;    /* % of lines carrying a comma */

/* 🚨 PHRASES I PASTED INTO LESSON AFTER LESSON. Paul, 2026-09-15: "you always
   say these this phrase 'That is the reading done' ... it feels unnatural;
   actually it is unnatural! ... it's all really ugly and looks so watered down
   and feels like ai." He had said it before and it kept shipping. A build is
   the only thing that reliably stops me repeating myself. */
const BANNED = [
  ['That is the reading done', 'Write an opening that belongs to THIS lesson.'],
  ['Now that we have learned', 'Do not narrate the lesson. Keep teaching.'],
  ['Let us take a closer look', 'Just look at it.'],
  ['In this lesson you will learn', 'Start with the thing, not the announcement.'],
  ['It is important to understand that', 'Say the thing instead.'],
  ['This demonstrates the importance of', 'Let the example carry it.']
];

function walk(d) {
  let out = [];
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    out = fs.statSync(p).isDirectory() ? out.concat(walk(p)) : (f.endsWith('.js') ? out.concat([p]) : out);
  }
  return out;
}

const files = walk(DIR);
const fails = [];
const warns = [];
const rows = [];

for (const file of files) {
  let L;
  try { L = require(file); } catch (e) { continue; }
  if (!L || !L.slug) continue;

  /* every line the student actually reads: the story, then the assignment */
  const lines = [];
  (L.parts || []).forEach(p => (p.s || []).forEach(t => {
    let x = String(t).replace(/^\[(?:ex|verse)\] /, '');
    if (x.trim()) lines.push(x);
  }));
  (L.todo && L.todo.s ? L.todo.s : []).forEach(t => { if (String(t).trim()) lines.push(String(t)); });
  if (lines.length < 6) continue;

  for (const [phrase, why] of BANNED) {
    const hit = lines.find(l => l.toLowerCase().indexOf(phrase.toLowerCase()) > -1);
    if (hit) fails.push(L.slug + '\n      banned phrase: "' + phrase + '"\n      ' + why + '\n        ' + hit.slice(0, 90));
  }

  const w = lines.map(t => t.trim().split(/\s+/).length).sort((a, b) => a - b);
  const median = w[Math.floor(w.length / 2)];
  const short = Math.round(w.filter(x => x < 8).length / w.length * 100);
  const comma = Math.round(lines.filter(t => t.indexOf(',') > -1).length / lines.length * 100);
  rows.push({ slug: L.slug, n: lines.length, median: median, short: short, comma: comma });

  /* 🚨 A PARAGRAPH MAKES A FULL POINT AND THEN STOPS. Paul, 2026-09-15:
     "paragraphs usually make a full point before moving through the next
     paragraph." Mine ran 1.9 sentences a paragraph with 44% of them a single
     line, so nothing ever finished a thought; his run 3.0. A break every two
     sentences reads as a list of fragments however good the sentences are. */
  const paras = [];
  let run = 0;
  /* ⚠️ AN EXAMPLE BOX IS NOT A PARAGRAPH. A specimen sentence held up in an
     [ex] or [verse] block is SUPPOSED to stand alone, so counting it drags the
     average down and reports flat prose that is not flat. Skip the block, and
     treat it as a break like a blank line. */
  (L.parts || []).forEach(p => { (p.s || []).forEach(t => {
    const line = String(t).trim();
    const marked = line.indexOf("[ex] ") === 0 || line.indexOf("[verse] ") === 0;
    if (line && !marked) run++; else { if (run) paras.push(run); run = 0; }
  }); if (run) { paras.push(run); run = 0; } });
  const perPara = paras.length ? (paras.reduce((a, b) => a + b, 0) / paras.length) : 0;
  const singles = paras.length ? Math.round(paras.filter(x => x === 1).length / paras.length * 100) : 0;
  rows[rows.length - 1].para = perPara.toFixed(1);
  rows[rows.length - 1].single = singles;

  /* 🚨 THE DRUMBEAT. An average hides this completely: a lesson can sit on a
     median of 15 and still have three four-word stubs back to back, and three
     in a row is what a reader actually hears.

     Paul, 2026-09-17: "you keep using periods over and over and it doesn't
     sound fluid ... you might even need to use compound subjects and
     predicates in your own writing." He was reading a lesson whose median and
     short% BOTH passed, so nothing here caught it.

     ⚠️ Runs are counted inside a paragraph only. A short line either side of a
     blank line is a new thought, and often a deliberate closing beat. */
  let worstRun = 0, runNow = 0, worstAt = "";
  (L.parts || []).forEach(p => { (p.s || []).forEach(t => {
    const line = String(t).trim();
    if (!line) { runNow = 0; return; }
    if (line.split(/\s+/).length < 8) {
      runNow++;
      if (runNow > worstRun) { worstRun = runNow; worstAt = line; }
    } else runNow = 0;
  }); runNow = 0; });
  rows[rows.length - 1].run = worstRun;

  const bad = [];
  if (worstRun >= 3)
    bad.push(worstRun + ' short sentences in a row ("' + worstAt.slice(0, 40) +
             '") - join them with and/but/or, do not chop further');
  if (median < MEDIAN_FLOOR) bad.push('median ' + median + ' words (want ' + MEDIAN_FLOOR + '+)');
  if (short > SHORT_CEILING) bad.push(short + '% of lines under 8 words (want under ' + SHORT_CEILING + '%)');
  if (perPara < 2.5) bad.push("paragraphs average " + perPara.toFixed(1) + " sentences (want 2.5+, Paul runs 3.0)");
  if (singles > 35) bad.push(singles + "% of paragraphs are a single sentence (want under 35%)");
  if (comma < COMMA_FLOOR) bad.push('only ' + comma + '% of lines carry a comma (want ' + COMMA_FLOOR + '%+)');
  if (bad.length) warns.push(L.slug + ' - ' + bad.join(' · '));
}

rows.sort((a, b) => a.median - b.median);
console.log('\n  lesson'.padEnd(46) + 'lines  median  <8w   ,   run');
for (const r of rows) {
  console.log('  ' + r.slug.slice(0, 42).padEnd(44) + String(r.n).padEnd(7) + String(r.median).padEnd(8) +
              (r.short + '%').padEnd(6) + (r.comma + '%').padEnd(6) + String(r.para).padEnd(8) + (r.single + '%').padEnd(7) + String(r.run||0));
}

if (warns.length) {
  console.log('\n  FLAT PROSE, ' + warns.length + ' lesson(s). Not a build failure, but read them again:');
  for (const w of warns) console.log('    · ' + w);
  console.log('\n  🚨 A LONG SENTENCE IS STILL ONE SENTENCE. checkOneSentence() bans two');
  console.log('     sentences in an entry, never a sentence with commas and clauses in it.');
}

if (fails.length) {
  console.error('\ncheck-prose FAILED — ' + fails.length + ' banned phrase(s):\n');
  for (const f of fails) console.error('  - ' + f + '\n');
  process.exit(1);
}
console.log('\ncheck-prose: no banned phrases in ' + rows.length + ' lessons.\n');
