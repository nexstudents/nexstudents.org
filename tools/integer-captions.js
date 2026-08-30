/* ─────────────────────────────────────────────────────────────────────────
   THE INTEGERS WALK THROUGH, AS DATA.

   Lives on disk, like math-captions.js, so tools/bake-voice.js can read the
   sentences and the page does not have to compute what it is about to say.
   Both call these functions, so audio and screen cannot drift apart.

   ⭐ HOW A TEACHER ACTUALLY TALKS. Paul rewrote this narration on 2026-08-30
   and the notes are worth keeping, because the first version was written like
   a textbook and he had to correct all of it:

     - Open by saying what today is. *"Today we are adding Integers."*
     - Not "Negative 4 plus negative 9" but *"If you take negative 4 and add
       negative 9 you notice they both have a negative line in front"* - point
       at the thing on the page, do not just read the sum aloud.
     - *"i would also not say nine take away 4 but 9-4."*
     - **"take its sign" was wrong and he was right.** *"so takes its sign
       sound completely wrong you can understand that right? make it sound
       more natural."* What a person says is: since they are both negative, it
       is obvious the answer is negative too.
     - Name the part that feels backwards instead of gliding past it: with
       different signs you are told to ADD but you SUBTRACT. *"explain this
       sounds like the opposite when adding integers but we are doing things
       in reverse which is the point."*
     - *"it doesnt need to be so long you know."*

   ⚠️ STRUCTURE, NOT DECORATION. paintDemo() reads these fields:
     ex     which worked example is on screen
     show   how many of its rows have been revealed
     hi     which spans to highlight right now ("sgn" = the minus signs)
     line   draw the number line
     ring   values to circle on the number line, to compare distance from zero
     todo   reveal this many lines of the closing instructions
   Rewording a caption is safe. Dropping those fields is not.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

/* Read aloud, "-4" is "negative 4". "Minus 4" is an instruction, not a
   number, and the voice has to say the number. */
function say(n) { return n < 0 ? "negative " + Math.abs(n) : String(n); }

/* The minus sign gets its own span so the walk through can highlight it the
   moment the narration says "they both have a negative line in front". A
   negative after an operator also wears brackets, the way a workbook writes
   it - without them "8 + -3" reads as two operators in a row. */
function num(n, brackets) {
  if (n >= 0) return String(n);
  const inner = '<span class="sgn">-</span>' + Math.abs(n);
  return brackets ? "(" + inner + ")" : inner;
}

function solve(a, b, kind) {
  const A = Math.abs(a), B = Math.abs(b);
  if (kind === "subtract") {
    const flipped = -b, ans = a - b;
    return { kind, a, b, flipped, ans, same: (a < 0) === (flipped < 0),
      rows: [
        num(a) + ' <span class="op">-</span> ' + num(b, true),
        num(a) + ' <span class="op">+</span>',
        num(a) + ' <span class="op">+</span> ' + num(flipped, true),
        "= " + num(ans),
      ],
      start: a, move: flipped };
  }
  const ans = a + b, same = (a < 0) === (b < 0);
  const big = Math.max(A, B), small = Math.min(A, B);
  return { kind, a, b, ans, same, big, small,
    rows: [
      num(a) + ' <span class="op">+</span> ' + num(b, true),
      same ? "Both signs the same" : "One of each, so different",
      same ? A + " + " + B + " = " + (A + B) : big + " - " + small + " = " + Math.abs(ans),
      "= " + num(ans),
    ],
    start: a, move: b };
}

/* 🚨 `L` is REQUIRED - the closing instructions are the lesson's own and are
   read at the end. Same contract as math-captions.js. */
