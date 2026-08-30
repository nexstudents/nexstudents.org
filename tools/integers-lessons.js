/* ─────────────────────────────────────────────────────────────────────────
   INTEGERS LESSON DATA. One entry per lesson.

   ⭐ RULES FIRST. THIS IS A DELIBERATE CHOICE, NOT AN OVERSIGHT.

   Paul, 2026-08-30, after comparing how he was taught in the 1990s with how
   Spectrum Math Grade 7 teaches it now: *"i like that way then because we
   should get things quicker so lets do that approach if possible. we should
   nto over complicate it."*

   Spectrum builds the number line first across five lessons (1.1 absolute
   value, 1.2 absolute value with integers, 1.3 subtraction as an inverse,
   1.4 adding, 1.5 subtracting) and lets the sign rules emerge at the end.
   That is the Common Core shape and 7.NS.A.1 asks for it by name.

   We are doing the older shape on purpose: state the rule, show why it is
   true once on a number line, then drill it. It collapses to TWO lessons,
   because subtraction stops being its own skill and becomes a conversion
   into addition.

   ⚠️ THE ONE THING THE FAST ROUTE MUST NOT DO is state the rule loosely.
   "Two negatives make a positive" is the folk version and it is FALSE for
   addition: -3 + (-5) is -8, not +8. That single sloppy sentence is the
   reason rules-first teaching got a bad name. Every lesson here states the
   full conditional instead - "same signs, add and keep the sign" - which
   costs four words and has no hole in it. Do not shorten it later.

   ─────────────────────────────────────────────────────────────────────────
   SHAPE. Same as english-lessons.js, because a sign rule is a rule the way
   a grammar rule is: useless until applied to a problem never seen before.

     ground     the missing teaching half, written for the PARENT
     rule       short / long / test
     signTable  the signs -> operation -> sign chart, as DATA
     parts      the lesson prose, read aloud
     practice   a SPEC, not a list - problems are generated and reseed daily
     todo       what to do once the reading is done

   🚨 PUBLIC SITE. No student's name, no aviation framing, no family
   references. Settled 2026-08-29 and it is what lets the same page be both
   the public lesson and the one Kolten is graded on in HomeschoolGrades.

   practice spec:
     count      how many problems on the page
     kind       "add" or "subtract"
     max        largest absolute value either operand can take
     mix        which sign combinations are allowed, all of which must appear
   ───────────────────────────────────────────────────────────────────────── */

