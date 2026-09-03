/* ─────────────────────────────────────────────────────────────────────────
   ENGLISH COURSE OUTLINES — the shelf structure, read off the real books.

   Same job as `leif-units.js` does for grade 7 history: the whole course
   exists here as DATA before any of it is built, so the shelf can show
   named slots for what is coming and the order never has to be guessed.

   🚨 THIS FILE IS TRANSCRIBED, NOT INVENTED.
   Every unit, chapter, title and page number below was read off the actual
   contents pages in the Internet Archive reader on 2026-09-03. Nothing here
   is a plausible-sounding grammar sequence. If an entry looks wrong, open
   the book at the page number and check it — do not "fix" it from memory.

   ⭐ ONE LESSON TEACHES ONE THING — Paul, 2026-09-03.
   Harcourt bundles three teaching pages plus practice into one chapter,
   because it assumes a teacher rationing them across a week. A lesson page
   has no teacher, so a chapter becomes SEVERAL lessons here: one per
   teaching page, then the chapter review. That is the split rule in
   BEHAVIOR.md, applied. The book's ORDER is untouched.

   ⚠️ `Extra Practice` is deliberately NOT a lesson. It is a worksheet, and
   worksheets live in `worksheets.js`. Ignoring it is the reason a chapter
   yields four entries and not five.

   ─────────────────────────────────────────────────────────────────────────
   SHAPE
     units[]      .n .name .grammar .writing .page
       chapters[] .n .name .page .kind
         lessons[] .title .page .slug? .review? .note?

   `kind` is "grammar" | "craft" | "workshop". Only grammar chapters split
   into several lessons; the craft and workshop chapters are one apiece.

   `slug` is set ONLY on a lesson that is actually built and live. Everything
   else renders as a named slot, exactly like `leif-units.js`. 🚨 A title here
   is NOT a lesson — see feedback_never_assign_an_unbuilt_lesson.
   ───────────────────────────────────────────────────────────────────────── */

