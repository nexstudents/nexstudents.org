/* e, g, j and s. Paul, 2026-08-27. */
const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 66)); process.exitCode = 1; return; }
  s = s.split(a).join(b); n++;
};

/* "the bottom of the e doesn't extend out as much as the top it doesn't look
   like a correct circle" - the bowl stopped 310 degrees round, which leaves the
   lower terminal tucked under at about five o'clock while the bar above it runs
   right out to the edge. Carrying it to 334 brings the tail back out level with
   the top, and the bar now sits ON the bowl's centre line instead of 1 unit
   under it, which was making the join look like a step. */
sub("  e: [S(line([28, 101], [96, 101]), arc(62, BY, BRX, BRY, 0, -310))],",
    "  e: [S(line([BX - BRX, BY], [BX + BRX, BY]), arc(BX, BY, BRX, BRY, 0, -334))],");

/* "the hooks at the bottom are too short" - and the g's hook did not even meet
   its stem: the arc was centred at 74 with radius 20, so it started at x=94...
   while the stem came down at x=94. It only just touched. Both hooks are now
   longer (175 degrees rather than 150), a little deeper, and anchored so the
   arc BEGINS exactly where the stem ends. */
sub("      S(line([STEM, MID], [STEM, 150]), arc(74, 150, 20, 20, 0, 150))],",
    "      S(line([STEM, MID], [STEM, 144]), arc(STEM - 23, 144, 23, 25, 0, 176))],");
sub("  j: [S(line([64, MID], [64, 150]), arc(44, 150, 20, 20, 0, 150)),\n      opt({ noArrow: true }, dot(64, 50))],",
    "  j: [S(line([64, MID], [64, 144]), arc(41, 144, 23, 25, 0, 176)),\n      opt({ noArrow: true }, dot(64, 50))],");

/* "the lowercase s doesn't look exactly correct it looks smushed" - each lobe
   was 52 across on 30 tall, nearly twice as wide as it was high. An s is
   NARROWER than an o, not wider. 44 on 34 gives it room to look like two
   curves stacked rather than two flat ribbons. */
sub("  s: [S(arc(62, 85, 26, 15, -20, -270), arc(62, 115, 26, 15, -90, 160))],",
    "  s: [S(arc(BX, 87, 22, 17, -20, -270), arc(BX, 113, 22, 17, -90, 160))],");

fs.writeFileSync("build-handwriting.js", s, "utf8");
console.log("applied " + n);