const INTEGERS = [

/* ════════════ Integers · Unit 1 · Lesson 1 — Adding Integers ════════════ */
{
  id: "maths/adding-integers",
  slug: "adding-integers",
  title: "Adding Integers",
  unit: "Integers &middot; Unit 1 &middot; Lesson 1",
  eyebrow: ["Maths", "Unit 1 &middot; Lesson 1", "Integers"],
  dek: "Two rules cover every addition you will ever meet. Which one you use depends on whether the signs match.",
  shelf: { grades: [7, 8], subject: "Maths",
    blurb: "Two rules cover every case. Which one you use depends on whether the signs match.",
    contains: [
      "A Ground Control panel for the teacher: the exact mistake to watch for",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "The sign rules as a chart you can check an answer against",
      "Fifteen problems, new ones every day, in practice and test modes",
    ] },

  ground: {
    whatItIs:
      "Adding integers is adding when one or both of the numbers can be negative. " +
      "A negative number is a number below zero, and the minus sign in front of it is part of the " +
      "number rather than an instruction to subtract. Everything rests on one idea: the sign tells " +
      "you which direction from zero, and the digits tell you how far.",

    whyItMatters:
      "This is the gate to algebra. Solving any equation means moving terms across the equals sign " +
      "and every one of them arrives with a sign attached. A student who is unsure whether " +
      "-3 + (-5) is -8 or 8 will not be unsure loudly - they will get equations wrong for a year " +
      "and it will look like they cannot do algebra, when the real fault is here.",

    commonMistake:
      "\"Two negatives make a positive.\" It is the most repeated sentence in maths teaching and it " +
      "is wrong for addition. -3 + (-5) is -8. Two negatives added together go further below zero, " +
      "not above it. The saying is true for MULTIPLYING two negatives, and true for SUBTRACTING a " +
      "negative, which is why it survives - it is right often enough to sound reliable. If a student " +
      "gives you a positive answer for two negatives added, they are not being careless, they are " +
      "applying a rule they were taught. Correct the rule, not the child.",

    whenStuck: [
      "Say: \"Are the signs the same or different?\" That single question picks which rule applies, and it is the whole lesson.",
      "If the signs are the same: \"Then add the numbers and keep the sign you already had.\" Two negatives stay negative.",
      "If the signs are different: \"Which number is further from zero? Subtract the smaller from the bigger, and that further one decides the sign.\"",
      "For a stubborn -3 + (-5), drop the maths and use money: \"You owe 3 dollars, then you owe 5 more. Do you owe more or less now?\" Nobody gets that one wrong.",
      "When they get it right, ask WHICH rule they used. If they cannot say, they guessed, and the next problem will show it.",
    ],
  },

  rule: {
    short: "Same signs: add, and keep the sign. Different signs: subtract, and take the sign of the number that is further from zero.",
    long:
      "Every addition falls into one of two cases, and you decide which by looking at the signs " +
      "before you touch the digits.<br><br>" +
      "<b>Same signs.</b> Both positive, or both negative. Add the digits and keep the sign they " +
      "already had. <i>4 + 9 = 13</i>. <i>-4 + (-9) = -13</i>. Two negatives added go further below " +
      "zero, never above it.<br><br>" +
      "<b>Different signs.</b> One of each. Subtract the smaller digit from the bigger one, then " +
      "give the answer the sign of whichever number was further from zero. <i>-9 + 4 = -5</i>, " +
      "because 9 is further from zero than 4, and the 9 was negative.",
    test:
      "THE FURTHER-FROM-ZERO TEST. When the signs are different, ignore the signs for a moment and " +
      "ask which number is bigger. That number wins, and its sign is the answer's sign. You can " +
      "settle the sign before doing any arithmetic at all, which means you can check your own answer: " +
      "if -9 + 4 came out positive, it is wrong, and you knew that before you subtracted.",
  },

  signTable: {
    caption: "Adding: the two rules as a chart",
    head: ["Signs", "What you do", "Sign of the answer"],
    rows: [
      ["positive + positive", "add", "positive"],
      ["negative + negative", "add", "negative"],
      ["positive + negative", "subtract", "sign of the one further from zero"],
      ["negative + positive", "subtract", "sign of the one further from zero"],
    ],
  },

  /* One number line, once, to show WHY - then it gets out of the way. The
     fast route earns its speed by not making a student draw fifteen of
     these. */
  numberLine: {
    caption: "-9 + 4 = -5. Start at -9, move 4 to the right, and you are still below zero.",
    from: -12, to: 6, start: -9, move: 4,
  },

  parts: [
    { title: "The Sign Is Part Of The Number", s: [
      "A negative number is a number below zero.",
      "",
      "The minus sign in front of it is not telling you to subtract. It is part of the number, the same way the digits are.",
      "",
      "So -7 is a single number. It sits seven steps below zero, in the same way 7 sits seven steps above it.",
      "",
      "When you add integers, the sign tells you which direction from zero, and the digits tell you how far.",
    ]},

    { title: "Rule One. Same Signs.", s: [
      "If both numbers have the same sign, add the digits and keep the sign.",
      "",
      "4 + 9 = 13",
      "",
      "Both positive, so add them and the answer stays positive. Nothing surprising there.",
      "",
      "-4 + (-9) = -13",
      "",
      "Both negative, so add them and the answer stays negative.",
      "",
      "This is the one people get wrong. You may have heard that two negatives make a positive. That is not true for adding.",
      "",
      "If you owe four dollars and then you owe nine more, you owe thirteen. You are further behind, not ahead.",
    ]},

    { title: "Rule Two. Different Signs.", s: [
      "If the signs are different, subtract the smaller digit from the bigger one.",
      "",
      "Then give the answer the sign of whichever number was further from zero.",
      "",
      "-9 + 4 = -5",
      "",
      "Nine is further from zero than four, and the nine was negative. So the answer is negative.",
      "",
      "9 + (-4) = 5",
      "",
      "Same digits, but this time the nine is positive, so the answer is positive.",
      "",
      "Notice you can decide the sign before doing any subtraction at all. Ask which number is bigger, and you already know whether your answer will be above or below zero.",
    ]},

    { title: "Checking Yourself", s: [
      "Work out the sign first, then the digits.",
      "",
      "If you are adding two negatives and your answer came out positive, it is wrong. Two negatives cannot climb above zero by being added.",
      "",
      "If the signs were different and your answer is bigger than both numbers you started with, it is wrong. Different signs pull against each other, so the answer always lands between them.",
      "",
      "Those two checks catch most mistakes without redoing the problem.",
    ]},
  ],

  todo: { title: "What To Do Now", s: [
      "That is both rules. Now it is your turn.",
      "There are fifteen problems below this one.",
      "For each one, look at the signs first and decide which rule applies before you work out any digits.",
      "Type the answer in the box, minus sign included if the answer is below zero.",
      "Practice mode checks each answer as you enter it. Test mode won't check anything until you press Check my work.",
      "Do all fifteen. If you get one wrong, say out loud which of the two rules it needed. That is usually where it went wrong, not in the arithmetic.",
  ] },

  practice: {
    count: 15,
    kind: "add",
    max: 60,
    mix: ["pp", "nn", "pn", "np"],
  },
},

/* ══════════ Integers · Unit 1 · Lesson 2 — Subtracting Integers ══════════ */
{
  id: "maths/subtracting-integers",
  slug: "subtracting-integers",
  title: "Subtracting Integers",
  unit: "Integers &middot; Unit 1 &middot; Lesson 2",
  eyebrow: ["Maths", "Unit 1 &middot; Lesson 2", "Integers"],
  dek: "There is no separate rule for subtracting. Turn it into an addition, then use the rules you already know.",
  shelf: { grades: [7, 8], subject: "Maths",
    blurb: "No new arithmetic. Turn every subtraction into an addition, then use the rules you already have.",
    contains: [
      "A Ground Control panel for the teacher: why this is one step and not two",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "Keep, Change, Change, worked through until it is automatic",
      "Fifteen problems, new ones every day, with the rewrite shown before the answer",
    ] },

  ground: {
    whatItIs:
      "Subtracting an integer is the same as adding its opposite. 8 - 3 and 8 + (-3) are the same " +
      "question written two ways, and both come to 5. That is not a trick or a shortcut. Subtraction " +
      "and addition are the same operation pointed in opposite directions, so every subtraction can " +
      "be rewritten as an addition without changing the answer.",

    whyItMatters:
      "It means there is nothing new to learn. A student who has the two addition rules already has " +
      "every subtraction, provided they can do the rewrite. It also matters later: in algebra you " +
      "will meet expressions like 4 - 7x where treating the minus as part of the term is the only " +
      "way to collect like terms without losing a sign.",

    commonMistake:
      "Changing only one of the two things. Keep, Change, Change means the OPERATION changes from " +
      "minus to plus AND the sign of the second number flips. Students very often change the " +
      "operation and leave the number alone: 5 - 3 becomes 5 + 3, which is 8 instead of 2. " +
      "The second most common is stopping after the rewrite and forgetting to actually add. " +
      "Both are visible on the page, so watch the rewrite step rather than only the final answer.",

    whenStuck: [
      "Say: \"Two things change, not one. The sign in the middle, and the sign of the number after it.\"",
      "Point at the rewrite and ask: \"Did the number after the plus change sign? If it looks the same as before, you only did half of it.\"",
      "For subtracting a negative, like 5 - (-3): \"Taking away something you owe leaves you better off.\" Removing a debt of 3 is the same as gaining 3.",
      "If they can rewrite but stall on the addition, the problem is not this lesson. Go back to the two addition rules and drill those alone.",
      "When they get it right, ask them to say the three words. If they can chant Keep, Change, Change while doing it, it has stuck.",
    ],
  },

  rule: {
    short: "Keep, Change, Change. Keep the first number, change the minus to a plus, change the sign of the second number. Then add.",
    long:
      "Subtraction has no rules of its own. Every subtraction becomes an addition, and then you use " +
      "the two rules from the last lesson.<br><br>" +
      "<b>Keep</b> the first number exactly as it is.<br>" +
      "<b>Change</b> the minus sign to a plus.<br>" +
      "<b>Change</b> the sign of the second number to its opposite.<br><br>" +
      "<i>8 - 3</i> becomes <i>8 + (-3)</i>, which is 5.<br>" +
      "<i>5 - (-3)</i> becomes <i>5 + 3</i>, which is 8.<br>" +
      "<i>-6 - 4</i> becomes <i>-6 + (-4)</i>, which is -10.<br><br>" +
      "Two things change and one stays put. Changing only one of them is where nearly every wrong " +
      "answer on this page comes from.",
    test:
      "THE NO-MINUS-LEFT TEST. When you have finished the rewrite, look at what you have written. " +
      "If there is still a minus sign sitting between the two numbers, the rewrite is not done. " +
      "A finished rewrite always has a plus in the middle. The minus signs that remain belong to " +
      "the numbers themselves, not to the operation.",
  },

  signTable: {
    caption: "Subtracting: what each one becomes",
    head: ["You are given", "Rewrite it as", "Then"],
    rows: [
      ["8 - 3", "8 + (-3)", "different signs, so subtract: 5"],
      ["5 - (-3)", "5 + 3", "same signs, so add: 8"],
      ["-6 - 4", "-6 + (-4)", "same signs, so add: -10"],
      ["-6 - (-4)", "-6 + 4", "different signs, so subtract: -2"],
    ],
  },

  numberLine: {
    caption: "5 - (-3) = 5 + 3 = 8. Taking away a negative moves you to the right, not the left.",
    from: -2, to: 10, start: 5, move: 3,
  },

  parts: [
    { title: "Subtraction Is Addition In Disguise", s: [
      "There is no separate set of rules for subtracting integers.",
      "",
      "Every subtraction can be rewritten as an addition, and once it is, you use the two rules you already know.",
      "",
      "8 - 3 = 5",
      "",
      "8 + (-3) = 5",
      "",
      "Those are the same question written two ways. Taking away 3 and adding -3 land in the same place.",
    ]},

    { title: "Keep, Change, Change", s: [
      "To rewrite a subtraction, three words.",
      "",
      "Keep the first number exactly as it is.",
      "",
      "Change the minus sign to a plus.",
      "",
      "Change the sign of the second number to its opposite.",
      "",
      "8 - 3 becomes 8 + (-3).",
      "",
      "The 8 stayed. The minus became a plus. The 3 became -3.",
      "",
      "Two things change and one stays put.",
    ]},

    { title: "Subtracting A Negative", s: [
      "The same three words work when the number you are subtracting is already negative.",
      "",
      "5 - (-3)",
      "",
      "Keep the 5. Change the minus to a plus. Change -3 to its opposite, which is 3.",
      "",
      "5 + 3 = 8",
      "",
      "This is the case that looks strange. Subtracting a negative makes the answer bigger.",
      "",
      "It makes sense with money. If someone cancels a debt of three dollars, you did not gain anything from your pocket, but you are three dollars better off than you were.",
      "",
      "This is also the one case where two negatives really do make a positive. That is why the saying survives, and why it fools people into using it on addition where it does not hold.",
    ]},

    { title: "Checking Yourself", s: [
      "After the rewrite, look at the middle of what you wrote.",
      "",
      "If there is still a minus sign between the two numbers, you have not finished. A completed rewrite always has a plus in the middle.",
      "",
      "Any minus signs left over belong to the numbers themselves.",
      "",
      "Then check the second number actually changed. If it looks the same as it did before you started, you only did half the job.",
    ]},
  ],

  todo: { title: "What To Do Now", s: [
      "That is the whole method. Now it is your turn.",
      "There are fifteen problems below this one.",
      "Each one has two boxes. In the first, write what the second number becomes after you change its sign. In the second, write the answer.",
      "The first box is the rewrite and the second is the arithmetic, so you can see which half went wrong when one does.",
      "Practice mode checks each box as you enter it. Test mode won't check anything until you press Check my work.",
      "Do all fifteen. Say Keep, Change, Change to yourself on every single one until you stop needing to.",
  ] },

  practice: {
    count: 15,
    kind: "subtract",
    max: 60,
    mix: ["pp", "nn", "pn", "np"],
  },
},
];

module.exports = { INTEGERS };
