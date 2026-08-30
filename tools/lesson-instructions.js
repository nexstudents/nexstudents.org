/* ─────────────────────────────────────────────────────────────────────────
   EVERY LESSON TELLS THE STUDENT WHAT TO DO.

   🚨 Paul, 2026-08-29: *"if there isnt some instruction build one in the
   lesson."* Not a nicety and not optional — `requireTodo()` FAILS THE BUILD on
   a lesson that does not carry one.

   ⚠️ THIS FILE EXISTS BECAUSE I BUILT THE WRONG THING FIRST. The instructions
   I wrote explained the PLAYER: press play, drag the bar, the arrows step back.
   Paul: *"i didnt mean instructions regarding how to use the voice engine but
   instrctions for the lesson itself and after you read the material."* Then,
   plainly: *"you also need to remove the voice engine instructions."*

   🚨 SO THERE IS NO "HOW TO USE THIS PAGE" BLOCK. Do not add one back. The
   buttons are a play button, two arrows and a bar — a child works that out by
   pressing it, and spending the opening of every lesson explaining them buries
   the lesson under a manual for its own controls.

   What is left is ONE block: `todo`, the lesson's own assignment, at the END,
   after the material. The order matters. A student who has not read the
   material yet cannot act on "find the answers in the story" — there is no
   story behind them. The task goes where the task starts.

   🚨 `partsFor()` is called by build-lessons.js, build-english.js AND
   bake-voice.js. That is the whole point: the sentences on the page and the
   sentences in the audio come out of ONE function, so the voice can never read
   instructions the page does not show. Maths does the same thing through
   captions() in math-captions.js.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

/* ⚠️ A `todo` that says "do the questions" is worse than none: it takes up the
   last thing the student hears and spends it on nothing. These thresholds are
   what stops that shipping. */
function requireTodo(L, where) {
  const t = L.todo;
  const die = (m) => { console.error("FAIL: " + where + ": " + m); process.exit(1); };

  if (!t || !Array.isArray(t.s) || !t.s.length) {
    die("no `todo` block. Every lesson has to tell the student what to DO once the\n" +
        "      material is finished - which task, how many of them, and what to do when\n" +
        "      they get stuck. Paul, 2026-08-29: \"if there isnt some instruction build\n" +
        "      one in the lesson.\"");
  }
  if (!t.title) die("todo needs a title");
  if (t.s.length < 3) die("todo has only " + t.s.length + " line(s). Say the task, say how much of\n" +
                          "      it there is, and say what to do when a bit of it is hard.");
  const chars = t.s.join(" ").length;
  if (chars < 220) die("the todo block is " + chars + " characters. That is a label, not an\n" +
                       "      instruction. Tell the student what the work actually is.");
  t.s.forEach((line, i) => {
    if (String(line).trim().length < 12) die("todo line " + i + " is too short to be a sentence");
  });
}

/* The finished reading order: the lesson, then the job. Nothing before it. */
function partsFor(L) {
  return (L.parts || []).concat([L.todo]);
}

module.exports = { requireTodo, partsFor };
