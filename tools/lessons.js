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
  /* 🚨 `seq` IS THE MODULE ORDER, and it is the only thing that says which
     lesson follows which. The `unit` string above is a LABEL - it is rendered,
     never parsed. Ordering off a display string is how a rename silently
     reorders a course, so the order lives in real data instead.
     unit = which unit, n = position in it. Unit 2 is "The Cell" (Paul,
     2026-08-31), not built yet. */
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 1 },
  shelf: { grades: [7], subject: "Science",
    /* Paul's own art, made 2026-08-31, square because the card tile is square
       at every width. Source PNG lives in his Desktop\School Lessons
       Worksheets\Science\ folder; the 700px thumb.jpg beside index.html is
       what ships. 🚨 The art is Paul's - do not restyle it or regenerate it. */
    thumb: true,
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
,

/* ═════════════ Life Science Unit 1 Lesson 2 — Life Only Comes From Life ═════
   Paul, 2026-08-31: "Perhaps you can also rename it slightly so it doesnt feel
   its exactly like us copying the text book."

   ⚠️ RENAMING A HEADING IS NOT WHAT MAKES THIS OURS. The prose below is
   written from scratch. The history in it — Redi 1668, Spallanzani in the
   1760s, Pasteur 1861 — is ordinary public knowledge that appears in every
   biology course written in the last century, and it is told here in our own
   words and our own order. Do not "rewrite" a source to make it ours. Write it.
   ────────────────────────────────────────────────────────────────────────── */
{
  id: "science/life-only-comes-from-life",
  slug: "life-only-comes-from-life",
  title: "Life Only Comes From Life",
  unit: "Life Science &middot; Unit 1 &middot; Lesson 2",
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 2 },
  shelf: { grades: [7], subject: "Science",
    thumb: true,   /* Paul's art, 2026-08-31. Source PNG on his Desktop; see Lesson 1. */
    blurb: "Three experiments across two hundred years, and the question none of them could reach.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 2", "Life Science"],
  dek: "For two thousand years people thought meat made maggots. Finding out it did not took three scientists, two hundred years, and one very oddly shaped bottle.",
  scripture: {
    ref: "Genesis 1:11",
    text: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
  },
  parts: [
    { title: "What People Used To Believe", s: [
      "For most of history, people believed that living things could simply appear out of non-living material.",
      "Leave a pile of old rags in a dark corner and mice would turn up, so the rags must have made the mice.",
      "Leave meat sitting out in the open and maggots would appear on it, so the meat must have made the maggots.",
      "This idea had a name.",
      "It was called spontaneous generation.",
      "It was not a stupid idea, and that is worth saying plainly.",
      "People were watching events that really happened and drawing the obvious conclusion from them.",
      "What they were missing was not intelligence.",
      "It was a careful test."
    ]},
    { title: "Redi and the Jars", s: [
      "In 1668 an Italian doctor named Francesco Redi decided to stop arguing about the meat and actually test it.",
      "He put meat into a set of jars.",
      "Some jars he left wide open.",
      "Some he sealed shut completely.",
      "And some he covered with a fine gauze, which let air through but kept flies out.",
      "The open jars grew maggots.",
      "The sealed jars did not.",
      "The gauze-covered jars did not either, but maggots appeared on top of the gauze.",
      "Flies had landed there and laid their eggs.",
      "The meat was never making anything at all.",
      "Flies were.",
      "Redi had done something more important than finding the answer.",
      "He changed one thing from jar to jar and kept everything else the same, and the one thing you change on purpose like that is called the variable.",
      "That is what makes a test a controlled experiment, and it is the only way to know what is really causing what."
    ]},
    { title: "The Argument Was Not Over", s: [
      "Redi convinced most people about maggots, and then the microscope arrived and reopened everything.",
      "Scientists looked at broth that had been left standing and found it swarming with organisms nobody had ever seen.",
      "The old idea came straight back.",
      "Large creatures may well need parents, people argued, but surely these tiny ones form on their own.",
      "In the 1760s an Italian priest and scientist named Lazzaro Spallanzani boiled broth and sealed the flasks shut.",
      "Nothing grew.",
      "His critics had an answer ready before he finished.",
      "Boiling and sealing, they said, had ruined the air inside, and air was exactly what a new living thing would need in order to form.",
      "That was a fair objection, not a cheat.",
      "It kept the question open for another hundred years."
    ]},
    { title: "Pasteur Settles It", s: [
      "In 1861 a French scientist named Louis Pasteur designed the experiment that ended the argument for good.",
      "He used a flask with a long neck bent into an S-shaped curve, like a swan's neck.",
      "The neck stayed open the entire time, so air passed in and out freely.",
      "That removed the objection about ruined air completely, which was the whole point of the shape.",
      "But dust, and anything riding on the dust, settled in the bend of the neck and never reached the broth.",
      "He boiled the broth and waited.",
      "Nothing grew, and nothing kept on growing for month after month.",
      "Then he tilted a flask so the broth ran up into the curve of the neck and back down again.",
      "Within a day it was swarming.",
      "The living things had been sitting in the dust the whole time.",
      "Spontaneous generation had been given every chance and had failed every test.",
      "What replaced it is called biogenesis, which means that living things come only from other living things."
    ]},
    { title: "What The Experiments Showed, And What They Did Not", s: [
      "Now be careful, because it is easy to claim too much for these experiments.",
      "What they showed is that under the conditions tested, life did not arise from non-living material.",
      "That is a real result and a useful one.",
      "It is why your food goes in the refrigerator and why a surgeon's instruments are sterilised before an operation.",
      "But notice the question none of them touched.",
      "Every single one of those experiments began with life already existing somewhere in the room.",
      "Redi had flies. Spallanzani and Pasteur had organisms riding in the dust.",
      "Not one of them explains where the very first living thing came from.",
      "Pasteur was not trying to answer that, and he never claimed to have.",
      "A test can only measure what you put in front of it."
    ]},
    { title: "The First Life", s: [
      "So the harder question is still sitting there, exactly where it was.",
      "If life comes only from life, where did the first life come from?",
      "Nobody was watching, and it has never once been repeated in a laboratory, so it cannot be tested the way Pasteur tested his flasks.",
      "Many scientists answer that the first living thing assembled itself from non-living chemicals across an enormous span of time, under conditions that no longer exist anywhere on Earth.",
      "The Bible answers that God made living things on purpose, each one able to reproduce after its own kind.",
      "Genesis 1 describes the earth bringing forth plants after their kind, with the seed already in them.",
      "That is the same pattern biogenesis describes: life producing life like itself.",
      "Notice carefully that the two answers are not arguing about the experiments.",
      "Redi, Spallanzani and Pasteur are not in dispute, and nobody is asking you to pick a side on them.",
      "The disagreement is about a single event that no experiment has ever reached.",
      "Knowing the difference between those two kinds of question is worth more than either answer on its own."
    ]}
  ],
  todo: { title: "What To Do Now", s: [
      "That is the reading done. Two things left, and both of them send you back into the text.",
      "First the word cards. Four words, and every one of them is explained somewhere in the story you just heard.",
      "Then four questions. The answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is what Pasteur's curved neck was for. Read Pasteur Settles It again and look for what the shape let IN and what it kept OUT.",
      "If you can explain why the neck had to stay open, you have understood the best experiment in this lesson."
  ] },
  words: [
    ["Spontaneous Generation", "The old idea that living things could appear straight out of non-living material. Rags making mice, meat making maggots. Every careful test of it failed."],
    ["Biogenesis", "The principle that living things come only from other living things. What replaced spontaneous generation after Pasteur."],
    ["Variable", "The one thing you change on purpose in an experiment while keeping everything else the same. Redi changed only the covering on the jars."],
    ["Controlled Experiment", "A test where one variable is changed and everything else is held steady, so you can tell what actually caused the result."]
  ],
  questions: [
    { q: "What did Redi's gauze-covered jars show that the sealed jars could not?", find: [13, 16, 17, 18],
      hint: "Look at what appeared ON TOP of the gauze, and what that ruled out.",
      choices: [
        "Air could still reach the meat and no maggots grew in it, while maggots appeared on top of the gauze where flies had laid eggs.",
        "The meat rotted faster when it could not breathe.",
        "Maggots grew inside the gauze jars just as fast as in the open ones.",
        "Sealing a jar is the only way to keep meat fresh."
      ], right: 0 },
    { q: "Why was the S-shaped neck on Pasteur's flask so important?", find: [34, 35, 36, 37],
      hint: "His critics had complained about one thing. The shape answered that complaint.",
      choices: [
        "It let air pass in and out freely, answering the objection about ruined air, while trapping dust in the bend so nothing living reached the broth.",
        "It kept all air out of the flask, which stopped anything from growing.",
        "It made the broth boil faster and killed more organisms.",
        "It let him pour the broth without spilling it."
      ], right: 0 },
    { q: "What does biogenesis mean?", find: [43, 44],
      hint: "It is the principle that replaced spontaneous generation.",
      choices: [
        "That living things come only from other living things.",
        "That living things can form from non-living material given enough time.",
        "That all living things are made of cells.",
        "That boiling a liquid always kills everything in it."
      ], right: 0 },
    { q: "Why can these experiments not settle where the first life came from?", find: [49, 50, 51, 52],
      hint: "Look at what was already in the room before each experiment started.",
      choices: [
        "Because every one of them began with life already existing somewhere, so none of them reached the question of the very first living thing.",
        "Because Pasteur made a mistake that nobody noticed until later.",
        "Because the experiments were never repeated by anyone else.",
        "Because microscopes in the 1800s were not powerful enough to see anything."
      ], right: 0 }
  ]
}
,

