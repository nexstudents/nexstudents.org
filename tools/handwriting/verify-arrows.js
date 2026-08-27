/* Checks every arrow against Paul's reference chart, mechanically.

   Eyeballing a 6-unit arrowhead in a screenshot is how two backwards arrows
   survived several rounds of "looks right". This reads the actual stroke data,
   works out which way each one travels, and compares it to EXPECT below, which
   was transcribed off the reference letter by letter on 2026-08-27.

   Run it after ANY change to the letter tables:  node verify-arrows.js
*/
const fs = require("fs");
const path = require("path");

/* load the tables out of the generator without letting it write a file */
const src = fs.readFileSync(path.join(__dirname, "build-handwriting.js"), "utf8");
const cut = src.indexOf("fs.writeFileSync(process.argv[2]");
const mod = src.slice(0, cut) + "module.exports = { UPPER, LOWER };";
const tmp = path.join(__dirname, "_verify_tmp.js");
fs.writeFileSync(tmp, mod, "utf8");
const { UPPER, LOWER } = require(tmp);
fs.unlinkSync(tmp);

/* how a stroke's FIRST segment travels - that is the segment the arrow sits on */
function dir(seg) {
  if (seg.k === "dot") return "dot";
  if (seg.k === "arc") return seg.a1 > seg.a0 ? "cw" : "ccw";
  const dx = seg.to[0] - seg.from[0], dy = seg.to[1] - seg.from[1];
  const ax = Math.abs(dx), ay = Math.abs(dy);
  if (ax < ay * 0.15) return dy > 0 ? "down" : "up";
  if (ay < ax * 0.15) return dx > 0 ? "right" : "left";
  return (dy > 0 ? "down" : "up") + "-" + (dx > 0 ? "right" : "left");
}

/* Transcribed from the reference. Rules it follows: stems DOWN, horizontals
   LEFT TO RIGHT, free-standing round letters COUNTERCLOCKWISE, bowls hung off a
   stem CLOCKWISE, and five strokes that travel UP because the pen is already at
   the baseline - M3, N3, U, V, W. */
const EXPECT = {
  A: ["down-left", "down-right", "right"],
  B: ["down", "cw", "cw"],
  C: ["ccw"],
  D: ["down", "cw"],
  E: ["down", "right", "right", "right"],
  F: ["down", "right", "right"],
  G: ["ccw", "right"],
  H: ["down", "down", "right"],
  I: ["down", "right", "right"],
  J: ["down", "right"],
  K: ["down", "down-left", "down-right"],
  L: ["down", "right"],
  M: ["down", "down-right", "up-right", "down"],
  N: ["down", "down-right", "up"],
  O: ["ccw"],
  P: ["down", "cw"],
  Q: ["ccw", "down-right"],
  R: ["down", "cw", "down-right"],
  S: ["ccw"],
  T: ["down", "right"],
  U: ["down"],
  V: ["down-right", "up-right"],
  W: ["down-right", "up-right", "down-right", "up-right"],
  X: ["down-right", "down-left"],
  Y: ["down-right", "down-left", "down"],
  Z: ["right", "down-left", "right"],
  a: ["ccw", "down"],
  b: ["down", "cw"],
  c: ["ccw"],
  d: ["ccw", "down"],
  e: ["right", "ccw"],
  f: ["ccw", "right"],
  g: ["ccw", "down"],
  h: ["down", "cw"],
  i: ["down", "dot"],
  j: ["down", "dot"],
  k: ["down", "down-left", "down-right"],
  l: ["down"],
  m: ["down", "cw", "cw"],
  n: ["down", "cw"],
  o: ["ccw"],
  p: ["down", "cw"],
  q: ["ccw", "down"],
  r: ["down", "cw"],
  s: ["ccw"],
  t: ["down", "right"],
  u: ["down", "down"],
  v: ["down-right", "up-right"],
  w: ["down-right", "up-right", "down-right", "up-right"],
  x: ["down-right", "down-left"],
  y: ["down-right", "down-left"],
  z: ["right", "down-left", "right"],
};

let bad = 0, checked = 0;
const rows = [];
for (const [ch, strokes] of [...Object.entries(UPPER), ...Object.entries(LOWER)]) {
  const want = EXPECT[ch];
  const got = strokes.map((st) => dir(st.segs[0]));
  if (!want) { console.log("no expectation for " + ch); continue; }
  if (want.length !== got.length) {
    console.log(`${ch}: STROKE COUNT  want ${want.length}, got ${got.length}`);
    bad++;
    continue;
  }
  got.forEach((g, i) => {
    checked++;
    if (g !== want[i]) { rows.push(`${ch} stroke ${i + 1}: want ${want[i]}, got ${g}`); bad++; }
  });
}
rows.forEach((r) => console.log("MISMATCH  " + r));
console.log(`\n${checked} arrows checked across 52 letters - ${bad ? bad + " WRONG" : "all correct"}`);
process.exitCode = bad ? 1 : 0;
