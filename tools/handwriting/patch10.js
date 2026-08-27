const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
const a = [
'  R: [S(line([cl("R"), TOP], [cl("R"), BASE])),',
'      opt({ lead: { off: 24, deg: 30 } }, arc(cl("R"), 43, CW.R, 33, -90, 90)),',
'      S(line([cl("R") + 24, 76], [cr("R"), BASE]))],',
].join("\n");
const b = [
'  /* 🚨 The leg has to spring from the STEM, at the point where the bowl rejoins',
'     it. Paul, 2026-08-27: "look at the capital R." It was starting at x+24 -',
'     a good 24 units out into open space inside the bowl - so it read as a',
'     stroke floating in the middle of the letter rather than part of the R.',
'     The bowl also now closes on the midline, which is where the reference puts',
'     the junction, instead of 6 units below it. */',
'  R: [S(line([cl("R"), TOP], [cl("R"), BASE])),',
'      opt({ lead: { off: 24, deg: 30 } }, arc(cl("R"), 41, CW.R, 31, -90, 90)),',
'      S(line([cl("R") + 4, 72], [cr("R"), BASE]))],',
].join("\n");
if (!s.includes(a)) { console.error("MISS R"); process.exit(1); }
fs.writeFileSync("build-handwriting.js", s.replace(a, b), "utf8");
console.log("R leg reattached");
