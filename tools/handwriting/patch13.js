const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 70)); process.exitCode = 1; return; }
  s = s.split(a).join(b); n++;
};

/* Cap J takes a bar across the top - Paul, 2026-08-27, confirming it off the
   reference. Two strokes now: the stem-and-hook down, then the bar left to
   right, which is the order and direction the reference numbers them. */
sub('  J: [S(line([cr("J") - 8, TOP], [cr("J") - 8, 94]), arc(C - 6, 94, 32, 36, 0, 90))],',
    '  J: [S(line([cr("J") - 8, TOP], [cr("J") - 8, 94]), arc(C - 6, 94, 32, 36, 0, 90)),\n      S(line([cr("J") - 40, TOP], [cr("J"), TOP]))],');

/* j gets the same three-part tail as g and q - down, tight quarter turn, flat
   run - instead of the single arc it was left on. Shipping g and q with one
   shape and j with another is just a defect nobody had looked at yet. */
sub("  j: [S(line([64, MID], [64, 144]), arc(41, 144, 23, 25, 0, 140)),",
    "  j: [S(line([64, MID], [64, 146]), arc(42, 146, 22, 22, 0, 90),\n        line([42, 168], [26, 168])),");

fs.writeFileSync("build-handwriting.js", s, "utf8");
console.log("applied " + n);