/* ═════════════ Life Science Unit 1 Lesson 3 — How We Know What We Know ═════
   The "what is science" lesson. ⚠️ It is the one that makes the other three
   work, because it gives Kolten the vocabulary to say WHY the origin question
   in Lessons 1 and 2 sits outside a test. Do not cut it for being less exciting
   than the others; it is the spine of the unit.
   ────────────────────────────────────────────────────────────────────────── */
{
  id: "science/how-we-know-what-we-know",
  slug: "how-we-know-what-we-know",
  title: "How We Know What We Know",
  unit: "Life Science &middot; Unit 1 &middot; Lesson 3",
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 3 },
  shelf: { grades: [7], subject: "Science",
    thumb: true,   /* Paul's art, 2026-08-31. Source PNG on his Desktop; see Lesson 1. */
    blurb: "Science is a method, not a pile of facts. What the method can settle, and what it cannot.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 3", "Life Science"],
  dek: "Most people think science is a body of facts to memorise. It is closer to a set of rules for arguing honestly about what is true.",
  scripture: {
    ref: "Proverbs 25:2",
    text: "It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.",
  },
  parts: [
    { title: "Not A Pile Of Facts", s: [
      "Ask most people what science is and they will describe a subject full of facts to be memorised.",
      "That is what science has produced, not what science is.",
      "Science is a method for finding out whether something is true, built to work even when the person using it is wrong.",
      "That last part is the clever bit.",
      "Everybody is wrong sometimes, including careful and honest people.",
      "So the method is designed to catch mistakes rather than to trust anyone's judgement.",
      "Redi did not settle the maggot question by being respected.",
      "He settled it by running a test that anyone else could run for themselves."
    ]},
    { title: "It Starts With Noticing", s: [
      "Every piece of science starts with an observation, which just means something you noticed.",
      "Maggots keep appearing on meat left in the open.",
      "The broth in the flask on the left went cloudy and the one on the right did not.",
      "An observation on its own is not science yet.",
      "It becomes science when it turns into a question you can actually chase.",
      "Where do the maggots come from is a chaseable question.",
      "Notice that a good question is narrow.",
      "Why is there life is enormous and interesting, but you cannot build a test around it, so it belongs to a different kind of thinking."
    ]},
    { title: "A Hypothesis Is A Guess With Consequences", s: [
      "Once you have a question you make a hypothesis, which is a proposed answer to it.",
      "The word gets used loosely, so be precise here.",
      "A hypothesis is not just any guess.",
      "It is a guess that commits you to something, because it tells you what you should find if it is right and what you should find if it is wrong.",
      "Flies lay eggs on meat is a hypothesis, because it predicts that meat flies cannot reach will grow no maggots.",
      "That prediction is what makes it testable.",
      "If an idea is arranged so that nothing could ever count against it, it may still be true, but it is not doing science.",
      "It has simply stepped out of the method's reach."
    ]},
    { title: "The Test", s: [
      "Now you build the experiment, and the whole craft of it is holding things steady.",
      "You change one variable and keep everything else the same, because if you change two things at once you will never know which one mattered.",
      "The jar you leave alone is called the control, and it is the thing you compare against.",
      "Without a control you have a story, not a result.",
      "Then you run it, write down what actually happened, and report it whether or not it is what you hoped for.",
      "Spallanzani's critics were allowed to object, and they were right to.",
      "Their objection is what forced Pasteur's better flask a century later, which is the method working exactly as intended.",
      "Being corrected is not a failure inside science. It is the point of it."
    ]},
    { title: "Theory Does Not Mean Guess", s: [
      "In everyday speech a theory is a hunch, and that is where a lot of confusion comes from.",
      "In science a theory is nearly the opposite.",
      "A scientific theory is an explanation that has survived a very large amount of testing and ties many separate observations together.",
      "Biogenesis is at that level, and so is the idea that living things are made of cells.",
      "A scientific law is different again.",
      "A law describes what reliably happens without explaining why it happens.",
      "Gravity is a law in that sense: we can predict it precisely, and describing it is not the same as explaining it.",
      "So a theory never grows up into a law. They are two different jobs."
    ]},
    { title: "What The Method Cannot Reach", s: [
      "Here is the part that is usually skipped, and it matters more than the rest.",
      "The method needs an event you can observe, repeat, or leave evidence of.",
      "Take those away and it has nothing to grip.",
      "That is why the origin of the first life sits outside it, as we saw in the last lesson.",
      "But the limits go further than that, and it is worth being honest about them.",
      "Science can tell you what a substance will do to a human body.",
      "It cannot tell you whether you should give it to one.",
      "Science can measure a thing precisely and still say nothing about whether it is beautiful, or right, or worth doing.",
      "Those are real questions with real answers, and people answer them every day.",
      "They are simply answered with different tools.",
      "A scientist who says the method reaches everything has left the method behind and started making claims it cannot support."
    ]}
  ],
  todo: { title: "What To Do Now", s: [
      "That is the reading done. Two things left, and both send you back into the text.",
      "First the word cards. Four words, each one explained inside the reading you just heard.",
      "Then four questions. The answer to each is in the text above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to that part and read it again.",
      "The one people trip on is theory against law. Read Theory Does Not Mean Guess again and look for which one EXPLAINS and which one only DESCRIBES.",
      "If you can say why a theory never becomes a law, you have got the hardest idea in this lesson."
  ] },
  words: [
    ["Hypothesis", "A proposed answer to a question, worded so it predicts what you should find if it is right and what you should find if it is wrong."],
    ["Control", "The part of an experiment you deliberately leave alone, so you have something honest to compare the changed one against."],
    ["Theory", "In science, an explanation that has survived a great deal of testing and ties many separate observations together. Not a hunch."],
    ["Law", "A description of what reliably happens, without an explanation of why. Describing a thing and explaining it are two different jobs."]
  ],
  questions: [
    { q: "Why is science described as a method rather than a collection of facts?", find: [1, 2, 4, 5],
      hint: "Look at the opening, at what the method is built to cope with.",
      choices: [
        "Because it is a way of finding out what is true that is built to catch mistakes, so it works even when the person using it is wrong.",
        "Because scientists have not finished collecting all the facts yet.",
        "Because the facts of science change completely every few years.",
        "Because memorising facts is the only part of science that matters."
      ], right: 0 },
    { q: "What makes a hypothesis testable?", find: [19, 20, 21, 22],
      hint: "Look for what a hypothesis commits you to.",
      choices: [
        "It predicts what you should find if it is right and what you should find if it is wrong, so something could count against it.",
        "It is written down by a scientist rather than an ordinary person.",
        "It is a guess that turns out to be correct.",
        "It is about something small enough to fit in a jar."
      ], right: 0 },
    { q: "What is the difference between a scientific theory and a scientific law?", find: [34, 37, 38, 39],
      hint: "One of them explains. The other only describes.",
      choices: [
        "A theory explains why something happens and a law describes what reliably happens, so a theory never becomes a law.",
        "A law is a theory that has been proved, so every theory becomes a law eventually.",
        "A theory is a hunch and a law is a fact.",
        "A law applies to living things and a theory applies to everything else."
      ], right: 0 },
    { q: "According to the reading, what kinds of question does the method fail to reach?", find: [41, 43, 46, 47],
      hint: "Look at the last section, at what science can measure and what it cannot settle.",
      choices: [
        "Ones with no observable or repeatable event, and questions about whether something is right, beautiful or worth doing.",
        "Any question about living things, because they are too complicated to test.",
        "Questions that have already been answered by somebody else.",
        "Questions about events that happened more than a hundred years ago."
      ], right: 0 }
  ]
}
,

