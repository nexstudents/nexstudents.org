/* maths/the-metric-system
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Glencoe Course 2
   pp78-80 (Lesson 2-9), via the week 6-7 packet (paraphrased notes) and the
   teach-plan. /natural pass run and stamped.

   READING SHAPE.

   ⚠️ THE WORLD IS OURS: one runner's training day, with distance in meters and
   kilometers, a water bottle in liters and milliliters, and a snack bar in
   grams and kilograms. The book opens on the speed of sound, which is left
   out. The benchmarks (a meter is about the height of a doorknob, a gram about
   a thumbtack) are the book's. The book's hair-hygrometer lab tie-in is not
   used (the packet marks it THIN).

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/the-metric-system",
  slug: "the-metric-system",
  title: "The Metric System",
  unit: "Math 7 &middot; U2-L9",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 9 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Glencoe Course 2 pp78-80. ── */
  plan: {
    objective: "Change between metric units of length, mass and capacity by multiplying or dividing by 10, 100 or 1,000.",
    markers: [
      "BOOK (paraphrased), Objective box: change metric units of length, capacity and mass.",
      "BOOK (paraphrased), terms: meter is the basic unit of length, about the height of a doorknob; gram is the basic unit of mass, and a thumbtack is about one gram; mass is the amount of matter in an object; a prefix shows the place value.",
      "BOOK (paraphrased), chart: each metric place is 10 times the place to its right.",
      "BOOK (paraphrased), method: to change to a smaller unit, multiply; to change to a larger unit, divide, which moves the decimal point.",
      "BOOK (paraphrased), Checking for Understanding: how do you know whether to multiply or divide when you change units.",
    ],
    method: "EACH PLACE ON THE PREFIX CHART IS 10 TIMES THE ONE TO ITS RIGHT. To a SMALLER unit you multiply, which moves the point right; to a LARGER unit you divide, which moves the point left. Count the places between the two units to know whether it's 10, 100 or 1,000.",
    exampleOnly: [
      "One runner's training day: the run, the water bottle and the snack bar. WORLD: ours, to keep length, mass and capacity in one place.",
      "Left out on purpose: the speed of sound, and the hair-hygrometer lab.",
    ],
    digitize: "Reading engine. The prefix chart is described in words, in order, as a row of places; ⚠️ a drawn chart would help and the site doesn't have that visual yet.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "A runner's day is measured in meters, liters and grams, and each one comes in sizes that differ by 10, 100 and 1,000. Changing between them.",
    contains: [
      "The meter, the gram and the liter",
      "Prefixes as place values: kilo, hecto, deka, deci, centi, milli",
      "Multiplying to go to a smaller unit",
      "Dividing to go to a larger unit",
    ] },
  eyebrow: ["Math 7", "U2-L9", "Applications with Decimals"],
  dek: "The metric system is built on tens, so changing units is just moving a decimal point, once you know which way to move it.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to name the basic metric units, read a prefix as a place value, and change between units of length, mass and capacity by multiplying or dividing by 10, 100 or 1,000."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Multiplying when the unit gets larger. Going from meters to kilometers makes the number smaller, because it takes fewer big units to cover the same distance.",
        "Counting the places wrong. Kilo to base is three places, and base to centi is two, so it helps to write the chart out and put a finger on both units."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student write the seven prefixes in a row, kilo to milli, and slide a finger from one to the other. The number of steps is the number of zeros, and the direction tells you whether to multiply or divide."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Three Numbers for One Morning", s: [
      "A runner named Dana has three things on her list before she leaves: a 5-kilometer run, a water bottle that says 750 milliliters, and a snack bar whose wrapper says 45 grams.",
      "Her watch counts the run in meters, the bottle's cap counts in liters, and the scale in her kitchen shows kilograms, so every number she reads is in a different size of the same unit.",
      "That's the idea behind the metric system, and it makes switching between them much easier than it sounds.",
      "So how do you turn 5 kilometers into the meters her watch is counting?"
    ]},

    { title: "Three Basic Units", s: [
      "The metric system starts from three basic units, and each one measures a different kind of thing.",
      "The {{meter}} measures length, and a doorknob is about a meter off the floor.",
      "The {{gram}} measures {{mass}}, which is the amount of matter in an object, and a thumbtack has a mass of about one gram.",
      "The liter measures capacity, how much a container can hold, and a large water bottle holds about a liter."
    ]},

    { title: "Prefixes Are Place Values", s: [
      "Every other metric unit is one of those three basic units with a {{prefix}} on the front, and the prefix tells you which place the unit sits in.",
      "Read the places from largest to smallest and you get kilo, hecto, deka, then the basic unit itself, then deci, centi and milli.",
      "",
      "[ex] kilo = 1,000    hecto = 100    deka = 10",
      "[ex] deci = one tenth    centi = one hundredth    milli = one thousandth",
      "",
      "Each place is 10 times the place to its right, exactly like the place values in a decimal, so a kilometer is 1,000 meters and a milliliter is one thousandth of a liter."
    ]},

    { title: "Going to a Smaller Unit: Multiply", s: [
      "When you change to a smaller unit, it takes more of them to make the same amount, so the number has to get bigger and you multiply.",
      "Dana's run is 5 kilometers, and kilo to the basic unit is three places, so you multiply by 1,000, which moves the decimal point three places to the right.",
      "",
      "[ex] 5 km = 5 x 1,000 = 5,000 m",
      "",
      "Her watch will count 5,000 meters, and the same move works on her water, because the 2.5-liter jug she fills her bottle from holds 2,500 milliliters, which is three places down.",
      "",
      "[ex] 2.5 L = 2.5 x 1,000 = 2,500 mL"
    ]},

    { title: "Going to a Larger Unit: Divide", s: [
      "When you change to a larger unit, it takes fewer of them to make the same amount, so the number gets smaller and you divide.",
      "Dana's snack bar is 45 grams, and she wants to know what the kitchen scale will show in kilograms, which is three places to the left, so you divide by 1,000.",
      "",
      "[ex] 45 g = 45 ÷ 1,000 = 0.045 kg",
      "",
      "The same move works for her bottle, because 750 milliliters divided by 1,000 gives 0.75 liter, which is three-quarters of a liter.",
      "",
      "[ex] 750 mL = 750 ÷ 1,000 = 0.75 L"
    ]},

    { title: "Which Way Do I Move?", s: [
      "The most common mistake is multiplying when you should divide, and one quick question prevents it: is the unit you're changing to bigger or smaller than the one you started with?",
      "If it's smaller, expect a bigger number and multiply, and if it's larger, expect a smaller number and divide.",
      "Check it on a short one, like 3.2 centimeters into millimeters, where a millimeter is smaller and the two units are one place apart, so you multiply by 10.",
      "",
      "[ex] 3.2 cm = 3.2 x 10 = 32 mm",
      "",
      "Dana's five kilometers, her three-quarters of a liter and her 45 grams are the same amounts all along, and only the size of the ruler changes."
    ]}
  ],

  words: [
    ["Meter", "The basic metric unit of length, about the height of a doorknob.", 5],
    ["Gram", "The basic metric unit of mass, about the mass of a thumbtack.", 6],
    ["Liter", "The basic metric unit of capacity, about the amount a large water bottle holds.", 7],
    ["Prefix", "The part at the front of a metric unit that shows its place value, like kilo or milli.", 8],
    ["Mass", "The amount of matter in an object.", 6]
  ],

  findsAt: 28,
  questions: [
    { tag: "Basic Units", q: "Which basic metric unit measures length?",
      find: [5],
      hint: "Read Three Basic Units.",
      choices: ["The gram", "The liter", "The meter", "The prefix"], right: 2 },

    { tag: "Basic Units", q: "What does mass tell you about an object?",
      find: [6],
      hint: "A gram measures it.",
      choices: [
        "How long it is.",
        "How much it can hold.",
        "How much space it takes up.",
        "How much matter is in it."
      ], right: 3 },

    { tag: "Prefixes", q: "What does the prefix kilo mean?",
      find: [9, 10],
      hint: "Read Prefixes Are Place Values.",
      choices: ["One thousandth.", "1,000 times the basic unit.", "100 times the basic unit.", "One tenth."], right: 1 },

    { tag: "Place Values", q: "How does each metric place compare to the place on its right?",
      find: [12],
      hint: "It works like the place values in a decimal.",
      choices: [
        "It's 100 times as large.",
        "It's 10 times as large.",
        "It's the same size.",
        "It's half as large."
      ], right: 1 },

    { tag: "Multiply", q: "What is 5 kilometers in meters?",
      find: [14, 15],
      hint: "Kilo to the basic unit is three places, and you're going to a smaller unit.",
      choices: ["0.005 m", "50 m", "500 m", "5,000 m"], right: 3 },

    { tag: "Divide", q: "What is 45 grams in kilograms?",
      find: [19, 20],
      hint: "You're going to a larger unit, so the number gets smaller.",
      choices: ["0.045 kg", "4.5 kg", "45,000 kg", "0.45 kg"], right: 0 },

    { tag: "Which Way", q: "When you change to a smaller unit, what happens to the number?",
      find: [13, 24],
      hint: "It takes more of the small units to make the same amount.",
      choices: [
        "It gets smaller, so you divide.",
        "It stays the same.",
        "It gets bigger, so you multiply.",
        "It becomes a whole number."
      ], right: 2 },

    { tag: "Put It Together", q: "What is 3.2 centimeters in millimeters?",
      find: [25, 26],
      hint: "A millimeter is smaller, and the units are one place apart.",
      choices: ["0.32 mm", "32 mm", "320 mm", "3,200 mm"], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>meter</i> about as long as?",
      choices: ["The height of a doorknob.", "The width of a thumbtack.", "A large water bottle.", "A kitchen scale."], right: 0 },
    { q: "What is a <i>gram</i> about as much as?",
      choices: ["A water bottle.", "A thumbtack.", "A doorknob.", "A pair of shoes."], right: 1 },
    { q: "What does a <i>liter</i> measure?",
      choices: ["Length.", "Mass.", "How much a container can hold.", "How fast something moves."], right: 2 },
    { q: "What does a <i>prefix</i> like milli tell you?",
      choices: ["What kind of thing is being measured.", "How many digits there are.", "Whether a number is rounded.", "Which place the unit sits in."], right: 3 },
    { q: "What is <i>mass</i>?",
      choices: ["The amount of matter in an object.", "How far apart two things are.", "How much a container holds.", "The size of a unit."], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "Dana's run, her water bottle and her snack bar all got changed from one metric unit to another, and the questions below do the same.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every conversion, count the places between the two units first, and then decide whether the number should get bigger or smaller.",
      "If the multiply or divide questions trip you up, read Which Way Do I Move again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
