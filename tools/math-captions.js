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
/* 🚨 `L` is the lesson, and it is REQUIRED, because the closing instructions
   are the lesson's own. Paul, 2026-08-29: "if there isnt some instruction build
   one in the lesson." They land at the END, after the working has been shown,
   because a student cannot act on "do all five" while the method is still being
   explained. */
function captions(S, L) {
  if (!L || !L.todo || !Array.isArray(L.todo.s) || !L.todo.s.length) {
    console.error("FAIL: captions() needs the lesson and its todo block");
    process.exit(1);
  }
  /* 🚨 The lesson opens on the maths, not on an explanation of the buttons.
     Paul, 2026-08-29: "you also need to remove the voice engine instructions." */
  const out = [{
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
  /* Nothing left to bring down and the last subtract did not reach zero: that
     leftover number is the remainder, and it gets its own sentence rather
     than sliding past as just another subtract answer. */
  if (S.remainder > 0) {
    /* revealRemainder is STRUCTURE, like step/phase - it tells paintDemo() to
       write the remainder into the R box up top, next to the quotient, the
       moment it is named. Paul, 2026-08-30: "we need to put remainders on
       top with the answer" - restated there, not left sitting unlabeled as
       just the last subtract row. */
    out.push({
      revealRemainder: true,
      text: "There is nothing left to bring down, and " + S.remainder +
            " is still left over after that last subtract. That is the remainder.",
    });
    /* The rule that tells you the division is actually finished, not the
       trivia. Paul, 2026-08-30: "express that the remainder is when its
       smaller" - a remainder has to be smaller than the divisor, or the
       divide step before it was too small and the dividing is not done. */
    out.push({
      text: S.remainder + " is smaller than " + S.divisor + ", the divisor. That is what tells us we are " +
            "finished - if " + S.remainder + " were " + S.divisor + " or more, " + S.divisor +
            " would still fit in at least one more time.",
    });
    out.push({
      text: "The digits on top read " + S.quotient + ", with " + S.remainder + " remaining. So " +
            S.dividend + " divided by " + S.divisor + " is " + S.quotient + " remainder " + S.remainder + ".",
    });
  } else {
    out.push({
      text: "The digits on top read " + S.quotient + ". So " + S.dividend + " divided by " +
            S.divisor + " is " + S.quotient + ".",
    });
  }
  /* ⚠️ No `step` or `phase` on these, so paintDemo() leaves the finished
     bracket on screen while they are read. The student is being told what to do
     next while still looking at the worked example. */
  L.todo.s.forEach((text) => out.push({ text }));
  return out;
}

/* The sentences alone, in the order the player will speak them. */
function sentencesFor(demo, L) {
  return captions(solve(demo.dividend, demo.divisor), L).map((c) => c.text);
}

module.exports = { solve, captions, sentencesFor };
