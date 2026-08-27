/* Narrower capitals, rounder C.

   Paul, 2026-08-27: "make the capital letters just less wider but like the C
   bigger more like a circle but it might mess it all back up again."

   These pull in opposite directions only if every cap has to be one width. They
   don't: a round letter has to be slightly WIDER than a straight-sided one to
   look the same size, because a circle touching the same rails reads smaller.
   So the straight caps come in and the round ones go out, and they meet.

   Kept symmetric about C=70 rather than moving R alone, or A, M, V, W, Y and T
   would all sit off-centre in their cell.

   🚨 B D P R are untouched on purpose. Their bowls are sized from an explicit
   radius, not from R, so the shapes Paul approved cannot move. */
const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 66)); process.exitCode = 1; return; }
  s = s.split(a).join(b); n++;
};

/* 88 wide instead of 96, centred on C */
sub("const L = 22, R = 118, C = 70;", "const L = 26, R = 114, C = 70;");

/* A's crossbar follows the new slants: two thirds down, so 0.683 of the way */
sub("S(line([35.8, 92], [104.2, 92]))", "S(line([40, 92], [100, 92]))");

/* the round caps go the other way - 92 across, so they read the same size */
sub("  C: [S(arc(C, 70, 40, 60, -50, -310))],", "  C: [S(arc(C, 70, 46, 60, -50, -310))],");
sub("  G: [S(arc(C, 70, 40, 60, -50, -360)), S(line([C + 40, 70], [C + 14, 70]))],",
    "  G: [S(arc(C, 70, 46, 60, -50, -360)), S(line([C + 46, 70], [C + 18, 70]))],");
sub("  O: [S(arc(C, 70, 40, 60, -90, -445))],", "  O: [S(arc(C, 70, 46, 60, -90, -445))],");
sub("  Q: [S(arc(C, 70, 40, 60, -90, -445)), S(line([C + 18, 102], [C + 46, 136]))],",
    "  Q: [S(arc(C, 70, 46, 60, -90, -445)), S(line([C + 20, 102], [C + 48, 136]))],");
sub("  S: [S(arc(C, 40, 32, 30, -20, -270), arc(C, 100, 32, 30, -90, 160))],",
    "  S: [S(arc(C, 40, 36, 30, -20, -270), arc(C, 100, 36, 30, -90, 160))],");

/* U's turn spans the rails, so it has to come in with them */
sub("arc(C, 100, 48, 30, 180, 0)", "arc(C, 100, 44, 30, 180, 0)");
/* I's serifs stay shorter than a full bar or it reads as an H */
sub("S(line([C - 26, TOP], [C + 26, TOP])),\n      S(line([C - 26, BASE], [C + 26, BASE]))],",
    "S(line([C - 24, TOP], [C + 24, TOP])),\n      S(line([C - 24, BASE], [C + 24, BASE]))],");

fs.writeFileSync("build-handwriting.js", s, "utf8");
console.log("applied " + n);
