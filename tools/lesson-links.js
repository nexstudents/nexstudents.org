#!/usr/bin/env node
/* lesson-links.js — write the review links for every built lesson to memory.
       node tools/lesson-links.js

   🚨 WHY IT IS A SCRIPT AND NOT A TYPED LIST. Paul, 2026-09-13: "i want all the
   lesson links so i can see them first hand. save them so if the power goes out
   we have them saved to memory." A hand-typed list goes stale the moment a
   lesson ships. This regenerates from the registries, so it cannot lie.

   Writes to the claude-memory repo, which is committed and pushed - so the list
   survives a power cut, a closed terminal and a new session. */
'use strict';
const fs = require('fs'), path = require('path');
const MEM = "C:/Users/Paul's PC2/.claude/projects/D--Paul-s-PC2-Documents-Claude-Projects-Core-Memory/memory";
const OUT = path.join(MEM, 'reference_lesson_links.md');
const TS = '100.91.145.95:4321';

const REG = [
  ['lessons.js', 'LESSONS'], ['split-lessons.js', 'SPLIT'],
  ['english-lessons.js', 'ENGLISH'], ['math-lessons.js', 'MATH'],
  ['integers-lessons.js', 'INTEGERS'],
];
const all = [];
for (const [file, key] of REG) {
  let m; try { m = require('./' + file); } catch (e) { continue; }
  for (const L of (m[key] || [])) all.push(L);
}
const built = all.filter(L => fs.existsSync(path.join(__dirname, '..', 'lessons', L.id, 'index.html')));
const bySub = {};
for (const L of built) {
  const s = (L.shelf && L.shelf.subject) || L.id.split('/')[0];
  (bySub[s] = bySub[s] || []).push(L);
}
const ord = (L) => (L.seq ? L.seq.unit * 100 + L.seq.n : 9999);
let md = '---\nname: reference-lesson-links\n' +
  'description: "Every built NexStudents lesson and its local review link. Regenerate with tools/lesson-links.js - never hand-edit."\n' +
  'metadata:\n  type: reference\n---\n\n';
md += '# Lesson links — every built lesson\n**Last generated: ' + new Date().toISOString().slice(0, 10) + '**\n\n';
md += '🚨 **GENERATED.** `node tools/lesson-links.js` in `nexstudents.org`. Do not hand-edit.\n\n';
md += 'The review server must be running: `node tools/build-review.js --serve` from `Core_Memory`.\n';
md += 'Tailscale **' + TS + '** (phone) or **127.0.0.1:4321** (this PC).\n\n';
md += '**' + built.length + ' lessons built.**\n';
for (const s of Object.keys(bySub).sort()) {
  md += '\n## ' + s + ' (' + bySub[s].length + ')\n\n';
  for (const L of bySub[s].sort((a, b) => ord(a) - ord(b))) {
    const lab = L.unit ? String(L.unit).replace(/&middot;/g, '·') : '';
    md += '- **' + L.title + '**' + (lab ? '  \n  `' + lab + '`' : '') +
          '  \n  http://' + TS + '/preview/' + L.id + '/\n';
  }
}
md += '\n---\n⚠️ A link 404s unless that lesson id is named in `review-queue.json`\'s `preview` list,\n' +
      'or the server was started after it was built. The allowlist is deliberate\n' +
      '→ [[feedback-one-review-queue]].\n';
fs.writeFileSync(OUT, md, 'utf8');
console.log('wrote ' + built.length + ' lessons -> ' + OUT);