function captions(L) {
  if (!L || !L.todo || !Array.isArray(L.todo.s) || !L.todo.s.length) {
    console.error("FAIL: captions() needs the lesson and its todo block");
    process.exit(1);
  }
  const kind = L.practice.kind;
  const out = [];

  /* Say what today is before doing any of it. Paul, 2026-08-30. */
  out.push({ text: "Today we are " + (kind === "subtract" ? "subtracting" : "adding") + " integers." });

  L.demo.forEach((d, ex) => {
    const S = solve(d.a, d.b, kind);
    const A = Math.abs(S.a), B = Math.abs(S.b);
    const first = ex === 0;

    if (kind === "subtract") {
      out.push({ ex, show: 1, hi: "sgn", text:
        (first ? "If you take " : "This time take ") + say(S.a) + " and subtract " + say(S.b) +
        ", the first number never moves, so keep the " + say(S.a) + "." });
      out.push({ ex, show: 3, hi: "sgn", text:
        "Now two things change. The minus in the middle becomes a plus, and " + say(S.b) +
        " flips to " + say(S.flipped) + "." });
      out.push({ ex, show: 4, text:
        "Now it is just an adding question. " +
        (S.same
          ? "Both signs are the same, so add them. The answer is " + say(S.ans) + "."
          : "The signs are different, so subtract. The answer is " + say(S.ans) + ".") });
      /* 🚨 NAME THE BACKWARDS BIT, the way the adding lesson does. Subtracting
         a negative giving a BIGGER answer is the moment a student decides
         maths is arbitrary, so it gets its own sentence and its own picture
         rather than being tacked onto the end of another line. */
      if (S.b < 0) {
        out.push({ ex, show: 4, line: true, ring: [S.a, S.ans], text:
          "Look at what happened there. You were told to subtract, and the answer came out bigger " +
          "than what you started with. That feels wrong, and it is the thing to remember about " +
          "this lesson: taking away a negative moves you to the right, not the left." });
        out.push({ ex, show: 4, line: true, ring: [S.a, S.ans], text:
          "It works like money. If somebody cancels a debt of " + Math.abs(S.b) +
          ", nothing came out of your pocket, but you are " + Math.abs(S.b) + " better off." });
      } else {
        out.push({ ex, show: 4, line: true, text:
          "On the number line you start at " + say(S.a) + " and move " + Math.abs(S.move) +
          " to the left, landing on " + say(S.ans) + "." });
      }
      return;
    }

    /* ── adding ── */
    out.push({ ex, show: 2, hi: "sgn", text:
      (first ? "If you take " : "This time take ") + say(S.a) + " and add " + say(S.b) + ", " +
      (S.same
        ? "notice they both have a negative line in front of them, so the signs are the same."
        : "notice one has a negative line in front and the other does not, so the signs are different.") });

    if (S.same) {
      out.push({ ex, show: 3, text:
        "When the signs match you just add them. " + A + " + " + B + " = " + (A + B) + "." });
      out.push({ ex, show: 4, line: true, text:
        "And since they are both negative, it is obvious the answer is negative too. " +
        say(S.ans) + ". Two negatives together go further down, never back up." });
      return;
    }

    out.push({ ex, show: 3, text:
      "When the signs are different you subtract instead. " + S.big + " - " + S.small + " = " +
      Math.abs(S.ans) + "." });
    /* 🚨 Name the bit that feels backwards. Paul: "explain this sounds like
       the opposite when adding integers but we are doing things in reverse
       which is the point." */
    out.push({ ex, show: 3, text:
      "I know that sounds like the opposite. The question says add, and we just subtracted. " +
      "That is the point: when the signs disagree the two numbers pull against each other, " +
      "so the working goes in reverse." });
    out.push({ ex, show: 3, line: true, ring: [S.a < 0 ? S.a : S.b, 0], text:
      "So which one wins? Look at how far each sits from zero. " +
      say(A > B ? S.a : S.b) + " is further from zero than " + Math.min(A, B) + "." });
    out.push({ ex, show: 4, text:
      "The one further from zero is " + ((A > B ? S.a : S.b) < 0 ? "negative" : "positive") +
      ", so the answer is " + ((A > B ? S.a : S.b) < 0 ? "negative" : "positive") + " as well. " +
      say(S.ans) + "." });
  });

  /* ⚠️ The closing instructions get their OWN titled block on the page, and
     the voice keeps going straight into it. Paul, 2026-08-30: "seperate it
     with a new paragraph and title it but keep the voice player playing."
     `todo` counts how many lines have been revealed; no `ex`, so the last
     worked example stays on screen behind it. */
  L.todo.s.forEach((text, i) => out.push({ todo: i + 1, text }));

  /* say() returns "negative 4", which is right mid-sentence and wrong as the
     first word of one - and a caption often holds two or three sentences, so
     it is not only the first character that needs it. Doing it here keeps the
     sentence-building above readable. */
  const capitalise = (s) =>
    s.replace(/(^|[.?!]\s+)([a-z])/g, (m, lead, ch) => lead + ch.toUpperCase());
  return out.map((c) => Object.assign({}, c, { text: capitalise(c.text) }));
}

function sentencesFor(L) { return captions(L).map((c) => c.text); }

module.exports = { solve, captions, sentencesFor, num, say };
