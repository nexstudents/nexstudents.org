/* Renders every entry in math-lessons.js into /lessons/<id>/index.html.

   A math lesson is its own template, not the history one. Paul, 2026-08-26:
   "math is about showing your work not about just reading." So the page is a
   division bracket he types into, with the worked example narrated step by
   step. The history template stays untouched.

   Usage:  node tools/build-math.js .
*/
const fs = require("fs");
const path = require("path");
const { MATH } = require("./math-lessons.js");

const ROOT = process.argv[2] || ".";
const TPL = path.join(__dirname, "math", "template.html");
const template = fs.readFileSync(TPL, "utf8");

const written = [];
for (const L of MATH) {
  /* Every problem is checked here, at build time, so a bad pair can never
     reach a page. No remainders yet, and no leading zero in the quotient. */
  for (const p of [L.demo].concat(L.problems)) {
    const q = Math.floor(p.dividend / p.divisor);
    if (p.dividend % p.divisor !== 0) {
      console.error("FAIL: " + p.dividend + " / " + p.divisor + " leaves a remainder");
      process.exit(1);
    }
    if (String(p.dividend)[0] < String(p.divisor)) {
      console.error("FAIL: " + p.dividend + " / " + p.divisor + " starts with a zero digit");
      process.exit(1);
    }
    if (String(q).length !== String(p.dividend).length) {
      console.error("FAIL: " + p.dividend + " / " + p.divisor + " does not fill the top row");
      process.exit(1);
    }
  }

  let h = template
    .replace(/__TITLE__/g, L.title)
    .replace(/__DEK__/g, L.dek)
    .replace(/__ID__/g, L.id)
    .replace("__DEMO__", JSON.stringify(L.demo))
    .replace("__PROBLEMS__", JSON.stringify(L.problems));

  if (h.includes("__")) { console.error("FAIL: unfilled slot in " + L.slug); process.exit(1); }

  const dir = path.join(ROOT, "lessons", ...L.id.split("/"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h, "utf8");
  written.push({ id: L.id, problems: L.problems.length });
}
console.log(JSON.stringify(written, null, 1));
