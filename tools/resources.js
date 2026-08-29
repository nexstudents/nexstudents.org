/* ─────────────────────────────────────────────────────────────────────────
   RESOURCES. One entry per thing we actually use.

   Paul, 2026-08-29, after finding the 1980s and 90s textbooks on Archive.org:
   "i want to add a few things you can give to the resources ... i like what
   you mention about the archive.org and i want to give a mention to homeschool
   grades, and i like what you showed me about The Palmer Method of Business
   Writing ... i like that as our mcguffy we can add all that as resources."

   🚨 THE RULE THIS FILE EXISTS TO ENFORCE: a list with no reasoning on it is
   just a list. Every entry says what it is, why it earned a place, and what
   the catch is. That is the same argument as the Ground Control block on a
   lesson — the reasoning is the product, the link is not.

   `affiliate` is REQUIRED and explicit, true or false. BEHAVIOR.md: any
   affiliate link is marked as one. Leaving it undefined would let an unmarked
   one ship by accident, so build-pages fails on a missing value rather than
   assuming false. Nothing here is an affiliate link today; all four are free.

   `cat` must match a real resources page slug, or the card renders nowhere.
   ───────────────────────────────────────────────────────────────────────── */

const RESOURCES = [

/* ═════════════════════════ Books and readers ═════════════════════════════ */
{
  slug: "internet-archive",
  cat: "books-and-readers",
  title: "Internet Archive and Open Library",
  url: "https://archive.org/",
  cost: "Free",
  affiliate: false,
  what: "A lending library of scanned books, including school textbooks from the 1980s and 1990s and, crucially, their teacher's editions.",
  why:
    "Modern workbooks give you the practice and leave out the teaching. That is not laziness, it is " +
    "structure: a workbook is half of a two-part system, and the half that explains the concept is a " +
    "separate textbook and teacher's edition you were never sold. Those older teacher's editions are " +
    "sitting here, and they carry on every page what to say, why the rule works, and what students " +
    "get wrong — the exact thing missing from the workbook on your table.",
  note:
    "Free account, then borrow like a library: one-hour loans that renew while you are reading, or " +
    "fourteen days. A scanned book sometimes has pages missing; the item page says so before you borrow.",
},
{
  slug: "mcguffeys-readers",
  cat: "books-and-readers",
  title: "McGuffey&rsquo;s Eclectic Readers",
  url: "https://www.gutenberg.org/ebooks/author/5671",
  cost: "Free &middot; public domain",
  affiliate: false,
  what: "A graded reading series from 1836, still one of the best sequences ever written for teaching a child to read.",
  why:
    "McGuffey teaches phonics and reading in the same book instead of splitting them into two subjects, " +
    "and it builds strictly: nothing appears that the reader has not been taught to decode. That is why " +
    "the spelling list on this site is phonics-only with no sight words. The sight-word approach is the " +
    "newer idea, not the older one — Dolch is 1936, Fry is 1957.",
  note:
    "Public domain, so it is yours to download and keep, with no loan window. Start at the Primer or " +
    "First Reader and move up when the reading is comfortable, not when the age says so.",
},
{
  slug: "palmer-method",
  cat: "books-and-readers",
  title: "The Palmer Method of Business Writing",
  url: "https://www.gutenberg.org/ebooks/66476",
  cost: "Free &middot; public domain",
  affiliate: false,
  what: "A complete handwriting system from 1915, not a book of tracing sheets.",
  why:
    "It teaches handwriting as a MOVEMENT rather than a shape to copy. The drills train the arm and " +
    "shoulder instead of the fingers, which is why Palmer handwriting stays legible at speed and " +
    "finger-drawn handwriting falls apart the moment a student has to write quickly. If handwriting is " +
    "the thing you are trying to fix, this is a method, and it costs nothing.",
  note:
    "Written for business clerks, so the tone is dated and the loops are more ornate than anyone needs " +
    "now. Take the movement drills and ignore the flourishes.",
},

/* ═══════════════════════ Tools and supplies ══════════════════════════════ */
{
  slug: "homeschool-grades",
  cat: "tools-and-supplies",
  title: "HomeschoolGrades",
  url: "https://homeschoolgrades.com/",
  cost: "Free for one student &middot; paid plans for more",
  affiliate: false,
  what: "The gradebook and lesson planner we keep the actual school records in.",
  why:
    "It is the system of record here, not a spreadsheet: lesson plans by day with steps a student ticks " +
    "off, grades, attendance, GPA, quizzes and transcripts in one place. The part that matters most is " +
    "the transcript. A homeschool year that was taught well but recorded badly becomes a problem years " +
    "later, at exactly the point when it is too late to reconstruct.",
  note:
    "The free plan covers one student with five subjects a year, which is a genuine free tier rather " +
    "than a trial. Paid plans start around $20 a year for five students. We pay for it and we are not " +
    "affiliated with them.",
},

];

module.exports = { RESOURCES };
