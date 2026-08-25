/* ─────────────────────────────────────────────────────────────────────────
   SPELLING WORDS — 36 weeks, 10 words a week, 3rd grade level.

   One school year. Each week teaches ONE spelling pattern, and all ten words
   carry that pattern, so a student who learns the rule can spell words that
   were never on the list. The weeks run in the order the patterns are usually
   taught: short vowels, long vowels, blends, silent letters, digraphs, soft
   sounds, vowel teams, r-controlled vowels, then endings and word-building.

   WHY THESE ARE OUR OWN WORDS. The pattern ORDER follows the standard
   scope-and-sequence every 3rd grade programme uses - that sequence is method,
   not anybody's writing. The words themselves are picked here. A commercial
   list was the starting reference and its words are not reproduced: it ran 16
   a week, and its last few each week were science and maths vocabulary bolted
   on, which teaches subject words rather than spelling. Ten pattern words
   teaches spelling.

   Words are chosen to be worth the effort: common enough that a student will
   actually meet them in reading, hard enough that they are not already known.
   No word appears twice in the year - guarded by the check at the bottom, run
   it with `node spelling-words.js`.

   BONUS WORD. Every week has an eleventh word, harder than the ten, drawn
   from the same pattern. It is worth one extra point and a miss costs nothing,
   which is the whole point: a student can reach for a hard word with nothing
   at stake.

   Shape of a week:
     n      week number, 1-36
     focus  the pattern, in the words a parent would say out loud
     words  the ten that are scored
     bonus  the eleventh, harder, worth one extra point
   ───────────────────────────────────────────────────────────────────────── */

