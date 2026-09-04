#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   check-nav-css.js — the nav markup is shared, so its CSS has to be too.

     node tools/check-nav-css.js .

   🚨 WHY THIS EXISTS. `nav.js` emits ONE nav and ONE drawer for every page on
   the site. Their rules live in two places: ns.css for site pages, and
   lesson-nav.css for lesson pages, which do not load ns.css at all. Every time
   the nav grew a piece the rule was added to ns.css and the second file was
   forgotten, so lesson pages shipped the right HTML with no CSS behind it.

   Four had piled up by 2026-09-03, and Paul found all four on his phone:
     .mswitch      ten rules in ns.css, none here - the day/night switch fell
                   back to a default button, a white slab reading "Night Mode".
                   He called it "the retired version"; it was unstyled.
     .navleft      the fix keeping the burger and home icon in one grid cell.
                   The markup shipped, the rule did not, so the logo, login and
                   cart stayed on a second row - the header looked UNFIXED after
                   being fixed, which is the worst kind of this bug.
     .homeb        the home icon, same story.
     .navbtn/.btn  Support Us: a pill here, a rectangle there, and a different
                   colour again, because the two files were written months apart.

   ⚠️ THE FAILURE MODE IS SILENT. Nothing errors. The page renders, the class is
   in the HTML, and it simply has no rules - which reads as an old design being
   kept on purpose rather than as a bug. Paul: "I feel you like to save old
   sections for some reason ... what are you doing Claude?" Nothing was saved.
   Nobody was checking.

   ⭐ THE REAL FIX IS ONE SHARED nav.css BOTH SHELLS LINK, so nav CSS has a
   single source the way nav markup already does. Until that refactor happens
   this is the net underneath it. When it does happen, this check can go.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2];
if (!ROOT) { console.error("usage: check-nav-css.js <site root>"); process.exit(1); }

const { navMarkup, footerMarkup, modeSwitch } = require("./nav.js");

/* Render the real thing rather than reading the source for class="..." - the
   markup is built with template literals and conditionals, so scraping the file
   would miss anything only emitted on one branch. */
let html = "";
try {
  html += navMarkup(null, "btn");
  html += navMarkup(null, "navbtn");
  if (typeof footerMarkup === "function") html += footerMarkup();
  if (typeof modeSwitch === "function") html += modeSwitch("mswitch-drawer");
} catch (e) {
  console.error("FAIL: check-nav-css.js could not render the nav: " + e.message);
  process.exit(1);
}

const classes = new Set();
(html.match(/class="[^"]+"/g) || []).forEach((m) => {
  m.slice(7, -1).split(/\s+/).forEach((c) => { if (c) classes.add(c); });
});

/* Classes that legitimately live in only one shell.
   ⚠️ Add to this ONLY with a reason written beside it. An unexplained entry
   here is how a real miss gets waved through. */
const ONLY = {
  btn: "site pages only - a lesson page uses .navbtn, which nav.js is handed instead",
  navbtn: "lesson pages only - a site page uses .btn",
  "mg-top": "the mega menu is desktop site chrome and is not built into a lesson",
  mega: "as above",
  "mg-body": "as above",
  "mg-all": "as above",
  "mg-col": "as above",
  "mg-promo": "as above",
  fcol: "footer column, site pages only - lesson pages have no footer yet",
  fgrid: "footer grid, same - see the known gap in CLAUDE.md",
  fbot: "footer bottom row, same",
  disc: "footer disclaimer text, same",
  wrap: "the site page width container. A lesson page has its own .wrap in the lesson template, not in lesson-nav.css, so it IS styled there - just not in a file this check reads.",
};

/* 🚨 IF A FOOTER EVER LANDS ON LESSON PAGES, DELETE THE FOUR FOOTER ENTRIES
   ABOVE. They are excused only because the footer is not rendered there yet; the
   moment it is, they become exactly the bug this file exists to catch. */

/* 🚨 COMMENTS ARE STRIPPED FIRST, AND THIS IS NOT TIDINESS - THE CHECK WAS
   USELESS WITHOUT IT. Both stylesheets are heavily commented, and those comments
   name the very classes being looked for: lesson-nav.css explains ".navleft" in
   prose right above the rule. So a class could be DELETED from the file and the
   paragraph describing it would still satisfy the search.
   Caught by deliberately renaming .navleft to .navleftXX and watching the check
   pass anyway. A guard that cannot fail is not a guard - run the control. */
const decomment = (css) => css.replace(/\/\*[\s\S]*?\*\//g, " ");

const files = {
  "assets/ns.css": decomment(fs.readFileSync(path.join(ROOT, "assets/ns.css"), "utf8")),
  "assets/lesson-nav.css": decomment(fs.readFileSync(path.join(ROOT, "assets/lesson-nav.css"), "utf8")),
};

/* A class counts as styled if it appears as a selector anywhere in the file -
   `.x{`, `.x `, `.x.y`, `.x:hover`, `.a .x`. Deliberately loose: this is asking
   "did anyone write a rule for this", not "is the rule correct". */
function styled(css, cls) {
  const esc = cls.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
  return new RegExp("\\." + esc + "(?![a-zA-Z0-9_-])").test(css);
}

const missing = [];
Array.from(classes).sort().forEach((c) => {
  const where = Object.keys(files).filter((f) => styled(files[f], c));
  if (where.length === 2) return;                 /* styled in both - fine */
  if (where.length === 0) return;                 /* styled nowhere - a dead class, not this check's job */
  if (ONLY[c]) return;                            /* deliberate, with a reason */
  missing.push({ cls: c, has: where[0], lacks: Object.keys(files).find((f) => f !== where[0]) });
});

if (missing.length) {
  console.error("FAIL: the nav emits classes that only ONE stylesheet knows about.\n" +
    "      The markup is shared, so the rules have to be. A class styled in one file\n" +
    "      and not the other ships as unstyled HTML on half the site, silently.\n");
  missing.forEach((m) => {
    console.error("  ." + m.cls);
    console.error("      styled in : " + m.has);
    console.error("      missing   : " + m.lacks);
  });
  console.error("\n      Add a rule to the second file, or list the class in ONLY at the top of\n" +
    "      check-nav-css.js WITH A REASON if it genuinely belongs to one shell.");
  process.exit(1);
}

console.log(JSON.stringify({
  navClassesChecked: classes.size,
  styledInBoth: classes.size - Object.keys(ONLY).filter((c) => classes.has(c)).length,
  shellOnlyByDesign: Object.keys(ONLY).filter((c) => classes.has(c)).length,
}, null, 1));
