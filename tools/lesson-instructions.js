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

/* 🚨 THE COUNTS IN A TODO ARE DERIVED, NEVER TYPED.
   Paul, 2026-09-04: "in the story you said to answer the 10 questions below but
   its more than that its actually 14 questions and four vocab."
   Every count the PAGE renders was already derived - the progress label, the
   day-one note, the teacher score - and the todo was the last place a number was
   still written out by hand. So it was the only one that could be wrong, and it
   was: it named the ten story questions and the four word cards separately and
   never said the fourteen the student actually has to answer.
   build-math.js already had this rule ("do all five" becomes a lie the day that
   number changes, and the student stops when the voice says to stop). This is
   the same rule for reading lessons.

     {q}  questions about the story
     {v}  questions under the word cards
     {t}  QUESTIONS IN ALL - q + v, the number the student is really being asked
     {c}  word CARDS - how many words are on the page
     {Q} {V} {T} {C}  the same, capitalised, for the start of a sentence

   🚨 {v} AND {c} ARE NOT THE SAME NUMBER and must not be used for each other.
   {v} counts questions, {c} counts cards, and a lesson is allowed to have more
   cards than checks: build-lessons.js warns rather than fails when it does,
   because Paul wrote five words and four checks twice and inventing his fifth
   question is the worse error. Using {v} where {c} belongs is right until the
   day a lesson has an unchecked word, and then it is quietly wrong.

   🚨 SUBSTITUTED HERE, INSIDE partsFor(), so the page and bake-voice.js get the
   same filled text. Filling them in build-lessons.js instead would leave the
   audio reading the literal "{q}". */
