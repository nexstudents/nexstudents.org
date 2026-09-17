/* english/forming-compound-subjects-and-predicates
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/build-english.js. Edit the lesson here, not in the registry.

   🚨 THIS IS A REVISING LESSON, NOT A LABELLING LESSON. Houghton Mifflin runs
   it under the banners `Revising Strategies` and `Sentence Fluency`, not under
   Grammar like 1-3 and 1-4. Nothing is WRONG with the two short sentences the
   student starts from. They are just dull and they repeat. Teaching this as
   "find the compound subject" would be the wrong lesson, the same trap that
   once produced a subject-and-predicate lesson about soccer.
   → The objective is COMBINE, and the labelling is only how you check yourself.

   🚨 THE BOOK USES THE WORD `conjunction` TWO LESSONS BEFORE IT TEACHES IT
   (1-7). It gets away with it by defining it inside the running sentence:
   "joined by the conjunction, or connecting word, and or or." This lesson does
   the same thing and never leans on the term.

   ⚠️ THE VERB CHANGES SHAPE AND THE BOOK NEVER SAYS SO. Its own example runs
   "Cotton is used to make quilts" + "Linen is used to make quilts" ->
   "Cotton and linen ARE used to make quilts." A student who joins two subjects
   and keeps the old verb writes "Rosa and Dell sells tomatoes." That is the
   real error this lesson has to head off, so it is stated outright.

   🚨 ONE WORLD, TOP TO BOTTOM — a Saturday farmers' market. Every sentence in
   the story, the marked story, the worked examples, Part A and Part B is that
   same parking lot. No pilot framing and no student's name: this is a public
   site. The market is doing a job no other world does as well, which is that
   repeating yourself about it happens NATURALLY. Three people really do all
   sell tomatoes, so the awkward repetition the lesson exists to fix is not a
   contrivance.

   🔑 TWO QUESTION SERIES, AND NEITHER IS A NEW PART SHAPE. Part A is the
   existing find-the-word part taught to accept a LIST of targets. Part B is
   the existing two-way sort part taught that its two kinds are not always
   action and being. Paul, 2026-09-17: "question series one finding both
   subjects or both predicates in a sentence. then the second series of
   questions is which one either a compound subject and predicates and pick
   which one it is in multiple choice." See `plan.digitize`. */
