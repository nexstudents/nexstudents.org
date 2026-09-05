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

/* 🚨 A REAL LESSON MUST NEVER SHIP noindex, and this guard exists because it
   very nearly did. On 2026-09-04 a noindex meta was stamped onto
   tools/lesson-template.html to keep the TEMPLATE out of search - correct
   intent, wrong file: every lesson page is generated from that template, so
   the next build would have quietly deindexed the entire lesson library.
   Nothing would have looked broken. The pages would have kept working, kept
   deploying, and simply stopped existing to Google.
   ⚠️ Templates are excluded from search by robots.txt Disallow: /tools/
   instead. If a lesson page ever needs to be held back, hold it back at the
   SHELF, the way an unbuilt lesson gets a slot - not with a meta on a file
   four generators read. */
const deindexed = [];
for (const file of pages) {
  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  if (!rel.startsWith("lessons/")) continue;
  if (/name=["']robots["'][^>]*noindex/i.test(fs.readFileSync(file, "utf8"))) deindexed.push(rel);
}
if (deindexed.length) {
  console.error("FAIL: " + deindexed.length + " built lesson page(s) carry noindex:");
  for (const r of deindexed.slice(0, 8)) console.error("  " + r);
  console.error("  A lesson template must not contain a robots meta. See the note in this file.");
  process.exit(1);
}

/* 🚨 A BUILT LESSON MUST BE ON ITS SHELF. Paul, 2026-09-05: "I don't see it on
   NexStudents as available", then "you might to remember to put things on the
   shelf ... you tend to forget that a lot."
   Shipping a lesson is two steps: build the page, then wire its slug into the
   course outline so the pager links it. Only the first was being done. Maths 1-1
   was live, correct and reachable by URL while /grade-7/maths/lessons/ - the
   shelf a student actually opens - still showed it as Coming Soon.
   NOTHING FAILED. Every generator succeeded, every link resolved, the live URL
   returned 200. The only symptom was Paul not finding it, which puts the cost of
   my forgetting onto him. That is what makes it worth a build guard rather than
   a note.
   ⚠️ It checks the GRADE+SUBJECT shelf specifically, not the grade landing page
   and not the subject page. Both of those linked 1-1 the whole time, which is
   exactly how it stayed hidden - "it is linked somewhere" was true and useless.
   ⚠️ This is the mirror of the unbuilt-lesson rule, not a conflict with it: never
   wire a slug to a page that does not exist, and always wire one the moment it
   does. Both failures leave the shelf lying about what is available. */
const SHELF_SKIP = new Set(["_prev", "tools"]);
const lessonPages = pages
  .map((f) => path.relative(ROOT, f).split(path.sep).join("/"))
  .filter((r) => r.startsWith("lessons/") && r.endsWith("/index.html"))
  .filter((r) => !SHELF_SKIP.has(r.split("/")[1]))
  .map((r) => "/" + r.slice(0, -"index.html".length));

const shelfText = pages
  .map((f) => path.relative(ROOT, f).split(path.sep).join("/"))
  .filter((r) => /^grade-[^/]+\/[^/]+\/lessons\/index\.html$/.test(r))
  .map((r) => fs.readFileSync(path.join(ROOT, r), "utf8"))
  .join("\n");

const unshelved = lessonPages.filter((h) => !shelfText.includes('href="' + h + '"'));
if (unshelved.length) {
  console.error("FAIL: " + unshelved.length +
    " built lesson page(s) are not linked from any /grade-N/<subject>/lessons/ shelf:");
  for (const h of unshelved) console.error("  " + h);
  console.error("  The page is live but reads as Coming Soon on the shelf a student opens.");
  console.error("  Wire its slug into the course outline for that subject:");
  console.error("    maths   -> tools/maths-units.js    L(label, title, page, \"maths/<folder>\")");
  console.error("    history -> tools/history-units.js  slug: \"history/<folder>\"");
  console.error("    english -> tools/english-units.js  science -> tools/science-units.js");
  console.error("  Then re-run build-pages.js. See the note in this file.");
  process.exit(1);
}

if (!bad.size) {
  console.log("OK — no broken internal links.");
  console.log("OK — all " + lessonPages.length + " built lessons are on a grade+subject shelf.");
  process.exit(0);
}

console.error("FAIL: " + bad.size + " broken internal link(s):");
for (const [href, files] of bad) {
  const shown = files.slice(0, 4).join(", ");
  console.error("  " + href + "\n      linked from: " + shown +
    (files.length > 4 ? " (+" + (files.length - 4) + " more)" : ""));
}
process.exit(1);
