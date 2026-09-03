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
  /* 🚨 UNIT 2, CHAPTER 10 — read off the book, not guessed. This said
     "Unit 1 · Lesson 1" until 2026-09-03, which was invented before there
     was a spine. Harcourt Language (Orange, Grade 3) puts Action Verbs at
     page 122 of 599, after sentences, subjects, predicates and nouns —
     lesson 28 of 108. See `english-units.js`, which is the authority on
     where anything in this course sits. Change both together or not at all. */
  unit: "Action and Linking Verbs &middot; Unit 2 &middot; Chapter 10",
  /* ⚠️ `eyebrow` is DEAD. No generator reads it — the shelf card's label comes
     from `unit` above (build-pages.js oneCard). Kept only so it is not silently
     lost; say the word and it goes. */
  eyebrow: ["English", "Unit 2 &middot; Chapter 10", "Action and Linking Verbs"],
  dek: "Every sentence has an engine. Find the engine and the rest of the sentence tells you what it is doing.",
  shelf: { grades: [3], subject: "English", thumb: true,
    blurb: "Every sentence has an engine. Find it with a test that works even when nothing happens.",
    contains: [
      "A Ground Control panel for the teacher: what to say when a student is stuck",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "A test the student can run alone, not a definition to memorise",
      "Five worked examples, then a two-part worksheet: find the verb, then name its kind",
    ] },

  ground: {
    whatItIs:
      "By the end of this lesson a student should be able to find the verb in a sentence and say " +
      "whether it is an action verb or a being verb. An action verb tells what someone or something " +
      "does, and that action can be physical, like <i>run, jump</i> or <i>open</i>, or it can happen " +
      "in the mind, like <i>think, remember</i> or <i>understand</i>. A being verb tells what someone " +
      "or something is or was instead of showing an action, and there are only eight of them: " +
      "<b>am, is, are, was, were, be, been, being</b>. Compare \"The dog chased the ball\" with " +
      "\"The dog is tired\". In the first, <i>chased</i> tells what the dog did. In the second, " +
      "<i>is</i> tells us something about the dog.",

    whyItMatters:
      "Verbs are the hinge everything later swings on. Tense is a verb changing to show time. " +
      "Subject-verb agreement is a verb changing to match who is doing it. Sentence types, clauses, " +
      "and eventually essay writing all assume a student can find the verb without thinking about it. " +
      "A student who is shaky here is shaky in every grammar lesson after it, and usually nobody " +
      "notices, because the later lessons look like they are about something else.",

    commonMistake:
      "A word's job can change depending on the sentence, and this is where students lose the thread. " +
      "In \"We walk to school\", <i>walk</i> is an action verb. In \"The walk was long\", <i>walk</i> " +
      "is a noun and the verb is <i>was</i>. Most students hunt for a word that sounds like doing " +
      "something, which works until the verb is <i>is, was</i> or <i>are</i> and then they freeze or " +
      "grab a noun. It comes from teaching \"a verb is an action word\", which is not true, and it is " +
      "why so many students stall on this exact page.",

    whenStuck: [
      "There are TWO tests here and they answer different questions. If he cannot FIND the verb, say: \"Read it again, but start with Yesterday. Which word had to change?\" That word is the verb, every time.",
      "Once he has found it, the quick check names its kind. Use these exact words: \"Is the subject doing something, or is the sentence telling what the subject is?\" Doing means action. Is or was means being.",
      "If they pick a noun, ask: \"Is anybody doing that right now, or is it just a thing?\" A walk sitting on the page is a thing. Walking is not.",
      "If they meet a sentence like \"The dog is running\", tell them plainly that <i>is</i> is helping the action verb <i>running</i>. Helping verbs are their own lesson and nothing here depends on them.",
      "The shortcut worth repeating out loud until it sticks: action tells what something DOES, being tells what something IS.",
      "When they get it right, do not stop at \"correct\". Ask HOW they knew. If the answer is \"it looked like one\", they got lucky and the test has not stuck yet.",
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
      "TWO TESTS, TWO JOBS. <b>To FIND the verb</b>, put <i>Yesterday</i> in front of the sentence " +
      "and read it again — the one word that has to change shape is the verb. <b>To NAME its kind</b>, " +
      "ask: <i>is someone or something doing something, or is the sentence telling me what someone or " +
      "something is?</i> Doing means an action verb. Is or was means a being verb. " +
      "Action means DO. Being means IS.",
  },

  parts: [
    { title: "Every Sentence Needs a Verb", s: [
      "Imagine a sentence is like a car. It might have a driver, seats, wheels and a radio, but none of those make the car go. The engine does.",
      "",
      "The verb is the engine. It is the one word that makes a sentence work, and every sentence in English has one.",
      "",
      "The driver stopped the bus.",
      "",
      "What happened? The driver stopped. The word stopped is the verb, because it tells us what the driver did.",
      "",
      "Cross out stopped and the sentence stops working. You are left with a driver and a bus and nothing happening between them.",
      "",
      "In this lesson we are going to learn about two important kinds of verbs. Action verbs and being verbs."
    ]},

    { title: "Action Verbs", s: [
      "An action verb tells what someone or something does.",
      "",
      "The dog chased the ball.",
      "",
      "The word chased is the action verb, because it tells what the dog did.",
      "",
      "The same thing happens here.",
      "",
      "The engine stalled.",
      "",
      "The engine did something. It stalled.",
      "",
      "Not every action is something you can see. Look at this one.",
      "",
      "The student remembered the answer.",
      "",
      "You cannot actually watch someone remember something. There is no giant light bulb that suddenly appears over his head. Remembering happens inside the mind, but it is still something he did. That makes remembered an action verb.",
      "",
      "Words like think, remember, wonder and understand can all be action verbs, even though the action happens inside your head."
    ]},

    { title: "Being Verbs", s: [
      "Now look at a different sentence.",
      "",
      "The road is wet.",
      "",
      "What action did the road perform? Nothing. The sentence is simply telling us something about the road. The word is connects road with wet, and that makes is a being verb.",
      "",
      "A being verb tells what someone or something is or was, instead of telling what it does.",
      "",
      "There are eight forms of the verb be. These are important words to recognise, because you will see them again and again in English.",
      "",
      "Am. Is. Are. Was. Were. Be. Been. Being."
    ]},

    { title: "Action or Being?", s: [
      "Compare these two sentences.",
      "",
      "The kettle boiled.",
      "",
      "The kettle is empty.",
      "",
      "They are both about the same kettle, but the verbs are doing different jobs.",
      "",
      "In the first sentence something happened. The kettle boiled, so boiled is an action verb.",
      "",
      "In the second sentence the kettle is not doing anything. The word is tells us about the condition of the kettle, so is is a being verb.",
      "",
      "Here is an easy way to remember the difference. An action verb tells what someone or something does. A being verb tells what someone or something is or was."
    ]},

    { title: "The Word That Tries to Trick You", s: [
      "Sometimes a word that looks like a verb is not actually the verb in the sentence.",
      "",
      "We walk through the park.",
      "",
      "Here, walk tells what we are doing, so it is an action verb.",
      "",
      "Now look at this one.",
      "",
      "The walk was long.",
      "",
      "This time nobody is actually walking. The walk is the name of a thing, so it is being used as a noun. The actual verb is was.",
      "",
      "This teaches an important rule about language. A word's job in the sentence decides what kind of word it is. Do not choose a verb just because a word looks like one. Look at what the word is actually doing."
    ]},

    { title: "Two Tests, Two Jobs", s: [
      "There are two things to work out about a sentence, and each one has its own test. Do not mix them up.",
      "",
      "The first job is finding the verb. Put the word Yesterday in front of the sentence and read it again. The one word that has to change shape is the verb. Nothing else in a sentence changes when the time changes.",
      "",
      "The bell rings loudly. Yesterday the bell rang loudly.",
      "",
      "Only one word moved. Rings became rang. That is your verb.",
      "",
      "The second job is naming what kind of verb it is, and that is a different question."
    ]},

    { title: "Try the Verb Test", s: [
      "Once you have found the verb, ask yourself a simple question.",
      "",
      "Is someone or something doing something, or is the sentence telling me what someone or something is?",
      "",
      "If the subject is doing something, you have probably found an action verb. If the verb tells what the subject is or was, you have probably found a being verb.",
      "",
      "The boy kicked the ball.",
      "",
      "The boy did something. He kicked, so kicked is an action verb.",
      "",
      "The boy is tired.",
      "",
      "The boy is not performing an action. The word is connects the boy with the word tired, so is is a being verb."
    ]},
  ],

  /* ⚠️ Five lines, and none of them re-teach the lesson. An earlier version
     repeated the two kinds and the test here, which is the same
     over-explaining Paul called out in the body. The instructions say the JOB.
     The lesson is what taught it. */
  todo: { title: "Your Turn", s: [
      "Now it is your turn to become the verb detective.",
      "Part A has ten sentences. Find the verb in each one and click it.",
      "Part B marks the verb for you. Your job there is to decide what that verb is doing. Is it telling you what someone or something does, or what someone or something is?",
      "Remember the shortcut. Action means DO. Being means IS.",
      "If you click the wrong word nothing bad happens. The page tells you why, so read that before you try again."
  ] },
  examples: [
    ["The mechanic tightened the bolt.", "tightened",
     "The mechanic is doing something, and you could watch it happen. Tightened is the verb, and it is an action verb."],
    ["The hall is enormous.", "is",
     "Nobody is doing anything here. The sentence is telling you what the hall is, and is connects hall with enormous. That makes is a being verb."],
    ["He forgot his umbrella.", "forgot",
     "You cannot watch someone forget, but forgetting is still something he did. Not every action is one you can see."],
    ["The journey was long.", "was",
     "The trap. Journey looks like something you do, but here nobody is journeying. It is the name of a thing that was long, so the verb is was."],
    ["Those students are ready.", "are",
     "A being verb again. Are tells you what the students are. Notice it is are and not is, because students is more than one. That is agreement, and it is coming later."]
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
      why: "The bell did something. Rang is the verb, and it is an action verb." },
    { sentence: "The puppy is hungry.", verb: "is", answer: 2, kind: "being",
      why: "The puppy is not doing anything. The sentence tells you what the puppy is, so is is the verb." },
    { sentence: "Rain fell all afternoon.", verb: "fell", answer: 1, kind: "action",
      why: "Something happened, and you could have watched it. Fell is the verb." },
    { sentence: "The old wooden gate is heavy.", verb: "is", answer: 4, kind: "being",
      why: "Nobody does anything here. Is tells you what the gate is, and four words go by before you reach it." },
    { sentence: "She repaired the broken shelf.", verb: "repaired", answer: 1, kind: "action",
      why: "She is doing something you could point a camera at. Repaired is the verb." },
    { sentence: "We are ready.", verb: "are", answer: 1, kind: "being",
      why: "Nothing is happening. Are tells you what we are, and the whole sentence is only three words." },
    { sentence: "The long walk tired everyone.", verb: "tired", answer: 3, kind: "action",
      why: "The trap. Nobody is walking here, so walk is a thing, not something anyone does. Tired is what that walk DID to everyone, so tired is the verb. Watch for it again two sentences from now, doing a completely different job." },
    { sentence: "Her first attempt was perfect.", verb: "was", answer: 3, kind: "being",
      why: "The trap again. Attempt is the name of a thing, not something anyone is doing. Was is the verb." },
    { sentence: "The tired driver from the next town remembered every turn.", verb: "remembered", answer: 7, kind: "action",
      why: "The word tired is here again, but this time it is NOT the verb. It is just describing the driver. Nobody is doing tired to anybody. Seven words go by before you reach remembered, and you cannot watch someone remember, but it is still what he did." },
    { sentence: "Both engines started without trouble.", verb: "started", answer: 2, kind: "action",
      why: "The engines did something. Started is the verb." }
  ],

  /* ── PART B. Which KIND of verb is it? ──────────────────────────────────
     Paul, 2026-08-29: "make the questions also resemble that like kinds of
     verbs and which is a verb together but in two different sections ... like
     a worksheet does." Part A asks which WORD. This asks what that word DOES.

     🚨 These are their own sentences, not the Part A ones re-labelled, and
     that is deliberate.
     ⚠️ "Those instruments look expensive" used to sit in Part A and was
     REMOVED on 2026-09-03 when Paul rewrote the questions. There, look means
     seems, which makes it a linking verb rather than an action one - fine for
     asking WHICH WORD, wrong for a lesson whose whole job is action against
     being. Do not put it back in either part. Linking verbs beyond the eight
     forms of be are a later lesson, so nothing ambiguous is allowed here.
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
    { sentence: "She remembered the answer.", at: 1, kind: "action",
      why: "You cannot watch someone remember, but it is still something she did. Remembered is an action verb." },
    { sentence: "I am ready now.", at: 1, kind: "being",
      why: "Nothing is happening. Am joins I to ready, so it is a being verb." }
  ]
},

];

module.exports = { ENGLISH };
