/* maths/the-metric-system
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🔁 REPLACED 2026-10-14: THE BOOK'S METHOD. Paul asked how close a lesson could
   get to the textbook, then: "lets push this as a replaced lesson". It follows
   Glencoe Course 2 (1998) pp78-80 in ORDER and METHOD: opening speed question,
   the place-value chart, solve the opener, the multiply/divide arrow diagram,
   two examples each for length, mass and capacity, Guided Practice as Your
   Turn, Exercises 14-38 as the homework sheet. The wording and every number are
   ours; the book's text is not copied. The earlier runner/ladder version is in
   git history before this date. SAME id and slug on purpose, so Kolten's saved
   score stays on it (Paul: "just mark Koltens grade the same").
   Paul's own edits: the 3 feet beside the doorknob, and the decimal point moving
   one place per column (4.7 cm to 47 mm to 0.047 m), not "jumping".

   The two charts are DESIGNED figures (@fig: in a work line, drawFig() in
   lesson-template.html), not text art. Spoken lines carry no symbols; the
   symbols live in the work lines, which the voice never reads. */
'use strict';
module.exports = {
  id: "maths/the-metric-system",
  slug: "the-metric-system",
  title: "The Metric System",
  unit: "Math 7 &middot; U2-L9",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 9 },
  natural: "2026-10-14",

  plan: {
    objective: "Change metric units of length, mass and capacity.",
    markers: [
      "BOOK (paraphrased), Objective box: change metric units of length, capacity and mass.",
      "BOOK (paraphrased), Words to Learn: meter, metric system, gram, liter.",
      "BOOK (paraphrased), place-value chart: each place is 10 times the place to its right, and so is each prefix.",
      "BOOK (paraphrased), diagram: multiply to change from larger units to smaller units, divide to change from smaller units to larger units.",
      "BOOK (paraphrased), examples: one line of reasoning each, written as 'multiply by 10 since 1 cm = 10 mm'.",
    ],
    method: "THE CHART AND THE ARROWS, as the book does it. Find both units on the chart, then follow the arrow diagram: larger to smaller, multiply; smaller to larger, divide. The factor comes from the fact that links the two units (1 km = 1,000 m), and multiplying or dividing by 10, 100 or 1,000 moves the decimal point.",
    exampleOnly: [
      "The car and the jet are ours, in place of the book's speed of sound in air and water. Same shape: two speeds in different units, change one to compare.",
      "Benchmarks: doorknob (the book's), paper clip and a 2-liter soda bottle.",
    ],
    digitize: "Reading engine. Designed place-value chart and arrow diagrams in Watch It Worked steps, six worked examples, Guided Practice as Your Turn with typed answers.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "the-metric-system-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Every metric unit is a meter, a gram or a liter with a prefix on the front. Use the place-value chart and the arrow diagram to change from one to another.",
    contains: [
      "The meter, the gram and the liter, with something to picture for each",
      "The metric place-value chart, kilo down to milli",
      "Moving the decimal point one place for every column",
      "The multiply and divide arrow diagram",
      "Six worked examples, two each for length, mass and capacity",
      "Your Turn: eleven conversions",
    ] },
  eyebrow: ["Math 7", "U2-L9", "Applications with Decimals"],
  dek: "Every metric unit is a meter, a gram or a liter with a prefix on the front. Use the chart and the arrows to change from one to another.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student changes metric units of length, mass and capacity by multiplying or dividing by 10, 100 or 1,000."
      ]},
      { h: "Key Concepts", p: [
        "The metric prefixes line up with the place-value chart: kilo is the thousands place, the basic unit is the ones place, and milli is the thousandths place. Each place is 10 times the place on its right.",
        "Going from a larger unit to a smaller one, you multiply. Going from a smaller unit to a larger one, you divide. Multiplying or dividing by 10, 100 or 1,000 just moves the decimal point."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Multiplying when the unit gets larger. Ask: will it take more of the new unit, or fewer? More means multiply.",
        "Using the wrong factor. Have him write the fact that links the two units first, such as 1 kg = 1,000 g, before he multiplies or divides."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have your student draw the arrow diagram from memory (km, m, cm, mm with the factors) before starting Your Turn, then point to the two units for every problem."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Which Is Faster?", s: [
      "[ex] On the highway, a car goes about 30 meters every second.",
      "A jet airliner cruises at about 0.25 kilometer every second.",
      "Which one is faster?",
      "",
      "The two speeds use different units, so you can't just compare 30 and 0.25.",
      "One way to find out is to change 0.25 kilometer into meters, and this lesson shows you how."
    ]},

    { title: "Ten Times, Every Time", s: [
      "Both speeds are measured with the {{meter}}, the basic unit of length in the {{metric system}}.",
      "The metric system is the way most of the world measures, and it's built on tens, just like the numbers you already use.",
      "A meter is a little more than 3 feet, which is about how high a doorknob is off the floor, so the next time you open a door, your hand is about a meter up.",
      "Every other unit of length is the meter with a prefix on the front, which is a word part that tells you the place value of the unit, so the prefixes line up with the place-value chart you already know.",
      "",
      "[walk] Read the metric place-value chart.",
      "[step] Each prefix sits in a place-value column, and the basic unit sits in the ones place. || @fig:place",
      "[step] So kilo means thousands and milli means thousandths. || 1 kilometer = 1,000 meters\n1 millimeter = 0.001 meter",
      "",
      "Each place on the chart is 10 times the place on its right, and the prefixes work the same way, so one column to the left always means 10 times as much.",
      "So every time you go one column on the chart, the decimal point moves one place, which is a factor of 10.",
      "",
      "[walk] Watch the decimal point move as 4.7 centimeters changes units.",
      "[step] Start with 4.7 centimeters, in the centi column of the chart. || 4.7 cm",
      "[step] Millimeters are one column smaller, so you need 10 times as many, and the decimal point moves one place to the right. || 4.7 cm  →  47 mm\n× 10: the point moves 1 place right",
      "[step] Meters are two columns bigger, so you need fewer of them, and the decimal point moves two places to the left. || 4.7 cm  →  0.047 m\n÷ 100: the point moves 2 places left",
      "[step] Count the columns between the two units, and that's how many places the point moves. || 1 column = 1 place = a factor of 10",
      "",
      "Going to a smaller unit moves the point to the right, and going to a bigger unit moves it to the left.",
      "That's the whole trick, and it's why you never have to remember odd numbers like the 12 inches in a foot."
    ]},

    { title: "Back to the Jet", s: [
      "[walk] Change 0.25 kilometer into meters.",
      "[step] One kilometer is 1,000 meters, so you multiply by 1,000. || 1 km = 1,000 m",
      "[step] Multiplying by 1,000 moves the decimal point three places to the right. || 0.25 × 1,000 = 250",
      "[step] So the jet goes 250 meters every second. || 0.25 km = 250 m",
      "[step] 250 is greater than 30, so the jet is faster than the car. || 250 > 30",
      "",
      "Here's a mental math hint: to multiply or divide by 10, 100 or 1,000, you only have to move the decimal point.",
      "Count the zeros, and that's how many places it moves."
    ]},

    { title: "Multiply or Divide?", s: [
      "The jet was easy because the chart told you a kilometer is 1,000 meters, but most problems won't say whether to multiply or divide.",
      "This diagram shows you which way to go.",
      "",
      "[walk] Use the diagram to change units of length.",
      "[step] To change from a larger unit to a smaller unit, multiply, and follow the arrows across the top. || @fig:arrows km m cm mm | 1,000 100 10",
      "[step] To change from a smaller unit to a larger unit, divide, and follow the arrows along the bottom. || larger → smaller: multiply\nsmaller → larger: divide",
      "",
      "Think of coins: a dollar is 100 pennies, so the smaller coin always needs the bigger number.",
      "A smaller unit works the same way, because it takes more of them to cover the same length, which is why the number gets bigger when you multiply.",
      "",
      "[walk] Change 0.6 centimeter into millimeters.",
      "[step] To change centimeters to millimeters, multiply by 10, since 1 centimeter is 10 millimeters. || 0.6 cm = ? mm\n1 cm = 10 mm",
      "[step] Multiplying by 10 moves the decimal point one place to the right. || 0.6 × 10 = 6",
      "[step] So 0.6 centimeter is 6 millimeters. || 0.6 cm = 6 mm",
      "",
      "[walk] Change 3,200 meters into kilometers.",
      "[step] To change meters to kilometers, divide by 1,000, since 1 kilometer is 1,000 meters. || 3,200 m = ? km\n1 km = 1,000 m",
      "[step] Dividing by 1,000 moves the decimal point three places to the left. || 3,200 ÷ 1,000 = 3.2",
      "[step] So 3,200 meters is 3.2 kilometers. || 3,200 m = 3.2 km"
    ]},

    { title: "A Paper Clip's Worth", s: [
      "The {{gram}} is the basic unit of mass in the metric system.",
      "Mass is how much matter an object has, and matter is just the stuff it's made of.",
      "A paper clip has a mass of about one gram.",
      "Kilogram, gram and milligram go together the same way kilometer, meter and millimeter do.",
      "",
      "[walk] The same diagram works for mass.",
      "[step] A kilogram is 1,000 grams, and a gram is 1,000 milligrams. || @fig:arrows kg g mg | 1,000 1,000",
      "",
      "[walk] Change 3,850 grams into kilograms.",
      "[step] To change grams to kilograms, divide by 1,000, since 1 kilogram is 1,000 grams. || 3,850 g = ? kg\n1 kg = 1,000 g",
      "[step] Dividing by 1,000 moves the decimal point three places to the left. || 3,850 ÷ 1,000 = 3.85",
      "[step] So 3,850 grams is 3.85 kilograms. || 3,850 g = 3.85 kg",
      "",
      "[walk] Change 7 grams into milligrams.",
      "[step] To change grams to milligrams, multiply by 1,000, since 1 gram is 1,000 milligrams. || 7 g = ? mg\n1 g = 1,000 mg",
      "[step] Multiplying by 1,000 moves the decimal point three places to the right. || 7 × 1,000 = 7,000",
      "[step] So 7 grams is 7,000 milligrams. || 7 g = 7,000 mg"
    ]},

    { title: "How Much Does It Hold?", s: [
      "The {{liter}} is the basic unit of capacity in the metric system.",
      "Capacity is how much a container can hold, whether it's a liquid or something dry like rice.",
      "A big bottle of soda holds 2 liters.",
      "Kiloliter, liter and milliliter go together the same way too.",
      "",
      "[walk] One more diagram, this time for capacity.",
      "[step] A kiloliter is 1,000 liters, and a liter is 1,000 milliliters. || @fig:arrows kL L mL | 1,000 1,000",
      "",
      "[walk] Change 0.4 liter into milliliters.",
      "[step] Multiply by 1,000, since 1 liter is 1,000 milliliters. || 0.4 L = ? mL\n1 L = 1,000 mL",
      "[step] Multiplying by 1,000 moves the decimal point three places to the right. || 0.4 × 1,000 = 400",
      "[step] So 0.4 liter is 400 milliliters. || 0.4 L = 400 mL",
      "",
      "[walk] Change 675 liters into kiloliters.",
      "[step] Divide by 1,000, since 1 kiloliter is 1,000 liters. || 675 L = ? kL\n1 kL = 1,000 L",
      "[step] Dividing by 1,000 moves the decimal point three places to the left. || 675 ÷ 1,000 = 0.675",
      "[step] So 675 liters is 0.675 kiloliter. || 675 L = 0.675 kL",
      "",
      "Every one of these starts with the same question: is the new unit larger or smaller?",
      "Smaller means multiply, larger means divide, and the fact that links the two units tells you by how much."
    ]},
  ],

  words: [
    ["Meter", "The basic unit of length in the metric system, a little more than 3 feet, about as high as a doorknob.", 5],
    ["Metric System", "A way of measuring built on tens, used by most of the world.", 5],
    ["Gram", "The basic unit of mass in the metric system, about the mass of a paper clip.", 43],
    ["Liter", "The basic unit of capacity in the metric system.", 57]
  ],

  findsAt: 73,

  questions: [
    { tag: "The Chart", q: "On the metric place-value chart, which place does the basic unit sit in?",
      find: [10], hint: "Look at the chart in Ten Times, Every Time.",
      choices: ["The thousands place", "The tens place", "The ones place", "The tenths place"], right: 2,
      why: "The basic unit, the meter, gram or liter, sits in the ones place." },

    { tag: "The Chart", q: "What does the prefix milli mean?",
      find: [11], hint: "Find milli on the chart.",
      choices: ["Thousands", "Thousandths", "Hundredths", "Tens"], right: 1,
      why: "Milli sits in the thousandths place, so a millimeter is 0.001 meter." },

    { tag: "The Chart", q: "Each place on the chart is how many times the place on its right?",
      find: [12], hint: "Read the line right after the chart.",
      choices: ["2 times", "100 times", "1,000 times", "10 times"], right: 3,
      why: "Each place is 10 times the place on its right, and each prefix is too." },

    { tag: "The Jet", q: "Why was the jet faster than the car?",
      find: [23,24,25], hint: "Read Back to the Jet.",
      choices: ["0.25 km is 250 m, and 250 is greater than 30", "0.25 is less than 30", "Kilometers are always faster", "0.25 km is 25 m"], right: 0,
      why: "0.25 × 1,000 = 250, so the jet goes 250 meters every second, more than the car's 30." },

    { tag: "Which Way", q: "You change a larger unit into a smaller unit. What do you do?",
      find: [31], hint: "Look at the arrows across the top of the diagram.",
      choices: ["Divide", "Add", "Multiply", "Subtract"], right: 2,
      why: "Larger to smaller, multiply. A smaller unit takes more of them." },

    { tag: "Length", q: "What is 0.8 cm in millimeters?",
      find: [36,37], hint: "1 cm = 10 mm.",
      choices: ["0.08 mm", "8 mm", "80 mm", "800 mm"], right: 1,
      why: "Centimeters to millimeters, multiply by 10: 0.8 × 10 = 8 mm." },

    { tag: "Mass", q: "What is 2,600 g in kilograms?",
      find: [50,51], hint: "1 kg = 1,000 g, and a kilogram is the larger unit.",
      choices: ["2,600,000 kg", "260 kg", "26 kg", "2.6 kg"], right: 3,
      why: "Grams to kilograms, divide by 1,000: 2,600 ÷ 1,000 = 2.6 kg." },

    { tag: "Capacity", q: "What is 1.5 L in milliliters?",
      find: [64,65], hint: "1 L = 1,000 mL.",
      choices: ["1,500 mL", "150 mL", "15 mL", "0.0015 mL"], right: 0,
      why: "Liters to milliliters, multiply by 1,000: 1.5 × 1,000 = 1,500 mL." },

    { tag: "Spot the Mistake", q: "A student changes 45 g into kilograms and gets 45,000 kg. What went wrong?",
      find: [50], hint: "Is a kilogram larger or smaller than a gram?",
      choices: ["Nothing, that's right", "The student should have multiplied by 100", "The student multiplied, but a kilogram is larger, so they should have divided", "The student used the liter diagram"], right: 2,
      why: "Smaller to larger means divide: 45 ÷ 1,000 = 0.045 kg." }
  ],

  vocabQuestions: [
    { q: "What does a <i>meter</i> measure?",
      choices: ["Length", "Mass", "Capacity", "Time"], right: 0 },
    { q: "What is the <i>metric system</i> built on?",
      choices: ["Twelves", "Tens", "Sixties", "Halves"], right: 1 },
    { q: "About how much mass does a <i>gram</i> have?",
      choices: ["A car", "A bag of flour", "A paper clip", "A bowling ball"], right: 2 },
    { q: "What does a <i>liter</i> measure?",
      choices: ["Length", "Mass", "Speed", "Capacity"], right: 3 }
  ],

  work: [
    { title: "Length",
      ask: "Complete each one. Ask first: is the new unit larger or smaller?",
      steps: [
        { ask: "720 mm = ? cm", answer: 72, calc: "720/10",
          hint: "1 cm = 10 mm, and a centimeter is larger, so divide by 10.",
          why: "720 ÷ 10 = 72 cm." },
        { ask: "5.6 km = ? m", answer: 5600, calc: "5.6*1000",
          hint: "1 km = 1,000 m, and a meter is smaller, so multiply by 1,000.",
          why: "5.6 × 1,000 = 5,600 m." },
        { ask: "76 km = ? m", answer: 76000, calc: "76*1000",
          hint: "Multiply by 1,000.",
          why: "76 × 1,000 = 76,000 m." },
        { ask: "How many centimeters are in 0.38 meter?", answer: 38, calc: "0.38*100",
          hint: "1 m = 100 cm, so multiply by 100.",
          why: "0.38 × 100 = 38 cm." },
      ] },
    { title: "Mass",
      ask: "Complete each one.",
      steps: [
        { ask: "925 g = ? kg", answer: 0.925, calc: "925/1000",
          hint: "A kilogram is larger, so divide by 1,000.",
          why: "925 ÷ 1,000 = 0.925 kg." },
        { ask: "12.4 g = ? mg", answer: 12400, calc: "12.4*1000",
          hint: "A milligram is smaller, so multiply by 1,000.",
          why: "12.4 × 1,000 = 12,400 mg." },
        { ask: "58.3 kg = ? g", answer: 58300, calc: "58.3*1000",
          hint: "Multiply by 1,000.",
          why: "58.3 × 1,000 = 58,300 g." },
        { ask: "How many grams are in 2.05 kilograms?", answer: 2050, calc: "2.05*1000",
          hint: "1 kg = 1,000 g.",
          why: "2.05 × 1,000 = 2,050 g." },
      ] },
    { title: "Capacity",
      ask: "Complete each one.",
      steps: [
        { ask: "3 L = ? mL", answer: 3000, calc: "3*1000",
          hint: "A milliliter is smaller, so multiply by 1,000.",
          why: "3 × 1,000 = 3,000 mL." },
        { ask: "41 L = ? kL", answer: 0.041, calc: "41/1000",
          hint: "A kiloliter is larger, so divide by 1,000.",
          why: "41 ÷ 1,000 = 0.041 kL." },
        { ask: "0.9 L = ? mL", answer: 900, calc: "0.9*1000",
          hint: "Multiply by 1,000.",
          why: "0.9 × 1,000 = 900 mL." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "First work through Your Turn below the reading, typing each answer.",
      "Then, in your notebook, explain each of these in your own words.",
      "How do you know whether to multiply or divide when you change metric units?",
      "How is the metric system like the decimal place-value chart?",
      "After that come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If a conversion trips you up, look at the arrow diagram again and ask whether the new unit is larger or smaller.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and work every problem on paper."
  ] }
};
