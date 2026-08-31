/* ─────────────────────────────────────────────────────────────────────────
   INTERACTIVE LESSON CONTENT — one entry per Leif lesson.

   Two-day shape, per Paul:
     Day 1  the story, then the four questions whose answers are in the text
     Day 2  the word cards, then question 2, which is the vocabulary one

   That split falls out of the material rather than being imposed on it: the
   booklets always make question 2 a vocabulary question and never define the
   words anywhere except the answer key.

   `vocabQ` is the index (0-based) of the question that belongs to Day 2.
   ───────────────────────────────────────────────────────────────────────── */

const LESSONS = [

/* ════════════════ Unit 1 Lesson 1 — From Republic to Empire ═══════════════ */
{
  id: "history/republic-to-empire",
  slug: "republic-to-empire",
  title: "From Republic to Empire",
  unit: "Ancient Rome &middot; Unit 1 &middot; Lesson 1",
  /* `shelf` is what the site needs to put a card on a shelf. It lives here,
     beside the lesson, so a lesson is added in ONE file. It used to be a
     second hand-written entry in build-pages.js, which meant every lesson was
     registered twice and the two could disagree. Worksheets never had that
     problem because their cards were always derived from worksheets.js. */
  shelf: { grades: [6], subject: "History",
    blurb: "Republic to empire, read aloud, then five questions hidden in the text.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words the textbooks list but never define",
      "Five questions, four with the answer hidden in the text",
      "A printable answer sheet with a parent signature line",
    ] },
  eyebrow: ["History", "Unit 1 &middot; Lesson 1", "Ancient Rome"],
  dek: "Rome spent five hundred years refusing to have a king. Then it got one, and almost nobody noticed the day it happened.",
  scripture: {
    ref: "Daniel 2:21",
    text: "And he changeth the times and the seasons: he removeth kings, and setteth up kings.",
  },
  parts: [
    { title: "Rome Without a King", s: [
      "For almost five hundred years, Rome had no king.",
      "Roman citizens voted for the men who led them.",
      "A council of powerful Romans called the Senate argued about laws and advised those leaders.",
      "A government like that, where citizens choose representatives instead of obeying a king, is called a republic.",
      "Romans were proud of theirs, and they hated the idea of one man holding all the power."
    ]},
    { title: "Too Big to Hold", s: [
      "Then Rome started winning wars, and it kept winning them.",
      "Roman armies marched further and further from home until Rome controlled land all the way around the Mediterranean Sea.",
      "The generals who won those wars came home rich and famous.",
      "Their soldiers had followed them for years, through hunger and blood, and those soldiers were loyal to their general instead of to Rome.",
      "That was the crack in the republic, because an army that belongs to one man is a weapon pointed at his own city."
    ]},
    { title: "Caesar Crosses the Line", s: [
      "Julius Caesar was one of those generals.",
      "He spent eight years conquering Gaul, the land we now call France, and by the end his soldiers would have followed him anywhere.",
      "Back in Rome he made deals with the other powerful men to protect himself.",
      "When the Senate ordered him to give up his army, Caesar refused, marched on Rome, and took control of the republic himself.",
      "Rome already had a word for one man holding total power: a dictator, an office handed out on purpose in an emergency and meant to last months, not years.",
      "Caesar had himself named dictator for life, and that phrase, for life, is the part the Senate could not forgive.",
      "Senators who wanted the old republic back murdered him for it, but by then it was already too late."
    ]},
    { title: "The Quiet Takeover", s: [
      "Civil war followed Caesar's death, and his adopted son Augustus won it.",
      "Augustus was cleverer than Caesar, because he never once called himself king.",
      "He kept all the republic's old words, titles, and ceremonies, so from the outside everything looked the way it always had.",
      "Underneath those old words, though, Augustus alone held the army, the money, and the final say.",
      "One ruler who holds total power for life, and hands it on to whoever comes next, is what we call an emperor.",
      "Rome was an empire now, ruled by one man for life, and most Romans barely noticed the moment it changed."
    ]},
    { title: "Why Rome Could Hold It All", s: [
      "Rome sits in the middle of Italy, and Italy sits in the middle of the Mediterranean Sea.",
      "From there an emperor could ship soldiers, grain, and tax money to any corner of the empire faster than an enemy could gather against him.",
      "Geography is a big part of why one man could hold so much land for so long.",
      "Rome did not lose its republic in a single battle, it lost it to ambition and to an empire that grew too big to run the old way."
    ]},
    { title: "What Scripture Says", s: [
      "Daniel 2:21 says that God “changeth the times and the seasons: he removeth kings, and setteth up kings.”",
      "Rome's leaders believed they were the ones deciding who ruled, but Scripture says governments rise and fall under God's authority, no matter how permanent they look."
    ]}
  ],
  todo: { title: "What To Do Now", s: [
      "That is the reading done. There are two things left, and both of them send you back into the story.",
      "First the word cards. Four words from the lesson, and the meaning of each one is sitting in the sentences you just heard.",
      "Then four questions. The answer to every one of them is somewhere in the text above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read that part again.",
      "Finding the answer in the story is the skill this lesson is teaching. Getting it right from memory is not the same thing.",
      "The hardest question in this one is why nobody stopped it. Rome kept its Senate, its elections and its offices, so from the outside almost nothing looked different. Read The Quiet Takeover again before you answer it."
  ] },
  words: [
    ["Republic", "People vote for leaders to represent them. No king. Rome ran this way for about 500 years."],
    ["Senate", "The council of powerful Romans who debated laws and advised the leaders. Something like a council of elders."],
    ["Dictator", "In Rome, one man handed total power on purpose, for a short emergency. Caesar took it and never gave it back."],
    ["Emperor", "One ruler with total power, for life, who passes that power to whoever comes next."]
  ],
  questions: [
    { q: "What was the main historical development in this lesson?", find: [22, 26],
      hint: "Look for the sentence that says what Rome turned into.",
      choices: [
        "Rome became an empire, ruled by one man for life, and most Romans barely noticed the moment it changed.",
        "Rome lost a war and was conquered by the armies of Gaul.",
        "Rome moved its capital city out to the Mediterranean Sea.",
        "The Senate held a vote and crowned Julius Caesar king of Rome."
      ], right: 0 },
    { q: "Why was Julius Caesar important to this topic?", find: [13],
      hint: "Look for the sentence where Caesar actually does something to the republic.",
      choices: [
        "He refused to give up his army, marched on Rome, and seized control of the republic.",
        "He was crowned the first emperor of Rome and ruled for life.",
        "He wrote the laws that the Roman Senate used for five hundred years.",
        "He discovered the Mediterranean Sea and claimed it for Rome."
      ], right: 0 },
    { q: "How did geography shape the events in this lesson?", find: [23, 24],
      hint: "Look for the sentences about where Rome sits and what that let a ruler do.",
      choices: [
        "From Rome an emperor could ship soldiers, grain and tax money to any corner of the empire faster than an enemy could gather.",
        "Rome was ringed by mountains, so no army could ever reach the city.",
        "Rome had no fresh water of its own, so it was forced to conquer its neighbours.",
        "Rome was an island, which kept it safe from invasion by land."
      ], right: 0 },
    { q: "How does the Bible verse help you evaluate this history?", find: [27, 28],
      hint: "Look in the last section, at what Scripture says about who is really in charge.",
      choices: [
        "Governments rise and fall under God's authority, no matter how permanent they look.",
        "It predicts by name that Rome would one day become an empire.",
        "It teaches that Christians should never obey any government at all.",
        "It explains the exact reason that senators murdered Julius Caesar."
      ], right: 0 }
  ]
},