const NUMWORD = ["zero", "one", "two", "three", "four", "five", "six", "seven",
                 "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
                 "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
const numWord = (n) => (n <= 20 ? NUMWORD[n] : String(n));
const cap1 = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* 🚨 IT COUNTS WHAT THE PAGE WILL SHOW, NOT WHAT THE SOURCE LISTS.
   `L.questions` is Day One only. The Day Two word-card checks come from
   `vocabQuestions` when the lesson writes them by hand, and are GENERATED one
   per word card when it does not - see buildQuestions() in build-lessons.js.
   Reading L.questions alone reported 4 for the two Rome lessons, which have
   four story questions and four generated card checks: it would have told a
   student the job was half its real size, which is the exact failure this whole
   change exists to stop. */
function todoCounts(L) {
  const q = (L.questions || []).length;
  const c = (L.words || []).length;
  /* Hand-written checks win; otherwise one is generated per card. */
  const v = (L.vocabQuestions || []).length || c;
  return { q: q, v: v, t: q + v, c: c };
}

function fillCounts(text, c) {
  return String(text)
    .replace(/\{q\}/g, numWord(c.q)).replace(/\{Q\}/g, cap1(numWord(c.q)))
    .replace(/\{v\}/g, numWord(c.v)).replace(/\{V\}/g, cap1(numWord(c.v)))
    .replace(/\{t\}/g, numWord(c.t)).replace(/\{T\}/g, cap1(numWord(c.t)))
    .replace(/\{c\}/g, numWord(c.c)).replace(/\{C\}/g, cap1(numWord(c.c)));
}

/* 🚨 A NUMBER TYPED IN FRONT OF "questions" OR "cards" FAILS THE BUILD.
   Deliberately narrow. A todo may well say "read it two times" and that is not
   a count of anything the builder knows about, so a blanket ban on numbers
   would be wrong. What cannot be typed is the one thing that goes stale: how
   many questions or cards there are. Use the token. */
function checkTodoCounts(L, where) {
  const N = "(?:\\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|" +
            "thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)";
  /* "N words from ..." is the third shape the two Rome todos used for the same
     count. Kept specific rather than banning "N words" outright: a lesson may
     fairly say "two words mean the same thing", which counts nothing. */
  const bad = new RegExp(
    "\\b" + N + "\\s+(?:more\\s+)?(?:questions?|word cards?|cards?)\\b" +
    "|\\b" + N + "\\s+words\\s+from\\b", "i");
  (L.todo && L.todo.s ? L.todo.s : []).forEach((line, i) => {
    const m = bad.exec(String(line));
    if (m) {
      console.error("FAIL: " + where + ": todo line " + i + ' types the count "' + m[0] + '".\n' +
        "      Counts are derived. Use {q} questions, {v} word cards, or {t} for both,\n" +
        "      so the instruction cannot disagree with the lesson it is attached to.\n" +
        "        " + line);
      process.exit(1);
    }
  });
}

/* 🚨 ONE SENTENCE PER LINE, AND THE BUILD MEASURES IT.
   Paul, 2026-09-05: "thats way to long i would do sentences not full
   paragraphs", then the rule itself: "no measure if it starts and stops with a
   period ... show each sentence only."
   Every `s` entry is one unit everywhere it is used - one highlight band, one
   baked audio clip, one line in the Visual Panel, one `find` target. A line
   holding three sentences therefore highlights all three at once, is read as a
   single clip, and fills the panel with a paragraph. The worst offender in
   maths 1-1 was 288 characters and five sentences in a single entry.
   ⚠️ IT IS A BOUNDARY TEST, NOT A LENGTH TEST. A long single sentence is fine;
   two short ones in one entry are not. Splitting on length would cut sentences
   in half, which is worse than leaving them long.
   ⚠️ Deliberately narrow: a terminator, then whitespace, then a CAPITAL. That
   leaves quoted speech alone - "says, “Dinner is ready.”" ends the line rather
   than continuing it, and an internal comma-quote is followed by lower case. */
/* 🚨 THE TWO ROME LESSONS ARE EXEMPT, AND THIS IS NOT LAZINESS.
   Their voice.json holds one baked clip per SENT entry - 35 clips for 35
   sentences, and the todo is inside that count. Splitting their todo lines takes
   them to 40 sentences against 35 clips, so every clip from the todo onwards
   would play against the wrong line. Nothing would catch it: both files predate
   the per-clip `hash` and the top-level `textHash`, so the page uses them
   unconditionally.
   ⚠️ REMOVE THIS THE DAY THEY ARE RE-BAKED. `node tools/bake-voice.js .` with
   GOOGLE_TTS_KEY set, which also gives them the hashes they are missing. */
const ONE_SENTENCE_EXEMPT = {
  "history/republic-to-empire": "baked audio predates the hashes; splitting desyncs it",
  "history/roman-government": "baked audio predates the hashes; splitting desyncs it",
};

function checkOneSentence(L, where) {
  if (ONE_SENTENCE_EXEMPT[L.id]) return;
  const split = /[.!?]["'”’]?\s+["'“‘]?[A-Z]/;
  const look = (label, list) => (list || []).forEach((line, i) => {
    const t = String(line);
    if (!t.trim()) return;
    const m = split.exec(t);
    if (!m) return;
    console.error("FAIL: " + where + ": " + label + " line " + i + " holds more than one sentence.\n" +
      "      Split it. One entry is one highlight, one audio clip and one line in\n" +
      "      the Visual Panel, so two sentences in one entry are read, lit and shown\n" +
      "      as a single unit.\n" +
      "        " + (t.length > 120 ? t.slice(0, 117) + "..." : t) + "\n" +
      "      breaks after: ..." + t.slice(Math.max(0, m.index - 28), m.index + 1));
    process.exit(1);
  });
  (L.parts || []).forEach((p, k) => look("part " + k, p.s));
  if (L.todo) look("todo", L.todo.s);
}

/* The finished reading order: the lesson, then the job. Nothing before it. */
function partsFor(L) {
  const t = L.todo;
  if (!t) return (L.parts || []).slice();
  const c = todoCounts(L);
  /* A COPY. The lesson object is shared across generators and bake-voice, and
     filling the tokens in place would leave the second caller with nothing left
     to substitute - which still works, but only by accident. */
  const filled = { title: t.title, s: (t.s || []).map((line) => fillCounts(line, c)) };
  return (L.parts || []).concat([filled]);
}

module.exports = { requireTodo, partsFor, checkTodoCounts, checkOneSentence };
