#!/usr/bin/env node
/* Walks every built .html page and checks that each root-absolute internal
 * link resolves to something on disk.
 *
 *   node tools/check-links.js .
 *
 * Written 2026-08-29, after Paul opened English on the 7th grade shelf and
 * landed in Roman history. That particular fault was a link pointing at the
 * wrong REAL page, which no checker can catch — but the fix generated a batch
 * of new pages, and a link at a page that was never generated is exactly the
 * failure this does catch.
 *
 * Exits non-zero on any dead link, so it can go in the build chain and stop
 * being something somebody remembers to run.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2] || ".";
const SKIP = new Set([".git", "node_modules", "tools", "assets"]);

const pages = [];
(function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) walk(fp);
    else if (name.endsWith(".html")) pages.push(fp);
  }
})(ROOT);

const resolves = (href) => {
  const target = path.join(ROOT, href);
  if (fs.existsSync(target)) {
    if (fs.statSync(target).isFile()) return true;
    return fs.existsSync(path.join(target, "index.html"));
  }
  return false;
};

const bad = new Map();
let checked = 0;

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  /* Root-absolute only. Off-site links and in-page anchors are not ours. */
  const hrefs = new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]));
  for (const href of hrefs) {
    checked++;
    if (resolves(href)) continue;
    const rel = path.relative(ROOT, file).split(path.sep).join("/");
    if (!bad.has(href)) bad.set(href, []);
    bad.get(href).push(rel);
  }
}

console.log("pages scanned: " + pages.length + " · internal links checked: " + checked);

if (!bad.size) {
  console.log("OK — no broken internal links.");
  process.exit(0);
}

console.error("FAIL: " + bad.size + " broken internal link(s):");
for (const [href, files] of bad) {
  const shown = files.slice(0, 4).join(", ");
  console.error("  " + href + "\n      linked from: " + shown +
    (files.length > 4 ? " (+" + (files.length - 4) + " more)" : ""));
}
process.exit(1);
