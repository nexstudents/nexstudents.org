/* english/tone
   Grade 7 · English · Unit 3 (Do the Right Thing), lesson 5. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. The teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them.

   SOURCE: Holt Elements of Literature, First Course (2000), pp226-229, via the week 12
   packet. Holt p226 says tone can turn "You're a big help" into a compliment or a sarcastic
   remark, and defines tone as the attitude a writer takes toward the audience, the subject
   or a character, conveyed through the writer's choice of words and details. The book's
   selection, "Madam and the Rent Man" by Langston Hughes, is copyrighted and is NOT quoted.
   One plain line in the lesson names it.

   ⚠️ STORY PICK, CLAUDE'S, FOR PAUL TO SWAP: Paul Laurence Dunbar, "We Wear the Mask"
   (1896, in Lyrics of Lowly Life; public domain, the author died in 1906). Why: (1) the
   tone is easy to name and the clue words are strong (a cheerful surface over hidden pain);
   (2) it ties to the book's own idea of "grin and bear it" from the same selection;
   (3) it is short, three stanzas, with no graphic content. The words are Dunbar's exactly,
   checked against Wikisource's text of the poem in The Complete Poems of Paul Laurence
   Dunbar (1913), with these changes only: the double dash at the end of two lines is left
   off (it is punctuation, and the voice would read it badly) and the lines are split to one
   entry each. Spelling is already American. The setup, the plain-words glosses and the
   clue-word charts are OURS. His grammar is old (Nay, thee, oh the clay is vile), so the
   lesson teaches two words, guile and vile, and glosses the hard lines right after each
   stanza.

   ⚠️ ADDED FROM THE RECORD: the poem was published in 1896. Dunbar was a Black American
   poet, and many readers hear the "we" as Black Americans of his time, who often had to
   hide their anger and sorrow. The lesson says that in one careful sentence and also says
   the poem fits anyone who has smiled while hurting. Worth a glance from Paul.
   ⚠️ The cottage pair and the "big help" examples are made up for teaching, not quoted.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 15:1, a soft answer. Choosing
   the scripture is his, so it goes in the review queue.
   ⚠️ The two videos passed oEmbed but nobody watched them. Preview both first. */
