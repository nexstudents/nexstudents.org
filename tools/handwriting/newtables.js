/* Replace the two letter tables with per-letter widths.

   Paul, 2026-08-27, with a reference chart: "it seems like your letters are not
   aligning up ... try to make your shapes match it as close as possible", and
   then "you almost have it but it just looks misaligned."

   The fault was never one letter. Every capital was forced onto ONE pair of
   rails, so E came out as wide as O and I as wide as M. A real alphabet does the
   opposite - round letters wide, E F L S narrow, M and W widest, I a bare stem.
   CW below is those proportions against the 120 cap height, and each letter is
   drawn from its own pair. Re-proportioning the alphabet now means editing CW,
   not 26 sets of coordinates. */
const fs = require("fs");
let src = fs.readFileSync("build-handwriting.js", "utf8");

const UP = [
'/* 🚨 EVERY CAPITAL HAS ITS OWN WIDTH - see newtables.js for why. Round letters',
'   run wide, E F L S run narrow, M and W widest, I is a stem. Edit CW to',
'   re-proportion the alphabet; do not touch 26 sets of coordinates. */',
'const CW = { A: 86, B: 79, C: 86, D: 86, E: 72, F: 70, G: 91, H: 86, I: 48,',
'             J: 62, K: 82, L: 67, M: 106, N: 86, O: 94, P: 77, Q: 94, R: 79,',
'             S: 74, T: 77, U: 86, V: 84, W: 120, X: 84, Y: 82, Z: 77 };',
'const cl = (ch) => C - CW[ch] / 2;',
'const cr = (ch) => C + CW[ch] / 2;',
'',
'const UPPER = {',
'  A: [opt({ lead: { off: 22, len: 32 } }, line([C, TOP], [cl("A"), BASE])),',
'      opt({ lead: { off: 22, len: 32 } }, line([C, TOP], [cr("A"), BASE])),',
'      S(line([C - 31.5, 98], [C + 31.5, 98]))],',
'',
'  /* 🚨 DO NOT put a circular bowl() on B. Tried twice on 2026-08-27: its bowls',
'     span 60 where D spans 120, so a circle through both ends that still bulges',
'     wide is a MAJOR arc - it wraps past itself and closes into a ring. Paul:',
'     "you messed up the Cap B again." Half-ellipses, and leave them alone.',
'     The bowl arrows start a little way along so they do not run into the stem',
'     arrow at the shared top-left corner. */',
'  B: [S(line([cl("B"), TOP], [cl("B"), BASE])),',
'      opt({ lead: { off: 24, deg: 30 } }, arc(cl("B"), 40, CW.B, 30, -90, 90)),',
'      opt({ lead: { off: 24, deg: 30 } }, arc(cl("B"), 100, CW.B, 30, -90, 90))],',
'  C: [S(arc(C, 70, CW.C / 2, 60, -50, -310))],',
'  D: [S(line([cl("D"), TOP], [cl("D"), BASE])),',
'      opt({ lead: { off: 22, deg: 26 } }, arc(cl("D"), 70, CW.D, 60, -90, 90))],',
'  E: [S(line([cl("E"), TOP], [cl("E"), BASE])), S(line([cl("E"), TOP], [cr("E"), TOP])),',
'      S(line([cl("E"), 70], [cr("E") - 10, 70])), S(line([cl("E"), BASE], [cr("E"), BASE]))],',
'  F: [S(line([cl("F"), TOP], [cl("F"), BASE])), S(line([cl("F"), TOP], [cr("F"), TOP])),',
'      S(line([cl("F"), 70], [cr("F") - 10, 70]))],',
'  G: [S(arc(C, 70, CW.G / 2, 60, -50, -360)),',
'      S(line([cr("G"), 70], [cr("G") - 26, 70]))],',
'  H: [S(line([cl("H"), TOP], [cl("H"), BASE])), S(line([cr("H"), TOP], [cr("H"), BASE])),',
'      S(line([cl("H"), 70], [cr("H"), 70]))],',
'  I: [S(line([C, TOP], [C, BASE])), S(line([cl("I"), TOP], [cr("I"), TOP])),',
'      S(line([cl("I"), BASE], [cr("I"), BASE]))],',
'  J: [S(line([cr("J") - 8, TOP], [cr("J") - 8, 96]), arc(C - 4, 96, 27, 34, 0, 90))],',
'  /* the arms have to MEET the stem - ending them short left a visible gap */',
'  K: [S(line([cl("K"), TOP], [cl("K"), BASE])),',
'      S(line([cr("K"), TOP], [cl("K") + 3, 74])),',
'      S(line([cl("K") + 3, 74], [cr("K"), BASE]))],',
'  L: [S(line([cl("L"), TOP], [cl("L"), BASE])), S(line([cl("L"), BASE], [cr("L"), BASE]))],',
'  M: [S(line([cl("M"), TOP], [cl("M"), BASE])), S(line([cl("M"), TOP], [C, 82])),',
'      S(line([C, 82], [cr("M"), TOP])), S(line([cr("M"), TOP], [cr("M"), BASE]))],',
'  N: [S(line([cl("N"), TOP], [cl("N"), BASE])), S(line([cl("N"), TOP], [cr("N"), BASE])),',
'      S(line([cr("N"), TOP], [cr("N"), BASE]))],',
'  O: [S(arc(C, 70, CW.O / 2, 60, -90, -445))],',
'  P: [S(line([cl("P"), TOP], [cl("P"), BASE])),',
'      opt({ lead: { off: 24, deg: 30 } }, arc(cl("P"), 43, CW.P, 33, -90, 90))],',
'  Q: [S(arc(C, 70, CW.Q / 2, 60, -90, -445)), S(line([C + 20, 104], [C + 48, 138]))],',
'  R: [S(line([cl("R"), TOP], [cl("R"), BASE])),',
'      opt({ lead: { off: 24, deg: 30 } }, arc(cl("R"), 43, CW.R, 33, -90, 90)),',
'      S(line([cl("R") + 24, 76], [cr("R"), BASE]))],',
'  S: [S(arc(C, 40, CW.S / 2, 30, -20, -270), arc(C, 100, CW.S / 2, 30, -90, 160))],',
'  T: [S(line([C, TOP], [C, BASE])), S(line([cl("T"), TOP], [cr("T"), TOP]))],',
'  U: [S(line([cl("U"), TOP], [cl("U"), 88]), arc(C, 88, CW.U / 2, 42, 180, 0),',
'        line([cr("U"), 88], [cr("U"), TOP]))],',
'  V: [S(line([cl("V"), TOP], [C, BASE])), S(line([C, BASE], [cr("V"), TOP]))],',
'  W: [S(line([cl("W"), TOP], [cl("W") + 29, BASE])),',
'      S(line([cl("W") + 29, BASE], [C, 46])),',
'      S(line([C, 46], [cr("W") - 29, BASE])),',
'      S(line([cr("W") - 29, BASE], [cr("W"), TOP]))],',
'  X: [S(line([cl("X"), TOP], [cr("X"), BASE])), S(line([cr("X"), TOP], [cl("X"), BASE]))],',
'  Y: [S(line([cl("Y"), TOP], [C, 74])), S(line([cr("Y"), TOP], [C, 74])),',
'      S(line([C, 74], [C, BASE]))],',
'  Z: [S(line([cl("Z"), TOP], [cr("Z"), TOP]), line([cr("Z"), TOP], [cl("Z"), BASE]),',
'        line([cl("Z"), BASE], [cr("Z"), BASE]))],',
'};',
].join("\n");

