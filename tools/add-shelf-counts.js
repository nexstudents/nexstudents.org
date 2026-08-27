/* Two things Paul asked for on 2026-08-27.

   1. The card meta read "Print or PDF". The button on the sheet says Download,
      so the card should say Download - two names for one thing is how a parent
      ends up hunting for a PDF link that is labelled something else.

   2. "on the worksheet or lessons pages it should show how many are inside
      available." Every shelf now states its own count under the lead, derived
      from the same registry that fills it, so the number cannot drift from what
      is actually on the page. */
const fs = require("fs");
let s = fs.readFileSync("build-pages.js", "utf8");
let n = 0;

/* 1. the card meta */
const a = 'meta: "Print or PDF", price: w.price,';
if (s.includes(a)) { s = s.replace(a, 'meta: "Print or Download", price: w.price,'); n++; }
else console.error("MISS: card meta");

/* 2. a count on every shelf, worked out from the body each page renders */
const COUNTS = {
  subjectSheets:  (arg) => `countLabel(sheetsBySubject(${arg}).length, "sheet", "sheets")`,
  subjectLessons: (arg) => `countLabel(bySubject(${arg}).length, "lesson", "lessons")`,
  gradeSheets:    (arg) => `countLabel(sheetsByGrade(${arg}).length, "sheet", "sheets")`,
  gradeLessons:   (arg) => `countLabel(byGrade(${arg}).length, "lesson", "lessons")`,
};

s = s.replace(/body: (subjectSheets|subjectLessons|gradeSheets|gradeLessons)\(([^)]*)\) \}/g,
  (whole, fn, arg) => {
    n++;
    return `count: ${COUNTS[fn](arg)} + " available", body: ${fn}(${arg}) }`;
  });

fs.writeFileSync("build-pages.js", s, "utf8");
console.log("applied " + n);
