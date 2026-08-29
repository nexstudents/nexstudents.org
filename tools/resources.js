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

   `links` is OPTIONAL: a list of [label, url] pairs for a resource that has
   several useful editions or volumes. One card carrying six McGuffey readers
   beats six cards each repeating the same paragraph about McGuffey. `url`
   stays the main destination; `links` are the specific ones underneath.
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
    "fourteen days. A scanned book sometimes has pages missing; the item page says so before you borrow. " +
    "You have to make the account yourself &mdash; without signing in you see a few pages and then the back cover.",
  links: [
    ["Open Library", "https://openlibrary.org/"],
  ],
},
{
  slug: "houghton-mifflin-english",
  cat: "books-and-readers",
  title: "Houghton Mifflin English &mdash; with the teacher&rsquo;s edition",
  url: "https://archive.org/details/houghtonmiffline0000unse_n2d5",
  cost: "Free to borrow",
  affiliate: false,
  what: "A grade 7 English course from the era when a textbook still taught: student book, workbook, resource book, and both teacher's editions.",
  why:
    "This is the single most useful thing on this page if you are teaching from a modern workbook and " +
    "cannot work out what you are supposed to say. The teacher's edition carries, on every page, the " +
    "explanation of the rule, the common student errors, and the wording to use. That is precisely the " +
    "layer that was removed when workbooks were unbundled from the courses they belonged to.",
  note:
    "⚠️ The five-volume scan is missing pages 3, 4, 15, 16, 19 and 20 &mdash; damage in the physical book, " +
    "not the loan. The Rueda edition below is the fallback. Borrowing is free but needs an account.",
  links: [
    ["Grade 7 &middot; the full five-volume set", "https://archive.org/details/houghtonmiffline0000unse_n2d5"],
    ["Grade 7 &middot; Rueda edition (the backup)", "https://archive.org/details/houghtonmiffline0000rued"],
    ["Grade 4", "https://archive.org/details/houghtonmiffline0000unse_d6e1"],
    ["1990 edition &middot; Haley-James, on Open Library", "https://openlibrary.org/books/OL24929331M/Houghton_Mifflin_English"],
  ],
},
{
  slug: "life-science-textbooks",
  cat: "books-and-readers",
  title: "Grade 7 Life Science textbooks",
  url: "https://archive.org/details/interactivescien0000unse_b2f2",
  cost: "Free to borrow",
  affiliate: false,
  what: "Middle school life science courses, several of them with the annotated teacher's edition included.",
  why:
    "Science is the subject where a workbook alone fails hardest, because the questions assume a chapter " +
    "you were never given. These carry the chapter: cells, ecosystems, heredity, and the scientific " +
    "method, in the order a course actually teaches them. Borrow one and you have a sequence to follow " +
    "instead of a pile of unrelated activities.",
  note:
    "Pick one and stay with it rather than mixing four. The order a course puts its chapters in is most " +
    "of what you are borrowing.",
  links: [
    ["Interactive Science &middot; teacher's edition and resource package", "https://archive.org/details/interactivescien0000unse_b2f2"],
    ["Macmillan / McGraw-Hill Science, Grade 7", "https://archive.org/details/macmillanmcgrawh0000unse_i1z1"],
    ["Holt Life Science", "https://archive.org/details/isbn_9780030556395"],
    ["Focus on California Life Science", "https://archive.org/details/focusoncaliforni0000unse_g2n5"],
    ["Tennessee Science, Grade 7", "https://archive.org/details/tennesseescience0000unse"],
  ],
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
  links: [
    ["Primer", "https://www.gutenberg.org/ebooks/14642"],
    ["First Reader", "https://www.gutenberg.org/ebooks/14640"],
    ["Fifth Reader", "https://www.gutenberg.org/ebooks/15040"],
    ["Sixth Reader", "https://www.gutenberg.org/ebooks/16751"],
    ["Every McGuffey title on Project Gutenberg", "https://www.gutenberg.org/ebooks/author/5671"],
  ],
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
  links: [
    ["Project Gutenberg text", "https://www.gutenberg.org/ebooks/66476"],
    ["Scanned original on Archive.org", "https://archive.org/details/palmermethodbus00palm"],
    ["1935 edition", "https://archive.org/details/PalmerMethod1935"],
  ],
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
  links: [
    ["HomeschoolGrades &middot; the main site", "https://homeschoolgrades.com/"],
    ["Sign in to the app", "https://app.homeschoolgrades.com/"],
  ],
},

/* ═══════════════════════ Placement testing ═══════════════════════════════ */
{
  slug: "khan-academy",
  cat: "placement-tests",
  title: "Khan Academy",
  url: "https://www.khanacademy.org/",
  cost: "Free",
  affiliate: false,
  what: "Free adaptive maths and reading practice that shows you where a student actually is.",
  why:
    "The easiest place to start, because there is nothing to print and nothing to mark. It adapts as it " +
    "goes, so a student who is two years behind in one strand and on level in another shows up as " +
    "exactly that instead of as a single misleading grade. Use the course recommendation rather than " +
    "assuming the year on the birth certificate.",
  note: "Works on a phone. Create the student account before you sit down together, not during.",
},
{
  slug: "freedomproject-placement",
  cat: "placement-tests",
  title: "FreedomProject Academy placement tests",
  url: "https://fpeusa.org/placement-tests-homeschool/",
  cost: "Free",
  affiliate: false,
  what: "Free written placement tests for grades 6 to 12, covering grammar, vocabulary, reading comprehension and writing.",
  why:
    "The best free option for a formal ELA result, and it tests the two things that decide whether a " +
    "student can re-enter school on level: comprehension and writing. Test those honestly. A flattering " +
    "result now is paid for later, at the point where it is too late to fix quietly.",
  note: "Written and marked against a key, so it takes a sitting rather than ten minutes.",
},
{
  slug: "thinkwell-placement",
  cat: "placement-tests",
  title: "Thinkwell placement tests",
  url: "https://www.thinkwellhomeschool.com/pages/placement-tests",
  cost: "Free",
  affiliate: false,
  what: "Maths placement, from arithmetic up through the high school sequence.",
  why:
    "Maths is the subject where placing wrong hurts most, because every topic sits on the one before it. " +
    "A student put a year too high spends that year quietly failing to follow, and the gap that caused " +
    "it never gets filled. This is the cheapest way to find the real floor.",
  note: "Maths only. Pair it with one of the ELA tests above.",
},
{
  slug: "aop-placement",
  cat: "placement-tests",
  title: "AOP assessment and placement",
  url: "https://aop.com/pages/assessment-and-placement-tests",
  cost: "Free",
  affiliate: false,
  what: "Reading and maths placement tests from Alpha Omega Publications.",
  why:
    "A useful second opinion. Placement tests disagree with each other more than anyone admits, and two " +
    "results that broadly agree are worth far more than one taken as gospel. Run this after Khan and see " +
    "whether the answers line up.",
  note: "Tied to their own curriculum sequence, so read the level as a range rather than a verdict.",
},
{
  slug: "bookshark-placement",
  cat: "placement-tests",
  title: "BookShark placement tests",
  url: "https://www.bookshark.com/homeschool-curriculum/placement-tests",
  cost: "Free",
  affiliate: false,
  what: "Placement across several subjects, with a strong reading component.",
  why:
    "Worth it for the reading placement in particular, which is built around real books rather than " +
    "isolated passages. That matters if the goal is a student who reads whole books, not one who is good " +
    "at answering questions about paragraphs.",
  note: "Also tied to a curriculum. Treat the recommendation as a starting point.",
},

];

module.exports = { RESOURCES };
