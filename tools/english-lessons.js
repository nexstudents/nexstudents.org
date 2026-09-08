/* ─────────────────────────────────────────────────────────────────────────
   ENGLISH LESSON DATA. One entry per lesson.

   An English lesson is NOT the history shape and NOT the maths shape.

   History teaches by story, then asks questions whose answers sit in the text.
   Math teaches by worked example, then makes you show your work.
   English teaches a RULE, and a rule is useless until you can apply it to a
   sentence you have never seen. So the shape here is:

       rule  ->  taught prose  ->  worked examples  ->  a TEST you can run

   ⭐ THE GROUND CONTROL BLOCK IS THE POINT OF THIS FILE.

   Paul, 2026-08-29, on the Spectrum workbooks: "they just dont have enough
   context to help me grasp what is in the books and it even make no sense to
   me. this is my main issue with new homeschooling materials they just dont
   give enough context to even accurately teach their student."

   He is right, and the reason is structural rather than lazy: a workbook like
   that is a SUPPLEMENT. It is the practice half of a two-part system whose
   teaching half is a separate textbook and teacher's edition. Buying the
   workbook alone gets you the exercises with the exposition removed.

   `ground` is that missing half, written for the PARENT, not the student:
     whatItIs        the concept in plain words, no jargon
     whyItMatters    where this shows up later, so it is not arbitrary
     commonMistake   what a student will actually get wrong, and why
     whenStuck       exact sentences to SAY, not "review the material"

   ⭐ EVERY LESSON MUST CARRY A TEST THE STUDENT CAN RUN HIMSELF.

   A definition is something you memorise and then cannot use. A test is
   something you perform on a sentence. "A verb is a word that shows action"
   fails the moment the verb is `is`. "Change the time of the sentence and see
   which word changes shape" never fails, and a student can run it alone at a
   desk with nobody to ask.

   🚨 THIS IS A PUBLIC SITE, SO THE WRITING IS FOR EVERYONE.
   Paul, 2026-08-29: "things have shifted away from that idea ... you keep
   adding pilot theme and Kolten's name to things going on our live site. this
   need to be more general."

   No student's name, no family in-jokes, no aviation framing, no games he
   happens to play. A parent in another house reading "Kolten built a redstone
   door" is reading somebody else's private notes. Examples use ordinary
   things: weather, doors, shelves, journeys, school.

   ─────────────────────────────────────────────────────────────────────────
   PRACTICE FORMAT — click the word.

   `practice[].answer` is the 0-based index of the correct word in the sentence
   AFTER splitting on spaces. Getting that index wrong ships a lesson that
   marks a right answer wrong, so build-english.js recomputes it from
   `practice[].verb` and FAILS THE BUILD on a mismatch.
   ───────────────────────────────────────────────────────────────────────── */

/* One lesson, one file, filed under its own grade / subject / unit.
   Add a lesson by dropping a file in the right folder and listing it here. */
const ENGLISH = [
  require('./content/grade-3/english/unit-2/verbs-action-and-being'),
];

module.exports = { ENGLISH };
