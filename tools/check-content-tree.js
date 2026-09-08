#!/usr/bin/env node
/* check-content-tree.js — a lesson's FOLDER must agree with its own data.
 *
 *   node tools/check-content-tree.js
 *
 * Run it with the other guards, last, after every generator.
 *
 * WHY THIS EXISTS
 * Lessons live at tools/content/grade-<g>/<subject>/unit-<n>/<slug>.js so a lesson
 * can be found without knowing which generator built it. That only stays true while
 * the path tells the truth. The grade and unit are ALSO inside the lesson object, so
 * there are two copies of the same fact — exactly the shape that let Rome sit on two
 * grade shelves for four days. This is the check that stops the folder becoming a
 * second, quietly wrong, source of truth.
 *
 * The path is the claim; the lesson's own data is the evidence. They must match.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const T = __dirname;
const ROOT = path.join(T, 'content');
if (!fs.existsSync(ROOT)) { console.error('check-content-tree: no tools/content/'); process.exit(1); }

const files = [];
(function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (e.name.endsWith('.js')) files.push(p);
    }
})(ROOT);

const fails = [];
for (const f of files) {
    const rel = path.relative(ROOT, f).split(path.sep);
    if (rel.length !== 4) { fails.push(`${rel.join('/')}\n      expected grade-<g>/<subject>/unit-<n>/<slug>.js`); continue; }
    const [gDir, subjDir, unitDir, file] = rel;
    const slug = file.replace(/\.js$/, '');

    let l;
    try { l = require(f); } catch (e) { fails.push(`${rel.join('/')}\n      will not load: ${e.message}`); continue; }

    const wantG = (gDir.match(/^grade-(.+)$/) || [])[1];
    const wantU = (unitDir.match(/^unit-(.+)$/) || [])[1];
    const gotG = String((l.shelf && l.shelf.grades && l.shelf.grades[0]) ?? '').toLowerCase();
    const rawU = String((l.seq && l.seq.unit) || l.unit || '');
    const m = rawU.match(/Unit\s*(\d+)/i);
    const gotU = m ? m[1] : (/^\d+$/.test(rawU) ? rawU : null);
    const [gotSubj, gotSlug] = String(l.id || '').split('/');

    const say = [];
    if (wantG !== gotG) say.push(`folder says grade ${wantG}, lesson says ${gotG || '(none)'}`);
    if (wantU !== gotU) say.push(`folder says unit ${wantU}, lesson says ${gotU ?? `"${rawU}"`}`);
    if (subjDir !== gotSubj) say.push(`folder says subject ${subjDir}, id says ${gotSubj}`);
    if (slug !== gotSlug) say.push(`file is ${slug}.js, id says ${gotSlug}`);
    if (say.length) fails.push(rel.join('/') + '\n      ' + say.join('\n      '));
}

if (fails.length) {
    console.error(`\ncheck-content-tree FAILED — ${fails.length} lesson(s) are not where they say they are:\n`);
    for (const f of fails) console.error('  - ' + f + '\n');
    console.error('  Move the file, or fix the lesson. Do not leave the two disagreeing.\n');
    process.exit(1);
}
console.log(`OK — all ${files.length} lessons sit in the folder their own data claims.`);
