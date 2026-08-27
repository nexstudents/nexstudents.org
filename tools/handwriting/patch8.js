const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
const a = "      S(line([STEM, MID], [STEM, 138]), arc(STEM - 29, 138, 29, 29, 0, 165))],";
const b = [
"      /* 🚨 The tail is NOT a C. Looked at Paul's reference properly on",
"         2026-08-27 instead of guessing a fourth time: the descender runs",
"         straight down, takes a TIGHT quarter turn, and then runs FLAT to the",
"         left. Every version before this tried to express it as one arc, which",
"         is why it kept coming out either as a nick or as a curl that rode back",
"         up. Three segments, one pen-down, and the shape falls out on its own. */",
"      S(line([STEM, MID], [STEM, 146]), arc(STEM - 22, 146, 22, 22, 0, 90),",
"        line([STEM - 22, 168], [40, 168]))],",
].join("\n");
if (!s.includes(a)) { console.error("MISS g"); process.exit(1); }
fs.writeFileSync("build-handwriting.js", s.replace(a, b), "utf8");
console.log("g tail rebuilt");
