#!/usr/bin/env node
/* split-lesson-engine.js — run after the generators, before extract-lesson-assets.js.
 *
 *   node tools/split-lesson-engine.js [--dry] [--subject maths]
 *
 * Every lesson page inlines its whole player. Within one subject the pages are
 * 99.9% identical: only a handful of `var` lines at the top differ, which is the
 * lesson's own data. This splits that one <script> in two:
 *
 *     inline   var LESSON_ID = ...; var CAPS = ...;      (this lesson only)
 *     external (function(){ "use strict";  ...engine... })();   -> /assets/
 *
 * so a browser downloads the engine once per subject instead of once per lesson.
 *
 * HOW THE BOUNDARY IS FOUND — never hard-coded:
 *   prefix = lines every page in the subject shares at the TOP    (the IIFE opener)
 *   suffix = lines every page in the subject shares at the BOTTOM (the engine)
 *   middle = whatever is left, which is by definition this page's own data
 * A subject is SKIPPED unless the middle is a clean run of top-level `var` lines,
 * so an unexpected shape is left alone rather than half-transformed.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const ONLY = (i => (i < 0 ? null : args[i + 1]))(args.indexOf('--subject'));
const MIN_ENGINE_LINES = 1200;   /* below this a shared file is not worth the request */

const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => {
    const p = path.join(d, e.name);
    return e.isDirectory() ? walk(p) : (e.name === 'index.html' ? [p] : []);
});
const sha = s => crypto.createHash('sha256').update(s).digest('hex').slice(0, 8);

/** The biggest inline <script> on the page — the player. */
function player(html) {
    const re = /<script(?![^>]*\ssrc\s*=)([^>]*)>([\s\S]*?)<\/script>/gi;
    let best = null;
    for (let m; (m = re.exec(html));) {
        if (/application\/ld\+json/i.test(m[1])) continue;
        if (!best || m[2].length > best.body.length)
            best = { body: m[2], start: m.index, end: re.lastIndex };
    }
    return best;
}

const LESSONS = path.join(ROOT, 'lessons');
if (!fs.existsSync(LESSONS)) { console.error('no lessons/ directory'); process.exit(1); }

/* Shared lines at the top and bottom of a set of pages. */
function edges(L) {
    let pre = 0;
    outerP: while (pre < Math.min(...L.map(x => x.length))) {
        const v = L[0][pre];
        for (const x of L) if (x[pre] !== v) break outerP;
        pre++;
    }
    let suf = 0;
    outerS: while (suf < Math.min(...L.map(x => x.length)) - pre) {
        const v = L[0][L[0].length - 1 - suf];
        for (const x of L) if (x[x.length - 1 - suf] !== v) break outerS;
        suf++;
    }
    return { pre, suf };
}
/* The middle is whatever DIFFERS between the pages of a cluster, so by
   construction it is this lesson's own content and the shared engine cannot
   contain any of it — that is the structural guarantee, not this check.
   (An earlier version demanded every middle line start with `var`, which was
   both over-strict — multi-line literals and `function solidIcon` are data too —
   and beside the point.) What is left to verify is only that the middle looks
   like declarations rather than engine code that happens to vary. */
const isData = m => {
    if (!m.some(l => l.trim())) return false;                 // nothing varies: not a data block
    if (m.some(l => /<\/script>/i.test(l))) return false;     // sanity
    const starts = m.filter(l => /^\S/.test(l) && l.trim());  // statements at column 0
    if (!starts.length) return false;
    return starts.every(l => /^(var|let|const|function)\s/.test(l) ||
                             /^(\/\*|\*|\/\/)/.test(l) ||
                             /^[)\]}]/.test(l));
};

/* A subject is not one engine: maths alone runs several different players.
 * So cluster by ENGINE SHAPE — a page joins a cluster only if the shared top
 * and bottom still cover 90%+ of its lines and the middle stays pure data. */
const all = [];
for (const f of walk(LESSONS)) {
    const sub = path.relative(LESSONS, f).split(path.sep)[0];
    if (ONLY && sub !== ONLY) continue;
    const html = fs.readFileSync(f, 'utf8');
    const p = player(html);
    if (p && p.body.length > 20000)
        all.push({ f, sub, html, p, lines: p.body.split('\n') });
}
const clusters = [];
for (const page of all) {
    let joined = false;
    for (const c of clusters) {
        const L = [...c.map(x => x.lines), page.lines];
        const { pre, suf } = edges(L);
        /* The test is "is the SHARED ENGINE still big enough to be worth a file",
           not "is this lesson's data small". An earlier version required the
           shared part to be 90% of the page, which quietly excluded the five
           richest lessons — the ones with the most content, and so the fattest
           pages, exactly the ones worth fixing. A lesson may have as much data as
           it likes; what matters is that the engine underneath is still shared. */
        if (pre + suf >= MIN_ENGINE_LINES &&
            L.every(x => isData(x.slice(pre, x.length - suf)))) { c.push(page); joined = true; break; }
    }
    if (!joined) clusters.push([page]);
}
const bySubject = new Map(clusters.map((c, i) => [`${c[0].sub}-${i}`, c]));
if (!bySubject.size) { console.error('no lesson players found'); process.exit(1); }

