/* ────────────────────────────────────────────────────────────────────────
   k8-attach.js — which of OUR lessons fill which Missouri standard.

   Paul, 2026-09-25: "move these to the perspective grades ... this is for
   both made and currently unmade lessons."

   A standard with lessons attached shows THOSE lessons in its place, in the
   order listed, on both the year plan and the shelf. A standard with nothing
   attached shows one slot in the standard's own words.

     slug   set  -> a built lesson (it links once its page exists)
     slug   none -> a lesson we mean to write, carried over from a course
                    outline so the name is not lost

   🚨 THE HOUGHTON MIFFLIN "ENGLISH 7" GRAMMAR COURSE LIVES HERE NOW, all 88
   lessons, filed by where Missouri teaches each skill. Missouri puts grammar
   in the K-5 Language strand only; grades 6-8 say conventions "should expand
   upon what was taught during grades K-5". So a skill with a K-5 row goes to
   that row, and a skill Missouri never lists (voice, clauses, pronoun case,
   semicolons) goes to the 6-8 "Conventions of standard English" row, at the
   grade the Common Core it was drawn from teaches it.

   ⚠️ A JUDGEMENT, made by hand on 2026-09-25, not a lookup. Change a line
   here, never the standards file.
   ────────────────────────────────────────────────────────────────────── */
"use strict";

const E = (title, slug) => ({ title, slug: slug ? "english/" + slug : null });

const ATTACH = {
  /* ── Grade 1 ── */
  "1.L.1.B.b": [E("Correct Sentences")],

  /* ── Grade 2: nouns, verbs, adjectives, apostrophes ── */
  "2.L.1.A.a": [E("Kinds of Nouns", "kinds-of-nouns"), E("Writing with Nouns")],
  "2.L.1.A.b": [E("Collective and Compound Nouns", "collective-and-compound-nouns")],
  "2.L.1.A.e": [E("Kinds of Verbs")],
  "2.L.1.A.f": [E("Verb Phrases")],
  "2.L.1.A.g": [E("Adjectives")],
  "2.L.1.B.c": [E("Apostrophes")],
  "2.L.1.B.e": [E("Abbreviations")],
  "2.L.1.B.g": [E("Singular and Plural Nouns"), E("Review: Nouns")],

  /* ── Grade 3: the sentence, tenses, agreement, pronouns ── */
  "3.L.1.A.a": [E("Action and Being Verbs", "verbs-action-and-being"),
                E("Simple Verb Tenses"), E("Irregular Verbs")],
  "3.L.1.A.b": [E("Be, Have, and Do"), E("More Irregular Verbs")],
  "3.L.1.A.c": [E("Complete Subjects and Predicates", "complete-subjects-and-predicates"),
                E("Simple Subjects and Simple Predicates", "simple-subjects-and-simple-predicates"),
                E("Finding the Subject", "finding-the-subject")],
  "3.L.1.A.d": [E("Comparing with Adjectives"), E("Comparing with Adverbs"),
                E("Demonstrative Pronouns")],
  "3.L.1.A.e": [E("Subject-Verb Agreement"), E("Review: Verbs")],
  "3.L.1.A.f": [E("Kinds of Sentences", "kinds-of-sentences")],
  "3.L.1.A.g": [E("Pronouns and Antecedents"), E("Personal Pronouns"), E("Review: Pronouns")],
  "3.L.1.B.b": [E("Possessive Nouns")],
  "3.L.1.B.c": [E("Direct Quotations")],
  "3.L.1.B.e": [E("Dates, Addresses, and Letters")],

  /* ── Grade 4: building sentences, conjunctions, prepositions ── */
  "4.L.1.A.a": [E("Writing with Verbs")],
  "4.L.1.A.b": [E("Writing with Adjectives")],
  "4.L.1.A.c": [E("Progressive Forms")],
  "4.L.1.A.d": [E("Adverbs"), E("Writing with Adverbs"), E("Review: Modifiers")],
  "4.L.1.A.e": [E("Subject and Object Pronouns"), E("Inverted and Interrupted Order")],
  "4.L.1.A.f": [E("Prepositional Phrases"), E("Writing with Prepositional Phrases"),
                E("Choosing Correct Prepositions"), E("Review: Prepositional Phrases")],
  "4.L.1.A.g": [E("Conjunctions", "conjunctions")],
  "4.L.1.A.h": [E("Writing Good Sentences", "writing-good-sentences"),
                E("Forming Compound Subjects and Predicates", "forming-compound-subjects-and-predicates")],
  "4.L.1.A.i": [E("Fragments and Run-ons", "fragments-and-run-ons"),
                E("Unit 1 Review: The Sentence", "unit-1-review")],
  "4.L.1.B.c": [E("Writing Sentences with Commas")],
  "4.L.1.B.d": [E("Proper Nouns and Proper Adjectives")],
  "4.L.1.B.e": [E("Review: Capitalization and Punctuation")],
  "4.L.1.B.i": [E("Homophones")],
  "4.R.1.B.d": [E("Idioms")],

  /* ── Grade 5: parts of speech, perfect tenses, complex sentences ── */
  "5.L.1.A.a": [E("Exact Nouns"), E("Adjective or Adverb?"), E("Interjections")],
  "5.L.1.A.b": [E("Interrogative Pronouns")],
  "5.L.1.A.c": [E("Writing Clearly with Pronouns")],
  "5.L.1.A.d": [E("Perfect Tenses"), E("Rise/Raise, Lie/Lay, Sit/Set"),
                E("Bring/Take, Let/Leave, Lend/Loan")],
  "5.L.1.A.e": [E("Forming Compound and Complex Sentences", "forming-compound-and-complex-sentences"),
                E("Compound and Complex Sentences")],
  "5.L.1.B.c": [E("Uses for Commas")],
  "5.L.1.B.d": [E("More Uses for Commas")],
  "5.L.1.B.g": [E("Titles")],
  "5.L.1.B.i": [E("Writing with Possessive Nouns")],

  /* ── Grades 6-8: what Missouri leaves to "conventions" ── */
  "6.W.3.A.b": [E("Choosing Different Verbs"), E("Choosing Different Adjectives and Adverbs")],
  "6.W.3.A.c": [E("Transitive and Intransitive Verbs"), E("Direct and Indirect Objects"),
                E("Predicate Nouns and Predicate Adjectives"), E("Negatives"),
                E("Pronouns in Compound Subjects and Objects"), E("Possessive Pronouns"),
                E("Indefinite Pronouns"), E("Reflexive and Intensive Pronouns"),
                E("Pronouns After Prepositions"),
                E("Semicolons and Colons"), E("Writing with Colons and Semicolons")],
  "7.W.3.A.c": [E("Clauses"), E("Adjective Phrases"), E("Adverb Phrases"),
                E("Placing Phrases Correctly"),
                E("Forming Complex and Compound-Complex Sentences"),
                E("Review: Complex Sentences")],
  "8.W.3.A.c": [E("Active and Passive Voices"), E("Writing with Verbs (Voice)"),
                E("Hyphens, Dashes, and Parentheses")],

  /* ── Math already built on other grades ── */
  "4.NBT.A.7": [{ title: "Long Division", slug: "maths/long-division" },
                { title: "Long Division with Remainders", slug: "maths/long-division-remainders" }],
  /* ⚠️ Missouri ADDS and SUBTRACTS integers in grade 7 (7.NS.A.1a); grade 6 only
     uses them to represent quantities. These two stay on grade 6 until Paul
     decides - maths-units.js BUILT_NOTES records why they were put there. */
  "6.NS.C.5":  [{ title: "Adding Integers", slug: "maths/adding-integers" },
                { title: "Subtracting Integers", slug: "maths/subtracting-integers" }],
};

