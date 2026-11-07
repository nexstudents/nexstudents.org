/* english/third-person-limited-point-of-view
   Grade 7 · English · Unit 3 (Do the Right Thing), lesson 4. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. The teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them.

   SOURCE: Holt Elements of Literature, First Course (2000), pp216-225, via the week 10-11
   packet. THE PACKET HAS NO NOTES ON THIS SELECTION (not captured), so the skill follows the
   course plan: third-person limited point of view. The book's story, "The No-Guitar Blues"
   by Gary Soto, is copyrighted and is NOT used.

   ⚠️ STORY PICK, CLAUDE'S, FOR PAUL TO SWAP: Sarah Orne Jewett, "A White Heron" (1886),
   Project Gutenberg #74980, "The best stories of Sarah Orne Jewett, Volume 2 (of 2)"
   (verified: the title page reads that title, author Sarah Orne Jewett, and the story is
   the first in the volume). Why: a nine-year-old girl, Sylvia, must choose between ten
   dollars her family badly needs and the life of a bird, which is a choice of conscience
   like Holt's boy who gives away the reward money; the narrator is an outside "she" who
   stays almost wholly inside Sylvia's mind; no graphic violence is shown (the hunter's gun
   is mentioned in lines we leave out). The narrator does sometimes comment in her own
   voice, and the lesson says so in one line. The story has one passage that dips into the
   hunter's thoughts ("He was sure from the way the shy little girl looked..."), and that
   paragraph is LEFT OUT so the excerpt stays in Sylvia's head. The words are Jewett's
   exactly, split to one sentence per entry, with no changes at all; the excerpt is ten
   short passages from sections I and II, the paragraphs between are left out, and the
   lesson sets up the plot in our own words first.

   ⚠️ ADDED FROM THE RECORD: "A White Heron" was written by Sarah Orne Jewett and published
   in 1886 (well-known, and our setup says it). The plot summary in "Meet Sylvia" is ours.
   "ornithologist" is Jewett's word in a passage we left out, so it is taught in the setup.

   ⚠️ For Paul: the videos are previews, not watched. The scripture (Proverbs 12:10) is a
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
const SORT = [
  ["Line from the story", "Inside Sylvia?"],
  ["Sylvia’s heart gave a wild beat", "Yes, her feeling"],
  ["I would give ten dollars", "No, his words"],
  ["Mrs. Tilley gave amazed attention", "No, what she did"],
  ["Sylvia cannot speak", "Yes, her struggle"],
];
module.exports = {
  id: "english/third-person-limited-point-of-view",
  slug: "third-person-limited-point-of-view",
  title: "Third-Person Limited Point of View",
  unit: "Literature · U3-L4",
  seq: { unit: 3, unitTitle: "Do the Right Thing", n: 4 },

  plan: {
    objective: "Identify a third-person limited narrator and explain how seeing only one character's thoughts shapes what the reader knows and feels.",
    markers: [
      "COURSE PLAN (Holt pp216-225, not read): third-person limited point of view in The No-Guitar Blues; a boy's choice of conscience.",
      "OURS: mark which lines are inside the one character's mind, name what the reader cannot know, and rewrite a line from another character's view.",
    ],
    method: "IN THIRD-PERSON LIMITED THE NARRATOR STAYS WITH ONE CHARACTER. MARK THE LINES THAT SHOW HER THOUGHTS, THEN ASK WHAT I CAN'T KNOW BECAUSE THE NARRATOR NEVER LEAVES HER.",
    exampleOnly: [
      "The hunter, the pine tree and the ten dollars are Jewett's story, which carries the skill. The skill is the lesson, not birds.",
    ],
    digitize: "Reading engine on a six-section excerpt. A table that sorts four lines by whether they are inside Sylvia's mind, a Watch It Worked on what the reader can't know, and a short rewrite of one line from the hunter's view.",
    unclear: [
      "Which public-domain story. The pick is Claude's, in the header, and goes to Paul to swap.",
    ],
  },
  natural: "2026-11-07",
  findsAt: 84,

  shelf: { grades: [7], subject: "English",
    blurb: "A nine-year-old girl in the woods has a secret worth ten dollars. What it means when a story stays inside one character's head.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "An excerpt from Sarah Orne Jewett's A White Heron, read aloud one line at a time",
      "A sort of which lines are inside her mind",
      "A look at what the reader can't know, and a rewrite from another view",
      "Six word cards, each with a check question",
    ] },
  eyebrow: ["English 7", "U3-L4", "Do the Right Thing"],
  dek: "When a story stays inside one character's head, you feel what she feels and you only know what she knows.",
  scripture: {
    ref: "Proverbs 12:10",
    text: "A righteous man regardeth the life of his beast: but the tender mercies of the wicked are cruel.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will identify a third-person limited narrator, mark the lines that show one character's thoughts, say what the reader cannot know because the narrator stays with her, and explain how that shapes what the reader feels."
      ]},
      { h: "Key Concepts", p: [
        "In third-person limited the narrator is outside the story and uses he or she, but shows the thoughts of only one character. Everything else is seen from the outside: other characters' words, actions and faces.",
        "The effect is closeness to one character and a gap about everyone else. The reader feels what she feels and cannot be sure what the others think."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling it first person because the story feels close to the girl. Check the pronouns: the narrator says she and Sylvia, never I.",
        "Thinking any line about the hunter breaks the rule. The narrator can say what the hunter says and does. What she can't do is tell his thoughts."
      ]},
      { h: "Teaching Suggestion", p: [
        "Ask him to underline in two colors, one for lines inside Sylvia's mind and one for what she sees and hears. The story is an older one with long sentences, so it can be read in the three sittings the lesson breaks it into.",
        "The lesson does not decide whether Sylvia chose rightly. It asks how the point of view makes the reader feel her choice."
      ]},
      { h: "Book Pages", p: [
        "Holt Elements of Literature, First Course (2000), pages 216 to 225. Read free on archive.org: https://archive.org/details/elementsoflitera0000unse_i0h7/page/216/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "_YNXPW8Jnak", title: "3rd Person POV: See Everything with Omniscient, Limited, and Objective (Point of View Tutorial)", channel: "The ELA Connection",
          why: "Defines third-person limited with examples and sets it beside the other third-person types." },
        { id: "sThpnSEJacM", title: "Point of View Explained: First Person vs Third Person in Stories", channel: "Abbie Emmons",
          why: "A second look at all the points of view, from the last lesson." }
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "One Window Into a Story", s: [
      "Imagine watching a whole ball game through one small window, where you can see the player you are watching, and everything he sees, and nothing behind the walls.",
      "That is a good picture of {{third-person limited}}, the point of view you learned last lesson, where the narrator is outside the story but only lets you inside the head of one character.",
      "It changes the story in two ways, because you know only what that one character knows, and you feel close to her, since you are living inside her worries.",
      "This lesson reads one story that way and shows you how to spot it and what it does."
    ]},

    { title: "Two Tools for Reading One Mind", s: [
      "The first tool is to mark the lines that show the character's thoughts and feelings, and to tell them apart from lines that only show what she sees, hears or does.",
      "The second tool is to ask what you can't know, because the narrator stays with her and never goes into anyone else's mind.",
      "",
      "[ex] Maya stared at the empty seat beside her and wished the bus would hurry, while the boy across the aisle yawned and looked out the window.",
      "",
      "We are inside Maya, because we hear her wish, but we only see the boy yawn, so we can't say whether he is bored, tired or worried.",
      "That gap is what the narrator leaves open on purpose, and it is the second tool in action."
    ]},

    { title: "Meet Sylvia", s: [
      "The reading is from A White Heron, written by Sarah Orne Jewett and published in 1886, and this short setup is ours, while the reading itself is Jewett's own words.",
      "Sylvia is nine years old and lives in the woods with her grandmother, Mrs. Tilley, and one evening a young man with a gun stops by and stays the night.",
      "He is an {{ornithologist}}, which means a scientist who studies birds, and he is hunting for a rare white heron to add to his collection.",
      "Sylvia has seen that heron once, and he says he will pay ten dollars to anyone who can show him its nest, which is a great deal of money to a poor family.",
      "Jewett's sentences are long and her narrator sometimes comments in her own voice, but the narrator never leaves Sylvia's mind, so watch whose thoughts you hear."
    ]},

    { title: "The Stranger's Offer", s: [
      "[story] “You would know the heron if you saw it,” the stranger continued eagerly.",
      "“A queer tall white bird with soft feathers and long thin legs.",
      "And it would have a nest perhaps in the top of a high tree, made of sticks, something like a hawk’s nest.”",
      "",
      "[story] Sylvia’s heart gave a wild beat; she knew that strange white bird, and had once stolen softly near where it stood in some bright green swamp grass, away over at the other side of the woods.",
      "There was an open place where the sunshine always seemed strangely yellow and hot, where tall, nodding rushes grew, and her grandmother had warned her that she might sink in the soft black mud underneath and never be heard of more.",
      "Not far beyond were the salt marshes and beyond those was the sea, the sea which Sylvia wondered and dreamed about, but never had looked upon, though its great voice could often be heard above the noise of the woods on stormy nights.",
      "",
      "[story] “I can’t think of anything I should like so much as to find that heron’s nest,” the handsome stranger was saying.",
      "“I would give ten dollars to anybody who could show it to me,” he added desperately, “and I mean to spend my whole vacation hunting for it if need be.",
      "Perhaps it was only migrating, or had been chased out of its own region by some bird of prey.”",
      "Mrs. Tilley gave amazed attention to all this, but Sylvia still watched the toad, not divining, as she might have done at some calmer time, that the creature wished to get to its hole under the doorstep, and was much hindered by the unusual spectators at that hour of the evening.",
      "No amount of thought, that night, could decide how many wished-for treasures the ten dollars, so lightly spoken of, would buy.",
    ]},

    { title: "Sylvia's Plan", s: [
      "[story] Now she thought of the tree with a new excitement, for why, if one climbed it at break of day, could not one see all the world, and easily discover whence the white heron flew, and mark the place, and find the hidden nest?",
      "What a spirit of adventure, what wild ambition!",
      "What fancied triumph and delight and glory for the later morning when she could make known the secret!",
      "It was almost too real and too great for the childish heart to bear.",
      "",
      "[story] All night the door of the little house stood open, and the whippoorwills came and sang upon the very step.",
      "The young sportsman and his old hostess were sound asleep, but Sylvia’s great design kept her broad awake and watching.",
      "She forgot to think of sleep.",
      "The short summer night seemed as long as the winter darkness, and at last when the whippoorwills ceased, and she was afraid the morning would after all come too soon, she stole out of the house and followed the pasture path through the woods, hastening toward the open ground beyond, listening with a sense of comfort and companionship to the drowsy twitter of a half-awakened bird, whose perch she had jarred in passing.",
      "",
      "[story] There was the huge tree asleep yet in the paling moonlight, and small and hopeful Sylvia began with utmost bravery to mount to the top of it, with tingling, eager blood coursing the channels of her whole frame, with her bare feet and fingers, that pinched and held like bird’s claws to the monstrous ladder reaching up, up, almost to the sky itself.",
    ]},

    { title: "At the Top of the Pine", s: [
      "Now Sylvia climbs the old pine tree to look for the heron's nest, and the story takes us up with her.",
      "Notice how close the narrator stays to Sylvia the whole way up.",
      "[story] Sylvia’s face was like a pale star, if one had seen it from the ground, when the last thorny bough was past, and she stood trembling and tired but wholly triumphant, high in the tree-top.",
      "Yes, there was the sea with the dawning sun making a golden dazzle over it, and toward that glorious east flew two hawks with slow-moving pinions.",
      "How low they looked in the air from that height when before one had only seen them far up, and dark against the blue sky.",
      "Their gray feathers were as soft as moths; they seemed only a little way from the tree, and Sylvia felt as if she too could go flying away among the clouds.",
      "Westward, the woodlands and farms reached miles and miles into the distance; here and there were church steeples, and white villages; truly it was a vast and awesome world.",
      "",
      "[story] The child gives a long sigh a minute later when a company of shouting cat-birds comes also to the tree, and vexed by their fluttering and lawlessness the solemn heron goes away.",
      "She knows his secret now, the wild, light, slender bird that floats and wavers, and goes back like an arrow presently to his home in the green world beneath.",
      "Then Sylvia, well satisfied, makes her perilous way down again, not daring to look far below the branch she stands on, ready to cry sometimes because her fingers ache and her lamed feet slip.",
      "Wondering over and over again what the stranger would say to her, and what he would think when she told him how to find his way straight to the heron’s nest.",
    ]},

    { title: "She Does Not Speak", s: [
      "When Sylvia comes down, her grandmother and the young man are waiting, and he wants her to tell what she knows.",
      "Keep your eyes on whose thoughts the narrator gives you here.",
      "[story] But Sylvia does not speak after all, though the old grandmother fretfully rebukes her, and the young man’s kind appealing eyes are looking straight in her own.",
      "He can make them rich with money; he has promised it, and they are poor now.",
      "He is so well worth making happy, and he waits to hear the story she can tell.",
      "",
      "[story] No, she must keep silence!",
      "What is it that suddenly forbids her and makes her dumb?",
      "Has she been nine years growing, and now, when the great world for the first time puts out a hand to her, must she thrust it aside for a bird’s sake?",
      "The murmur of the pine’s green branches is in her ears, she remembers how the white heron came flying through the golden air and how they watched the sea and the morning together, and Sylvia cannot speak; she cannot tell the heron’s secret and give its life away.",
    ]},

    { title: "Whose Head Are We In?", s: [
      "Now go back and use the first tool, which is to sort lines by whether they show Sylvia's mind.",
      "A line is inside her mind only if it tells you what she feels, thinks or wants.",
      "",
      "[walk] Sort four lines from the story.",
      "[step] First Sylvia's heart gave a wild beat, which is a feeling, and it is hers, so it is inside her mind. || " + table(SORT.slice(0, 2)),
      "[step] Next the young man says he would give ten dollars, and those are his words as she hears them, so they are outside her mind. || " + table(SORT.slice(0, 3)),
      "[step] Then Mrs. Tilley gives amazed attention, which is something Sylvia can see her do, but not what she thinks, so it is outside. || " + table(SORT.slice(0, 4)),
      "[step] Last, Sylvia cannot speak, which is her own struggle, so it is inside her mind. || " + table(SORT),
      "",
      "Notice that the narrator never says what Mrs. Tilley or the young man is thinking, only what they say and do, and that is what makes the story limited.",
      "It is also why the story is third person and not first, because the narrator calls her Sylvia and she, and never says I."
    ]},

    { title: "What We Can't Know", s: [
      "Now use the second tool, which is to ask what the reader can't know.",
      "Look for the people whose minds the narrator never enters.",
      "",
      "[walk] Find the gaps in the excerpt.",
      "[step] We hear the young man's offer and his words, but never what he truly feels about the bird he wants, so the reader can't be sure. || GAP 1: his real thoughts about the heron",
      "[step] We see her grandmother's amazed attention and her rebuke, but not what she thinks about the money or about Sylvia's silence. || GAP 2: Mrs. Tilley's thoughts",
      "[step] And we see the young man's kind eyes waiting, but never what he feels when Sylvia stays quiet. || GAP 3: how he takes her silence",
      "",
      "Those gaps make Sylvia's choice feel lonelier, because everyone else is a face and a voice, and only she has a mind we can enter.",
      "That closeness is the other effect, since we feel her wish for the money, her love of the bird, and the weight of the secret as if they were ours."
    ]},

    { title: "The Same Moment From Another Head", s: [
      "One way to feel how limited a narrator is, is to move the narrator into someone else's head and see what changes.",
      "It works like moving a camera to a different seat in the stadium.",
      "",
      "[walk] Rewrite one moment from the young man's side, in our words and not Jewett's.",
      "[step] The story's line says the young man's kind appealing eyes are looking straight into her own, and it gives us nothing of his thoughts. || JEWETT: the young man’s kind appealing eyes are looking straight in her own",
      "[step] Our rewrite moves into his head, and says he looked straight into the girl's eyes and wondered why she would not answer. || OUR REWRITE: He looked straight into the girl's eyes and wondered why she would not answer.",
      "[step] Now we know what he thinks, but Sylvia's reason for staying silent has become a mystery, because the window has moved. || RESULT: his mind opens, hers closes",
      "",
      "That swap shows why a writer picks one head, because whoever's mind you enter, the story becomes theirs.",
      "Jewett chose Sylvia, so the story is about a small girl's secret, and we feel it from the inside."
    ]},

    { title: "A Voice Inside", s: [
      "Sylvia's choice is a choice of {{conscience}}, which is the inner sense of what is right and wrong that tells a person what she should do even when no one is watching.",
      "The point of view lets us feel her conscience working, because we are inside her when she hears it.",
      "",
      "[verse] Proverbs 12:10 says, “A righteous man regardeth the life of his beast: but the tender mercies of the wicked are cruel.”",
      "",
      "That proverb is about caring for the lives of creatures, and it fits a girl who held back a secret that would cost a bird its life.",
      "The next lessons in this unit look at tone and at stories where the narrator is a character who tells you what he did."
    ]}
  ],

  words: [
    ["Third-person limited", "An outside narrator who tells the thoughts of only one character.", 1],
    ["Conscience", "The inner sense of right and wrong that tells a person what she should do.", 79],
    ["Ornithologist", "A scientist who studies birds.", 11],
    ["Divining", "Guessing or realizing something.", 23],
    ["Triumphant", "Joyful because of a win or a success.", 36],
    ["Perilous", "Full of danger.", 43]
  ],

  vocabQuestions: [
    { q: "What does <i>third-person limited</i> show the reader?",
      choices: ["The thoughts of only one character", "The thoughts of every character", "Only the author's thoughts", "No thoughts at all"],
      right: 0, why: "Limited means one character's thoughts." },
    { q: "What is a <i>conscience</i>?",
      choices: ["The inner sense of right and wrong", "A kind of bird", "A very long sentence", "A promise to a friend"],
      right: 0, why: "A conscience tells a person what she should do." },
    { q: "An <i>ornithologist</i> would most likely study which of these?",
      choices: ["Birds", "Rocks", "Stars", "Fish"],
      right: 0, why: "An ornithologist is a scientist who studies birds." },
    { q: "She was not <i>divining</i> what he had planned. What does divining mean here?",
      choices: ["Guessing or realizing", "Hiding", "Forgetting", "Praying"],
      right: 0, why: "She had no idea of his plan, so she wasn't guessing it." },
    { q: "The team stood <i>triumphant</i> after winning the final game. What does triumphant mean?",
      choices: ["Joyful because of a win", "Ashamed of a loss", "Sleepy", "Confused"],
      right: 0, why: "A team that has won feels triumphant." },
    { q: "They crossed the <i>perilous</i> bridge, which swayed over the deep gorge. What does perilous mean?",
      choices: ["Full of danger", "Very short", "Beautiful", "Brand new"],
      right: 0, why: "A swaying bridge over a gorge is full of danger." }
  ],

  questions: [
    { q: "What does third-person limited mean?", find: [1],
      hint: "Read One Window Into a Story.",
      choices: [
        "An outside narrator who shows the thoughts of only one character",
        "A narrator who is a character and says I",
        "An outside narrator who knows everyone's thoughts",
        "A story with only one sentence"
      ], right: 0,
      why: "The narrator is outside the story and stays with one mind." },

    { q: "Which line shows what is going on inside Sylvia's mind?", find: [17],
      hint: "Read The Stranger's Offer.",
      choices: [
        "“I would give ten dollars to anybody who could show it to me,” he added desperately.",
        "Mrs. Tilley gave amazed attention to all this.",
        "Sylvia’s heart gave a wild beat.",
        "“Do you cage ’em up?” asked Mrs. Tilley."
      ], right: 2,
      why: "Her heart's wild beat is her own feeling." },

    { q: "How can you tell this story is not first person?", find: [62],
      hint: "Read Whose Head Are We In?",
      choices: [
        "Because the narrator calls her Sylvia and she, and never says I",
        "Because the story is about a bird",
        "Because it has dialogue",
        "Because it takes place outdoors"
      ], right: 0,
      why: "A first-person narrator would say I." },

    { q: "Which of these can the reader NOT know, because the narrator stays with Sylvia?", find: [66],
      hint: "Read What We Can't Know.",
      choices: [
        "How Sylvia feels about the white heron",
        "What the young man truly feels about the bird he wants",
        "That the pine tree is very tall",
        "That Sylvia climbs at dawn"
      ], right: 1,
      why: "The narrator never goes into the young man's mind." },

    { q: "What does the young man want from Sylvia?", find: [20],
      hint: "Read The Stranger's Offer.",
      choices: [
        "Her jack-knife",
        "To be shown the white heron's nest, and he offers ten dollars",
        "A ride to the sea",
        "Her grandmother's cow"
      ], right: 1,
      why: "He would give ten dollars to anyone who could show him the nest." },

    { q: "Why does Sylvia climb the old pine tree at dawn?", find: [25],
      hint: "Read Sylvia's Plan.",
      choices: [
        "To hide from the young man",
        "To see the whole country from the top and find where the white heron's nest is",
        "To pick fruit for her grandmother",
        "To practice climbing"
      ], right: 1,
      why: "She thinks that from the top she could see where the heron flew." },

    { q: "What does Sylvia do when the young man waits for her to tell?", find: [47],
      hint: "Read She Does Not Speak.",
      choices: [
        "She tells him exactly where the nest is.",
        "She does not speak, because she cannot give the heron's secret away.",
        "She runs back up the tree.",
        "She tells a lie about a different bird."
      ], right: 1,
      why: "She keeps silence and does not tell the heron's secret." },

    { q: "Because we are inside Sylvia's mind, how does the reader come to feel about her choice?", find: [70],
      hint: "Read What We Can't Know.",
      choices: [
        "We feel her wish for the money and her love of the bird, so we understand why it is hard.",
        "We feel nothing, because the narrator keeps her distance.",
        "We side with the young man, since we know his thoughts.",
        "We forget she is a child."
      ], right: 0,
      why: "Being inside her head lets us feel both pulls." },

    { q: "If the narrator moved into the young man's head instead, what would change?", find: [76],
      hint: "Read The Same Moment From Another Head.",
      choices: [
        "We would learn his thoughts, and Sylvia's reasons would become a mystery.",
        "Nothing would change.",
        "The story would become first person.",
        "The story would have no ending."
      ], right: 0,
      why: "Whoever's mind you enter, the story becomes theirs." },

    { q: "Sylvia's choice is a choice of conscience. What is a conscience?", find: [79],
      hint: "Read A Voice Inside.",
      choices: [
        "A rule a teacher makes",
        "The inner sense of what is right and wrong",
        "A kind of reward",
        "The name of a bird"
      ], right: 1,
      why: "A conscience tells a person what she should do." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before anything else, read the story in its three sittings, and with a pencil underline the lines that show what Sylvia thinks or feels, and circle the lines that only show what she sees and hears.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When those are done, take one line about the young man or her grandmother and rewrite it from that person's point of view, as the lesson did, and say what the reader now knows that the original hid.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
