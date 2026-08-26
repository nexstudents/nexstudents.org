/* Renders every entry in math-lessons.js into /lessons/<id>/index.html.

   A math lesson is its own template, not the history one. Paul, 2026-08-26:
   "math is about showing your work not about just reading." So the page is a
   division bracket he types into, with the worked example narrated step by
   step. The history template stays untouched.

   The practice problems are GENERATED in the page from a spec, not listed, so
   the same five never come back. What this build does is prove the spec can
   actually produce enough distinct problems before the page ships.

   Usage:  node tools/build-math.js .
*/
const fs = require("fs");
const path = require("path");
const { MATH } = require("./math-lessons.js");

const ROOT = process.argv[2] || ".";
const TPL = path.join(__dirname, "math", "template.html");
const template = fs.readFileSync(TPL, "utf8");

/* The bracket layout only handles a problem with no remainder whose quotient
   fills the top row exactly. Anything else is a bug, not a harder question. */
function check(dividend, divisor, where) {
  const q = dividend / divisor;
  if (dividend % divisor !== 0) fail(where + ": " + dividend + " / " + divisor + " leaves a remainder");
  if (String(q).length !== String(dividend).length) fail(where + ": " + dividend + " / " + divisor + " does not fill the top row");
}
function fail(msg) { console.error("FAIL: " + msg); process.exit(1); }

/* Every problem the spec can ever produce, enumerated. Cheap at these sizes,
   and it means an impossible or thin spec fails here rather than on a page
   that quietly shows the same problem twice. */
function poolFor(spec) {
  const lo = Math.pow(10, spec.digits - 1), hi = Math.pow(10, spec.digits) - 1;
  const pool = [];
  for (const divisor of spec.divisors) {
    for (let q = lo; q <= hi; q++) {
      if (!spec.allowZeroDigit && String(q).indexOf("0") >= 0) continue;
      const dividend = q * divisor;
      if (String(dividend).length !== spec.digits) continue;
      pool.push({ dividend, divisor });
    }
  }
  return pool;
}

const written = [];
for (const L of MATH) {
  check(L.demo.dividend, L.demo.divisor, L.slug + " demo");

  const pool = poolFor(L.practice);
  if (pool.length < L.practice.count * 4) {
    fail(L.slug + ": the practice spec yields only " + pool.length +
         " problems, too few for a set of " + L.practice.count);
  }
  pool.forEach(p => check(p.dividend, p.divisor, L.slug + " pool"));

  let h = template
    .replace(/__TITLE__/g, L.title)
    .replace(/__DEK__/g, L.dek)
    .replace(/__ID__/g, L.id)
    .replace("__DEMO__", JSON.stringify(L.demo))
    .replace("__SPEC__", JSON.stringify(L.practice));

  if (h.includes("__DEMO__") || h.includes("__SPEC__") || h.includes("__TITLE__")) {
    fail("unfilled slot in " + L.slug);
  }

  const dir = path.join(ROOT, "lessons", ...L.id.split("/"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h, "utf8");
  written.push({ id: L.id, poolSize: pool.length, perSet: L.practice.count });
}
console.log(JSON.stringify(written, null, 1));
