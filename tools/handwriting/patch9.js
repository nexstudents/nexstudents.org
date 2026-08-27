const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
const a = "  q: [S(arc(BX, BY, BR, BR, -45, -400)), S(line([STEM, MID], [STEM, DESC]))],";
const b = [
"  /* The q finishes with a hook to the RIGHT - Paul, 2026-08-27. Measured off",
"     his reference rather than mirroring the g: the q's hook is much SMALLER,",
"     a tight quarter turn about 18 units across, where the g's tail runs flat",
"     back under its own bowl. Same three-part construction, opposite hand. */",
"  q: [S(arc(BX, BY, BR, BR, -45, -400)),",
"      S(line([STEM, MID], [STEM, 150]), arc(STEM + 13, 150, 13, 13, 180, 90),",
"        line([STEM + 13, 163], [STEM + 19, 163]))],",
].join("\n");
if (!s.includes(a)) { console.error("MISS q"); process.exit(1); }
fs.writeFileSync("build-handwriting.js", s.replace(a, b), "utf8");
console.log("q hook added");
