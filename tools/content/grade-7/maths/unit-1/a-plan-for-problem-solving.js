/* maths/a-plan-for-problem-solving
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
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
  unit: "Math &middot; Chapter 1 &middot; Lesson 1-1",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 1 },
  shelf: { grades: [7], subject: "Math",
    blurb: "Four steps that work on any problem, including the ones nobody sets you.",
    contains: [
      "The four steps, explained one at a time as the lesson reads",
      "Two everyday problems worked all the way through, with every number typed",
      "An estimate you have to commit to before the page will let you calculate",
      "Fourteen questions, including one that can't be looked up",
    ] },
  eyebrow: ["Math", "Chapter 1 &middot; Lesson 1-1", "Tools for Problem Solving"],
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
        "Explore means working out what you already know and what you're being asked. Plan means deciding what to do with those numbers, and estimating roughly what the answer should be. Solve means doing it. Examine means checking the answer against the estimate, and working backwards to see if you land where you started."
      ]},
      { h: "Why The Estimate Comes First", p: [
        "This is the part of the lesson worth defending. A student can get the answer to almost any of these from a phone in about four seconds. What a phone will not do is tell him the answer should have been between ten and twenty hours, which is the only thing that catches a wrong answer.",
        "So on this page the calculation stays locked until an estimate is entered. That's not a gimmick. It's the order the textbook itself teaches, and it's the habit that survives after the arithmetic is forgotten."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Two places. The first is Explore, where a problem hands you a number you don't need. The second is Examine, which most students skip because they believe the answer as soon as the calculator shows it. If he does the check every time on the easy problems, he still has the habit on the hard ones."
      ]},
      { h: "Teaching Suggestion", p: [
        "Ask him to make up a problem of his own before the end of the lesson: something he genuinely wants to know, like how long a drive takes or what a full shopping cart comes to. Proposing the question is half of what this lesson teaches, and it's the half no worksheet can ask for."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Question Comes First", s: [
      "Most math you have ever been handed came with the sum that someone has already written.",
      "Somebody else decided what to work out, and your job was the arithmetic.",
      "Real life problems don't arrive that way.",
      "",
      "Let's say you live in Saint Louis, Missouri, and you want to drive to Orlando, Florida for a vacation.",
      "How do you figure out the sum?",
      "You first ask the question: how long would the drive take?",
      "",
      "There's a routine for this type of question, and it's only four kinds of steps."
    ]},

    { title: "The Four Steps", s: [
      "First \"Explore\"",
      "What do I know, and what am I trying to find?",
      "Next \"Plan\"",
      "What math should I use, and about what should the answer be?",
      "Next \"Solve\"",
      "You do the math",
      "Finally \"Examine\"",
      "Examine \"Did my answer make sense?\"",
      "",
      "That's the whole routine.",
      "Every problem in this lesson goes through those four questions in that order.",
      "Learn the routine and you can use it on a problem nobody has taught you."
    ]},

    { title: "Explore", s: [
      "Explore asks two things: what do I know, and what am I trying to find?",
      "",
      "For the drive, you know it's about a thousand miles.",
      "You know the highway speed is about sixty-five miles an hour.",
      "You're trying to find hours.",
      "",
      "There's a third question hiding inside Explore.",
      "Which of these things I already know do I actually need?",
      "",
      "A problem might also tell you your car holds fourteen gallons of fuel.",
      "That's a real number question too.",
      "It actually answers a different question, and it's about stopping for gas along the way.",
      "Noticing that is part of exploring.",
      "",
      "Explore is about identifying the information.",
      "You explore the question before you do any math first"
    ]},

    { title: "Plan", s: [
      "The plan asks the other two questions: what math should I use, and about what should the answer be?",
      "",
      "For the drive, the math is a division.",
      "The distance divided by speed gives time.",
      "",
      "Now the second half of the Plan, and it's the part most people tend to skip.",
      "Before you work anything out, decide roughly where the answer has to land.",
      "",
      "Here's exactly how.",
      "Pick a speed that's definitely too fast, and a speed that's definitely too slow.",
      "A hundred miles an hour is too fast, and a thousand divided by a hundred is ten hours.",
      "Fifty miles an hour is too slow, and a thousand divided by fifty is twenty hours.",
      "So the real answer has to sit between ten and twenty hours.",
      "",
      "Notice what just happened.",
      "We didn't just round sixty-five to a hundred, and we didn't round it to fifty.",
      "Nobody really rounds sixty-five to a hundred",
      "We built two guardrails, one on each side of the answer.",
      "",
      "Going faster will definitely get you there sooner than you think",
      "So ten hours is the limit the answer can't go under.",
      "While going slower will take longer than you think.",
      "So twenty hours is the limit you can't go over.",
      "Don't look at this as trying to be accurate here.",
      "You're just roughly estimating where the answer lands before you calculate it."
    ]},

    { title: "Solve", s: [
      "Solving is the short step.",
      "You just solve the math to get the right answer.",
      "",
      "one thousand divided by sixty-five is equal to fifteen point four hours.",
      "",
      "That's it.",
      "The thinking part was just two steps before this one."
    ]},

    { title: "Examine", s: [
      "Examine asks one question: did my answer make sense?",
      "If not, you might have done the math incorrectly.",
      "",
      "First, check it against your guardrails to see if they are correct.",
      "You said the answer had to be between ten and twenty hours right?",
      "Fifteen point four is between ten and twenty.",
      "",
      "Second, work backwards to check.",
      "Division can be checked with multiplication.",
      "Fifteen point four times sixty-five is about a thousand, which is the distance you started with.",
      "Subtraction is checked with addition the same way around.",
      "",
      "If your answer fails either check, that's not a disaster, just keep trying.",
      "It means the plan was wrong, and now you know, which is the whole reason why we check."
    ]},

    { title: "A Calculator Is a Tool", s: [
      "You could simply ask your phone how long the ride is.",
      "",
      "A calculator can help with the arithmetic, and there's nothing wrong with using one.",
      "However, what it can't do is show you how to solve the problem yourself.",
      "That part you have to try to solve.",
      "",
      "Suppose you try to divide it the wrong way around and get zero point zero six five for the answer.",
      "A calculator will happily show you that answer, because it thinks the arithmetic is correct.",
      "Your guardrails are what tell you it's not correct.",
      "",
      "That's why the calculations on this page stay locked until you've made an estimate.",
      "",
      "These four steps help you work on anything you actually want to know.",
      "Like what the shopping cart comes to before you reach the cashier checkout.",
      "Or whether a certain team can still win the league.",
      "Even how long you have to save before you can buy the thing.",
      "The subject and the math can change but the routine for problem solving does not."
    ]},

    /* 🚨 PAUL'S CLOSING POINT, and he asked for it kept SHORT and natural:
       "God did not give us minds simply to memorize answers. He gave us the
       ability to reason, examine, solve problems, and grow in wisdom." Tied to
       the Examine step rather than sitting beside the lesson as decoration. */
    { title: "A Mind Made to Reason", s: [
      "God did not give us a mind simply to memorize answers.",
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
    { when: "Most math you have ever been handed came with the sum that someone has already written.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i0.webp",
      picAlt: "Most math you have ever been handed came with the sum that someone has already written.",
      body: "" },

    { when: "Somebody else decided what to work out, and your job was the arithmetic.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i1.webp",
      picAlt: "Somebody else decided what to work out, and your job was the arithmetic.",
      body: "" },

    { when: "Real life problems don't arrive that way.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i2.webp",
      picAlt: "Real life problems don't arrive that way.",
      body: "" },

    { when: "Let's say you live in Saint Louis, Missouri, and you want to drive to Orlando, Florida for a vacation.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i2.webp",
      picAlt: "Let's say you live in Saint Louis, Missouri, and you want to drive to Orlando, Florida for a vacation.",
      body: "" },

    { when: "How do you figure out the sum?",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i3.webp",
      picAlt: "How do you figure out the sum?",
      body: "" },

    { when: "You first ask the question: how long would the drive take?",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i4.webp",
      picAlt: "You first ask the question: how long would the drive take?",
      body: "" },

    { when: "There's a routine for this type of question, and it's only four kinds of steps.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i5.webp",
      picAlt: "There's a routine for this type of question, and it's only four kinds of steps.",
      body: "" },

    { when: "First \"Explore\"",
      kind: "Step 1 of 4",
      body: "Explore →" },

    { when: "What do I know, and what am I trying to find?",
      kind: "Explore →",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i6.webp",
      picAlt: "What do I know, and what am I trying to find?",
      body: "What do I know, and what am I trying to find?" },

    { when: "Next \"Plan\"",
      kind: "Step 2 of 4",
      body: "Explore → Plan →" },

    { when: "What math should I use, and about what should the answer be?",
      kind: "Explore → Plan →",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i8.webp",
      picAlt: "What math should I use, and about what should the answer be?",
      body: "What math should I use, and about what should the answer be?" },

    { when: "Next \"Solve\"",
      kind: "Step 3 of 4",
      body: "Explore → Plan → Solve →" },

    { when: "You do the math",
      kind: "Explore → Plan → Solve →",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i9.webp",
      picAlt: "You do the math",
      body: "Solve the Problem" },

    { when: "Finally \"Examine\"",
      kind: "Step 4 of 4",
      body: "Explore → Plan → Solve → Examine" },

    { when: "Examine \"Did my answer make sense?\"",
      kind: "Explore → Plan → Solve → Examine",
      body: "Did my answer make sense?" },

    { when: "That's the whole routine.",
      kind: "All Four",
      shout: true,
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i10.webp",
      picAlt: "That's the whole routine.",
      body: "That's the whole routine!" },

    { when: "Every problem in this lesson goes through those four questions in that order.",
      kind: "In That Order",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i10.webp",
      picAlt: "Every problem in this lesson goes through those four questions in that order.",
      seq: ["Explore", "Plan", "Solve", "Examine"],
      note: "Every problem. Every time." },

    { when: "Learn the routine and you can use it on a problem nobody has taught you.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i11.webp",
      picAlt: "Learn the routine and you can use it on a problem nobody has taught you.",
      body: "" },

    { when: "Explore asks two things: what do I know, and what am I trying to find?",
      kind: "Step 1 · Explore",
      body: "What do I know?   What am I finding?",
      mark: "?",
      note: "Information only. No math yet." },

    { when: "For the drive, you know it's about a thousand miles.",
      kind: "Explore · What You Know",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i12.webp",
      picAlt: "For the drive, you know it's about a thousand miles.",
      art: "carSports",
      body: "1,000 miles",
      note: "The distance. One number so far." },

    { when: "You know the highway speed is about sixty-five miles an hour.",
      kind: "Explore · What You Know",
      art: "carSports",
      body: "1,000 miles   ·   65 mph",
      note: "The distance and the speed. Now there's something to divide." },

    { when: "You're trying to find hours.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i13.webp",
      picAlt: "You're trying to find hours.",
      body: "" },

    { when: "Which of these things I already know do I actually need?",
      kind: "Explore",
      body: "1,000 miles   ·   65 mph",
      mark: "→ hours",
      note: "Two numbers you need, and one answer you want." },

    { when: "A problem might also tell you your car holds fourteen gallons of fuel.",
      kind: "Explore · Not Needed",
      ghost: "(14 gallons)",
      body: "1,000 miles   ·   65 mph",
      note: "A real number that answers a different question. Leave it out." },

    { when: "That's a real number question too.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i14.webp",
      picAlt: "That's a real number question too.",
      body: "" },

    { when: "It actually answers a different question, and it's about stopping for gas along the way.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i14.webp",
      picAlt: "It actually answers a different question, and it's about stopping for gas along the way.",
      body: "" },

    { when: "You explore the question before you do any math first",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i15.webp",
      picAlt: "You explore the question before you do any math first",
      body: "" },

    { when: "The plan asks the other two questions: what math should I use, and about what should the answer be?",
      kind: "Step 2 · Plan",
      body: "Which math?   About what answer?",
      mark: "?",
      note: "Choose the operation, then guardrail the answer in." },

    { when: "The distance divided by speed gives time.",
      kind: "Plan · The Operation",
      body: "Distance ÷ Speed",
      mark: "= Time",
      note: "Worth remembering. It comes back all year." },

    { when: "Now the second half of the Plan, and it's the part most people tend to skip.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i16.webp",
      picAlt: "Now the second half of the Plan, and it's the part most people tend to skip.",
      body: "" },

    { when: "Before you work anything out, decide roughly where the answer has to land.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i16.webp",
      picAlt: "Before you work anything out, decide roughly where the answer has to land.",
      body: "" },

    { when: "Pick a speed that's definitely too fast, and a speed that's definitely too slow.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i17.webp",
      picAlt: "Pick a speed that's definitely too fast, and a speed that's definitely too slow.",
      body: "" },

    { when: "A hundred miles an hour is too fast, and a thousand divided by a hundred is ten hours.",
      kind: "Plan · Guardrail One",
      body: "1,000 ÷ 100",
      mark: "= 10",
      note: "Too fast to be real, so the time is too short to be real." },

    { when: "Fifty miles an hour is too slow, and a thousand divided by fifty is twenty hours.",
      kind: "Plan · Guardrail Two",
      body: "1,000 ÷ 50",
      mark: "= 20",
      note: "Too slow to be real, so the time is too long to be real." },

    { when: "So the real answer has to sit between ten and twenty hours.",
      kind: "Plan · Between The Guardrails",
      body: "10  <  answer  <  20",
      mark: "hours",
      note: "Decided before you calculate anything." },

    { when: "Notice what just happened.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i19.webp",
      picAlt: "Notice what just happened.",
      body: "" },

    { when: "We didn't just round sixty-five to a hundred, and we didn't round it to fifty.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i19.webp",
      picAlt: "We didn't just round sixty-five to a hundred, and we didn't round it to fifty.",
      body: "" },

    { when: "Nobody really rounds sixty-five to a hundred",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i19.webp",
      picAlt: "Nobody really rounds sixty-five to a hundred",
      body: "" },

    { when: "We built two guardrails, one on each side of the answer.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i19.webp",
      picAlt: "We built two guardrails, one on each side of the answer.",
      body: "" },

    { when: "Going faster will definitely get you there sooner than you think",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i20.webp",
      picAlt: "Going faster will definitely get you there sooner than you think",
      body: "" },

    { when: "So ten hours is the limit the answer can't go under.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i20.webp",
      picAlt: "So ten hours is the limit the answer can't go under.",
      body: "" },

    { when: "While going slower will take longer than you think.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i20.webp",
      picAlt: "While going slower will take longer than you think.",
      body: "" },

    { when: "So twenty hours is the limit you can't go over.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i20.webp",
      picAlt: "So twenty hours is the limit you can't go over.",
      body: "" },

    { when: "Don't look at this as trying to be accurate here.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i21.webp",
      picAlt: "Don't look at this as trying to be accurate here.",
      body: "" },

    { when: "You're just roughly estimating where the answer lands before you calculate it.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i21.webp",
      picAlt: "You're just roughly estimating where the answer lands before you calculate it.",
      body: "" },

    { when: "Solving is the short step.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i22.webp",
      picAlt: "Solving is the short step.",
      body: "" },

    { when: "You just solve the math to get the right answer.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i22.webp",
      picAlt: "You just solve the math to get the right answer.",
      body: "" },

    { when: "one thousand divided by sixty-five is equal to fifteen point four hours.",
      kind: "Step 3 · Solve",
      body: "1,000 ÷ 65",
      mark: "= 15.4",
      note: "Do the math. The short step." },

    { when: "That's it.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i23.webp",
      picAlt: "That's it.",
      body: "" },

    { when: "The thinking part was just two steps before this one.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i23.webp",
      picAlt: "The thinking part was just two steps before this one.",
      body: "" },

    { when: "Examine asks one question: did my answer make sense?",
      kind: "Step 4 · Examine",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i24.webp",
      picAlt: "Examine asks one question: did my answer make sense?",
      body: "10  <  15.4  <  20",
      note: "Inside the guardrails you built. So far so good." },

    { when: "First, check it against your guardrails to see if they are correct.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i24.webp",
      picAlt: "First, check it against your guardrails to see if they are correct.",
      body: "" },

    { when: "You said the answer had to be between ten and twenty hours right?",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i24.webp",
      picAlt: "You said the answer had to be between ten and twenty hours right?",
      body: "" },

    { when: "Division can be checked with multiplication.",
      kind: "Examine · Backwards",
      body: "15.4 × 65",
      mark: "= 1,001",
      note: "Work it back and you land where you started." },

    { when: "Fifteen point four times sixty-five is about a thousand, which is the distance you started with.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i25.webp",
      picAlt: "Fifteen point four times sixty-five is about a thousand, which is the distance you started with.",
      body: "" },

    { when: "Subtraction is checked with addition the same way around.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i26.webp",
      picAlt: "Subtraction is checked with addition the same way around.",
      body: "" },

    { when: "If your answer fails either check, that's not a disaster, just keep trying.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i26.webp",
      picAlt: "If your answer fails either check, that's not a disaster, just keep trying.",
      body: "" },

    { when: "It means the plan was wrong, and now you know, which is the whole reason why we check.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i27.webp",
      picAlt: "It means the plan was wrong, and now you know, which is the whole reason why we check.",
      body: "" },

    { when: "You could simply ask your phone how long the ride is.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i28.webp",
      picAlt: "You could simply ask your phone how long the ride is.",
      body: "" },

    { when: "A calculator can help with the arithmetic, and there's nothing wrong with using one.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i28.webp",
      picAlt: "A calculator can help with the arithmetic, and there's nothing wrong with using one.",
      body: "" },

    { when: "However, what it can't do is show you how to solve the problem yourself.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i29.webp",
      picAlt: "However, what it can't do is show you how to solve the problem yourself.",
      body: "" },

    { when: "That part you have to try to solve.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i29.webp",
      picAlt: "That part you have to try to solve.",
      body: "" },

    { when: "Suppose you try to divide it the wrong way around and get zero point zero six five for the answer.",
      kind: "Why The Guardrails Matter",
      body: "65 ÷ 1,000",
      mark: "= 0.065",
      note: "Correct arithmetic, wrong question. Only the guardrails catch this." },

    { when: "A calculator will happily show you that answer, because it thinks the arithmetic is correct.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i30.webp",
      picAlt: "A calculator will happily show you that answer, because it thinks the arithmetic is correct.",
      body: "" },

    { when: "Your guardrails are what tell you it's not correct.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i30.webp",
      picAlt: "Your guardrails are what tell you it's not correct.",
      body: "" },

    { when: "That's why the calculations on this page stay locked until you've made an estimate.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i30.webp",
      picAlt: "That's why the calculations on this page stay locked until you've made an estimate.",
      body: "" },

    { when: "Like what the shopping cart comes to before you reach the cashier checkout.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i31.webp",
      picAlt: "Like what the shopping cart comes to before you reach the cashier checkout.",
      body: "" },

    { when: "Or whether a certain team can still win the league.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i32.webp",
      picAlt: "Or whether a certain team can still win the league.",
      body: "" },

    { when: "Even how long you have to save before you can buy the thing.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i33.webp",
      picAlt: "Even how long you have to save before you can buy the thing.",
      body: "" },

    { when: "The subject and the math can change but the routine for problem solving does not.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i33.webp",
      picAlt: "The subject and the math can change but the routine for problem solving does not.",
      body: "" },

    { when: "God did not give us a mind simply to memorize answers.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i34.webp",
      picAlt: "God did not give us a mind simply to memorize answers.",
      body: "" },

    { when: "He gave us the ability to reason, examine, solve problems, and grow in wisdom.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i34.webp",
      picAlt: "He gave us the ability to reason, examine, solve problems, and grow in wisdom.",
      body: "" },

    { when: "It means not simply believing the first answer that turns up, wherever it came from.",
      pic: "/lessons/maths/a-plan-for-problem-solving/pics/i35.webp",
      picAlt: "It means not simply believing the first answer that turns up, wherever it came from." }
  ],

  work: [
    { title: "Travel",
      ask: "You live in Saint Louis and you're driving to Orlando for a vacation. About how many hours of driving is it?",
      given: [["I know", "it's about 1,000 miles"],
              ["I know", "highway speed is about 65 miles an hour"],
              ["I know", "the tank holds 14 gallons — not needed here"],
              ["I am finding", "hours"]],
      estimate: { lo: 10, hi: 20, unit: "hours",
        intro: "Plan. The math is Distance ÷ Speed. Now build two guardrails: divide by a speed that's clearly too fast, then by one that's clearly too slow.",
        hint: "Too fast: 1,000 ÷ 100. Too slow: 1,000 ÷ 50.",
        why: "Between 10 and 20 hours. The real answer has to land in there." },
      solve: { expr: "1000 ÷ 65", answer: 15.4, tol: 0.1, unit: "hours",
        intro: "Solve. Do the math, to one decimal place.",
        why: "About 15.4 hours, and it landed between your guardrails." },
      examine: { expr: "15.4 × 65", answer: 1001, tol: 1, unit: "miles",
        intro: "Examine. Does it make sense? Work backwards — division is checked with multiplication.",
        why: "About 1,000 miles, the distance you started with. The answer holds." } },

    /* 🚨 THE ESTIMATE IS MODELLED, not just asked for. "the saving problem says
       to round the total both ways, but it's not obvious what numbers the
       student should choose." So the intro and the hint name them. */
    { title: "Saving Up",
      ask: "Over two months you saved $215 from mowing lawns. In the first month you saved $130. How much did you save in the second month?",
      given: [["I know", "$215 saved over two months"],
              ["I know", "$130 saved in month one"],
              ["I am finding", "dollars saved in month two"]],
      estimate: { lo: 70, hi: 90, unit: "dollars",
        intro: "Plan. The math is a subtraction. Build the guardrails the same way: take $130 off a total that's a bit too small, then off one that's a bit too big.",
        hint: "$200 − $130 = $70.  $220 − $130 = $90.",
        why: "Between $70 and $90. A tighter pair of guardrails than the drive, because only one number needed changing." },
      solve: { expr: "215 − 130", answer: 85, unit: "dollars",
        intro: "Solve. Now use the real numbers.",
        why: "$85, and it sits between your guardrails." },
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
     which world it comes from - the routine doesn't change when the subject does. */
  /* 74 story sentences; the finds below were verified against that count. */
  findsAt: 84,
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
      why: "Deciding what you don't need is part of Explore. Real problems come with spare numbers attached." },

    { tag: "Data Search",
      q: "A table gives a team's wins for five seasons and asks for the average. During which step do you pick out the five totals and work out what's being asked for?",
      find: [18, 27, 28],
      choices: ["Explore.", "Plan.", "Solve.", "Examine."],
      right: 0,
      why: "Gathering what you have and naming what you want is Explore, every time, whatever the subject." },

    { tag: "Plan",
      q: "Why does the lesson build the guardrails before doing the calculation, rather than after?",
      find: [32, 33, 45, 46],
      choices: [
        "So there's something to check the real answer against, decided before you had it.",
        "Because estimating is quicker than dividing.",
        "Because the estimate is usually close enough to use as the answer.",
        "So you can skip the calculation if the guardrails look narrow."
      ], right: 0,
      why: "Guardrails built afterwards just agree with whatever you already got." },

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
      find: [60, 61, 62],
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
      "Before those, work the two problems above to test yourself.",
      "Both make you build your guardrails before the calculation will open, and that's on purpose.",
      "For every question, ask which of the four steps it belongs to: Explore, Plan, Solve, or Examine.",
      "Lastly, and this is the part that matters most.",
      "Write a personal problem of your own.",
      "Something you actually want to know, like how long a drive takes or what a full cart comes to.",
      "Write what you know, what you're finding, and the two guardrails.",
      "You don't have to solve it, just understand how to propose it.",
      "Proposing it's the skill itself."
  ] }
};
