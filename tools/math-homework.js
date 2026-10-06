/* ─────────────────────────────────────────────────────────────────────────
   math-homework.js — the PRACTICE half of every grade 7 Math lesson.

   Paul, 2026-10-05: "we have graphs and doing decimals and stuff but there is
   not full examples or questions that put that into practice what he learned.
   I'm concerned we either need worksheets and more." The reading lesson
   teaches the skill with a few multiple-choice checks; this sheet is where he
   actually works the problems, on paper, the way Glencoe's Guided and
   Independent Practice does (ROADMAP 36).

   Rendered by homework-sheet.js (kind "homework", part kind "solve"), joined
   onto SHEETS in worksheets.js, linked from the lesson by `sheet: { slug }`.

   🚨 EVERY NUMERIC ANSWER CARRIES `calc` AND THE BUILD CHECKS IT. A wrong key
   fails the build; it never reaches Kolten. calc = plain arithmetic, plus
   r(x,n) round, up(x,n) round up, down(x,n) round down.
   🚨 NEVER THE LESSON'S OWN NUMBERS. The build fails a problem the lesson
   already worked. Same world as the lesson is fine and preferred.
   ⚠️ Mixed Review (earlier lessons) is NOT on these sheets yet. Paul: "the mix
   review can stay off for now."
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

const sheet = (o) => Object.assign({
  subject: "Math", grade: 7, grades: [7], kind: "homework",
  unit: "Homework &middot; answer key included",
  price: "$0", buy: null, art: false, thumb: false,
}, o);


/* one problem, one answer; calc is the arithmetic the build checks it against */
const q = (problem, answer, calc) => (calc ? { problem, answer, calc } : { problem, answer });

