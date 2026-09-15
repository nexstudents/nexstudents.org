#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   check-spelling.js — this is an AMERICAN site. Fail the build on British
   spellings in lesson content.        node tools/check-spelling.js .

   🚨 WHY THIS EXISTS. On 2026-09-13 I wrote a science lesson that said
   "aluminium", "programme" and "rubbish". I caught it, ran a fix, and reported
   it clean. It was not clean: the pattern was lowercase-only, so "Aluminium"
   at the start of a sentence survived, and PAUL SAW IT ON THE PAGE.

   ⚠️ THAT IS THE SECOND TIME THE SAME TRAP HAS BITTEN THIS PROJECT. CLAUDE.md
   already records it from the Maths -> Math rename: "A case-sensitive grep gave
   a false all-clear on that pass and Paul found the leftover on screen."
   A grep is not a guard. This is a guard.

   The same sweep also turned up FOUR live lessons that had been shipping
   British spellings for weeks - "the centre of Rome", "a few hundred metres",
   "important words to recognise". Nothing had ever checked.

   🚨 Paul is American and it grates. Memory already carries the rule for
   "Maths" -> [[feedback-say-math-not-maths]]; this is the same rule, widened.

   ⚠️ MATCHES ARE CASE-INSENSITIVE, ON PURPOSE. That is the whole point.
   ⚠️ Checks lesson CONTENT only - tools/content/. Not build scripts, not docs.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || '.';
const DIR = path.join(__dirname, 'content');

/* 🚨 "maths" IS NOT IN THIS LIST AND MUST NOT BE. It is the deliberate URL
   TOKEN - CLAUDE.md: "The label is Math; the URL token stays maths." Every
   lesson id, folder and pic path uses it. Flagging it produced 90+ false
   positives and "fixing" them would break every maths URL on the site.
   The Math-vs-Maths rule is about the DISPLAY LABEL, which is a different thing.

   british -> american. Kept narrow and unambiguous: every entry here is a word
   that is simply WRONG on this site, never a judgement call.
   ⚠️ Do NOT add words whose British form is also a valid American word with a
   different meaning. "Metre" the unit is wrong; "meter" the device is not. */
const BAD = [
  ['aluminium', 'aluminum'], ['programme', 'program'], ['rubbish', 'trash'],
  ['colour', 'color'], ['behaviour', 'behavior'], ['favourite', 'favorite'],
  ['neighbour', 'neighbor'], ['honour', 'honor'], ['labour', 'labor'],
  ['realise', 'realize'], ['organise', 'organize'], ['recognise', 'recognize'],
  ['apologise', 'apologize'], ['analyse', 'analyze'], ['practise', 'practice'],
  ['metres', 'meters'], ['litres', 'liters'], ['centre', 'center'],
  ['theatre', 'theater'], ['defence', 'defense'], ['travelled', 'traveled'],
  /* added 2026-09-15: the list had 'travelled' and not 'traveller', so a
     British spelling shipped in a history lesson past a green check. When a
     word gets in, add every form of it, not the one that bit. */
  ['traveller', 'traveler'], ['travellers', 'travelers'], ['travelling', 'traveling'],
  ['cancelled', 'canceled'], ['whilst', 'while'],
];

/* Exact strings that are quotations and must survive verbatim. */
const ALLOW = [
  "honour of kings",
];

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.js')) out.push(p);
  }
  return out;
}

if (!fs.existsSync(DIR)) {
  console.error('FAIL: check-spelling.js — cannot find tools/content/');
  process.exit(1);
}

let bad = 0;
for (const file of walk(DIR, [])) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const [wrong, right] of BAD) {
      /* \b both sides so "colour" does not fire on a longer unrelated word,
         and the i flag so a capitalised one cannot slip through. */
      const re = new RegExp('\\b' + wrong + '\\b', 'i');
      const m = re.exec(line);
      if (!m) continue;
      /* 🚨 SCRIPTURE IS QUOTED, NOT WRITTEN. The KJV says "the honour of kings";
         correcting a Bible quotation to American spelling would be falsifying it. */
      if (ALLOW.some((a) => line.includes(a))) continue;
      bad++;
      console.error('FAIL: ' + path.relative(__dirname, file) + ':' + (i + 1) +
        '  "' + m[0] + '" is British. This is an American site — use "' + right + '".\n' +
        '      ' + line.trim().slice(0, 100));
    }
  });
}

if (bad) {
  console.error('\n' + bad + ' British spelling(s). Paul is American and it grates.');
  process.exit(1);
}
console.log('check-spelling: clean — ' + walk(DIR, []).length + ' lesson files, ' +
            BAD.length + ' words checked, case-insensitively.');
