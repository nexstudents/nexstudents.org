/* maths/the-metric-system
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. Paul: "explain it to a 12-year-old."
   The 2026-10-05 version described the prefix chart in one sentence and never
   drew it, showed only a 1-place and a 3-place move, and never walked a single
   conversion step by step or gave him one to try. This one starts from what the
   three basic units are (doorknob, thumbtack, water bottle), DRAWS the prefix
   ladder one rung at a time in a walk, then teaches each direction with the
   dollar-dime-penny picture and two Watch It Worked walkthroughs each (1, 2 and
   3 places both ways, the decimal point moved one place at a time), then a short
   "which way?" check and a Your Turn with three typed conversions.

   ⚠️ THE WORLD IS OURS: one runner, Dana, with a run, a water bottle and a snack
   bar. The book opens on the speed of sound, which is left out, and its
   hair-hygrometer lab is not used (the packet marks it THIN). The benchmarks
   (a meter is about the height of a doorknob, a gram about a thumbtack, a liter
   about a large water bottle) are the book's.
   Our numbers: 7 m, 2.5 L, 45 g, 360 cm and 3.2 cm in the reading; 2.4 km,
   64 mm and 3,500 mL in Your Turn. None of them is a problem on the homework
   sheet.

   ⚠️ NO ADDED FACTS beyond the book's. The prefix values are the definitions of
   the prefixes. "Kilo to centi is five rungs" is counting the ladder.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/the-metric-system",
  slug: "the-metric-system",
  title: "The Metric System",
  unit: "Math 7 &middot; U2-L9",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 9 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Glencoe Course 2 pp78-80. ── */
  plan: {
    objective: "Change between metric units of length, mass and capacity by multiplying or dividing by 10, 100 or 1,000, using the prefix ladder to count the rungs.",
    markers: [
      "BOOK (paraphrased), Objective box: change metric units of length, capacity and mass.",
      "BOOK (paraphrased), terms: meter is the basic unit of length, about the height of a doorknob; gram is the basic unit of mass, and a thumbtack is about one gram; mass is the amount of matter in an object; a prefix shows the place value.",
      "BOOK (paraphrased), chart: each metric place is 10 times the place to its right.",
      "BOOK (paraphrased), method: to change to a smaller unit, multiply; to change to a larger unit, divide, which moves the decimal point.",
      "BOOK (paraphrased), Checking for Understanding: how do you know whether to multiply or divide when you change units.",
    ],
    method: "DRAW THE LADDER, COUNT THE RUNGS, SLIDE THE POINT. Each rung is 10 times the one below it. To a SMALLER unit you multiply, which slides the decimal point right; to a LARGER unit you divide, which slides it left. The number of rungs between the two units is the number of places to slide (1, 2 or 3 means 10, 100 or 1,000).",
    exampleOnly: [
      "One runner's day: the run, the water bottle and the snack bar. WORLD: ours, to keep length, mass and capacity in one place.",
      "Left out on purpose: the speed of sound, and the hair-hygrometer lab.",
    ],
    digitize: "Reading engine. A Watch It Worked that builds the prefix ladder as a drawn table, four conversion walkthroughs (7 m to cm, 2.5 L to mL, 45 g to kg, 360 cm to m) with the decimal point moved one place at a time, and a Your Turn with typed answers.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "the-metric-system-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Meters, liters and grams each come in bigger and smaller sizes, all 10, 100 or 1,000 times apart. Draw the ladder, then change from one size to another by sliding the decimal point.",
    contains: [
      "The meter, the gram and the liter, with something to picture for each",
      "The prefix ladder drawn rung by rung: kilo, hecto, deka, deci, centi, milli",
      "Going to a smaller unit: multiply and slide the point right",
      "Going to a larger unit: divide and slide the point left",
      "Your Turn: three conversions, one step at a time",
    ] },
  eyebrow: ["Math 7", "U2-L9", "Applications with Decimals"],
  dek: "The metric system is built on tens, so changing from one size to another is just sliding a decimal point. Here's which way to slide it and how far.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student names the three basic metric units, reads the prefix ladder, and changes between units of length, mass and capacity by multiplying or dividing by 10, 100 or 1,000."
      ]},
      { h: "Key Concepts", p: [
        "Each rung of the ladder is 10 times the rung below it, so one rung is 10, two rungs is 100 and three rungs is 1,000. Going to a smaller unit takes more of them, so you multiply and the decimal point slides right. Going to a larger unit takes fewer, so you divide and the point slides left.",
        "Money makes it easy to picture: a dollar is 10 dimes or 100 pennies, so the smaller the coin, the more of them you need."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Multiplying when the unit gets larger. Going from grams to kilograms makes the number smaller, because it takes fewer big units to cover the same amount.",
        "Counting the rungs wrong. Basic to kilo is three, and basic to centi is two, so have him write the ladder out and put a finger on both units."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have your student draw the ladder from memory, kilo down to milli, and slide a finger from one unit to the other. The number of steps is the number of places, and the direction tells you whether to multiply or divide."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Three Numbers for One Morning", s: [
      "A runner named Dana has three things on her list before she leaves: an 8-kilometer run, a water bottle that says 750 milliliters, and a snack bar whose wrapper says 45 grams.",
      "Her watch counts the run in meters, and her kitchen scale shows kilograms, so the numbers on her gadgets don't match the numbers she just read.",
      "That's because the metric system has a bigger size and a smaller size of every unit.",
      "The whole system is built on tens, so changing from one size to another is just sliding a decimal point.",
      "By the end of this lesson, you'll know which way to slide it and how far."
    ]},

    { title: "Three Basic Units", s: [
      "The metric system is a way of measuring that most of the world uses, and it starts with three basic units, one for each kind of measuring.",
      "The {{meter}} measures length, which is how long something is, and a doorknob is about a meter off the floor.",
      "The {{gram}} measures {{mass}}, which is the amount of matter in an object, and a thumbtack has a mass of about one gram.",
      "Matter is just the stuff something is made of, so a bowling ball has far more mass than a feather.",
      "The {{liter}} measures capacity, which is how much a container can hold, and a large water bottle holds about a liter."
    ]},

    { title: "Prefixes Are Size Tags", s: [
      "Every other metric unit is one of those three basic units with a {{prefix}} on the front.",
      "A prefix is a small word added to the front of another word, and in the metric system it tells you how big or small the unit is.",
      "You already know one, because a kilometer is 1,000 meters, since kilo means 1,000.",
      "There are six prefixes to know, and they stack up like the rungs of a ladder.",
      "The basic unit sits in the middle, three rungs go up for bigger units, and three rungs go down for smaller ones.",
      "Each rung up is 10 times bigger and each rung down is 10 times smaller, and that's the whole idea.",
      "",
      "[walk] Build the metric ladder one rung at a time.",
      "[step] Put the basic unit in the middle, the meter, the gram or the liter, and call it 1. || ┌────────────┬──────────────────────┐\n│ Prefix     │ Times the basic unit │\n├────────────┼──────────────────────┤\n│ BASIC UNIT │ 1                    │\n└────────────┴──────────────────────┘",
      "[step] Go up one rung at a time, 10 times bigger each time, so deka is 10, hecto is 100 and kilo is 1,000. || ┌────────────┬──────────────────────┐\n│ Prefix     │ Times the basic unit │\n├────────────┼──────────────────────┤\n│ kilo       │ 1,000                │\n│ hecto      │ 100                  │\n│ deka       │ 10                   │\n│ BASIC UNIT │ 1                    │\n└────────────┴──────────────────────┘",
      "[step] Go down one rung at a time, 10 times smaller each time, so deci is one tenth, centi is one hundredth and milli is one thousandth. || ┌────────────┬──────────────────────┐\n│ Prefix     │ Times the basic unit │\n├────────────┼──────────────────────┤\n│ kilo       │ 1,000                │\n│ hecto      │ 100                  │\n│ deka       │ 10                   │\n│ BASIC UNIT │ 1                    │\n│ deci       │ 0.1                  │\n│ centi      │ 0.01                 │\n│ milli      │ 0.001                │\n└────────────┴──────────────────────┘",
      "",
      "Deci, centi and milli are the tenths, hundredths and thousandths you already know from decimal places.",
      "So a centimeter is one hundredth of a meter, and a milliliter is one thousandth of a liter."
    ]},

    { title: "Going to a Smaller Unit: Multiply", s: [
      "Think of a dollar, which is 10 dimes or 100 pennies, so the smaller the coin, the more of them you need to make the same amount.",
      "Units work the same way, so when you change to a smaller unit, the number gets bigger and you multiply.",
      "Counting rungs tells you how much to multiply, because one rung is 10, two rungs is 100 and three rungs is 1,000.",
      "Multiplying by 10, 100 or 1,000 slides the decimal point that many places to the right.",
      "",
      "[walk] Change 7 meters into centimeters.",
      "[step] A centimeter is smaller than a meter, so the number gets bigger and you multiply. || m  →  cm   (smaller unit)\nmultiply",
      "[step] Count the rungs from the basic unit down to centi, which is two. || BASIC UNIT  →  deci  →  centi\n2 rungs, so  × 100",
      "[step] Multiplying by 100 slides the decimal point two places right, and empty spots fill with zeros. || 7.  →  70.  →  700.\n    1 place   2 places",
      "[step] So 7 meters is 700 centimeters. || 7 m = 700 cm",
      "",
      "Here's one more, this time with three rungs, so the point slides three places.",
      "",
      "[walk] Change 2.5 liters into milliliters.",
      "[step] A milliliter is smaller than a liter, so the number gets bigger and you multiply. || L  →  mL   (smaller unit)\nmultiply",
      "[step] From the basic unit down to milli is three rungs, so you multiply by 1,000. || BASIC UNIT  →  deci  →  centi  →  milli\n3 rungs, so  × 1,000",
      "[step] Slide the decimal point three places right, adding zeros where you run out of digits. || 2.5  →  25.  →  250.  →  2500.\n       1 place  2 places  3 places",
      "[step] So 2.5 liters is 2,500 milliliters. || 2.5 L = 2,500 mL"
    ]},

    { title: "Going to a Larger Unit: Divide", s: [
      "Now go the other way, because ten dimes make just one dollar, so the bigger the coin, the fewer of them you need.",
      "When you change to a larger unit, the number gets smaller and you divide.",
      "Dividing by 10, 100 or 1,000 slides the decimal point that many places to the left.",
      "",
      "[walk] Change Dana's 45 grams into kilograms.",
      "[step] A kilogram is bigger than a gram, so the number gets smaller and you divide. || g  →  kg   (bigger unit)\ndivide",
      "[step] From the basic unit up to kilo is three rungs, so you divide by 1,000. || BASIC UNIT  →  deka  →  hecto  →  kilo\n3 rungs, so  ÷ 1,000",
      "[step] Slide the decimal point three places left, and a whole number like 45 has its point hiding at the end. || 45.  →  4.5  →  0.45  →  0.045\n     1 place  2 places  3 places",
      "[step] So 45 grams is 0.045 kilograms. || 45 g = 0.045 kg",
      "",
      "Here's one with two rungs.",
      "",
      "[walk] Change 360 centimeters into meters.",
      "[step] A meter is bigger than a centimeter, so the number gets smaller and you divide. || cm  →  m   (bigger unit)\ndivide",
      "[step] From centi up to the basic unit is two rungs, so you divide by 100. || centi  →  deci  →  BASIC UNIT\n2 rungs, so  ÷ 100",
      "[step] Slide the decimal point two places left. || 360.  →  36.0  →  3.60\n      1 place  2 places",
      "[step] So 360 centimeters is 3.6 meters. || 360 cm = 3.6 m"
    ]},

    { title: "Which Way Do I Move?", s: [
      "The most common mistake is multiplying when you should divide, and one quick question prevents it.",
      "Ask whether the unit you're changing to is bigger or smaller than the one you started with.",
      "If it's smaller, expect a bigger number and multiply, and if it's bigger, expect a smaller number and divide.",
      "Check it on a short one, like 3.2 centimeters into millimeters, where a millimeter is smaller and the two units are one rung apart, so you multiply by 10.",
      "",
      "[ex] 3.2 cm = 3.2 × 10 = 32 mm",
      "",
      "The ladder works between any two prefixes, not just the basic unit, so you just count the rungs between them, and kilo to centi is five rungs.",
      "Dana's run, her water bottle and her snack bar are the same amounts all along, and only the size of the ruler changes."
    ]},
  ],

  words: [
    ["Meter", "The basic metric unit of length, about the height of a doorknob.", 6],
    ["Gram", "The basic metric unit of mass, about the mass of a thumbtack.", 7],
    ["Liter", "The basic metric unit of capacity, about the amount a large water bottle holds.", 9],
    ["Prefix", "The part at the front of a metric unit that shows its size, like kilo or milli.", 10],
    ["Mass", "The amount of matter in an object.", 7]
  ],

  findsAt: 58,

  questions: [
    { tag: "Basic Units", q: "Which basic metric unit measures length?",
      find: [6], hint: "Read Three Basic Units.",
      choices: ["The gram", "The liter", "The meter", "The prefix"], right: 2,
      why: "The meter measures length. A doorknob is about a meter off the floor." },

    { tag: "Basic Units", q: "What does mass tell you about an object?",
      find: [7], hint: "A gram measures it.",
      choices: ["How long it is", "How much it can hold", "How fast it moves", "How much matter is in it"], right: 3,
      why: "Mass is the amount of matter in an object." },

    { tag: "Prefixes", q: "What does the prefix kilo mean?",
      find: [12], hint: "A kilometer is how many meters?",
      choices: ["One thousandth of the basic unit", "1,000 times the basic unit", "100 times the basic unit", "One tenth of the basic unit"], right: 1,
      why: "Kilo means 1,000, so a kilometer is 1,000 meters." },

    { tag: "The Ladder", q: "On the metric ladder, what happens each time you go down one rung?",
      find: [15], hint: "Look at the table you built.",
      choices: ["The unit gets 10 times bigger", "The unit gets 10 times smaller", "The unit stays the same", "The unit gets 100 times smaller"], right: 1,
      why: "Each rung down is 10 times smaller, like a dime next to a dollar." },

    { tag: "Which Way", q: "You change meters into centimeters. Which is right?",
      find: [27,28], hint: "Is a centimeter bigger or smaller than a meter?",
      choices: ["Divide by 100, because the unit gets smaller", "Multiply by 100, because the unit gets smaller", "Multiply by 1,000, because the unit gets bigger", "Divide by 10, because the unit gets bigger"], right: 1,
      why: "A centimeter is smaller, so there are more of them, and meters to centimeters is two rungs, so multiply by 100." },

    { tag: "Multiply", q: "What is 6.5 liters in milliliters?",
      find: [33,34,35], hint: "Three rungs down, so slide the point three places right.",
      choices: ["0.0065 mL", "65 mL", "650 mL", "6,500 mL"], right: 3,
      why: "Liters to milliliters is three rungs, so multiply by 1,000: 6,500 mL." },

    { tag: "Spot the Mistake", q: "A student changes 45 grams into kilograms and gets 45,000 kg. What went wrong?",
      find: [41], hint: "Is a kilogram bigger or smaller than a gram?",
      choices: ["The student divided by 1,000 when they should have multiplied", "The student multiplied when they should have divided, because a kilogram is bigger", "The student counted two rungs instead of three", "Nothing, 45,000 kg is right"], right: 1,
      why: "A kilogram is bigger, so the number gets smaller. 45 g is 0.045 kg." },

    { tag: "Divide", q: "What is 800 centimeters in meters?",
      find: [47,48,49], hint: "Two rungs up, so slide the point two places left.",
      choices: ["80,000 m", "80 m", "8 m", "0.8 m"], right: 2,
      why: "Centimeters to meters is two rungs, so divide by 100: 8 m." },

    { tag: "Put It Together", q: "Which is longer, 2 kilometers or 1,500 meters?",
      find: [12], hint: "Change one so both are in meters.",
      choices: ["1,500 meters", "They're the same", "2 kilometers, because it's 2,000 meters", "You can't tell"], right: 2,
      why: "2 km = 2 × 1,000 = 2,000 m, which is longer than 1,500 m." }
  ],

  vocabQuestions: [
    { q: "What is a <i>meter</i> about as long as?",
      choices: ["The height of a doorknob", "The width of a thumbtack", "A large water bottle", "A kitchen scale"], right: 0 },
    { q: "What is a <i>gram</i> about as much as?",
      choices: ["A water bottle", "A thumbtack", "A doorknob", "A pair of shoes"], right: 1 },
    { q: "What does a <i>liter</i> measure?",
      choices: ["Length", "Mass", "How much a container can hold", "How fast something moves"], right: 2 },
    { q: "What does a <i>prefix</i> like milli tell you?",
      choices: ["What kind of thing is being measured", "How many digits there are", "Whether a number is rounded", "How big or small the unit is"], right: 3 },
    { q: "What is <i>mass</i>?",
      choices: ["The amount of matter in an object", "How far apart two things are", "How much a container holds", "The size of a unit"], right: 0 }
  ],

  work: [
    { title: "A Long Walk",
      ask: "Dana walks 2.4 kilometers to cool down. Change 2.4 km into meters, one step at a time.",
      steps: [
        { ask: "How many rungs is it from kilo down to the basic unit?", answer: 3,
          hint: "Kilo, hecto, deka, then the basic unit. Count the steps.",
          why: "Kilo to hecto, hecto to deka, deka to the basic unit: 3 rungs." },
        { ask: "Meters are smaller than kilometers, so you multiply. What do you multiply by?", answer: 1000,
          hint: "Three rungs means 1,000.",
          why: "Three rungs is × 1,000." },
        { ask: "How many meters is 2.4 km?", answer: 2400, calc: "2.4*1000",
          hint: "Slide the point three places right: 2.4 becomes 24, then 240, then 2400.",
          why: "2.4 × 1,000 = 2,400 m." },
      ] },
    { title: "A Tiny Measurement",
      ask: "A bead is 64 millimeters long. Change 64 mm into centimeters.",
      steps: [
        { ask: "How many rungs is it from milli up to centi?", answer: 1,
          hint: "Milli, then centi. Count the step.",
          why: "Milli to centi is 1 rung." },
        { ask: "Centimeters are bigger, so you divide. What do you divide by?", answer: 10,
          hint: "One rung means 10.",
          why: "One rung is ÷ 10." },
        { ask: "How many centimeters is 64 mm?", answer: 6.4, calc: "64/10",
          hint: "Slide the point one place left.",
          why: "64 ÷ 10 = 6.4 cm." },
      ] },
    { title: "A Big Jug",
      ask: "A jug holds 3,500 milliliters. Change 3,500 mL into liters.",
      steps: [
        { ask: "Liters are bigger than milliliters. How many rungs is it from milli up to the basic unit?", answer: 3,
          hint: "Milli, centi, deci, then the basic unit.",
          why: "Milli to centi to deci to the basic unit: 3 rungs." },
        { ask: "How many liters is 3,500 mL?", answer: 3.5, calc: "3500/1000",
          hint: "Divide by 1,000, which slides the point three places left.",
          why: "3,500 ÷ 1,000 = 3.5 L." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Dana's run, her water bottle and her snack bar all got changed from one metric unit to another, and now it's your turn to do the same.",
      "First work through Your Turn below the reading, typing each answer.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every conversion, ask first whether the new unit is bigger or smaller, then count the rungs on the ladder.",
      "If the multiply or divide questions trip you up, read Which Way Do I Move again.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and work every problem on paper."
  ] }
};
