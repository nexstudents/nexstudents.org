/* ─────────────────────────────────────────────────────────────────────────
   maths-units.js — the grade 7 maths course outline.

   🚨 TRANSCRIBED FROM THE BOOK'S OWN CONTENTS PAGES, NOT INFERRED. Read off the
   Internet Archive reader on 2026-09-03, spreads viii-ix, x-xi, xii-xiii, xv and
   xvi, with Paul's borrow. Nothing here was guessed and nothing was filled in to
   make a chapter look complete. If a row is not in this file it was not on the
   page → the same rule that makes english-units.js trustworthy.

   Glencoe — Mathematics: Applications and Connections, COURSE 2
   McGraw-Hill, 1998 · 698 pages · archive.org/details/mathematicscours0000unse
   🚨 BORROW-ONLY (internetarchivebooks · inlibrary · printdisabled).

   🚨 "COURSE 2" IS GLENCOE'S NAME FOR GRADE 7. That is why a search for "grade 7
   maths" never surfaces this book, and why it was nearly missed.

   ⚠️ PAGE NUMBERS ARE BUILD NOTES, for opening the right spread. They are NOT
   shown on a card. Paul, on the English outlines: "I don't want those pages on
   our lessons."

   ⚠️ 14 CHAPTERS, NOT 10. Paul's target shape was "maybe 10 Units with 4 lessons
   and 1 lesson review". The BOOK decides the real count, the same way the grade 7
   English book turned out to have 14 units rather than 10.

   🚨 MATHS FILLS ITS SLOTS DIFFERENTLY FROM EVERY OTHER SUBJECT. English, History
   and Science slots become reading lessons in lessons.js. A maths slot becomes a
   GENERATED lesson from build-math.js or build-integers.js - a real bracket the
   student types into. The outline and the pager do not care; only what sits behind
   a built card differs. Do not put maths content into lessons.js.

   ⚠️ EXPECT MOST SLOTS TO SAY "COMING SOON" FOR A LONG TIME. The generators today
   produce long division, division with remainders, and adding/subtracting integers
   - four lessons against roughly two hundred rows here. That is the same position
   grade 3 English is in (108 slots, one built) and it is still worth having: the
   structure is what says what to build next.

   SHAPE
     { n, title, project, items: [ { label, title, page, kind } ] }
     kind: "lesson"   a numbered lesson, the thing a slot becomes
           "lab"      Mathematics Lab - a hands-on activity, numbered like 4-1A
           "review"   Mid-Chapter Review, Study Guide and Review
           "test"     Chapter Test, Academic Skills Test
           "decision" DECISION MAKING feature
           "other"    anything else printed in the contents
   ⚠️ `kind` is STRUCTURE. The pager can show lessons only, or everything; dropping
   the field means that choice can never be made again without re-reading the book.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

/* 🚨 GLENCOE'S LESSON-TYPE LABEL IS MOVED OUT OF THE TITLE, NOT DELETED.
   "Problem-Solving Strategy: Make a Table" is their phrasing, but the half in
   front of the colon says what KIND of lesson it is, and that is real structure.
   So the card shows "Make a Table", `strand` keeps the type for grouping or
   badging later, and `book` keeps the original wording for finding the spread -
   exactly the arrangement in BEHAVIOR.md's titles rule.

   ⚠️ THE SPLIT HAPPENS HERE, IN THE HELPER, so all 37 rows are handled by one
   change and any row added later is handled automatically. Do not strip labels
   in the data - a title with a colon that is NOT one of these is left alone, and
   that is why the list is explicit rather than "everything before a colon". */
const STRANDS = [
  "Problem-Solving Strategy", "Algebra Connection", "Geometry Connection",
  "Estimation Strategy", "Probability Connection", "Art Connection",
  "Statistics Connection", "Mental Math Strategy", "Application",
];
/* 🚨 `slug` IS THE LAST ARGUMENT AND IS ALMOST ALWAYS ABSENT. A row without one is
   a slot on the shelf; a row with one is a real link to a built page. Only add it
   once the lesson exists AND teaches the row it is attached to - a shelf that
   claims a lesson is built is worse than an empty one, and the pager cannot tell
   the difference → [[feedback-never-assign-an-unbuilt-lesson]].
   The value matches the built page's href: "maths/<folder>" for /lessons/maths/<folder>/. */
