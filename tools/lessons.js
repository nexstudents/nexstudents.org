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
  shelf: { grades: [7], subject: "History",
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
      "First the word cards. {C} words from the lesson, and the meaning of each one is sitting in the sentences you just heard.",
      "Then {q} questions. The answer to every one of them is somewhere in the text above, not in your memory.",
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
  shelf: { grades: [7], subject: "History",
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
      "First the word cards. {C} words from the lesson, and the meaning of each one is sitting in the sentences you just heard.",
      "Then {q} questions. The answer to every one of them is somewhere in the text above, not in your memory.",
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
    /* ⚠️ FIVE words, not four. Paul added Response on 2026-09-03. A count in a blurb
       goes stale silently - check it whenever `words` changes. */
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Five vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 1", "Life Science"],
  dek: "A stream moves, a dog moves, and a tree hardly moves at all. Only some of them are alive, and saying why is harder than it sounds.",
  scripture: {
    ref: "Genesis 2:7",
    text: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
  },
  /* 🚨 TEACHER NOTES, Paul's own text, 2026-09-03. Same headings as Lesson 3 -
     Goal / Key Concepts / Teaching Suggestion - which is why `ground` is a list of
     sections and not the fixed fields Lesson 2 started with.
     ⚠️ "Key Vocabulary" is MINE, not his; it renders from `words` so it duplicates
     nothing. Same addition as Lessons 2 and 3. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn the basic characteristics scientists use to identify living things and understand how organisms interact with their surroundings."
      ]},
      { h: "Key Concepts", p: [
        "All living things are called organisms and are made of one or more cells. Living things use energy, grow and develop, respond to their environment, maintain stable internal conditions, reproduce, and have inherited characteristics that help them survive.",
        "Pay special attention to stimulus, response, and adaptation. A stimulus causes a reaction. A response is what the organism does because of that stimulus. An adaptation is an inherited characteristic that helps an organism survive.",
        "Students should also understand homeostasis, which is an organism's ability to maintain relatively stable conditions inside itself."
      ]},
      { h: "Teaching Suggestion", p: [
        "Ask the student to compare a dog, a plant, and a rock. Have them explain which are alive and why. If they say, “Living things move,” point out that water and clouds move too. This helps students discover that scientists need several characteristics to determine whether something is alive.",
        "Near the end of the lesson, connect the complexity and organization of living things to God as Creator. Scripture teaches that life was intentionally created by God and that creation displays His workmanship."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
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
  /* ⚠️ ONE SITTING as of 2026-09-04. The questions come first and the word cards
     second, matching lesson-template.html's panel order. This block used to say word cards FIRST, the same way
     Lesson 2's did before Paul caught it on the page on 2026-09-03. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between a response and an adaptation.",
      "Read Adaptation again and look for which one is passed down and which one is decided in the moment.",
      "Then the word cards.",
      "Five words, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card to check yourself, then answer the vocabulary questions underneath it.",
      "If you can explain why a polar bear's fur is not a response, you have understood the hardest idea in this lesson."
  ] },
  /* Paul's definitions, 2026-09-03. FIVE words - Response is new; this lesson had four
     before and taught the word in the story without ever putting it on a card.
     ⚠️ Only four have a check question on Day Two: Paul wrote none for Response and one
     was NOT invented for him. build-lessons.js warns about the gap on every build. */
  words: [
    ["Organism", "A living thing."],
    ["Stimulus", "Something that causes an organism to react."],
    ["Response", "The reaction an organism makes because of a stimulus."],
    ["Homeostasis", "The ability to maintain relatively stable internal conditions."],
    ["Adaptation", "An inherited characteristic that helps an organism survive in its environment."]
  ],
  /* 🚨 findsAt = the story sentence count these `find` indexes were verified against.
     Change the story and the build stops until they are re-checked. See checkFinds(). */
  findsAt: 64,
  /* Paul's questions, 2026-09-03. The story was NOT rewritten for these - he confirmed
     it stays as it was - so every `find` was computed against the existing sentences. */
  questions: [
    { q: "Which statement best describes living things?", find: [7, 8, 10, 12, 14],
      hint: "The stream moves too. Look for the list of characteristics, not for one test.",
      choices: [
        "Anything that moves is alive.",
        "Living things share characteristics such as being made of cells, using energy, growing, responding, and reproducing.",
        "Anything that needs water is alive.",
        "Living things must be animals or plants."
      ], right: 1 },
    { q: "A dog hears its food bowl being filled and runs into the kitchen. Which choice correctly identifies the stimulus and response?", find: [23, 24, 26, 27],
      hint: "One of them causes the other. Work out which came first.",
      choices: [
        "The dog is the stimulus and the food is the response.",
        "Running is the stimulus and hearing is the response.",
        "The sound of the food being poured is the stimulus, and the dog running into the kitchen is the response.",
        "The dog's hunger is an adaptation."
      ], right: 2 },
    { q: "What is the difference between a response and an adaptation?", find: [25, 29, 31, 32],
      hint: "One is decided in the moment. The other was passed down.",
      choices: [
        "A response is a reaction to something happening, while an adaptation is an inherited characteristic that helps an organism survive.",
        "Responses happen only in animals, while adaptations happen only in plants.",
        "A response is inherited, while an adaptation happens immediately.",
        "There is no difference between them."
      ], right: 0 },
    { q: "What is homeostasis?", find: [13, 16, 19],
      hint: "Think about what your body does after you stop running.",
      choices: [
        "The ability of an organism to move.",
        "The process of producing offspring.",
        "The ability of an organism to maintain relatively stable conditions inside itself.",
        "The way plants get energy from sunlight."
      ], right: 2 }
  ],
  /* Paul's hand-written Day Two, 2026-09-03, replacing the generated check whose wrong
     answers were the other three definitions from this same lesson. Four checks for five
     cards - see `words`. */
  vocabQuestions: [
    { q: "What is an <i>organism</i>?",
      choices: [
        "Any object that moves.",
        "A living thing.",
        "Something made only of water.",
        "A nonliving part of the environment."
      ], right: 1 },
    { q: "What is a <i>stimulus</i>?",
      choices: [
        "Something that causes an organism to react.",
        "The reaction an organism makes.",
        "An inherited characteristic.",
        "The process of growing."
      ], right: 0 },
    { q: "What is <i>homeostasis</i>?",
      choices: [
        "Responding to a sound.",
        "Maintaining relatively stable conditions inside an organism.",
        "An organism growing larger.",
        "An inherited characteristic that helps survival."
      ], right: 1 },
    { q: "What is an <i>adaptation</i>?",
      choices: [
        "Any movement made by an animal.",
        "Something an organism learns during its lifetime.",
        "An inherited characteristic that helps an organism survive in its environment.",
        "Any change that happens around an organism."
      ], right: 2 }
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
    /* ⚠️ "Two", not "three". Said three while Spallanzani was in the story; his
       section came out in Paul's 2026-09-03 rewrite and this line did not follow it.
       Counts in a blurb or a dek are content that goes stale silently - check them
       whenever a section is added or removed. */
    blurb: "Two experiments across two hundred years, and the question neither of them could reach.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 2", "Life Science"],
  dek: "For hundreds of years people thought meat made maggots. Finding out it did not took two scientists, two hundred years, and one very oddly shaped bottle.",
  scripture: {
    ref: "Genesis 1:11",
    text: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
  },
  /* 🚨 REWRITTEN 2026-09-03 FROM PAUL'S OWN TEXT, sent in chat, the same way
     Lesson 1 was on 2026-08-31. This is item 29 - he said the lessons did not
     sound natural, and the fix is his voice, not a better edit of mine.
     ⚠️ His version DROPS Lazzaro Spallanzani, who used to sit between Redi and
     Pasteur as the "sealed flask, ruined air" objection. That is a choice, not
     an oversight: Pasteur's open curved neck answers the same objection on its
     own, so the middle step was costing a section and buying little. Do not
     quietly put him back.
     ⚠️ Markdown emphasis was stripped on the way in. Sentences render through
     textContent as word spans (see lesson-template.html), so a `**bold**` would
     ship as literal asterisks. The four terms he bolded are exactly the four
     word cards, so the emphasis is carried there instead.
     🚨 SENTENCE NUMBERS ARE LOAD-BEARING. `questions[].find` holds positions in
     this flat list. Adding or removing ANY sentence renumbers them - checkFinds()
     in build-lessons.js fails the build if they drift, so trust that, not memory. */
  parts: [
    { title: "Did Meat Really Make Maggots?", s: [
      "Hundreds of years ago, people noticed something strange.",
      "If meat was left outside, maggots eventually appeared.",
      "Since nobody could see where the maggots came from, many people believed the meat actually produced them.",
      "",
      "This idea became known as spontaneous generation, the belief that living things could naturally appear from nonliving material.",
      "",
      "It seemed reasonable at the time.",
      "The problem was that nobody had carefully tested it."
    ]},
    { title: "Redi Puts It to the Test", s: [
      "In 1668, Italian scientist Francesco Redi decided to experiment.",
      "He placed meat into different jars.",
      "Some were open, some were sealed, and others were covered with gauze that allowed air inside but prevented flies from reaching the meat.",
      "",
      "Maggots appeared on the meat in the open jars.",
      "They did not appear on the meat protected from flies.",
      "On the gauze covered jars, maggots appeared on the gauze where flies had laid their eggs.",
      "",
      "The answer became clear.",
      "The meat was not producing maggots.",
      "Flies were producing more flies.",
      "",
      "Redi had also demonstrated an important part of good science.",
      "He changed one variable while keeping other conditions similar.",
      "Experiments designed this way help scientists determine what is actually causing a result."
    ]},
    { title: "Pasteur Solves the Mystery", s: [
      "Scientists later discovered microorganisms, and some wondered whether these tiny living things might still appear spontaneously.",
      "",
      "In 1861, French scientist Louis Pasteur designed a clever experiment to find out.",
      "",
      "Pasteur boiled broth inside a special flask with a long curved neck.",
      "Air could still enter the flask, but dust and microorganisms became trapped in the curve before they could reach the broth.",
      "",
      "The broth remained free of microbial growth.",
      "When Pasteur allowed the broth to contact the trapped dust, microorganisms began growing.",
      "",
      "The microorganisms had not appeared from the broth.",
      "They had come from other microorganisms in the environment."
    ]},
    { title: "Life Comes From Life", s: [
      "Experiments like these helped establish the principle of biogenesis.",
      "Biogenesis means that living things come from other living things.",
      "",
      "Dogs come from dogs.",
      "Trees grow from seeds produced by other plants.",
      "Bacteria come from existing bacteria.",
      "Scientists have repeatedly observed this pattern in living things.",
      "",
      "But that creates an even bigger question.",
      "If life comes from life, where did the first life come from?"
    ]},
    /* 🚨 CLOSING SECTION REPLACED BY PAUL, 2026-09-03, later the same evening. The
       first version stopped at "we will keep asking both kinds of questions" - it
       named the two kinds of question and left it there. His version names the answer
       and quotes the two verses that carry it (Genesis 1:1, Acts 17:25).
       ⚠️ This does NOT breach the side-by-side rule → [[project-nexstudents-science-strand]].
       The rule is about the ORIGIN claim, and above this the two answers still sit
       beside each other with the experiments left undisputed. This is the lesson
       saying which one it holds, in a lesson whose own scripture block is Genesis 1:11.
       ⚠️ Straight quotes are escaped by esc() in build-lessons.js; the curly quotes in
       the two verse quotations are literal characters and pass through untouched. */
    { title: "The First Life", s: [
      "Redi and Pasteur did not answer where the first life came from.",
      "Their experiments began in a world where life already existed.",
      "Redi had flies around his jars, and Pasteur had microorganisms in the environment.",
      "Their experiments showed where new organisms came from under the conditions they tested, but they did not recreate or observe the beginning of life itself.",
      "",
      "Scientists continue to investigate ideas about how the earliest life could have arisen from nonliving chemistry.",
      "The Bible gives a different answer by identifying the source of life as God Himself.",
      "",
      "Genesis 1 describes God creating plants and animals and commanding them to reproduce according to their kinds.",
      "Genesis 2:7 describes God forming man from the dust of the ground and giving him the breath of life.",
      "This connects with something we still observe today: life comes from life.",
      "Scripture takes that pattern back to its beginning and points to God as the ultimate giver of life.",
      "",
      "The incredible complexity of life gives us something else to consider.",
      "Even a tiny cell contains organized structures and biological information that work together to keep it alive.",
      "Christians can look at this complexity and recognize evidence of purposeful and intelligent design.",
      "",
      "If life shows evidence of intelligent design, it is reasonable to ask about an Intelligent Designer.",
      "The Bible identifies that Designer as God, our Creator.",
      "He is called the Creator for a reason.",
      "Genesis begins, “In the beginning God created the heaven and the earth” (Genesis 1:1).",
      "Acts 17:25 also tells us that God “giveth to all life, and breath, and all things.”",
      "",
      "Science gives us powerful tools for studying how living things work and reproduce.",
      "Scripture takes us to the deeper question of who stands behind life and creation.",
      "As we continue studying life science, we can examine the evidence carefully while recognizing the amazing order and design of the world God created."
    ]}
  ],
  /* 🚨 TEACHER NOTES, Paul's own text, 2026-09-03. The first `ground` block on a
     READING lesson - maths and English already had one, this pipeline did not.
     ⚠️ The shape is deliberately NOT the maths/English one (whatItIs, whyItMatters,
     commonMistake, whenStuck). Paul wrote these as Goal / Teaching / Vocabulary /
     Biblical Connection and a reading lesson is a different animal, so it gets its
     own shape rather than having his words folded into fields they do not fit.
     🚨 THERE IS NO `vocab` FIELD HERE ON PURPOSE. His notes listed the same four
     terms that are already in `words` below. Storing them twice is how a definition
     gets changed in one place and silently disagrees in the other - the same drift
     that came off the home page six times. requireGround() REFUSES a vocab key and
     the template renders the list from `words`.
     ⚠️ No "when stuck" field yet. That is the field that earns its keep in the maths
     notes and this shape drops it; `teaching` half covers it. Optional fifth block
     if Paul wants it - do not invent one for him. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn how experiments by Francesco Redi and Louis Pasteur challenged spontaneous generation and helped establish the principle of biogenesis, which states that living things come from other living things."
      ]},
      { h: "Teaching the Lesson", p: [
        "Begin by asking: “If you leave food outside and maggots appear, where did the maggots come from?” Explain that people once believed they came directly from the meat. This idea was called spontaneous generation.",
        "Redi tested this idea using meat in different jars. Later, Pasteur performed an even stronger experiment using his famous swan neck flask. His flask allowed air inside while keeping dust and microorganisms away from the broth. Life appeared only when microorganisms were able to reach it.",
        "Explain that this evidence supported biogenesis."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Biblical Connection", p: [
        "Science can study how living things reproduce and where new organisms come from today. The Bible takes the question further by identifying God as the Creator and source of life.",
        "Genesis 1 repeatedly describes living things reproducing according to their kinds. This provides a natural connection to the pattern students observe in biogenesis: life produces life."
      ]}
    ]
  },
  /* 🚨 THE ORDER HERE MUST MATCH THE PAGE, and it did not. Paul caught it 2026-09-03:
     this said word cards FIRST, then questions. The page is the other way round -
     lesson-template.html has Day One = "The Questions" and Day Two = "The Words",
     and build-lessons.js builds day 1 from `questions` and day 2 from the vocabulary.
     It also never mentioned that the work is split across two days at all, which is
     the single most useful thing it could say.
     ⚠️ It is the LAST thing the student hears, so it is the instruction that actually
     gets followed. Check it against the template whenever the day split changes. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is what Pasteur's curved neck was for.",
      "Read Pasteur Solves the Mystery again and look for what the shape let IN and what it kept OUT.",
      "Then the word cards.",
      "Four words, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card to check yourself, then answer the four vocabulary questions underneath it.",
      "If you can explain why the neck had to stay open, you have understood the best experiment in this lesson."
  ] },
  /* ⚠️ VARIABLE was worded three different ways across Paul's three documents -
     the old card said "the one thing you change on purpose", his teacher notes said
     "something that is changed", his answer key said "can change or be measured".
     The card has to agree with the vocabulary check or a student reasons his way to
     the wrong box, so the ANSWER KEY wording wins here and in Q7. */
  words: [
    ["Spontaneous Generation", "The old belief that living things could naturally appear from nonliving material. Rags making mice, meat making maggots. Every careful test of it failed."],
    ["Biogenesis", "The principle that living things come from other living things. What replaced spontaneous generation after Pasteur."],
    ["Variable", "Something that can change or be measured during an experiment. Redi changed only the covering on the jars."],
    ["Controlled Experiment", "A test designed to determine how changing one factor affects the result."]
  ],
  /* Paul's questions, 2026-09-03. Every `find` was checked line by line against the
     rewritten story, not carried over. */
  /* 🚨 findsAt = the number of STORY sentences those indexes were verified against.
     Change the story and the build stops until they are re-checked. It exists because
     an index can stay in range and still be wrong: merging two sentences into one on
     2026-09-03 left question 4 pointing one line into the next paragraph, and the
     range check passed. See checkFinds() in build-lessons.js. */
  findsAt: 55,
  questions: [
    { q: "What did Redi's experiment with meat show?", find: [9, 10, 11, 13, 14],
      hint: "Compare the open jars with the ones the flies could not reach.",
      choices: [
        "Meat needs air to stay alive.",
        "Maggots came from flies, not from the meat itself.",
        "Maggots only grow inside sealed jars.",
        "Meat can produce living things."
      ], right: 1 },
    { q: "Why was the curved neck on Pasteur's flask important?", find: [20, 21, 22],
      hint: "Think about what the shape let IN and what it kept OUT.",
      choices: [
        "It prevented all air from entering.",
        "It made the broth boil faster.",
        "It allowed air inside while trapping dust and microorganisms.",
        "It kept the broth colder."
      ], right: 2 },
    { q: "What does biogenesis mean?", find: [26, 27],
      hint: "It is the principle that replaced spontaneous generation.",
      choices: [
        "Life can appear from nonliving material.",
        "All living things are made of cells.",
        "Living things come from other living things.",
        "All organisms need sunlight."
      ], right: 2 },
    { q: "Why did Pasteur's experiment not answer where the first life came from?", find: [35, 36, 37],
      hint: "Look at what was already in the room before the experiment started.",
      choices: [
        "His microscope was not powerful enough.",
        "His experiment already took place in a world containing living organisms.",
        "His experiment failed.",
        "He forgot to test the broth."
      ], right: 1 }
  ],
  /* 🚨 HAND-WRITTEN DAY 2, Paul's Q5-8. Without this key build-lessons.js GENERATES
     the vocabulary check, using the other three definitions as the wrong answers.
     That works, but every distractor is then a definition from the same short list,
     so the shape of the question gives the game away. Paul's distractors are real
     wrong ideas ("the study of microscopes"), which is a harder and fairer test.
     ⚠️ The generator stays as the fallback for lessons with no hand-written set. */
  vocabQuestions: [
    { q: "What is <i>spontaneous generation</i>?",
      choices: [
        "The old belief that living things could naturally appear from nonliving material.",
        "The principle that life comes from other life.",
        "Something changed during an experiment.",
        "An experiment using controlled conditions."
      ], right: 0 },
    { q: "What is <i>biogenesis</i>?",
      choices: [
        "Life appearing from nonliving material.",
        "The principle that living things come from other living things.",
        "A change made during an experiment.",
        "The study of microscopes."
      ], right: 1 },
    { q: "What is a <i>variable</i>?",
      choices: [
        "The final answer to an experiment.",
        "Something that can be changed or measured in an experiment.",
        "A living organism used in an experiment.",
        "Something that must always stay the same."
      ], right: 1 },
    { q: "What is a <i>controlled experiment</i>?",
      choices: [
        "An experiment where everything is changed.",
        "An experiment without a question.",
        "A test designed to determine how changing one factor affects the result.",
        "An experiment that always proves the scientist correct."
      ], right: 2 }
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
    /* ⚠️ FIVE words here, not four. Paul added Observation on 2026-09-03. A count in a
       blurb goes stale silently - check it whenever `words` changes. Same class of bug
       as the "three scientists" dek on Lesson 2. */
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Five vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 3", "Life Science"],
  dek: "Most people think science is a body of facts to memorise. It is closer to a set of rules for arguing honestly about what is true.",
  scripture: {
    ref: "Proverbs 25:2",
    text: "It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.",
  },
  /* 🚨 TEACHER NOTES, Paul's own text, 2026-09-03. HIS HEADINGS ARE NOT LESSON 2's -
     Goal / Key Concepts / Teaching Suggestion, with the point about creation folded
     into the closing paragraph instead of standing as its own Biblical Connection.
     That difference is why `ground` is a list of sections rather than fixed fields.
     ⚠️ "Key Vocabulary" is MINE, not his, matching Lesson 2. It renders from `words`
     so it duplicates nothing, but it is the one heading here he did not write. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn that science is not simply a collection of facts. It is a method of asking questions, testing ideas, studying evidence, and correcting mistakes."
      ]},
      { h: "Key Concepts", p: [
        "The scientific process begins with observation. Observations lead to questions, and questions can lead to a hypothesis, which is a possible explanation that can be tested. Scientists then design experiments, compare results, and draw conclusions based on evidence.",
        "Students should also understand that a scientific theory and a scientific law are different. A theory explains patterns or events using a large body of evidence. A law describes a consistent pattern or relationship in nature. A theory does not eventually become a law."
      ]},
      { h: "Teaching Suggestion", p: [
        "Begin with something simple. Drop a pencil and ask, “Why did it fall?” The student observed something, but observation alone does not explain it. This is a good way to introduce the difference between seeing something happen and investigating why it happens.",
        "Near the end, remind students that science is an excellent tool for studying the physical world, but it cannot answer every kind of question. Scripture teaches that the world science investigates is God's creation."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },
  /* 🚨 REWRITTEN 2026-09-03 FROM PAUL'S OWN TEXT, the third lesson through item 29 after
     Lesson 1 (2026-08-31) and Lesson 2 (earlier the same evening).
     ⚠️ Markdown emphasis stripped on the way in - sentences render through textContent as
     word spans, so a `**bold**` would ship as literal asterisks. The five terms he bolded
     are the five word cards.
     ⚠️ The verse quotations keep their curly quotes; esc() only touches backslashes and
     straight double quotes, so they pass through untouched.
     🚨 SENTENCE NUMBERS ARE LOAD-BEARING - see `findsAt` below. */
  parts: [
    { title: "Science Is More Than Facts", s: [
      "When you hear the word science, you might picture a giant textbook filled with facts you have to memorize.",
      "But science is much more interesting than that.",
      "",
      "Science is a way of investigating the natural world.",
      "Scientists observe what happens, ask questions, test ideas, and examine the results.",
      "Most importantly, good science allows ideas to be tested and corrected when the evidence does not support them.",
      "",
      "Think back to Redi and Pasteur.",
      "Redi did not prove his idea simply by saying, “Trust me, I am a scientist.”",
      "He designed an experiment that other people could examine and repeat.",
      "",
      "That is an important part of science."
    ]},
    { title: "It Starts With Observation", s: [
      "Science often begins when someone notices something interesting.",
      "This is called an observation.",
      "",
      "Maybe one plant near a window grows faster than another.",
      "Maybe bread left on the counter develops mold.",
      "Maybe you notice that objects always fall toward the ground when you drop them.",
      "",
      "Observation leads to questions.",
      "",
      "Why did that happen?",
      "What caused it?",
      "Would it happen again?",
      "",
      "A good scientific question is one that scientists can investigate using observations, measurements, experiments, or other evidence."
    ]},
    { title: "From Question to Hypothesis", s: [
      "After asking a question, a scientist may form a hypothesis.",
      "A hypothesis is a possible explanation or answer that can be tested.",
      "",
      "Imagine you notice that a plant near the window grows faster than a plant across the room.",
      "You might form the hypothesis:",
      "The plant grows faster because it receives more sunlight.",
      "",
      "Now you have something you can test.",
      "You could grow similar plants while changing the amount of light they receive and compare what happens.",
      "",
      "A good hypothesis must allow evidence to support it or show that it needs to be changed."
    ]},
    { title: "Testing the Idea", s: [
      "Scientists use experiments to test hypotheses.",
      "A good experiment tries to change one important factor while keeping other conditions as similar as possible.",
      "Scientists may also use a control, which provides something to compare the experimental results against.",
      "",
      "Then comes one of the most important parts of science: following the evidence.",
      "",
      "Sometimes the results support the hypothesis.",
      "Sometimes they do not.",
      "",
      "Finding out that your hypothesis was wrong does not mean the experiment failed.",
      "It means you learned something.",
      "Scientists can change their ideas and test again.",
      "That is one of the strengths of science."
    ]},
    { title: "Theory Does Not Mean Guess", s: [
      "You may hear someone say, “That's just a theory.”",
      "In everyday conversation, theory can mean a guess.",
      "In science, it means something much stronger.",
      "",
      "A scientific theory is a broad explanation of the natural world that is supported by a large amount of evidence and has been tested many times.",
      "A scientific law has a different job.",
      "A law describes a consistent pattern or relationship observed in nature.",
      "",
      "A simple way to remember the difference is:",
      "A theory helps explain.",
      "A law describes a pattern or relationship.",
      "",
      "A theory does not become a law when scientists collect enough evidence.",
      "They have different purposes."
    ]},
    { title: "Can Science Answer Everything?", s: [
      "Science is an incredibly powerful tool, but every tool has a purpose.",
      "",
      "A microscope can help you examine a cell, but it cannot tell you whether stealing is wrong.",
      "A thermometer can measure temperature, but it cannot measure love.",
      "Science can study what happens inside the human brain, but scientific measurements alone cannot determine the purpose of human life.",
      "",
      "Questions about morality, meaning, purpose, and God are not answered simply by running another laboratory experiment.",
      "",
      "That does not make those questions unimportant.",
      "It means we need to recognize what science was designed to investigate and what it was not."
    ]},
    { title: "Studying God's Creation", s: [
      "For Christians, studying science can be one way of studying the incredible world God created.",
      "",
      "Psalm 19:1 says, “The heavens declare the glory of God; and the firmament sheweth his handywork.”",
      "",
      "Think about what that means.",
      "When we study stars, cells, animals, plants, energy, or the human body, we are examining something Scripture says ultimately came from God.",
      "Romans 1:20 also teaches that God's “eternal power and Godhead” can be understood through the things He has made.",
      "",
      "The order we discover in nature is what makes science possible in the first place.",
      "Scientists expect experiments to produce meaningful results because nature behaves in consistent and understandable ways.",
      "",
      "For Christians, that order should not point us away from God.",
      "It can point us back to the Creator.",
      "",
      "God gave us minds capable of asking questions, observing His creation, and discovering how parts of it work.",
      "Science gives us tools to investigate that creation.",
      "Scripture reveals truths about the Creator, our purpose, morality, and our relationship with Him.",
      "",
      "We do not have to be afraid of asking questions.",
      "We should learn to ask good questions, examine evidence carefully, admit when we are wrong, and continue searching for truth.",
      "",
      "As Proverbs 25:2 says, “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.”",
      "",
      "Science is one way we can search out the amazing details of the world God made."
    ]}
  ],
  /* ⚠️ ONE SITTING as of 2026-09-04. The questions come first and the word cards
     second, matching lesson-template.html's panel order. Lesson 2 shipped with them the wrong way round and Paul
     caught it on the page, not in the data. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between a theory and a law.",
      "Read Theory Does Not Mean Guess again and look for what each one is FOR.",
      "Then the word cards.",
      "Five words this time, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card to check yourself, then answer the vocabulary questions underneath it.",
      "If you can say why a theory never turns into a law, you have understood the hardest idea in this lesson."
  ] },
  /* Paul's definitions, 2026-09-03. FIVE words - Observation is new; this lesson had four
     before. ⚠️ Only four have a check question on Day Two: Paul wrote none for Observation
     and one was NOT invented for him. build-lessons.js warns about the gap every build. */
  words: [
    ["Observation", "Something noticed or measured about the natural world."],
    ["Hypothesis", "A possible explanation or answer that can be tested using evidence."],
    ["Control", "Something that provides a comparison in an experiment."],
    ["Theory", "A broad explanation supported by a large amount of evidence and repeated testing."],
    ["Law", "A description of a consistent pattern or relationship observed in nature."]
  ],
  /* 🚨 findsAt = the story sentence count these `find` indexes were verified against.
     Change the story and the build stops until they are re-checked. See checkFinds(). */
  findsAt: 71,
  questions: [
    { q: "Why is science more than just a collection of facts?", find: [2, 3, 4],
      hint: "Look for what scientists DO, not for what they have collected.",
      choices: [
        "Because scientific facts are mostly guesses.",
        "Because science is a method of observing, asking questions, testing ideas, and examining evidence.",
        "Because scientists do not need facts.",
        "Because science only uses experiments."
      ], right: 1 },
    { q: "What makes a hypothesis useful in science?", find: [20, 24, 26],
      hint: "A hypothesis nobody can check is no use to anybody.",
      choices: [
        "It can be tested using evidence.",
        "It must always be correct.",
        "It must come from a famous scientist.",
        "It cannot be changed once it is written."
      ], right: 0 },
    { q: "What is the difference between a scientific theory and a scientific law?", find: [40, 41, 42, 44],
      hint: "One of them explains. The other one describes.",
      choices: [
        "A theory is a guess and a law is a proven theory.",
        "A theory explains while a law describes a consistent pattern or relationship.",
        "Theories are used in biology and laws are used in physics.",
        "Every theory eventually becomes a law."
      ], right: 1 },
    { q: "Why can science not answer every kind of question?", find: [48, 52, 54],
      hint: "Think about the microscope and the thermometer, and what neither one could measure.",
      choices: [
        "Scientists have not performed enough experiments yet.",
        "Science only works with living things.",
        "Science investigates the natural world using evidence, but questions such as morality and purpose require other kinds of reasoning.",
        "Science cannot answer difficult questions."
      ], right: 2 }
  ],
  /* Paul's hand-written Day Two, 2026-09-03. Four checks for five cards - see `words`. */
  vocabQuestions: [
    { q: "What is a <i>hypothesis</i>?",
      choices: [
        "A possible explanation that can be tested.",
        "The final answer to every experiment.",
        "A scientific law.",
        "Something a scientist already knows is true."
      ], right: 0 },
    { q: "What is a <i>control</i>?",
      choices: [
        "Something used for comparison during an experiment.",
        "The scientist performing the experiment.",
        "The answer to a hypothesis.",
        "Something that must be changed."
      ], right: 0 },
    { q: "What is a <i>scientific theory</i>?",
      choices: [
        "An idea with no evidence.",
        "A broad explanation supported by a large amount of evidence and testing.",
        "A law that has not been proven yet.",
        "A scientist's personal opinion."
      ], right: 1 },
    { q: "What is a <i>scientific law</i>?",
      choices: [
        "A rule made by scientists.",
        "A theory that became completely proven.",
        "A description of a consistent pattern or relationship observed in nature.",
        "An explanation with no evidence."
      ], right: 2 }
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
  /* 🚨 TEACHER NOTES, Paul's own text, 2026-09-03. Goal / Key Concepts / Teaching
     Suggestion, the same headings as Lessons 1 and 3.
     ⚠️ "Key Vocabulary" is MINE, not his; it renders from `words` so it duplicates
     nothing. Same addition as the other three science lessons. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will discover how scientific discoveries affect everyday life and learn the difference between science and technology. They will also learn why evidence matters and why knowing what we can do is different from deciding what we should do."
      ]},
      { h: "Key Concepts", p: [
        "Science helps us discover how the natural world works. Technology uses knowledge to solve problems or accomplish tasks. Evidence is information gathered through observation, measurement, and testing. Ethics deals with questions about what is right and wrong."
      ]},
      { h: "Teaching Suggestion", p: [
        "Ask the student to name three things they used before starting school today. A refrigerator, phone, medicine, clean water, toothpaste, or even breakfast can lead to a scientific discovery.",
        "Near the end, emphasize that knowledge gives us responsibility. Science can tell us what is possible, but Scripture helps guide Christians in how knowledge should be used wisely and for good."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },
  /* 🚨 REWRITTEN 2026-09-03 FROM PAUL'S OWN TEXT. The fourth and last science lesson
     through item 29, after Lessons 1, 2 and 3 the same evening.
     ⚠️ ONE EDIT TO HIS TEXT, flagged to him and agreed: the four evidence questions
     arrived as a single run - "You can ask questions such as: Who tested it? What did
     they actually find? ..." - which reads aloud as one highlighted block four
     questions long. They are separate sentences here, the way Lesson 3 handles "Why
     did that happen? What caused it?", so his lead-in became "such as these."
     ⚠️ US spelling "pasteurization" throughout, matching his text. The old word card
     said "Pasteurisation" and the story said the same; both are US now so the card and
     the story agree, which is what matters.
     ⚠️ Markdown emphasis stripped - sentences render through textContent as word spans.
     🚨 SENTENCE NUMBERS ARE LOAD-BEARING - see `findsAt` below. */
  parts: [
    { title: "You Used Science Before Breakfast", s: [
      "You probably used science today without even thinking about it.",
      "",
      "Maybe you opened the refrigerator and poured a glass of milk.",
      "You turned on a faucet and drank clean water.",
      "You checked the weather on a phone or used toothpaste to brush your teeth.",
      "",
      "None of those things probably felt like a science experiment, but scientific discoveries helped make all of them possible.",
      "",
      "Take milk as an example.",
      "In Lesson 2, you learned about Louis Pasteur and his experiments with microorganisms.",
      "That knowledge helped lead to pasteurization, a process that uses heat to reduce harmful microorganisms in foods such as milk.",
      "",
      "A discovery made in a laboratory eventually became something you use at the breakfast table.",
      "",
      "That is science at work in everyday life."
    ]},
    { title: "Science and Technology", s: [
      "Science and technology are closely connected, but they are not exactly the same thing.",
      "",
      "Science investigates how the natural world works.",
      "Technology applies knowledge to solve problems or accomplish tasks.",
      "",
      "Pasteur was doing science when he studied microorganisms.",
      "Using knowledge about microorganisms to make food safer is an example of technology.",
      "",
      "The same relationship appears everywhere.",
      "Scientists study electricity, while engineers use knowledge about electricity to create useful devices.",
      "Scientists study weather, while technology helps us track storms and predict dangerous conditions.",
      "",
      "Science helps us understand.",
      "Technology helps us put knowledge to work."
    ]},
    { title: "Look at the Evidence", s: [
      "You will hear scientific sounding claims throughout your life.",
      "A commercial might say a product is “scientifically tested.”",
      "Someone online might claim that a certain food, medicine, or product has an amazing effect.",
      "",
      "Do not believe something simply because it sounds scientific.",
      "Ask about the evidence.",
      "",
      "Evidence is information gathered through observation, measurement, testing, and other reliable methods.",
      "",
      "You can ask questions such as these.",
      "",
      "Who tested it?",
      "What did they actually find?",
      "Was there something to compare it with?",
      "Have other researchers found similar results?",
      "",
      "Asking questions does not mean rejecting science.",
      "Asking careful questions is part of thinking scientifically."
    ]},
    { title: "Just Because We Can, Should We?", s: [
      "Scientific knowledge can give people incredible abilities, but knowledge also brings responsibility.",
      "",
      "Imagine that scientists discover how to build an extremely powerful machine.",
      "Science can help explain how to build it and what it can do.",
      "",
      "But science alone cannot decide whether using it in a particular way is right or wrong.",
      "",
      "Questions about right and wrong are questions of ethics.",
      "",
      "This is an important difference.",
      "Science can help us understand what we can do.",
      "Ethics asks what we should do.",
      "",
      "The more powerful our knowledge becomes, the more important wisdom becomes too."
    ]},
    { title: "Knowledge With Wisdom", s: [
      "The Bible has a great deal to say about knowledge and wisdom.",
      "",
      "Proverbs 2:6 says, “For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.”",
      "",
      "God gave human beings minds capable of learning about His creation.",
      "We can discover microorganisms, study cells, understand electricity, build machines, develop medicines, and explore places people once could never reach.",
      "",
      "But being able to do something does not automatically mean we should do it.",
      "",
      "Micah 6:8 tells us “to do justly, and to love mercy, and to walk humbly with thy God.”",
      "",
      "That gives Christians an important way to think about scientific knowledge.",
      "We should ask not only “Can we do this?” but also “Is this right?",
      "Is it wise?",
      "Does it help people?",
      "Does it honor God?”",
      "",
      "Science gives us knowledge about creation.",
      "God gives us a standard for how that knowledge should be used."
    ]},
    { title: "Science Points Us Back to the Creator", s: [
      "Think about everything you have studied in this unit.",
      "",
      "You learned what makes something alive.",
      "You learned that living things come from other living things.",
      "You learned how scientists use observations and experiments to investigate the world.",
      "Now you have seen how those discoveries become part of everyday life.",
      "",
      "Behind all of it is an orderly world that can be studied and understood.",
      "",
      "Psalm 111:2 says, “The works of the LORD are great, sought out of all them that have pleasure therein.”",
      "",
      "When we study cells, organisms, water, energy, or anything else in creation, we are studying the works of the Creator.",
      "",
      "Science does not have to pull us away from God.",
      "The more we discover about the complexity, order, and usefulness of His creation, the more reasons we have to stand amazed at what He has made.",
      "",
      "God has given us the ability to learn.",
      "Our responsibility is to use what we learn with wisdom, humility, and purpose.",
      "",
      "The unit may be ending, but there is still an entire creation waiting to be explored."
    ]}
  ],
  /* ⚠️ ONE SITTING as of 2026-09-04. The questions come first and the word cards
     second, matching lesson-template.html's panel order. This block used to say word cards first, like Lessons 1 and 2
     did before Paul caught it on the page on 2026-09-03. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between science and technology.",
      "Read Science and Technology again and look for which one investigates and which one applies.",
      "Then the word cards.",
      "Four words, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card to check yourself, then answer the four vocabulary questions underneath it.",
      "This is the last lesson in the unit, so if you can say what ethics asks that science cannot, you have finished it properly."
  ] },
  /* Paul's definitions, 2026-09-03. Four words and four checks - a clean pair, unlike
     Lessons 1 and 3 where a card was left unchecked.
     ⚠️ US spelling, matching his story. The card used to say "Pasteurisation". */
  words: [
    ["Pasteurization", "A process that uses heat to reduce harmful microorganisms in foods and drinks."],
    ["Technology", "The application of knowledge to solve problems or accomplish tasks."],
    ["Evidence", "Information gathered through observation, measurement, testing, or other reliable methods."],
    ["Ethics", "Questions and principles concerning what is right and wrong."]
  ],
  /* 🚨 findsAt = the story sentence count these `find` indexes were verified against.
     Change the story and the build stops until they are re-checked. See checkFinds(). */
  findsAt: 68,
  questions: [
    { q: "What is the difference between science and technology?", find: [10, 11, 18, 19],
      hint: "One of them understands. The other one puts it to work.",
      choices: [
        "Science investigates how the natural world works, while technology applies knowledge to solve problems.",
        "Science happens in schools, while technology happens in factories.",
        "Science studies living things, while technology studies machines.",
        "There is no difference between them."
      ], right: 0 },
    { q: "Why is evidence important when someone makes a scientific claim?", find: [23, 24, 25],
      hint: "Think about what you are allowed to ask when something sounds scientific.",
      choices: [
        "Evidence makes a claim sound more impressive.",
        "Evidence gives us information from observation, measurement, or testing that we can examine.",
        "Evidence proves that a scientist can never be wrong.",
        "Evidence is only needed in laboratories."
      ], right: 1 },
    { q: "What is the difference between a scientific question and an ethical question?", find: [36, 37, 39],
      hint: "One asks what is possible. The other asks what is right.",
      choices: [
        "Scientific questions are important, but ethical questions are not.",
        "Science can help determine what is possible, while ethics considers what is right or wrong.",
        "Ethics is another name for an experiment.",
        "Scientific questions can never affect ethical decisions."
      ], right: 1 },
    { q: "How is pasteurization an example of science being used in everyday life?", find: [6, 7, 8],
      hint: "Go back to the milk, and to whose experiments it came from.",
      choices: [
        "It uses knowledge about microorganisms to help make foods such as milk safer.",
        "It causes microorganisms to appear in milk.",
        "It turns milk into medicine.",
        "It prevents milk from ever spoiling."
      ], right: 0 }
  ],
  /* Paul's hand-written Day Two, 2026-09-03, replacing the generated check whose wrong
     answers were the other three definitions from this same lesson. */
  vocabQuestions: [
    { q: "What is <i>pasteurization</i>?",
      choices: [
        "A process that uses heat to reduce harmful microorganisms in foods and drinks.",
        "A way of creating microorganisms.",
        "A method for freezing food.",
        "An experiment performed only by Louis Pasteur."
      ], right: 0 },
    { q: "What is <i>technology</i>?",
      choices: [
        "Memorizing scientific facts.",
        "Applying knowledge to solve problems or accomplish tasks.",
        "Studying only computers and electronics.",
        "Deciding whether something is right or wrong."
      ], right: 1 },
    { q: "What is <i>evidence</i>?",
      choices: [
        "Anything someone says is true.",
        "A person's opinion about an experiment.",
        "Information gathered through observation, measurement, testing, or other reliable methods.",
        "A scientific guess."
      ], right: 2 },
    { q: "What is <i>ethics</i>?",
      choices: [
        "The study of microorganisms.",
        "Questions and principles concerning what is right and wrong.",
        "A type of scientific experiment.",
        "Using science to create technology."
      ], right: 1 }
  ]
},

/* ═════════ English · Unit 1 · Lesson 1-1 — Kinds of Sentences ═════════════
   🚨 PAUL'S TEXT, pasted 2026-09-04, and it is the source. Written by him in
   ChatGPT from a brief read off Houghton Mifflin English Grade 7 (2001) pp32-33.
   Do not rewrite, tighten or "improve" any of it → BEHAVIOR.md.

   ⚠️ IT ARRIVED IN ~150 SEPARATE MESSAGES from his phone and twelve lines came
   through damaged, always the same way: one letter jumped to the end of the line.
   "qstion" for question, "basketll?ba" for basketball, "needsxtra emotion. e"
   for needs extra emotion. Every repair was shown to him as it happened and the
   full list is in the session log. NOTHING ELSE WAS CHANGED.
   ⚠️ "alway" in Colossians 4:6 is the King James wording and is NOT a repair.

   🚨 THIS IS THE FIRST ENGLISH LESSON BUILT ON THE READING SHAPE, not on
   build-english.js. That generator is hard-wired to the Verbs lesson - it
   validates that a `verb` appears in each sentence and that `kind` is "action"
   or "being" - so it cannot carry this lesson without being rewritten. Paul's
   content is a reading, a scripture block, four word cards and ten multiple
   choice questions, which is exactly what build-lessons.js already does.
   ⚠️ Part B, the six punctuation items, and Your Turn are NOT on this page. Paul:
   "maybe this one for homework or something like a worksheet." They go to
   build-worksheets.js.
   ────────────────────────────────────────────────────────────────────────── */
{
  /* ─────────────────────────────────────────────────────────────────────────
     MATHS 1-1 — A Plan for Problem Solving.

     🚨 THIS IS A MATHS LESSON IN lessons.js, AND THAT USED TO BE FORBIDDEN.
     CLAUDE.md said "keep maths OUT of lessons.js" because both generators write
     to lessons/maths/<slug>/ and the second one silently overwrites the first.
     That is now checked directly - see noSlugCollisions() in build-lessons.js -
     so the rule can be what it always meant: a lesson goes on the generator that
     matches its SHAPE. A division bracket belongs on build-math.js. Glencoe 1-1
     is the four-step method itself, so it is reading, an explainer, and typed
     arithmetic, which is this one.

     Source: Glencoe Mathematics: Applications and Connections, Course 2, 1998,
     pages 4-7. Titles and framing are OURS; the book's wording stays in the
     course file and is never rendered.

     🚨 THE EXAMPLES ARE PAUL'S AND THEY ARE DELIBERATELY EVERYDAY. Paul,
     2026-09-05: "this is like life examples too for the user to figure out what
     it would take to solve a problem they have", and "these are things we do
     everyday also ... like how much would everything cost in my shopping cart".
     He gave the Orlando drive himself. Framed generally, not about him:
     "dont frame it personal for me and Kolten but frame it generally."
     ⚠️ TWO DIFFERENT KINDS on purpose - "my point is to show two different
     examples." A rate you divide and check by multiplying, then a missing part
     inside a known total that you subtract and check by adding. Same method,
     two different ways of knowing you were right. */
  id: "maths/a-plan-for-problem-solving",
  slug: "a-plan-for-problem-solving",
  title: "A Plan for Problem Solving",
  unit: "Maths &middot; Chapter 1 &middot; Lesson 1-1",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 1 },
  shelf: { grades: [7], subject: "Maths",
    blurb: "Four steps that work on any problem, including the ones nobody sets you.",
    contains: [
      "The four steps, explained one at a time as the lesson reads",
      "Two everyday problems worked all the way through, with every number typed",
      "An estimate you have to commit to before the page will let you calculate",
      "Fourteen questions, including one that cannot be looked up",
    ] },
  eyebrow: ["Maths", "Chapter 1 &middot; Lesson 1-1", "Tools for Problem Solving"],
  dek: "Anyone can do the arithmetic once someone hands them the sum. The hard part is working out what the sum is.",
  scripture: {
    ref: "Proverbs 14:15",
    text: "The simple believeth every word: but the prudent man looketh well to his going.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn the four-step plan for solving a problem: Explore, Plan, Solve, Examine. The arithmetic in this lesson is easy on purpose. The skill being taught is deciding what to work out and knowing whether the answer makes sense."
      ]},
      { h: "Key Concepts", p: [
        "Explore means working out what you already know and what you are being asked. Plan means deciding what to do with those numbers, and estimating roughly what the answer should be. Solve means doing it. Examine means checking the answer against the estimate, and working backwards to see if you land where you started."
      ]},
      { h: "Why The Estimate Comes First", p: [
        "This is the part of the lesson worth defending. A student can get the answer to almost any of these from a phone in about four seconds. What a phone will not do is tell him the answer should have been between ten and twenty hours, which is the only thing that catches a wrong answer.",
        "So on this page the calculation stays locked until an estimate is entered. That is not a gimmick. It is the order the textbook itself teaches, and it is the habit that survives after the arithmetic is forgotten."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Two places. The first is Explore, where a problem hands you a number you do not need. The second is Examine, which most students skip because they believe the answer as soon as the calculator shows it. If he does the check every time on the easy problems, he still has the habit on the hard ones."
      ]},
      { h: "Teaching Suggestion", p: [
        "Ask him to make up a problem of his own before the end of the lesson: something he genuinely wants to know, like how long a drive takes or what a full shopping cart comes to. Proposing the question is half of what this lesson teaches, and it is the half no worksheet can ask for."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Question Comes First", s: [
      "Most math you have ever been handed came with the sum that someone has already written.",
      "Somebody else decided what to work out, and your job was the arithmetic.",
      "Real problems do not arrive like that.",
      "",
      "Say you live in Saint Louis, Missouri, and you want to drive to Orlando, Florida for a vacation.",
      "Nobody hands you a sum.",
      "You have a question: how long is this going to take?",
      "",
      "There is a routine for answering a question like that, and it is only four steps long."
    ]},

    { title: "The Four Steps", s: [
      "Explore.",
      "What do I know, and what am I trying to find?",
      "Plan.",
      "What math should I use, and about what should the answer be?",
      "Solve.",
      "Do the math.",
      "Examine.",
      "Does my answer make sense?",
      "",
      "That is the whole routine.",
      "Every problem in this lesson goes through those four questions in that order.",
      "Learn the routine and you can use it on a problem nobody has taught you."
    ]},

    { title: "Explore", s: [
      "Explore asks two things: what do I know, and what am I trying to find?",
      "",
      "For the drive, you know it is about a thousand miles.",
      "You know the highway speed is about sixty-five miles an hour.",
      "You are trying to find hours.",
      "",
      "There is a third question hiding inside Explore.",
      "Which of the things I know do I actually need?",
      "",
      "A problem might also tell you your car holds fourteen gallons of fuel.",
      "That is a real number, and here it's no use to you.",
      "It actually answers a different question, and it's about stopping for gas along the way.",
      "Noticing that is part of exploring.",
      "",
      "Explore is about identifying the information.",
      "You do not do any math yet."
    ]},

    { title: "Plan", s: [
      "The plan asks the other two questions: what math should I use, and about what should the answer be?",
      "",
      "For the drive, the math is a division.",
      "The distance divided by speed gives time.",
      "",
      "Now the second half of Plan, and it is the part most people tend to skip.",
      "Before you work anything out, decide roughly where the answer has to land.",
      "",
      "Here is exactly how.",
      "Pick a speed that is definitely too fast, and a speed that is definitely too slow.",
      "A hundred miles an hour is too fast, and a thousand divided by a hundred is ten hours.",
      "Fifty miles an hour is too slow, and a thousand divided by fifty is twenty hours.",
      "So the real answer has to sit between ten and twenty hours.",
      "",
      "Notice what just happened.",
      "We did not round sixty-five to a hundred, and we did not round it to fifty.",
      "Nobody would round sixty-five to a hundred.",
      "We built two fences, one on each side of the answer.",
      "",
      "Driving faster than you really will gets you there sooner than you really will.",
      "So ten hours is a fence the answer cannot go under.",
      "Driving slower than you really will takes longer than it really will.",
      "So twenty hours is a fence it cannot go over.",
      "You are not trying to be accurate here.",
      "You are trying to know roughly where the answer belongs before you calculate it."
    ]},

    { title: "Solve", s: [
      "Solve is the short step.",
      "You just do the math.",
      "",
      "A thousand divided by sixty-five is about fifteen point four hours.",
      "",
      "That is it.",
      "The thinking was in the two steps before this one."
    ]},

    { title: "Examine", s: [
      "Examine asks one question: does my answer make sense?",
      "",
      "First, check it against your fences.",
      "You said the answer had to be between ten and twenty hours.",
      "Fifteen point four is between ten and twenty.",
      "",
      "Second, work backwards.",
      "Division can be checked with multiplication.",
      "Fifteen point four times sixty-five is about a thousand, which is the distance you started with.",
      "Subtraction is checked with addition the same way round.",
      "",
      "If an answer fails either check, that is not a disaster.",
      "It means the plan was wrong, and now you know, which is the whole reason for checking."
    ]},

    { title: "A Calculator Is a Tool", s: [
      "You could have asked a phone how long the drive takes.",
      "",
      "A calculator can help with the arithmetic, and there is nothing wrong with using one.",
      "What it cannot do is understand the problem for you, or decide whether the answer makes sense.",
      "That part stays yours.",
      "",
      "Suppose you divide the wrong way round and get zero point zero six five.",
      "A calculator will show you that quite happily, because the arithmetic is correct.",
      "Your fences are what tell you it is nonsense.",
      "",
      "That is why the calculation on this page stays locked until you have made an estimate.",
      "",
      "The four steps work on anything you actually want to know.",
      "What the shopping comes to before you reach the till.",
      "Whether a team can still win the league.",
      "How long you have to save before you can buy the thing.",
      "The subject changes and the routine does not."
    ]},

    /* 🚨 PAUL'S CLOSING POINT, and he asked for it kept SHORT and natural:
       "God did not give us minds simply to memorize answers. He gave us the
       ability to reason, examine, solve problems, and grow in wisdom." Tied to
       the Examine step rather than sitting beside the lesson as decoration. */
    { title: "A Mind Made to Reason", s: [
      "God did not give us minds simply to memorize answers.",
      "He gave us the ability to reason, examine, solve problems, and grow in wisdom.",
      "",
      "Proverbs 14:15 says that the prudent man looketh well to his going.",
      "Looking well to your going is what the Examine step is.",
      "It means not simply believing the first answer that turns up, wherever it came from."
    ]}
  ],

  /* 🚨 THE FOUR STEPS ARE THE SPINE, and the explainer is where that becomes
     visible. The routine frame comes back at the top of each step, so the same
     four questions are on screen every time one of them is being taught. */
  visuals: [
    /* 🚨 THE ROUTINE IS BUILT UP, NOT SHOWN. Paul, 2026-09-05: "why not on each
       just show the words like Explore → with sentence 8 under it centered ...
       then in the series show Explore → Plan → with the sentence 10 under it and
       number 8 text gone."
       The chain grows a step at a time as each step is named, so the panel is
       assembling the routine while the student hears it rather than presenting a
       finished diagram he has to take in at once. The chain sits in the LABEL and
       that step's own question sits in the body, which is where the eye goes.
       ⚠️ There is deliberately no frame on "There is a routine ... four steps
       long". Showing all four there and then building them up immediately
       afterwards gives the answer away and makes the build-up pointless. */
    { when: "What do I know, and what am I trying to find?",
      kind: "Explore \u2192",
      body: "What do I know, and what am I trying to find?" },
    { when: "What math should I use, and about what should the answer be?",
      kind: "Explore \u2192 Plan \u2192",
      body: "What math should I use, and about what should the answer be?" },
    { when: "Do the math.",
      kind: "Explore \u2192 Plan \u2192 Solve \u2192",
      body: "Do the math." },
    { when: "Does my answer make sense?",
      kind: "Explore \u2192 Plan \u2192 Solve \u2192 Examine",
      body: "Does my answer make sense?" },

    /* Paul: "then in big bold text say in the panel That is the whole routine!"
       `shout` is a frame that is a statement rather than a diagram. */
    { when: "That is the whole routine.",
      kind: "All Four", shout: true,
      body: "That is the whole routine!" },

    /* Paul: "you can show each one popping them up one at a time Explore → Plan
       → Solve → Examine from left to right as that sentence speaks." */
    { when: "Every problem in this lesson goes through those four questions in that order.",
      kind: "In That Order",
      seq: ["Explore", "Plan", "Solve", "Examine"],
      note: "Every problem. Every time." },

    { when: "Explore asks two things: what do I know, and what am I trying to find?",
      kind: "Step 1 · Explore", body: "What do I know?   What am I finding?", mark: "?",
      note: "Information only. No math yet." },
    { when: "Which of the things I know do I actually need?",
      kind: "Explore", body: "1,000 miles   ·   65 mph", mark: "→ hours",
      note: "Two numbers you need, and one answer you want." },
    { when: "A problem might also tell you your car holds fourteen gallons of fuel.",
      kind: "Explore · Not Needed", ghost: "(14 gallons)", body: "1,000 miles   ·   65 mph",
      note: "A real number that answers a different question. Leave it out." },

    { when: "The plan asks the other two questions: what math should I use, and about what should the answer be?",
      kind: "Step 2 · Plan", body: "Which math?   About what answer?", mark: "?",
      note: "Choose the operation, then fence the answer in." },
    { when: "The distance divided by speed gives time.",
      kind: "Plan · The Operation", body: "Distance ÷ Speed", mark: "= Time",
      note: "Worth remembering. It comes back all year." },
    { when: "A hundred miles an hour is too fast, and a thousand divided by a hundred is ten hours.",
      kind: "Plan · Fence One", body: "1,000 ÷ 100", mark: "= 10",
      note: "Too fast to be real, so the time is too short to be real." },
    { when: "Fifty miles an hour is too slow, and a thousand divided by fifty is twenty hours.",
      kind: "Plan · Fence Two", body: "1,000 ÷ 50", mark: "= 20",
      note: "Too slow to be real, so the time is too long to be real." },
    { when: "So the real answer has to sit between ten and twenty hours.",
      kind: "Plan · Between The Fences", body: "10  <  answer  <  20", mark: "hours",
      note: "Decided before you calculate anything." },

    { when: "A thousand divided by sixty-five is about fifteen point four hours.",
      kind: "Step 3 · Solve", body: "1,000 ÷ 65", mark: "= 15.4",
      note: "Do the math. The short step." },

    { when: "Examine asks one question: does my answer make sense?",
      kind: "Step 4 · Examine", body: "10  <  15.4  <  20",
      note: "Inside the fences you built. So far so good." },
    { when: "Division can be checked with multiplication.",
      kind: "Examine · Backwards", body: "15.4 × 65", mark: "= 1,001",
      note: "Work it back and you land where you started." },

    { when: "Suppose you divide the wrong way round and get zero point zero six five.",
      kind: "Why The Fences Matter", body: "65 ÷ 1,000", mark: "= 0.065",
      note: "Correct arithmetic, wrong question. Only the fences catch this." },

    { when: "God did not give us minds simply to memorize answers.",
      blank: true }
  ],

  work: [
    { title: "Travel",
      ask: "You live in Saint Louis and you are driving to Orlando for a vacation. About how many hours of driving is it?",
      given: [["I know", "it is about 1,000 miles"],
              ["I know", "highway speed is about 65 miles an hour"],
              ["I know", "the tank holds 14 gallons — not needed here"],
              ["I am finding", "hours"]],
      estimate: { lo: 10, hi: 20, unit: "hours",
        intro: "Plan. The math is Distance ÷ Speed. Now build two fences: divide by a speed that is clearly too fast, then by one that is clearly too slow.",
        hint: "Too fast: 1,000 ÷ 100. Too slow: 1,000 ÷ 50.",
        why: "Between 10 and 20 hours. The real answer has to land in there." },
      solve: { expr: "1000 ÷ 65", answer: 15.4, tol: 0.1, unit: "hours",
        intro: "Solve. Do the math, to one decimal place.",
        why: "About 15.4 hours, and it landed between your fences." },
      examine: { expr: "15.4 × 65", answer: 1001, tol: 1, unit: "miles",
        intro: "Examine. Does it make sense? Work backwards — division is checked with multiplication.",
        why: "About 1,000 miles, the distance you started with. The answer holds." } },

    /* 🚨 THE ESTIMATE IS MODELLED, not just asked for. "the saving problem says
       to round the total both ways, but it is not obvious what numbers the
       student should choose." So the intro and the hint name them. */
    { title: "Saving Up",
      ask: "Over two months you saved $215 from mowing lawns. In the first month you saved $130. How much did you save in the second month?",
      given: [["I know", "$215 saved over two months"],
              ["I know", "$130 saved in month one"],
              ["I am finding", "dollars saved in month two"]],
      estimate: { lo: 70, hi: 90, unit: "dollars",
        intro: "Plan. The math is a subtraction. Build the fences the same way: take $130 off a total that is a bit too small, then off one that is a bit too big.",
        hint: "$200 − $130 = $70.  $220 − $130 = $90.",
        why: "Between $70 and $90. A tighter pair of fences than the drive, because only one number needed changing." },
      solve: { expr: "215 − 130", answer: 85, unit: "dollars",
        intro: "Solve. Now use the real numbers.",
        why: "$85, and it sits between your fences." },
      examine: { expr: "130 + 85", answer: 215, unit: "dollars",
        intro: "Examine. Work backwards — this time subtraction is checked with addition.",
        why: "$215, the total you started with. Different problem, different check, same four steps." } }
  ],

  words: [
    ["Explore", "Step one: what do I know, and what am I trying to find?"],
    ["Plan", "Step two: what math should I use, and about what should the answer be?"],
    ["Estimate", "A rough range worked out before the real answer, so you know where it should land."],
    ["Examine", "Step four: does my answer make sense? Check it against your estimate and work backwards."]
  ],

  /* 🚨 EIGHT QUESTIONS, not sixteen. "Sixteen questions after two worked problems
     feels too heavy for this lesson." Each one tests ONE step, and the tag says
     which world it comes from - the routine does not change when the subject does. */
  /* 74 story sentences; the finds below were verified against that count. */
  findsAt: 83,
  questions: [
    { tag: "Explore",
      q: "Explore asks two questions. Which pair?",
      find: [7, 18, 20],
      choices: [
        "What do I know, and what am I trying to find?",
        "Which operation, and roughly what answer?",
        "Is it right, and can I check it?",
        "How long will it take, and is it worth doing?"
      ], right: 0 },

    { tag: "Explore",
      q: "The drive problem tells you the car holds fourteen gallons. What should you do with that number?",
      find: [22, 23, 24, 25, 26],
      choices: [
        "Leave it out, because it answers a question you were not asked.",
        "Divide the miles by it, to get miles per gallon.",
        "Add it to the speed, since both describe the car.",
        "Use it, because a problem would not give you a number you did not need."
      ], right: 0,
      why: "Deciding what you do not need is part of Explore. Real problems come with spare numbers attached." },

    { tag: "Data Search",
      q: "A table gives a team's wins for five seasons and asks for the average. During which step do you pick out the five totals and work out what is being asked for?",
      find: [18, 27, 28],
      choices: ["Explore.", "Plan.", "Solve.", "Examine."],
      right: 0,
      why: "Gathering what you have and naming what you want is Explore, every time, whatever the subject." },

    { tag: "Plan",
      q: "Why does the lesson build the fences before doing the calculation, rather than after?",
      find: [32, 33, 45, 46],
      choices: [
        "So there is something to check the real answer against, decided before you had it.",
        "Because estimating is quicker than dividing.",
        "Because the estimate is usually close enough to use as the answer.",
        "So you can skip the calculation if the fences look narrow."
      ], right: 0,
      why: "Fences built afterwards just agree with whatever you already got." },

    { tag: "Travel",
      q: "A drive is about 340 miles and you average about 65 miles an hour. Roughly where should the answer land?",
      choices: ["Around 5 hours.", "Less than 1 hour.", "Around 15 hours.", "Around 30 hours."],
      right: 0,
      why: "340 ÷ 100 is about 3 and 340 ÷ 50 is about 7, so the answer sits between 3 and 7 hours. Around 5." },

    { tag: "Smart Shopping",
      q: "You have $48 and you want four games at about $15 each. Before working out the exact total, what can you already tell?",
      choices: [
        "Four at about $15 is about $60, so $48 is probably not enough.",
        "Four at about $15 is about $45, so $48 is probably enough.",
        "Nothing, until every price is added up exactly.",
        "Nothing, because the prices are only approximate."
      ], right: 0,
      why: "This is Plan doing its job on its own. You have your answer standing at the shelf, without adding anything up." },

    { tag: "Examine",
      q: "How do you check a division?",
      find: [55, 56],
      choices: [
        "Multiply the answer by what you divided by.",
        "Divide it a second time and see if you get the same thing.",
        "Add the two numbers together.",
        "Round both numbers and divide again."
      ], right: 0 },

    { tag: "Sports",
      q: "A player scored 96 points across two games and 51 in the first. Which check proves the second-game answer is right?",
      choices: [
        "Add the two games back together and see if you get 96.",
        "Divide 96 by 2 and compare.",
        "Multiply the answer by 51.",
        "Subtract the answer from 51."
      ], right: 0,
      why: "Same shape as the savings problem. A missing part inside a known total is checked by adding back." }
  ],

  vocabQuestions: [
    { q: "Which two questions is <i>Explore</i>?",
      choices: ["What do I know, and what am I finding?",
                "Which math, and about what answer?"], right: 0 },
    { q: "Which two questions is <i>Plan</i>?",
      choices: ["Which math, and about what answer?",
                "What do I know, and what am I finding?"], right: 0 },
    { q: "An <i>estimate</i> is made when?",
      choices: ["Before you calculate.", "After you calculate."], right: 0 },
    { q: "What does <i>Examine</i> ask?",
      choices: ["Does my answer make sense?", "Did I write it out neatly?"], right: 0,
      why: "0.065 hours for a thousand-mile drive is arithmetically correct and makes no sense at all." }
  ],

  todo: { title: "What To Do Now", s: [
      "{Q} questions, then {c} word cards with {v} more questions under them. {T} questions in all.",
      "Before those, work the two problems above.",
      "Both make you build your fences before the calculation will open, and that is on purpose.",
      "For every question, ask which of the four steps it belongs to: Explore, Plan, Solve, or Examine.",
      "Last, and this is the part that matters most.",
      "Write a problem of your own.",
      "Something you actually want to know, like how long a drive takes or what a full cart comes to.",
      "Write what you know, what you are finding, and the two fences.",
      "You do not have to solve it.",
      "Proposing it is the skill."
  ] }
},