'use strict';
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};
const CHART = [
  ["Stanza", "Clue words", "Tone"],
  ["1", "grins and lies, torn and bleeding hearts", "Sad and bitter"],
  ["2", "Why should the world, Nay, let them only see us", "Defiant"],
  ["3", "tortured souls, vile, long the mile", "Weary and aching"],
];
module.exports = {
  id: "english/tone",
  slug: "tone",
  title: "Tone",
  unit: "Literature · U3-L5",
  seq: { unit: 3, unitTitle: "Do the Right Thing", n: 5 },

  plan: {
    objective: "Name the tone of a passage and point to the words and details that create it.",
    markers: [
      "HOLT p226: tone can turn \"You're a big help\" into a compliment or a sarcastic remark. \"Tone is the attitude a writer takes toward the audience, the subject, or a character. Tone is conveyed through the writer's choice of words and details.\" Q4: \"What tones do you hear?\"",
    ],
    method: "SAME WORDS, DIFFERENT TONE: SAY IT TWO WAYS. THEN FIND THE CLUE WORDS THAT SHOW THE WRITER'S ATTITUDE. TONE VS MOOD IS NAMED ONCE.",
    exampleOnly: [
      "Hughes' poem is copyrighted and NOT used. STORY PICK, CLAUDE'S, FOR PAUL TO SWAP: Paul Laurence Dunbar, We Wear the Mask (1896, public domain), a cheerful surface over hidden pain, which ties to the book's grin and bear it. One plain line names Hughes' poem as the book's selection, with no quoting.",
      "The big help and the cottage examples are made up for teaching.",
    ],
    digitize: "Copy the predictions-and-flashback pattern: a short public-domain passage, one sentence per entry, words exact, setup in our own words. A Watch It Worked for each stanza that goes from clue words to tone, and a final chart. Tone-word questions ask for the tone and the clue word.",
    unclear: [
      "Which public-domain poem. The pick is Claude's, in the header, and goes to Paul to swap.",
    ],
  },
  natural: "2026-11-22",
  findsAt: 78,

  sheet: { slug: "tone-homework", subject: "english",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  shelf: { grades: [7], subject: "English",
    blurb: "Say \"You're a big help\" two ways and it means two opposite things. How to hear a writer's tone, with a poem by Paul Laurence Dunbar about a smile that hides something.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Three words said two ways, and what tone and sarcasm are",
      "A poem by Paul Laurence Dunbar, read aloud one line at a time",
      "Three stops where you go from the clue words to the tone",
      "Tone against mood, named once",
      "Six word cards, each with a check question",
    ] },
  eyebrow: ["English 7", "U3-L5", "Do the Right Thing"],
  dek: "The same words can sound kind or cruel. Here's how a writer's tone shows up in the words he picks, and how to catch it.",
  scripture: {
    ref: "Proverbs 15:1",
    text: "A soft answer turneth away wrath: but grievous words stir up anger.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will name the tone of a passage and point to the words and details that create it, say what sarcasm is, tell tone from mood, and learn two words from the poem."
      ]},
      { h: "Key Concepts", p: [
        "Tone is the attitude a writer takes toward the audience, the subject or a character, and it comes through the choice of words and details. The same sentence can have opposite tones.",
        "Mood is the feeling the reader gets from the writing. The two are often alike, but they are not the same thing, and the lesson names the difference once."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Naming a tone with no clue behind it. Ask him which words made him think so.",
        "Reading the cheerful surface of Dunbar's poem as the tone. The surface is cheerful, and the tone underneath is sad and defiant. That gap is the point of the poem.",
        "Dunbar's old grammar is hard (Nay, thee, oh the clay is vile). The lesson glosses each stanza in plain words right after it."
      ]},
      { h: "Teaching Suggestion", p: [
        "Say the same sentence aloud two ways and let him guess the tone each time. Then have him cover the chart at the end of the lesson and rebuild it from the poem.",
        "The poem is a public-domain pick standing in for Holt's Madam and the Rent Man by Langston Hughes, which is copyrighted. Paul can swap it. Many readers hear the we in the poem as Black Americans of Dunbar's time, who often had to hide their anger and sorrow, and it also fits anyone who has smiled while hurting."
      ]},
      { h: "Book Pages", p: [
        "Holt Elements of Literature, First Course (2000), pages 226 to 229. Read free on archive.org: https://archive.org/details/elementsoflitera0000unse_i0h7"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "FP_DGIumkho", title: "Mood and Tone Mini Lesson with Terms and Examples- Perfect for Middle School!", channel: "Teaching Intentionally",
          why: "A short mini lesson that also splits tone from mood. It was not watched, so preview it first for ads and clarity." },
        { id: "wwwor0bsS7U", title: "Mood vs Tone Explained (Literary Elements Made Simple)", channel: "mrsmctutor",
          why: "A second explanation of tone against mood. It was not watched, so preview it first." }
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  video: { id: "FP_DGIumkho", title: "Mood and Tone Mini Lesson with Terms and Examples- Perfect for Middle School!", channel: "Teaching Intentionally",
    why: "A short lesson on tone and mood with examples, made for middle school." },

  parts: [
    { title: "Same Words, Opposite Meaning", s: [
      "Picture two moments, and in both of them someone says the very same three words.",
      "Read them one at a time, and listen for what each person really means.",
      "",
      "[ex] You carry a heavy box up the stairs for your grandmother, and she smiles and says, “You’re a big help.”",
      "",
      "[ex] You knock over a can of paint, and your brother looks at the spill and says, “You’re a big help.”",
      "",
      "The first one is a thank you and the second one is a joke with a sting in it, even though the words never changed.",
      "So where did the meaning come from, if it wasn't in the words themselves?"
    ]},

    { title: "What Tone Is", s: [
      "The difference was the {{tone}}, which is the attitude of the speaker toward the person, the subject or the thing being talked about.",
      "An {{attitude}} is how someone feels about something, whether that is thankful, bored, proud or annoyed.",
      "The second “big help” is also an example of {{sarcasm}}, which is saying the opposite of what you mean so that it stings or makes fun.",
      "",
      "[walk] Say the same three words two ways.",
      "[step] Say it after Grandma's boxes are up the stairs, and the tone is thankful. || SAID WHEN: the boxes are carried\nTONE: thankful",
      "[step] Say it after the paint spills, and the tone is sarcastic. || SAID WHEN: the paint spills\nTONE: sarcastic",
      "",
      "When you talk, your voice carries the tone, but a writer has no voice on the page, so he has to put it somewhere else.",
      "He puts it in the words he picks and the details he includes, and that is where you'll look."
    ]},

    { title: "The Clues Are in the Words", s: [
      "A writer shows his attitude through the words and details he chooses, so the clue words are your evidence.",
      "Here are two sentences about one room, and the only thing that changes is the writer's feeling.",
      "",
      "[ex] The cottage was cozy, with a crackling fire and a cat asleep on the rug.",
      "",
      "[ex] The cottage was cramped, with a smoky fire and a scruffy cat glaring from the rug.",
      "",
      "Both sentences describe the same room, but the first writer likes it and the second one doesn't.",
      "",
      "[walk] Go from the clue words to the tone.",
      "[step] In the first cottage the clue words are cozy, crackling and asleep, and they are all warm and gentle. || CLUE WORDS: cozy, crackling, asleep\nTONE: warm",
      "[step] In the second cottage the clue words are cramped, smoky and glaring, and they are all harsh. || CLUE WORDS: cramped, smoky, glaring\nTONE: unfriendly",
      "",
      "Look for the words that carry a feeling, and then ask what attitude would make a writer choose them.",
      "That one question is the whole skill, and you'll ask it three times on the poem."
    ]},

    { title: "Tone and Mood", s: [
      "One more word belongs here, and it is {{mood}}, which is the feeling you get as a reader.",
      "Tone is what the writer feels about the subject, and mood is what the writing makes you feel, and the two are often close but they aren't the same thing.",
      "This lesson is about tone, so the question to keep asking is how the writer feels, and which words show it."
    ]},

    { title: "A Smile That Hides Something", s: [
      "Your book uses a poem by Langston Hughes for this skill, but that poem is still under copyright, so we're using a different one here.",
      "It is “We Wear the Mask” by Paul Laurence Dunbar, an American poet, and he published it in 1896.",
      "The mask in the poem isn't a real mask, because it means a smile worn over how a person really feels.",
      "Many readers hear the “we” as Black Americans of Dunbar's time, who often had to hide their anger and sorrow, and the poem also fits anyone who has smiled while hurting.",
      "Two words will help, because {{guile}} means tricks and cleverness meant to fool people, and {{vile}} means rotten and awful."
    ]},

    { title: "The First Stanza", s: [
      "[story] We wear the mask that grins and lies,",
      "It hides our cheeks and shades our eyes,",
      "This debt we pay to human guile;",
      "With torn and bleeding hearts we smile,",
      "And mouth with myriad subtleties.",
    ]},

    { title: "Stop One: Find the Clue Words", s: [
      "In plain words the speaker says that people wear a smiling mask that hides their face, and they wear it because of other people's tricks.",
      "Underneath the smile their hearts are hurt, and that is the part to look at.",
      "",
      "[walk] Go from the clue words to the tone.",
      "[step] The mask grins and lies, so the cheerful face isn't true. || CLUE: grins and lies\nMEANS: the smile is fake",
      "[step] The hearts are torn and bleeding, so the real feeling is pain. || CLUE: torn and bleeding hearts\nMEANS: the real feeling is hurt",
      "[step] Put the two together, and the tone is sad and bitter. || TONE: sad and bitter",
      "",
      "The surface says cheerful and the words underneath say hurt, which is exactly the gap the poem is about.",
      "Keep that gap in mind as you read the next stanza, because the tone is about to move."
    ]},

    { title: "The Second Stanza", s: [
      "[story] Why should the world be over-wise,",
      "In counting all our tears and sighs?",
      "Nay, let them only see us, while",
      "We wear the mask.",
    ]},

    { title: "Stop Two: A Different Tone", s: [
      "Here over-wise means too nosy and too sure it knows, and nay means no.",
      "The speaker is asking why the world should get to count his tears, and the answer is that it shouldn't.",
      "",
      "[walk] Go from the clue words to the tone.",
      "[step] He begins with a sharp question, why should the world count our tears and sighs. || CLUE: Why should the world\nMEANS: he is pushing back",
      "[step] Then he says no, let them only see the mask, which is a refusal to show his pain. || CLUE: Nay, let them only see us\nMEANS: he refuses",
      "[step] Put the two together, and the tone has changed to defiant. || TONE: defiant",
      "",
      "Notice that the tone moved between stanzas, because a writer's attitude can shift as the poem goes on.",
      "So don't name one tone for a whole poem until you've read all of it, and watch for the shift."
    ]},

    { title: "The Third Stanza", s: [
      "[story] We smile, but, O great Christ, our cries",
      "To thee from tortured souls arise.",
      "We sing, but oh the clay is vile",
      "Beneath our feet, and long the mile;",
      "But let the world dream otherwise,",
      "We wear the mask!",
    ]},

    { title: "Stop Three: The Cry Underneath", s: [
      "In plain words they smile and they sing, but their cries rise up to Christ from tortured souls, and the ground under their feet is rotten and the road is long.",
      "Then they say the world can go on believing what it likes, and they will keep the mask on.",
      "",
      "[walk] Go from the clue words to the tone.",
      "[step] A cry to Christ from tortured souls is a prayer of real pain. || CLUE: O great Christ, tortured souls\nMEANS: deep pain",
      "[step] The clay is vile and the mile is long, so the road is foul and hard and tiring. || CLUE: vile, long the mile\nMEANS: tired and worn",
      "[step] Put the two together, and the tone is weary and aching. || TONE: weary and aching"
    ]},

    { title: "Hearing the Whole Poem", s: [
      "Read across the chart, and you'll see that the tone moved from sad and bitter to defiant to weary and aching.",
      "Each row has the clue words on one side and the tone they point to on the other.",
      "",
      "[walk] The tone chart.",
      "[step] Read across each row, from the stanza, to the clue words, to the tone. || " + table(CHART),
      "",
      "Notice that every stanza says smile and mask on the surface, and not one of them has a cheerful tone, because the writer's attitude is in the words about the hurt.",
      "That's the lesson in one poem, which is that the tone can be the opposite of the surface.",
      "",
      "[verse] Proverbs 15:1 says, “A soft answer turneth away wrath: but grievous words stir up anger.”",
      "",
      "That verse is about how the way you say something matters as much as what you say, which is the same lesson from the other side.",
      "Now it is your turn to listen, because the questions below ask for the tone and the word that shows it."
    ]}
  ],

  words: [
    ["Tone", "The attitude a writer or speaker takes toward the audience, the subject or a character.", 6],
    ["Attitude", "How a person feels about something.", 7],
    ["Sarcasm", "Saying the opposite of what you mean so that it stings or makes fun.", 8],
    ["Mood", "The feeling a reader gets from a piece of writing.", 24],
    ["Guile", "Tricks and cleverness meant to fool people.", 31],
    ["Vile", "Rotten and awful.", 31]
  ],

  vocabQuestions: [
    { q: "What is <i>tone</i>?",
      choices: ["The attitude a writer or speaker takes toward the subject", "The loudness of a voice", "The last line of a poem", "The length of a story"],
      right: 0, why: "Tone is the attitude, and a writer shows it through his words." },
    { q: "She said, “I love being stuck in traffic,” and rolled her eyes. What does <i>attitude</i> mean?",
      choices: ["A kind of car", "How a person feels about something", "A road sign", "A loud noise"],
      right: 1, why: "Attitude is how someone feels about something." },
    { q: "Your friend says, “Great weather,” in the middle of a storm. What is that, <i>sarcasm</i>?",
      choices: ["A weather report", "A fear of storms", "Saying the opposite of what you mean so it stings or makes fun", "A kind of poem"],
      right: 2, why: "Sarcasm says the opposite of what is meant." },
    { q: "What is <i>mood</i>?",
      choices: ["What the writer thinks of the subject", "A character's name", "A rhyme", "The feeling a reader gets from the writing"],
      right: 3, why: "Mood is the reader's feeling, and tone is the writer's attitude." },
    { q: "The thief fooled the shopkeeper with <i>guile</i>. What does guile mean?",
      choices: ["Tricks and cleverness meant to fool people", "Great strength", "A loud voice", "A gift"],
      right: 0, why: "Guile is trickery." },
    { q: "The milk had gone sour, and the smell was <i>vile</i>. What does vile mean?",
      choices: ["Sweet", "Rotten and awful", "Quiet", "Fresh"],
      right: 1, why: "A sour, rotten smell is vile." }
  ],

  questions: [
    { q: "What is tone?", find: [6],
      hint: "Read What Tone Is.",
      choices: [
        "A kind of rhyme",
        "The speed at which a poem is read",
        "The attitude the speaker or writer takes toward the subject",
        "The title of a story"
      ], right: 2,
      why: "Tone is the attitude of the speaker or writer." },

    { q: "Your brother looks at your paint spill and says, “You’re a big help.” What is the tone?", find: [11],
      hint: "Read What Tone Is.",
      choices: [
        "Thankful",
        "Sarcastic",
        "Proud",
        "Sleepy"
      ], right: 1,
      why: "The words say help, and the meaning is the opposite, which is sarcasm." },

    { q: "What is sarcasm?", find: [8],
      hint: "Read What Tone Is.",
      choices: [
        "Saying exactly what you mean",
        "Telling a long story",
        "Whispering a secret",
        "Saying the opposite of what you mean so that it stings or makes fun"
      ], right: 3,
      why: "Sarcasm means the opposite of the words." },

    { q: "A writer can't use his voice on the page. How does he show tone?", find: [14],
      hint: "Read The Clues Are in the Words.",
      choices: [
        "Through the words and details he chooses",
        "By drawing a picture",
        "By making the print larger",
        "By ending with a question"
      ], right: 0,
      why: "Tone comes through word choice and details." },

    { q: "In the cottage sentence “cramped,” “smoky” and “glaring” are the clue words. What tone do they show?", find: [21],
      hint: "Read The Clues Are in the Words.",
      choices: [
        "Warm",
        "Unfriendly",
        "Joyful",
        "Sleepy"
      ], right: 1,
      why: "Cramped, smoky and glaring are harsh words." },

    { q: "Which of these is the reader's feeling, and not the writer's attitude?", find: [24],
      hint: "Read Tone and Mood.",
      choices: [
        "Tone",
        "Attitude",
        "Mood",
        "Sarcasm"
      ], right: 2,
      why: "Mood is what the writing makes the reader feel." },

    { q: "In the first stanza, what do the words “torn and bleeding hearts” tell you?", find: [35],
      hint: "Read The First Stanza and Stop One.",
      choices: [
        "The speakers are happy.",
        "The speakers are sleepy.",
        "The speakers are angry at the mask.",
        "Under the smile the speakers are badly hurt."
      ], right: 3,
      why: "Torn and bleeding hearts are the real feeling under the smile." },

    { q: "In the first stanza, what does it mean that the mask “grins and lies”?", find: [40],
      hint: "Read Stop One.",
      choices: [
        "The cheerful face is not the true feeling.",
        "The speakers are telling jokes.",
        "The mask is made of paper.",
        "The speakers are laughing at a friend."
      ], right: 0,
      why: "Grins and lies means the smile is fake." },

    { q: "In the second stanza the speaker says, “Nay, let them only see us, while we wear the mask.” What is the tone?", find: [53],
      hint: "Read Stop Two.",
      choices: [
        "Silly",
        "Defiant",
        "Bored",
        "Thankful"
      ], right: 1,
      why: "He refuses to let the world see his pain." },

    { q: "Which words in the third stanza best show the tone is weary and aching?", find: [66],
      hint: "Read Stop Three.",
      choices: [
        "We smile and we sing",
        "Let the world dream otherwise",
        "Tortured souls, vile and long the mile",
        "We wear the mask"
      ], right: 2,
      why: "Tortured souls, vile and long the mile are all words of pain and tiredness." },

    { q: "Every stanza talks about smiling and the mask, so why isn't the tone of the poem cheerful?", find: [73],
      hint: "Read Hearing the Whole Poem.",
      choices: [
        "Because the poem is very short",
        "Because the poet didn't like smiling",
        "Because the poem has no rhymes",
        "Because the writer's attitude is in the words about the hurt underneath"
      ], right: 3,
      why: "The clue words about the pain show the real tone." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before anything else, read the poem through one stanza at a time, and at each of the three stops say the tone aloud before you read the chart.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the lesson, and {v} more questions about those words. {T} questions in all.",
    "When those are done, say one sentence out loud two ways, once kindly and once sarcastically, and write down the sentence and what changed in your voice.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
