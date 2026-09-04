/* ─────────────────────────────────────────────────────────────────────────
   build-stamp.js — proof that every generator has been re-run since the files
   it depends on last changed.

   🚨 WHY THIS EXISTS. On 2026-09-02 the header was fixed in `nav.js`: a home
   icon beside the burger, the logo/login/cart kept on one row, the current
   day-night switch. `nav.js` feeds FOUR generators. Three were re-run and
   pushed; `build-lessons.js` was not. Commit f4bf66aa touched 27 site pages
   and 12 worksheets and ZERO lesson pages.

   So for a full day every lesson on the live site carried the OLD header and
   the OLD drawer while the home page carried the new ones, and nothing
   anywhere said so. Paul found it on his phone on 2026-09-03 and reasonably
   asked why old sections were being kept: "what are you doing Claude? why are
   you really doing this?" Nothing was kept. A generator was skipped and there
   was no check.

   ⚠️ THE POINT IS THE ONE THAT WAS MISSED, NOT THE ONES THAT WERE RUN. A
   build that succeeds tells you nothing about the generator you forgot to
   start. This is the only thing in the repo that can notice that.

   HOW IT WORKS, and why the dependency list is not written by hand:
   a generator's real dependencies are exactly the files Node loaded for it,
   which `require.cache` already knows. So record() reads that at the END of a
   successful run rather than trusting a list someone has to remember to
   update. Templates are read with fs.readFileSync and never enter the cache,
   so those are passed in explicitly - they are the one thing to remember, and
   there is at most one per generator.

   The recorded hash covers the CONTENT of those files. Change `nav.js` and
   every generator that loads it goes stale until it runs again. Mtimes are
   deliberately not used: a fresh clone rewrites them all and would report the
   whole site stale on a machine where nothing is wrong.

     node tools/check-fresh.js .     -> fails listing what must be re-run

   ⚠️ Run it LAST, beside check-links.js. Run it first and it reports the
   staleness the run you are about to do is going to fix.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const TOOLS = __dirname;
const FILE = path.join(TOOLS, "build-stamp.json");

/* The stamp file itself is never a dependency of anything, and neither is the
   checker - otherwise every run would invalidate the next one. */
const IGNORE = new Set(["build-stamp.js", "build-stamp.json", "check-fresh.js"]);

function read() {
  try { return JSON.parse(fs.readFileSync(FILE, "utf8")); } catch (e) { return {}; }
}

function hashOf(files) {
  const h = crypto.createHash("sha1");
  files.forEach((rel) => {
    h.update(rel);
    h.update("\0");
    try { h.update(fs.readFileSync(path.join(TOOLS, rel))); }
    catch (e) { h.update("MISSING"); }   /* a deleted dependency must change the hash */
    h.update("\0");
  });
  return h.digest("hex").slice(0, 16);
}

/* Everything Node loaded out of tools/ for this run, plus any template the
   generator read itself. Sorted, so the hash does not depend on load order. */
function depsFor(extra) {
  const seen = new Set();
  Object.keys(require.cache).forEach((abs) => {
    const rel = path.relative(TOOLS, abs);
    if (rel.startsWith("..") || rel.indexOf(path.sep) !== -1) return;  /* outside tools/ */
    if (IGNORE.has(rel)) return;
    seen.add(rel);
  });
  (extra || []).forEach((p) => {
    const rel = path.relative(TOOLS, path.resolve(p));
    if (!rel.startsWith("..")) seen.add(rel.split(path.sep).join("/"));
  });
  return Array.from(seen).sort();
}

/* Called at the end of a generator that finished without exiting. A generator
   that fails calls process.exit() long before this, so a failed build never
   records a stamp and stays correctly stale. */
function record(name, extra) {
  const files = depsFor(extra);
  const all = read();
  all[name] = { hash: hashOf(files), files: files, at: new Date().toISOString() };
  fs.writeFileSync(FILE, JSON.stringify(all, null, 1) + "\n", "utf8");
}

/* Returns the generators whose inputs have changed since they last ran. */
function stale() {
  const all = read();
  return Object.keys(all).sort().filter((name) => hashOf(all[name].files) !== all[name].hash);
}

/* Which recorded files changed, so the message can name the culprit rather
   than just the generator - "nav.js changed" is the useful half. */
function changedFiles(name) {
  const rec = read()[name];
  if (!rec) return [];
  return rec.files.filter((rel) => hashOf([rel]) !== hashOf([rel]) ? false : false)
    .concat([]);   /* placeholder - per-file detail comes from compare() below */
}

/* A per-file record lets the checker say WHICH dependency moved. Stored beside
   the combined hash so an old stamp file without it still verifies. */
function recordDetailed(name, extra) {
  const files = depsFor(extra);
  const each = {};
  files.forEach((rel) => { each[rel] = hashOf([rel]); });
  const all = read();
  all[name] = { hash: hashOf(files), files: files, each: each, at: new Date().toISOString() };
  fs.writeFileSync(FILE, JSON.stringify(all, null, 1) + "\n", "utf8");
}

function movedSince(name) {
  const rec = read()[name];
  if (!rec || !rec.each) return [];
  return rec.files.filter((rel) => rec.each[rel] !== hashOf([rel]));
}

module.exports = { record: recordDetailed, stale, movedSince, read, FILE };
