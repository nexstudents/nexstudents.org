const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 68)); process.exitCode = 1; return; }
  s = s.split(a).join(b); n++;
};

/* Cap G: the bar reaches a little further in toward the centre.
   Paul, 2026-08-27: "bring the line in the center in a little more a touch." */
sub('S(line([cr("G"), 70], [cr("G") - 26, 70]))',
    'S(line([cr("G"), 70], [cr("G") - 34, 70]))');

/* Small g: the descender ends in a proper C, sized to the bowl above it.
   Paul: "the hook make it longer and at the end the same shape circle c shape
   to nearly match the circle part and size of the top part of g."

   It was a 23 x 25 arc stopping at 140 degrees - a nick, not a curve. It is now
   a circle of radius 29 against the bowl's 31, swept 165 degrees, so the tail
   reads as the same shape as the bowl rather than an afterthought hung off it.
   Anchored so the arc BEGINS exactly where the stem ends, and its lowest point
   lands just inside the descender line. */
sub("      S(line([STEM, MID], [STEM, 144]), arc(STEM - 23, 144, 23, 25, 0, 140))],",
    "      S(line([STEM, MID], [STEM, 138]), arc(STEM - 29, 138, 29, 29, 0, 165))],");

fs.writeFileSync("build-handwriting.js", s, "utf8");
console.log("applied " + n);
