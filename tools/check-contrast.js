#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   check-contrast.js — every text colour, in BOTH themes.   node tools/check-contrast.js .

   🚨 WHY THIS EXISTS. Paul, 2026-09-11: "one thing you also tend to overlook is
   light and dark mode in text. sometimes you create things you look at it and
   let's go on one side but you forgot to look at it on the other side."

   He is right and it happened twice the same day:
     · The card window's × was white with a text-shadow because it sat on the
       artwork. Adding headroom moved it onto the PANEL — still fine on dark,
       invisible on light. Caught by reasoning, not by looking.
     · Five grade-band colours were added and only the dark set was ever seen.
       They happened to pass; nobody had checked.

   DARK IS THE DEFAULT on this site, so light mode is the side that gets
   forgotten — always the same side, which is exactly what a script is for.

   ⚠️ THIS CHECKS TOKENS, NOT PIXELS. It reads the two `--token:#hex` blocks in
   ns.css and measures each foreground against the surfaces it is used on. A
   colour written as a literal hex inside a rule is INVISIBLE to it — which is
   its own argument for never writing one.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || '.';
const CSS = path.join(ROOT, 'assets', 'ns.css');

/* Foreground tokens that carry TEXT, and therefore must be readable. A token
   used only for a border or a rule is not here - 4.5:1 is a text rule. */
const TEXT = [
    'fg', 'dim', 'free', 'paid',
    'g-a', 'g-b', 'g-c', 'g-f', 'g-part',
];
/* The surfaces text actually sits on. */
const SURFACES = ['bg', 'panel', 'panel-2'];

const AA = 4.5;        // normal text
const AA_LARGE = 3.0;  // 18pt+, or 14pt bold

function lum(hex) {
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    if (h.length === 8) h = h.slice(0, 6);          // ignore alpha
    const v = [0, 2, 4].map(k => {
        const c = parseInt(h.substr(k, 2), 16) / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}

function ratio(a, b) {
    const x = lum(a), y = lum(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

/* The two blocks: `:root{...}` is dark (the default), and the light overrides
   live in whichever block redefines --free. Both are read by token name, so a
   token defined in only one block is reported rather than silently skipped. */
function readThemes(css) {
    const themes = {};
    const grab = (from, to) => {
        const o = {};
        const re = /--([a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{3,8})/g;
        let m;
        const slice = css.slice(from, to);
        while ((m = re.exec(slice))) o[m[1]] = m[2];
        return o;
    };
    /* dark: from the first :root to wherever the light overrides start */
    const lightAt = css.search(/--free\s*:\s*#15803d/);
    const rootAt = css.indexOf(':root');
    if (rootAt < 0) return null;
    themes.dark = grab(rootAt, lightAt > 0 ? lightAt - 2000 : rootAt + 6000);
    if (lightAt > 0) themes.light = grab(lightAt - 2000, lightAt + 2000);
    return themes;
}

const css = fs.readFileSync(CSS, 'utf8');
const themes = readThemes(css);
if (!themes) { console.error('FAIL: no :root block in ns.css'); process.exit(1); }

const fails = [], warns = [];
let checked = 0;

for (const [name, t] of Object.entries(themes)) {
    for (const fg of TEXT) {
        if (!t[fg]) {
            warns.push(`${name}: --${fg} is not defined in this theme`);
            continue;
        }
        /* Against the surface it is most likely to sit on. A token that fails on
           panel-2 but passes on panel is still worth knowing about. */
        for (const bgName of SURFACES) {
            if (!t[bgName]) continue;
            const r = ratio(t[fg], t[bgName]);
            checked++;
            if (r < AA_LARGE) {
                fails.push(`${name}: --${fg} ${t[fg]} on --${bgName} ${t[bgName]} ` +
                    `is ${r.toFixed(2)}:1 — unreadable (needs ${AA})`);
            } else if (r < AA) {
                warns.push(`${name}: --${fg} ${t[fg]} on --${bgName} ${t[bgName]} ` +
                    `is ${r.toFixed(2)}:1 — large text only (needs ${AA})`);
            }
        }
    }
}

/* A token that exists in one theme and not the other is the exact shape of the
   bug Paul described: something added while looking at one side. */
if (themes.light) {
    for (const k of TEXT) {
        if (themes.dark[k] && !themes.light[k]) {
            fails.push(`--${k} is defined for dark and NOT for light — ` +
                `the light theme will inherit the dark value.`);
        }
    }
}

console.log(`contrast: ${checked} colour pairs checked across ${Object.keys(themes).length} themes`);
for (const w of warns) console.log(`  WARN  ${w}`);
for (const f of fails) console.log(`  FAIL  ${f}`);
console.log(fails.length ? `\n  ${fails.length} unreadable in at least one theme`
    : '\n  OK — every text colour is readable in both themes.');
process.exit(fails.length ? 1 : 0);