/* ═══════════ Unit 1 Lesson 2 — Roman Government and Citizenship ═══════════ */
{
  id: "history/roman-government",
  slug: "roman-government",
  title: "Roman Government and Citizenship",
  unit: "Ancient Rome &middot; Unit 1 &middot; Lesson 2",
  shelf: { grades: [6], subject: "History",
    blurb: "Offices, consuls and citizenship, and why one-year terms mattered.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the story",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["History", "Unit 1 &middot; Lesson 2", "Ancient Rome"],
  dek: "Rome ran on offices, laws and paperwork. That sounds dull until you notice how much of it we still use.",
  scripture: {
    ref: "Romans 13:1",
    text: "There is no power but of God: the powers that be are ordained of God.",
  },
  parts: [
    { title: "A Government of Offices", s: [
      "Rome did not run on one man giving orders, at least not at first.",
      "It ran on offices, which are jobs with fixed powers and fixed time limits.",
      "Two consuls were elected each year to lead the city and command its armies, and each one could overrule the other.",
      "Below them, officials called magistrates handled the courts, the money, the roads and the grain supply.",
      "Above all of them sat the Senate, a council of Rome's most powerful men, who advised, argued, and controlled the treasury."
    ]},
    { title: "Why One Year Mattered", s: [
      "Almost every Roman office lasted exactly one year.",
      "That was on purpose, because a man who knows he must hand the job back is harder to turn into a king.",
      "Two consuls instead of one was the same idea, since either could block the other.",
      "The Romans had thrown out a king to build this system, and they designed it around the fear of getting another one.",
      "It worked for centuries, and then it stopped working, which is the story of Lesson 1."
    ]},
    { title: "Who Counted as Roman", s: [
      "Citizenship was the thing that decided how the law treated you.",
      "A Roman citizen could vote, could sign a legal contract, could take a dispute to court, and could not be beaten or executed without a trial.",
      "People living in lands Rome had conquered usually had none of that, even though they paid the same taxes.",
      "Rome slowly handed citizenship out to more people, partly from fairness and mostly because it bought loyalty cheaply.",
      "In 212 AD an emperor finally granted it to nearly every free person in the empire."
    ]},
    { title: "The Law and the Forum", s: [
      "Roman law was written down, published, and applied by courts rather than decided by whoever was angriest.",
      "That idea, that a rule exists outside the ruler, is the piece the rest of the world kept.",
      "The Forum was the open square at the centre of Rome where all of this happened in public.",
      "Speeches, trials, elections, business and gossip all took place in the same few hundred metres.",
      "Public life being visible was itself part of the system, because it is harder to bend a law in front of a crowd."
    ]},
    { title: "What the Emperors Kept", s: [
      "When the emperors took over, they did not throw the offices away.",
      "They kept the Senate, kept the consuls, kept the titles, and kept holding elections.",
      "The offices carried on with most of their old names and almost none of their old power.",
      "Keeping the shell made one man's rule look lawful, which was exactly the point.",
      "Long after the empire fell, later governments went back to Roman ideas about courts, contracts and citizenship and built on them."
    ]},
    { title: "What Scripture Says", s: [
      "Romans 13:1 says that “there is no power but of God: the powers that be are ordained of God.”",
      "Paul wrote that about the Roman government, and he wrote it as a citizen of an empire whose system was deeply unequal.",
      "Scripture calls for respect toward lawful authority, and it also holds every authority answerable to God, which means order matters and justice matters more."
    ]}
  ],
  todo: { title: "What To Do Now", s: [
      "That is the reading done. There are two things left, and both of them send you back into the story.",
      "First the word cards. Four words from the lesson, and the meaning of each one is sitting in the sentences you just heard.",
      "Then four questions. The answer to every one of them is somewhere in the text above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read that part again.",
      "Finding the answer in the story is the skill this lesson is teaching. Getting it right from memory is not the same thing.",
      "The one to slow down on is who counted as Roman. The answer changes across the lesson, because Rome kept widening it. Go back to Who Counted as Roman and read it from the start."
  ] },
  words: [
    ["Senate", "Rome's council of powerful men. It advised the leaders, argued about laws, and controlled the treasury."],
    ["Citizenship", "The legal status that gave you rights: to vote, to make contracts, to use the courts, and not to be punished without a trial."],
    ["Consul", "One of two officials elected each year to lead Rome and command its armies. Either could overrule the other."],
    ["Law", "A written, published rule applied by courts, rather than whatever the ruler decided that day."]
  ],
  questions: [
    { q: "What was the main idea about government in this lesson?", find: [1, 2],
      hint: "Look near the start, for what Rome actually ran on.",
      choices: [
        "Rome ran on offices, which are jobs with fixed powers and fixed time limits.",
        "Rome had no government at all until the first emperor created one.",
        "Rome was ruled by its army generals from the very beginning.",
        "Rome copied its entire system of government from Greece without changing it."
      ], right: 0 },
    { q: "Why did Roman offices last only one year?", find: [6, 7],
      hint: "Look for the sentence that says why the limit was there on purpose.",
      choices: [
        "Because a man who knows he must hand the job back is harder to turn into a king.",
        "Because Romans believed a year was as long as anyone could concentrate.",
        "Because the Senate could only afford to pay officials for one year.",
        "Because Roman law forbade anyone from working two years in a row."
      ], right: 0 },
    { q: "What did the emperors do with the old republican offices?", find: [21, 23],
      hint: "Look in the last section, at what they kept and why.",
      choices: [
        "They kept the Senate, the consuls and the titles, because keeping the shell made one man's rule look lawful.",
        "They abolished the Senate and the consuls in their first year.",
        "They handed all the old offices over to the army to run.",
        "They replaced Roman law with the laws of the lands they had conquered."
      ], right: 0 },
    { q: "How does the Bible verse help you evaluate this history?", find: [26, 27],
      hint: "Look at the last section, at who wrote it and what it asks of a Christian.",
      choices: [
        "Scripture calls for respect toward lawful authority and holds every authority answerable to God, so order matters and justice matters more.",
        "It teaches that the Roman Empire was chosen by God above all other nations.",
        "It says Christians should refuse to pay taxes to an unjust government.",
        "It predicts that Rome would grant citizenship to everyone in 212 AD."
      ], right: 0 }
  ]
}
,

/* ═════════════ Life Science Unit 1 Lesson 1 — What Makes Something Alive ═════
   Source: Merrill Life Science (Glencoe, 1994), Chapter 1 "Exploring Life",
   Section 1-1 Living Things, printed pages 4-9. Paul borrowed the book on
   Archive.org 2026-08-30 and flipped the pages so this could be built from the
   real text rather than from a summary of it.

   🚨 Paul's direction, 2026-08-30: "for science lets build something that mixes
   world science with creation science." The mix here is SIDE BY SIDE, not
   blended: the observable features of life are taught exactly as the textbook
   teaches them, and the closing section names the origin question as a
   separate question with two answers to it. The textbook's own Section 1-2 is
   "Where Does Life Come From? — Origins", so that is where the book itself
   puts the question. We did not invent the seam; we are using the one that is
   already there.
   ────────────────────────────────────────────────────────────────────────── */
{
  id: "science/what-makes-something-alive",
  slug: "what-makes-something-alive",
  title: "What Makes Something Alive",
  unit: "Life Science &middot; Unit 1 &middot; Lesson 1",
  shelf: { grades: [7], subject: "Science",
    blurb: "The features every living thing shares, and the four things all of them need.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the story",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 1", "Life Science"],
  dek: "A dog, a stream and a rock are all sitting in the same sunshine. Only one of them is alive, and saying why is harder than it sounds.",
  scripture: {
    ref: "Genesis 2:7",
    text: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
  },
  parts: [
    { title: "A Question You Already Think You Can Answer", s: [
      "Picture a hot summer day.",
      "You take your dog down to a stream, and while you skip stones across the water the dog runs along the bank barking.",
      "After a while it settles down under a tree and falls asleep.",
      "Dragonflies skim over the water and insects buzz in the grass.",
      "Everything in that picture is easy to sort into alive and not alive, and you did it without thinking about it.",
      "So here is the harder version of the question.",
      "What actually makes you and your dog different from the water and the rocks?",
      "It moves is not the answer, because the water moves too.",
      "Living things share a short list of features, and the whole list has to be there."
    ]},
    { title: "Made of Cells", s: [
      "Every living thing is called an organism.",
      "You are an organism, your dog is an organism, and so is the grass, the dragonfly and the tree.",
      "Every organism is made of one or more cells.",
      "A cell is the smallest unit of an organism that carries on the functions of life.",
      "Water and rocks are made of chemicals, the same as you are, but they are not built out of cells.",
      "That is the first line on the list, and it is the one that rules the rock out straight away."
    ]},
    { title: "Moving, Responding, Using Energy", s: [
      "Organisms move.",
      "A sleeping dog looks lifeless until an ear twitches or it snores, and plants move too, just slowly enough that you have to watch for it.",
      "Organisms respond to changes around them.",
      "Anything that makes an organism react is called a stimulus, and what the organism does back is called a response.",
      "Your dog hears a can opener, which is the stimulus, and comes running with its tail wagging, which is the response.",
      "Organisms use energy.",
      "Responding takes energy, moving takes energy, and simply staying alive takes energy all day long.",
      "Plants make their own food from sunlight, animals get theirs by eating, and both of them release the energy from that food in a process called respiration."
    ]},
    { title: "Holding Steady", s: [
      "Think about a driver keeping a car at a steady speed on a hill.",
      "The foot on the pedal keeps making small adjustments, so the speed stays the same even though the road does not.",
      "Your body does the same thing constantly.",
      "Keeping steady conditions on the inside no matter what is going on outside is called homeostasis.",
      "When you are frightened your heart races, and then homeostasis brings it back down to normal once the fright has passed.",
      "A rock has no normal to return to, because there is nothing inside it doing the adjusting."
    ]},
    { title: "Growing, Changing, Ending", s: [
      "Organisms grow and develop.",
      "A puppy is small and helpless, then it feeds and grows and turns into a dog that can hunt and defend itself.",
      "The changes an organism goes through as it grows are called its development.",
      "Organisms also adapt.",
      "Any feature that makes an organism better able to survive where it lives is an adaptation.",
      "A dog sheds its heavy winter coat when summer comes, and that is an adaptation.",
      "Adaptations are inherited, which means they are passed down rather than learned, and that is what separates an adaptation from a response.",
      "Organisms have life spans.",
      "A mayfly may live only one day, a dog around fifteen years, and some bristlecone pines have been alive for more than four thousand years.",
      "Every one of those numbers has an end on it, and that is true of every living thing."
    ]},
    { title: "What Every Living Thing Needs", s: [
      "Living things all need the same four things, and every one of them has to come from outside.",
      "They need energy, and almost all of it starts at the sun.",
      "Green plants use sunlight together with carbon dioxide, water and minerals from the soil to make their own food, and everything that eats a plant is living off that same sunlight one step later.",
      "They need raw materials, which are the water, oxygen, carbon dioxide and minerals an organism takes in, uses, and then returns to the environment.",
      "They need water, and water is the most urgent of the four.",
      "You could go two or three weeks without food, but only a few days without water, and about seventy percent of your body is water by weight.",
      "They need a place to live, because every organism needs room, shelter and the right conditions around it.",
      "Trees are mostly water and blood is mostly water, so an organism is largely built out of the very thing it has to keep drinking."
    ]},
    { title: "Where Life Comes From", s: [
      "Everything above can be watched, measured and tested, and scientists who disagree about almost everything else agree on that list.",
      "The next question is a different kind of question.",
      "Where did the first living thing come from?",
      "Nobody watched that happen, so it cannot be tested the way a dog's heart rate can be tested.",
      "Many scientists answer that life began on its own from non-living chemicals over an enormous stretch of time.",
      "The Bible answers that God made living things on purpose, each one able to reproduce after its own kind.",
      "Genesis 2:7 says God formed man from the dust of the ground and breathed into him the breath of life, and man became a living soul.",
      "Notice what that verse says about the dust: the raw materials on their own were not alive, and life was something added to them.",
      "You are allowed to know exactly what a cell does and still be asking where the first one came from.",
      "Keeping those two questions apart is the honest way to study science, and it is what the rest of this unit will keep doing."
    ]}
  ],
  todo: { title: "What To Do Now", s: [
      "That is the reading done. There are two things left, and both of them send you back into the text.",
      "First the word cards. Four words from the lesson, and the meaning of each one is sitting in the sentences you just heard.",
      "Then four questions. The answer to every one of them is somewhere in the reading above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read that part again.",
      "Finding the answer in the text is the skill this lesson is teaching. Getting it right from memory is not the same thing.",
      "The one people trip on is the difference between a response and an adaptation, because both are things an organism does about its surroundings. Read Growing, Changing, Ending again and look for the word inherited."
  ] },
  words: [
    ["Organism", "Any living thing. You, your dog, the grass and the dragonfly are all organisms, and every one of them is made of cells."],
    ["Stimulus", "Anything that makes an organism react. A can opener, a bright light, a cold wind. What the organism does back is the response."],
    ["Homeostasis", "Keeping steady conditions inside an organism no matter what is happening outside it. Your heart racing and then settling back to normal."],
    ["Adaptation", "An inherited feature that makes an organism better able to survive where it lives. A dog shedding its winter coat when summer comes."]
  ],
  questions: [
    { q: "What are the features shared by every living thing?", find: [11, 15, 17, 20, 26, 29, 33, 36],
      hint: "The list is built up across the middle of the reading, one feature at a time.",
      choices: [
        "Organisms are made of cells, move, respond, use energy, hold steady conditions, grow and develop, adapt, and have life spans.",
        "Organisms move, and anything that moves on its own is alive.",
        "Organisms are made of chemicals, and anything made of chemicals is alive.",
        "Organisms are warm to the touch and can be seen with the naked eye."
      ], right: 0 },
    { q: "What is the main source of energy for living things?", find: [40, 41],
      hint: "Look in the section about what every living thing needs, at where the energy starts.",
      choices: [
        "The sun. Green plants make food from sunlight, and everything that eats a plant is living off that sunlight one step later.",
        "The soil, which passes energy directly into every organism that touches it.",
        "Water, which carries energy into an organism when it is drunk.",
        "Oxygen, which is the only thing an organism actually takes energy from."
      ], right: 0 },
    { q: "What is the difference between a response and an adaptation?", find: [18, 33, 35],
      hint: "Look for the word inherited. It is the word that separates the two.",
      choices: [
        "A response is something an organism does at the time, while an adaptation is an inherited feature passed down to it.",
        "A response happens in animals and an adaptation happens only in plants.",
        "A response is slow and an adaptation is fast.",
        "A response is learned at school and an adaptation is learned at home."
      ], right: 0 },
    { q: "Why does the reading treat where life came from as a different kind of question?", find: [47, 48, 50],
      hint: "Look in the last section, at what makes a question testable.",
      choices: [
        "Because nobody watched it happen, so it cannot be tested the way the features of a living thing can be tested.",
        "Because scientists have never disagreed about it and there is nothing left to ask.",
        "Because the Bible does not say anything about where living things came from.",
        "Because the question only matters to people who are not studying science."
      ], right: 0 }
  ]
}
];

module.exports = { LESSONS };