const LO = [
'/* Lowercase bowls are CIRCLES on the x-height: 62 across on 62 tall. They were',
'   68 across, which is what made the e read as an oval. Stems sit on the bowl',
'   edge, so a letter is bowl plus stem with nothing left over. */',
'const lx = 29, STEM = 91, BX = 60, BY = 100, BR = 31;',
'',
'const LOWER = {',
'  a: [S(arc(BX, BY, BR, BR, -45, -400)), S(line([STEM, MID], [STEM, BASE]))],',
'  /* 🚨 Small b runs CLOCKWISE. Paul: "the arrow does not go counter clockwise',
'     but clockwise. put the arrow at the top of the circle ... do not connect',
'     the arrow going down to it." Increasing angle is clockwise on screen, and',
'     the arrow starts 90 degrees along - at the top - clear of the stem arrow. */',
'  b: [S(line([lx, TOP], [lx, BASE])),',
'      opt({ lead: { off: 90 } }, arc(BX, BY, BR, BR, 180, 535))],',
'  c: [S(arc(BX, BY, BR, BR, -50, -310))],',
'  d: [S(arc(BX, BY, BR, BR, -45, -400)), S(line([STEM, TOP], [STEM, BASE]))],',
'  /* 🚨 The e is a circle and its mouth stays OPEN. Paul: "the e still needs a',
'     space ... you are kind of making it too wide and more like an oval." The',
'     wider the bowl, the further its tail had to travel to reach the bar, so',
'     extending it to match the top sealed the mouth shut. */',
'  e: [S(line([BX - BR, BY], [BX + BR, BY]), arc(BX, BY, BR, BR, 0, -315))],',
'  f: [S(arc(48, 27, 17, 17, 0, -180), line([31, 27], [31, BASE])),',
'      S(line([16, MID], [56, MID]))],',
'  /* the hook was too short AND did not meet the stem - its arc started a couple',
'     of units off it. Anchored to STEM and carried round to 176 degrees. */',
'  g: [S(arc(BX, BY, BR, BR, -45, -400)),',
'      S(line([STEM, MID], [STEM, 144]), arc(STEM - 23, 144, 23, 25, 0, 176))],',
'  h: [S(line([lx, TOP], [lx, BASE])),',
'      S(arc(BX, BY, BR, BR, 180, 360), line([STEM, BY], [STEM, BASE]))],',
'  i: [S(line([BX, MID], [BX, BASE])), opt({ noArrow: true }, dot(BX, 50))],',
'  j: [S(line([64, MID], [64, 144]), arc(41, 144, 23, 25, 0, 176)),',
'      opt({ noArrow: true }, dot(64, 50))],',
'  k: [S(line([lx, TOP], [lx, BASE])), S(line([85, 72], [32, 103])),',
'      S(line([32, 103], [89, BASE]))],',
'  l: [S(line([BX, TOP], [BX, BASE]))],',
'  m: [S(line([22, MID], [22, BASE])),',
'      S(arc(46, BY, 24, BR, 180, 360), line([70, BY], [70, BASE])),',
'      S(arc(94, BY, 24, BR, 180, 360), line([118, BY], [118, BASE]))],',
'  n: [S(line([lx, MID], [lx, BASE])),',
'      S(arc(BX, BY, BR, BR, 180, 360), line([STEM, BY], [STEM, BASE]))],',
'  o: [S(arc(BX, BY, BR, BR, -90, -445))],',
'  p: [S(line([lx, MID], [lx, DESC])), S(arc(BX, BY, BR, BR, 180, -175))],',
'  q: [S(arc(BX, BY, BR, BR, -45, -400)), S(line([STEM, MID], [STEM, DESC]))],',
'  r: [S(line([34, MID], [34, BASE])), S(arc(BX, 92, 26, 24, 180, 292))],',
'  /* each lobe was 52 across on 30 tall, nearly twice as wide as high - Paul:',
'     "the lowercase s ... looks smushed". An s is narrower than an o. */',
'  s: [S(arc(BX, 87, 22, 17, -20, -270), arc(BX, 113, 22, 17, -90, 160))],',
'  t: [S(line([BX, 30], [BX, BASE])), S(line([36, MID], [84, MID]))],',
'  u: [S(line([lx, MID], [lx, BY]), arc(BX, BY, BR, BR, 180, 0),',
'        line([STEM, BY], [STEM, MID])),',
'      S(line([STEM, MID], [STEM, BASE]))],',
'  v: [S(line([31, MID], [BX, BASE])), S(line([BX, BASE], [89, MID]))],',
'  w: [S(line([16, MID], [38, BASE])), S(line([38, BASE], [BX, 86])),',
'      S(line([BX, 86], [82, BASE])), S(line([82, BASE], [104, MID]))],',
'  x: [S(line([31, MID], [89, BASE])), S(line([89, MID], [31, BASE]))],',
'  y: [S(line([31, MID], [BX, 124])), S(line([89, MID], [38, DESC]))],',
'  z: [S(line([31, MID], [89, MID]), line([89, MID], [31, BASE]),',
'        line([31, BASE], [89, BASE]))],',
'};',
].join("\n");

