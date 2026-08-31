/* ─────────────────────────────────────────────────────────────────────────
   ENGLISH LESSON DATA. One entry per lesson.

   An English lesson is NOT the history shape and NOT the maths shape.

   History teaches by story, then asks questions whose answers sit in the text.
   Maths teaches by worked example, then makes you show your work.
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

const ENGLISH = [

/* ═══════════════ Parts of Speech · Unit 1 · Lesson 1 — Verbs ══════════════ */
{
  id: "english/verbs-action-and-being",
  slug: "verbs-action-and-being",
  title: "Verbs: Action and Being",
  unit: "Parts of Speech &middot; Unit 1 &middot; Lesson 1",
  eyebrow: ["English", "Unit 1 &middot; Lesson 1", "Parts of Speech"],
  dek: "Every sentence has an engine. Find the engine and the rest of the sentence tells you what it is doing.",
  shelf: { grades: [3], subject: "English",
    blurb: "Every sentence has an engine. Find it with a test that works even when nothing happens.",
    contains: [
      "A Ground Control panel for the teacher: what to say when a student is stuck",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "A test the student can run alone, not a definition to memorise",
      "Five worked examples, then a two-part worksheet: find the verb, then name its kind",
    ] },

  ground: {
    whatItIs:
      "A verb is the word that tells you what the subject does, or what the subject is. " +
      "Nothing else in a sentence can do that job, and no sentence works without one. " +
      "If a group of words has no verb, it is not a sentence yet.",

    whyItMatters:
      "Verbs are the hinge everything later swings on. Tense is a verb changing to show time. " +
      "Subject-verb agreement is a verb changing to match who is doing it. Sentence types, clauses, " +
      "and eventually essay writing all assume a student can find the verb without thinking about it. " +
      "A student who is shaky here is shaky in every grammar lesson after it, and usually nobody " +
      "notices, because the later lessons look like they are about something else.",

    commonMistake:
      "Most students hunt for a word that sounds like doing something. That works until the verb is " +
      "'is', 'was' or 'are', and then they freeze or pick a noun instead. The second half of the same " +
      "mistake is grabbing a word that NAMES an action rather than doing it: in 'The walk was long', " +
      "'walk' is a thing you went on, not something anyone is doing, and the real verb is 'was'. " +
      "Both errors come from teaching the definition 'a verb is an action word', which is not true, " +
      "and is why so many students stall on this exact page.",

    whenStuck: [
      "Say: \"Read it again, but start with Yesterday. Which word had to change?\" That word is the verb.",
      "If they pick a noun, ask: \"Is anybody doing that right now, or is it just a thing?\" A walk sitting on the page is a thing. Walking is not.",
      "If the verb is 'is' or 'was' and they cannot see it, ask: \"What is this sentence saying somebody IS?\" The word joining the two halves is the verb.",
      "When they get it right, do not stop at 'correct'. Ask HOW they knew. If the answer is 'it looked like one', they got lucky and the test has not stuck yet.",
    ],
  },

  rule: {
    short: "A verb tells what the subject does, or what the subject is.",
    long:
      "Verbs come in two kinds. An <b>action verb</b> says something happens: <i>ran, built, decided, " +
      "forgot</i>. A <b>being verb</b> says something simply is: <i>am, is, are, was, were, be, been, " +
      "being</i>. Being verbs do not act. They join the subject to what it is, the way an equals sign " +
      "joins two sides of a sum.",
    test:
      "THE TIME TEST. Put <i>Yesterday</i> or <i>Tomorrow</i> in front of the sentence and read it " +
      "again. The one word that has to change shape is the verb. Nothing else in a sentence changes " +
      "when the time changes.",
  },

  parts: [
    { title: "What a Verb Is", s: [
      "Every sentence has one word that makes it work. That word is the verb.",
      "",
      "The driver stopped the bus.",
      "",
      "Cross out stopped and nothing is left. Just a driver and a bus.",
      "",
      "That word was the verb. Every sentence in English has one."
    ]},

    { title: "Kind One. Action Verbs.", s: [
      "An action verb is something happening. Something you could point a camera at.",
      "",
      "She opened the window.",
      "",
      "Opened is the verb. You can picture it.",
      "",
      "The engine stalled.",
      "",
      "Stalled is the verb.",
      "",
      "Some actions happen inside your head, and those count too.",
      "",
      "He remembered the address.",
      "",
      "Nobody can watch remembering happen. But remembered is what he did, so it is the verb."
    ]},

    { title: "Kind Two. Being Verbs.", s: [
      "A being verb does not do anything. It joins two things together.",
      "",
      "The road is wet.",
      "",
      "Nothing happens here. Nobody does anything. The verb is is.",
      "",
      "It joins the road to wet, like an equals sign in a sum.",
      "",
      "Take it out and you get: The road wet. That is not a sentence any more.",
      "",
      "There are only eight being verbs in English. Learn these eight and you have learned the whole kind.",
      "",
      "Am. Is. Are. Was. Were. Be. Been. Being."
    ]},

    { title: "The Two Side By Side", s: [
      "Same kettle. Two sentences. Two different kinds of verb.",
      "",
      "The kettle boiled. Something happened. Boiled is an action verb.",
      "",
      "The kettle is empty. Nothing happened. Is is a being verb.",
      "",
      "One tells you what happened. The other tells you how something is."
    ]},

    { title: "The One That Fools People", s: [
      "The walk was long.",
      "",
      "Walk looks like a verb. But nobody is walking here. The walk is just a thing, like a rope or a film.",
      "",
      "The verb is was.",
      "",
      "A word is a verb because of the job it does in that sentence. Not because of how it looks."
    ]},
  ],

  /* ⚠️ Five lines, and none of them re-teach the lesson. An earlier version
     repeated the two kinds and the camera test here, which is the same
     over-explaining Paul called out in the body. The instructions say the JOB.
     The lesson is what taught it. */
  todo: { title: "What To Do Now", s: [
      "Now the ten sentences at the bottom. Click the verb in each one.",
      "Then say which kind it is. That is the real job here.",
      "Ask yourself one question. Could you film it?",
      "If you could, it is an action verb. If you could not, it is a being verb.",
      "If you click the wrong word nothing bad happens. The page tells you why, so read that before you try again."
  ] },
  examples: [
    ["The mechanic tightened the bolt.", "tightened",
     "Something happens and you can picture it. Yesterday the mechanic TIGHTENED the bolt - the word already changed, so it is the verb."],
    ["The hall is enormous.", "is",
     "Nothing happens here at all. Is joins the hall to enormous, and Yesterday the hall WAS enormous proves it is the verb."],
    ["He forgot his umbrella.", "forgot",
     "You cannot watch forgetting, but it is still what he did. Not all action is visible."],
    ["The journey was long.", "was",
     "The trap. Journey looks like something you do, but here it is a thing that was long. Was is the verb."],
    ["Those students are ready.", "are",
     "A being verb again. Are joins the students to ready. Notice it is are and not is, because students is plural - that is agreement, and it is coming later."]
  ],

  /* answer = index of the verb after splitting the sentence on spaces.
     Recomputed and verified at build time from `verb`.

     🚨 THE VERB MUST NOT SIT IN THE SAME PLACE EVERY TIME. An early draft put
     eight of ten verbs at index 2, which meant a student could score 80% by
     always clicking the third word and never learn anything. The subjects below
     are deliberately different lengths for that reason alone, and
     build-english.js fails the build if any one position holds more than 40%. */
  practice: [
    { sentence: "The bell rang loudly.", verb: "rang", answer: 2, kind: "action",
      why: "Yesterday the bell RANG. Rang changed, so it is the verb." },
    { sentence: "Rain fell all afternoon.", verb: "fell", answer: 1, kind: "action",
      why: "Yesterday rain FELL. Only that word changed." },
    { sentence: "She repaired the broken shelf.", verb: "repaired", answer: 1, kind: "action",
      why: "Something visibly happens, and repaired is what she did." },
    { sentence: "The old wooden gate is heavy.", verb: "is", answer: 4, kind: "being",
      why: "Nothing happens. Is joins the gate to heavy, and four words go by before you reach it." },
    { sentence: "Those instruments look expensive.", verb: "look", answer: 2, kind: "action",
      why: "Look is the tricky one. Yesterday those instruments LOOKED expensive - it changed shape, so it is the verb." },
    { sentence: "The long walk tired everyone.", verb: "tired", answer: 3, kind: "action",
      why: "The trap. Walk is a thing here, not something anyone is doing. Tired is the verb." },
    { sentence: "We are ready.", verb: "are", answer: 1, kind: "being",
      why: "A being verb. Are joins we to ready, and the whole sentence is three words." },
    { sentence: "The tired driver from the next town remembered every turn.", verb: "remembered", answer: 7, kind: "action",
      why: "Seven words of subject before the verb. Invisible action, but still what he did." },
    { sentence: "Her very first attempt was perfect.", verb: "was", answer: 4, kind: "being",
      why: "The trap again. Attempt is a thing that was perfect. Was is the verb." },
    { sentence: "Both engines started without trouble.", verb: "started", answer: 2, kind: "action",
      why: "Yesterday both engines STARTED. It changed, so it is the verb." }
  ],

  /* ── PART B. Which KIND of verb is it? ──────────────────────────────────
     Paul, 2026-08-29: "make the questions also resemble that like kinds of
     verbs and which is a verb together but in two different sections ... like
     a worksheet does." Part A asks which WORD. This asks what that word DOES.

     🚨 These are their own sentences, not the Part A ones re-labelled, and
     that is deliberate. "Those instruments look expensive" is tagged action in
     Part A, and for finding the verb that is fine - look IS the verb. But its
     KIND is not action: there, look means seems, which makes it a linking
     verb. In a lesson whose entire job is action against being, asking a
     student to call it an action verb would teach the wrong thing. Linking
     verbs beyond the eight forms of be are a later lesson, so nothing
     ambiguous is allowed in this part.
     ⚠️ `at` is the word's index in sentence.split(" ") - the page underlines
     that word. build-english.js checks it points at a real verb. */
  sort: [
    { sentence: "The kettle boiled quickly.", at: 2, kind: "action",
      why: "Something happened, and you could have filmed it. Boiled is an action verb." },
    { sentence: "The classroom is quiet.", at: 2, kind: "being",
      why: "Nothing happens. Is joins the classroom to quiet, so it is a being verb." },
    { sentence: "He built a small shelf.", at: 1, kind: "action",
      why: "He did something you could point a camera at. Built is an action verb." },
    { sentence: "Those books were expensive.", at: 2, kind: "being",
      why: "Nobody does anything. Were joins the books to expensive, so it is a being verb." },
    { sentence: "The dog barked at the gate.", at: 2, kind: "action",
      why: "You could hear it and film it. Barked is an action verb." },
    { sentence: "I am ready now.", at: 1, kind: "being",
      why: "Nothing is happening. Am joins I to ready, so it is a being verb." }
  ]
},

];

module.exports = { ENGLISH };