const WEEKS = [

/* ══════════════════ TERM 1 · VOWELS, BLENDS, DIGRAPHS ══════════════════ */

{ n: 1, focus: "Short a and short e",
  words: ["last", "stamp", "crash", "brand", "snack", "next", "dress", "spend", "check", "best"],
  bonus: "handstand" },

{ n: 2, focus: "Short i, o and u",
  words: ["front", "thump", "blink", "stomp", "crust", "split", "pond", "lunch", "drift", "blush"],
  bonus: "instrument" },

{ n: 3, focus: "Long a and long e",
  words: ["brave", "shade", "escape", "reach", "sweet", "theme", "remain", "agree", "scream", "safe"],
  bonus: "meanwhile" },

{ n: 4, focus: "Long i and long o",
  words: ["slide", "bright", "spike", "invite", "stone", "throat", "follow", "broke", "whole", "unite"],
  bonus: "lightning" },

{ n: 5, focus: "Blends st and str",
  words: ["strong", "stream", "street", "strike", "struck", "stretch", "string", "strange", "stumble", "stack"],
  bonus: "strawberry" },

{ n: 6, focus: "Silent letters kn and wr",
  words: ["knife", "knock", "knot", "knee", "kneel", "wrist", "wrong", "wrote", "wrap", "wreck"],
  bonus: "knowledge" },

{ n: 7, focus: "The f sound spelled gh and ph",
  words: ["laugh", "laughed", "enough", "rough", "tough", "graph", "phone", "photo", "dolphin", "alphabet"],
  bonus: "paragraph" },

{ n: 8, focus: "ch and tch",
  words: ["match", "watch", "catch", "switch", "pitch", "chance", "church", "chapter", "kitchen", "scratch"],
  bonus: "adventure" },

{ n: 9, focus: "sh at the start and the end",
  words: ["shall", "shape", "shore", "shoulder", "shrink", "fresh", "finish", "polish", "shovel", "shelter"],
  bonus: "shipwreck" },

/* ═══════════════ TERM 2 · SOFT SOUNDS AND VOWEL TEAMS ═══════════════ */

{ n: 10, focus: "Soft c, the c that says s",
  words: ["city", "cent", "circle", "fence", "price", "dance", "notice", "pencil", "police", "circus"],
  bonus: "celebrate" },

{ n: 11, focus: "Soft g, the g that says j",
  words: ["gentle", "giant", "giraffe", "magic", "stage", "badge", "bridge", "change", "danger", "village"],
  bonus: "gigantic" },

{ n: 12, focus: "The oi sound, spelled oi and oy",
  words: ["choice", "voice", "noise", "point", "spoil", "join", "royal", "annoy", "enjoy", "destroy"],
  bonus: "appointment" },

{ n: 13, focus: "The ou sound, spelled ou and ow",
  words: ["around", "ground", "pound", "mountain", "fountain", "shout", "crowd", "growl", "however", "powder"],
  bonus: "surrounded" },

{ n: 14, focus: "The aw sound, spelled aw and au",
  words: ["crawl", "dawn", "lawn", "straw", "author", "autumn", "caught", "taught", "laundry", "pause"],
  bonus: "astronaut" },

{ n: 15, focus: "Long oo and short oo",
  words: ["choose", "loose", "moose", "balloon", "smooth", "shook", "brook", "understood", "wooden", "foolish"],
  bonus: "afternoon" },

{ n: 16, focus: "r-controlled ar",
  words: ["market", "garden", "sharp", "harvest", "partner", "carpet", "marble", "target", "alarm", "apart"],
  bonus: "department" },

{ n: 17, focus: "The air sound, spelled air and are",
  words: ["stairs", "repair", "prepare", "compare", "square", "aware", "fairy", "dairy", "glare", "spare"],
  bonus: "staircase" },

{ n: 18, focus: "r-controlled or",
  words: ["morning", "corner", "forest", "report", "storm", "north", "torch", "sport", "order", "forty"],
  bonus: "important" },

/* ═════════════════ TERM 3 · HOMOPHONES AND PATTERNS ═════════════════ */

{ n: 19, focus: "Homophones - same sound, different spelling",
  words: ["here", "hear", "bare", "bear", "way", "weigh", "their", "there", "plain", "plane"],
  bonus: "weather" },

{ n: 20, focus: "More homophones",
  words: ["piece", "peace", "board", "bored", "hair", "hare", "flour", "flower", "waist", "waste"],
  bonus: "principal" },

{ n: 21, focus: "The ur sound, spelled ur, er and ir",
  words: ["purple", "curve", "burst", "turkey", "perfect", "person", "thirsty", "birthday", "shirt", "whisper"],
  bonus: "furniture" },

{ n: 22, focus: "Double consonants in the middle",
  words: ["happy", "funny", "puppy", "bottle", "common", "collect", "lesson", "dinner", "ribbon", "rabbit"],
  bonus: "beginning" },

{ n: 23, focus: "Comparing with -er and -est",
  words: ["bigger", "biggest", "hotter", "hottest", "happier", "happiest", "louder", "loudest", "stranger", "strangest"],
  bonus: "friendliest" },

{ n: 24, focus: "Compound words - two words joined",
  words: ["notebook", "sunset", "bookcase", "classroom", "football", "sunshine", "rainbow", "baseball", "hallway", "outdoors"],
  bonus: "grandmother" },

{ n: 25, focus: "Two consonants in the middle - win-ter, bas-ket",
  words: ["winter", "cellar", "basket", "welcome", "until", "always", "member", "sudden", "pattern", "silver"],
  bonus: "yesterday" },

{ n: 26, focus: "One consonant in the middle - ti-ger, ca-bin",
  words: ["cabin", "music", "tiger", "behind", "focus", "belong", "family", "motel", "robot", "human"],
  bonus: "elephant" },

{ n: 27, focus: "Adding -ed and -ing, and what changes first",
  words: ["liked", "rolling", "swimming", "settled", "hurried", "buying", "trying", "leaving", "diving", "worried"],
  bonus: "travelling" },

/* ═══════════════════ TERM 4 · ENDINGS AND BUILDING ═══════════════════ */

{ n: 28, focus: "Words ending -tion and -sion",
  words: ["action", "nation", "question", "attention", "vision", "mission", "station", "motion", "section", "division"],
  bonus: "celebration" },

{ n: 29, focus: "Words ending -ful, meaning full of",
  words: ["beautiful", "cheerful", "harmful", "playful", "useful", "colorful", "thankful", "joyful", "painful", "careful"],
  bonus: "wonderful" },

{ n: 30, focus: "Words ending -ly, telling how",
  words: ["lonely", "suddenly", "actually", "personally", "especially", "rapidly", "tenderly", "lovely", "nicely", "bravely"],
  bonus: "immediately" },

{ n: 31, focus: "Words ending -able and -ible, meaning can be",
  words: ["comfortable", "valuable", "erasable", "available", "portable", "capable", "reusable", "terrible", "possible", "sensible"],
  bonus: "responsible" },

{ n: 32, focus: "Changing y to i before an ending",
  words: ["penny", "pennies", "empty", "emptied", "parties", "families", "mystery", "mysteries", "married", "carried"],
  bonus: "discoveries" },

{ n: 33, focus: "Contractions - where the apostrophe goes",
  words: ["he's", "she's", "didn't", "isn't", "you're", "we're", "they're", "there's", "haven't", "don't"],
  bonus: "shouldn't" },

{ n: 34, focus: "More contractions - will, have and would",
  words: ["we'll", "I'll", "he'll", "she'll", "you'll", "they'll", "you've", "they've", "I've", "we'd"],
  bonus: "they'd" },

{ n: 35, focus: "Words ending in -er",
  words: ["under", "never", "center", "border", "sister", "whether", "answer", "shower", "summer", "finger"],
  bonus: "September" },

{ n: 36, focus: "Words ending -le and -al",
  words: ["total", "central", "simple", "chuckle", "giggle", "middle", "signal", "handle", "candle", "uncle"],
  bonus: "principle" },

];

/* ── CHECKS ──
   A word that turns up twice in the year is a wasted week, and a week with
   the wrong count breaks the sheet it prints onto. Both are easy to introduce
   by hand and impossible to spot by reading. Run: node spelling-words.js */
if (require.main === module) {
  const problems = [];

  if (WEEKS.length !== 36) problems.push(`${WEEKS.length} weeks, expected 36`);

  WEEKS.forEach((w, i) => {
    if (w.n !== i + 1) problems.push(`week ${i + 1} is numbered ${w.n}`);
    if (w.words.length !== 10) problems.push(`week ${w.n} has ${w.words.length} words, expected 10`);
    if (!w.bonus) problems.push(`week ${w.n} has no bonus word`);
    if (!w.focus) problems.push(`week ${w.n} has no focus`);
  });

  const seen = new Map();
  for (const w of WEEKS) {
    for (const word of [...w.words, w.bonus]) {
      const k = word.toLowerCase();
      if (seen.has(k)) problems.push(`"${word}" is in week ${seen.get(k)} and again in week ${w.n}`);
      else seen.set(k, w.n);
    }
  }

  if (problems.length) {
    console.error("FAIL\n  " + problems.join("\n  "));
    process.exit(1);
  }
  console.log(`OK  ${WEEKS.length} weeks, ${WEEKS.length * 10} scored words, ` +
              `${WEEKS.length} bonus words, ${seen.size} distinct.`);
}

module.exports = { WEEKS };
