#!/usr/bin/env node
/* check-shelves.js — a lesson belongs on exactly ONE grade shelf: its own.
 *
 *   node tools/check-shelves.js .
 *
 * Run it with check-links.js, last, after every generator.
 *
 * WHY THIS EXISTS
 * Paul, 2026-08-30: "it only needs to be in one place ... moving them burns more
 * tokens." A lesson's grade lives in its data, but what actually puts it on a
 * shelf is code, and the two drifted: Rome moved to grade 7 on 2026-09-04 while
 * TWO separate call sites kept shelving it at grade 6 — the COURSE_SHELVES table
 * and the `g === 7 || g === 6` branch in gradeLessons(). Both live Rome lessons
 * sat on two shelves for four days with nothing complaining. Fixing either one
 * alone changed nothing, which is exactly why a guard beats a careful edit.
 *
 * This compares the DATA against the BUILT SITE, so it cannot be fooled by a
 * mapping table that looks right.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(process.argv[2] || '.');
const TOOLS = __dirname;

/* Every lesson, from all four registries. They are split by generator, not by
   grade, which is its own reason this check has to look at the built pages. */
const REGISTRIES = ['lessons.js', 'math-lessons.js', 'integers-lessons.js', 'english-lessons.js'];
const lessons = [];
for (const f of REGISTRIES) {
    const p = path.join(TOOLS, f);
    if (!fs.existsSync(p)) continue;
    const mod = require(p);
    const arr = Object.values(mod).find(Array.isArray);
    if (arr) for (const l of arr) lessons.push({ id: l.id, grades: (l.shelf && l.shelf.grades) || [], from: f });
}
if (!lessons.length) { console.error('check-shelves: found no lessons — the registries moved?'); process.exit(1); }

/* Every page EXCEPT the built lesson pages themselves, which legitimately
   link their own siblings through the prev/next strip. */
const pages = [];
(function walk(d, depth) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) {
            if (e.name === '.git' || e.name === 'node_modules') continue;
            if (depth === 0 && e.name === 'lessons') continue;
            walk(p, depth + 1);
        } else if (e.name === 'index.html') pages.push(p);
    }
})(ROOT, 0);

const text = new Map(pages.map(p => [p, fs.readFileSync(p, 'utf8')]));
const fails = [];
let checked = 0;

for (const l of lessons) {
    const href = `/lessons/${l.id}/`;
    const on = new Set();
    for (const [p, t] of text) {
        if (!t.includes(href)) continue;
        const m = path.relative(ROOT, p).split(path.sep).join('/').match(/^grade-([k0-9]+)\//i);
        if (m) on.add(m[1].toLowerCase());
    }
    if (!on.size) continue;                       // not shelved yet: that is a different check
    checked++;
    const want = l.grades.map(g => String(g).toLowerCase()).sort().join(',');
    const got = [...on].sort().join(',');
    if (want !== got) {
        fails.push(`${l.id}\n      data says grade ${want || '(none)'}, but it is shelved on ${got}` +
                   `\n      registry: ${l.from}`);
    }
}

if (fails.length) {
    console.error(`\ncheck-shelves FAILED — ${fails.length} lesson(s) are not on exactly their own grade:\n`);
    for (const f of fails) console.error('  - ' + f + '\n');
    console.error('  A lesson belongs on ONE grade shelf. Either fix the shelving code, or');
    console.error('  change the lesson\'s own shelf.grades if the grade really did move.\n');
    process.exit(1);
}
console.log(`OK — all ${checked} shelved lessons are on exactly their own grade.`);
