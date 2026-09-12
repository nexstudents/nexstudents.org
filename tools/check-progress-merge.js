#!/usr/bin/env node
/* ============================================================================
   check-progress-merge.js — the progress merge must never lose or resurrect

   Paul, 2026-09-11: "this really makes a big deal for this site to track the
   progress. we need this solid and it doesnt break."
   The first merge (Object.assign(local, server)) lost unsent work and brought
   resets back from the dead. nsMerge() replaced it. This runs the REAL
   functions, lifted out of tools/nav.js, through the days that break syncs.
   If any of these ever fails, the build fails, and progress stays safe.

   Each record set is a map of localStorage key -> JSON string, exactly what
   the lesson pages write (ns:done:<id>, ns:prog:<id>).
   Usage:  node tools/check-progress-merge.js .
   ============================================================================ */
const fs = require("fs"), path = require("path"), vm = require("vm");
const src = fs.readFileSync(path.join(__dirname, "nav.js"), "utf8");

/* Lift each function by name from the nav script source. */
function lift(name) {
  const start = src.indexOf("function " + name + "(");
  if (start < 0) throw new Error("nav.js no longer defines " + name);
  let i = src.indexOf("{", start), depth = 0;
  for (; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}" && --depth === 0) break;
  }
  return src.slice(start, i + 1);
}
const pk = /var NS_PK=([^;]+);/.exec(src);
if (!pk) { console.error("FAIL — NS_PK is gone from nav.js"); process.exit(1); }
const code = "var NS_PK=" + pk[1] + ";\n" +
  ["nsFinished", "nsLessonsOf", "nsSame", "nsDoneIn", "nsMerge", "nsChanged"].map(lift).join("\n") +
  "\nthis.nsMerge=nsMerge; this.nsChanged=nsChanged;";
const box = {};
vm.runInNewContext(code, box);

const D = (id, o) => ["ns:done:" + id, JSON.stringify(o)];
const P = (id, o) => ["ns:prog:" + id, JSON.stringify(o)];
const set = (...pairs) => Object.fromEntries(pairs);
const A = "science/a", B = "science/b";
const done8 = { complete: true, score: 7, total: 8, pct: 88 };
const half = { done: 2, total: 5, complete: false };
const full = { done: 5, total: 5, complete: true };

const cases = [
  ["unsent finish survives an older account copy",
    set(P(A, full)), set(P(A, half)), set(P(A, half)), set(P(A, full))],
  ["a reset on another device is not brought back",
    set(D(A, done8)), set(), set(D(A, done8)), set()],
  ["an unfinished copy never replaces a finished one",
    set(P(A, half)), set(P(A, full)), set(), set(P(A, full))],
  ["the account's newer copy wins when nothing is unsent",
    set(P(A, half)), set(P(A, full)), set(P(A, half)), set(P(A, full))],
  ["a brand-new lesson done here is kept",
    set(D(B, done8)), set(), set(), set(D(B, done8))],
  ["the other device's lesson arrives",
    set(), set(D(B, done8)), set(), set(D(B, done8))],
  ["identical records stay identical",
    set(D(A, done8)), set(D(A, done8)), set(D(A, done8)), set(D(A, done8))],
  ["two lessons merge independently",
    set(P(A, full), D(B, done8)), set(P(A, half)), set(P(A, half), D(B, done8)), set(P(A, full))]
];

const fails = [];
for (const [name, local, server, pushed, want] of cases) {
  const got = box.nsMerge(local, server, pushed);
  if (JSON.stringify(Object.entries(got).sort()) !== JSON.stringify(Object.entries(want).sort())) {
    fails.push(name + "\n      got  " + JSON.stringify(got) + "\n      want " + JSON.stringify(want));
  }
}
const ch = box.nsChanged(set(P(A, half), D(B, done8)), set(P(A, full), D(B, done8)));
if (JSON.stringify(Object.keys(ch)) !== JSON.stringify([A])) fails.push("nsChanged should name only " + A + ", got " + JSON.stringify(ch));

if (fails.length) {
  console.error("FAIL — the progress merge would lose or resurrect work:\n  " + fails.join("\n  "));
  process.exit(1);
}
console.log("OK — progress merge: " + cases.length + " sync scenarios hold, and a reload names only the changed lesson.");
