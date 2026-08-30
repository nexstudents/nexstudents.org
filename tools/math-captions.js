/* ─────────────────────────────────────────────────────────────────────────
   THE MATHS NARRATION, AS DATA.

   🚨 WHY THIS FILE EXISTS. Maths was the one lesson type whose voice could not
   be baked, because its sentences did not exist anywhere to read: solve() and
   captions() lived inside math/template.html and ran in the browser, so the
   narration only came into being once a student had already opened the page.
   Nothing on disk knew what the lesson said.

   The arithmetic is deterministic - the same dividend and divisor always
   produce the same steps and therefore the same words - so there was never a
   reason for it to be runtime-only. Moving it here means:

     - tools/bake-voice.js can read the sentences and generate audio for them,
       so maths gets the same real voice as history and English
     - build-math.js can embed them, so the page no longer has to compute what
       it is about to say
     - both use the SAME functions, so the narration and the audio can never
       describe different steps

   ⚠️ The wording must stay in step with the grid drawing in math/template.html.
   `step` and `phase` on each caption are what paintDemo() uses to decide how
   much of the division to fill in, so they are structure, not decoration.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

/* One entry per step of a long division, worked the way it is written on
   paper: bring a digit down, see how many times the divisor fits, multiply,
   subtract, repeat. */
function solve(dividend, divisor) {
  const d = String(dividend).split("").map(Number);
  let r = 0;
  const steps = [];
  for (let i = 0; i < d.length; i++) {
    const cur = r * 10 + d[i];
    const q = Math.floor(cur / divisor);
    const prod = q * divisor;
    const diff = cur - prod;
    steps.push({ i, cur, q, prod, diff, bring: d[i + 1] });
    r = diff;
  }
  return {
    digits: d, divisor, dividend, steps,
    quotient: steps.map((s) => s.q).join(""),
    remainder: r,
  };
}

/* What gets said, and what gets read on screen. Kept deliberately plain: this
   is narration a student follows while watching the grid fill in, so every
   sentence names the number it is talking about rather than saying "it". */
function captions(S) {
  const out = [
    { text: "Press the play button and this page will read each step to you." },
    { text: "The numbers fill into the division bracket as they are spoken, so you can watch the working appear." },
    { text: "The bar under the buttons is every step. Tap it to jump to a step, or drag along it to move through the working." },
    { text: "The two arrows either side of play step back and forward one step, so you can watch a step as many times as you need." },
    { text: "Underneath there are problems to solve yourself, and you type every row: the answer on top, the multiply, and the subtract." },
    {
    text: "We are dividing " + S.dividend + " by " + S.divisor + ". The " + S.divisor +
          " sits outside the bracket, and " + S.dividend + " goes underneath it.",
  }];
  S.steps.forEach((st, k) => {
    out.push({ step: k, phase: "divide",
      text: "Step " + (k + 1) + ". Divide. How many " + S.divisor + "s fit into " + st.cur +
            "? " + st.q + ". Write the " + st.q + " on top." });
    out.push({ step: k, phase: "multiply",
      text: "Multiply. " + st.q + " times " + S.divisor + " is " + st.prod +
            ". Write " + st.prod + " underneath." });
    out.push({ step: k, phase: "subtract",
      text: "Subtract. " + st.cur + " minus " + st.prod + " is " + st.diff + "." });
    if (st.bring !== undefined) out.push({ step: k, phase: "bring",
      text: "Bring down the next digit, " + st.bring + ", to make " + (st.diff * 10 + st.bring) + "." });
  });
  out.push({
    text: "The digits on top read " + S.quotient + ". So " + S.dividend + " divided by " +
          S.divisor + " is " + S.quotient + ".",
  });
  return out;
}

/* The sentences alone, in the order the player will speak them. */
function sentencesFor(demo) {
  return captions(solve(demo.dividend, demo.divisor)).map((c) => c.text);
}

module.exports = { solve, captions, sentencesFor };
