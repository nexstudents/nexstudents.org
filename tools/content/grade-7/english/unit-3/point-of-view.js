/* english/point-of-view
   Grade 7 · English · Unit 3 (Do the Right Thing), lesson 2. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. The teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them.

   SOURCE: Holt Elements of Literature, First Course (2000), the Elements of Literature
   essay on Point of View, pp202-203. THE PAGES WERE NOT READ (the gather ran out of budget),
   so the lesson uses the standard definitions the course plan names: first person (a
   character tells it, "I"), third-person limited (an outside narrator who knows one
   character's thoughts), omniscient (an outside narrator who knows everyone's thoughts).
   The two-question method (is the narrator in the story, whose thoughts can I hear) is
   ours, from the plan.

   EXAMPLES: one line is a real public-domain first-person line, Booker T. Washington's
   "In the first place, I found that all the other children wore hats or caps on their
   heads, and I had neither hat nor cap." (Up from Slavery, Project Gutenberg #2376,
   checked word for word; Kolten read it in U2-L5.) The other tellings are OUR REWRITE of
   one moment of "After Twenty Years" (a man strikes a match while a policeman watches),
   labelled as ours in the text, and a made-up girl named Maya. No other source text.

   ⚠️ ADDED FROM THE RECORD: nothing historical. "Maya" and the floorboard are invented.

   ⚠️ For Paul: the videos are previews, not watched. The scripture (Proverbs 18:13) is a
   working choice, his call. */
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
  ["Kind", "Narrator in the story?", "Minds we can enter", "Clue words"],
  ["First person", "Yes", "The narrator's only", "I, me, we"],
  ["Third-person limited", "No", "One character's", "he or she, one mind"],
  ["Omniscient", "No", "Everyone's", "he or she, many minds"],
];
module.exports = {
  id: "english/point-of-view",
  slug: "point-of-view",
  title: "Point of View",
  unit: "Literature · U3-L2",
  seq: { unit: 3, unitTitle: "Do the Right Thing", n: 2 },

  plan: {
    objective: "Tell the three main points of view apart (first person, third-person limited, omniscient) by asking who tells the story and whose thoughts we can hear.",
    markers: [
      "COURSE PLAN (Holt Elements of Literature pp202-203, not read): point of view covers omniscient, first-person and third-person limited. Standard definitions used.",
      "OURS: two questions that sort any story. Is the narrator in the story? Whose thoughts can I hear?",
    ],
    method: "ASK TWO QUESTIONS. IS THE NARRATOR IN THE STORY? IF YES, IT IS FIRST PERSON. IF NO, WHOSE THOUGHTS CAN I HEAR? ONE CHARACTER'S IS THIRD-PERSON LIMITED, EVERYONE'S IS OMNISCIENT.",
    exampleOnly: [
      "Maya and the floorboard, and the doorway scene retold three ways. They are our own worlds for the method. The kinds of point of view are the lesson, not the sister's door.",
    ],
    digitize: "Reading engine with no long story. One real first-person line from a book he has read, one scene retold three ways, a Watch It Worked that sorts three passages with the two questions, and a chart. Questions put a short passage in the question and ask which kind it is.",
    unclear: [],
  },
  natural: "2026-11-07",
  findsAt: 48,

  shelf: { grades: [7], subject: "English",
    blurb: "The same moment told three ways. Two questions that tell you who is narrating and how much of a character's mind you get to see.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "One scene retold in first person, third-person limited and omniscient",
      "A walk that sorts three passages with two questions",
      "A chart of the three kinds to keep",
      "Five word cards, each with a check question",
    ] },
  eyebrow: ["English 7", "U3-L2", "Do the Right Thing"],
  dek: "The same moment feels different depending on who tells it. Two quick questions sort any story into first person, third-person limited or omniscient.",
  scripture: {
    ref: "Proverbs 18:13",
    text: "He that answereth a matter before he heareth it, it is folly and shame unto him.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain what a narrator and a point of view are, tell first person, third-person limited and omniscient apart by asking two questions, and say how the choice changes what the reader knows."
      ]},
      { h: "Key Concepts", p: [
        "Question one asks whether the narrator is a character in the story. If so, it is first person. Question two applies only to outside narrators and asks how many characters' thoughts the narrator shows: one is limited, many is omniscient.",
        "The narrator is not always the author. A writer often builds a voice to do the telling."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Seeing the word I and calling it first person. Inside a character's spoken words, I is just a character talking, and the narrator is still outside. Check the narration, the words outside the quotation marks.",
        "Mixing up limited and omniscient. The test is only how many minds the narrator opens."
      ]},
      { h: "Teaching Suggestion", p: [
        "Pick any page of any book he is reading and have him ask the two questions out loud. Ask him to rewrite one sentence in another point of view, as the lesson does with the doorway scene.",
        "The Holt essay (pp202-203) was not read for this lesson, so check the book's own wording of the three terms and use it if it differs."
      ]},
      { h: "Book Pages", p: [
        "Holt Elements of Literature, First Course (2000), pages 202 to 203. Read free on archive.org: https://archive.org/details/elementsoflitera0000unse_i0h7/page/202/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "sThpnSEJacM", title: "Point of View Explained: First Person vs Third Person in Stories", channel: "Abbie Emmons",
          why: "Covers first person, third-person limited and omniscient with examples, the same three kinds as this lesson." },
        { id: "SQpDzenoLLs", title: "Types of Point of View", channel: "Michelle Haberberger",
          why: "A quick review of all the types, good for a second look after the lesson." }
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Two Tellings of One Argument", s: [
      "Imagine two kids both tell you about the same argument at lunch, and by the end you hardly believe it was the same argument.",
      "One says he only asked for his seat back, and the other says she was pushed before she said a word, and each of them describes what happened and what he or she was thinking at the time.",
      "That is what this lesson is about, because a story changes depending on who tells it and whose mind the reader gets to look into.",
      "Two questions will sort any story you pick up, and each takes about ten seconds."
    ]},

    { title: "Question One: Is the Teller in the Story?", s: [
      "The {{narrator}} is the voice that tells the story, and it isn't always the author, because writers often invent a voice to do the telling.",
      "The way a story is told is its {{point of view}}, which means who is telling it and how much the reader gets to know.",
      "The first question is whether the narrator is a character in the story, and if he is, he uses words like I, me and we, and the story is told in {{first person}}.",
      "",
      "[ex] In the first place, I found that all the other children wore hats or caps on their heads, and I had neither hat nor cap.",
      "",
      "That's Booker T. Washington telling about his first day at school, in the book you met in Unit 2, and the word I tells you he is a character in his own story.",
      "When the narrator stays outside and calls everybody he, she or they, the story is told in the third person, and then you need the second question."
    ]},

    { title: "Question Two: Whose Thoughts Can I Hear?", s: [
      "In a third-person story the narrator is outside the story, but he may still look inside people's heads, so the second question is how many heads he looks into.",
      "If he looks into the mind of only one character and tells you only what that one character thinks and feels, it is {{third-person limited}}, because the reader knows only what that character knows.",
      "If he looks into everybody's mind, and can tell you what two or three characters are thinking at the same moment, it is {{omniscient}}, which means all-knowing.",
      "The best way to see the difference is to tell one small moment all three ways, using a moment from After Twenty Years that we've retold in our own words, so these three versions are ours and not O. Henry's.",
      "Here is the moment in first person, told by Bob, the man in the doorway, so every I is Bob.",
      "",
      "[ex] I struck a match and lit my cigar, and I saw the officer watching my face, so I wondered whether he believed my story.",
      "",
      "Notice that the narrator is Bob himself, so everything comes through his eyes and nobody else's.",
      "Here is the same moment in third-person limited, where the narrator is outside the story but stays with Bob.",
      "",
      "[ex] Bob struck a match and lit his cigar, and he saw the officer watching his face, so he wondered whether the officer believed his story.",
      "",
      "Notice that I became he, which tells you the narrator stepped outside, and that you still only hear Bob's thoughts.",
      "And here it is omniscient, where the narrator also opens the officer's mind.",
      "",
      "[ex] Bob struck a match and lit his cigar, and he wondered whether the officer believed his story, while the officer, watching the flame light Bob's face, was thinking about something else entirely.",
      "",
      "Only one thing changed from the second version to the third, which is that the reader got to hear a second person's thoughts, and that one change is the whole difference between limited and omniscient.",
      "So the two questions give three different answers for one small moment, and the only thing that moved was who is telling it and how much of their heads we see."
    ]},

    { title: "Sorting With the Two Questions", s: [
      "Now try the two questions on three new passages, one at a time, and notice that each answer comes from the same two questions.",
      "Read each passage once, ask question one first, and only ask question two if the narrator turns out to be outside.",
      "",
      "[walk] Sort three passages about a girl and her sister's door.",
      "[step] The first passage says I tiptoed past my sister's door, sure that the floorboard would creak, and the I means the narrator is a character, so it is first person. || \"I tiptoed past my sister's door, sure that the floorboard would creak.\"\nQUESTION 1: narrator in the story?  YES (I)\nANSWER: first person",
      "[step] The second says Maya tiptoed past her sister's door, sure that the floorboard would creak, and the narrator is outside and only Maya's thoughts are shown, so it is third-person limited. || \"Maya tiptoed past her sister's door, sure that the floorboard would creak.\"\nQUESTION 1: narrator in the story?  NO\nQUESTION 2: whose thoughts?  Maya's only\nANSWER: third-person limited",
      "[step] The third says Maya tiptoed past her sister's door, sure the floorboard would creak, while behind the door her sister lay awake, hoping she would, and it opens two minds, so it is omniscient. || \"Maya tiptoed past, sure the floorboard would creak, while behind the door her sister lay awake, hoping she would.\"\nQUESTION 1: narrator in the story?  NO\nQUESTION 2: whose thoughts?  Maya's AND her sister's\nANSWER: omniscient",
      "",
      "Notice that between the second and third passages the only thing that changed was how many minds the narrator opened, and that is why question two matters.",
      "And between the first and second passages the only thing that changed was I into Maya, which is why question one matters."
    ]},

    { title: "A Trap to Watch For", s: [
      "One trap catches almost everyone, which is that the word I can appear in a third-person story, inside a character's spoken words.",
      "Here is a line that looks like first person and isn't.",
      "",
      "[ex] “I think she's asleep,” Maya whispered, and she tiptoed on down the hall.",
      "",
      "Maya says I, but the narrator doesn't, because the narrator calls her Maya and tells about her from the outside, so this is still third person.",
      "So check the narration, meaning the words outside the quotation marks, and ignore what the characters say."
    ]},

    { title: "A Chart to Keep", s: [
      "Here are the three kinds side by side, with the two questions across the top, so you can check yourself on any story.",
      "The chart reads left to right in the same order you ask the questions.",
      "",
      "[walk] The three kinds of point of view.",
      "[step] Read across each row, where the first answer comes from question one, and the next two come from question two. || " + table(CHART),
      "",
      "A writer picks a point of view on purpose, because it decides what the reader knows and what the reader can only wonder about, so it is worth naming every time you read.",
      "That is the whole skill for this lesson, and the next two stories give you more practice."
    ]},

    { title: "Whose Side Do You Hear?", s: [
      "In first person you can never know what anyone else is thinking, in limited you stay close to one person's worries, and in omniscient you can see how people misunderstand each other.",
      "Go back to the two kids and the argument at lunch, because each of them told it in first person, and each was sure of the story, since neither could see inside the other's head.",
      "",
      "[verse] Proverbs 18:13 says, “He that answereth a matter before he heareth it, it is folly and shame unto him.”",
      "",
      "That proverb warns against settling a matter before you have heard all of it, which is why a narrator who shows you only one side is worth a second look.",
      "The next lessons build on this, with one about making predictions as you read and one about a story told in third-person limited from start to finish."
    ]}
  ],

  words: [
    ["Narrator", "The voice that tells the story.", 4],
    ["Point of view", "Who tells the story and how much the reader gets to know.", 5],
    ["First person", "The narrator is a character in the story and uses I, me and we.", 6],
    ["Third-person limited", "An outside narrator who tells the thoughts of only one character.", 11],
    ["Omniscient", "An outside narrator who knows the thoughts of everyone, which means all-knowing.", 12]
  ],

  vocabQuestions: [
    { q: "What is a <i>narrator</i>?",
      choices: ["The voice that tells the story", "The main character, always", "The title of the story", "The last sentence"],
      right: 0, why: "The narrator is the voice that tells the story." },
    { q: "What does <i>point of view</i> mean in a story?",
      choices: ["How long the story is", "Who tells the story and how much the reader gets to know", "Where the story takes place", "What the story teaches"],
      right: 1, why: "Point of view is who tells it and how much the reader knows." },
    { q: "Which of these is a sign of <i>first person</i>?",
      choices: ["The narrator says I, me and we", "The narrator calls everyone he or she", "The narrator knows everyone's thoughts", "The story has no characters"],
      right: 0, why: "A first-person narrator is a character who says I." },
    { q: "What does <i>third-person limited</i> show the reader?",
      choices: ["The thoughts of every character", "The thoughts of only one character", "No thoughts at all", "The author's thoughts"],
      right: 1, why: "Limited means one character's thoughts." },
    { q: "What does <i>omniscient</i> mean?",
      choices: ["All-knowing, able to tell everyone's thoughts", "Written in the first person", "Told by a character", "Very short"],
      right: 0, why: "Omniscient means all-knowing." }
  ],

  questions: [
    { q: "What is a point of view?", find: [5],
      hint: "Read Question One.",
      choices: [
        "Who tells the story and how much the reader gets to know",
        "The place where the story happens",
        "The problem the main character faces",
        "The lesson the story teaches"
      ], right: 0,
      why: "Point of view is who is telling it and how much the reader gets to know." },

    { q: "Which of these is told in first person?", find: [6],
      hint: "Read Question One.",
      choices: [
        "Ruben grabbed his bag and ran for the bus.",
        "Ruben ran for the bus, and the driver, watching in the mirror, hoped he would make it.",
        "I grabbed my bag and ran for the bus.",
        "The bus pulled away while Ruben waved from the curb."
      ], right: 2,
      why: "The narrator is a character who says I." },

    { q: "A story says, “I think we should go in,” Dev said, and he walked toward the door. Why is this not first person?", find: [35],
      hint: "Read A Trap to Watch For.",
      choices: [
        "Because the story is in the past tense",
        "Because the I is inside what a character said, and the narrator calls him Dev",
        "Because Dev says only one sentence",
        "Because the narrator has no name"
      ], right: 1,
      why: "The I belongs to a character's speech, and the narrator is outside." },

    { q: "Read this: Ana opened the oven and smiled. The cake had risen perfectly, and she couldn't wait to see her dad's face. Which point of view is it?", find: [11],
      hint: "Ask the two questions. Is the narrator in the story? Whose thoughts do you hear?",
      choices: [
        "First person, because Ana is the main character",
        "Third-person limited",
        "Omniscient",
        "First person, because it says she"
      ], right: 1,
      why: "The narrator is outside and shows only Ana's thoughts." },

    { q: "Read this: Ana smiled as she opened the oven, proud of her cake. In the next room her dad pretended to read the paper, but he was really hoping to be called in first. Which point of view is it?", find: [12],
      hint: "Ask the two questions. How many minds do you hear?",
      choices: [
        "First person",
        "Third-person limited",
        "Omniscient",
        "Neither, because there are no thoughts"
      ], right: 2,
      why: "The narrator shows Ana's thoughts and her dad's." },

    { q: "In a third-person story, which question separates limited from omniscient?", find: [10],
      hint: "Read Question Two.",
      choices: [
        "How many pages does the story have?",
        "How many characters' thoughts does the narrator show?",
        "Does the story use quotation marks?",
        "Is the story in the past tense?"
      ], right: 1,
      why: "One mind is limited, and many minds is omniscient." },

    { q: "Why is the third retelling of the doorway moment omniscient?", find: [20],
      hint: "Read Question Two.",
      choices: [
        "Because Bob says I",
        "Because it opens the officer's mind as well as Bob's",
        "Because it is the longest of the three",
        "Because it has no names in it"
      ], right: 1,
      why: "It tells what Bob wondered and what the officer was thinking." },

    { q: "What can a first-person narrator never tell you for certain?", find: [43],
      hint: "Read Whose Side Do You Hear?",
      choices: [
        "What the narrator himself saw",
        "What the narrator himself felt",
        "What the other characters are really thinking",
        "What happened in the narrator's own life"
      ], right: 2,
      why: "A first-person narrator can't see inside anyone else's head." },

    { q: "Which pair of questions sorts a story's point of view?", find: [3],
      hint: "Read the first section and Question Two.",
      choices: [
        "How long is it, and how many characters does it have?",
        "Where does it happen, and when?",
        "Is the narrator in the story, and whose thoughts can I hear?",
        "Who wrote it, and what is the title?"
      ], right: 2,
      why: "Those two questions give you first person, limited or omniscient." },

    { q: "Why can two kids who tell the same argument in first person tell it so differently?", find: [44],
      hint: "Read Whose Side Do You Hear?",
      choices: [
        "Because each can see only his or her own side",
        "Because one of them always lies",
        "Because first person is always too short",
        "Because the argument never happened"
      ], right: 0,
      why: "Neither one can see inside the other's head." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before you start, open any book you are reading and read one paragraph, then say on a sheet of paper whether the narrator is in the story and whose thoughts you can hear, without looking back at the lesson.",
    "Then work through the {c} word cards at the top of the page, {q} questions, and {v} more questions about those words. {T} questions in all.",
    "When those are done, take one sentence from the paragraph you chose and rewrite it in a different point of view, and say which one you used.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