/* ═════════════ Life Science Unit 1 Lesson 4 — Science You Use Every Day ═════
   Closes the unit by turning it outward: the method is not a school subject,
   it is something Kolten is on the receiving end of every day. The Micah 6:8
   verse is the point of the lesson, not decoration on it — new power is a new
   choice, and the choice is a moral one the method cannot make for you.
   ────────────────────────────────────────────────────────────────────────── */
{
  id: "science/science-you-use-every-day",
  slug: "science-you-use-every-day",
  title: "Science You Use Every Day",
  unit: "Life Science &middot; Unit 1 &middot; Lesson 4",
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 4 },
  shelf: { grades: [7], subject: "Science",
    thumb: true,   /* Paul's art, 2026-08-31. Source PNG on his Desktop; see Lesson 1. */
    blurb: "What the method has already done to your ordinary morning, and the choices it hands you.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 4", "Life Science"],
  dek: "You used a dozen scientific discoveries before breakfast without noticing one of them. Every one of them also handed somebody a decision.",
  scripture: {
    ref: "Micah 6:8",
    text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
  },
  parts: [
    { title: "Before You Left The Kitchen", s: [
      "Think back through this morning before you did anything you would call science.",
      "The milk was still good, because somebody worked out that heating it and sealing it keeps organisms from spoiling it.",
      "That process is called pasteurisation, and it is named after the man with the curved flask from Lesson 2.",
      "The same discovery that ended a two-hundred-year argument is also the reason your breakfast was safe.",
      "The water from the tap was treated so it would not make you ill.",
      "If you have ever taken an antibiotic, you have used the knowledge that specific organisms cause specific illnesses.",
      "None of that felt like science while you were doing it.",
      "That is what a finished discovery looks like: it stops being remarkable and turns into ordinary life."
    ]},
    { title: "Technology Is The Method Applied", s: [
      "There is a useful distinction here that people blur constantly.",
      "Science is finding out how something works.",
      "Technology is using what was found out to build something that does a job.",
      "Pasteur was doing science when he showed that organisms in dust spoil broth.",
      "The dairy that heats and seals your milk is doing technology.",
      "One does not automatically follow from the other, and the gap between them is often decades long.",
      "It also runs the other way more often than people expect.",
      "Better instruments let scientists see what they could not see before, and the microscope reopened the whole spontaneous generation argument."
    ]},
    { title: "Every New Power Is A New Choice", s: [
      "Here is the part that matters most in this lesson.",
      "Every time science makes something possible, somebody has to decide whether to do it.",
      "The method is very good at telling you what will happen if you do a thing.",
      "It is completely silent on whether you ought to.",
      "Knowing how to keep food from spoiling is not the same as deciding who gets fed.",
      "Knowing how to build something powerful is not the same as deciding what to point it at.",
      "Those are not scientific questions at all, and no experiment will ever answer one.",
      "They are questions about right and wrong, and everybody answers them, including the people who say they are not.",
      "Micah 6:8 gives the short version of the standard: do justly, love mercy, walk humbly.",
      "A person who can do a thing and asks first whether they should is not being unscientific.",
      "They are being an adult about it."
    ]},
    { title: "Reading A Claim Without Being Fooled", s: [
      "You are going to spend your life on the receiving end of claims that sound scientific.",
      "Some are careful and some are advertising, and telling them apart is a skill you can practise.",
      "Ask who ran the test, and whether anyone who wanted a different answer has checked it.",
      "Ask what was actually compared, because a claim with no control is a story.",
      "Ask how many, because something that worked for three people is not yet a result.",
      "Ask whether the person telling you gains something if you believe it.",
      "And notice the difference between studied and proved, which advertising works hard to blur.",
      "None of this requires a laboratory.",
      "It is the same instinct Spallanzani's critics had when they said the air in that flask had been ruined."
    ]},
    { title: "Your Part In It", s: [
      "You do not have to become a scientist for any of this to be yours.",
      "You will vote, you will make decisions about your own health, and you will raise people who ask you questions.",
      "Every one of those is a place where knowing how a claim gets tested changes what you do.",
      "The habit is small and it is the whole thing: ask what the evidence actually is, and ask what the right thing to do with it is.",
      "Those are two different questions and they both need answering.",
      "Proverbs called searching a matter out an honour, and this unit has been four lessons of exactly that.",
      "You learned what makes something alive, how people found out that life comes only from life, how the method works, and now what it costs and what it gives.",
      "The unit is done. The searching is not."
    ]}
  ],
  todo: { title: "What To Do Now", s: [
      "That is the reading done, and it is the last lesson in the unit. Two things left.",
      "First the word cards. Four words, each one explained inside the reading you just heard.",
      "Then four questions. The answer to each is in the text above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to that part and read it again.",
      "The one people trip on is science against technology. Read Technology Is The Method Applied again and look for which one FINDS OUT and which one BUILDS.",
      "After the questions, the Unit 1 Review is waiting. It covers all four lessons, so do not start it until the other three are ticked off."
  ] },
  words: [
    ["Pasteurisation", "Heating and sealing food so organisms cannot spoil it. Named after Louis Pasteur, whose curved flask ended the spontaneous generation argument."],
    ["Technology", "Using what science found out to build something that does a job. Science finds out how; technology puts it to work."],
    ["Control", "The thing you compare a result against. A claim with nothing to compare it to is a story, not a result."],
    ["Ethics", "The question of whether you should do a thing, as opposed to whether you can. No experiment answers it."]
  ],
  questions: [
    { q: "What is the difference between science and technology?", find: [9, 10, 11, 12],
      hint: "One of them finds out. The other builds.",
      choices: [
        "Science finds out how something works, and technology uses what was found out to build something that does a job.",
        "Science is done in schools and technology is done in factories.",
        "Technology is science that has been proved correct.",
        "Science deals with living things and technology deals with machines."
      ], right: 0 },
    { q: "Why can the scientific method not tell you whether you should do something?", find: [18, 19, 22, 23],
      hint: "Look at what the method is good at, and the sentence that says what it is silent on.",
      choices: [
        "Because it tells you what will happen if you do a thing but is silent on whether you ought to, which is a question of right and wrong.",
        "Because scientists are not allowed to have opinions about their own work.",
        "Because those questions will be answered by better experiments later on.",
        "Because right and wrong are not real questions and have no answers."
      ], right: 0 },
    { q: "Which of these best tests whether a scientific-sounding claim is trustworthy?", find: [29, 30, 31, 32],
      hint: "Look at the list of things to ask, and at what a claim with nothing to compare against is called.",
      choices: [
        "Ask who ran it, what it was compared against, how many were tested, and whether the person telling you gains if you believe it.",
        "Ask whether it appears in an advertisement, because advertisements are checked before they run.",
        "Ask whether it sounds complicated, because complicated claims are more likely to be true.",
        "Ask whether you already agree with it."
      ], right: 0 },
    { q: "How does pasteurisation connect this lesson to Lesson 2?", find: [1, 2, 3],
      hint: "Look at the milk in the first section, and who the process is named after.",
      choices: [
        "The same discovery that ended the spontaneous generation argument is what keeps milk from spoiling, so Pasteur's flask and your breakfast are the same finding.",
        "Pasteurisation was discovered by Redi when he covered his jars with gauze.",
        "It shows that spontaneous generation was correct after all, in food.",
        "It has no connection; it just happens to have a similar name."
      ], right: 0 }
  ]
}
];

module.exports = { LESSONS };