const L = (label, title, page, slug) => {
  const at = title.indexOf(": ");
  const head = at === -1 ? null : title.slice(0, at);
  if (head && STRANDS.indexOf(head) !== -1) {
    return { label, title: title.slice(at + 2), strand: head, book: title,
             page, kind: "lesson", slug: slug || null };
  }
  return { label, title, page, kind: "lesson", slug: slug || null };
};
const LAB = (label, title, page) => ({ label, title, page, kind: "lab" });
const REV = (title, page) => ({ label: "", title, page, kind: "review" });
const TEST = (title, page) => ({ label: "", title, page, kind: "test" });
const DEC = (title, page) => ({ label: "", title, page, kind: "decision" });
const OTH = (title, page) => ({ label: "", title, page, kind: "other" });

const COURSE2 = {
  grade: 7,
  book: "Glencoe Mathematics: Applications and Connections, Course 2",
  year: 1998,
  pages: 698,
  identifier: "mathematicscours0000unse",
  units: [
    { n: 1, title: "Tools for Problem Solving", project: "Skiing", page: 2, items: [
      L("1-1", "A Plan for Problem Solving", 4, "maths/a-plan-for-problem-solving"),
      L("1-2", "Estimation Strategy: Using Rounding", 8),
      L("1-3", "Estimation Strategy: Using Patterns", 11),
      L("1-4", "Problem-Solving Strategy: Determine Reasonable Answers", 14),
      L("1-5", "Problem-Solving Strategy: Choose the Method of Computation", 17),
      REV("Mid-Chapter Review", 19),
      L("1-6", "Problem-Solving Strategy: Classify Information", 20),
      DEC("Planning a Flower Garden", 22),
      L("1-7", "Order of Operations", 24),
      LAB("1-8A", "Mathematics Lab: Algebra: Variables and Expressions", 27),
      L("1-8", "Algebra Connection: Variables and Expressions", 28),
      L("1-9", "Algebra Connection: Powers and Exponents", 32),
      LAB("1-9B", "Mathematics Lab: Spreadsheets", 36),
      L("1-10", "Algebra Connection: Solving Equations Mentally", 38),
      REV("Study Guide and Review", 42),
      TEST("Chapter Test", 45),
    ]},
    { n: 2, title: "Applications with Decimals", project: "Clubs and Recreations", page: 46, items: [
      L("2-1", "Comparing and Ordering Decimals", 48),
      L("2-2", "Rounding Decimals", 51),
      L("2-3", "Estimating with Decimals", 54),
      OTH("Review: Addition and Subtraction of Decimals", 58),
      LAB("2-4A", "Mathematics Lab: Multiplication with Decimal Models", 60),
      L("2-4", "Multiplying Decimals", 61),
      L("2-5", "Mental Math Strategy: Powers of Ten", 64),
      REV("Mid-Chapter Review", 66),
      L("2-6", "Scientific Notation", 67),
      LAB("2-7A", "Mathematics Lab: Division with Decimal Models", 70),
      L("2-7", "Dividing Decimals", 71),
      L("2-8", "Rounding Quotients", 75),
      L("2-9", "The Metric System", 78),
      L("2-10", "Problem-Solving Strategy: Determine Reasonable Answers", 81),
      REV("Study Guide and Review", 83),
      TEST("Chapter Test", 87),
    ]},
    { n: 3, title: "Statistics and Data Analysis", project: "Languages of the World", page: 88, items: [
      L("3-1", "Problem-Solving Strategy: Use a Graph", 90),
      L("3-2", "Problem-Solving Strategy: Make a Table", 93),
      LAB("3-2B", "Mathematics Lab: Data Base", 96),
      L("3-3", "Range and Scales", 98),
      L("3-4", "Line Plots", 101),
      L("3-5", "Mean, Median, and Mode", 104),
      REV("Mid-Chapter Review", 107),
      LAB("3-5B", "Mathematics Lab: Are You Average?", 108),
      L("3-6", "Stem-and-Leaf Plots", 109),
      LAB("3-7A", "Mathematics Lab: How Much Is a Handful?", 112),
      L("3-7", "Making Predictions", 113),
      L("3-8", "Misleading Statistics", 116),
      REV("Study Guide and Review", 120),
      TEST("Chapter Test", 123),
      TEST("Academic Skills Test", 124),
    ]},
    { n: 4, title: "Patterns and Number Sense", project: "Forestland", page: 126, items: [
      LAB("4-1A", "Mathematics Lab: Exploring Factors", 128),
      L("4-1", "Divisibility Patterns", 129),
      L("4-2", "Prime Factorization", 132),
      L("4-3", "Sequences", 136),
      LAB("4-3B", "Mathematics Lab: Exploring Geometric and Arithmetic Sequences", 140),
      L("4-4", "Problem-Solving Strategy: Make a List", 142),
      L("4-5", "Greatest Common Factor", 145),
      DEC("Sponsoring a Retirement Center", 148),
      L("4-6", "Fractions in Simplest Form", 150),
      REV("Mid-Chapter Review", 153),
      L("4-7", "Fractions and Decimals", 154),
      L("4-8", "Probability Connection: Simple Events", 157),
      L("4-9", "Least Common Multiple", 161),
      L("4-10", "Comparing and Ordering Fractions and Decimals", 164),
      REV("Study Guide and Review", 168),
      TEST("Chapter Test", 171),
    ]},
    { n: 5, title: "Applications with Fractions", project: "Business", page: 172, items: [
      L("5-1", "Mixed Numbers and Improper Fractions", 174),
      L("5-2", "Estimating with Fractions", 178),
      L("5-3", "Adding and Subtracting Fractions", 182),
      L("5-4", "Adding and Subtracting Mixed Numbers", 186),
      LAB("5-5A", "Mathematics Lab: Multiplying Fractions and Mixed Numbers", 189),
      L("5-5", "Multiplying Fractions and Mixed Numbers", 190),
      REV("Mid-Chapter Review", 193),
      L("5-6", "Geometry Connection: Perimeter", 194),
      L("5-7", "Circles and Circumference", 197),
      L("5-8", "Probability Connection: Expected Value", 201),
      L("5-9", "Properties", 204),
      L("5-10", "Dividing Fractions and Mixed Numbers", 207),
      LAB("5-10B", "Mathematics Lab: Fraction Patterns", 210),
      L("5-11", "Problem-Solving Strategy: Eliminate Possibilities", 212),
      REV("Study Guide and Review", 214),
      TEST("Chapter Test", 217),
    ]},
    { n: 6, title: "An Introduction to Algebra", project: "Temperature", page: 218, items: [
      L("6-1", "Solving Equations Using Inverse Operations", 220),
      LAB("6-2A", "Mathematics Lab: Solving Equations Using Models", 223),
      L("6-2", "Solving Addition and Subtraction Equations", 225),
      L("6-3", "Solving Multiplication and Division Equations", 228),
      REV("Mid-Chapter Review", 231),
      LAB("6-3B", "Mathematics Lab: Solving Two-Step Equations", 232),
      L("6-4", "Writing Algebraic Expressions", 233),
      L("6-5", "Problem-Solving Strategy: Use an Equation", 236),
      L("6-6", "Changing Units in the Customary System", 238),
      LAB("6-7A", "Mathematics Lab: A Preview of Geometry: Area", 241),
      L("6-7", "Geometry Connection: Area", 243),
      REV("Study Guide and Review", 246),
      TEST("Chapter Test", 249),
      TEST("Academic Skills Test", 250),
    ]},
    { n: 7, title: "Integers", project: "Wind Storms", page: 252, items: [
      L("7-1", "Integers", 254),
      L("7-2", "Comparing and Ordering Integers", 257),
      L("7-3", "The Coordinate System", 259),
      LAB("7-4A", "Mathematics Lab: Adding Integers", 262),
      L("7-4", "Adding Integers", 263),
      LAB("7-5A", "Mathematics Lab: Subtracting Integers", 267),
      L("7-5", "Subtracting Integers", 268),
      REV("Mid-Chapter Review", 271),
      DEC("Planning for Good Nutrition", 272),
      L("7-6", "Problem-Solving Strategy: Find a Pattern", 274),
      LAB("7-7A", "Mathematics Lab: Multiplying Integers", 277),
      L("7-7", "Multiplying Integers", 278),
      L("7-8", "Dividing Integers", 281),
      LAB("7-9A", "Mathematics Lab: Solving Equations", 283),
      L("7-9", "Algebra Connection: Solving Equations", 284),
      L("7-10", "Integers as Exponents", 287),
      REV("Study Guide and Review", 290),
      TEST("Chapter Test", 293),
    ]},
    { n: 8, title: "Investigations in Geometry", project: "Highways and Byways", page: 294, items: [
      LAB("8-1A", "Mathematics Lab: Measuring Angles", 296),
      L("8-1", "Angles", 297),
      LAB("8-1B", "Mathematics Lab: Perpendicular Lines", 301),
      L("8-2", "Polygons", 303),
      LAB("8-2B", "Mathematics Lab: Sum of the Angles of a Polygon", 306),
      L("8-3", "Triangles and Quadrilaterals", 307),
      LAB("8-4A", "Mathematics Lab: Bisecting Angles and Segments", 311),
      L("8-4", "Congruent Triangles", 313),
      REV("Mid-Chapter Review", 316),
      LAB("8-4B", "Mathematics Lab: Constructing Regular Polygons", 317),
      L("8-5", "Problem-Solving Strategy: Use Logical Reasoning", 319),
      L("8-6", "Tessellations", 321),
      L("8-7", "Art Connection: Translations", 324),
      L("8-8", "Art Connection: Reflections", 327),
      REV("Study Guide and Review", 330),
      TEST("Chapter Test", 333),
    ]},
    { n: 9, title: "Area", project: "Oceans and Islands", page: 334, items: [
      L("9-1", "Problem-Solving Strategy: Guess and Check", 336),
      L("9-2", "Squares and Square Roots", 338),
      L("9-3", "Estimating Square Roots", 341),
      LAB("9-4A", "Mathematics Lab: The Pythagorean Theorem", 343),
      L("9-4", "The Pythagorean Theorem", 344),
      L("9-5", "Using the Pythagorean Theorem", 348),
      REV("Mid-Chapter Review", 350),
      L("9-6", "Area of Irregular Figures", 351),
      LAB("9-7A", "Mathematics Lab: Finding the Area of a Trapezoid", 354),
      L("9-7", "Area of Triangles and Trapezoids", 355),
      L("9-8", "Area of Circles", 359),
      LAB("9-9A", "Mathematics Lab: Probability and Area Models", 362),
      L("9-9", "Area Models and Probability", 363),
      REV("Study Guide and Review", 368),
      TEST("Chapter Test", 371),
      TEST("Academic Skills Test", 372),
    ]},
    { n: 10, title: "Surface Area and Volume", project: "Volcanoes", page: 374, items: [
      LAB("10-1A", "Mathematics Lab: Building Three-Dimensional Figures", 376),
      L("10-1", "Drawing Three-Dimensional Figures", 378),
      L("10-2", "Problem-Solving Strategy: Make a Model", 381),
      L("10-3", "Surface Area of Prisms", 383),
      LAB("10-4A", "Mathematics Lab: Introduction to Surface Area of a Cylinder", 387),
      L("10-4", "Surface Area of Cylinders", 388),
      REV("Mid-Chapter Review", 391),
      DEC("Choosing a Scholarship Prize", 392),
      L("10-5", "Volume of Prisms", 394),
      L("10-6", "Volume of Cylinders", 398),
      LAB("10-6B", "Mathematics Lab: Volume of Cylinders", 401),
      L("10-7", "Problem-Solving Strategy: Use a Formula", 402),
      REV("Study Guide and Review", 404),
      TEST("Chapter Test", 407),
    ]},
    { n: 11, title: "Ratio, Proportion, and Percent", project: "Health and Safety", page: 408, items: [
      LAB("11-1A", "Mathematics Lab: Equal Ratios", 410),
      L("11-1", "Ratios", 411),
      L("11-2", "Rates", 414),
      L("11-3", "Proportions", 417),
      LAB("11-3B", "Mathematics Lab: Capture and Recapture", 421),
      L("11-4", "Geometry Connection: Similar Polygons", 422),
      L("11-5", "Application: Scale Drawings", 426),
      REV("Mid-Chapter Review", 429),
      L("11-6", "Problem-Solving Strategy: Draw a Diagram", 430),
      L("11-7", "Percent", 433),
      L("11-8", "Percents and Fractions", 436),
      L("11-9", "Percents and Decimals", 440),
      L("11-10", "Percents Greater Than 100% and Percents Less Than 1%", 444),
      REV("Study Guide and Review", 448),
      TEST("Chapter Test", 451),
    ]},
    { n: 12, title: "Applications with Percent", project: "Mail", page: 452, items: [
      L("12-1", "Percent of a Number", 454),
      L("12-2", "Problem-Solving Strategy: Solve a Simpler Problem", 457),
      L("12-3", "Percent and Estimation", 459),
      L("12-4", "The Percent Proportion", 462),
      L("12-5", "Algebra Connection: The Percent Equation", 465),
      REV("Mid-Chapter Review", 468),
      LAB("12-6A", "Mathematics Lab: Jellybean Statistics", 469),
      L("12-6", "Statistics Connection: Circle Graphs", 470),
      LAB("12-7A", "Mathematics Lab: Dot Paper and Percent", 474),
      L("12-7", "Percent of Change", 475),
      L("12-8", "Discount and Sales Tax", 479),
      L("12-9", "Simple Interest", 482),
      REV("Study Guide and Review", 484),
      TEST("Chapter Test", 487),
      TEST("Academic Skills Test", 488),
    ]},
    { n: 13, title: "Discrete Math and Probability", project: "Earthquakes", page: 490, items: [
      L("13-1", "Tree Diagrams", 492),
      LAB("13-1B", "Mathematics Lab: Fair and Unfair Games", 495),
      L("13-2", "Counting Using Multiplication", 497),
      L("13-3", "Theoretical and Experimental Probability", 500),
      L("13-4", "Problem-Solving Strategy: Act It Out", 503),
      REV("Mid-Chapter Review", 505),
      L("13-5", "Statistics Connection: Using Statistics to Predict", 506),
      L("13-6", "Probability of Two Events", 510),
      DEC("Choosing a Camcorder", 514),
      LAB("13-7A", "Mathematics Lab: Exploring Permutations", 516),
      L("13-7", "Permutations", 517),
      LAB("13-8A", "Mathematics Lab: Exploring Combinations", 521),
      L("13-8", "Combinations", 522),
      REV("Study Guide and Review", 526),
      TEST("Chapter Test", 529),
    ]},
    { n: 14, title: "Functions and Graphs", project: "Animals", page: 530, items: [
      L("14-1", "Problem-Solving Strategy: Work Backward", 532),
      LAB("14-2A", "Mathematics Lab: Two-Step Equations", 535),
      L("14-2", "Solving Two-Step Equations", 536),
      L("14-3", "Equations with Two Variables", 540),
      L("14-4", "Graphing Equations with Two Variables", 543),
      REV("Mid-Chapter Review", 545),
      LAB("14-5A", "Mathematics Lab: A Function of Time", 546),
      L("14-5", "Functions", 547),
      L("14-6", "Geometry Connection: Graphing Transformations", 551),
      LAB("14-6B", "Mathematics Lab: Dilations", 555),
      REV("Study Guide and Review", 556),
      TEST("Chapter Test", 559),
      TEST("Academic Skills Test", 560),
    ]},
  ],
};

