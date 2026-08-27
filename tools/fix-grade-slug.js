/* 🚨 A GRADE'S URL IS ITS LABEL LOWERCASED.

   Paul, 2026-08-27, hit https://nexstudents.org/grade-K/worksheets/ and found
   nothing. Every link to Kindergarten was being built straight from the grade
   value - "K" - giving /grade-K/, while the directory on disk is grade-k.
   GitHub Pages is case-sensitive, so every one of those links was a 404.

   Nothing caught it because grades 3, 6, 7 and 8 have no case to get wrong.
   K is the first non-numeric grade the site has ever had, so this was dormant
   from the day the grade pages were written.

   gslug() is now the ONLY way a grade URL is built. Adding another lettered
   grade - a preschool shelf, say - will not reintroduce this. */
const fs = require("fs");
let n = 0;
const patch = (file, pairs) => {
  let s = fs.readFileSync(file, "utf8");
  for (const [a, b] of pairs) {
    if (!s.includes(a)) { console.error("MISS in " + file + ": " + a.slice(0, 56)); process.exitCode = 1; continue; }
    s = s.split(a).join(b); n++;
  }
  fs.writeFileSync(file, s, "utf8");
};

patch("build-pages.js", [
  /* the helper itself, dropped in above the grade cells */
  ['const gradeCells = (live, cls) =>',
   '/* A grade\'s URL is its label lowercased: "K" lives at /grade-k/. Build a\n' +
   '   grade href ANY other way and Kindergarten 404s - see tools/fix-grade-slug.js. */\n' +
   'const gslug = (g) => String(g).toLowerCase();\n\n' +
   'const gradeCells = (live, cls) =>'],
  ["'<a class=\"gr live\" href=\"/grade-' + g + '/\"><b>' + g + '</b><span>Live</span></a>'",
   "'<a class=\"gr live\" href=\"/grade-' + gslug(g) + '/\"><b>' + g + '</b><span>Live</span></a>'"],
  ['<a class="gr live" href="/grade-${g}/"><b>${g}</b><span>Live</span></a>',
   '<a class="gr live" href="/grade-${gslug(g)}/"><b>${g}</b><span>Live</span></a>'],
  ['<a class="minibox" href="/grade-${g}/lessons/">',
   '<a class="minibox" href="/grade-${gslug(g)}/lessons/">'],
  ['<a class="minibox" href="/grade-${g}/worksheets/">',
   '<a class="minibox" href="/grade-${gslug(g)}/worksheets/">'],
]);

patch("nav.js", [
  ['const gradeTiles = () =>',
   '/* A grade\'s URL is its label lowercased: "K" lives at /grade-k/. */\n' +
   'const gslug = (g) => String(g).toLowerCase();\n\n' +
   'const gradeTiles = () =>'],
  ["'<a class=\"mg-grade live\" href=\"/grade-' + g + '/\"><b>' + g + '</b><span>Live</span></a>'",
   "'<a class=\"mg-grade live\" href=\"/grade-' + gslug(g) + '/\"><b>' + g + '</b><span>Live</span></a>'"],
  ['SHEETS["gr-" + g] = { title: gradeName(g), parent: "gr", view: "/grade-" + g + "/", rows: [\n' +
   '    { label: "Lessons", href: "/grade-" + g + "/lessons/", note: "Worked through on screen" },\n' +
   '    { label: "Worksheets", href: "/grade-" + g + "/worksheets/", note: "Printed and written on" },',
   'SHEETS["gr-" + g] = { title: gradeName(g), parent: "gr", view: "/grade-" + gslug(g) + "/", rows: [\n' +
   '    { label: "Lessons", href: "/grade-" + gslug(g) + "/lessons/", note: "Worked through on screen" },\n' +
   '    { label: "Worksheets", href: "/grade-" + gslug(g) + "/worksheets/", note: "Printed and written on" },'],
]);

console.log("applied " + n + " of 8");
