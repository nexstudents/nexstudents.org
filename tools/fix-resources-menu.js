/* 🚨 RESOURCES IS NOT THE SUBJECTS. It is the extra material - the things worth
   buying or reading that are not a lesson or a printable.

   Paul, 2026-08-27: "resources this is extra stuff like book recommendations,
   extras, blogs possibly, science experiments, and stuff ... grades is the
   subjects and resources is extra content that doesn't fit. because I told you
   I wanted to sell stuff for affiliate links and where else would I put that."

   The /resources/ PAGE was already right - "What We Actually Use", books, tools
   and supplies, and it says outright that "worksheets and lessons are not here;
   those live under each grade". The MENU contradicted the page it opened: it
   listed the four subjects with their Lessons and Worksheets, which is the one
   thing that page says it is not.

   Nothing here invents a URL. The categories Paul named are listed and marked
   Soon until they exist, the same way the Games menu names six games that are
   not built. The only live link is the page itself. */
const fs = require("fs");
let n = fs.readFileSync("nav.js", "utf8");
let done = 0;

const oldPanel = `  r: {
    body: '<div class="mg-cols">' + SUBJECTS.map(s => col(s.name, s.live
      ? [{ label: "Lessons", href: "/" + s.slug + "/lessons/" },
         { label: "Worksheets", href: "/" + s.slug + "/worksheets/" }]
      : [{ label: "Being Built" }])).join("") +
      col("Everything", [
        { label: "All Worksheets", href: "/worksheets/" },
        { label: "What We Use", href: "/resources/" },
      ]) + "</div>",`;

const newPanel = `  r: {
    /* Extras only. Lessons and printables live under Grades - see the note at
       the top of tools/fix-resources-menu.js. */
    body: '<div class="mg-cols">' +
      col("What We Use", [
        { label: "Books and Readers", href: "/resources/" },
        { label: "Tools and Supplies", href: "/resources/" },
      ]) +
      col("Extras", [
        { label: "Science Experiments" },
        { label: "Reading Lists" },
      ]) +
      col("Writing", [
        { label: "Blog" },
        { label: "More Coming" },
      ]) + "</div>" +
      '<p class="mg-note">Things we actually use, not a list copied off somebody else&rsquo;s blog. Any affiliate link is marked as one. Lessons and printables are not here &mdash; they live under each grade.</p>',`;

if (n.includes(oldPanel)) { n = n.replace(oldPanel, newPanel); done++; }
else console.error("MISS: resources panel");

const oldSheet = `SHEETS.r = { title: "Resources", parent: null, view: "/resources/", promo: MENUS.r.promo, rows:
  SUBJECTS.map(s => s.live ? { label: s.name, sub: "r-" + s.slug } : { label: s.name, soon: true })
    .concat([{ label: "All Worksheets", href: "/worksheets/", note: "Every Printable" }])
};`;

const newSheet = `SHEETS.r = { title: "Resources", parent: null, view: "/resources/", promo: MENUS.r.promo, rows: [
  { label: "What We Use", href: "/resources/", note: "Books, tools and supplies" },
  { label: "Science Experiments", soon: true },
  { label: "Reading Lists", soon: true },
  { label: "Blog", soon: true },
]};`;

if (n.includes(oldSheet)) { n = n.replace(oldSheet, newSheet); done++; }
else console.error("MISS: resources sheet");

/* the per-subject sub-sheets under Resources are unreachable now */
const start = n.indexOf("SUBJECTS.filter(s => s.live).forEach(s => {");
if (start >= 0) {
  const end = n.indexOf("});", start) + 4;
  n = n.slice(0, start) + n.slice(end);
  done++;
} else console.error("MISS: per-subject sheets");

fs.writeFileSync("nav.js", n, "utf8");
console.log("applied " + done + " of 3");
