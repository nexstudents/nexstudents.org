/* english/holding-a-group-discussion
   Grade 7 · English · Unit 2 (Who Am I?), lesson 8. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. Sources: Holt Elements
   of Literature, First Course, Speaking and Listening Workshop pp180-181 via the week 8-9
   packet (paraphrased notes); the video noted in `video`. The scripture (Proverbs 15:22)
   is a suggestion, his call.

   The STORY is OURS: a short model discussion in which four students (Maya, Jonah, Priya
   and Sam) decide the theme of Jack London's "To Build a Fire", written as dialogue. It
   calls back to U2-L6, where Kolten met the story. The details the students name (the
   man's lack of imagination about the cold, the old-timer on Sulphur Creek who warned
   him against traveling alone) come from London's story. The discussion is invented, not
   quoted from anything.

   ⚠️ The packet's role-play suggestions, the group-project ideas and the rubric are left
   out. The questions are ours. The five steps are the book's, paraphrased.

   ⚠️ NO WALK. This is a process lesson, and the model discussion plays the part of the
   worked example. The questions apply the steps to new situations. */
'use strict';
module.exports = {
  id: "english/holding-a-group-discussion",
  slug: "holding-a-group-discussion",
  title: "Holding a Group Discussion",
  unit: "Literature · U2-L8",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 8 },

  plan: {
    objective: "Run a small-group discussion in five steps: choose roles, state the goal, brainstorm, reach a consensus, and present.",
    markers: [
      "BOOK (paraphrased), Holt Speaking and Listening Workshop p180: groups are more efficient and creative than one person, and a good discussion follows steps.",
      "BOOK (paraphrased), p180: choose a moderator who keeps things moving and makes sure everyone speaks, and a recorder who takes notes. Roles can rotate.",
      "BOOK (paraphrased), p181: state the goal, brainstorm without judging, reach a consensus by listening and not interrupting, and present with enough detail for listeners to understand.",
    ],
    method: "FIVE STEPS, IN ORDER. Roles first, then the goal said out loud, then brainstorm with every idea welcome, then work toward a consensus, then present. Each step protects against one way a discussion goes wrong.",
    exampleOnly: [
      "Maya, Jonah, Priya and Sam are our own characters, and 'To Build a Fire' is only the thing they're discussing. The skill is the five steps, not the theme.",
    ],
    digitize: "Reading engine on a model discussion written as dialogue, one step per section, and questions that name the step and then apply it to new situations. No walkthrough. Written: a short discussion with a family member on a question he picks, with roles chosen first.",
    unclear: "",
  },
  natural: "2026-10-11",
  findsAt: 46,

  video: { id: "YY2yjEEoB3U", title: "How to discuss a topic in a group", channel: "engVid",
    why: "A different teacher on the same skill, with phrases for agreeing, disagreeing and keeping a group on track. It's aimed at adult English learners, but the habits are the same." },

  shelf: { grades: [7], subject: "English",
    blurb: "Four students, one story and fifteen minutes to agree on what it means. The five steps that turn four opinions into one answer.",
    contains: [
      "A model discussion you read as dialogue, one step at a time",
      "The moderator, the recorder and why roles come first",
      "Brainstorming and reaching a consensus",
      "Four vocabulary cards, each with a check question",
      "A short family discussion to hold on your own",
    ] },
  eyebrow: ["English 7", "U2-L8", "Who Am I?"],
  dek: "Four people, one story, and four different answers. A group can sort that out in fifteen minutes or argue about it for an hour, and the difference is five steps.",
  scripture: {
    ref: "Proverbs 15:22",
    text: "Without counsel purposes are disappointed: but in the multitude of counsellors they are established.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn the five steps of a group discussion (choose roles, state the goal, brainstorm, reach a consensus, present), say what the moderator and the recorder do, and apply the steps to a discussion of a story's theme."
      ]},
      { h: "Key Concepts", p: [
        "A consensus is a general agreement, not a vote and not the loudest person winning. Everyone has to be able to live with the answer.",
        "Brainstorming means getting ideas out before judging them. A bad idea said early often leads to a good one."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Skipping the goal. A group that doesn't know what it's deciding talks for ten minutes and has nothing to present.",
        "Treating consensus as a vote. If three of four agree, the discussion isn't done until the fourth has been heard."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student hold a five-minute discussion at dinner on a question he picks, with a moderator and a recorder chosen first. The written task at the end of the lesson is exactly that.",
        "The model discussion is invented for this lesson. The details the students mention come from Jack London's 'To Build a Fire', which the student met in the previous lesson."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Four Answers, One Table", s: [
      "Four students sit around a table with a short story open in front of them, and each one is completely sure that the story is about something different.",
      "The teacher has told them they have fifteen minutes to agree on a single answer and report it to the class.",
      "If they all talk at once, they'll get nowhere, and if one person takes over, three people will have wasted a lesson.",
      "So how do four different opinions turn into one answer that everyone can stand behind?"
    ]},

    { title: "Why Use a Group at All?", s: [
      "Two heads really can be better than one, because a group sees more of a problem and thinks of more ideas than any single person does.",
      "That's why businesses solve problems in teams, and why a class might plan a project or talk over a story in small groups.",
      "But a group only works if it's organized, and a good discussion comes down to five steps, which you'll watch four students use in a moment."
    ]},

    { title: "Step One: Choose Roles", s: [
      "Every group needs somebody to steer, so the first step is to choose a {{moderator}}, the person who keeps the discussion moving, makes sure everyone gets a turn, and brings people back when they wander off the topic.",
      "The group also needs a {{recorder}}, who writes down the ideas and the decisions so that nothing good gets lost.",
      "People in groups tend to slide into roles anyway, and the leader talks and the quiet one watches, so choosing them on purpose is better, and roles can rotate the next time."
    ]},

    { title: "Step Two: State the Goal", s: [
      "The second step is to say out loud exactly what the group is trying to do, and the more specific the goal, the better the discussion.",
      "A goal might be to share ideas, to solve a problem, or to reach a decision, and writing it at the top of the recorder's page keeps everybody pointed the same way.",
      "Without a goal, you get fifteen minutes of pleasant conversation and nothing to show for it."
    ]},

    { title: "Step Three: Brainstorm", s: [
      "To {{brainstorm}} is to pour out as many ideas as you can before anybody judges any of them.",
      "A good way to start is a quiet minute when everyone writes down his own idea, so the loudest voice doesn't set the direction before the rest have thought.",
      "Then the group goes around the circle one person at a time, each taking a fair share of the time, and nobody laughs at an idea that sounds boring or impossible.",
      "A strange idea said early is often the one that leads someone else to a good one."
    ]},

    { title: "Step Four: Reach a Consensus", s: [
      "A {{consensus}} is a general agreement, a decision that everyone in the group can live with.",
      "Getting there means listening carefully and being willing to learn something, which means not interrupting, staying on the topic, and asking a question when you don't understand.",
      "It's different from a vote, because a vote can leave two people unhappy and a consensus keeps talking until the last person has been heard.",
      "Once the group agrees, the recorder reads the decision back to make sure everyone means the same thing."
    ]},

    { title: "Step Five: Present", s: [
      "The last step is to tell the rest of the class what the group decided, and that means giving enough detail that people who weren't there can follow.",
      "A good report states the decision first, then gives the reasons or the evidence, and it's short enough that the listeners don't lose the thread.",
      "That's all five, and now you can watch them work on a story you already know."
    ]},

    { title: "Listening In", s: [
      "In the last lesson you met a man on a frozen creek in Jack London's story, 'To Build a Fire'.",
      "Four students have just read it and been asked to decide its theme, which is the message about life that the story suggests, and to find two details that prove it.",
      "Here's how their discussion goes, and as you read, see if you can spot each of the five steps.",
      "",
      "[story] Maya, who had been chosen as the moderator, said, “Our goal is to agree on the theme of the story and to find two details that prove it.”",
      "Jonah, the recorder, wrote the goal at the top of his page and said he was ready.",
      "",
      "[story] Maya said, “Let's each write one idea in silence for a minute, and then we'll go around the table.”",
      "Priya read hers first and said, “I think the theme is that nature doesn't care how tough you are.”",
      "Sam went next and said, “Mine is that you should listen to people with more experience, because the old-timer on Sulphur Creek warned him and he didn't take it seriously.”",
      "Jonah said, “I wrote that the man was too proud to be careful,” and Maya thanked him and told him to keep writing.",
      "",
      "[story] Maya said, “Sam, you weren't finished, so can you tell us more about the old-timer?”",
      "Sam said, “He told the man never to travel alone in that kind of cold, and the man went anyway, which is why the cold wins.”",
      "Priya said, “That fits mine too, because the cold didn't care that the man was strong, it only mattered that he'd ignored the warning.”",
      "Jonah asked, “Could we say that ignoring good advice and underestimating nature leads to danger?”",
      "Maya asked, “Does everyone agree, or does anyone want to change a word?”",
      "Sam asked to change “leads to danger” to “leads to disaster,” and everyone nodded, so Jonah changed it.",
      "",
      "[story] Priya stood up to present and said, “Our group thinks the theme is that ignoring good advice and underestimating nature leads to disaster.”",
      "She went on to say, “Our two details are that the man had no imagination about the cold, and that the old-timer on Sulphur Creek had warned him not to travel alone.”"
    ]},

    { title: "Spotting the Steps", s: [
      "Go back through that discussion and you can find every step: Maya's goal was the second one, the silent minute and the trip around the table were the brainstorm, and the changed word was the consensus.",
      "Notice that Maya asked Sam to finish his point, which is the moderator's job, and that Jonah's wording became the group's, which is the recorder's.",
      "",
      "[verse] Proverbs 15:22 says, “Without counsel purposes are disappointed: but in the multitude of counsellors they are established.”",
      "",
      "That proverb is about advice, and it fits a group that takes the time to hear everyone, since a plan that many people have looked at is steadier than one person's idea.",
      "So the answer to the opening question is that four opinions become one answer when the group has roles, a goal, a fair brainstorm and the patience to reach a consensus."
    ]}
  ],

  words: [
    ["Moderator", "The person who keeps a discussion moving and makes sure everyone gets a turn.", 7],
    ["Recorder", "The person who writes down the group's ideas and decisions.", 8],
    ["Brainstorm", "To pour out as many ideas as possible before anyone judges them.", 13],
    ["Consensus", "A general agreement that everyone in the group can live with.", 17]
  ],

  vocabQuestions: [
    { q: "What does a <i>moderator</i> do?",
      choices: [
        "Writes down every idea",
        "Keeps the discussion moving and makes sure everyone gets a turn",
        "Gives the final grade",
        "Presents for the class"
      ],
      right: 1, why: "The moderator steers the discussion." },
    { q: "What does a <i>recorder</i> do?",
      choices: [
        "Plays music for the group",
        "Decides who is right",
        "Writes down the group's ideas and decisions",
        "Keeps time only"
      ],
      right: 2, why: "The recorder writes it down." },
    { q: "What does it mean to <i>brainstorm</i>?",
      choices: [
        "To pour out many ideas before judging any of them",
        "To argue until someone gives up",
        "To pick the best idea right away",
        "To stay silent"
      ],
      right: 0, why: "Brainstorming means ideas first, judging later." },
    { q: "What is a <i>consensus</i>?",
      choices: [
        "A vote where the majority wins",
        "The loudest person's idea",
        "A general agreement everyone can live with",
        "A list of ideas"
      ],
      right: 2, why: "A consensus is an agreement that includes everyone." }
  ],

  questions: [
    { q: "Why does a group state its goal before it starts talking?", find: [12],
      hint: "Read Step Two.",
      choices: [
        "So everyone is pointed the same way and has something to show for the time",
        "So the teacher can grade it",
        "So the recorder has less to write",
        "Because the moderator is bored"
      ], right: 0,
      why: "Without a goal you get conversation and no result." },

    { q: "Why start a brainstorm with a quiet minute?", find: [14],
      hint: "Read Step Three.",
      choices: [
        "To give the recorder time to rest",
        "So the loudest voice doesn't set the direction before others have thought",
        "To make the group finish sooner",
        "Because talking is against the rules"
      ], right: 1,
      why: "Everyone gets time to think before one voice leads." },

    { q: "How is a consensus different from a vote?", find: [19],
      hint: "Read Step Four.",
      choices: [
        "A consensus keeps talking until the last person has been heard.",
        "A consensus is faster.",
        "A consensus lets the moderator decide.",
        "They are exactly the same."
      ], right: 0,
      why: "A vote can leave people unhappy, and a consensus tries not to." },

    { q: "What does a good report to the class do first?", find: [22],
      hint: "Read Step Five.",
      choices: [
        "Tell a joke",
        "States the decision, then gives reasons or evidence",
        "Reads every idea from the brainstorm",
        "Asks the class to vote"
      ], right: 1,
      why: "Decision first, then the reasons." },

    { q: "Which step is Maya taking when she says, 'Our goal is to agree on the theme and find two details'?", find: [27],
      hint: "Look at the first part of the discussion.",
      choices: ["Brainstorm", "State the goal", "Present", "Reach a consensus"], right: 1,
      why: "She says out loud what the group will do." },

    { q: "What does Maya do when she asks Sam to say more about the old-timer?", find: [33],
      hint: "Which role makes sure everyone gets a turn?",
      choices: [
        "She acts as the moderator by making sure Sam finishes his point.",
        "She acts as the recorder by writing it down.",
        "She changes the goal.",
        "She presents to the class."
      ], right: 0,
      why: "Giving everyone a turn is the moderator's job." },

    { q: "In the model discussion, how does the group show a consensus?", find: [38],
      hint: "Read the end of the discussion.",
      choices: [
        "Maya picks the best idea and they move on.",
        "They agree on one wording, changing a word at Sam's request, and everyone nods.",
        "Jonah votes alone.",
        "They skip the theme."
      ], right: 1,
      why: "Everyone could live with the final wording." },

    { q: "A new situation: a group member keeps interrupting while others talk. Which step is he breaking, and what should the moderator do?", find: [18],
      hint: "Read Step Four on what getting to a consensus takes.",
      choices: [
        "Step one, and the moderator should change roles.",
        "Step four, and the moderator should remind him to let each person finish.",
        "Step five, and the moderator should present.",
        "None, because interrupting helps."
      ], right: 1,
      why: "Consensus needs careful listening and no interrupting." },

    { q: "Another new situation: a group has talked for ten minutes and nobody can say what they're supposed to decide. Which step did they skip?", find: [10],
      hint: "Read Step Two.",
      choices: ["Present", "Choose roles", "State the goal", "Brainstorm"], right: 2,
      why: "Without a stated goal, a group drifts." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before you start, pick a question the whole family could talk about for five minutes, like where to go on a trip or which movie is the best of all time.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the lesson, and {v} more questions about those words. {T} questions in all.",
    "When you're finished, hold the discussion, choosing a moderator and a recorder first and saying the goal out loud before anyone gives an opinion.",
    "Afterward, write on paper one thing the group did well and one thing you'd do differently next time.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
