/* Both counts on a grade's shelves, and a way across between them.

   Paul, 2026-08-27, on /grade-k/worksheets/: "I want this page to show how many
   lessons and how many worksheets are inside ... I don't have a count how many
   lessons or worksheets are inside."

   The page said "1 sheet available" and stopped there - it told you about the
   shelf you were already standing on and nothing about the other one. A grade
   has exactly two shelves, so both belong on both pages, and the one you are
   not on should be a link rather than a fact you have to go hunting for. */
const fs = require("fs");
let s = fs.readFileSync("build-pages.js", "utf8");
let n = 0;

/* the switcher itself, defined next to countLabel which it uses */
const anchor = "const countLabel = (n, one, many) => n + \" \" + (n === 1 ? one : many);";
if (!s.includes(anchor)) { console.error("MISS countLabel"); process.exit(1); }
s = s.replace(anchor, anchor + `

/* A grade has two shelves and both counts belong on both of them. \`here\` is
   "l" or "w" - whichever page is being rendered - so the current shelf reads as
   a plain fact and the other as somewhere to go. */
const gradeSwitch = (g, here) => {
  const nl = byGrade(g).length, nw = sheetsByGrade(g).length;
  const les = countLabel(nl, "lesson", "lessons");
  const wks = countLabel(nw, "sheet", "sheets");
  const link = (label, href) => '<a href="' + href + '">' + label + "</a>";
  return (here === "l" ? "<b>" + les + "</b>" : link(les, "/grade-" + gslug(g) + "/lessons/"))
    + '<i aria-hidden="true">&middot;</i>'
    + (here === "w" ? "<b>" + wks + "</b>" : link(wks, "/grade-" + gslug(g) + "/worksheets/"));
};`);
n++;

/* point the grade shelves at it */
s = s.replace(/count: countLabel\(byGrade\(([^)]*)\)\.length, "lesson", "lessons"\) \+ " available", body: gradeLessons\(([^)]*)\) \}/g,
  (w, a) => { n++; return `count: gradeSwitch(${a}, "l"), body: gradeLessons(${a}) }`; });
s = s.replace(/count: countLabel\(sheetsByGrade\(([^)]*)\)\.length, "sheet", "sheets"\) \+ " available", body: gradeSheets\(([^)]*)\) \}/g,
  (w, a) => { n++; return `count: gradeSwitch(${a}, "w"), body: gradeSheets(${a}) }`; });

fs.writeFileSync("build-pages.js", s, "utf8");
console.log("applied " + n);
