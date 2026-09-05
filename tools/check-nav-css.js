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


/* 🚨 SAME CLASS, SAME NUMBERS. THE CHECK ABOVE ONLY ASKS WHETHER A CLASS IS
   STYLED AT ALL, AND THAT IS NOT ENOUGH.
   Paul, 2026-09-04: "the entire header and icons are off ... the login and cart
   icon are not on the far right and the pages dont look like they are centered
   on a pc", and "the NexStudents name is the wrong text color. you have the NEX
   part Greay and the Students part White."
   All three were VALUE drift, not missing rules, so the class check passed every
   time while the two headers disagreed:
     .nv padding   14px 20px here, 14px 28px there - every lesson's home button
                   started 8px left of the home button on every other page
     .nv gap       22px vs 26px
     .nv .word     colour --nv-dim, so "Nex" rendered grey against a white
                   "Students" that came from the <b>
   ⚠️ NOT EVERY PROPERTY CAN MATCH. Colours are TOKENS and the two shells use
   different ones on purpose - ns.css says --fg, lesson-nav.css says --nv-fg,
   which each template maps onto its own palette. So the comparison is on the
   TOKEN TEXT, not the resolved colour: both files must say "paint this from the
   foreground token", and it is the shells' job to decide what that is.
   ⚠️ Deliberately a SHORT list. It covers the geometry that makes two headers
   line up and the one colour that split a wordmark in half. Adding every
   property would make this fail on differences that are intended. */
const MUST_MATCH = [
  { sel: ".nv", props: ["padding", "gap"] },
  { sel: ".navicons", props: ["margin-left"] },
];

/* 🚨 A MISSING DECLARATION IS DRIFT, NOT AN EXEMPTION. The first version of this
   guard skipped a property when one file did not declare it, and that is exactly
   the shape two of the three real bugs had: .navicons had margin-left in neither
   file, so "both agree" was true and the icons sat in the wrong place on every
   page. Absent is a VALUE here, and it has to be the same value on both sides. */
const NOT_SET = "(not declared)";

/* The LAST declaration of a property inside the first rule whose selector list
   contains `sel` exactly, at top level - media queries are skipped, because the
   two files legitimately break at different widths. */
function declOf(css, sel, prop) {
  const body = topLevelRule(css, sel);
  if (body === null) return null;
  let out = null;
  body.split(";").forEach((d) => {
    const i = d.indexOf(":");
    if (i < 0) return;
    if (d.slice(0, i).trim() !== prop) return;
    out = d.slice(i + 1).trim().replace(/\s+/g, " ");
  });
  return out;
}

function topLevelRule(css, sel) {
  let depth = 0, start = 0;
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (ch === "{") {
      if (depth === 0) {
        const head = css.slice(start, i);
        /* an @media / @supports block opens a brace too; step into it and keep
           its contents OUT of the top-level scan */
        if (!head.trim().startsWith("@")) {
          const list = head.split(",").map((x) => x.trim());
          if (list.indexOf(sel) !== -1) {
            let d2 = 1, j = i + 1;
            while (j < css.length && d2 > 0) { if (css[j] === "{") d2++; if (css[j] === "}") d2--; j++; }
            return css.slice(i + 1, j - 1);
          }
        }
      }
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth < 0) depth = 0;
      start = i + 1;
    } else if (depth === 0 && (ch === "\n")) {
      /* nothing - start only resets on a closing brace */
    }
  }
  return null;
}

const drift = [];
MUST_MATCH.forEach((m) => {
  m.props.forEach((prop) => {
    const a = declOf(files["assets/ns.css"], m.sel, prop);
    const b = declOf(files["assets/lesson-nav.css"], m.sel, prop);
    const av = a === null ? NOT_SET : a;
    const bv = b === null ? NOT_SET : b;
    if (av !== bv) drift.push({ sel: m.sel, prop: prop, a: av, b: bv });
  });
});

if (drift.length) {
  console.error("FAIL: the nav is one markup, and these rules give it two different shapes.\n" +
    "      Both files style the class, so the check above passes - but the numbers\n" +
    "      disagree, which is how a lesson header ends up 8px left of every other\n" +
    "      page and a wordmark ends up two colours.\n");
  drift.forEach((d) => {
    console.error("  " + d.sel + " { " + d.prop + " }");
    console.error("      assets/ns.css         : " + d.a);
    console.error("      assets/lesson-nav.css : " + d.b);
  });
  console.error("\n      Make them equal. If they genuinely must differ, take the property out of\n" +
    "      MUST_MATCH in check-nav-css.js and say why.");
  process.exit(1);
}


/* 🚨 THE WORDMARK IS ONE WORD AND MUST BE ONE COLOUR.
   Paul, 2026-09-04: "the NexStudents name is the wrong text color. you have the
   NEX part Greay and the Students part White."
   The markup is `Nex<b>Students</b>`, and the <b> is the brand's own
   capitalisation, NOT a styling hook. lesson-nav.css painted the container
   --nv-dim and the <b> --nv-fg, so the name came apart down the middle. The
   cross-file check above cannot see this: the two shells name their tokens
   differently on purpose (--fg vs --nv-fg), and ns.css does not declare a colour
   on the container at all because it inherits one.
   So this is a WITHIN-FILE invariant: whatever a shell paints the two halves,
   it has to paint them the same, or leave both alone and let them inherit. */
const WORDMARK = [
  { file: "assets/ns.css", whole: ".word", bold: ".word b" },
  { file: "assets/lesson-nav.css", whole: ".nv .word", bold: ".nv .word b" },
];

const split = [];
WORDMARK.forEach((w) => {
  const css = files[w.file];
  const a = declOf(css, w.whole, "color");
  const b = declOf(css, w.bold, "color");
  /* Both inheriting is fine - that is one colour too. */
  if (a === null && b === null) return;
  /* One painted and the other inherited is the bug: the painted half wins and
     the inherited half takes whatever the nav around it is using. */
  if (a === null || b === null || a !== b) {
    split.push({ file: w.file, whole: a === null ? "(inherits)" : a, bold: b === null ? "(inherits)" : b });
  }
});

if (split.length) {
  console.error("FAIL: the NexStudents wordmark is painted in two colours.\n" +
    "      `Nex<b>Students</b>` is one word; the <b> is the brand's capitalisation,\n" +
    "      not a styling hook. Give both halves the same colour, or neither.\n");
  split.forEach((s) => {
    console.error("  " + s.file);
    console.error("      the word : " + s.whole);
    console.error("      the <b>  : " + s.bold);
  });
  process.exit(1);
}

console.log(JSON.stringify({
  navClassesChecked: classes.size,
  geometryPropsChecked: MUST_MATCH.reduce(function(n,m){return n+m.props.length;},0),
  styledInBoth: classes.size - Object.keys(ONLY).filter((c) => classes.has(c)).length,
  shellOnlyByDesign: Object.keys(ONLY).filter((c) => classes.has(c)).length,
}, null, 1));
