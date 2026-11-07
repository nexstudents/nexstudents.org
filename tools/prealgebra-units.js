/* ─────────────────────────────────────────────────────────────────────────
   prealgebra-units.js — the Pre-Algebra course Kolten moved to on 2026-11-09.

   McDougal Littell Pre-Algebra (California, 2008), archive.org
   prealgebra0000unse_z0p2 (borrow-only). Titles and pages read off the book on
   2026-11-07 (week 10-11 gather packet).

   🚨 WHY IT EXISTS. Paul, 2026-11-07: "Kolten is switching to algebra lessons ...
   replace the current math lessons with the ones we choose from the archive.org
   book." The Glencoe Course 2 outline (maths-units.js) is the book's own contents
   and stays untouched. This file is the second Math course for grade 7.

   ⚠️ ONE UNIT SO FAR, Chapter 2 "Solving Equations". Lessons are numbered the
   book's way (2.1, 2.2 ...). On the Math 7 shelf it is the page after Glencoe's
   14 chapters, so its pager number is SHELF_UNIT (15), and every lesson's
   `seq.unit` and folder (content/grade-7/maths/unit-15/) use that number.
   Whether Pre-Algebra gets a shelf of its own is still Paul's call.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

const SHELF_UNIT = 15;

const PREALG = {
  book: "McDougal Littell Pre-Algebra (2008)",
  units: [
    { n: SHELF_UNIT, chapter: 2, title: "Pre-Algebra: Solving Equations", items: [
      { label: "2.1", title: "Properties and Operations", page: 63, kind: "lesson", slug: "maths/properties-and-operations" },
      { label: "2.2", title: "The Distributive Property", page: 71, kind: "lesson", slug: "maths/the-distributive-property" },
      { label: "2.3", title: "Simplifying Variable Expressions", page: 78, kind: "lesson", slug: "maths/simplifying-variable-expressions" },
      { label: "2.4", title: "Variables and Equations", page: 85, kind: "lesson", slug: "maths/variables-and-equations" },
      { label: "2.5", title: "Solving Equations Using Addition or Subtraction", page: 91, kind: "lesson", slug: "maths/solving-equations-using-addition-or-subtraction" },
      { label: "2.6", title: "Solving Equations Using Multiplication or Division", page: 97, kind: "lesson", slug: "maths/solving-equations-using-multiplication-or-division" },
      { label: "2.7", title: "Decimal Operations and Equations with Decimals", page: 102, kind: "lesson", slug: "maths/decimal-operations-and-equations-with-decimals" },
    ]},
  ],
};

module.exports = { PREALG, SHELF_UNIT };
