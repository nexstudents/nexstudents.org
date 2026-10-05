/* english/what-a-symbol-is
   Grade 7 · English · Unit 1 (Out Here on My Own), lesson 4. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them. The scripture
   (Isaiah 41:10) is a suggestion, his call.
   The POEM is Robert Frost's "The Runaway", full text, from Project Gutenberg's edition
   of New Hampshire (1923, public domain). Frost's lines run together into sentences,
   because the engine wants one sentence per entry, so the line breaks of the poem are
   not shown; his words and his order are untouched. The poem is split into three
   sections only so the page has places to pause.
   Spelling note: "gray" is Frost's own word, and it is not on the British-spelling list.
   Reading follows the plan: literal first, then what the colt could stand for. The
   symbolic questions say "could stand for" on purpose; the book asks for a sense of it,
   not one right answer. */
'use strict';
module.exports = {
  id: "english/what-a-symbol-is",
  slug: "what-a-symbol-is",
  title: "What a Symbol Is",
  unit: "Literature · U1-L4",
  seq: { unit: 1, unitTitle: "Out Here on My Own", n: 4 },

  plan: {
    objective: "Explain what a symbol is and what one stands for in a poem.",
    markers: [
      "QUOTED, Holt Elements of Literature p24, Symbol: What Does It Stand For?: 'A symbol is a person, place, or thing that has meaning in itself and stands for something beyond itself as well.'",
      "QUOTED, p24: 'On another level the poem may be seen as symbolic. What do you sense the frightened little colt stands for?'",
      "QUOTED, p24, Quickwrite: 'a time when you learned something important about life. Who helped you?'",
    ],
    method: "Read the poem literally first, then ask what the thing stands for.",
    exampleOnly: [
      "The Morgan colt, the snow, Vermont. World: the poem.",
    ],
    digitize: "Reading engine with the full poem (public domain). Questions move from literal (what is the colt doing) to symbolic (what could the colt stand for). Quickwrite on paper.",
    unclear: [],
  },
  natural: "2026-10-05",
  findsAt: 43,

  shelf: { grades: [7], subject: "English",
    blurb: "A frightened colt in the first snow, and the question of what else he might be.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Robert Frost's whole poem The Runaway, read aloud one line at a time",
      "Four vocabulary cards, each with a check question",
      "Questions that go from what the colt does to what he could stand for",
      "A quickwrite on paper about a time you learned something important",
    ] },
  eyebrow: ["English 7", "U1-L4", "Out Here on My Own"],
  dek: "Some things in a poem are exactly what they look like, and some mean more than they say. Learn to tell the two apart.",
  scripture: {
    ref: "Isaiah 41:10",
    text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn what a symbol is, read Robert Frost's The Runaway literally first, and then say what the frightened colt could stand for. They'll also do a short quickwrite on paper about a time they learned something important and who helped."
      ]},
      { h: "Key Concepts", p: [
        "A symbol is a person, place or thing that has meaning in itself and stands for something beyond itself as well. The colt is a real colt in a real pasture, and he can also stand for a young person meeting something new and frightening. The snow is only weather, which is the point of the line the speaker gives the mother: it's only weather.",
        "Reading order matters: first what is happening, then what it could mean. A symbol that skips the literal level is only a guess."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Students tend to jump straight to the meaning and never check the plain reading, or they decide every object in a poem is a symbol. Ask for the line in the poem that supports the meaning. The wall and the pasture are only a wall and a pasture here.",
        "There isn't one right answer for what the colt stands for. Accept any reading that the poem's lines can support, and ask the student to point at one."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do the quickwrite before the poem, then come back to it afterward and ask the student who the helper was in his own story, and who the helper could be in Frost's. The poem's last two lines are about someone who should come and take the colt in."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "More Than a Red Octagon", s: [
      "A stop sign is eight sides of red metal on a pole with one word painted on it, yet nobody treats it as metal, because the moment you see it your foot goes for the brake.",
      "The sign is exactly what it looks like, and it also stands for something bigger than itself: stopping, for your safety and for everybody else's on the road.",
      "That's what a symbol is: a person, place, or thing that has meaning in itself and stands for something beyond itself as well.",
      "",
      "[ex] A flag is cloth and thread, and it also stands for a whole country.",
      "",
      "Poets love symbols because a poem has so few words to work with, so a single thing in it can do two jobs at once, and a good poet won't stop to announce which things they are.",
      "So the question to carry through this poem is the one every symbol asks, and it's worth keeping open until the very end: what could this stand for?"
    ]},
    { title: "Before You Read: Your Turn", s: [
      "Take out a sheet of paper and a pencil, because this lesson starts with you and not with the poem.",
      "Think of a time when you learned something important about life, the kind of lesson that stuck with you for years, and write about it as fast as you can for a few minutes without stopping to fix a single word.",
      "That kind of fast, rough writing is called a quickwrite, and when you've finished, add one more line at the bottom: who helped you?",
      "Keep that paper beside you, because the poem is about the same thing, only it shows up in a different costume, one with four legs and a tail."
    ]},
    { title: "Read It Straight First", s: [
      "Read a poem like this one twice, and don't be tempted to start with the fun part, because the fun part only works if the first reading is done right.",
      "The first time through, read it literally and ask what is actually happening, who is there, and what they say to each other.",
      "Only on the second time do you ask whether anything in it might stand for something else; that order is the whole trick, because a reader who skips the first step starts finding symbols in things that are just snow."
    ]},
    { title: "A Colt Bolts", s: [
      "[story] Once when the snow of the year was beginning to fall, We stopped by a mountain pasture to say, “Whose colt?”",
      "A little Morgan had one forefoot on the wall, The other curled at his breast.",
      "He dipped his head And snorted at us.",
      "And then he had to bolt.",
      "We heard the miniature thunder where he fled, And we saw him, or thought we saw him, dim and gray, Like a shadow against the curtain of falling flakes.",
    ]},
    { title: "Where Is His Mother?", s: [
      "[story] “I think the little fellow’s afraid of the snow.",
      "He isn’t winter-broken.",
      "It isn’t play With the little fellow at all.",
      "He’s running away.",
      "I doubt if even his mother could tell him, ‘Sakes, It’s only weather.’",
      "He’d think she didn’t know!",
      "Where is his mother?",
      "",
      "[story] He can’t be out alone.”",
    ]},
    { title: "Back Up on the Wall", s: [
      "[story] And now he comes again with clatter of stone, And mounts the wall again with whited eyes And all his tail that isn’t hair up straight.",
      "He shudders his coat as if to throw off flies.",
      "“Whoever it is that leaves him out so late, When other creatures have gone to stall and bin, Ought to be told to come and take him in.”",
    ]},
    { title: "What Happened, Plain and Simple", s: [
      "Start with what's really there, because the first reading is only about the facts, and the facts are simple enough to say in a few breaths.",
      "Two people stop beside a mountain pasture as the year's first snow begins to fall, and a young Morgan colt, a small strong horse, stands at the wall until he snorts at them and bolts.",
      "He gallops off into the falling flakes, and the speaker, watching him go, guesses that he's frightened of the snow because he's never seen any before.",
      "Then the colt comes back, clattering over the stones, and climbs the wall again with his eyes showing white and his tail straight up, and the speaker decides that whoever left him out so late ought to come and bring him in.",
      "That's everything that happens, and notice that nobody in the poem says a word about growing up, so if there's a bigger meaning, you're the one who'll have to find it."
    ]},
    { title: "What Could the Colt Stand For?", s: [
      "Now read it a second time, and this time ask what kept pulling at you while you read, because that's usually where a symbol is hiding.",
      "A colt that's out in his first snow, scared of something that's really just weather, with nobody there to explain it, is a lot like a young person meeting something new and frightening for the first time.",
      "The speaker even says it: his mother couldn't tell him it's only weather, because he'd think she didn't know, and a lot of kids have said exactly that about a grown-up they didn't believe.",
      "So the colt could stand for a young person facing something new, the snow could stand for whatever he's afraid of, and the one who ought to come take him in could stand for the person who helps.",
      "",
      "That last one is where your quickwrite comes back in, since you wrote down who helped you, and a helper is exactly who the colt is missing out there in the snow.",
      "Another reader might find something different in him, and that's fine, as long as you can point to a line in the poem that backs it up.",
      "Long before Frost, the prophet Isaiah wrote the words of a helper speaking to someone who was afraid.",
      "",
      "[verse] Isaiah 41:10 says, “Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.”",
      "",
      "Frost doesn't say anything like that; he leaves the colt out in the snow, and that's why the poem stays with you long after you've put it down."
    ]},
  ],

  words: [
    ["Symbol", "A person, place or thing that has meaning in itself and also stands for something beyond itself.", 2],
    ["Literal Meaning", "What a poem says on the surface: who is there, what happens, and what is said.", 11],
    ["Morgan", "A breed of small, strong horse, which is the kind of colt in Frost's poem.", 30],
    ["Winter-Broken", "Frost's way of saying a young horse is not used to winter yet, the way a horse is broken to a saddle.", 19],
  ],

  vocabQuestions: [
    { q: "Which of these is a <i>symbol</i>?",
      choices: ["A dove carrying an olive branch to stand for peace", "A bird that is sitting on a fence", "A glass of water on a table", "A dog that is chasing a ball"],
      right: 0, why: "It's a real thing that also stands for something beyond itself." },
    { q: "What does it mean to read a poem <i>literally</i>?",
      choices: ["To read what is actually happening in it, before asking what it could stand for", "To read it aloud as fast as possible", "To decide what every object stands for", "To read only the last line"],
      right: 0, why: "The literal reading comes first." },
    { q: "What is a <i>Morgan</i>, in Frost's poem?",
      choices: ["A small, strong breed of horse", "The name of the speaker's friend", "A mountain in Vermont", "A kind of winter storm"],
      right: 0, why: "The colt is a little Morgan." },
    { q: "When the speaker says the colt isn't <i>winter-broken</i>, what does he mean?",
      choices: ["The colt isn't used to winter yet", "The colt has hurt his leg in the snow", "The colt has never been inside a barn", "The colt belongs to a farmer who is away"],
      right: 0, why: "It's the colt's first winter, so the snow is new to him." },
  ],

  questions: [
    { q: "What is the colt doing when the speakers first see him?", find: [14, 15],
      hint: "Read the first few lines about the mountain pasture.",
      choices: ["Standing at the wall with one forefoot up, and then snorting and bolting", "Eating grass while the snow falls", "Running toward them to be petted", "Lying down in the middle of the pasture"], right: 0,
      why: "He stands at the wall, snorts, and bolts." },
    { q: "What does the speaker guess the colt is afraid of?", find: [18, 19],
      hint: "Find the line that begins with the speaker's guess.",
      choices: ["The snow", "The two people", "The dark", "A wolf in the woods"], right: 0,
      why: "The speaker says the little fellow is afraid of the snow." },
    { q: "Why does the speaker say the colt isn't winter-broken?", find: [19, 20],
      hint: "Think of what a horse that is broken to something has already done.",
      choices: ["He hasn't been through a winter before and isn't used to snow", "He has a broken leg from last winter", "He has been kept in a barn all his life", "He is too young to run"], right: 0,
      why: "It's his first winter, so he hasn't gotten used to it." },
    { q: "Why does the speaker think the colt wouldn't believe his own mother if she said it was only weather?", find: [23, 22],
      hint: "Read what the speaker says the colt would think.",
      choices: ["He would think she didn't know", "She isn't close enough to hear him", "Mothers never talk to colts", "She is as frightened of the snow as he is"], right: 0,
      why: "The colt is so frightened he would decide his mother doesn't understand." },
    { q: "What does the colt do after he runs away?", find: [26, 26],
      hint: "Look at the last section of the poem.",
      choices: ["He comes back and climbs the wall again, with his eyes showing white and his tail straight up", "He disappears into the snow and never returns", "He lies down and goes to sleep", "He follows the speakers home"], right: 0,
      why: "He comes back to the wall, still frightened." },
    { q: "Who does the speaker say ought to come and take the colt in?", find: [28, 28],
      hint: "Read the last two lines.",
      choices: ["Whoever left him out so late", "The speaker's own friend", "The colt's mother", "The farmer who sold the pasture"], right: 0,
      why: "The speaker says whoever left him out so late should come and take him in." },
    { q: "What could the frightened colt stand for?", find: [37, 35],
      hint: "Think about who else faces something new and scary alone.",
      choices: ["A young person facing something new and frightening", "A horse that has been sold to a new owner", "The winter itself", "The farmer who owns the pasture"], right: 0,
      why: "He's scared of something new, and nobody has explained it to him." },
    { q: "If the colt stands for a young person, what could the snow stand for?", find: [37, 35],
      hint: "The poem calls the snow something that's really only weather.",
      choices: ["Something new that feels frightening but is a normal part of life", "The mother who ought to come and find him", "The wall he keeps climbing", "The home he will go back to"], right: 0,
      why: "The snow is only weather, but it's new and he's frightened of it." },
    { q: "In your quickwrite you wrote down who helped you. Who could that person stand for in Frost's poem?", find: [38, 37],
      hint: "Look at the people the poem says should come to the colt.",
      choices: ["Whoever should come and take the colt in", "The two people who stop at the pasture", "The wall the colt climbs", "The snow that falls on the colt"], right: 0,
      why: "The helper is the one the colt needs." },
    { q: "Which line best supports reading the snow as something scary only because it's new?", find: [22, 35],
      hint: "Look for the line that says the thing is smaller than the colt thinks.",
      choices: ["“It's only weather.”", "“A little Morgan had one forefoot on the wall.”", "“We stopped by a mountain pasture to say, ‘Whose colt?’”", "“He shudders his coat as if to throw off flies.”"], right: 0,
      why: "The speaker says it's only weather, so it's harmless but frightening to the colt." },
  ],

  todo: { title: "What To Do Now", s: [
    "Take your quickwrite out again before anything else, and read the line where you said who helped you.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the poem, and {v} more questions about those words. {T} questions in all.",
    "The first questions ask what's really happening in the poem, and the last ones ask what the colt, the snow and the helper could stand for, so answer them in that order.",
    "If you get stuck, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
