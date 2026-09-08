#!/usr/bin/env node
/* extract-lesson-assets.js — run LAST, after every generator.
 *
 *   node tools/extract-lesson-assets.js [--dry] [--dir lessons]
 *
 * Every built lesson page inlines the whole engine. Two maths lessons are 99.9%
 * identical, so a 222 KB page carries ~200 KB that every other page also carries.
 * This lifts each byte-identical <script>/<style> block out to /assets/ and links
 * it, so a browser downloads it once instead of on every page.
 *
 * SAFETY: a block is only extracted when it is BYTE-IDENTICAL across 2+ pages, and
 * it is replaced in document order with a plain <script src> (no defer/async), so
 * execution order and timing are unchanged. Anything unique to one page stays inline.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const DIR = (i => (i < 0 ? 'lessons' : args[i + 1]))(args.indexOf('--dir'));
const MIN = 2048;                       // bytes: below this, a link costs more than it saves

const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => {
    const p = path.join(d, e.name);
    return e.isDirectory() ? walk(p) : (e.name === 'index.html' ? [p] : []);
});

/** Every inline <script> (no src) and <style>, in document order. */
function blocks(html) {
    const out = [];
    const re = /<(script|style)([^>]*)>([\s\S]*?)<\/\1>/gi;
    for (let m; (m = re.exec(html));) {
        if (m[1].toLowerCase() === 'script' && /\ssrc\s*=/i.test(m[2])) continue;
        if (/\stype\s*=\s*["']application\/ld\+json["']/i.test(m[2])) continue;  // SEO, leave it
        out.push({ tag: m[1].toLowerCase(), attrs: m[2], body: m[3], start: m.index, end: re.lastIndex });
    }
    return out;
}

const sha = s => crypto.createHash('sha256').update(s).digest('hex').slice(0, 8);
const subjectOf = f => {
    const rel = path.relative(path.join(ROOT, DIR), f).split(path.sep);
    return rel.length > 1 ? rel[0] : 'lesson';
};

const files = fs.existsSync(path.join(ROOT, DIR)) ? walk(path.join(ROOT, DIR)) : [];
if (!files.length) { console.error(`no index.html under ${DIR}/`); process.exit(1); }

// Pass 1 — count how many pages share each exact block, per subject.
const seen = new Map();                 // key -> {tag, body, subject, pages:Set}
for (const f of files) {
    const html = fs.readFileSync(f, 'utf8');
    for (const b of blocks(html)) {
        if (b.body.length < MIN) continue;
        const key = b.tag + ':' + sha(b.body);
        if (!seen.has(key)) seen.set(key, { tag: b.tag, body: b.body, subject: subjectOf(f), pages: new Set() });
        seen.get(key).pages.add(f);
    }
}

const shared = [...seen.entries()].filter(([, v]) => v.pages.size >= 2);
if (!shared.length) { console.log('  nothing shared by 2+ pages. nothing to do.'); process.exit(0); }

// Pass 2 — write the assets.
const ASSETS = path.join(ROOT, 'assets');
fs.mkdirSync(ASSETS, { recursive: true });
const urlFor = new Map();
let written = 0;
for (const [key, v] of shared) {
    const ext = v.tag === 'script' ? 'js' : 'css';
    const name = `lesson-shared.${sha(v.body)}.${ext}`;
    urlFor.set(key, `/assets/${name}`);
    if (!DRY) fs.writeFileSync(path.join(ASSETS, name), v.body, 'utf8');
    written += v.body.length;
    console.log(`  ${v.pages.size.toString().padStart(3)} pages share ${(v.body.length / 1024).toFixed(0).padStart(4)} KB -> assets/${name}`);
}

// Pass 3 — rewrite each page, replacing shared blocks with a link, back to front.
let before = 0, after = 0, touched = 0;
for (const f of files) {
    const html = fs.readFileSync(f, 'utf8');
    let out = html;
    const bs = blocks(html).filter(b => urlFor.has(b.tag + ':' + sha(b.body)));
    for (const b of bs.reverse()) {
        const url = urlFor.get(b.tag + ':' + sha(b.body));
        const tagStr = b.tag === 'script'
            ? `<script src="${url}"></script>`
            : `<link rel="stylesheet" href="${url}">`;
        out = out.slice(0, b.start) + tagStr + out.slice(b.end);
    }
    before += html.length; after += out.length;
    if (out !== html) { touched++; if (!DRY) fs.writeFileSync(f, out, 'utf8'); }
}

/* Same sweep as split-lesson-engine.js: these files are hash-named, so editing
   the player writes a new one and orphans the old. Remove what nothing links. */
if (!DRY) {
    const wanted = new Set();
    for (const f of files)
        for (const m of fs.readFileSync(f, 'utf8').matchAll(/\/assets\/(lesson-shared\.[^"']+)/g))
            wanted.add(m[1]);
    let swept = 0;
    for (const f of fs.readdirSync(ASSETS)) {
        if (!/^lesson-shared\./.test(f) || wanted.has(f)) continue;
        fs.unlinkSync(path.join(ASSETS, f)); swept++;
        console.log(`  swept stale asset: ${f}`);
    }
    if (swept) console.log(`  ${swept} orphaned asset(s) removed`);
}

const pct = before ? Math.round((1 - after / before) * 100) : 0;
console.log(`\n  ${touched} of ${files.length} pages rewritten${DRY ? '  (DRY RUN, nothing written)' : ''}`);
console.log(`  pages: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB   (${pct}% smaller)`);
console.log(`  plus ${(written / 1024).toFixed(0)} KB of shared assets, downloaded once`);