{
  id: "english/kinds-of-sentences",
  slug: "kinds-of-sentences",
  title: "Kinds of Sentences",
  unit: "English &middot; Unit 1 &middot; Lesson 1-1",
  /* Houghton Mifflin puts this first in Unit 1, The Sentence, at page 32.
     `seq` is the order; the `unit` string above is a label and is never parsed. */
  seq: { unit: 1, unitTitle: "The Sentence", n: 1 },
  shelf: { grades: [7], subject: "English",
    blurb: "Four kinds of sentences, four different jobs, and the one case where the punctuation lies to you.",
    contains: [
      "A Ground Control panel for the teacher, in Paul's own words",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "Four vocabulary cards, each with a check question",
      "Ten questions, including the command that ends in an exclamation point",
    ] },
  eyebrow: ["English", "Unit 1 &middot; Lesson 1-1", "The Sentence"],
  dek: "A statement, a question, a command and a shout all look like sentences. Only their job tells you which is which.",
  scripture: {
    ref: "Proverbs 25:11",
    text: "A word fitly spoken is like apples of gold in pictures of silver.",
  },

  /* Paul's Teacher Notes, verbatim. Same four-section shape the science lessons
     use, plus the generated Key Vocabulary block. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn the four kinds of sentences and the punctuation that usually goes with each one: declarative, interrogative, imperative, and exclamatory."
      ]},
      { h: "Key Concepts", p: [
        "A declarative sentence makes a statement and usually ends with a period. An interrogative sentence asks a question and ends with a question mark. An imperative sentence gives a command or direction and usually ends with a period. An exclamatory sentence expresses strong feeling and ends with an exclamation point."
      ]},
      { h: "Where Students Get Stuck", p: [
        "The tricky part is commands with strong feeling. “Put your shoes away.” is an imperative sentence. “Get out of the way!” is also imperative because it gives a command, even though the exclamation point adds urgency."
      ]},
      { h: "Teaching Suggestion", p: [
        "Remind students that punctuation gives clues, but the purpose of the sentence tells us what kind it is. Also explain that exclamation points lose their power when we use them too often."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Four Sentences, Four Jobs", s: [
      "Imagine you are playing a game when someone walks into the room and says, “Dinner is ready.”",
      "You ask, “Can I finish this round?”",
      "Then you hear, “Put the controller down.”",
      "Suddenly someone yells, “The dog has your sandwich!”",
      "Those sentences are doing four different jobs.",
      "Let's find out what they are."
    ]},
    { title: "Declarative Sentences", s: [
      "A declarative sentence makes a statement.",
      "It gives information, tells a fact, or shares an idea.",
      "Declarative sentences usually end with a period.",
      "",
      "The game starts at seven.",
      "My brother finished the dishes.",
      "We studied Proverbs at church.",
      "",
      "Think of declarative as declare.",
      "You are declaring or telling something."
    ]},
    { title: "Interrogative Sentences", s: [
      "An interrogative sentence asks a question.",
      "It ends with a question mark.",
      "",
      "Did you finish your homework?",
      "Where is the basketball?",
      "Can we play one more round?",
      "",
      "If the sentence is asking for an answer, it is probably interrogative."
    ]},
    { title: "Imperative Sentences", s: [
      "An imperative sentence gives a command, direction, instruction, or request.",
      "It usually ends with a period.",
      "",
      "Clean your room.",
      "Pass me the basketball.",
      "Please open your Bible.",
      "",
      "Imperative sentences often leave out the subject because the sentence is speaking directly to you.",
      "When someone says, “Take out the trash,” the understood meaning is “You take out the trash.”",
      "",
      "But here is the tricky part.",
      "A command can also have strong feeling.",
      "Watch out!",
      "That is still an imperative sentence because it gives a command.",
      "The exclamation point simply shows urgency or strong feeling.",
      "",
      /* 🚨 PAUL'S OWN SENTENCE, LIFTED OUT OF HIS TEACHER NOTES, 2026-09-04.
         He asked for the imperative and exclamatory difference to be clearer:
         "it needs more clarification why a certain sentence is imperative over
         exclamatory." The rule that settles it was already written - it was just
         in the teacher panel, where only a parent reads it. Nothing invented;
         the line is moved to where the student meets the problem.
         ⚠️ The two sentences either side of it are mine, and they are signposts,
         not teaching. Say the word and they go. */
      "So how do you tell them apart when both end the same way?",
      "Punctuation gives clues, but the purpose of the sentence tells us what kind it is.",
      "Ask what the sentence is DOING.",
      "If it tells someone to do something, it is imperative, whatever mark is on the end."
    ]},
    { title: "Exclamatory Sentences", s: [
      "An exclamatory sentence expresses strong emotion or excitement.",
      "It ends with an exclamation point.",
      "",
      "That goal was incredible!",
      "I cannot believe we won!",
      "This is the best pizza ever!",
      "",
      "Exclamation points are powerful because they make a sentence feel louder or stronger.",
      "But if every sentence ends with one, they stop feeling special.",
      "Think of an exclamation point like shouting.",
      "You would not want to shout everything you say!",
      "Use it when the sentence really needs extra emotion."
    ],
    /* 🚨 EVERY LINE IN `s` HERE IS QUOTED FROM THE STORY ABOVE, and requireBoxes()
       in build-lessons.js fails the build if that ever stops being true. Paul:
       "an imperative sentence sound confusing ... it needs more clarification why
       a certain sentence is imperative over exclamatory." The answer was already
       in his own writing, two sections apart - the box just puts the two next to
       each other where the difference is visible instead of remembered.
       It sits after the exclamatory section on purpose: both kinds have to be
       taught before a comparison between them means anything. */
    box: {
      title: "Command or Feeling?",
      lead: "Both of these end with the same mark. Only one of them is telling you to do something.",
      cols: [
        { label: "Imperative", s: "Watch out!",
          why: "It gives a command." },
        { label: "Exclamatory", s: "That goal was incredible!",
          why: "It expresses strong emotion." }
      ],
      test: "Ask what the sentence is DOING. If it tells someone to do something, it is imperative, whatever mark is on the end."
    }},
    { title: "Words Have a Purpose", s: [
      "God gave us the ability to communicate, and the words we choose matter.",
      "Proverbs 25:11 says, “A word fitly spoken is like apples of gold in pictures of silver.”",
      "In other words, the right words used at the right time have value.",
      "",
      "The Bible itself contains statements, questions, commands, and powerful expressions of emotion.",
      "God uses language to teach, correct, encourage, warn, and communicate truth.",
      "",
      "Learning how sentences work helps us communicate our own thoughts clearly.",
      "Whether we are speaking to our family, answering a teacher, encouraging someone at church, or writing something important, we should think about what our words are meant to do.",
      "As Colossians 4:6 says, “Let your speech be alway with grace.”",
      "Good communication is not only about correct punctuation.",
      "It is also about using our words wisely."
    ]},
  ],

  /* ⚠️ Paul gave a definition AND a check question for all four words, which is
     better than the science lessons, where two cards had no check and the build
     had to warn. Nothing invented here. */
  words: [
    ["Declarative", "A declarative sentence makes a statement and usually ends with a period."],
    ["Interrogative", "An interrogative sentence asks a question and ends with a question mark."],
    ["Imperative", "An imperative sentence gives a command, direction, instruction, or request. It usually ends with a period, but strong commands can end with an exclamation point."],
    ["Exclamatory", "An exclamatory sentence expresses strong feeling and ends with an exclamation point."]
  ],

  /* 🚨 PAUL WROTE THESE WITH TWO OPTIONS EACH AND ALL FOUR ANSWERS WERE "A".
     A student spots that in thirty seconds. The pairs are his; only the ORDER
     is dealt, the same way the lesson questions already are. */
  vocabQuestions: [
    { q: "Which sentence is <i>declarative</i>?",
      choices: ["The service begins at ten.", "When does the service begin?"],
      right: 0, why: "It makes a statement." },
    { q: "Which sentence is <i>interrogative</i>?",
      choices: ["Where did you put the controller?", "Put the controller away."],
      right: 0, why: "It asks a question." },
    { q: "Which sentence is <i>imperative</i>?",
      choices: ["Please wash the dishes.", "The dishes are clean."],
      right: 0, why: "It gives a request or command." },
    { q: "Which sentence is <i>exclamatory</i>?",
      choices: ["That catch was amazing!", "Did you see that catch?"],
      right: 0, why: "It expresses strong feeling." }
  ],

  /* Part A, all ten. The four options are the same every time because the
     question is always which of the four kinds it is - so the ORDER is what
     gets dealt, not the wording.
     ⚠️ `find` points at the sentence in the reading that DEFINES that kind, so
     "find it in the story" sends him to the rule rather than to an example.
     ⚠️ Q8 "I cannot believe we won!" is word for word one of Paul's own
     exclamatory examples in the reading. Flagged to him; his call. */
  /* 🚨 findsAt = the number of STORY sentences these indexes were verified
     against. Change the reading and checkFinds() stops the build. Computed by
     walking the flattened list, never counted by hand. */
  /* 🚨 THE EXPLAINER. Drawn beside the reading, changing as the voice moves.
     Paul, 2026-09-04: "explaining how these sentences worked as it was reading
     it to you ... just like how you explained with the math problem", and the
     reason it exists: "basically make this a way for attention issue students
     to still stay engaged."
     🚨 EVERY EXAMPLE SENTENCE GETS ITS OWN FRAME. Paul: "like where you said did
     you finish your homework, and about the basket ball, can we play one more
     round should all show in the panel." He is right - the examples are the
     lesson. One picture per KIND meant the panel sat still through the three
     sentences that were doing the teaching, which is exactly when a student who
     is drifting needs something to change on screen.
     ⚠️ The first example of each kind is NOT listed separately: the definition's
     own frame already shows it, so a second entry would repaint the identical
     picture and read as the panel having frozen.
     `when` is the sentence that triggers it, written out in full - the build
     resolves it to an index and FAILS if it is missing, duplicated, or out of
     reading order. Never a hand-counted number.
     `body`/`ghost`/`mark` are DRAWN, so they are shaped for the diagram rather
     than quoted: "(You)" appears nowhere in the prose precisely because the
     whole point is that an imperative leaves the subject out.
     ⚠️ Paul wants generated art in here later. That is a new FIELD on a visual,
     not a new panel - the frame, the timing and the blanking already work. */
  visuals: [
    /* 🚨 THE OPENING FOUR. Paul: "if you are going to use \"\" then use as an
       example also." The hook quotes one of each kind before naming any of
       them, so the panel does the same: the label is his own framing verb from
       the sentence around it, not the grammar term. Calling the first one
       Declarative here would give away the answer to a lesson that has not
       asked the question yet, four sentences before "Let's find out what they
       are." */
    { when: "Imagine you are playing a game when someone walks into the room and says, “Dinner is ready.”",
      kind: "Someone Says", body: "Dinner is ready", mark: ".",
      note: "This one tells you something." },
    { when: "You ask, “Can I finish this round?”",
      kind: "You Ask", body: "Can I finish this round", mark: "?",
      note: "This one wants an answer back." },
    { when: "Then you hear, “Put the controller down.”",
      kind: "You Hear", body: "Put the controller down", mark: ".",
      note: "This one tells you to do something." },
    { when: "Suddenly someone yells, “The dog has your sandwich!”",
      kind: "Someone Yells", body: "The dog has your sandwich", mark: "!",
      note: "This one is all feeling." },
    /* 🚨 The paragraph rule cannot clear these two: the hook has no blank line
       in it, so "Those sentences are doing four different jobs" shares a
       paragraph with the four quotes and would keep the last one on screen.
       This is exactly what `blank` is for - the paragraph is the default unit,
       and an explicit blank is how a lesson overrides it mid-paragraph. */
    { when: "Those sentences are doing four different jobs.", blank: true },

    { when: "A declarative sentence makes a statement.",
      kind: "Declarative", body: "The game starts at seven", mark: ".",
      note: "It declares something. A statement ends with a period." },
    { when: "The game starts at seven.",
      kind: "Declarative", body: "The game starts at seven", mark: ".",
      note: "It declares something. A statement ends with a period." },
    { when: "My brother finished the dishes.",
      kind: "Declarative", body: "My brother finished the dishes", mark: ".",
      note: "Telling you what happened. Still a statement." },
    { when: "We studied Proverbs at church.",
      kind: "Declarative", body: "We studied Proverbs at church", mark: ".",
      note: "Sharing a fact. Nothing is being asked." },

    { when: "An interrogative sentence asks a question.",
      kind: "Interrogative", body: "Did you finish your homework", mark: "?",
      note: "It asks for an answer, so it ends with a question mark." },
    { when: "Did you finish your homework?",
      kind: "Interrogative", body: "Did you finish your homework", mark: "?",
      note: "It asks for an answer, so it ends with a question mark." },
    { when: "Where is the basketball?",
      kind: "Interrogative", body: "Where is the basketball", mark: "?",
      note: "It asks where. It is waiting on an answer." },
    { when: "Can we play one more round?",
      kind: "Interrogative", body: "Can we play one more round", mark: "?",
      note: "Asking permission is still asking." },

    { when: "An imperative sentence gives a command, direction, instruction, or request.",
      kind: "Imperative", ghost: "(You)", body: "Clean your room", mark: ".",
      note: "It gives a command. The subject is you, even though it is not written." },
    { when: "Clean your room.",
      kind: "Imperative", ghost: "(You)", body: "Clean your room", mark: ".",
      note: "It gives a command. The subject is you, even though it is not written." },
    { when: "Pass me the basketball.",
      kind: "Imperative", ghost: "(You)", body: "Pass me the basketball", mark: ".",
      note: "A request is a command too. The subject is still you." },
    { when: "Please open your Bible.",
      kind: "Imperative", ghost: "(You)", body: "Please open your Bible", mark: ".",
      note: "Please makes it polite. It does not stop it being a command." },

    /* 🚨 THE BEST DEMONSTRATION OF THE GHOST IN THE WHOLE LESSON, and it was
       missing. Paul: "you are missing the take out the trash part."
       ⚠️ Triggered on the sentence BEFORE the example, not on the example
       itself, so the drawing is already on screen when he hears "the understood
       meaning is You take out the trash". Arriving with the punchline is worse
       than arriving with the setup. */
    { when: "Imperative sentences often leave out the subject because the sentence is speaking directly to you.",
      kind: "The Understood Subject", ghost: "(You)", body: "Take out the trash", mark: ".",
      note: "Nobody writes the word you. Everybody hears it." },

    /* The confusable pair, drawn at the exact sentence where Paul raises it. */
    { when: "Watch out!",
      kind: "Still Imperative", ghost: "(You)", body: "Watch out", mark: "!",
      note: "Same command, stronger feeling. The mark changed. The job did not." },

    { when: "An exclamatory sentence expresses strong emotion or excitement.",
      kind: "Exclamatory", body: "That goal was incredible", mark: "!",
      note: "Nothing is being asked or ordered. It only shows how you feel." },
    { when: "That goal was incredible!",
      kind: "Exclamatory", body: "That goal was incredible", mark: "!",
      note: "Nothing is being asked or ordered. It only shows how you feel." },
    { when: "I cannot believe we won!",
      kind: "Exclamatory", body: "I cannot believe we won", mark: "!",
      note: "Strong feeling. Nobody is being told to do anything." },
    { when: "This is the best pizza ever!",
      kind: "Exclamatory", body: "This is the best pizza ever", mark: "!",
      note: "Excitement about a thing, not a command about it." },

    /* 🚨 A deliberate blank. The closing section is about words and Proverbs,
       not about one sentence, and leaving the last drawing standing there would
       read as a claim about what is on screen now. */
    { when: "God gave us the ability to communicate, and the words we choose matter.",
      blank: true },

    /* 🚨 THE VERSES GET FRAMES TOO. Paul, 2026-09-04: "bible verses should be
       included in the panel."
       `verse: true` drops the grammar furniture - no punctuation chip, no
       understood subject - because a verse is being quoted, not diagrammed.
       ⚠️ The `note` under each is PAUL'S OWN next sentence, not a gloss I wrote.
       Explaining scripture in my words when he has already explained it in his
       is the one place on this page where inventing prose would actually
       matter. */
    { when: "Proverbs 25:11 says, “A word fitly spoken is like apples of gold in pictures of silver.”",
      kind: "Proverbs 25:11", verse: true,
      body: "A word fitly spoken is like apples of gold in pictures of silver.",
      note: "In other words, the right words used at the right time have value." },

    { when: "As Colossians 4:6 says, “Let your speech be alway with grace.”",
      kind: "Colossians 4:6", verse: true,
      body: "Let your speech be alway with grace.",
      note: "Good communication is not only about correct punctuation. It is also about using our words wisely." }
  ],
  findsAt: 56,
  questions: [
    { q: "The game begins after dinner.", find: [6],
      hint: "Read the Declarative section again. What job is this sentence doing?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 0,
      why: "It makes a statement and ends with a period." },
    { q: "Did you feed the dog?", find: [14],
      hint: "Read the Interrogative section again.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 1,
      why: "It asks a question." },
    { q: "Please put your shoes away.", find: [20],
      hint: "Read the Imperative section again.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 2,
      why: "It gives a polite command or request." },
    { q: "That was an incredible shot!", find: [36],
      hint: "Read the Exclamatory section again.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 3,
      why: "It expresses strong excitement." },
    { q: "We are studying the book of John tonight.", find: [6],
      hint: "Is this telling you something, or asking you something?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 0,
      why: "It gives information." },
    { q: "Where is my other sock?", find: [14],
      hint: "What mark is on the end, and what does that mark mean?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 1,
      why: "It asks a question." },
    { q: "Turn the television down.", find: [20],
      hint: "Who is this sentence speaking to?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 2,
      why: "It gives a command." },
    { q: "I cannot believe we won!", find: [36],
      hint: "Is anyone being told to do something here?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 3,
      why: "It expresses strong excitement." },
    { q: "The team practices every Tuesday.", find: [6],
      hint: "Nothing is being asked and nobody is being told to do anything.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 0,
      why: "It makes a statement." },
    /* 🚨 THE HARD ONE, and it is deliberately last. The exclamation point says
       exclamatory and the job says imperative. The job wins. Paul's teacher
       notes set this trap up on purpose. */
    { q: "Get out of the way!", find: [30],
      hint: "The mark on the end is not the test. Ask what the sentence is telling someone to DO.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 2,
      why: "It commands someone to move. The exclamation point adds urgency, but it is still a command." }
  ],

  /* Paul's own closing task. ⚠️ The full Your Turn writing task, with the
     underlining and the challenge, is the WORKSHEET. This is the on-screen
     instruction only. */
  /* ⚠️ REWRITTEN 2026-09-04. The first version opened "That is the reading done.
     Two things are left, and they both happen today," and Paul read it back to me:
     "that is the reading done... really?" He was right - it read like a manual
     narrating itself. This is mine, not his, so it was free to change. */
  todo: { title: "What To Do Now", s: [
      /* 🚨 {t} {q} {v} are DERIVED. Paul: "you said to answer the 10 questions
         below but its more than that its actually 14 questions and four vocab."
         It used to say "ten" and "four" in two separate lines and never gave the
         total, so the student was told the job was ten. The count now comes from
         the lesson. See checkTodoCounts() in lesson-instructions.js. */
      "{Q} questions about the story, then {c} word cards with {v} more questions under them. {T} questions in all.",
      "For each sentence, decide what it is doing: telling, asking, commanding, or shouting.",
      "The mark on the end is a clue, not the answer.",
      "Do the word cards last.",
      "Tap each card, then answer the question underneath it.",
      "If you get stuck, go back to the section with that name and read its first line again."
  ] },
}
];

module.exports = { LESSONS };