const MATH_HOMEWORK = [

sheet({
  slug: "comparing-and-ordering-decimals-homework", lesson: "maths/comparing-and-ordering-decimals",
  includedWith: "maths/comparing-and-ordering-decimals",
  title: "Comparing and Ordering Decimals: Homework",
  /* ⭐ THE PATTERN SHEET, 2026-10-05, rebuilt after Paul compared it with Glencoe
     pp48-50: "some really interesting examples way better than our examples ...
     even the critical thinking ones is brilliant", "it even tells the student to
     create a number line and ours doesn't", "you dont have to do that many but
     you can be more complex", and "you dont need to give so many lines".
     Shape: A number lines + warm-up · B tricky practice · C two real data sets,
     lettered · D critical thinking · E make up a problem. Our numbers, never the
     book's; the 100 m times are real (London 2012 final; world record
     progression), checked 2026-10-05. */
  dek: "Plot it, line up the points, compare place by place, and watch for the decimal that only looks bigger.",
  blurb: "Homework for the Comparing and Ordering Decimals lesson. Number lines, tricky comparisons, real Olympic sprint times, a critical thinking puzzle, and an answer key.",
  contains: [
    "Two number lines to plot and compare on",
    "Tricky comparisons where the longer decimal is not the bigger one",
    "Real 100 meter times from the Olympics and the world record book",
    "A decimal point puzzle, and a problem you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L1",
  signoff: "A longer decimal is not a bigger one. Add zeros on the end until both numbers are the same length, then compare.",
  parts: [
    { kind: "solve", heading: "Plot and Compare",
      note: "For 1 and 2, put a dot on the number line for each decimal, then write which is greater using > or <. For 3 to 12, write <, > or =.",
      key: "the comparison.",
      items: [
        { problem: "Plot 3.4 and 3.7. Which is greater?", numberline: { from: 3, to: 4, step: 0.1 }, answer: "3.7 > 3.4" },
        { problem: "Plot 0.58 and 0.505. (0.505 sits halfway between two marks.) Which is greater?", numberline: { from: 0.5, to: 0.6, step: 0.01 }, answer: "0.58 > 0.505" },
        q("6.07 ___ 6.7", "<"),
        q("12.40 ___ 12.4", "="),
        /* Paul, 2026-10-05: "it doesn't have greater than less than or equals as
           much now." The thinking problems stay; the plain drill comes back. */
        q("3.14 ___ 3.141", "<"),
        q("0.70 ___ 0.07", ">"),
        q("8.2 ___ 8.20", "="),
        q("15.009 ___ 15.09", "<"),
        q("0.48 ___ 0.408", ">"),
        q("2.500 ___ 2.5", "="),
        q("9.99 ___ 10.1", "<"),
        q("0.3 ___ 0.29", ">"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Annex zeros so the numbers are the same length before you decide.",
      key: "the answer.",
      items: [
        q("0.9 ___ 0.899", ">"),
        q("4.05 ___ 4.050", "="),
        q("Least to greatest: 2.3, 2.03, 2.303, 2.033", "2.03 < 2.033 < 2.3 < 2.303"),
        q("Greatest to least: 0.6, 0.66, 0.606, 0.066", "0.66 > 0.606 > 0.6 > 0.066"),
        q("Write a decimal that is greater than 1.39 but less than 1.4.", "Any decimal between them, such as 1.395 or 1.391. (1.4 is 1.40, so anything from 1.391 to 1.399 works.)"),
      ] },
    { kind: "solve", heading: "The Fastest Race on Earth",
      note: "These are real times, in seconds. In a race the SMALLER time wins, so read each question carefully.",
      key: "the answers.",
      items: [
        { problem: "The medal winners in the men's 100 meters at the 2012 London Olympics:",
          table: [["Runner", "Time"], ["Usain Bolt", "9.63"], ["Yohan Blake", "9.75"], ["Justin Gatlin", "9.79"]],
          sub: [
            { q: "Order the three times from fastest to slowest.", answer: "9.63 < 9.75 < 9.79 (Bolt, Blake, Gatlin)" },
            { q: "Say a fourth runner finished in 9.8. Did he beat Gatlin? Why?", answer: "No. 9.8 is 9.80, which is more than 9.79, so it is slower." },
            { q: "How many seconds faster was Bolt than Blake?", answer: "0.12 seconds", calc: "9.75-9.63" },
          ] },
        { problem: "Some of the world records in the men's 100 meters. Each new record had to be a smaller time than the one before it.",
          table: [["Year", "Runner", "Record"], ["1968", "Jim Hines", "9.95"], ["1991", "Carl Lewis", "9.86"], ["1994", "Leroy Burrell", "9.85"],
                  ["1996", "Donovan Bailey", "9.84"], ["1999", "Maurice Greene", "9.79"], ["2007", "Asafa Powell", "9.74"], ["2009", "Usain Bolt", "9.58"]],
          sub: [
            { q: "Are the records in the table in order from greatest to least?", answer: "Yes. Each time is less than the one above it." },
            { q: "Which record cut the most time off the one before it on this table, and by how much?", answer: "0.16 seconds, by Bolt's record in 2009", calc: "9.74-9.58" },
            { q: "A runner says his 9.6 beats Bolt's 9.58 because 6 is less than 58. Is he right?", answer: "No. 9.6 is 9.60, and 9.60 is more than 9.58, so his time is slower." },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("The numbers 512, 384, 270 and 196 are in order from greatest to least. Put a decimal point in each one, without moving any digits or changing the order of the numbers, so they read from least to greatest.",
          "One way: 0.512 < 3.84 < 27.0 < 196. Other answers work if each number is less than the next."),
        q("Put a zero into 4.5 in three different places: 04.5, 4.50 and 4.05. Which ones change the value, and why?",
          "Only 4.05 changes. A zero at the front or the end leaves 4.5 the same, but a zero after the point pushes the 5 into the hundredths place, so 4.05 is smaller."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then trade with someone or solve it yourself.",
      key: "what a good problem looks like.",
      items: [
        q("Write four decimals that all start with 7. and put them in order from least to greatest. Make at least one of them a trap: a longer decimal that is actually smaller.",
          "Answers vary. A good one mixes lengths, such as 7.09 < 7.1 < 7.15 < 7.2, where 7.09 has more digits than 7.1 but is smaller."),
      ] },
  ],
}),

sheet({
  slug: "rounding-decimals-homework", lesson: "maths/rounding-decimals",
  includedWith: "maths/rounding-decimals",
  title: "Rounding Decimals: Homework",
  /* REAL DATA, checked 2026-10-05. NASA Planetary Fact Sheet, rotation period in
     hours: Earth 23.9345, Mars 24.6229, Jupiter 9.9250 (https://nssdc.gsfc.nasa.gov/planetary/factsheet/ ,
     checked against https://spaceplace.nasa.gov/days/en/ and the Mars and Jupiter pages on Wikipedia).
     pi 3.14159265, e 2.71828182, golden ratio 1.61803398 are mathematical constants (first eight decimal places).
     The $22 bill, the vans and the number lines are made up for practice. */
  dek: "Find the place, look one digit to the right, and watch for the times a number must go UP no matter what.",
  blurb: "Homework for the Rounding Decimals lesson. Number lines, rounding to every place, real NASA spin times, famous numbers that never end, a critical thinking puzzle, and an answer key.",
  contains: [
    "Two number lines to plot on before you round",
    "Rounding to the whole number, tenth, hundredth and thousandth",
    "Traps: the 9 that carries, and a bill that rounds up",
    "Real spin times of Earth, Mars and Jupiter, and pi, e and the golden ratio",
    "When you must always round up, and a problem you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L2",
  signoff: "Underline the place, circle the digit to its right, and decide: 0 to 4 stays, 5 to 9 goes up. A 9 that goes up turns into a 0 and carries.",
  parts: [
    { kind: "solve", heading: "Plot and Round",
      note: "For 1 and 2, put a dot on the number line, then round. For 3 to 12, write the rounded number.",
      key: "the rounded numbers.",
      items: [
        { problem: "Plot 6.38. Is it closer to 6.3 or 6.4? Round it to the nearest tenth.", numberline: { from: 6.3, to: 6.4, step: 0.01 }, answer: "6.4 (6.38 is closer to 6.4)", calc: "r(6.38,1)" },
        { problem: "Plot 17.46. Which whole number is it closer to? Round it to the nearest whole number.", numberline: { from: 17, to: 18, step: 0.1 }, answer: "17 (17.46 is left of the halfway mark, 17.5)", calc: "r(17.46,0)" },
        q("5.27 to the nearest tenth", "5.3", "r(5.27,1)"),
        q("18.643 to the nearest hundredth", "18.64", "r(18.643,2)"),
        q("9.5 to the nearest whole number", "10", "r(9.5,0)"),
        q("0.0372 to the nearest thousandth", "0.037", "r(0.0372,3)"),
        q("82.449 to the nearest tenth", "82.4", "r(82.449,1)"),
        q("4.996 to the nearest hundredth", "5.00", "r(4.996,2)"),
        q("0.8051 to the nearest hundredth", "0.81", "r(0.8051,2)"),
        q("299.97 to the nearest tenth", "300.0", "r(299.97,1)"),
        q("12.0449 to the nearest hundredth", "12.04", "r(12.0449,2)"),
        q("7.0961 to the nearest thousandth", "7.096", "r(7.0961,3)"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Look at only ONE digit, the one right next to the place.",
      key: "the answer.",
      items: [
        q("Round 6.449 to the nearest tenth. A student rounds 6.449 to 6.45, then 6.45 to 6.5. What is the real answer?", "6.4. Only the 4 right next to the tenths place matters, so you never round twice.", "r(6.449,1)"),
        q("Round 3.96 to the nearest tenth. Does your answer still have a digit in the tenths place?", "4.0. The 9 goes up and carries, and the zero stays to show you rounded to tenths.", "r(3.96,1)"),
        q("Round 1.296 to the nearest hundredth. Should the answer be written 1.3?", "1.30. The zero on the end shows the number was rounded to hundredths.", "r(1.296,2)"),
        q("Round 5.6 to the nearest whole number. Ben says the 5 in the ones place stays, so it is 5. Is he right?", "No. Look at the digit to the right, 6, so the 5 goes up to 6."),
        q("Round 8.5 and 8.49 to the nearest whole number. Do they land on the same number?", "No. 8.5 rounds up to 9, but 8.49 has a 4 next door, so it stays 8."),
        q("Which skill? Round 8.3333 to the nearest hundredth. Then a $22 bill is split among 3 friends: 22 ÷ 3 = 7.3333... Each friend must pay enough to cover the bill. What does each friend pay, and why is it not the nearest cent? (Rounding a decimal is U2-L2. Rounding a quotient is U2-L8.)",
          "$7.34 each. The nearest cent is 7.33, but 3 × 7.33 = 21.99 is a cent short, so a bill rounds UP. (And 8.3333 to hundredths is 8.33.)", "up(22/3,2)"),
      ] },
    { kind: "solve", heading: "How Long Is a Day?",
      note: "These are real times from NASA's Planetary Fact Sheet: how many hours each planet takes to spin once.",
      key: "the answers.",
      items: [
        { problem: "The time for one spin, in hours:",
          table: [["Planet", "Hours per spin"], ["Earth", "23.9345"], ["Mars", "24.6229"], ["Jupiter", "9.9250"]],
          sub: [
            { q: "Round Mars to the nearest tenth of an hour.", answer: "24.6 hours", calc: "r(24.6229,1)" },
            { q: "Round Jupiter to the nearest hundredth.", answer: "9.93 hours", calc: "r(9.925,2)" },
            { q: "Round Earth to the nearest whole hour. Is it the number you expected?", answer: "24 hours. Yes, that is the length of a day on the clock.", calc: "r(23.9345,0)" },
          ] },
        { problem: "Numbers that never end. These are the first eight decimal places of each:",
          table: [["Number", "First digits"], ["pi", "3.14159265"], ["e", "2.71828182"], ["The golden ratio", "1.61803398"]],
          sub: [
            { q: "Round pi to the nearest thousandth.", answer: "3.142", calc: "r(3.14159265,3)" },
            { q: "Round e to the nearest hundredth.", answer: "2.72", calc: "r(2.71828182,2)" },
            { q: "Round the golden ratio to the nearest tenth. Then round it to the nearest whole number.", answer: "1.6, and then 2", calc: "r(1.61803398,1)" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("A school needs rides for 25 students, and each van seats 8. 25 ÷ 8 = 3.125. Rounding to the nearest whole number gives 3 vans. Does 3 vans work? What kind of rounding does this need, and name one other time in real life you would always round up.",
          "No. 3 vans seat only 24, so one student is left behind. You must round UP to 4 vans. Other times: buying boxes, tickets or paint, where a little left over is better than too little."),
        q("A number rounds to 6.5 when you round to the nearest tenth. What is the smallest hundredths number it could be, and what is the greatest hundredths number it could be?",
          "The smallest is 6.45 and the greatest is 6.54. 6.45 has a 5 next door so it rounds up to 6.5, and 6.55 would round up to 6.6."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then solve it yourself.",
      key: "what a good problem looks like.",
      items: [
        q("Write a decimal with three decimal places that rounds to a different number at the whole number, the tenth and the hundredth. Show all three roundings.",
          "Answers vary. A good one shows each rounding and they all differ, such as 3.648: whole number 4, tenth 3.6, hundredth 3.65."),
      ] },
  ],
}),

sheet({
  slug: "estimating-with-decimals-homework", lesson: "maths/estimating-with-decimals",
  includedWith: "maths/estimating-with-decimals",
  title: "Estimating with Decimals: Homework",
  /* REAL DATA, checked 2026-10-05. Atomic weights: IUPAC standard atomic weights
     (https://iupac.qmul.ac.uk/AtWt/): H 1.008, C 12.011, O 15.999, Na 22.990 (22.98977), Cl 35.45.
     Coin widths: United States Mint coin specifications, via
     https://en.wikipedia.org/wiki/United_States_Mint_coin_sizes : penny 19.05, nickel 21.21,
     dime 17.91, quarter 24.26 mm. The prices in the traps are made up. */
  dek: "Round to easy numbers, do the quick arithmetic, and use the estimate to catch an answer that cannot be right.",
  blurb: "Homework for the Estimating with Decimals lesson. Estimate sums, differences, products and quotients, real atomic weights and coin sizes, traps, and an answer key.",
  contains: [
    "A number line to round on, and ten estimates",
    "Traps: the small number that is not zero, and a misplaced decimal point",
    "Real atomic weights, used to estimate the mass of water and salt",
    "Real coin widths from the U.S. Mint",
    "Two sums with the same estimate, and a problem you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L3",
  signoff: "An estimate is the answer you should expect. If the exact answer lands far from it, go back and check.",
  parts: [
    { kind: "solve", heading: "Estimate It",
      note: "Round each number to its greatest place value, then do the easy arithmetic. For a list that bunches near one number, cluster. For division, pick numbers that divide evenly.",
      key: "the estimates.",
      items: [
        { problem: "Plot 2.7 and 5.4 and circle the whole number each is nearest. Then estimate 2.7 + 5.4.", numberline: { from: 2, to: 6, step: 1 }, answer: "about 8 (3 + 5)", calc: "3+5" },
        q("6.8 + 3.2 + 9.1", "about 19", "7+3+9"),
        q("24.7 + 38.2 + 11.6", "about 70", "20+40+10"),
        q("83.6 - 41.9", "about 40", "80-40"),
        q("3.9 × 6.1", "about 24", "4*6"),
        q("58.3 ÷ 7.8", "about 7", "56/8"),
        q("41.7 + 38.2 + 40.5 + 39.6 (cluster)", "about 160", "4*40"),
        q("$9.89 + $5.15 + $2.95", "about $18", "10+5+3"),
        q("0.48 × 52", "about 25", "0.5*50"),
        q("19.7 ÷ 4.1", "about 5", "20/4"),
        q("612.4 - 387.9", "about 200", "600-400"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Think before you round.",
      key: "the answer.",
      items: [
        q("Estimate 3.2 × 0.48 by rounding each number to its greatest place. A student rounds 0.48 down to 0 and says the answer is about 0. Fix it.", "about 1.5. The greatest place of 0.48 is tenths, so it rounds to 0.5, and 3 × 0.5 = 1.5.", "3*0.5"),
        q("A calculator says 8.3 × 4.9 = 4067. Use an estimate to decide where the decimal point really belongs.", "about 40, so the answer is 40.67. The point goes after the 0.", "8*5"),
        q("Estimate 5.4 + 0.3 + 0.2 + 0.4 by rounding each number to its greatest place. Do NOT turn the small ones into zero.", "about 5.9", "5+0.3+0.2+0.4"),
        q("Without multiplying, will 7.8 × 0.9 be more or less than 7.8? Why?", "Less. 0.9 is less than one whole, so you take less than one whole 7.8. (The exact answer is 7.02.)"),
        q("A clerk rings up $3.98, $6.02, $5.95 and $4.05 and says the total is $24.00. Estimate to see if that can be right.", "about 20 (4 + 6 + 6 + 4), so $24.00 is too high. The exact total is $20.00.", "4+6+6+4"),
        q("Which skill? A friend buys items for $4.95, $2.10 and $7.89 and says the total is $29.94. Estimate the total yourself (Estimating, U2-L3), then say whether his answer is reasonable (judging an answer, U2-L10).",
          "about 15 (5 + 2 + 8). His $29.94 is not reasonable; it is about double. The exact total is $14.94.", "5+2+8"),
      ] },
    { kind: "solve", heading: "Weighing Atoms and Counting Coins",
      note: "Real numbers. Atomic weights come from IUPAC and the coin widths from the U.S. Mint. Round to the nearest whole number first, then estimate.",
      key: "the estimates.",
      items: [
        { problem: "Atomic weights (the mass of one atom, in atomic mass units):",
          table: [["Atom", "Weight"], ["Hydrogen", "1.008"], ["Carbon", "12.011"], ["Oxygen", "15.999"], ["Sodium", "22.990"], ["Chlorine", "35.45"]],
          sub: [
            { q: "Water has 2 hydrogen atoms and 1 oxygen atom. Estimate its mass.", answer: "about 18", calc: "2*1+16" },
            { q: "Carbon dioxide has 1 carbon atom and 2 oxygen atoms. Estimate its mass.", answer: "about 44", calc: "12+2*16" },
            { q: "Table salt has 1 sodium atom and 1 chlorine atom. Estimate its mass.", answer: "about 58", calc: "23+35" },
            { q: "About how many times heavier is a chlorine atom than a hydrogen atom?", answer: "about 35 times", calc: "35/1" },
          ] },
        { problem: "How wide each U.S. coin is, in millimeters:",
          table: [["Coin", "Width"], ["Penny", "19.05"], ["Nickel", "21.21"], ["Dime", "17.91"], ["Quarter", "24.26"]],
          sub: [
            { q: "Line up a penny, nickel, dime and quarter edge to edge. Estimate the length of the row.", answer: "about 82 mm", calc: "19+21+18+24" },
            { q: "About how many quarters in a row would fit in 100 mm?", answer: "about 4", calc: "100/25" },
            { q: "About how much wider is a quarter than a dime?", answer: "about 6 mm", calc: "24-18" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("Round each number to the nearest whole number to estimate 4.4 + 4.4 and 3.6 + 4.4. Both estimates are the same. Find both exact sums. Which estimate is closer, and why?",
          "Both estimates are 8. The sums are 8.8 and 8.0. The second estimate is exact. In the first sum both numbers rounded DOWN, so the errors piled up. In the second, 3.6 rounded up by 0.4 and 4.4 rounded down by 0.4, so the errors cancelled."),
        q("Estimate 3.7 × 5.8 by rounding each factor to the nearest whole number. Without finding the exact answer, will the estimate be more or less than the exact product? Then check.",
          "The estimate is 4 × 6 = 24. It is more, because both factors rounded UP. The exact answer is 21.46."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then work it.",
      key: "what a good problem looks like.",
      items: [
        q("Write an addition problem with three decimals whose estimate is exactly 30 but whose exact sum is not 30. Show the estimate and the exact sum.",
          "Answers vary. A good one shows the rounding and both sums, such as 9.6 + 10.4 + 9.8: the estimate is 10 + 10 + 10 = 30, and the exact sum is 29.8."),
      ] },
  ],
}),

sheet({
  slug: "multiplying-decimals-homework", lesson: "maths/multiplying-decimals",
  includedWith: "maths/multiplying-decimals",
  title: "Multiplying Decimals: Homework",
  /* REAL DATA, checked 2026-10-05. United States Mint coin specifications
     (https://en.wikipedia.org/wiki/United_States_Mint_coin_sizes ; also listed at
     https://www.supermoney.com/dime-weigh): mass penny 2.500 g, nickel 5.000 g, dime 2.268 g,
     quarter 5.670 g; thickness penny 1.52 mm, nickel 1.95, dime 1.35, quarter 1.75. */
  dek: "Multiply as if the decimal points are not there, then count the places and put the point back.",
  blurb: "Homework for the Multiplying Decimals lesson. Ten products, traps about where the decimal point goes, real U.S. coin weights and thicknesses, a critical thinking puzzle, and an answer key.",
  contains: [
    "Ten products, easy to hard",
    "Traps: the product that is smaller, and the point that lands in the wrong place",
    "Real weights and thicknesses of U.S. coins",
    "A product that shows fewer places than you expect, and a problem you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L4",
  signoff: "Count the decimal places in BOTH numbers. That total is how many places the product has. A zero on the very end can be dropped.",
  parts: [
    { kind: "solve", heading: "Multiply",
      note: "Multiply, then count the decimal places. Use the margin for your work.",
      key: "the products.",
      items: [
        q("0.7 × 0.3", "0.21", "0.7*0.3"),
        q("4.2 × 3", "12.6", "4.2*3"),
        q("1.5 × 2.4", "3.6", "1.5*2.4"),
        q("0.08 × 0.5", "0.04", "0.08*0.5"),
        q("6.25 × 4", "25", "6.25*4"),
        q("3.7 × 2.8", "10.36", "3.7*2.8"),
        q("0.45 × 0.12", "0.054", "0.45*0.12"),
        q("12.4 × 0.05", "0.62", "12.4*0.05"),
        q("9.6 × 0.25", "2.4", "9.6*0.25"),
        q("1.35 × 4.2", "5.67", "1.35*4.2"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Count the places and ask whether your answer is reasonable.",
      key: "the answer.",
      items: [
        q("0.3 × 0.2. Is it 0.6, 0.06 or 0.006?", "0.06. One place plus one place makes two places.", "0.3*0.2"),
        q("8 × 0.5. Is the product more or less than 8?", "4, which is less than 8. Taking half of something makes less.", "8*0.5"),
        q("A student multiplies 25 × 4 = 100 and then writes 2.5 × 4 = 100 with no point. Where does the point go?", "10. 2.5 has one decimal place, so 100 becomes 10.0, or 10.", "2.5*4"),
        q("0.04 × 0.5. The digits give 20. How many places should the product have, and what is it?", "0.02. Two places plus one place is three places, 0.020, and the zero on the end can be dropped.", "0.04*0.5"),
        q("Without multiplying, which is greater, 6.8 × 1.1 or 6.8 × 0.9? Why?", "6.8 × 1.1. Times more than 1 makes it bigger than 6.8, and times less than 1 makes it smaller. (7.48 against 6.12.)"),
      ] },
    { kind: "solve", heading: "Money in Your Pocket",
      note: "Real numbers from the U.S. Mint. Multiply to find the weight or the height.",
      key: "the answers.",
      items: [
        { problem: "How much each coin weighs, in grams:",
          table: [["Coin", "Grams"], ["Penny", "2.500"], ["Nickel", "5.000"], ["Dime", "2.268"], ["Quarter", "5.670"]],
          sub: [
            { q: "What do 8 quarters weigh?", answer: "45.36 grams", calc: "5.67*8" },
            { q: "What do 12 dimes weigh?", answer: "27.216 grams", calc: "2.268*12" },
            { q: "What do 3 quarters and 4 pennies weigh together?", answer: "27.01 grams", calc: "3*5.67+4*2.5" },
          ] },
        { problem: "How thick each coin is, in millimeters:",
          table: [["Coin", "Thickness"], ["Penny", "1.52"], ["Nickel", "1.95"], ["Dime", "1.35"], ["Quarter", "1.75"]],
          sub: [
            { q: "How tall is a stack of 20 quarters?", answer: "35 mm", calc: "1.75*20" },
            { q: "How tall is a stack of 15 nickels?", answer: "29.25 mm", calc: "1.95*15" },
            { q: "Which stack is taller, 30 dimes or 25 pennies? Give the taller height.", answer: "40.5 mm, the 30 dimes. (25 pennies are 38 mm.)", calc: "30*1.35" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("Two decimals with two places each should make a product with four places. Write two such decimals whose product shows only THREE places, and show the product.",
          "Answers vary. One that works is 0.25 × 0.14 = 0.0350, written 0.035. The product has four places, but its last digit is a zero, so it shows only three."),
        q("0.6 times what number equals 0.18? Use a multiplication fact to help.", "0.3, because 6 × 3 = 18, and 0.6 × 0.3 has two places, 0.18.", "0.18/0.6"),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then work it.",
      key: "what a good problem looks like.",
      items: [
        q("Write a multiplication of two decimals whose product is smaller than BOTH of the numbers you multiplied. Show it and explain why it works.",
          "Answers vary. A good one uses two numbers less than 1, such as 0.5 × 0.4 = 0.2. Taking part of a part leaves less than either one."),
      ] },
  ],
}),

sheet({
  slug: "powers-of-ten-homework", lesson: "maths/powers-of-ten",
  includedWith: "maths/powers-of-ten",
  title: "Powers of Ten: Homework",
  /* REAL DATA, checked 2026-10-05. A U.S. $1 bill is 0.0043 inch thick and weighs
     about one gram (Bureau of Engraving and Printing figures, as listed at
     https://en.wikipedia.org/wiki/United_States_one-dollar_bill ). The marathon is
     42.195 km (https://artsandculture.google.com/story/exactly-42-195-kilometres-the-olympic-museum/UQUxmUDpLTLLUA ),
     and the half marathon is half of that, 21.0975 km. */
  dek: "Multiplying by a power of ten moves the decimal point right. Dividing moves it left. The exponent says how far.",
  blurb: "Homework for the Powers of Ten lesson. Ten shifts of the decimal point, traps, a stack of real dollar bills, real marathon distances, a critical thinking puzzle, and an answer key.",
  contains: [
    "Ten problems that move the decimal point",
    "Traps: 10 to the zero, multiplying by 0.1, and the exponent you have to find",
    "A stack of real dollar bills, and the real marathon in meters and centimeters",
    "Finding the power of ten, and a problem you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L5",
  signoff: "Count the zeros in 10, 100 and 1,000, or read the exponent. That many places: right to multiply, left to divide.",
  parts: [
    { kind: "solve", heading: "Move the Point",
      note: "Write the answer. Add zeros as placeholders when the point runs out of digits.",
      key: "the answers.",
      items: [
        q("4.7 × 10", "47", "4.7*10"),
        q("0.083 × 100", "8.3", "0.083*100"),
        q("25.6 × 1,000", "25,600", "25.6*1000"),
        q("36.2 ÷ 10", "3.62", "36.2/10"),
        q("540 ÷ 100", "5.4", "540/100"),
        q("9.4 × 10^3", "9,400", "9.4*1000"),
        q("0.7 × 10^2", "70", "0.7*100"),
        q("6,350 ÷ 1,000", "6.35", "6350/1000"),
        q("12.5 ÷ 10^2", "0.125", "12.5/100"),
        q("0.0046 × 10^4", "46", "0.0046*10000"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Say which way the point moves and how far before you write.",
      key: "the answer.",
      items: [
        q("36 × 0.1. Does the point move right or left?", "3.6. Times 0.1 is the same as dividing by 10, so the point moves LEFT one place.", "36*0.1"),
        q("4.5 × 10^0. A student says the point moves zero places and writes 0. What is right?", "4.5. 10^0 equals 1, so nothing changes.", "4.5*1"),
        q("0.052 × 10^2. Count the zeros in 100, not the digits in 0.052.", "5.2", "0.052*100"),
        q("63 ÷ 1,000. Where do you need placeholder zeros?", "0.063. The point moves left three places, so a zero goes in front of the 6.", "63/1000"),
        q("Fill in the exponent: 7.2 × 10^? = 72,000.", "4. The point moves from 7.2 to 72,000, which is four places right."),
      ] },
    { kind: "solve", heading: "Real Stacks and Real Races",
      note: "Real numbers. A U.S. $1 bill is 0.0043 inch thick, and a marathon is 42.195 kilometers.",
      key: "the answers.",
      items: [
        { problem: "Each $1 bill is 0.0043 inch thick. How tall is a stack of:",
          sub: [
            { q: "10 bills", answer: "0.043 inch", calc: "0.0043*10" },
            { q: "100 bills", answer: "0.43 inch", calc: "0.0043*100" },
            { q: "1,000 bills", answer: "4.3 inches", calc: "0.0043*1000" },
            { q: "10^5 bills", answer: "430 inches", calc: "0.0043*100000" },
          ] },
        { problem: "Real race distances, in kilometers:",
          table: [["Race", "Kilometers"], ["Marathon", "42.195"], ["Half marathon", "21.0975"]],
          sub: [
            { q: "How many meters is the marathon? (1 km = 1,000 m)", answer: "42,195 meters", calc: "42.195*1000" },
            { q: "How many meters is the half marathon?", answer: "21,097.5 meters", calc: "21.0975*1000" },
            { q: "How many centimeters is the marathon? (1 km = 10^5 cm)", answer: "4,219,500 centimeters", calc: "42.195*100000" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("Find the power of ten that turns 0.047 into 470. How many places does the point move, and which way?", "10^4. The point moves four places to the right: 0.047 to 0.47 to 4.7 to 47 to 470."),
        q("Maya says 10^3 × 10^2 = 10^6 because 3 × 2 = 6. Check her by writing out 1,000 × 100. Is she right?", "No. 1,000 × 100 = 100,000, which is 10^5. The exponents ADD: 3 + 2 = 5."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then work it.",
      key: "what a good problem looks like.",
      items: [
        q("Write a decimal and a power of ten that turn it into a whole number when you multiply. Show the answer and say how many places the point moved.",
          "Answers vary. A good one matches the places to the exponent, such as 0.0072 × 10^4 = 72, where the point moves four places right."),
      ] },
  ],
}),

sheet({
  slug: "scientific-notation-homework", lesson: "maths/scientific-notation",
  includedWith: "maths/scientific-notation",
  title: "Scientific Notation: Homework",
  /* REAL DATA, checked 2026-10-05. Speed of light 299,792,458 m/s exactly (shown rounded to
     300,000,000); one light-year is about 9.461 trillion km (shown as 9,460,000,000,000),
     both at https://en.wikipedia.org/wiki/Speed_of_light and https://www.space.com/15830-light-speed.html .
     A year of 365 days is 365 x 24 x 3600 = 31,536,000 seconds (arithmetic).
     U.S. population 1950: 151,325,798 and 2020: 331,449,281 (census.gov, decennial counts),
     shown rounded to the nearest million. World population passed 8 billion in November 2022 (United Nations),
     shown as 8,000,000,000. */
  dek: "One digit in front of the point, then a power of ten. Count the moves and you have the exponent.",
  blurb: "Homework for the Scientific Notation lesson. Ten conversions each way, traps, real numbers for light and for people, a puzzle that orders big numbers, and an answer key.",
  contains: [
    "Ten conversions, standard form to scientific notation and back",
    "Traps: 45 × 10^3 is not scientific notation, and the zeros you miscount",
    "The real speed of light and light-year, and real census populations",
    "Ordering numbers that are all in scientific notation",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L6",
  signoff: "The first number must be at least 1 and less than 10. The exponent is how many places the point moved.",
  parts: [
    { kind: "solve", heading: "Convert",
      note: "For 1 to 5, write the number in scientific notation. For 6 to 10, write it in standard form.",
      key: "the converted numbers.",
      items: [
        q("5,400", "5.4 × 10^3", "5400/1000"),
        q("72,000,000", "7.2 × 10^7", "72000000/10000000"),
        q("380,000", "3.8 × 10^5", "380000/100000"),
        q("46,000,000,000", "4.6 × 10^10", "46000000000/10000000000"),
        q("3,250,000", "3.25 × 10^6", "3250000/1000000"),
        q("2.5 × 10^4", "25,000", "2.5*10000"),
        q("6.03 × 10^6", "6,030,000", "6.03*1000000"),
        q("8.1 × 10^2", "810", "8.1*100"),
        q("1.7 × 10^9", "1,700,000,000", "1.7*1000000000"),
        q("9.1 × 10^2 written as a plain number", "910", "9.1*100"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Check that the first number is at least 1 and less than 10.",
      key: "the answer.",
      items: [
        q("Is 45 × 10^3 in scientific notation? If not, rewrite it.", "4.5 × 10^4. It was not in scientific notation, because 45 is not between 1 and 10.", "45000/10000"),
        q("Write 0.6 × 10^5 in scientific notation.", "6 × 10^4. 0.6 × 100,000 is 60,000, and the 6 needs to be in the ones place.", "60000/10000"),
        q("Write 7,000,000 in scientific notation. Count the zeros carefully.", "7 × 10^6. There are six zeros.", "7000000/1000000"),
        q("Which is greater, 9.9 × 10^4 or 1.1 × 10^5? The first has the bigger front number.", "1.1 × 10^5 is greater. 99,000 is less than 110,000, so compare the exponents first."),
        q("Write 6.2 × 10^1 as a plain number.", "62. An exponent of 1 moves the point one place.", "6.2*10"),
      ] },
    { kind: "solve", heading: "Light and People",
      note: "Real numbers, rounded to make them easy to write: the speed of light and the light-year, and census counts of the people in the United States.",
      key: "the answers.",
      items: [
        { problem: "Light, rounded:",
          table: [["Fact", "Number"], ["Speed of light, meters per second", "300,000,000"], ["One light-year, kilometers", "9,460,000,000,000"]],
          sub: [
            { q: "Write the speed of light in scientific notation.", answer: "3 × 10^8", calc: "300000000/100000000" },
            { q: "Write one light-year in scientific notation.", answer: "9.46 × 10^12", calc: "9460000000000/1000000000000" },
            { q: "How many seconds are in a 365 day year? Then write it in scientific notation, to three digits.", answer: "31,536,000 seconds, which is about 3.15 × 10^7", calc: "365*24*3600" },
          ] },
        { problem: "People, rounded to the nearest million:",
          table: [["Who", "How many"], ["United States, 1950", "151,000,000"], ["United States, 2020", "331,000,000"], ["The whole world, 2022", "8,000,000,000"]],
          sub: [
            { q: "Write all three in scientific notation.", answer: "1.51 × 10^8, 3.31 × 10^8 and 8 × 10^9" },
            { q: "Put the three in order from least to greatest.", answer: "1.51 × 10^8 < 3.31 × 10^8 < 8 × 10^9" },
            { q: "How many people did the United States gain from 1950 to 2020 (using the rounded numbers)? Write it in scientific notation too.", answer: "180,000,000, or 1.8 × 10^8", calc: "331000000-151000000" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("Put these in order from least to greatest without writing them in standard form: 4.2 × 10^6, 9.1 × 10^5, 4.15 × 10^6, 1.0 × 10^7. Tell what you compared first.",
          "9.1 × 10^5 < 4.15 × 10^6 < 4.2 × 10^6 < 1.0 × 10^7. Compare the exponents first. The two with 10^6 tie, so compare the front numbers, 4.15 and 4.2."),
        q("The number 6.5 × 10^k is between 1,000,000 and 10,000,000. What is k? Write the number out to check.", "6. 6.5 × 10^6 = 6,500,000, which is between the two."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then work it.",
      key: "what a good problem looks like.",
      items: [
        q("Pick a big number you know about, such as a distance, a population or a count of something. Write it rounded in standard form and in scientific notation, and say how many places the point moved.",
          "Answers vary. A good one rounds first and counts the moves, such as 24,000,000 = 2.4 × 10^7, where the point moved seven places."),
      ] },
  ],
}),

sheet({
  slug: "dividing-decimals-homework", lesson: "maths/dividing-decimals",
  includedWith: "maths/dividing-decimals",
  title: "Dividing Decimals: Homework",
  /* REAL DATA, checked 2026-10-05. Densities in g/cm^3 (pure metals at room temperature):
     aluminum 2.70, iron 7.87, gold 19.32 (https://www.engineersedge.com/materials/densities_of_metals_and_elements_table_13976.htm
     and https://periodictable.com/Properties/A/Density.al.html ). The masses we divide are made up.
     Coin masses: United States Mint (https://en.wikipedia.org/wiki/United_States_Mint_coin_sizes):
     nickel 5.000 g, dime 2.268 g, quarter 5.670 g. One pound is 453.59 g, shown as 453.6. */
  dek: "Move the point in the divisor until it is a whole number, move the dividend's point the same distance, then divide.",
  blurb: "Homework for the Dividing Decimals lesson. Ten quotients, traps about dividing by less than 1, real metal densities and U.S. coin weights, a decimal point puzzle, and an answer key.",
  contains: [
    "Ten quotients, easy to hard",
    "Traps: dividing makes the answer bigger, and the zeros that keep the place",
    "Real densities of aluminum, iron and gold, turned into volumes",
    "How many real coins make a given weight, including a pound of dimes",
    "A decimal point puzzle, and a problem you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L7",
  signoff: "Make the divisor a whole number by moving its point, and move the dividend's point the same number of places. Then divide as usual.",
  parts: [
    { kind: "solve", heading: "Divide",
      note: "Write the quotient. Check each one by multiplying back.",
      key: "the quotients.",
      items: [
        q("8.4 ÷ 2", "4.2", "8.4/2"),
        q("0.96 ÷ 4", "0.24", "0.96/4"),
        q("7.5 ÷ 0.5", "15", "7.5/0.5"),
        q("3.6 ÷ 0.09", "40", "3.6/0.09"),
        q("12.6 ÷ 0.7", "18", "12.6/0.7"),
        q("0.288 ÷ 0.12", "2.4", "0.288/0.12"),
        q("45 ÷ 1.5", "30", "45/1.5"),
        q("0.5 ÷ 0.8", "0.625", "0.5/0.8"),
        q("2.07 ÷ 0.09", "23", "2.07/0.09"),
        q("18.9 ÷ 0.003", "6,300", "18.9/0.003"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Estimate first so you know about how big the answer should be.",
      key: "the answer.",
      items: [
        q("0.6 ÷ 3. Is the answer 2 or 0.2?", "0.2. 6 tenths divided by 3 is 2 tenths.", "0.6/3"),
        q("2.4 ÷ 0.6. A student divides the small number into the big one wrong and gets 0.4. What is the real answer?", "4. 0.6 fits into 2.4 four times, and 4 × 0.6 = 2.4.", "2.4/0.6"),
        q("6 ÷ 0.25. Will the quotient be more or less than 6? Find it.", "24. Dividing by less than 1 makes the answer BIGGER, because 0.25 fits into 6 twenty-four times.", "6/0.25"),
        q("A student says 15.5 ÷ 0.5 = 3.1. Dividing by a number less than 1 gives a bigger answer than 15.5. What is the real answer?", "31. 0.5 fits into 15.5 thirty-one times.", "15.5/0.5"),
        q("0.9 ÷ 0.003. Keep the zeros that hold the place.", "300", "0.9/0.003"),
      ] },
    { kind: "solve", heading: "Metals and Money",
      note: "Real numbers. Density is how much a cubic centimeter weighs, so volume equals mass divided by density. The masses are made up; the densities and coin weights are real.",
      key: "the answers.",
      items: [
        { problem: "Density, in grams per cubic centimeter:",
          table: [["Metal", "Density"], ["Aluminum", "2.7"], ["Iron", "7.87"], ["Gold", "19.32"]],
          sub: [
            { q: "A block of aluminum has a mass of 54 grams. What is its volume in cubic centimeters?", answer: "20 cubic centimeters", calc: "54/2.7" },
            { q: "A piece of iron has a mass of 157.4 grams. What is its volume?", answer: "20 cubic centimeters", calc: "157.4/7.87" },
            { q: "A gold nugget has a mass of 96.6 grams. What is its volume?", answer: "5 cubic centimeters", calc: "96.6/19.32" },
          ] },
        { problem: "How much each coin weighs, in grams:",
          table: [["Coin", "Grams"], ["Nickel", "5.000"], ["Dime", "2.268"], ["Quarter", "5.670"]],
          sub: [
            { q: "How many dimes weigh 45.36 grams?", answer: "20 dimes", calc: "45.36/2.268" },
            { q: "How many quarters weigh 283.5 grams?", answer: "50 quarters", calc: "283.5/5.67" },
            { q: "One pound is about 453.6 grams. How many dimes weigh a pound? How much money is that?", answer: "200 dimes, which is $20.00", calc: "453.6/2.268" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("Place decimal points in 756 and 18 so that 756 ÷ 18 = 4.2.", "One way: 7.56 ÷ 1.8 = 4.2, because 1.8 × 4.2 = 7.56. Another is 0.756 ÷ 0.18 = 4.2."),
        q("Dividing by a number less than 1 makes the answer bigger. Explain it using 1.2 ÷ 0.15, and give the answer.", "8. The question asks how many 0.15s fit in 1.2. Each piece is small, so many fit. 8 × 0.15 = 1.2.", "1.2/0.15"),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then work it.",
      key: "what a good problem looks like.",
      items: [
        q("Write a division with a decimal divisor whose quotient is exactly 40. Check it by multiplying back.",
          "Answers vary. A good one checks, such as 3.2 ÷ 0.08 = 40, because 0.08 × 40 = 3.2."),
      ] },
  ],
}),

sheet({
  slug: "rounding-quotients-homework", lesson: "maths/rounding-quotients",
  includedWith: "maths/rounding-quotients",
  title: "Rounding Quotients: Homework",
  /* REAL DATA, checked 2026-10-05. Ted Williams 1941: 185 hits in 456 at bats, .406; Tony Gwynn 1994:
     165 hits in 419 at bats, .394 (https://baseballhall.org/discover/inside-pitch/ted-williams-goes-6-for-8 ,
     https://sabr.org/gamesproj/game/august-11-1994-tony-gwynn-ends-strike-shortened-season-at-394/ ).
     Usain Bolt, 100 m in 9.58 s and 200 m in 19.19 s, Berlin 2009 (https://worldathletics.org/news/news/bolt-again-958-world-record-in-berlin-updat).
     The $20 and $50 bills and the vans are made up. */
  dek: "Divide, find the place you are rounding to, and ask what the answer is FOR. A bill rounds up; a batting average rounds to the nearest.",
  blurb: "Homework for the Rounding Quotients lesson. Divide and round to every place, traps where money must round up, real batting averages and Olympic speeds, a critical thinking puzzle, and an answer key.",
  contains: [
    "Ten divisions rounded to a place, nearest or down",
    "Traps: rounding twice, rounding up for a bill, and rounding up for vans",
    "Real batting averages, hits divided by at bats",
    "Real speeds for Bolt's world records, distance divided by time",
    "When rounding and cutting off give the same answer, and a problem you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L8",
  signoff: "Divide one place past where you are rounding, then round. When the answer must COVER something, like a bill, round up.",
  parts: [
    { kind: "solve", heading: "Divide and Round",
      note: "Divide, then round to the place asked.",
      key: "the rounded quotients.",
      items: [
        q("7 ÷ 3, to the nearest tenth", "2.3", "r(7/3,1)"),
        q("5 ÷ 6, to the nearest hundredth", "0.83", "r(5/6,2)"),
        q("19 ÷ 7, to the nearest tenth", "2.7", "r(19/7,1)"),
        q("8.3 ÷ 9, to the nearest hundredth", "0.92", "r(8.3/9,2)"),
        q("45 ÷ 11, to the nearest tenth", "4.1", "r(45/11,1)"),
        q("2.7 ÷ 0.7, to the nearest hundredth", "3.86", "r(2.7/0.7,2)"),
        q("52.8 ÷ 6, to its greatest place value", "9", "r(52.8/6,0)"),
        q("4 ÷ 9, rounded DOWN to the hundredth", "0.44", "down(4/9,2)"),
        q("31 ÷ 4.5, to the nearest tenth", "6.9", "r(31/4.5,1)"),
        q("1 ÷ 12, to the nearest thousandth", "0.083", "r(1/12,3)"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Ask what the answer is for before you round.",
      key: "the answer.",
      items: [
        q("5 ÷ 9. Round it to the nearest hundredth. Then cut it off at the hundredths without rounding. Are the two answers the same?", "0.56 rounded, but 0.55 cut off. They are different, because the digit next door is 5.", "r(5/9,2)"),
        q("Six friends share a $20 snack bill equally, and each must pay enough to cover it. What does each pay?", "$3.34. The nearest cent is $3.33, but six of those make $19.98, short by 2 cents, so the bill rounds UP.", "up(20/6,2)"),
        q("50 students need rides, and each van seats 8. 50 ÷ 8 = 6.25. How many vans?", "7 vans. 6 vans seat only 48, so you round UP.", "up(50/8,0)"),
        q("A student rounds 2 ÷ 3 to 0.6 for the tenths place. What went wrong?", "0.7. 2 ÷ 3 = 0.666..., and the 6 next door is 5 or more, so it rounds up. Cutting it off at 0.6 is not rounding.", "r(2/3,1)"),
        q("Which skill? Round 8.3333 to the nearest hundredth. Then split a $50 bill among 6 friends, each paying enough to cover it. Do both answers match? Why or why not? (Rounding a decimal is U2-L2. Rounding a quotient is U2-L8.)",
          "8.33 for the plain decimal. But the bill is 50 ÷ 6 = 8.3333..., and 6 × 8.33 = 49.98 is short, so each friend pays $8.34. The bill rounds up.", "r(8.3333,2)"),
      ] },
    { kind: "solve", heading: "Averages and Speeds",
      note: "Real numbers. A batting average is hits divided by at bats. A speed is distance divided by time.",
      key: "the answers.",
      items: [
        { problem: "Two of the best batting seasons in baseball. Round each average to the nearest thousandth.",
          table: [["Player, year", "Hits", "At bats"], ["Ted Williams, 1941", "185", "456"], ["Tony Gwynn, 1994", "165", "419"]],
          sub: [
            { q: "Williams: hits ÷ at bats", answer: "0.406", calc: "r(185/456,3)" },
            { q: "Gwynn: hits ÷ at bats", answer: "0.394", calc: "r(165/419,3)" },
            { q: "How much higher was Williams's average than Gwynn's, using the rounded numbers?", answer: "0.012", calc: "0.406-0.394" },
          ] },
        { problem: "Usain Bolt's world records, set in Berlin in 2009: 100 meters in 9.58 seconds and 200 meters in 19.19 seconds. Speed is meters divided by seconds.",
          sub: [
            { q: "His speed in the 100 meters, to the nearest hundredth of a meter per second.", answer: "10.44 meters per second", calc: "r(100/9.58,2)" },
            { q: "His speed in the 200 meters, to the nearest hundredth.", answer: "10.42 meters per second", calc: "r(200/19.19,2)" },
            { q: "To the nearest tenth, are the two speeds different? Which race was a little faster?", answer: "10.4 and 10.4, the same to the nearest tenth. But hundredths show the 100 meters was a little faster.", calc: "r(100/9.58,1)" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("Write a division of two whole numbers whose quotient, rounded to the nearest tenth, is the SAME as the quotient cut off at the tenths. Then write one where they are different.",
          "Answers vary. 1 ÷ 3 = 0.333..., and both give 0.3. But 7 ÷ 9 = 0.777..., which rounds to 0.8 and cuts off to 0.7. They match when the digit next door is 0 to 4."),
        q("Name one situation where a quotient must be rounded UP, and one where you round to the NEAREST. Write a division for each.",
          "Answers vary. Up: vans, boxes, or a bill that must be covered, such as 45 ÷ 4 vans. Nearest: an average or a measurement, such as a batting average of 185 ÷ 456."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then work it.",
      key: "what a good problem looks like.",
      items: [
        q("Write a money problem where dividing gives a decimal that does not end, and the share must be rounded UP to the cent. Solve it and show why rounding down would be wrong.",
          "Answers vary. A good one checks that the rounded shares cover the bill, such as $10 shared by 3: each pays $3.34, because 3 × $3.33 = $9.99 is a cent short."),
      ] },
  ],
}),

sheet({
  slug: "the-metric-system-homework", lesson: "maths/the-metric-system",
  includedWith: "maths/the-metric-system",
  title: "The Metric System: Homework",
  /* REAL DATA, checked 2026-10-05. Golf ball: diameter at least 42.67 mm, mass at most 45.93 g
     (Rules of Golf; https://golfdecode.com/golf-ball-specifications/). Soccer ball (size 5):
     circumference 68 to 70 cm, mass 410 to 450 g (Law 2 of the Laws of the Game;
     https://en.wikipedia.org/wiki/Ball_(association_football)). Marathon 42.195 km
     (https://artsandculture.google.com/story/exactly-42-195-kilometres-the-olympic-museum/UQUxmUDpLTLLUA).
     An Olympic pool is 50 m long (World Aquatics standard, https://www.olympics.com). */
  dek: "Each step on the metric ladder is a power of ten. Going to a smaller unit multiplies, and going to a bigger one divides.",
  blurb: "Homework for the Metric System lesson. Ten conversions, traps about which way to go, real golf and soccer ball specifications, a marathon against an Olympic pool, a puzzle that orders mixed units, and an answer key.",
  contains: [
    "Ten conversions in length, mass and capacity",
    "Traps: which direction, and 'kilo' means a thousand",
    "Real golf ball and soccer ball specifications",
    "A marathon measured in Olympic pools",
    "Ordering lengths in different units, and a problem you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L9",
  signoff: "Going to a smaller unit makes the number bigger, so multiply. Going to a bigger unit makes the number smaller, so divide.",
  parts: [
    { kind: "solve", heading: "Convert",
      note: "Write the answer with its unit.",
      key: "the conversions.",
      items: [
        q("6 km = ___ m", "6,000 m", "6*1000"),
        q("450 cm = ___ m", "4.5 m", "450/100"),
        q("3.2 L = ___ mL", "3,200 mL", "3.2*1000"),
        q("85 mm = ___ cm", "8.5 cm", "85/10"),
        q("0.75 kg = ___ g", "750 g", "0.75*1000"),
        q("2,400 g = ___ kg", "2.4 kg", "2400/1000"),
        q("0.6 m = ___ cm", "60 cm", "0.6*100"),
        q("9,000 mL = ___ L", "9 L", "9000/1000"),
        q("12.5 cm = ___ mm", "125 mm", "12.5*10"),
        q("0.045 km = ___ m", "45 m", "0.045*1000"),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Ask whether the unit you are going to is bigger or smaller.",
      key: "the answer.",
      items: [
        q("Is 3 L the same as 30 mL or 3,000 mL?", "3,000 mL. A liter is a thousand milliliters, not ten.", "3*1000"),
        q("Which is longer, 0.5 m or 45 cm? Change both to centimeters.", "50 cm. 0.5 m is longer than 45 cm.", "0.5*100"),
        q("A student divides 4 km by 1,000 and says 4 km is 0.004 m. What should it be?", "4,000 m. Going from km to m is going to a SMALLER unit, so multiply.", "4*1000"),
        q("Which is greater, 2,500 mg or 2 g? (1 g = 1,000 mg)", "2,500 mg is greater. 2 g is only 2,000 mg."),
        q("How many centimeters are in one kilometer? (Kilo means a thousand, and a meter has 100 centimeters.)", "100,000 cm", "1000*100"),
      ] },
    { kind: "solve", heading: "Balls and Distances",
      note: "Real numbers. The golf ball and soccer ball come from the official rules. Change each unit the way the question asks.",
      key: "the answers.",
      items: [
        { problem: "Official sizes:",
          table: [["Ball", "Size", "Mass"], ["Golf ball", "diameter at least 42.67 mm", "at most 45.93 g"], ["Soccer ball, size 5", "circumference 68 to 70 cm", "410 to 450 g"]],
          sub: [
            { q: "Give the golf ball's smallest legal diameter in centimeters.", answer: "4.267 cm", calc: "42.67/10" },
            { q: "Give the golf ball's smallest legal diameter in meters.", answer: "0.04267 m", calc: "42.67/1000" },
            { q: "Give the soccer ball's greatest mass in kilograms.", answer: "0.45 kg", calc: "450/1000" },
            { q: "How many grams heavier is the soccer ball's greatest mass than the golf ball's greatest mass?", answer: "404.07 grams", calc: "450-45.93" },
          ] },
        { problem: "Three real lengths: a marathon is 42.195 km, an Olympic pool is 50 m long, and a golf ball is 42.67 mm across.",
          sub: [
            { q: "Give the marathon in meters.", answer: "42,195 m", calc: "42.195*1000" },
            { q: "Put the three lengths in order from shortest to longest.", answer: "42.67 mm, then 50 m, then 42.195 km. In meters: 0.04267 < 50 < 42,195." },
            { q: "How many Olympic pools laid end to end are as long as a marathon?", answer: "843.9 pools, so about 844", calc: "42195/50" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("Put these lengths in order from least to greatest: 0.8 km, 76,000 cm, 815 m and 79,500 mm. Change them all to meters first.",
          "79,500 mm (79.5 m) < 76,000 cm (760 m) < 0.8 km (800 m) < 815 m. Converting to one unit makes them comparable."),
        q("A bottle holds 1.5 L. How many 250 mL cups can you fill from it? Work in the same unit.", "6 cups. 1.5 L = 1,500 mL, and 1,500 ÷ 250 = 6.", "1.5*1000/250"),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then work it.",
      key: "what a good problem looks like.",
      items: [
        q("Write a problem about something you could measure that needs TWO different metric units, and solve it. Say which way you converted.",
          "Answers vary. A good one picks a unit for the job and converts one measurement to match, such as a 1.2 m ribbon cut into 15 cm pieces: 1.2 m = 120 cm, and 120 ÷ 15 = 8 pieces."),
      ] },
  ],
}),

sheet({
  slug: "reasonable-answers-with-decimals-homework", lesson: "maths/reasonable-answers-with-decimals",
  includedWith: "maths/reasonable-answers-with-decimals",
  title: "Reasonable Answers with Decimals: Homework",
  /* REAL DATA, checked 2026-10-05. Kipchoge, Berlin 2022, 2:01:09, and Kiptum, Chicago 2023, 2:00:35,
     were the men's marathon world records when they were set (the sheet never says they still are;
     a later record was seen in a search but NOT verified, so it is not used);
     https://worldathletics.org/news/report/eliud-kipchoge-world-record-berlin-marathon-2022 and
     https://worldathletics.org/competitions/world-athletics-label-road-races/news/chicago-marathon-2023-kiptum-world-record-hassan .
     The marathon is 42.195 km (https://artsandculture.google.com/story/exactly-42-195-kilometres-the-olympic-museum/UQUxmUDpLTLLUA).
     Every price, weight and bill in Part A is made up for practice. */
  dek: "Estimate first, solve second, and then ask whether the answer makes sense. A claim that is ten times too big is not a rounding error.",
  blurb: "Homework for the Reasonable Answers with Decimals lesson. Multi-step problems where you estimate, solve and check, real marathon world record times, two thinking puzzles, and an answer key.",
  contains: [
    "Nine multi-step problems: estimate, solve, then check",
    "A claimed answer with the decimal point in the wrong place",
    "Real marathon world record times, turned into seconds and speed",
    "Two puzzles about when an answer should worry you",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L10",
  signoff: "If the estimate and the claim are farther apart than rounding could explain, the claim is not reasonable.",
  parts: [
    { kind: "solve", heading: "Estimate, Solve, Check", lines: 1,
      note: "Every price, weight and bill here is made up for practice. Estimate first and write it down, then find the exact answer, then say whether the two agree.",
      key: "the exact answer and what the estimate said.",
      items: [
        q("You have $60. You want 3 shirts at $14.95 each and 2 hats at $9.50 each. Estimate to see whether $60 is enough, then find the exact total.", "$63.85. It is not enough. The estimate 3 × 15 + 2 × 10 = 65 already said so.", "3*14.95+2*9.5"),
        q("A truck can carry 25 kg. 12 bags of rice weigh 1.9 kg each. Estimate, then find the exact weight. Does it fit?", "22.8 kg, so yes, it fits. The estimate was 12 × 2 = 24.", "12*1.9"),
        q("A car holds 12.5 gallons and goes 28.4 miles on each gallon. A friend says it can go 355 miles on a full tank. Estimate to check, then find the exact distance.", "355 miles. The estimate 12 × 30 = 360 agrees, so the claim is reasonable.", "12.5*28.4"),
        q("A phone case costs $8.25. How many can a store buy with $100? Estimate, then find the number it can really buy.", "12 cases. 100 ÷ 8.25 is about 12.1, and 12 cases cost $99.00. A 13th would not be paid for.", "down(100/8.25,0)"),
        q("Four friends share a $73.60 bill equally. Estimate each share, then find it.", "$18.40. The estimate was 72 ÷ 4 = 18.", "73.6/4"),
        q("Your calculator says 6.8 × 4.2 = 285.6. Estimate to decide whether that is reasonable. If not, find the real product.", "28.56. The estimate 7 × 4 = 28 shows 285.6 has the decimal point in the wrong place.", "6.8*4.2"),
        q("Which skill? Skill A (U2-L3, estimating) finds a quick answer when you do not have one. Skill B (this lesson, reasonable answers) checks an answer somebody already gave you. A calculator says 5.9 × 3.1 = 182.9. Which skill are you using, and is the answer reasonable? What should it be?",
          "18.29 is the real answer. This is Skill B. 6 × 3 = 18, so 182.9 is not reasonable; its decimal point is in the wrong place.", "5.9*3.1"),
        q("You buy 7 adult tickets at $12.75 and 5 child tickets at $8.25, and you have $150. Estimate whether that is enough, then find the exact total.", "$130.50. Yes, $150 is enough. The estimate was 7 × 13 + 5 × 8 = 131.", "7*12.75+5*8.25"),
        q("A recipe uses 0.75 cup of sugar for 12 cookies. How much sugar for 36 cookies? Estimate first.", "2.25 cups. 36 is 3 times 12, and 3 × about 1 cup is about 3.", "0.75*3"),
      ] },
    { kind: "solve", heading: "Two Marathon Records",
      note: "Real times. A marathon is 42.195 km, which is 42,195 meters. Times are hours:minutes:seconds. Both were world records when they were set.",
      key: "the answers.",
      items: [
        { problem: "The men's marathon world record, twice:",
          table: [["Runner", "Race", "Time"], ["Eliud Kipchoge", "Berlin, 2022", "2:01:09"], ["Kelvin Kiptum", "Chicago, 2023", "2:00:35"]],
          sub: [
            { q: "Change Kipchoge's time into seconds.", answer: "7,269 seconds", calc: "2*3600+1*60+9" },
            { q: "Change Kiptum's time into seconds.", answer: "7,235 seconds", calc: "2*3600+0*60+35" },
            { q: "How many seconds faster was Kiptum?", answer: "34 seconds", calc: "7269-7235" },
            { q: "Estimate Kiptum's average speed in meters per second with 42,000 ÷ 7,000. Then find it to the nearest tenth.", answer: "5.8 meters per second. The estimate was 6.", calc: "r(42195/7235,1)" },
            { q: "A student says Kiptum averaged 58 meters per second. Use your estimate to say whether that is reasonable.", answer: "No. The estimate is about 6, so 58 is ten times too big. The decimal point is in the wrong place." },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("You estimate a shopping trip at about $40. One day the register says $38.46. Another day it says $84.60. Which would you question, and how close does an answer need to be to its estimate before you trust it?",
          "The $84.60. It is about double the estimate, and rounding cannot cause that. $38.46 is close to $40, which is what rounding to easy numbers would give."),
        q("A friend says a 3.9 meter board cut into 0.6 meter shelves makes 65 shelves. Use one quick estimate to show it cannot be right, then give the real number of whole shelves.",
          "About 4 ÷ 0.5 = 8, so 65 is ten times too big. The real answer is 6 whole shelves (3.9 ÷ 0.6 = 6.5, and you cannot make half a shelf)."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then trade with someone or solve it yourself.",
      key: "what a good problem looks like.",
      items: [
        q("Write a shopping problem that has a claimed total, where a quick estimate shows the claim cannot be right. Give your estimate and the real total.",
          "Answers vary. A good one has a claim that is far off, and an estimate that shows it quickly, such as: three items at $9.95, $4.10 and $6.05 with a claimed total of $40.10. The estimate 10 + 4 + 6 = 20 shows it is too high. The real total is $20.10."),
      ] },
  ],
}),

sheet({
  slug: "unit-2-review-homework", lesson: "maths/unit-2-review",
  includedWith: "maths/unit-2-review",
  title: "Unit 2 Review: Homework",
  /* REAL DATA, checked 2026-10-05. Surface gravity in meters per second squared: Moon 1.622
     (shown 1.62), Mars 3.72076 (shown 3.72), Earth 9.81, Jupiter 24.79 :
     https://en.wikipedia.org/wiki/Moon , https://en.wikipedia.org/wiki/Mars , https://en.wikipedia.org/wiki/Jupiter ,
     and https://phys.org/news/2016-01-strong-gravity-planets.html . The 4.5 kg rock is made up.
     Every other number is made up for practice. */
  dek: "Two problems from every lesson in the unit, and one table that uses several of them at once.",
  blurb: "Homework for the Unit 2 Review. Two problems from each of the ten lessons, each tagged so you know which lesson to reopen, real gravity numbers for four worlds, a puzzle, and an answer key.",
  contains: [
    "Two problems from each lesson, U2-L1 to U2-L10, tagged",
    "Real gravity numbers for the Moon, Mars, Earth and Jupiter",
    "A puzzle that mixes comparing, powers of ten and scientific notation",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U2-L11",
  signoff: "Each problem is tagged with its lesson. A miss tells you which lesson to reopen.",
  parts: [
    { kind: "solve", heading: "Lessons 1 to 5",
      note: "Each problem says which lesson it came from. Write the answer.",
      key: "the answers.",
      items: [
        q("(U2-L1) 0.45 ___ 0.405", ">"),
        q("(U2-L1) Least to greatest: 5.2, 5.02, 5.22, 5.202", "5.02 < 5.2 < 5.202 < 5.22"),
        q("(U2-L2) 63.847 to the nearest hundredth", "63.85", "r(63.847,2)"),
        q("(U2-L2) 9.96 to the nearest tenth", "10.0", "r(9.96,1)"),
        q("(U2-L3) Estimate 7.9 × 5.2", "about 40", "8*5"),
        q("(U2-L3) Estimate 48.3 + 21.8 + 29.6", "about 100", "50+20+30"),
        q("(U2-L4) 0.6 × 0.35", "0.21", "0.6*0.35"),
        q("(U2-L4) 4.8 × 2.5", "12", "4.8*2.5"),
        q("(U2-L5) 3.07 × 1,000", "3,070", "3.07*1000"),
        q("(U2-L5) 8.5 ÷ 100", "0.085", "8.5/100"),
      ] },
    { kind: "solve", heading: "Lessons 6 to 10",
      note: "Same as before. Work the ones you know first.",
      key: "the answers.",
      items: [
        q("(U2-L6) Write 540,000 in scientific notation", "5.4 × 10^5", "540000/100000"),
        q("(U2-L6) Write 2.9 × 10^4 in standard form", "29,000", "2.9*10000"),
        q("(U2-L7) 1.44 ÷ 0.6", "2.4", "1.44/0.6"),
        q("(U2-L7) 7.2 ÷ 0.08", "90", "7.2/0.08"),
        q("(U2-L8) 11 ÷ 6, to the nearest tenth", "1.8", "r(11/6,1)"),
        q("(U2-L8) Seven friends share a $30 bill and each must pay enough to cover it. How much does each pay?", "$4.29", "up(30/7,2)"),
        q("(U2-L9) 7.5 km = ___ m", "7,500 m", "7.5*1000"),
        q("(U2-L9) 640 mL = ___ L", "0.64 L", "640/1000"),
        q("(U2-L10) A calculator says 9.8 × 6.1 = 597.8. Is it reasonable? What should it be?", "59.78. It is not reasonable: 10 × 6 = 60, so the decimal point is in the wrong place.", "9.8*6.1"),
        q("(U2-L10) You have $50 and want items that cost $11.95, $18.40 and $24.99. Round each price to the nearest dollar to see whether $50 is enough.", "about 55 (12 + 18 + 25), so $50 is not enough. The exact total is $55.34.", "12+18+25"),
      ] },
    { kind: "solve", heading: "Gravity Around the Solar System",
      note: "Real numbers: how fast something speeds up when it falls, in meters per second each second. Each question says which lesson it uses.",
      key: "the answers.",
      items: [
        { problem: "Surface gravity:",
          table: [["World", "Gravity"], ["Earth", "9.81"], ["Jupiter", "24.79"], ["The Moon", "1.62"], ["Mars", "3.72"]],
          sub: [
            { q: "(U2-L1) Put the four worlds in order from least to greatest gravity.", answer: "1.62 < 3.72 < 9.81 < 24.79 (Moon, Mars, Earth, Jupiter)" },
            { q: "(U2-L2) Round Jupiter's gravity to the nearest whole number.", answer: "25", calc: "r(24.79,0)" },
            { q: "(U2-L3) Estimate how many times as strong Jupiter's gravity is as Earth's. Round each to a whole number you can divide.", answer: "about 2.5 times", calc: "25/10" },
            { q: "(U2-L4) A rock with a mass of 4.5 kg is pulled with a force of mass × gravity, in newtons. How hard is it pulled on Mars?", answer: "16.74 newtons", calc: "4.5*3.72" },
            { q: "(U2-L8) How many times as strong is Earth's gravity as the Moon's? Round to the nearest tenth.", answer: "6.1 times", calc: "r(9.81/1.62,1)" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("Put these in order from least to greatest without a calculator: 3.5 × 10^3, 3,480 and 0.35 × 10^4. Which two are equal, and how do you know?",
          "3,480 < 3.5 × 10^3 = 0.35 × 10^4. 3.5 × 10^3 is 3,500. 0.35 × 10^4 moves the point four places and is also 3,500. 3,480 is smaller. (U2-L1, U2-L5, U2-L6)"),
      ] },
  ],
}),

sheet({
  slug: "use-a-graph-homework", lesson: "maths/use-a-graph",
  includedWith: "maths/use-a-graph",
  title: "Use a Graph: Homework",
  /* REAL DATA, checked 2026-10-05. U.S. census resident population (census.gov, decennial counts;
     https://www.census.gov/about/history/historical-censuses-and-surveys/decade-facts.2020.html ),
     shown in millions to one decimal: 1950 151,325,798; 1980 226,542,199; 2000 281,421,906;
     2020 331,449,281. Everything in Part A is made up for practice. */
  dek: "Sketch the graph first, then read it: the scale, what each bar or point means, and what happens next.",
  blurb: "Homework for the Use a Graph lesson. Multi-step problems that start from a bar, line, double bar or circle graph, real U.S. census counts, a puzzle about misleading graphs, and an answer key.",
  contains: [
    "Eight problems that start from a graph you sketch yourself",
    "Real U.S. census populations from 1950 to 2020, read like a graph",
    "A puzzle about a scale that starts at the wrong place",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U3-L1",
  signoff: "Read the title, the labels and the scale before you read a single bar. Then work out what the question really asks.",
  parts: [
    { kind: "solve", heading: "Sketch It, Then Read It", lines: 1,
      note: "Each graph is described in words, and the numbers are made up. Sketch the graph on scrap paper first, then answer.",
      key: "the answer.",
      items: [
        q("A bar graph shows cups of lemonade sold: Monday 14, Tuesday 9, Wednesday 16, Thursday 11. Each cup costs $0.75. How much money came in on the two best days?", "$22.50. The best days are Wednesday and Monday: (16 + 14) × 0.75.", "(16+14)*0.75"),
        q("A line graph shows the temperature: 6 am 48 degrees, 9 am 55, noon 67, 3 pm 74. Between which two readings did the temperature rise the most, and by how much?", "12 degrees, from 9 am to noon. The other jumps were 7 and 7.", "67-55"),
        q("A line graph shows a plant: 2 cm at week 1, 5 cm at week 2, 8 cm at week 3. Keeping the line going the same way, how tall will it be at week 6?", "17 cm. It grows 3 cm each week, and week 6 is five weeks after week 1.", "2+3*5"),
        q("A double bar graph shows pizza sales for two classes. Class A: September 40, October 52. Class B: September 35, October 61. How many more did Class B grow than Class A?", "14 more. Class B grew 26 and Class A grew 12.", "(61-35)-(52-40)"),
        q("A circle graph shows how you spend a $60 allowance. Half goes to savings, a quarter goes to games, and the rest goes to snacks. How much goes to snacks?", "$15", "60-30-15"),
        q("A bar graph's scale counts by 5s starting at 0. One bar ends exactly halfway between the 15 line and the 20 line. How tall is the bar?", "17.5", "(15+20)/2"),
        q("A line graph shows weekly sales. Store A: week 1 is 20, week 2 is 35, week 3 is 50. Store B: 60, 55, 50. Keep both lines going the same way. In week 4, how many more does Store A sell than Store B?", "20 more. Store A is 65 and Store B is 45.", "(50+15)-(50-5)"),
        q("Which skill? For each, say whether you would read a graph (U3-L1) or make a table (U3-L2). (a) You are handed a finished bar graph and asked which month sold the most. (b) You are handed a loose list of the favorite colors of 20 students and asked how many chose blue.",
          "(a) Read a graph. Find the tallest bar, check its label and the scale. (b) Make a table. Tally each color into a row, then count the blue tally."),
      ] },
    { kind: "solve", heading: "The People of the United States",
      note: "Real numbers from the U.S. Census, in millions of people. Imagine them as a bar graph, one bar for each year.",
      key: "the answers.",
      items: [
        { problem: "The census counts every person in the country every ten years:",
          table: [["Year", "People (millions)"], ["1950", "151.3"], ["1980", "226.5"], ["2000", "281.4"], ["2020", "331.4"]],
          sub: [
            { q: "You will draw a bar graph of these. Which scale is better: 0 to 350 counting by 50s, or 0 to 100 counting by 10s? Why?", answer: "0 to 350 by 50s. The scale has to reach the greatest number, 331.4, and 100 is too small." },
            { q: "How many millions of people were added from 1950 to 2020?", answer: "180.1 million", calc: "331.4-151.3" },
            { q: "Which stretch added the most people: 1950 to 1980, 1980 to 2000, or 2000 to 2020? Is it a fair comparison?", answer: "75.2 million, from 1950 to 1980. But it covers 30 years and the other two cover 20, so it is not quite fair.", calc: "226.5-151.3" },
            { q: "From 2000 to 2020 the country added about 50 million people. If it adds the same amount again in the next 20 years, what would a graph predict for 2040?", answer: "381.4 million", calc: "331.4+50" },
            { q: "Round the 1950 to 2020 growth to the nearest ten million.", answer: "180 million", calc: "r(180.1,-1)" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("A bar graph's scale starts at 100 instead of 0. One bar is 105 tall and another is 110. The second bar looks more than twice as tall. Why is the graph misleading, and what would an honest graph look like?",
          "The bars are cut off at 100, so you are only seeing the part above 100: a 5 and a 10. The real numbers are only a little different. An honest graph starts its scale at 0, and then 110 looks only a little taller than 105."),
        q("A line graph goes up by 10 each week for three weeks. A friend says it will keep going up by 10, so in week 100 the value will be 1,000. When is it not safe to extend a graph like this? Give an example.",
          "Answers vary. A trend can stop or turn. A plant stops growing when it is full height, and sales level off. Extending the line is a guess that works for a short stretch, not for a long one."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then solve it yourself.",
      key: "what a good problem looks like.",
      items: [
        q("Make up a bar graph problem with four bars. Describe the bars, then ask a question that takes two steps to answer. Give the answer.",
          "Answers vary. A good one needs two steps, such as bars of 6, 9, 4 and 12 books, asking how many more the top bar is than the average of the other three: 12 - (6 + 9 + 4) ÷ 3 = 12 - 6.33... = 5.67."),
      ] },
  ],
}),

sheet({
  slug: "make-a-table-homework", lesson: "maths/make-a-table",
  includedWith: "maths/make-a-table",
  title: "Make a Table: Homework",
  /* REAL DATA, checked 2026-10-05. Sound travels about 343 meters per second in air at 20 degrees
     Celsius (https://en.wikipedia.org/wiki/Thunder and https://phys.libretexts.org/Courses/Coalinga_College/Physical_Science_for_Educators_Volume_2/07:_Property_of_Sound_Doppler_Effect_and_Interferences/7.04:_Speed_of_Sound),
     so the rule "count the seconds and divide by 3 for kilometers" works. Everything in Part A is made up for practice. */
  dek: "When a problem gets too tangled to do in your head, make a table. Each row is one step, and the pattern shows up on its own.",
  blurb: "Homework for the Make a Table lesson. Eight problems that are solved by building a table, real thunder and lightning math with the speed of sound, two puzzles about patterns, and an answer key.",
  contains: [
    "Eight problems that are easiest with a table: saving, handshakes, a snail, coins and doubling",
    "Real thunder and lightning: how far away is the storm?",
    "Finding the rule from a table",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U3-L2",
  signoff: "Label the columns, fill in the first few rows, and look for what changes from row to row. That change is the rule.",
  parts: [
    { kind: "solve", heading: "Build a Table", lines: 1,
      note: "Every problem here is made up for practice. Draw a table on scrap paper for each one, label the columns, and fill it in row by row.",
      key: "the answer.",
      items: [
        q("You save $3 in week 1, and each week you save $2 more than the week before. How much have you saved in all after 5 weeks?", "$35. The weeks are 3, 5, 7, 9 and 11.", "3+5+7+9+11"),
        q("Five people each shake hands once with every other person. How many handshakes?", "10. The first person has 4 handshakes, the next has 3 new ones, then 2, then 1.", "4+3+2+1"),
        q("A snail at the bottom of a 10 foot well climbs 3 feet each day and slips back 1 foot each night. On which day does it get out?", "Day 5. After each night it is at 2, 4, 6 and 8, so on day 5 it climbs from 8 to 11 and is out before it can slip."),
        q("How many ways can you make exactly 30 cents using only nickels and dimes?", "4 ways: 6 nickels; 1 dime and 4 nickels; 2 dimes and 2 nickels; 3 dimes."),
        q("One bacterium splits into two every 20 minutes, and every new one splits too. How many are there after 2 hours?", "64. The counts are 2, 4, 8, 16, 32 and 64, six splits in two hours.", "2*2*2*2*2*2"),
        q("A bike rental costs $5 plus $2.50 for every hour. Make a table for 1 to 6 hours. What does 6 hours cost?", "$20", "5+2.5*6"),
        q("A theater's first row has 8 seats, and each row after it has 2 more. How many seats are in the first 6 rows?", "78. The rows have 8, 10, 12, 14, 16 and 18 seats.", "8+10+12+14+16+18"),
        q("Which skill? You are told a pizza shop's sales for each month in a finished graph, and asked which month was best. Then you are given a pile of 25 test scores in the order they were handed in and asked how many were above 80. For each, say whether you read a graph (U3-L1) or make a table (U3-L2), and why.",
          "The first is reading a graph (U3-L1), because the data is already drawn and you find the tallest bar. The second is making a table (U3-L2), because the data is a loose list. Sort the scores into groups and count."),
      ] },
    { kind: "solve", heading: "How Far Away Is the Storm?",
      note: "Real science. Sound travels about 343 meters each second in air. Light arrives almost instantly, so the seconds between the flash and the thunder tell you the distance.",
      key: "the answers.",
      items: [
        { problem: "Make a table with the seconds 1, 2, 3, 4, 5 in one column and how far sound has traveled in meters in the other. Then use it:",
          sub: [
            { q: "How far does sound travel in 5 seconds?", answer: "1,715 meters", calc: "343*5" },
            { q: "About how many seconds does sound take to travel one kilometer (1,000 meters)? Extend your table to see.", answer: "3 seconds. In 3 seconds it travels 1,029 meters.", calc: "1029/343" },
            { q: "You see lightning and hear thunder 9 seconds later. How far away is the strike?", answer: "3,087 meters", calc: "343*9" },
            { q: "You hear thunder 6 seconds after the flash. Is the storm closer than 2 kilometers?", answer: "2,058 meters, which is just over 2 kilometers, so no, it is not closer than 2 km.", calc: "343*6" },
            { q: "People use a rule: divide the seconds by 3 to get the kilometers. Use the rule for a 12 second gap, then check it against the table rule.", answer: "about 4 km. The exact distance is 343 × 12 = 4,116 meters.", calc: "12/3" },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("A table shows step 1 gives 4, step 2 gives 7, step 3 gives 10, step 4 gives 13. Find the rule, then find the value at step 8.", "25. The values go up by 3 each step, so the rule is 3 × step + 1, and 3 × 8 + 1 = 25.", "3*8+1"),
        q("In the snail problem, you stop making the table at day 5. Why is that the right place to stop, and what would go wrong if you kept going?", "The snail is out on day 5, so the question is answered. Rows after that would describe a snail that is no longer in the well, and the numbers would mean nothing."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then solve it yourself.",
      key: "what a good problem looks like.",
      items: [
        q("Write a problem that is easiest to solve by making a table. Then give the first four rows of your table and the answer.",
          "Answers vary. A good one grows by a pattern, such as a plant that doubles its leaves every week, with rows 1 leaf, 2, 4, 8, and a question about week 6, which is 32."),
      ] },
  ],
}),

sheet({
  slug: "range-and-scales-homework", lesson: "maths/range-and-scales",
  includedWith: "maths/range-and-scales",
  title: "Range and Scales: Homework",
  /* REAL DATA, checked 2026-10-05. Five highest mountains in meters: Everest 8,848.86, K2 8,611,
     Kangchenjunga 8,586, Lhotse 8,516, Makalu 8,485 (https://www.nepalhikingteam.com/highest-5-mountains
     and Wikipedia's Himalayas page, matched). U.S. coin widths in millimeters: penny 19.05, nickel 21.21,
     dime 17.91, quarter 24.26 (https://en.wikipedia.org/wiki/United_States_Mint_coin_sizes). Everything else is made up. */
  dek: "The range tells you how spread out the data is. The scale has to cover it, with equal steps all the way across.",
  blurb: "Homework for the Range and Scales lesson. Number lines to plot on, ranges, scales and intervals, the real heights of the five highest mountains, real coin sizes, a critical thinking puzzle, and an answer key.",
  contains: [
    "Two number lines to plot on, and nine problems on range and scale",
    "Traps: a scale that is too small, a step that is not equal",
    "The real heights of Everest and the next four mountains",
    "The real widths of four U.S. coins",
    "More than one right scale, and a data set you write yourself",
    "An answer key, and a blank total to add up and sign by hand",
  ],
  eyebrow: "Math 7 &middot; U3-L3",
  signoff: "Range is the greatest number minus the least. A good scale starts below the least, ends above the greatest, and every step is the same size.",
  parts: [
    { kind: "solve", heading: "Plot, Range and Scale",
      note: "For 1 and 2, put a dot on the number line for each data value, then find the range. For 3 to 11, write the answer.",
      key: "the answers.",
      items: [
        { problem: "Plot the data 22, 47, 31 and 18. Then find the range.", numberline: { from: 10, to: 50, step: 5 }, answer: "29 (47 - 18)", calc: "47-18" },
        { problem: "Plot the data 2.3, 3.8 and 4.6. Then find the range.", numberline: { from: 2, to: 5, step: 0.5 }, answer: "2.3 (4.6 - 2.3)", calc: "4.6-2.3" },
        q("Find the range: 12, 7, 19, 4, 15", "15", "19-4"),
        q("Find the range: 3.6, 8.2, 5.9, 1.4", "6.8", "8.2-1.4"),
        q("Find the range: 45, 45, 45", "0", "45-45"),
        q("Find the range: 102, 88, 95, 120, 77", "43", "120-77"),
        q("Find the range: $4.50, $9.25, $6.75", "$4.75", "9.25-4.5"),
        q("Find the range: 0.52, 0.8, 0.35", "0.45", "0.8-0.35"),
        q("A scale runs from 0 to 60 in 6 equal steps. How big is each step?", "10", "60/6"),
        q("A scale runs from 20 to 50 counting by 5s. How many marks are there, counting both ends?", "7", "(50-20)/5+1"),
        q("A data value is 38. What is the smallest end for a scale that starts at 0 and counts by 5s?", "40. The scale has to reach 38, and the next mark is 40."),
      ] },
    { kind: "solve", heading: "Don't Get Fooled",
      note: "Each of these has a trap. Check that the scale covers the data, and that the steps are equal.",
      key: "the answer.",
      items: [
        q("A scale runs from 10 to 30 for the data 8, 14 and 29. What is wrong?", "8 is below 10, so one data value has nowhere to go. The scale must start lower, at 5 or 0."),
        q("Find the range of 5.5, 0.5 and 9. Be careful with the 0.5.", "8.5", "9-0.5"),
        q("A scale is marked 0, 5, 10, 20, 25. What is wrong with it?", "The step from 10 to 20 is 10, but every other step is 5. The mark between them, 15, is missing, so the steps are not equal."),
        q("Set A is 80, 82, 84. Set B is 10, 50, 90. Which has the greater range, and what is it?", "80 is the range of Set B, and Set A's is only 4. Set B is more spread out.", "90-10"),
        q("The data are 20, 50 and 80. A student says the range is 80 because it is the greatest number. What is the real range?", "60. The range is the greatest minus the least, 80 - 20.", "80-20"),
      ] },
    { kind: "solve", heading: "Mountains and Coins",
      note: "Real numbers. Heights are in meters, and coin widths are in millimeters.",
      key: "the answers.",
      items: [
        { problem: "The five highest mountains in the world:",
          table: [["Mountain", "Height (meters)"], ["Everest", "8,848.86"], ["K2", "8,611"], ["Kangchenjunga", "8,586"], ["Lhotse", "8,516"], ["Makalu", "8,485"]],
          sub: [
            { q: "Find the range of the five heights.", answer: "363.86 meters", calc: "8848.86-8485" },
            { q: "You want a scale for a line graph of these heights. Give a start, an end and a step that fit all five.", answer: "From 8,400 to 8,900 counting by 100 works, because 8,485 and 8,848.86 both fit, and it has 6 marks." },
            { q: "How much taller is Everest than K2?", answer: "237.86 meters", calc: "8848.86-8611" },
          ] },
        { problem: "How wide each U.S. coin is, in millimeters:",
          table: [["Coin", "Width"], ["Penny", "19.05"], ["Nickel", "21.21"], ["Dime", "17.91"], ["Quarter", "24.26"]],
          sub: [
            { q: "Find the range of the four widths.", answer: "6.35 millimeters", calc: "24.26-17.91" },
            { q: "A scale runs from 16 to 26 counting by 2. How many marks does it have, and does it hold all four widths?", answer: "6 marks. Yes, 17.91 and 24.26 both fall between 16 and 26.", calc: "(26-16)/2+1" },
            { q: "Would a scale from 0 to 100 counting by 10 also hold all four? Is it a good choice?", answer: "Yes, it holds them, but it is a poor choice. All four widths crowd between the 10 and 30 marks, so the differences are hard to see." },
          ] },
      ] },
    { kind: "solve", heading: "Critical Thinking", lines: 2,
      note: "Think it through, then write your answer and one sentence about how you knew.",
      key: "one correct answer, and what a good explanation says.",
      items: [
        q("The data are 12, 30, 18 and 25. Maya picks a scale from 0 to 40 counting by 10. Ben picks one from 10 to 35 counting by 5. Do both work? How many ranges does this data have, and what does that show about scales?",
          "18. Both scales hold all the data. The data has only one range, 30 - 12 = 18, but there can be many good scales and intervals, as long as they cover the data in equal steps.", "30-12"),
        q("Two scales both run from 0 to 100. One counts by 25 and one counts by 10. Which would you use for the data 33, 47 and 52, and why?",
          "Counting by 10. The three values are close together, and steps of 25 would put all three between two marks. Steps of 10 show how they differ."),
      ] },
    { kind: "solve", heading: "Make Up a Problem", lines: 2,
      note: "Write your own, then solve it yourself.",
      key: "what a good problem looks like.",
      items: [
        q("Write a data set of five numbers whose range is exactly 20. Then pick a scale and a step that fit it, and say why they work.",
          "Answers vary. A good one checks the range and the scale, such as 14, 22, 9, 29, 17: the range is 29 - 9 = 20, and a scale from 5 to 35 counting by 5 holds every value in equal steps."),
      ] },
  ],
}),

];

module.exports = { MATH_HOMEWORK };