/* ── THE GRADE 3 (HARCOURT) AND GRADE 4 (HOUGHTON MIFFLIN) OUTLINES ─────────
   Paul, 2026-09-25: "map the names". The same rule as the grade 7 course: each
   skill goes where Missouri teaches it.
   ⚠️ LEFT OUT ON PURPOSE, so nobody "restores" them:
     · every "Chapter N Review" / "Unit N Review" - a book's own checkpoint. The
       Missouri plan already ends each of ITS units in a review.
     · a title already filed above (identical, case-insensitive) - `add` skips it.
     · near-duplicates of a lesson already filed, named here: Using Exact Nouns /
       Verbs / Adjectives (= Exact Nouns, Choosing Different ...), Present, Past,
       and Future (= Past, Present, and Future Tense), The Special Verb Be (= Using
       Forms of the Verb Be), Quotation Marks and Quotations (= Using Quotation
       Marks, Direct Quotations), Writing with Pronouns (= Writing Clearly with
       Pronouns), What Is a Preposition? and Writing with Prepositions (=
       Prepositions, Writing with Prepositional Phrases). */
const add = (code, ...titles) => {
  const have = new Set(Object.values(ATTACH).flat().map((a) => a.title.toLowerCase()));
  for (const t of titles) {
    if (have.has(t.toLowerCase())) continue;
    (ATTACH[code] = ATTACH[code] || []).push(E(t));
    have.add(t.toLowerCase());
  }
};