let totalBefore = 0, totalAfter = 0, engineBytes = 0, pagesDone = 0;

for (const [sub, pages] of bySubject) {
    if (pages.length < 2) { console.log(`  ${sub}: single page, left inline`); continue; }

    // Longest common prefix / suffix of lines across every page in the subject.
    const L = pages.map(x => x.lines);
    const { pre, suf } = edges(L);

    // The middle must be this page's data: blank lines and top-level `var NAME = ...;`
    const middles = L.map(x => x.slice(pre, x.length - suf));
    const clean = middles.every(isData);
    if (!clean) {
        console.log(`  ${sub}: middle is not a clean run of var lines, SKIPPED (safe default)`);
        continue;
    }

    // The engine is the shared prefix (IIFE opener) plus the shared suffix.
    const engine = L[0].slice(0, pre).join('\n') + '\n' + L[0].slice(L[0].length - suf).join('\n');
    const name = `lesson-engine-${sub}.${sha(engine)}.js`;
    if (!DRY) {
        fs.mkdirSync(path.join(ROOT, 'assets'), { recursive: true });
        fs.writeFileSync(path.join(ROOT, 'assets', name), engine, 'utf8');
    }
    engineBytes += engine.length;

    /* 🚨 THE DATA BLOCK MUST NOT CALL THE ENGINE. It runs FIRST; the engine file
       loads after it. So a helper the data needs — `icon`, `solidIcon` — has to
       be inside the varying middle, not filed with the shared engine above it.
       This shipped once: `var ART = { ...icon(...) }` threw "icon is not defined"
       and every history, science and English lesson rendered with NO STORY. The
       build was clean, all four other guards passed, and only opening the page
       in a browser showed it. Hence this check. */
    const BUILTIN = new Set(['if', 'for', 'while', 'switch', 'catch', 'return', 'function',
        'typeof', 'map', 'join', 'filter', 'forEach', 'concat', 'slice', 'split', 'replace',
        'push', 'indexOf', 'test', 'match', 'trim', 'toString', 'parseInt', 'parseFloat',
        'scaleX', 'encodeURIComponent', 'decodeURIComponent']);
    for (let i = 0; i < pages.length; i++) {
        const d = middles[i].join('\n');
        const has = new Set();
        for (const m of d.matchAll(/^\s*(?:function\s+([A-Za-z_$][\w$]*)|var\s+([A-Za-z_$][\w$]*))/gm))
            has.add(m[1] || m[2]);
        const missing = [...new Set([...d.matchAll(/\b([a-z][A-Za-z0-9_$]*)\s*\(/g)].map(m => m[1]))]
            .filter(n => !has.has(n) && !BUILTIN.has(n));
        if (missing.length) {
            console.error(`\nsplit-lesson-engine FAILED on ${path.relative(ROOT, pages[i].f)}`);
            console.error(`  its data block calls ${missing.join(', ')} but does not define them,`);
            console.error(`  and the engine that would define them loads AFTER it.`);
            console.error(`  Move those helpers into the per-lesson block in lesson-template.html,`);
            console.error(`  between LESSON_ID and the data that uses them.\n`);
            process.exit(1);
        }
    }

    for (let i = 0; i < pages.length; i++) {
        const { f, html, p } = pages[i];
        const data = middles[i].join('\n').trim();
        const replacement =
            `<script>\n${data}\n</script>\n<script src="/assets/${name}"></script>`;
        const out = html.slice(0, p.start) + replacement + html.slice(p.end);
        totalBefore += html.length; totalAfter += out.length; pagesDone++;
        if (!DRY) fs.writeFileSync(f, out, 'utf8');
    }
    console.log(`  ${sub.padEnd(9)} ${String(pages.length).padStart(2)} pages  engine ${(engine.length / 1024).toFixed(0).padStart(3)} KB  data ${(middles[0].join('\n').length / 1024).toFixed(1)} KB/page`);
}

/* Engine files are named by content hash, so every edit to the player writes a
   NEW one and leaves the old behind. Four had already piled up before anyone
   looked. Sweep any lesson-engine-*.js that no built page references. */
if (!DRY) {
    const A = path.join(ROOT, 'assets');
    const wanted = new Set();
    for (const f of walk(LESSONS))
        for (const m of fs.readFileSync(f, 'utf8').matchAll(/\/assets\/(lesson-engine-[^"']+)/g))
            wanted.add(m[1]);
    let swept = 0;
    for (const f of fs.readdirSync(A)) {
        if (!/^lesson-engine-.*\.js$/.test(f) || wanted.has(f)) continue;
        fs.unlinkSync(path.join(A, f)); swept++;
        console.log(`  swept stale engine: ${f}`);
    }
    if (swept) console.log(`  ${swept} orphaned engine file(s) removed`);
}

const pct = totalBefore ? Math.round((1 - totalAfter / totalBefore) * 100) : 0;
console.log(`\n  ${pagesDone} pages${DRY ? '  (DRY RUN, nothing written)' : ''}`);
console.log(`  pages: ${(totalBefore / 1024).toFixed(0)} KB -> ${(totalAfter / 1024).toFixed(0)} KB   (${pct}% smaller)`);
console.log(`  plus ${(engineBytes / 1024).toFixed(0)} KB of engines, one download per subject`);
