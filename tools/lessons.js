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
   REWRITTEN 2026-08-31 from Paul's own text. The first version was built from
   Merrill Life Science (Glencoe, 1994), Section 1-1, and it read well, but the
   baked NexVoice had drifted out of step with the page. Paul sent a replacement
   text and asked for it to go in whole, so the parts below are HIS sentences,
   split one per line for the player and otherwise unchanged in meaning.

   🚨 Paul's direction, 2026-08-30: "for science lets build something that mixes
   world science with creation science." In this version the mix is still SIDE
   BY SIDE, not blended. The observable characteristics of life are taught first
   and on their own, and "The Amazing Design of Life" is the separate section
   where the design argument and Genesis are named as such.

   ⚠️ EVERY EDIT TO THESE SENTENCES MEANS RE-RUNNING `node tools/bake-voice.js .`
   voice.json carries a textHash of exactly these lines, and the page refuses the
   baked audio on a mismatch and quietly drops to a device voice. The `find`
   arrays below are 0-based positions in the flattened sentence list (parts,
   then todo, blanks skipped) — renumber them whenever a sentence moves.
   ────────────────────────────────────────────────────────────────────────── */
{
  id: "science/what-makes-something-alive",
  slug: "what-makes-something-alive",
  title: "What Makes Something Alive",
  unit: "Life Science &middot; Unit 1 &middot; Lesson 1",
  shelf: { grades: [7], subject: "Science",
    blurb: "The characteristics every living thing shares, and what that complexity might point to.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 1", "Life Science"],
  dek: "A stream moves, a dog moves, and a tree hardly moves at all. Only some of them are alive, and saying why is harder than it sounds.",
  scripture: {
    ref: "Genesis 2:7",
    text: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
  },
  parts: [
    { title: "Beside the Stream", s: [
      "Imagine you are sitting beside a stream with a dog.",
      "The water moves.",
      "The dog moves.",
      "The trees barely seem to move at all.",
      "So here is the question.",
      "What makes something alive?",
      "It is more complicated than simply being able to move."
    ]},
    { title: "The Signs of Life", s: [
      "Scientists use several characteristics to recognize living things.",
      "Living things are called organisms, and they are made of cells.",
      "Cells are the tiny building blocks that carry out the processes of life.",
      "Living things also use energy.",
      "They grow and develop.",
      "They respond to their surroundings.",
      "They keep their internal conditions stable.",
      "They reproduce.",
      "And they have characteristics that help them survive.",
      "Your body is constantly working to keep things balanced.",
      "When you run, your heart beats faster.",
      "When you stop, your body works to bring your heart rate back toward normal.",
      "This is called homeostasis, which means keeping the inside of your body relatively stable."
    ]},
    { title: "Stimulus and Response", s: [
      "Living things interact with the world around them in fascinating ways.",
      "Three important words can help us understand this.",
      "A stimulus is something in the environment that causes an organism to react.",
      "For example, imagine your dog hears a can of dog food opening.",
      "The sound of the can opener is the stimulus.",
      "A response is the reaction an organism makes because of a stimulus.",
      "Your dog hears the can opener and runs into the kitchen.",
      "Running toward the food is the response.",
      "So remember, the stimulus is what causes the reaction, and the response is how the organism reacts."
    ]},
    { title: "Adaptation", s: [
      "An adaptation is an inherited characteristic that helps an organism survive in its environment.",
      "For example, a polar bear has thick fur that helps keep it warm in a freezing environment.",
      "Unlike a response, an adaptation is not something the animal simply decides to do.",
      "It is a characteristic passed down through generations.",
      "Think of it this way.",
      "Stimulus means something happens.",
      "Response means an organism reacts.",
      "Adaptation is a built in characteristic that helps it survive."
    ]},
    { title: "The Amazing Design of Life", s: [
      "Now stop and think about what we have learned.",
      "Every living thing is made of cells.",
      "Those cells contain incredibly complex structures that work together.",
      "Living things use energy, repair themselves, grow, reproduce, respond to their surroundings, and maintain the delicate conditions needed to stay alive.",
      "That raises an important question.",
      "Could such incredible complexity and organization simply happen by chance?",
      "This is where the idea of intelligent design comes in.",
      "When we see something that contains information, organization, and purposeful design, we normally recognize that it came from intelligence.",
      "Think about a computer, a watch, or even a simple LEGO creation.",
      "If you found one sitting in the woods, you would not assume that the pieces randomly came together and built themselves.",
      "You would naturally look for a designer.",
      "Life is far more complex than any machine humans have created.",
      "The Bible teaches that life has a Creator.",
      "Genesis 1 tells us that God created the living world, and Genesis 2:7 describes God giving mankind the breath of life.",
      "For Christians, the incredible design found throughout living things points toward a Grand Designer.",
      "The basic idea is simple.",
      "If we recognize intelligent design, it is reasonable to ask whether there is an intelligent Designer.",
      "Science allows us to study the incredible details of how living things work.",
      "Faith also asks who created them and why they exist.",
      "As we study biology, we can explore both the amazing complexity of life and what that complexity may tell us about its Creator."
    ]},
    { title: "Your Challenge", s: [
      "Look at something living around you.",
      "It could be a person, animal, plant, insect, or even a tiny organism.",
      "Ask yourself, what makes it alive?",
      "Can you identify its cells, energy use, growth, responses, and adaptations?",
      "The more we look closely at life, the more amazing it becomes.",
      "Science helps us discover how life works.",
      "Studying creation can also lead us to wonder about the Creator."
    ]}
  ],
  todo: { title: "What To Do Now", s: [
      "That is the reading done. There are two things left, and both of them send you back into the text.",
      "First the word cards. Four words from the lesson, and the meaning of each one is sitting in the sentences you just heard.",
      "Then four questions. The answer to every one of them is somewhere in the reading above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read that part again.",
      "Finding the answer in the text is the skill this lesson is teaching. Getting it right from memory is not the same thing.",
      "The one people trip on is the difference between a response and an adaptation, because both are about an organism and its surroundings. Read the Adaptation section again and look for the word inherited."
  ] },
  words: [
    ["Organism", "Any living thing. Organisms are made of cells, the tiny building blocks that carry out the processes of life."],
    ["Stimulus", "Something in the environment that causes an organism to react. A can of dog food opening is a stimulus."],
    ["Homeostasis", "Keeping the inside of your body relatively stable. Your heart speeds up when you run, then settles back toward normal when you stop."],
    ["Adaptation", "An inherited characteristic that helps an organism survive where it lives. The polar bear's thick fur in a freezing environment."]
  ],
  questions: [
    { q: "Which characteristics do scientists use to recognize living things?", find: [7, 8, 10, 11, 12, 13, 14, 15],
      hint: "The list is in The Signs of Life, given one line at a time.",
      choices: [
        "They are made of cells, use energy, grow and develop, respond to their surroundings, keep their internal conditions stable, reproduce, and have characteristics that help them survive.",
        "They move on their own, and anything that moves on its own is alive.",
        "They are made of chemicals, and anything made of chemicals is alive.",
        "They are warm to the touch and big enough to see without a microscope."
      ], right: 0 },
    { q: "What does homeostasis mean?", find: [16, 17, 18, 19],
      hint: "Look at the end of The Signs of Life, at what your body does after you stop running.",
      choices: [
        "Keeping the inside of the body relatively stable, the way your heart rate comes back toward normal after you stop running.",
        "Growing steadily larger until an organism reaches its full size.",
        "Passing an inherited characteristic down to the next generation.",
        "Reacting quickly to anything that happens in the environment."
      ], right: 0 },
    { q: "What is the difference between a response and an adaptation?", find: [25, 29, 31, 32],
      hint: "Look for the words inherited and passed down. They are what separate the two.",
      choices: [
        "A response is the reaction an organism makes at the time, while an adaptation is an inherited characteristic passed down through generations.",
        "A response happens in animals and an adaptation happens only in plants.",
        "A response is slow and an adaptation is fast.",
        "A response is something an organism is born with and an adaptation is something it learns."
      ], right: 0 },
    { q: "What is the basic idea behind intelligent design, as the reading explains it?", find: [43, 44, 46, 47, 53],
      hint: "Look at the LEGO creation in the woods, and at what you would go looking for.",
      choices: [
        "When something contains information, organization and purposeful design, we normally recognize it came from intelligence, so it is reasonable to ask whether there is an intelligent Designer.",
        "That science cannot tell us anything true about how living things work.",
        "That every machine humans build is more complex than any living thing.",
        "That a watch found in the woods most likely assembled itself over a long time."
      ], right: 0 }
  ]
}
];

module.exports = { LESSONS };
