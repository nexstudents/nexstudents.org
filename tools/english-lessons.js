/* ─────────────────────────────────────────────────────────────────────────
   ENGLISH LESSON DATA. One entry per lesson.

   An English lesson is NOT the history shape and NOT the maths shape.

   History teaches by story, then asks questions whose answers sit in the text.
   Maths teaches by worked example, then makes you show your work.
   English teaches a RULE, and a rule is useless until you can apply it to a
   sentence you have never seen. So the shape here is:

       rule  ->  taught prose  ->  worked examples  ->  a TEST you can run

   ⭐ THE GROUND CONTROL BLOCK IS THE POINT OF THIS FILE.

   Paul, 2026-08-29, on the Spectrum workbooks he bought: "they just dont have
   enough context to help me grasp what is in the books and it even make no
   sense to me. this is my main issue with new homeschooling materials they
   just dont give enough context to even accurately teach their student."

   He is right, and the reason is structural rather than lazy: Spectrum is a
   SUPPLEMENT, not a curriculum. It is the practice half of a two-part system
   whose teaching half is a separate textbook and teacher's edition. Buying the
   workbook alone gets you the exercises with the exposition removed.

   `ground` is that missing half, written for the PARENT, not the student:
     whatItIs        the concept in plain words, no jargon
     whyItMatters    where this shows up later, so it is not arbitrary
     commonMistake   what he will actually get wrong, and why he gets it wrong
     whenStuck       exact sentences to SAY, not "review the material"

   That block is the thing a 1990s teacher's edition had on every page and the
   modern workbook dropped. It is also the reason someone would pay us.

   ⭐ EVERY LESSON MUST CARRY A TEST THE STUDENT CAN RUN HIMSELF.

   A definition is something you memorise and then cannot use. A test is
   something you perform on a sentence. "A verb is a word that shows action"
   fails the moment the verb is `is`. "Change the time of the sentence and see
   which word changes shape" never fails, and he can run it alone at a desk
   with nobody to ask. Where a lesson has such a test, `rule.test` carries it
   and the taught prose builds to it rather than mentioning it in passing.

   ─────────────────────────────────────────────────────────────────────────
   PRACTICE FORMAT — click the word.

   `practice[].answer` is the 0-based index of the correct word in the sentence
   AFTER splitting on spaces. Getting that index wrong ships a lesson that
   marks a right answer wrong, so build-english.js recomputes it from
   `practice[].verb` and FAILS THE BUILD on a mismatch. Same idea as the
   states game refusing to build when a capital lands outside its own state:
   the guard is the only reason the data can be trusted.
   ───────────────────────────────────────────────────────────────────────── */