/* 🚨 WHAT IS ALREADY BUILT, and what it maps to. The two integers lessons and the
   two long-division ones exist as GENERATED pages, not readings, and they do not
   line up one-to-one with a Glencoe row - long division is a grade 4 skill here and
   has no Course 2 lesson at all, because this book assumes it.
   ⚠️ So do NOT wire slugs into the items above until each mapping has been decided
   with Paul. An outline that claims a lesson is built when it teaches something
   different is worse than an empty shelf → [[feedback-never-assign-an-unbuilt-lesson]]. */
const BUILT_NOTES = {
  "7-4": "maths/adding-integers exists (grade 6 shelf). Same skill, different grade.",
  "7-5": "maths/subtracting-integers exists (grade 6 shelf). Same skill, different grade.",
};

const tally = () => COURSE2.units.map((u) => ({
  unit: u.n,
  title: u.title,
  lessons: u.items.filter((i) => i.kind === "lesson").length,
  labs: u.items.filter((i) => i.kind === "lab").length,
  rows: u.items.length,
}));

/* ── THE REVIEWS GET OUR NAMES AND REAL NUMBERS ───────────────────────────
   🚨 GLENCOE ALREADY HAS THE SHAPE PAUL ASKED FOR, two reviews per chapter:
     "Mid-Chapter Review"     a check partway through -> our Halfway Check
     "Study Guide and Review" the test at the end     -> our Unit N Review
   That is the mixed-review-then-unit-test structure in BEHAVIOR.md, written by
   the publisher in 1998. We are not inventing it, we are naming it.

   ⚠️ They shipped with `label: ""`, which rendered as "Review " with nothing
   after it once the pager started shelving reviews. Numbered here, in the data,
   so every subject's reviews carry a label the same way.
   ⚠️ Runs ONCE at module load. Do not call it again - it would renumber. */
for (const u of COURSE2.units) {
  const lessons = u.items.filter((i) => i.kind === "lesson").length;
  let seen = 0;
  for (const it of u.items) {
    if (it.kind !== "review") continue;
    seen++;
    it.book = it.title;
    if (/^Mid-Chapter/.test(it.title)) {
      it.label = u.n + "-M";
      it.title = "Halfway Check: " + u.title;
    } else {
      it.label = u.n + "-" + (lessons + 1);
      it.title = "Unit " + u.n + " Review: " + u.title;
    }
  }
}

module.exports = { COURSE2, BUILT_NOTES, tally };
