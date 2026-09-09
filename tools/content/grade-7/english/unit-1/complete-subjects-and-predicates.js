/* english/complete-subjects-and-predicates
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/build-split.js. Edit the lesson here, not in the registry.

   🚨 THE TEACHING PROSE IS PAUL'S, WORD FOR WORD. He wrote `ground`, the story in
   `parts` and the whole of the walkthrough. Do not smooth it, shorten it or make
   it sound more like the other lessons. It is the voice reference.

   🚨 `split` IS A WORD INDEX: how many words are in the complete subject, which is
   the same as the index of the first word of the complete predicate. Count on
   sentence.split(" "). The build recomputes it and fails if it disagrees, so a
   reworded sentence cannot quietly keep a stale number. */
'use strict';
module.exports = {
  id: "english/complete-subjects-and-predicates",
  slug: "complete-subjects-and-predicates",
  title: "Complete Subjects and Predicates",
  unit: "The Sentence · Unit 1 · Lesson 2",
  eyebrow: "English",
  dek: "Every sentence has two halves. One says who or what it is about, the other says something about it. Finding the line between them is the whole skill.",

  shelf: {
    grades: [7],
    subject: "English",
    blurb: "Where does the subject stop and the rest of the sentence start? Draw the line and find out.",
    contains: [
      "Teacher Notes with the grade and a reset only the teacher can reach",
      "A hardware store on a Saturday morning, read aloud one line at a time",
      "Seven sentences where you place the dividing line yourself",
      "Five more where the work is done and you name the half",
      "A printable worksheet, black and white, for doing it on paper"
    ]
  },

  seq: { unit: "The Sentence · Unit 1 · Lesson 2", unitTitle: "The Sentence", n: 2 },

  ground: {
    whatItIs: "Every sentence splits into two parts. The complete subject is all the words that tell who or what the sentence is about. The complete predicate is all the words that tell what that subject does, or what is true about it.",
    whyItMatters: "Almost everything later in this unit depends on being able to see those two halves. Simple subjects, compound subjects and finding the subject in an unusual sentence are all this same skill, narrowed down.",
    commonMistake: "Stopping the subject too early. A student marks the first noun and leaves the rest behind, so The old floorboards near the register becomes The old floorboards. Ask them which floorboards, and they usually fix it themselves.",
    whenStuck: [
      "Say the sentence out loud and stop where it finishes telling you who or what it is about. That pause is the line.",
      "If he cannot hear it, ask him which one. See whether the next few words answer that question.",
      "If he is still stuck, cover everything after his line and ask whether what is left tells you who the sentence is about."
    ]
  },

  /* The story, read aloud by the player. The colour-marked version of the same
     story is rendered from `showcase` below, so the words exist once. */
  parts: [
    {
      title: "Saturday at the Hardware Store",
      s: [
        "Saturday morning at the hardware store is always busy.",
        "The man behind the paint counter has already mixed nine cans of paint.",
        "Customers waiting nearby watch as he carefully matches each color.",
        "A woman in a green jacket is comparing two different door handles.",
        "Her young son spins the rack of keys while he waits for her to decide.",
        "The old floorboards near the register creak every time someone walks across them.",
        "The workers at the store have heard those squeaky boards for years.",
        "The busy hardware store has helped dozens of customers find what they need by the time noon arrives."
      ]
    },
    {
      title: "The Two Halves",
      s: [
        "The green half tells you who or what the sentence is about. That is the complete subject.",
        "The orange half tells you what the subject does or what is true about it. That is the complete predicate.",
        "",
        "Look at this sentence. The man behind the paint counter has already mixed nine cans of paint.",
        "The complete subject is not just the man. Think about a busy hardware store on Saturday. There might be several men inside. The words behind the paint counter tell you which man we are talking about.",
        "So keep those words together. The man behind the paint counter. That whole part is the complete subject.",
        "",
        "Complete subjects can be different sizes. Her young son is only three words. The old floorboards near the register is six words. That is okay. A complete subject keeps all the words that belong together to tell you who or what the sentence is about.",
        "",
        "Here is where students sometimes stop too early. The old floorboards near the register creak every time someone walks across them.",
        "You might stop at floorboards. Don't. The words near the register are still telling you which floorboards we mean, so they stay with the subject.",
        "",
        "For now, our sentences will usually put the complete subject first and the complete predicate after it.",
        "A good question to ask yourself is this. Where does the sentence stop telling me who or what it is about, and start telling me something about it? That is where your dividing line goes."
      ]
    }
  ],

  /* The same story, with the split marked, rendered in the lesson's two colours.
     ⚠️ These sentences must match the ones in `parts` exactly. The build compares
     them and fails if they drift, because two copies of a sentence is how a page
     ends up teaching one thing and reading another. */
  showcase: [
    { sentence: "The man behind the paint counter has already mixed nine cans of paint.", split: 6,
      note: "Not just the man. Behind the paint counter tells you which man." },
    { sentence: "Customers waiting nearby watch as he carefully matches each color.", split: 3,
      note: "Waiting nearby tells you which customers, so it stays with them." },
    { sentence: "A woman in a green jacket is comparing two different door handles.", split: 6,
      note: "In a green jacket tells you which woman." },
    { sentence: "Her young son spins the rack of keys while he waits for her to decide.", split: 3,
      note: "Only three words this time. A complete subject can be short." },
    { sentence: "The old floorboards near the register creak every time someone walks across them.", split: 6,
      note: "Six words. Near the register is still telling you which floorboards." },
    { sentence: "The workers at the store have heard those squeaky boards for years.", split: 5,
      note: "At the store tells you which workers." },
    { sentence: "The busy hardware store has helped dozens of customers find what they need by the time noon arrives.", split: 4,
      note: "The store itself is what this one is about." }
  ],


  /* 🚨 THE PANEL MUST FOLLOW THE EXPLANATION TOO. It blanks when the reading
     leaves the paragraph a frame belongs to, which is right: a picture that hangs
     around claiming to illustrate a line it has nothing to do with is worse than
     none. But the explanation TALKS ABOUT these sentences, so it needs frames of
     its own or the panel goes dark exactly when the words say "look at this".
     `at` is found from `sentence`; `show` is what the panel displays. */
  panel: [
    {
      half: 'subject',
      sentence: "The green half tells you who or what the sentence is about. That is the complete subject.",
      show: "The man behind the paint counter has already mixed nine cans of paint.", split: 6,
      note: "The green half. Who or what the sentence is about."
    },
    {
      half: 'predicate',
      sentence: "The orange half tells you what the subject does or what is true about it. That is the complete predicate.",
      show: "The man behind the paint counter has already mixed nine cans of paint.", split: 6,
      note: "The orange half. What he does, or what is true about him."
    },
    {
      half: 'both', flipAt: 'has already mixed',
      sentence: "Look at this sentence. The man behind the paint counter has already mixed nine cans of paint.",
      show: "The man behind the paint counter has already mixed nine cans of paint.", split: 6,
      note: "Green is the complete subject. Everything after it is the complete predicate."
    },
    {
      half: 'subject',
      sentence: "The complete subject is not just the man. Think about a busy hardware store on Saturday. There might be several men inside. The words behind the paint counter tell you which man we are talking about.",
      show: "The man behind the paint counter has already mixed nine cans of paint.", split: 6,
      note: "Behind the paint counter is doing the work. It says WHICH man."
    },
    {
      /* 🚨 THE PANEL SHOWS WHAT THE VOICE IS SAYING, NOT THE WHOLE STORY LINE.
         Here the narration is counting subject words - "Her young son is only
         three words" - and never reads the rest of that sentence. Showing the
         full line put "spins the rack of keys while he waits for her to decide"
         on screen, orange, while the voice said nothing of the kind. Paul,
         2026-09-08: "in the voice and story you say something completely
         different for the second part". So the frame shows the PHRASE being
         counted, and there is no predicate half to get wrong. */
      half: 'subject',
      sentence: "Complete subjects can be different sizes. Her young son is only three words. The old floorboards near the register is six words. That is okay. A complete subject keeps all the words that belong together to tell you who or what the sentence is about.",
      steps: [
        { show: "Her young son spins the rack of keys while he waits for her to decide.", split: 3,
          note: "Three words this time, and still a complete subject." },
        { from: "The old floorboards near the register is six words",
          show: "The old floorboards near the register creak every time someone walks across them.", split: 6,
          note: "Six words this time. Still one complete subject." }
      ]
    },
    {
      half: 'subject',
      sentence: "Here is where students sometimes stop too early. The old floorboards near the register creak every time someone walks across them.",
      show: "The old floorboards near the register creak every time someone walks across them.", split: 6,
      note: "Six words. Stopping at floorboards would leave near the register behind."
    },
    {
      half: 'subject',
      sentence: "You might stop at floorboards. Don't. The words near the register are still telling you which floorboards we mean, so they stay with the subject.",
      show: "The old floorboards near the register creak every time someone walks across them.", split: 6,
      note: "Near the register stays on the green side. It tells you which floorboards."
    },
    {
      half: 'both', flipAt: 'and start telling me',
      sentence: "A good question to ask yourself is this. Where does the sentence stop telling me who or what it is about, and start telling me something about it? That is where your dividing line goes.",
      show: "The workers at the store have heard those squeaky boards for years.", split: 5,
      note: "Ask it out loud. The place you pause is the place the line goes."
    }
  ],

  /* The one worked example, pulled out and labelled. */
  example: { sentence: "The man behind the paint counter has already mixed nine cans of paint.", split: 6 },

  /* PART A. He places the line. `why` is the wrong-answer message and it asks
     Paul's own closing question back at him, pointed at these exact words.
     Subject length runs short, short, long, long, short, long, long, so a tail is
     never something he can simply expect. */
  practice: [
    { sentence: "The pitcher warmed up along the fence.", split: 2,
      why: "The sentence stops telling you who it is about after the pitcher. Everything after that is what he did." },
    { sentence: "My cousin plays second base.", split: 2,
      why: "My cousin is who the sentence is about. Plays second base is what he does." },
    { sentence: "The batter in the red helmet swung too early.", split: 6,
      why: "Does in the red helmet tell you which batter? Then it belongs on the left." },
    { sentence: "Two coaches from the other team walked out to the mound.", split: 6,
      why: "Does from the other team tell you which coaches? Then it belongs on the left." },
    { sentence: "A foul ball landed in the parking lot.", split: 3,
      why: "A foul ball is the whole subject. Landed in the parking lot is what it did." },
    { sentence: "Everyone in the bleachers stood up at once.", split: 4,
      why: "Does in the bleachers tell you which everyone? Then it belongs on the left." },
    { sentence: "The umpire behind home plate called the last strike.", split: 5,
      why: "Does behind home plate tell you which umpire? Then it belongs on the left." }
  ],

  /* PART B. Already split, one half shaded, he names it. `shaded` alternates
     left, right, left, right, left. ⚠️ If the shaded half were always the same
     side he would learn the position instead of the words, so the build checks
     that both sides appear and that three in a row never match. */
  sort: [
    { sentence: "The tallest piece on the board is the king.", split: 6, shaded: "subject",
      why: "The tallest piece on the board tells you what the sentence is about, so it is the complete subject." },
    { sentence: "My grandfather taught me this opening.", split: 2, shaded: "predicate",
      why: "Taught me this opening tells you what my grandfather did, so it is the complete predicate." },
    { sentence: "A knight moves in an L shape.", split: 2, shaded: "subject",
      why: "A knight is who the sentence is about, so it is the complete subject." },
    { sentence: "The two players at the corner table have not spoken in an hour.", split: 7, shaded: "predicate",
      why: "Have not spoken in an hour tells you something about the two players, so it is the complete predicate." },
    { sentence: "Every pawn on the back rank can become a queen.", split: 6, shaded: "subject",
      why: "Every pawn on the back rank is what the sentence is about, so it is the complete subject." }
  ],

  /* 🚨 GOES LAST, AFTER THE MATERIAL, and the build refuses a lesson without it.
     It names the worksheet on purpose: the writing half of this lesson happens on
     paper, because copying a sentence out is what forces the decision.
     ⚠️ {a} and {b} are filled from practice.length and sort.length by
     build-split.js. Never type the numbers. "Seven sentences" becomes a lie the
     day one is added, and the student stops where the voice tells him to stop. */
  todo: {
    title: "Your Turn",
    s: [
      "Read the story about the hardware store and listen to the explanation.",
      "Part A has {a} sentences. Put the dividing line where the sentence stops telling you who or what it is about.",
      "Part B has {b} sentences. One half is already shaded. Name it.",
      "When you have finished both parts, print the worksheet and do it on paper. Writing the sentences out yourself is where this really sticks."
    ]
  }
};
