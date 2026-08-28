/* FlyBy on the Games shelf and in the menu. */
const fs = require("fs");
let n = 0;
const edit = (f, pairs) => {
  let s = fs.readFileSync(f, "utf8");
  pairs.forEach(([a, b]) => {
    if (!s.includes(a)) { console.error("MISS " + f + ": " + a.slice(0, 50)); process.exitCode = 1; return; }
    s = s.replace(a, b); n++;
  });
  fs.writeFileSync(f, s, "utf8");
};

edit("build-pages.js", [[
  '  { title: "Remainder race", subject: "Maths" },',
  '  { title: "FlyBy Speed Run", href: "/games/flyby-speed-run/", subject: "Maths",\n' +
  '    blurb: "A timed multiplication drill. Pick the tables you want to work on, answer against the clock, and earn a rank from Recruit to Pilot.",\n' +
  '    note: "Choose your tables &middot; 2 to 10 minutes" },\n' +
  '  { title: "Remainder race", subject: "Maths" },'
]]);

edit("nav.js", [[
  'col("Maths", [{ label: "Remainder race" }, { label: "Fraction match" }]) +',
  'col("Maths", [{ label: "FlyBy Speed Run", href: "/games/flyby-speed-run/" },\n' +
  '               { label: "Remainder race" }, { label: "Fraction match" }]) +'
], [
  '  { label: "Remainder race", soon: true }, { label: "Fraction match", soon: true },',
  '  { label: "FlyBy Speed Run", href: "/games/flyby-speed-run/", note: "Multiplication, timed" },\n' +
  '  { label: "Remainder race", soon: true }, { label: "Fraction match", soon: true },'
], [
  "Show Me The States is playable now. The rest go up as they are built.",
  "Two are playable now. The rest go up as they are built."
]]);

console.log("applied " + n + " of 4");
