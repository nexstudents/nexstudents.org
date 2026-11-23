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
    /* 🆕 2026-11-22: Chapter 3 is the next page on the Math 7 shelf, pager number 16
       (folder content/grade-7/maths/unit-16/). Paul, 2026-11-07: Math continues with
       Pre-Algebra Chapter 3, not Glencoe 4-10. Pages read off the book in the week 12
       packet; 3.4 and 3.6 start pages are exact, their end pages were not read. */
    { n: SHELF_UNIT + 1, chapter: 3, title: "Pre-Algebra: Multi-Step Equations and Inequalities", items: [
      { label: "3.1", title: "Solving Two-Step Equations", page: 120, kind: "lesson", slug: "maths/solving-two-step-equations" },
      { label: "3.2", title: "Solving Equations with Like Terms and Parentheses", page: 125, kind: "lesson", slug: "maths/solving-equations-with-like-terms-and-parentheses" },
      { label: "3.3", title: "Solving Equations with Variables on Both Sides", page: 131, kind: "lesson", slug: "maths/solving-equations-with-variables-on-both-sides" },
      { label: "3.4", title: "Solving Inequalities Using Addition or Subtraction", page: 138, kind: "lesson" },
      { label: "3.5", title: "Solving Inequalities Using Multiplication or Division", page: 144, kind: "lesson" },
      { label: "3.6", title: "Solving Multi-Step Inequalities", page: 149, kind: "lesson" },
    ]},
  ],
};

module.exports = { PREALG, SHELF_UNIT };
