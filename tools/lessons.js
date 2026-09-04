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
  /* ⚠️ The day order here MUST match lesson-template.html: Day One is The Questions,
     Day Two is The Words. This block used to say word cards FIRST, the same way
     Lesson 2's did before Paul caught it on the page on 2026-09-03. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done, and the rest of this lesson is split across two days.",
      "Day One is the questions. Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between a response and an adaptation. Read Adaptation again and look for which one is passed down and which one is decided in the moment.",
      "Day Two is the word cards. Five words, and every one of them is explained somewhere in the story you just heard.",
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
      "That is the reading done, and the rest of this lesson is split across two days.",
      "Day One is the questions. Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is what Pasteur's curved neck was for. Read Pasteur Solves the Mystery again and look for what the shape let IN and what it kept OUT.",
      "Day Two is the word cards. Four words, and every one of them is explained somewhere in the story you just heard.",
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
      "A theory helps explain. A law describes a pattern or relationship.",
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
  /* ⚠️ The day order here MUST match lesson-template.html: Day One is The Questions,
     Day Two is The Words. Lesson 2 shipped with them the wrong way round and Paul
     caught it on the page, not in the data. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done, and the rest of this lesson is split across two days.",
      "Day One is the questions. Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between a theory and a law. Read Theory Does Not Mean Guess again and look for what each one is FOR.",
      "Day Two is the word cards. Five words this time, and every one of them is explained somewhere in the story you just heard.",
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
  findsAt: 70,
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
    { q: "Why can science not answer every kind of question?", find: [47, 51, 53],
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
      "Science investigates how the natural world works. Technology applies knowledge to solve problems or accomplish tasks.",
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
      "Science can help us understand what we can do. Ethics asks what we should do.",
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
      "We should ask not only “Can we do this?” but also “Is this right? Is it wise? Does it help people? Does it honor God?”",
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
  /* ⚠️ The day order here MUST match lesson-template.html: Day One is The Questions,
     Day Two is The Words. This block used to say word cards first, like Lessons 1 and 2
     did before Paul caught it on the page on 2026-09-03. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done, and the rest of this lesson is split across two days.",
      "Day One is the questions. Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between science and technology. Read Science and Technology again and look for which one investigates and which one applies.",
      "Day Two is the word cards. Four words, and every one of them is explained somewhere in the story you just heard.",
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
  findsAt: 63,
  questions: [
    { q: "What is the difference between science and technology?", find: [10, 11, 17, 18],
      hint: "One of them understands. The other one puts it to work.",
      choices: [
        "Science investigates how the natural world works, while technology applies knowledge to solve problems.",
        "Science happens in schools, while technology happens in factories.",
        "Science studies living things, while technology studies machines.",
        "There is no difference between them."
      ], right: 0 },
    { q: "Why is evidence important when someone makes a scientific claim?", find: [22, 23, 24],
      hint: "Think about what you are allowed to ask when something sounds scientific.",
      choices: [
        "Evidence makes a claim sound more impressive.",
        "Evidence gives us information from observation, measurement, or testing that we can examine.",
        "Evidence proves that a scientist can never be wrong.",
        "Evidence is only needed in laboratories."
      ], right: 1 },
    { q: "What is the difference between a scientific question and an ethical question?", find: [35, 36, 38],
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
}
];

module.exports = { LESSONS };
