/* e, g, j and k. Paul, 2026-08-27: "the lowercase e, g, and s look wrong. your
   problem with the hooks and the s looks like two c shapes stacked", then "the
   lowercase k looks a little weird as well". The s is already fixed. */
const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 68)); process.exitCode = 1; return; }
  s = s.split(a).join(b); n++;
};

/* THE e. Its tail stopped at 315 degrees, which is short of the four o'clock
   position, so it curled under the bowl and pointed back inward instead of
   sweeping out to the right. Carrying it to 327 puts the terminal out level
   with the bar, which is where the reference ends it, and the mouth stays open
   because the bowl is a circle rather than the old wide oval. */
sub("  e: [S(line([BX - BR, BY], [BX + BR, BY]), arc(BX, BY, BR, BR, 0, -315))],",
    "  e: [S(line([BX - BR, BY], [BX + BR, BY]), arc(BX, BY, BR, BR, 0, -327))],");

/* THE g AND j HOOKS. Overcorrected: at 176 degrees the tail ran round past the
   descender line and came back UP, which reads as a curl rather than a hook.
   140 stops it heading down and to the left, which is where a descender ends. */
sub("      S(line([STEM, MID], [STEM, 144]), arc(STEM - 23, 144, 23, 25, 0, 176))],",
    "      S(line([STEM, MID], [STEM, 144]), arc(STEM - 23, 144, 23, 25, 0, 140))],");
sub("  j: [S(line([64, MID], [64, 144]), arc(41, 144, 23, 25, 0, 176)),",
    "  j: [S(line([64, MID], [64, 144]), arc(41, 144, 23, 25, 0, 140)),");

/* THE k. Its two arms met at y=103, almost on the baseline, so the upper arm
   ran long and shallow and the pair opened into a flat "<" stuck on the side of
   the stem. Raising the junction to 96 - a little above the middle of the
   x-height - and pulling both arms in shortens them and closes the angle, which
   is how the reference draws it. */
sub("  k: [S(line([lx, TOP], [lx, BASE])), S(line([85, 72], [32, 103])),\n      S(line([32, 103], [89, BASE]))],",
    "  k: [S(line([lx, TOP], [lx, BASE])), S(line([80, 70], [33, 96])),\n      S(line([33, 96], [82, BASE]))],");

fs.writeFileSync("build-handwriting.js", s, "utf8");
console.log("applied " + n);