const ENGLISH = [

/* ═══════════════ Parts of Speech · Unit 1 · Lesson 1 — Verbs ══════════════ */
{
  id: "english/verbs-action-and-being",
  slug: "verbs-action-and-being",
  title: "Verbs: Action and Being",
  unit: "Parts of Speech &middot; Unit 1 &middot; Lesson 1",
  eyebrow: ["Radio Comms", "Unit 1 &middot; Lesson 1", "Parts of Speech"],
  dek: "Every sentence has an engine. Find the engine and the rest of the sentence tells you what it is.",
  shelf: { grade: 7, subject: "English",
    blurb: "Every sentence has an engine. Find it with a test that works even when nothing happens.",
    contains: [
      "A Ground Control panel for the teacher: what to say when he gets stuck",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "A test the student can run himself, not a definition to memorise",
      "Five worked examples, then ten sentences to try",
    ] },

  ground: {
    whatItIs:
      "A verb is the word that tells you what the subject does, or what the subject is. " +
      "Nothing else in a sentence can do that job, and no sentence works without one. " +
      "If a group of words has no verb, it is not a sentence yet.",

    whyItMatters:
      "Verbs are the hinge everything later swings on. Tense is a verb changing to show time. " +
      "Subject-verb agreement is a verb changing to match who is doing it. Sentence types, " +
      "clauses, and eventually essay writing all assume the student can find the verb without " +
      "thinking about it. A student who is shaky here is shaky in every grammar lesson after it, " +
      "and usually nobody notices, because the later lessons look like they are about something else.",

    commonMistake:
      "He will hunt for a word that sounds like doing something. That works until the verb is " +
      "'is', 'was' or 'are', and then he freezes or picks a noun instead. The second half of the " +
      "same mistake is grabbing a word that NAMES an action rather than doing it: in 'The run was " +
      "long', 'run' is a thing you had, not something anyone is doing, and the real verb is 'was'. " +
      "Both errors come from teaching the definition 'a verb is an action word', which is not true " +
      "and is why so many students stall on this exact page.",

    whenStuck: [
      "Say: \"Read it again, but start with Yesterday. Which word had to change?\" That word is the verb.",
      "If he picks a noun, say: \"Is anybody doing that right now, or is it just a thing?\" A run sitting on the page is a thing. Running is not.",
      "If the verb is 'is' or 'was' and he cannot see it, ask: \"What is this sentence saying somebody IS?\" The word joining the two halves is the verb.",
      "If he gets it right, do not stop at 'correct'. Ask him HOW he knew. If the answer is 'it looked like one', he got lucky and the test has not stuck yet."
    ]
  },

  rule: {
    short: "A verb tells what the subject does, or what the subject is.",
    long:
      "Verbs come in two kinds. An <b>action verb</b> says something happens: <i>ran, built, " +
      "decided, forgot</i>. A <b>being verb</b> says something simply is: <i>am, is, are, was, " +
      "were, be, been, being</i>. Being verbs do not act. They connect the subject to what it is, " +
      "the way an equals sign connects two sides of a sum.",
    test:
      "THE TIME TEST. Put <i>Yesterday</i> or <i>Tomorrow</i> in front of the sentence and read it " +
      "again. The one word that has to change shape is the verb. Nothing else in a sentence changes " +
      "when the time changes."
  },

  parts: [
    { title: "Every Sentence Has an Engine", s: [
      "Take any sentence apart and one word is doing the work of holding it together.",
      "\"The pilot landed the plane.\" Cross out landed and there is no sentence left, only a pilot and a plane sitting next to each other.",
      "That working word is the verb, and every sentence in English has one.",
      "This is worth knowing on its own: if you have written a group of words and something feels unfinished about it, check whether it has a verb. Usually it does not."
    ]},
    { title: "Verbs That Do Something", s: [
      "Most verbs are easy to spot because something visibly happens.",
      "\"Kolten built a redstone door.\" Built is the verb, and you can picture it.",
      "\"The engine stalled.\" Stalled is the verb.",
      "Not all action is physical, though, and this is where the definition starts to leak.",
      "\"He remembered the checklist.\" Nobody can watch remembering happen, but remembered is still the verb, because it is still what the subject did."
    ]},
    { title: "Verbs That Do Not Do Anything", s: [
      "Now look at this sentence: \"The runway is wet.\"",
      "Nothing happens in it. Nobody does anything. And yet it is a complete sentence, so it must have a verb.",
      "The verb is is.",
      "Words like am, is, are, was, were, be, been and being are called being verbs, and their job is not to act but to connect.",
      "\"The runway is wet\" hooks the runway to wet, the way an equals sign hooks two sides of a sum together.",
      "There are only about eight of these and they turn up constantly, so it is worth knowing them on sight: am, is, are, was, were, be, been, being."
    ]},
    { title: "The Trap", s: [
      "Here is the sentence that catches almost everybody.",
      "\"The run was long.\"",
      "Run looks like a verb. Running is something you do. But in this sentence nobody is running, and the run is just a thing that happened to be long, like a rope or a movie.",
      "The verb is was.",
      "A word is not a verb because of what it looks like. It is a verb because of the job it is doing in that particular sentence, and the same word can do different jobs in different sentences."
    ]},
    { title: "The Test That Always Works", s: [
      "You cannot pass this lesson by asking whether a word feels like an action, because is and was do not feel like anything.",
      "So use a test instead of a feeling.",
      "Put the word Yesterday at the front of the sentence and read it again. Exactly one word has to change shape, and that word is the verb.",
      "\"The runway is wet\" becomes \"Yesterday the runway was wet.\" Is changed to was, so is was the verb.",
      "\"The run was long\" becomes \"Yesterday the run was long.\" Run did not move at all. Was is the verb, and run never was one.",
      "This test does not care whether anything happens in the sentence, which is exactly why it beats the definition you were probably taught."
    ]},
    { title: "Why This One Matters Later", s: [
      "Almost everything ahead in grammar is really a lesson about verbs wearing a different name.",
      "Tense is a verb changing to show when. Agreement is a verb changing to match who. Clauses are counted by counting verbs.",
      "So the goal here is not to answer ten questions correctly today.",
      "The goal is to get to where finding the verb takes no thought at all, because every later lesson quietly assumes you can already do it."
    ]}
  ],

  examples: [
    ["The mechanic tightened the bolt.", "tightened",
     "Something happens and you can picture it. Yesterday the mechanic tightened - the word already changed, so it is the verb."],
    ["The hangar is enormous.", "is",
     "Nothing happens here at all. Is connects the hangar to enormous, and Yesterday the hangar WAS enormous proves it."],
    ["Kolten forgot his flight log.", "forgot",
     "You cannot watch forgetting, but it is still what he did. Not all action is visible."],
    ["The flight was rough.", "was",
     "The trap. Flight looks like something you do, but here it is a thing that was rough. Was is the verb."],
    ["Those cadets are ready.", "are",
     "A being verb again. Are joins the cadets to ready. Notice it is are and not is, because cadets is plural - that is agreement, and it is coming later."]
  ],

  /* answer = index of the verb after splitting the sentence on spaces.
     Recomputed and verified at build time from `verb`.

     🚨 THE VERB MUST NOT SIT IN THE SAME PLACE EVERY TIME. The first draft of
     this list put eight of the ten verbs at index 2, which meant a student
     could score 80% by always clicking the third word and never learn
     anything. The subjects below are deliberately different lengths for that
     reason alone. build-english.js now fails the build if any one position
     holds more than 40% of the answers, so it cannot creep back in. */
  practice: [
    { sentence: "The tower cleared us for takeoff.", verb: "cleared", answer: 2, kind: "action",
      why: "Yesterday the tower CLEARED us. Cleared changed, so it is the verb." },
    { sentence: "Rain fell all afternoon.", verb: "fell", answer: 1, kind: "action",
      why: "Yesterday rain FELL. Only that word changed." },
    { sentence: "Kolten carefully repaired the landing gear.", verb: "repaired", answer: 2, kind: "action",
      why: "Carefully tells you how, but repaired is what he actually did." },
    { sentence: "The old wooden hangar is enormous.", verb: "is", answer: 4, kind: "being",
      why: "Nothing happens. Is connects the hangar to enormous, and four words go by before you reach it." },
    { sentence: "Those instruments look broken.", verb: "look", answer: 2, kind: "action",
      why: "Look is the tricky one. Yesterday those instruments LOOKED broken - it changed shape, so it is the verb." },
    { sentence: "The long jump scared him badly.", verb: "scared", answer: 3, kind: "action",
      why: "The trap. Jump is a thing here, not something anyone is doing. Scared is the verb." },
    { sentence: "We are ready.", verb: "are", answer: 1, kind: "being",
      why: "A being verb. Are joins we to ready, and the whole sentence is three words." },
    { sentence: "The tired pilot from Missouri remembered every checklist item.", verb: "remembered", answer: 5, kind: "action",
      why: "Five words of subject before the verb. Invisible action, but still what he did." },
    { sentence: "Her first solo landing was perfect.", verb: "was", answer: 4, kind: "being",
      why: "The trap again. Landing is a thing that was perfect. Was is the verb." },
    { sentence: "The engines started without trouble.", verb: "started", answer: 2, kind: "action",
      why: "Yesterday the engines STARTED. It changed, so it is the verb." }
  ]
},

];

module.exports = { ENGLISH };