const GRADE3 = {
  grade: 3,
  book: {
    title: "Harcourt Language",
    edition: "Orange",
    authors: "Farr, Strickland, Brown, Kutiper, Yopp",
    publisher: "Harcourt",
    year: 2002,
    isbn: "0153178337",
    archive: "harcourtlanguage00roge_0",
    pages: 599,
    /* 🚨 BORROW-ONLY (internetarchivebooks · inlibrary · printdisabled).
       ⚠️ The archive.org TITLE says only "Harcourt language" and its topic
       tags say "Children: Grades 4-6", which is a BISAC marketing category
       and is WRONG for this book. The item page states "Grade 3" outright
       in its notes, and the ISBN resolves at OpenLibrary to "Harcourt
       Language — Orange, Grade 3". Trust those two, not the topic tags. */
    access: "borrow-only",
  },

  units: [
    /* ═══════════════ UNIT 1 ═══════════════ */
    { n: 1, name: "Sentences", grammar: "Sentences",
      writing: "Expressive Writing", theme: "Arts/Creativity", page: 22,
      chapters: [
        { n: 1, name: "Sentences", page: 24, kind: "grammar", lessons: [
          { title: "Sentences", page: 24 },
          { title: "Four Types of Sentences", page: 26 },
          { title: "Punctuating Sentences", page: 28 },
          { title: "Chapter 1 Review", page: 32, review: true },
        ]},
        { n: 2, name: "Subjects and Nouns", page: 34, kind: "grammar", lessons: [
          { title: "Complete and Simple Subjects", page: 34 },
          { title: "Nouns in Subjects", page: 36 },
          { title: "Combining Sentences: Compound Subjects", page: 38 },
          { title: "Chapter 2 Review", page: 42, review: true },
        ]},
        { n: 3, name: "Writer's Craft: Personal Voice", page: 44, kind: "craft", lessons: [
          { title: "Writer's Craft: Personal Voice", page: 44 },
        ]},
        { n: 4, name: "Predicates and Verbs", page: 52, kind: "grammar", lessons: [
          { title: "Complete and Simple Predicates", page: 52 },
          { title: "Verbs in Predicates", page: 54 },
          { title: "Combining Sentences: Compound Predicates", page: 56 },
          { title: "Chapter 4 Review", page: 60, review: true },
        ]},
        { n: 5, name: "Simple and Compound Sentences", page: 62, kind: "grammar", lessons: [
          { title: "Simple and Compound Sentences", page: 62 },
          { title: "Conjunctions in Compound Sentences", page: 64 },
          { title: "Combining Sentences: Semicolons and Conjunctions", page: 66 },
          { title: "Chapter 5 Review", page: 70, review: true },
        ]},
        { n: 6, name: "Writing Workshop: Personal Narrative", page: 72, kind: "workshop", lessons: [
          { title: "Writing Workshop: Personal Narrative", page: 72 },
        ]},
      ],
      unitReview: { title: "Unit 1 Grammar Review", page: 86 },
    },

    /* ═══════════════ UNIT 2 — where the verbs lesson actually lives ═══════ */
    { n: 2, name: "More About Nouns and Verbs", grammar: "More About Nouns and Verbs",
      writing: "Informative Writing: Explanation", theme: "Social Studies", page: 92,
      chapters: [
        { n: 7, name: "More About Nouns", page: 94, kind: "grammar", lessons: [
          { title: "Common and Proper Nouns", page: 94 },
          { title: "Singular and Plural Nouns", page: 96 },
          { title: "Abbreviations", page: 98 },
          { title: "Chapter 7 Review", page: 102, review: true },
        ]},
        { n: 8, name: "Possessive Nouns", page: 104, kind: "grammar", lessons: [
          { title: "Singular Possessive Nouns", page: 104 },
          { title: "Plural Possessive Nouns", page: 106 },
          { title: "Apostrophes in Possessive Nouns", page: 108 },
          { title: "Chapter 8 Review", page: 112, review: true },
        ]},
        { n: 9, name: "Writer's Craft: Paragraphing", page: 114, kind: "craft", lessons: [
          { title: "Writer's Craft: Paragraphing", page: 114 },
        ]},

        /* 🚨 CHAPTER 10 IS THE ONE WE HAVE ALREADY BUILT, AND IT IS UNIT 2,
           NOT UNIT 1 LESSON 1. The live lesson is eyebrowed "Parts of Speech
           · Unit 1 · Lesson 1", which came from nothing but a guess made
           before there was a book. Paul, 2026-09-03: "we need it to be near
           the end if we're going to do that." The book puts it at page 122
           of 599 — a fifth of the way in, after sentences, subjects,
           predicates and nouns. That is the correct place and the eyebrow
           should say so.

           ⚠️ TERMINOLOGY SEAM. Harcourt says LINKING verbs. Our lesson says
           BEING verbs. They are not synonyms: every form of `be` is a
           linking verb, but `seem`, `look` and `feel` are linking verbs too
           and are NOT being verbs. Our lesson deliberately covers only the
           eight forms of `be` and threw out "Those instruments look
           expensive" for exactly that reason. So the built lesson maps to
           Harcourt's FIRST TWO teaching pages plus part of the third, and
           "Linking Verbs" proper is still owed as its own lesson. */
        { n: 10, name: "Action Verbs and Linking Verbs", page: 122, kind: "grammar", lessons: [
          { title: "Action Verbs", page: 122, slug: "verbs-action-and-being",
            note: "BUILT. Covers action verbs AND the eight forms of be. Harcourt splits " +
                  "those across pages 122 and 126; our lesson teaches them together because " +
                  "the two kinds only make sense against each other." },
          { title: "Linking Verbs", page: 124,
            note: "NOT YET BUILT, and NOT covered by the lesson above. This is linking verbs " +
                  "beyond be — seem, look, feel, become. The built lesson excludes them on purpose." },
          { title: "Using Forms of the Verb Be", page: 126,
            note: "Largely absorbed by the built lesson. Check the page before building; it may " +
                  "only need the agreement half, which is a later skill anyway." },
          { title: "Chapter 10 Review", page: 130, review: true },
        ]},

        { n: 11, name: "Main Verbs and Helping Verbs", page: 132, kind: "grammar", lessons: [
          { title: "Verb Phrases", page: 132 },
          { title: "Main Verbs and Helping Verbs", page: 134,
            note: "The built verbs lesson's teacher notes promise this one — it tells the " +
                  "parent that in 'The dog is running', is helps running and helping verbs " +
                  "come later. This is later. Do not leave it unbuilt indefinitely." },
          { title: "Contractions with Not", page: 136 },
          { title: "Chapter 11 Review", page: 140, review: true },
        ]},
        { n: 12, name: "Writing Workshop: How-to Essay", page: 142, kind: "workshop", lessons: [
          { title: "Writing Workshop: How-to Essay", page: 142 },
        ]},
      ],
      unitReview: { title: "Unit 2 Grammar Review", page: 154 },
      cumulative: { title: "Cumulative Review: Units 1-2", page: 160 },
    },

    /* ═══════════════ UNIT 3 ═══════════════ */
    { n: 3, name: "More About Verbs", grammar: "More About Verbs",
      writing: "Persuasive Writing", theme: "Science", page: 164,
      chapters: [
        { n: 13, name: "The Simple Tenses", page: 166, kind: "grammar", lessons: [
          { title: "Past, Present, and Future Tense", page: 166 },
          { title: "Present Tense", page: 168 },
          { title: "Subject-Verb Agreement", page: 170 },
          { title: "Chapter 13 Review", page: 174, review: true },
        ]},
        { n: 14, name: "More About Verb Tenses", page: 176, kind: "grammar", lessons: [
          { title: "Past Tense and Future Tense", page: 176 },
          { title: "Principal Parts of Verbs", page: 178 },
          { title: "Using Do and See Correctly", page: 180 },
          { title: "Chapter 14 Review", page: 184, review: true },
        ]},
        { n: 15, name: "Writer's Craft: Elaboration", page: 186, kind: "craft", lessons: [
          { title: "Writer's Craft: Elaboration", page: 186 },
        ]},
        { n: 16, name: "Irregular Verbs", page: 194, kind: "grammar", lessons: [
          { title: "Regular and Irregular Verbs", page: 194 },
          { title: "More Irregular Verbs", page: 196 },
          { title: "Commonly Misused Verbs", page: 198 },
          { title: "Chapter 16 Review", page: 202, review: true },
        ]},
        { n: 17, name: "The Perfect Tenses", page: 204, kind: "grammar", lessons: [
          { title: "Present Perfect and Past Perfect Tenses", page: 204 },
          { title: "Future Perfect Tense", page: 206 },
          { title: "Sequence of Tenses", page: 208 },
          { title: "Chapter 17 Review", page: 212, review: true },
        ]},
        { n: 18, name: "Writing Workshop: Persuasive Essay", page: 214, kind: "workshop", lessons: [
          { title: "Writing Workshop: Persuasive Essay", page: 214 },
        ]},
      ],
      unitReview: { title: "Unit 3 Grammar Review", page: 226 },
    },

    /* ═══════════════ UNIT 4 ═══════════════ */
    { n: 4, name: "Pronouns, Adjectives, and Adverbs", grammar: "Pronouns, Adjectives, and Adverbs",
      writing: "Informative Writing: Classification", theme: "Health", page: 232,
      chapters: [
        { n: 19, name: "Pronouns", page: 234, kind: "grammar", lessons: [
          { title: "Subject Pronouns", page: 234 },
          { title: "Object Pronouns", page: 236 },
          { title: "Pronoun-Antecedent Agreement", page: 238 },
          { title: "Chapter 19 Review", page: 242, review: true },
        ]},
        { n: 20, name: "More About Pronouns", page: 244, kind: "grammar", lessons: [
          { title: "Possessive Pronouns", page: 244 },
          { title: "Reflexive Pronouns", page: 246 },
          { title: "Contractions with Pronouns", page: 248 },
          { title: "Chapter 20 Review", page: 252, review: true },
        ]},
        { n: 21, name: "Writer's Craft: Effective Sentences", page: 254, kind: "craft", lessons: [
          { title: "Writer's Craft: Effective Sentences", page: 254 },
        ]},
        { n: 22, name: "Adjectives and Adverbs", page: 262, kind: "grammar", lessons: [
          { title: "Adjectives", page: 262 },
          { title: "Adverbs", page: 264 },
          { title: "Adjective or Adverb?", page: 266 },
          { title: "Chapter 22 Review", page: 270, review: true },
        ]},
        { n: 23, name: "More About Adjectives and Adverbs", page: 272, kind: "grammar", lessons: [
          { title: "Other Kinds of Adverbs", page: 272 },
          { title: "Comparing with Adjectives and Adverbs", page: 274 },
          { title: "Using Good and Well", page: 276 },
          { title: "Chapter 23 Review", page: 280, review: true },
        ]},
        { n: 24, name: "Writing Workshop: Comparison/Contrast Essay", page: 282, kind: "workshop", lessons: [
          { title: "Writing Workshop: Comparison/Contrast Essay", page: 282 },
        ]},
      ],
      unitReview: { title: "Unit 4 Grammar Review", page: 296 },
      cumulative: { title: "Cumulative Review: Units 1-4", page: 302 },
    },

    /* ═══════════════ UNIT 5 ═══════════════ */
    { n: 5, name: "Phrases and Clauses", grammar: "Phrases and Clauses",
      writing: "Research Report", theme: "Social Studies", page: 308,
      chapters: [
        { n: 25, name: "Prepositions", page: 310, kind: "grammar", lessons: [
          { title: "Prepositions", page: 310 },
          { title: "Object of the Preposition", page: 312 },
          { title: "Expanding Sentences with Prepositional Phrases", page: 314 },
          { title: "Chapter 25 Review", page: 318, review: true },
        ]},
        { n: 26, name: "Phrases and Clauses", page: 320, kind: "grammar", lessons: [
          { title: "Phrase or Clause?", page: 320 },
          { title: "Independent and Dependent Clauses", page: 322 },
          { title: "Combining Independent and Dependent Clauses", page: 324 },
          { title: "Chapter 26 Review", page: 328, review: true },
        ]},
        { n: 27, name: "Writer's Craft: Organizing Information", page: 330, kind: "craft", lessons: [
          { title: "Writer's Craft: Organizing Information", page: 330 },
        ]},
        { n: 28, name: "Complex Sentences", page: 338, kind: "grammar", lessons: [
          { title: "Compound and Complex Sentences", page: 338 },
          { title: "More About Complex Sentences", page: 340 },
          { title: "Sentence Variety", page: 342 },
          { title: "Chapter 28 Review", page: 346, review: true },
        ]},
        { n: 29, name: "More About Sentences", page: 348, kind: "grammar", lessons: [
          { title: "Sentence Fragments", page: 348 },
          { title: "Run-on Sentences and Comma Splices", page: 350 },
          { title: "Punctuating Compound and Complex Sentences", page: 352 },
          { title: "Chapter 29 Review", page: 356, review: true },
        ]},
        { n: 30, name: "Writing Workshop: Research Report", page: 358, kind: "workshop", lessons: [
          { title: "Writing Workshop: Research Report", page: 358 },
        ]},
      ],
      unitReview: { title: "Unit 5 Grammar Review", page: 372 },
    },

    /* ═══════════════ UNIT 6 ═══════════════ */
    { n: 6, name: "Usage and Mechanics", grammar: "Usage and Mechanics",
      writing: "Expressive Writing", theme: "Arts/Creativity", page: 378,
      chapters: [
        { n: 31, name: "Commas", page: 380, kind: "grammar", lessons: [
          { title: "Commas", page: 380 },
          { title: "More About Commas", page: 382 },
          { title: "Using Commas with Appositives", page: 384 },
          { title: "Chapter 31 Review", page: 388, review: true },
        ]},
        { n: 32, name: "Quotation Marks and Colons", page: 390, kind: "grammar", lessons: [
          { title: "Using Quotation Marks", page: 390 },
          { title: "More About Quotation Marks", page: 392 },
          { title: "Colons", page: 394 },
          { title: "Chapter 32 Review", page: 398, review: true },
        ]},
        { n: 33, name: "Writer's Craft: Word Choice", page: 400, kind: "craft", lessons: [
          { title: "Writer's Craft: Word Choice", page: 400 },
        ]},
        { n: 34, name: "More About Punctuation", page: 408, kind: "grammar", lessons: [
          { title: "Punctuating Titles", page: 408 },
          { title: "Capitalizing Words in Titles", page: 410 },
          { title: "Hyphens", page: 412 },
          { title: "Chapter 34 Review", page: 416, review: true },
        ]},
        { n: 35, name: "Usage Problems", page: 418, kind: "grammar", lessons: [
          { title: "Negatives and Double Negatives", page: 418 },
          { title: "Using I and Me", page: 420 },
          { title: "Commonly Confused Words", page: 422 },
          { title: "Chapter 35 Review", page: 426, review: true },
        ]},
        { n: 36, name: "Writing Workshop: Short Story", page: 428, kind: "workshop", lessons: [
          { title: "Writing Workshop: Short Story", page: 428 },
        ]},
      ],
      unitReview: { title: "Unit 6 Grammar Review", page: 440 },
      cumulative: { title: "Cumulative Review: Units 1-6", page: 446 },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────
   GRADE 4 — Houghton Mifflin English, Texas Edition, 2001.
   `houghtonmiffline0000unse_d6e1` · ISBN 0618054901 · 656 pages · BORROW-ONLY.

   ⛔ NOT TRANSCRIBED YET. The contents pages have not been opened, and
   inventing them would defeat the point of this file. Paul, 2026-09-03,
   chose both books; grade 3 was read first because that is where the one
   built lesson sits. Open the book, read the contents, fill this in.
   ───────────────────────────────────────────────────────────────────────── */
const GRADE4 = {
  grade: 4,
  book: {
    title: "Houghton Mifflin English",
    edition: "Texas Edition",
    publisher: "Houghton Mifflin",
    year: 2001,
    isbn: "0618054901",
    archive: "houghtonmiffline0000unse_d6e1",
    pages: 656,
    access: "borrow-only",
  },
  units: [],   /* ⛔ awaiting transcription — do NOT populate from memory */
};

/* ── counts, so a miscount is caught rather than believed ───────────────── */
function tally(course) {
  let chapters = 0, lessons = 0, built = 0, reviews = 0;
  for (const u of course.units) {
    for (const c of u.chapters) {
      chapters++;
      for (const l of c.lessons) {
        lessons++;
        if (l.slug) built++;
        if (l.review) reviews++;
      }
    }
  }
  return { units: course.units.length, chapters, lessons, reviews, built };
}

module.exports = { GRADE3, GRADE4, tally };

if (require.main === module) {
  for (const [name, c] of [["GRADE 3", GRADE3], ["GRADE 4", GRADE4]]) {
    console.log(name, JSON.stringify(tally(c)));
  }
}