const upStart = src.indexOf("const UPPER = {");
const upEnd = src.indexOf("\n};", upStart) + 3;
const loStart = src.indexOf("const LOWER = {");
const loEnd = src.indexOf("\n};", loStart) + 3;
if (upStart < 0 || loStart < 0) { console.error("markers not found"); process.exit(1); }

/* LOWER sits after UPPER, so replace it first and UPPER's offsets stay valid */
src = src.slice(0, loStart) + LO + src.slice(loEnd);
src = src.slice(0, upStart) + UP + src.slice(upEnd);

/* drop the two now-dead constant lines the old tables leaned on */
src = src.replace(/\/\* lowercase: bowls[^\n]*\n[^\n]*\nconst lx = 29[^\n]*\n/, "");
src = src.replace(/const lx = 26, STEM = 94, BX = 60, BY = 100, BRX = 34, BRY = 31;\n/, "");
src = src.replace(/\/\* caps: 96 wide on 120 tall \*\/\nconst L = 26, R = 114, C = 70;/,
                  "const C = 70;");

/* a lighter pen, closer to the reference */
src = src.replace("stroke-width:14;stroke-linecap:round", "stroke-width:11;stroke-linecap:round");

fs.writeFileSync("build-handwriting.js", src, "utf8");
console.log("tables replaced");
