/* english/simple-subjects-and-simple-predicates
   Grade 3 · english · unit 4. Its home is this folder.
   Built by tools/build-english.js. Edit the lesson here, not in the registry.

   🚨 THE LESSON BEFORE THIS ONE IS THE METHOD, NARROWED. Complete Subjects and
   Predicates draws a line down the middle of a sentence and colours the two
   halves green and orange. This lesson keeps the identical two colours and
   shrinks the target to ONE WORD inside each half. The colours are lifted from
   split/template.html rather than picked again, so green means the same thing
   in both lessons.

   🚨 ONE WORLD, TOP TO BOTTOM. Story, marked story, worked examples, Part A and
   Part B are all the same Saturday at the same little airfield. The lesson
   before this one ran a hardware store, then baseball, then chess, and asked a
   twelve year old to hold three worlds in one sitting.

   ⚠️ EVERY VERB IN PART A AND PART B IS A SINGLE WORD, on purpose. A helper
   like `has tightened` makes the simple predicate two words and the tap
   ambiguous, so the prose names that case and the practice never tests it. */
'use strict';
module.exports = {
  id: "english/simple-subjects-and-simple-predicates",
  slug: "simple-subjects-and-simple-predicates",
  title: "Simple Subjects and Simple Predicates",
  unit: "Grammar · U4-L7",
  eyebrow: "English 7",
  dek: "You already split a sentence into two halves. Inside each half, one single word is doing the real work. This is how you find it.",

  /* The instructional analysis, from /teach-plan, run before any of the content
     below was written. A build note, never rendered. */
  plan: {
    objective: "Find the one word that is the simple subject, and the one word that is the simple predicate.",
    markers: [
      "Complete Subjects and Predicates, ground.whyItMatters: \"Simple subjects, compound subjects and finding the subject in an unusual sentence are all this same skill, narrowed down.\"",
      "Paul, 2026-09-15: \"instead of finding a complete subject and predicates side on left or right it's identifying the single word in the sentence\"",
      "Paul, 2026-09-15: \"we can just highlight them in the student notes in green for subject and orange for predicate\"",
      "Paul, 2026-09-15: \"6 multiple choice questions which word in the line is a simple subject and which is a simple predicate. section two 6 more lines where he has to actually find the word and tap on the correct one\""
    ],
    method: "Keep the two colours from the previous lesson and shrink the target from a half to a single word. Offered words first, unaided hunting second.",
    exampleOnly: ["airfield", "windsock", "trainer", "hangar", "mechanic", "instructor", "runway"],
    digitize: "Part A is the choose mechanic added to build-english.js on 2026-09-15; Part B is the existing tap-the-word part, whose index the build recomputes.",
    unclear: []
  },

  shelf: {
    grades: [3],
    subject: "English",
    blurb: "One word runs the subject and one word runs the predicate. Find them both.",
    contains: [
      "Teacher Notes with the grade and a reset only the teacher can reach",
      "A Saturday at a small airfield, read aloud one line at a time",
      "The same story again with both words marked in color",
      "Worked examples that say how you could have known",
      "One part where the words are laid out, and one where they are not"
    ]
  },

  seq: { unit: 4, unitTitle: "Grammar", n: 2 },
  /* 🚨 THE HOMEWORK SHEET. Its sentences are NOT these sentences:
     homework-sheet.js fails the build if any of them appear anywhere in this
     file. Paul, 2026-09-17: "this is a homework worksheet so it is a different
     thing." build-english.js fails the build if the sheet is not built yet, so
     build-worksheets.js runs before it. */
  sheet: {
    slug: "simple-subjects-and-simple-predicates",
    note: "This page lets you try again until you get it right. The homework does not, and that is " +
          "the point: eleven sentences you have not seen, written once in your own hand, with a " +
          "blank total at the foot for somebody to add up and sign."
  },

  ground: {
    whatItIs: "The complete subject is every word telling you who or what the sentence is about, and inside it one main word carries the meaning. That word is the simple subject. The complete predicate is everything said about that subject, and inside it the verb is the simple predicate.",
    whyItMatters: "Almost every grammar skill after this one is stated in terms of these two words. Subject and verb agreement, compound subjects, compound predicates and finding the subject in a question all assume a student can already point at the one word each half is built on.",
    commonMistake: "Picking a noun out of the describing phrase instead of the one the sentence is about. In the mechanic under the left wing, a student marks wing, because it is a noun and it is close to the verb. Ask him what tightened the bolt, and he corrects himself.",
    whenStuck: [
      "Read only the green half out loud, then ask him to say it again in one word. The word he keeps is the simple subject.",
      "For the predicate, ask what the subject DOES. If he answers with a phrase, ask which single word of that phrase could not be removed.",
      "If he is marking nouns out of the middle of the subject, cover everything after the first few words and ask who or what the sentence is about."
    ]
  },

  rule: {
    short: "The simple subject is the main word in the complete subject. The simple predicate is the verb.",
    long: "You already know a sentence splits into two halves. The <b>simple subject</b> is the one main word inside the green half, and it is almost always a noun or a pronoun. The <b>simple predicate</b> is the verb inside the orange half, the word that says what the subject does or what it is. Everything else in either half is there to describe, and describing words are not the answer. When a verb travels with a helper, as in <i>has tightened</i> or <i>is flying</i>, the helper and the verb go together and count as one simple predicate.",
    test: "Say the sentence with only two words. Keep the one word the sentence is about and the one word saying what it does, and drop everything else. If what is left still makes sense as a tiny sentence, you have found both."
  },

  parts: [
    {
      title: "Saturday at the Airfield",
      s: [
        "Saturday morning at the little airfield is the busiest part of the week.",
        "The mechanic under the left wing tightens a bolt for the third time.",
        "Two students near the fence watch a yellow trainer taxi past them.",
        "The instructor in the back seat writes something on her clipboard.",
        "Her student flies the whole circuit without a single word.",
        "The old windsock above the fuel pump twists toward the north.",
        "Every pilot on the field checks that windsock before takeoff.",
        "The last plane rolls into the hangar at six o'clock."
      ]
    },
    {
      title: "Down To One Word",
      s: [
        "That was Saturday morning at the airfield.",
        "Now pull a few of those sentences apart.",
        "",
        "Last time you cut a sentence into two halves.",
        "Green was who or what the sentence was about, and orange was everything said about it.",
        "That dividing line is still there, and you still need it.",
        "This time you're going inside each half to find the one word running it.",
        "",
        "Here is one of the sentences from the story.",
        "The mechanic under the left wing tightens a bolt for the third time.",
        "",
        "Start with the green half.",
        "The mechanic under the left wing.",
        "Five words, and only one of them is what your sentence is actually about.",
        "It isn't the wing.",
        "Nothing in this sentence happens to a wing.",
        "The words under the left wing are there to tell you which mechanic, and that's all they do.",
        "So your simple subject is mechanic.",
        "",
        "Now the orange half.",
        "Tightens a bolt for the third time.",
        "Ask yourself what the man actually does.",
        "He doesn't do a bolt, and he doesn't do a third time.",
        "The bolt is the thing in his hand, and for the third time just tells you how often.",
        "The word he does is tightens.",
        "That's your simple predicate.",
        "",
        "After you've found both of them, run this check.",
        "Say the sentence again using only those two words.",
        "The mechanic tightens.",
        "It still stands up on its own, and that's how you know you picked the right two.",
        "",
        "Next, here is where this goes wrong most often.",
        "You go hunting for a noun, you spot wing sitting right beside the verb, and you mark it.",
        "It's an easy mistake, because wing really is a noun.",
        "Ask who or what the whole sentence is about before you pick, and the trap stops working.",
        "",
        "One more thing, so it doesn't catch you out later.",
        "A verb sometimes brings a helper along with it, as in has tightened or is flying.",
        "When that happens the helper and its verb travel together, and the pair of them are your simple predicate.",
        "Every sentence in this lesson uses a verb standing on its own, so you can practice the idea first."
      ]
    },
    {
      title: "Reading It Rightly",
      s: [
        "Finding one word in a sentence sounds like a small thing to be good at.",
        "It isn't.",
        "Every careful reader you'll ever meet is doing this without even thinking about it.",
        "",
        "A contract, a set of instructions, a warning label, a verse.",
        "Every one of them is built out of sentences, and every sentence is built around its subject and its predicate.",
        "If you can't see what a sentence is about, and what it's claiming about it, you can't judge whether the claim is true.",
        "",
        "[verse] Second Timothy 2:15 says: Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
        "",
        "[verse] Nehemiah 8:8 says they read in the book distinctly, and gave the sense, and caused them to understand the reading.",
        "",
        "Distinctly means clearly, one piece at a time.",
        "Giving the sense means saying what it actually says, not what you assumed it said.",
        "That's the work you're practicing every time you find the subject and the verb.",
        "Read it rightly first, and then you can judge whether it's so."
      ]
    }
  ],
  /* The story again, with both words lit. ⚠️ Each sentence must appear in
     `parts` word for word; the build compares them and fails if they drift. */
  showcaseHead: "The Story, Marked",
  showcase: [
    { sentence: "Saturday morning at the little airfield is the busiest part of the week.",
      subject: "morning", predicate: "is",
      note: "The sentence is about a morning, not an airfield. And is counts as the verb even though nothing happens." },
    { sentence: "Two students near the fence watch a yellow trainer taxi past them.",
      subject: "students", predicate: "watch",
      note: "Near the fence tells you which students, so fence is not the answer. Watch is what they do." },
    { sentence: "Her student flies the whole circuit without a single word.",
      subject: "student", predicate: "flies",
      note: "A short green half this time. One word in, one word out." },
    { sentence: "The last plane rolls into the hangar at six o'clock.",
      subject: "plane", predicate: "rolls",
      note: "Last describes the plane, and describing words are never the simple subject." }
  ],

  /* The worked cases, with the reasoning spelled out. Different sentences from
     the showcase so nothing is explained twice. */
  examples: [
    { sentence: "The mechanic under the left wing tightens a bolt for the third time.",
      subject: "mechanic", predicate: "tightens",
      why: "Who or what is this about? A mechanic. Under the left wing only says which one, so wing is a trap sitting right beside the verb. What does he do? He tightens." },
    { sentence: "The instructor in the back seat writes something on her clipboard.",
      subject: "instructor", predicate: "writes",
      why: "Seat and clipboard are both nouns and neither is what the sentence is about. Strip it to two words and you get instructor writes, which still makes sense." },
    { sentence: "The old windsock above the fuel pump twists toward the north.",
      subject: "windsock", predicate: "twists",
      why: "Old describes the windsock and above the fuel pump says where it is. Neither survives the two-word test. Windsock twists does." },
    { sentence: "Every pilot on the field checks that windsock before takeoff.",
      subject: "pilot", predicate: "checks",
      why: "Every is a describing word, so it is not the simple subject even though it comes first. The pilot is who this is about, and checking is what he does." }
  ],

  labels: {
    tagChoose: "Pick the word", tagChooseDone: "Got it",
    tagFind: "Tap the word", tagFindDone: "Found it",
    askPrefix: "Which word is the", askSubject: "simple subject", askPredicate: "simple predicate",
    wrongSubject: "Not that one. Ask who or what the whole sentence is about, then say it in a single word.",
    wrongPredicate: "Not that one. Ask what the subject actually DOES. That word is the simple predicate.",
    beingCheck: false
  },

  practiceNote: "Two parts, like a worksheet. Part A lays the words out for you. Part B does not. A wrong answer tells you why and lets you go again, so nothing here counts against you.",

  /* PART A. The words are offered. ⚠️ Every option has to be a word in its own
     sentence, and the build refuses any that is not. `ask` alternates so the
     position of the answer never becomes the answer. */
  choose: [
    { sentence: "The mechanic under the left wing tightened a bolt.", ask: "subject",
      word: "mechanic", options: ["mechanic", "wing", "bolt", "tightened"],
      why: "The sentence is about a mechanic. Under the left wing only tells you which one, so wing is describing, not the subject." },
    { sentence: "Two students near the fence watched the runway.", ask: "predicate",
      word: "watched", options: ["students", "fence", "watched", "runway"],
      why: "Watched is the only word saying what the students do. The rest are people, places and things." },
    { sentence: "A yellow trainer lifted from the grass strip.", ask: "subject",
      word: "trainer", options: ["trainer", "grass", "strip", "lifted"],
      why: "Yellow describes the trainer, and from the grass strip says where. The sentence is about the trainer." },
    { sentence: "The instructor in the back seat wrote a note.", ask: "predicate",
      word: "wrote", options: ["instructor", "seat", "wrote", "note"],
      why: "A note is the thing she wrote, not the doing. Wrote is the verb, so it is the simple predicate." },
    { sentence: "The old windsock above the fuel pump twisted north.", ask: "subject",
      word: "windsock", options: ["windsock", "pump", "fuel", "twisted"],
      why: "Pump is a noun sitting close to the verb, which is exactly why it is tempting. Nothing about a pump is being said here." },
    { sentence: "Every pilot on the field checks that windsock.", ask: "predicate",
      word: "checks", options: ["pilot", "field", "checks", "windsock"],
      why: "Checks is what the pilot does. Windsock is the thing he checks, which makes it the object and not the predicate." }
  ],

  /* PART B. Nothing is offered. ⚠️ `answer` is recomputed from `word` by the
     build, and the spread check refuses a set where one position holds more
     than 40% of the answers - so the subjects deliberately run short, short,
     medium, medium, short, long. */
  practice: [
    { sentence: "Two mechanics opened the hangar doors.", ask: "subject",
      word: "mechanics", answer: 1,
      why: "Two describes how many, so it is not the subject. The sentence is about the mechanics." },
    { sentence: "The windsock twisted in the morning breeze.", ask: "predicate",
      word: "twisted", answer: 2,
      why: "Twisted is the one word saying what the windsock did. Breeze is a thing, not a doing." },
    { sentence: "A yellow trainer waited at the end of the runway.", ask: "subject",
      word: "trainer", answer: 2,
      why: "Yellow is a color and the runway is a place. The sentence is about the trainer." },
    { sentence: "The fuel truck rolled slowly across the grass.", ask: "predicate",
      word: "rolled", answer: 3,
      why: "Slowly tells you how it rolled, which makes rolled the word it is describing. That is your verb." },
    { sentence: "The girl in the green headset climbed into the cockpit.", ask: "subject",
      word: "girl", answer: 1,
      why: "Headset and cockpit are both nouns and neither is what the sentence is about. Strip it down and you get girl climbed." },
    { sentence: "The old radio above the workbench hissed.", ask: "predicate",
      word: "hissed", answer: 6,
      why: "The verb is the last word this time, which is why hunting by position never works. Hissed is what the radio did." }
  ],

  todo: {
    title: "Your Turn",
    s: [
      "Listen to the story about the airfield, then read the marked sentences underneath it.",
      "Part A lays the words out for you, and one of them is the word the question asks for.",
      "Part B gives you nothing but the sentence, so you have to find the word on your own.",
      "When a question asks for the simple subject, say the sentence out loud and ask who or what it is about.",
      "When it asks for the simple predicate, ask what that subject does.",
      "If you get one wrong, the page tells you why and lets you go again, so nothing here counts against you.",
      "Last, print the homework from the button at the foot of this page and do it on paper.",
      "It uses sentences you have not seen here, so it asks whether you can work the rule rather than whether you remember these answers.",
      "Add your total up at the bottom and hand it to whoever teaches you to check and sign."
    ]
  }
};