'use strict';
module.exports = {
  id: "english/forming-compound-subjects-and-predicates",
  slug: "forming-compound-subjects-and-predicates",
  title: "Forming Compound Subjects and Predicates",
  unit: "The Sentence · Revising Strategies",
  eyebrow: "English 7",
  dek: "Two sentences that say almost the same thing can usually be one sentence. This is how you fold them together without losing anything.",

  /* ⛔ NO VIDEO ON THIS LESSON, AND NOT FOR A TECHNICAL REASON.
     Paul, 2026-09-17, on the Miacademy clip he had suggested: "Don't add the
     video to the lesson because it's not our video and I would be taking it
     from someone else." It is somebody else's work and this is a public site
     that sells access, so an embed is not ours to make. He also noticed it did
     not match: the clip covers compound sentences as well, and this lesson is
     only about compound SUBJECTS and PREDICATES. Parts of sentences, not whole
     ones, which is lesson 1-9.
     → If a video belongs here later it has to be one we filmed. */

  /* The instructional analysis, from /teach-plan, run against Houghton Mifflin
     English Grade 7 p43-44 (leaf n59-n61) on 2026-09-17. A build note, never
     rendered. */
  plan: {
    objective: "Fold two or three short sentences that share a part into one sentence, and fix the verb when the subject becomes plural.",
    markers: [
      "QUOTED banners: `Revising Strategies` and `Sentence Fluency`. NOT Grammar, which is what 1-3 and 1-4 sit under.",
      "QUOTED: \"Combining Sentences  Sentences that repeat words can sound awkward and repetitious. Make your writing smoother by combining simple sentences.\"",
      "QUOTED: \"Join sentences that have different subjects but the same predicate to form a compound subject. Simple subjects are usually joined by the conjunction, or connecting word, and or or.\"",
      "QUOTED: \"You can also combine simple sentences that have the same subject but different predicates. Combine simple predicates to form a compound predicate. And, or, or but usually join simple predicates.\"",
      "QUOTED example, and the silent verb change: \"Cotton is used to make quilts. / Linen is used to make quilts.\" -> \"Cotton and linen are used to make quilts.\"",
      "QUOTED example: \"The store owner sells quilts. / teaches quilting. / repairs sewing machines.\" -> \"The store owner sells quilts, teaches quilting, and repairs sewing machines.\"",
      "QUOTED p44: \"Elaborating Sentences  Compound subjects and compound predicates can add detail to your writing. You can elaborate a sentence by replacing one general word with two or more exact words.\"",
      "QUOTED p44 example: \"Her artwork is interesting.\" -> \"Her artwork tells powerful stories and presents beautiful images.\"",
      "QUOTED Apply It: \"Combine these three sets of sentences to form compound subjects and compound predicates.\""
    ],
    method: "A brace diagram. Two or three short sentences on the left, one combined sentence on the right. Combine first, then elaborate: the second half of the spread swaps one vague word for two exact ones, which is the same move used for a different reason.",
    exampleOnly: ["farmers market", "tomatoes", "bread", "peaches", "gravel lot", "straw hat"],
    digitize: "TWO QUESTION SERIES, Paul's shape, 2026-09-17: \"question series one finding both subjects or both predicates in a sentence. then the second series of questions is which one either a compound subject and predicates and pick which one it is in multiple choice.\" That is the existing find part and the existing two-way sort part, and it needs no new part shape at all — which is why it beat the whole-sentence `choose` the first draft proposed. Two engine changes: (1) `practice` accepts a LIST of target words, and the item is unsolved until every one is tapped — the change the 2026-09-13 teach-plan already called for, which also unblocks 1-8 and 1-9. (2) `checkSort` learns a generic `sortKinds` pair so Part B can be subject/predicate instead of action/being, and `at` becomes optional because underlining the joined words would give the answer away.",
    unclear: [
      "The book's Elaborating half (p44) is a writing task with no answer key. It is taught here in the prose and practised in `todo`, not scored, because a typed-answer check still does not exist on this site."
    ]
  },

  shelf: {
    grades: [7],
    subject: "English",
    blurb: "Two sentences that repeat each other can usually become one. Learn the fold.",
    contains: [
      "Teacher Notes with the grade and a reset only the teacher can reach",
      "A Saturday morning at a farmers' market, read aloud one line at a time",
      "The same story again with the joined parts marked in color",
      "Worked examples that show the two short sentences underneath the long one",
      "One part where you find both joined words yourself, and one where you say which half got joined"
    ]
  },

  seq: { unit: 1, unitTitle: "The Sentence", n: 5 },
  /* 🚨 THE HOMEWORK SHEET. Paul, 2026-09-17: "I want another button to also add
     worksheets" and "we might even call them homework worksheets. because these
     are like ones to make sure that you actually understand what you are
     learning and not you are not just pressing a bunch of multiple choices and
     skipping through the lesson."
     ⚠️ Its twelve sentences are NOT these twelve. compound-sheet.js fails the
     build if any sentence on the sheet also appears anywhere in this file.
     build-english.js fails the build if the sheet is not built yet, so
     build-worksheets.js has to run before it. */
  sheet: {
    slug: "forming-compound-subjects-and-predicates",
    note: "This page lets you try again until you get it right, which is how it should be. " +
          "The homework does not, and that is the point: twelve sentences you have not seen, " +
          "written once in your own hand, with a total at the foot for somebody to add up and sign."
  },

  ground: {
    whatItIs: "When two sentences say the same thing about different people, the subjects can be joined into one compound subject. When two sentences say different things about the same person, the predicates can be joined into one compound predicate. The joining word is almost always and, or, or but.",
    whyItMatters: "This is the first lesson in the unit that is about writing rather than about naming. Everything before it asked the student to point at a part of a sentence. This one asks him to build a better sentence out of two worse ones, which is the skill a paragraph is made of. It also sets up lesson 1-9, where the same fold is done on whole sentences instead of parts.",
    commonMistake: "Joining two subjects and leaving the verb alone. He writes Rosa and Dell sells tomatoes, because sells was right in both sentences he started from. Two people need sell, not sells. Ask him to say it with they and the ear usually fixes it before the rule does.",
    whenStuck: [
      "Put the two short sentences side by side and ask what part is identical. The identical part is the part you keep once, and the different parts are the ones that get joined.",
      "If he cannot hear whether the verb is right, have him read the new sentence starting with they. They sells tomatoes is obviously wrong, and he will hear it.",
      "If he joins things that do not belong together, go back to the two originals. Sentences that share nothing cannot be folded, and there is no shame in leaving them apart."
    ]
  },

  rule: {
    short: "Same predicate, different subjects: join the subjects. Same subject, different predicates: join the predicates.",
    long: "Two short sentences that overlap can usually become one. If they say the <b>same thing about different people</b>, keep the said-part once and join the two subjects with a connecting word such as <i>and</i> or <i>or</i>. That is a <b>compound subject</b>. If they say <b>different things about the same person</b>, keep the subject once and join what he does with <i>and</i>, <i>or</i>, or <i>but</i>. That is a <b>compound predicate</b>. With three or more parts, commas separate them and the connecting word goes before the last one. ⚠️ Joining two subjects makes the subject plural, so the verb changes: <i>Rosa sells</i> and <i>Dell sells</i> become <i>Rosa and Dell sell</i>.",
    test: "Read the combined sentence back and look for a word you had to say twice. If nothing repeats and nothing is missing, the fold worked. Then start it with they: if they sells sounds wrong, your verb still needs fixing."
  },

  parts: [
    {
      title: "Saturday at the Market",
      s: [
        "The market opens at seven on a cracked parking lot behind the feed store.",
        "Rosa and Dell set up their tables at the same end every week.",
        "The baker unloads her van, stacks her bread in a pyramid, and says nothing to anybody until she is finished.",
        "Two boys and an old brown dog work their way down the row hunting for samples.",
        "A woman in a straw hat picks up a peach, turns it over twice, and puts it back.",
        "Rain or a county fair can empty the whole lot before noon.",
        "The tomatoes are gone by ten every single Saturday.",
        "The last sellers fold their tables and sweep the gravel before they go home."
      ]
    },
    {
      title: "Say It Once",
      s: [
        "Here is that morning written up by somebody who has never combined a sentence in his life.",
        "",
        "[ex] Rosa sells tomatoes.",
        "Dell sells tomatoes.",
        "",
        "Nothing there is wrong, but read the two of them out loud and you can hear the trouble.",
        "You said sells tomatoes twice, and the second time it told you nothing you did not already have.",
        "",
        "So say it once.",
        "",
        "[ex] Rosa and Dell sell tomatoes.",
        "",
        "Two people, one table's worth of words.",
        "The part that stayed the same, sells tomatoes, sits in the sentence a single time, and the parts that differed, Rosa and Dell, get hooked together with and.",
        "Both of them are still what the sentence is about, so what you have built is a compound subject.",
        "",
        "Watch the verb though, because that is where this goes wrong.",
        "It was sells while it belonged to Rosa on her own, and now it belongs to two people, so it turns into sell.",
        "Rosa and Dell sells tomatoes is the mistake nearly everybody makes the first time, and it takes about a second to fix.",
        "Say the new sentence starting with they and listen to it: they sell tomatoes sounds right, and they sells tomatoes does not.",
        "Your ear already knows this rule even if nobody has ever told it to you.",
        "",
        "Now turn the whole thing around.",
        "",
        "[ex] The baker unloads her van.",
        "The baker stacks her bread in a pyramid.",
        "The baker says nothing to anybody until she is finished.",
        "",
        "Same woman three times, so this time it is the subject doing the repeating.",
        "Keep her once and string together everything she does.",
        "",
        "[ex] The baker unloads her van, stacks her bread in a pyramid, and says nothing to anybody until she is finished.",
        "",
        "Three jobs, one baker, one sentence.",
        "Commas hold the first two apart and and goes in front of the last one, and that whole string of things she does is a compound predicate.",
        "",
        "And, or and but are the three words that do this hooking, and each one joins in its own way: and adds, or offers a choice, and but sets one thing against another.",
        "You will meet all three properly in a later lesson, so for now let and carry most of the load.",
        "",
        "There is a second reason to build these, and it has nothing to do with saving words.",
        "",
        "[ex] Her table is interesting.",
        "",
        "That sentence is not wrong either, and it is very close to useless.",
        "Interesting is the word you reach for when you have not looked hard enough to say anything better, so go back, look at the table, and name the two things you actually saw.",
        "",
        "[ex] Her table holds purple carrots and sells out before nine.",
        "",
        "One vague word traded for two exact ones, and the sentence got longer and sharper at the same time, which does not happen often.",
        "Same fold you have been practicing, opposite reason: this time you are not cutting words out but putting real ones in."
      ]
    },
    {
      title: "Whether Those Things Were So",
      s: [
        "There is a sentence in the Bible that is built out of exactly what you have been practicing, and it describes the best habit a person can have.",
        "",
        "[verse] Acts 17:11 (KJV) says: These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.",
        "",
        "Luke is describing a group of people in a town called Berea, and Paul had just finished preaching to them.",
        "They did not swallow it whole, and they did not throw it out either.",
        "",
        "Notice that they did not perform only one action.",
        "They received the Word, and they searched the Scriptures.",
        "One subject is connected to two predicates.",
        "That gives us a compound predicate.",
        "",
        "Look at how the sentence is put together: the subject is they, and Luke says it one time.",
        "Then comes received the word with all readiness of mind, and after it comes searched the scriptures daily, so two things the same people did are folded into one sentence by and.",
        "",
        "Now pull it apart and read it as two sentences instead.",
        "",
        "[ex] They received the word with all readiness of mind.",
        "They searched the scriptures daily.",
        "",
        "Nothing about that is wrong, and yet something is gone.",
        "Split apart, those sound like two separate things the Bereans happened to do that week, while joined they are one habit with two halves, and the two halves together are what made them noble.",
        "",
        "Sit with that for a second, because it is worth more than the grammar.",
        "Receiving without searching is gullible, and searching without receiving is stubborn.",
        "Luke holds the two together on purpose, and the compound predicate is part of how he holds them.",
        "",
        "So when you fold two sentences into one, you are doing more than saving words.",
        "You are claiming these two things belong together.",
        "Make sure they do."
      ]
    }
  ],

  /* The story again, with the joined parts lit. ⚠️ Each sentence must appear in
     `parts` word for word; the build compares them and fails if they drift.
     ⛔ `subject` and `predicate` are ARRAYS here — engine change (2). */
  showcaseHead: "The Story, Marked",
  showcase: [
    { sentence: "Rosa and Dell set up their tables at the same end every week.",
      subject: ["Rosa", "Dell"], predicate: ["set"],
      note: "Two sellers, one thing said about both of them. Notice set, not sets. Two people made the verb change shape." },
    { sentence: "Two boys and an old brown dog work their way down the row hunting for samples.",
      subject: ["boys", "dog"], predicate: ["work"],
      note: "A compound subject does not need both halves to be the same length. Two boys on one side, an old brown dog on the other." },
    { sentence: "A woman in a straw hat picks up a peach, turns it over twice, and puts it back.",
      subject: ["woman"], predicate: ["picks", "turns", "puts"],
      note: "One woman, three things she does. Commas between the first two, and before the last one." },
    { sentence: "Rain or a county fair can empty the whole lot before noon.",
      subject: ["Rain", "fair"], predicate: ["empty"],
      note: "Or instead of and, because only one of the two has to happen. It is still a compound subject." }
  ],

  /* The worked cases, with the two short sentences shown underneath the long
     one so the fold is visible. Different sentences from the showcase so
     nothing is explained twice. */
  examples: [
    { sentence: "The baker unloads her van, stacks her bread in a pyramid, and says nothing to anybody until she is finished.",
      subject: ["baker"], predicate: ["unloads", "stacks", "says"],
      why: "Three sentences went in, all of them starting The baker. She survives once and her three jobs get strung behind her. Say The baker three times out loud and you will not want to write it that way again." },
    { sentence: "The last sellers fold their tables and sweep the gravel before they go home.",
      subject: ["sellers"], predicate: ["fold", "sweep"],
      why: "Same sellers, two jobs, so this is a compound predicate. Only two parts this time, which means no comma is needed. And is doing the whole join by itself." },
    { sentence: "Peaches and sweet corn sell out first in August.",
      subject: ["Peaches", "corn"], predicate: ["sell"],
      why: "A compound subject does not have to be people. Two crops, one thing true of both. And the verb is sell rather than sells, because there are two of them." },
    { sentence: "The old brown dog begs at every table but never gets anything.",
      subject: ["dog"], predicate: ["begs", "gets"],
      why: "But instead of and, because the second half pushes against the first. He tries, and it does not work. The join still makes a compound predicate." }
  ],

  labels: {
    tagFind: "Tap both", tagFindDone: "Found them",
    tagKind: "Which kind?", tagKindDone: "Got it",
    askPrefix: "Find both halves of the", askSubject: "compound subject", askPredicate: "compound predicate",
    wrongFind: "Not that one. Look for the two words joined by and, or, or but.",
    wrongSubject: "Not that one. A compound subject is the two things the sentence is ABOUT, not the words describing them.",
    wrongPredicate: "Not that one. A compound predicate is the two things the subject DOES. Find the doing words joined by and, or, or but.",
    /* Part B is a two-way pick, and the template already reads these generic
       label names. Nothing about it was ever verb-specific except the guard. */
    kindAKey: "subject", kindBKey: "predicate",
    kindA: "Compound subject", kindB: "Compound predicate",
    wrongKindA: "Not a compound subject. That would mean two different people or things doing one thing. Here the sentence names one, and then says two things about it.",
    wrongKindB: "Not a compound predicate. That would mean one subject doing two things. Here two different subjects are joined, and only one thing is said about them.",
    beingCheck: false
  },

  /* ⛔ THE TWO KINDS ARE NOT action/being, so checkSort has to be told what
     they are. Engine change: a generic `sortKinds` pair, which also makes `at`
     optional, because underlining the answer would give Part B away. */
  sortKinds: ["subject", "predicate"],

  headA: "Part A. Find Both.",
  noteA: "Six sentences. Each one has two words joined together. Tap both of them, not just the first.",
  headB: "Part B. Which Kind?",
  noteB: "Six more sentences. Nothing is underlined this time. Decide whether the joined part is the subject or the predicate.",

  practiceNote: "Two parts. Part A asks you to find the two joined words in a sentence, and it is not finished until you have tapped both. Part B asks a single question about each sentence: was it the subject that got joined, or the predicate? A wrong answer tells you why and lets you go again, so nothing here counts against you.",

  /* PART A. Find both halves of the compound. ⛔ `words` and `answer` are
     ARRAYS — the engine change Paul asked for. The item is not solved until
     every target is tapped.
     ⚠️ The spread check still applies and these were laid out for it: the
     first targets sit at 0, 2, 1, 9, 2, 3, so no single position pays off.
     Two sentences were reworded ONLY to move that first target off word 0,
     which three of six were sitting on in the draft. */
  practice: [
    { sentence: "Rosa and Dell unload their trucks before sunrise.", ask: "subject",
      words: ["Rosa", "Dell"], answer: [0, 2],
      why: "Two sellers, one thing said about both. Their trucks is what they unload, not who the sentence is about." },

    { sentence: "The baker kneads her dough and bakes it overnight.", ask: "predicate",
      words: ["kneads", "bakes"], answer: [2, 6],
      why: "Same baker twice, so what she does got joined instead. Kneads and bakes are the two doing words." },

    { sentence: "Ripe tomatoes and green peppers fill the table nearest the road.", ask: "subject",
      words: ["tomatoes", "peppers"], answer: [1, 4],
      why: "A compound subject can be two things rather than two people. Ripe and green only tell you what kind, so neither one is a joined word." },

    { sentence: "Every Saturday morning a woman in a straw hat arrives early and stays late.", ask: "predicate",
      words: ["arrives", "stays"], answer: [9, 12],
      why: "The doing words are near the end this time, which is why hunting by position never works. Arrives and stays are joined by and." },

    { sentence: "A hard wind or heavy rain sends the sellers home by ten.", ask: "subject",
      words: ["wind", "rain"], answer: [2, 5],
      why: "Or joins them, and it is still a compound subject. Hard and heavy only tell you what kind, so neither one is a joined word." },

    { sentence: "The two boys split a peach, share the pit, and argue about it.", ask: "predicate",
      words: ["split", "share", "argue"], answer: [3, 6, 10],
      why: "Three things, one pair of boys. Commas hold the first two apart and and sits in front of the last one." }
  ],

  /* PART B. One question per sentence: which half got joined? Two answers, so
     the guessing floor is 50%, which is why the guard refuses an uneven mix
     and refuses three of the same answer in a row. Three of each here, and it
     alternates by twos rather than by ones so the alternation is not the tell.
     ⚠️ No `at`. Underlining the joined words would answer the question. */
  sort: [
    { sentence: "Rosa and Dell share one long table by the gate.", kind: "subject",
      why: "Two sellers joined by and, and only one thing said about them. They share a table. That is a compound subject." },

    { sentence: "A cold wind or a slow morning empties the lot before ten.", kind: "subject",
      why: "Or joins two different things that could each empty the lot. One predicate, two subjects." },

    { sentence: "The baker slices a loaf and hands out the pieces.", kind: "predicate",
      why: "One baker, and then two things she does. Slices and hands are joined, so the predicate is the compound one." },

    { sentence: "The old brown dog circles the tables and waits for a dropped crust.", kind: "predicate",
      why: "Still one dog. Circles and waits are the two doing words, joined by and." },

    { sentence: "Peaches, plums and sweet corn disappear before nine.", kind: "subject",
      why: "Three things joined, and disappear is said once for all of them. A compound subject can have more than two parts." },

    { sentence: "The last seller counts her money, folds her table, and drives home.", kind: "predicate",
      why: "One seller doing three things in a row. Counts, folds and drives are joined, so this is a compound predicate." }
  ],

  todo: {
    title: "Your Turn",
    s: [
      "Listen to the story about the market, then read the marked sentences underneath it.",
      "In Part A every sentence has two words that were joined together.",
      "Tap both of them, because one is not enough and the question stays open until you have found them all.",
      "In Part B nothing is marked for you.",
      "Read the sentence and decide which half got joined: was it the subject, or was it the predicate?",
      "When you join two subjects, check the verb before you move on.",
      "Start the new sentence with they, and if it sounds wrong, the verb still needs fixing.",
      "Last, print the homework sheet from the button at the foot of this page and do it on paper.",
      "It uses twelve sentences you have not seen here, so it is asking whether you can work the rule rather than whether you remember these answers.",
      "Part D is the one that counts most: write two sentences of your own, one with a compound subject and one with a compound predicate, then underline the joined words in each.",
      "Add your total up at the bottom and hand it to whoever teaches you to check and sign."
    ]
  }
};
