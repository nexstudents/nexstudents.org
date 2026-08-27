/* 🚨 ARROW AUDIT against Paul's reference chart, 2026-08-27. Every letter
   checked for direction, angle and position - he asked for exactly that.

   WHAT THE REFERENCE ACTUALLY DOES, so nobody "fixes" it back later:
     - Every stem is drawn DOWNWARD. Every horizontal is drawn LEFT TO RIGHT.
     - The round letters - C G O Q S a c d g o q s - go COUNTERCLOCKWISE.
     - A bowl hung off a stem - B D P R b h m n p r - goes CLOCKWISE, because
       the pen is already at the stem and swings out to the right.
     - Four letters legitimately travel UPWARD, and they are the ones where the
       pen is already at the baseline: M stroke 3, N stroke 3, U, V, W. Paul,
       2026-08-27: "there is still a few that break that rule." These are them.

   Five things were actually wrong. */
const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 70)); process.exitCode = 1; return; }
  s = s.split(a).join(b); n++;
};

/* 1. G's bar ran RIGHT TO LEFT. The reference arrow points right, and Paul:
      "it was common to always write down and then left to right." */
sub('S(line([cr("G"), 70], [cr("G") - 34, 70]))',
    'S(line([cr("G") - 34, 70], [cr("G"), 70]))');

/* 2. p's bowl ran counterclockwise while b's ran clockwise - the same shape
      upside down, turning opposite ways. The reference has both clockwise. */
sub("  p: [S(line([lx, MID], [lx, DESC])), S(arc(BX, BY, BR, BR, 180, -175))],",
    "  p: [S(line([lx, MID], [lx, DESC])),\n      opt({ lead: { off: 90 } }, arc(BX, BY, BR, BR, 180, 535))],");

/* 3. N's third stroke is drawn UPWARD in the reference - the pen has just
      finished the diagonal at the baseline, so it travels back up. Mine drew it
      downward, which is a pen lift the reference does not make. */
sub('  N: [S(line([cl("N"), TOP], [cl("N"), BASE])), S(line([cl("N"), TOP], [cr("N"), BASE])),\n      S(line([cr("N"), TOP], [cr("N"), BASE]))],',
    '  N: [S(line([cl("N"), TOP], [cl("N"), BASE])), S(line([cl("N"), TOP], [cr("N"), BASE])),\n      S(line([cr("N"), BASE], [cr("N"), TOP]))],');

/* 4. Z and z were ONE stroke of three segments, so they got ONE arrow. The
      reference numbers them 1, 2, 3 - three strokes, three arrows. */
sub('  Z: [S(line([cl("Z"), TOP], [cr("Z"), TOP]), line([cr("Z"), TOP], [cl("Z"), BASE]),\n        line([cl("Z"), BASE], [cr("Z"), BASE]))],',
    '  Z: [S(line([cl("Z"), TOP], [cr("Z"), TOP])), S(line([cr("Z"), TOP], [cl("Z"), BASE])),\n      S(line([cl("Z"), BASE], [cr("Z"), BASE]))],');
sub("  z: [S(line([31, MID], [89, MID]), line([89, MID], [31, BASE]),\n        line([31, BASE], [89, BASE]))],",
    "  z: [S(line([31, MID], [89, MID])), S(line([89, MID], [31, BASE])),\n      S(line([31, BASE], [89, BASE]))],");

/* 5. e was one stroke, so the bowl never got its own arrow. The reference draws
      the bar as 1 and the curve as 2. */
sub("  e: [S(line([BX - BR, BY], [BX + BR, BY]), arc(BX, BY, BR, BR, 0, -327))],",
    "  e: [S(line([BX - BR, BY], [BX + BR, BY])),\n      S(arc(BX, BY, BR, BR, 0, -327))],");

fs.writeFileSync("build-handwriting.js", s, "utf8");
console.log("applied " + n + " of 6");