/* Grade 1 */
add("1.L.1.A.a", "What Is a Noun?", "Past, Present, and Future Tense");
add("1.L.1.A.b", "What Is an Adjective?", "What Is an Adverb?");
add("1.L.1.A.e", "Prepositions");
add("1.L.1.A.f", "What Is a Pronoun?");
add("1.L.1.A.g", "Sentences");
add("1.L.1.B.b", "Punctuating Sentences");
add("1.L.1.B.c", "Names of People and Pets");
add("1.L.1.B.d", "Commas", "Commas in a Series");
/* Grade 2 */
add("2.L.1.A.a", "Common and Proper Nouns");
add("2.L.1.A.d", "Reflexive Pronouns");
add("2.L.1.A.e", "Action Verbs");
add("2.L.1.A.f", "Main Verbs and Helping Verbs");
add("2.L.1.A.h", "Four Types of Sentences");
add("2.L.1.B.c", "Contractions with Not", "Contractions with Pronouns");
add("2.L.1.B.h", "More Plural Nouns");
/* Grade 3 */
add("3.L.1.A.a", "Linking Verbs", "Present Tense", "Past Tense and Future Tense",
    "Regular and Irregular Verbs");
add("3.L.1.A.b", "Using Do and See Correctly", "The Past with Helping Verbs");
add("3.L.1.A.c", "Complete and Simple Subjects", "Nouns in Subjects",
    "Complete and Simple Predicates", "Verbs in Predicates");
add("3.L.1.A.d", "Comparing with Adjectives and Adverbs", "Making Comparisons",
    "Comparing with More and Most", "Comparing with Good and Bad");
add("3.L.1.A.f", "Simple and Compound Sentences");
add("3.L.1.A.g", "Subject Pronouns", "Pronoun-Antecedent Agreement");
add("3.L.1.B.b", "Apostrophes in Possessive Nouns");
add("3.L.1.B.c", "Using Quotation Marks");
add("3.L.1.B.f", "Names of Places and Things");
add("3.L.1.B.g", "Capitalizing Words in Titles");
add("3.L.1.B.i", "Spelling the Past Tense");
add("3.L.1.B.j", "Nouns Ending with y");
add("3.W.1.B.c", "Writer's Craft: Organizing Information");
add("3.W.2.B.a", "Writing Workshop: How-to Essay");
add("3.W.2.C.a", "Writing Workshop: Personal Narrative");
add("3.W.2.C.e", "Writer's Craft: Personal Voice");
add("3.W.3.A.i", "Writing Workshop: Research Report");
/* Grade 4 */
add("4.L.1.A.a", "Using Forms of the Verb Be");
add("4.L.1.A.d", "Other Kinds of Adverbs", "Changing Meaning with Adverbs");
add("4.L.1.A.e", "Object Pronouns", "Using I and Me");
add("4.L.1.A.f", "Object of the Preposition", "Expanding Sentences with Prepositional Phrases");
add("4.L.1.A.g", "Conjunctions in Compound Sentences");
add("4.L.1.A.h", "Combining Sentences: Compound Subjects", "Combining Sentences: Compound Predicates",
    "Combining Sentences to Make a Series", "Writer's Craft: Effective Sentences");
add("4.L.1.A.i", "Sentence Fragments", "Run-on Sentences and Comma Splices");
add("4.L.1.B.b", "More About Quotation Marks");
add("4.L.1.B.f", "Spelling the Present Tense");
add("4.L.1.B.i", "Commonly Confused Words");
add("4.W.1.B.b", "Writer's Craft: Paragraphing");
add("4.W.2.A.b", "Writing Workshop: Persuasive Essay");
add("4.W.2.B.b", "Writer's Craft: Elaboration");
add("4.W.2.B.f", "Writing Workshop: Comparison/Contrast Essay");
add("4.W.2.C.c", "Writing Workshop: Short Story");
add("4.W.2.C.e", "Writer's Craft: Word Choice");
/* Grade 5 */
add("5.L.1.A.a", "Using Good and Well");
add("5.L.1.A.d", "Principal Parts of Verbs", "Commonly Misused Verbs",
    "Present Perfect and Past Perfect Tenses", "Future Perfect Tense", "Sequence of Tenses");
add("5.L.1.A.e", "Independent and Dependent Clauses", "Combining Independent and Dependent Clauses",
    "More About Complex Sentences", "Sentence Variety");
add("5.L.1.B.c", "Punctuating Compound and Complex Sentences");
add("5.L.1.B.d", "More About Commas");
add("5.L.1.B.e", "Punctuating Titles");
add("5.L.1.B.h", "Singular Possessive Nouns");
add("5.L.1.B.i", "Plural Possessive Nouns");
/* Grades 6-8 */
add("6.W.3.A.c", "Combining Sentences: Semicolons and Conjunctions", "Using Commas with Appositives",
    "Colons", "Negatives and Double Negatives");
add("7.W.3.A.c", "Phrase or Clause?");
add("8.W.3.A.c", "Hyphens");

module.exports = { ATTACH };
