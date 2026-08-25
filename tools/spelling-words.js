/* ─────────────────────────────────────────────────────────────────────────
   SPELLING WORDS — 36 weeks, 10 words a week, 3rd grade.

   🚨 NO SIGHT WORDS. PHONICS ONLY.
   Paul, 2026-08-25: "no more sight words only phonics and real readers."
   Every word here is DECODABLE - a student who knows the rule can sound it
   out. Nothing on this list is meant to be memorised as a shape.

   This is the older way, and it is older than the thing it replaces. Webster's
   Speller (1783) taught by syllable and pattern. McGuffey's Readers (1836)
   taught phonics first, then reading. Orton-Gillingham (1930s) made it
   explicit, systematic and cumulative. The sight-word lists are the NEWER
   idea - Dolch is 1936, Fry is 1957 - and they are what we are not doing.

   WHERE A SIGHT-WORD SLOT WOULD GO, THIS PUTS REVIEW. Two words a week on a
   rule already taught, so the patterns compound instead of resetting. They are
   NEW words on an OLD rule, never a repeat, so a student cannot get them by
   memory - only by the rule. That is the whole argument in one slot.

   THREE KINDS A WEEK, the shape a graded speller uses:
     pattern   6 words on THIS week's rule            (week 1 gets 8)
     review    2 words on an earlier week's rule      (week 1 has none yet)
     academic  2 content words from science, history or maths - still decodable
     bonus     1 more, the SAME size as the ten, worth one extra point

   The bonus used to be deliberately harder. That was wrong: week 1 is last,
   stamp, crash and the bonus was handstand. A bonus out of reach is not a
   bonus, it is a trick.

   WHY THESE ARE OUR OWN WORDS. The pattern ORDER follows the standard
   scope-and-sequence - that sequence is method and belongs to nobody. The
   words are picked here. A commercial 3rd grade list was the reference for the
   order only; its words are not reproduced. Where one matches anyway, it is
   because there are only so many good short-a words.

   LEVELLING UP. This file is grade 3. A scope-and-sequence runs K through 8:
   grade 4 adds prefixes, suffixes and longer words; grade 5 adds Greek and
   Latin roots. Add those as their own files beside this one, same shape.

   No word appears twice in the year. Run: node spelling-words.js
   ───────────────────────────────────────────────────────────────────────── */

const WEEKS = [

/* ══════════════════ TERM 1 · VOWELS, BLENDS, DIGRAPHS ══════════════════ */

{ n: 1, focus: "Short a and short e words, and academic vocabulary",
  pattern: ["last", "stamp", "crash", "snack", "spend", "check", "brand", "next"],
  review: [],
  academic: ["habitat", "equal"],
  bonus: "crept" },

{ n: 2, focus: "Short i, o and u words, review, and academic vocabulary",
  pattern: ["front", "thump", "blink", "stomp", "crust", "split"],
  review: ["dress", "best"],
  academic: ["compass", "sum"],
  bonus: "shrimp" },

{ n: 3, focus: "Long a and long e words, review, and academic vocabulary",
  pattern: ["brave", "shade", "escape", "reach", "sweet", "theme"],
  review: ["pond", "lunch"],
  academic: ["climate", "region"],
  bonus: "greet" },

{ n: 4, focus: "Long i and long o words, review, and academic vocabulary",
  pattern: ["slide", "bright", "spike", "invite", "stone", "throat"],
  review: ["agree", "remain"],
  academic: ["planet", "orbit"],
  bonus: "globe" },

{ n: 5, focus: "Blends st and str, review, and academic vocabulary",
  pattern: ["strong", "stream", "street", "strike", "stretch", "strange"],
  review: ["smoke", "drive"],
  academic: ["distance", "energy"],
  bonus: "stress" },

{ n: 6, focus: "Silent letters kn and wr, review, and academic vocabulary",
  pattern: ["knife", "knock", "knee", "wrist", "wrong", "wrap"],
  review: ["stack", "struck"],
  academic: ["fossil", "desert"],
  bonus: "wrench" },

{ n: 7, focus: "The f sound spelled gh and ph, review, and academic vocabulary",
  pattern: ["laugh", "enough", "rough", "graph", "phone", "dolphin"],
  review: ["knot", "wrote"],
  academic: ["harvest", "settler"],
  bonus: "cough" },

{ n: 8, focus: "The ch and tch spellings, review, and academic vocabulary",
  pattern: ["match", "watch", "catch", "switch", "pitch", "scratch"],
  review: ["tough", "photo"],
  academic: ["measure", "century"],
  bonus: "stitch" },

{ n: 9, focus: "The sh spelling, review, and academic vocabulary",
  pattern: ["shall", "shape", "shore", "shrink", "fresh", "finish"],
  review: ["chance", "church"],
  academic: ["supply", "survive"],
  bonus: "shiver" },

/* ═══════════════ TERM 2 · SOFT SOUNDS AND VOWEL TEAMS ═══════════════ */

{ n: 10, focus: "Soft c, the c that says s, review, and academic vocabulary",
  pattern: ["city", "cent", "circle", "fence", "price", "dance"],
  review: ["shine", "shell"],
  academic: ["citizen", "surface"],
  bonus: "recess" },

{ n: 11, focus: "Soft g, the g that says j, review, and academic vocabulary",
  pattern: ["gentle", "giant", "giraffe", "magic", "stage", "badge"],
  review: ["pencil", "police"],
  academic: ["valley", "canyon"],
  bonus: "hinge" },

{ n: 12, focus: "The oi sound spelled oi and oy, review, and academic vocabulary",
  pattern: ["choice", "voice", "noise", "point", "spoil", "join"],
  review: ["bridge", "change"],
  academic: ["weather", "season"],
  bonus: "loyal" },

{ n: 13, focus: "The ou sound spelled ou and ow, review, and academic vocabulary",
  pattern: ["around", "ground", "pound", "mountain", "shout", "crowd"],
  review: ["annoy", "enjoy"],
  academic: ["product", "remainder"],
  bonus: "sprout" },

{ n: 14, focus: "The aw sound spelled aw and au, review, and academic vocabulary",
  pattern: ["crawl", "dawn", "lawn", "straw", "author", "autumn"],
  review: ["growl", "powder"],
  academic: ["drought", "custom"],
  bonus: "haunt" },

{ n: 15, focus: "Long oo and short oo, review, and academic vocabulary",
  pattern: ["choose", "loose", "moose", "balloon", "smooth", "shook"],
  review: ["caught", "taught"],
  academic: ["sample", "mixture"],
  bonus: "scoop" },

{ n: 16, focus: "r-controlled ar, review, and academic vocabulary",
  pattern: ["market", "garden", "sharp", "carpet", "marble", "alarm"],
  review: ["brook", "wooden"],
  academic: ["average", "diagram"],
  bonus: "harbor" },

{ n: 17, focus: "The air sound spelled air and are, review, and academic vocabulary",
  pattern: ["stairs", "repair", "prepare", "compare", "square", "aware"],
  review: ["apart", "partner"],
  academic: ["column", "triangle"],
  bonus: "stare" },

{ n: 18, focus: "r-controlled or, review, and academic vocabulary",
  pattern: ["morning", "corner", "forest", "report", "storm", "north"],
  review: ["glare", "spare"],
  academic: ["import", "export"],
  bonus: "forget" },

/* ═════════════════ TERM 3 · HOMOPHONES AND PATTERNS ═════════════════ */

{ n: 19, focus: "Homophones, review, and academic vocabulary",
  pattern: ["here", "hear", "bare", "bear", "way", "weigh"],
  review: ["order", "forty"],
  academic: ["poem", "fable"],
  bonus: "meet" },

{ n: 20, focus: "More homophones, review, and academic vocabulary",
  pattern: ["piece", "peace", "board", "bored", "hair", "hare"],
  review: ["sport", "torch"],
  academic: ["legend", "myth"],
  bonus: "sail" },

{ n: 21, focus: "The ur sound spelled ur, er and ir, review, and academic vocabulary",
  pattern: ["purple", "curve", "burst", "turkey", "thirsty", "shirt"],
  review: ["waist", "waste"],
  academic: ["service", "survey"],
  bonus: "thirty" },

{ n: 22, focus: "Double consonants in the middle, review, and academic vocabulary",
  pattern: ["happy", "funny", "puppy", "bottle", "common", "rabbit"],
  review: ["perfect", "whisper"],
  academic: ["gravity", "volume"],
  bonus: "letter" },

{ n: 23, focus: "Comparing with -er and -est, review, and academic vocabulary",
  pattern: ["bigger", "biggest", "hotter", "hottest", "louder", "loudest"],
  review: ["dinner", "ribbon"],
  academic: ["increase", "decrease"],
  bonus: "faster" },

{ n: 24, focus: "Compound words, review, and academic vocabulary",
  pattern: ["notebook", "sunset", "bookcase", "classroom", "football", "sunshine"],
  review: ["happier", "happiest"],
  academic: ["rainfall", "landform"],
  bonus: "daylight" },

{ n: 25, focus: "Two consonants in the middle - win-ter, bas-ket - review, and academic vocabulary",
  pattern: ["winter", "cellar", "basket", "welcome", "member", "sudden"],
  review: ["rainbow", "baseball"],
  academic: ["magnet", "fabric"],
  bonus: "picnic" },

{ n: 26, focus: "One consonant in the middle - ti-ger, ca-bin - review, and academic vocabulary",
  pattern: ["cabin", "music", "tiger", "behind", "focus", "belong"],
  review: ["until", "always"],
  academic: ["solar", "data"],
  bonus: "silent" },

{ n: 27, focus: "Adding -ed and -ing, review, and academic vocabulary",
  pattern: ["liked", "rolling", "swimming", "settled", "hurried", "buying"],
  review: ["family", "motel"],
  academic: ["recording", "observing"],
  bonus: "stopped" },

/* ═══════════════════ TERM 4 · ENDINGS AND BUILDING ═══════════════════ */

{ n: 28, focus: "Words ending -tion and -sion, review, and academic vocabulary",
  pattern: ["action", "nation", "question", "attention", "vision", "mission"],
  review: ["diving", "worried"],
  academic: ["fraction", "population"],
  bonus: "portion" },

{ n: 29, focus: "Words ending -ful, review, and academic vocabulary",
  pattern: ["beautiful", "cheerful", "harmful", "playful", "useful", "colorful"],
  review: ["motion", "section"],
  academic: ["resource", "nutrient"],
  bonus: "restful" },

{ n: 30, focus: "Words ending -ly, review, and academic vocabulary",
  pattern: ["lonely", "suddenly", "actually", "rapidly", "lovely", "nicely"],
  review: ["joyful", "painful"],
  academic: ["estimate", "predict"],
  bonus: "quickly" },

{ n: 31, focus: "Words ending -able and -ible, review, and academic vocabulary",
  pattern: ["comfortable", "valuable", "erasable", "available", "portable", "capable"],
  review: ["bravely", "tenderly"],
  academic: ["evidence", "experiment"],
  bonus: "likable" },

{ n: 32, focus: "Changing y to i before an ending, review, and academic vocabulary",
  pattern: ["penny", "pennies", "empty", "emptied", "parties", "families"],
  review: ["sensible", "reusable"],
  academic: ["territory", "boundary"],
  bonus: "cities" },

{ n: 33, focus: "Contractions, review, and academic vocabulary",
  pattern: ["he's", "she's", "didn't", "isn't", "you're", "we're"],
  review: ["married", "carried"],
  academic: ["conclusion", "summary"],
  bonus: "wasn't" },

{ n: 34, focus: "More contractions - will, have and would - review, and academic vocabulary",
  pattern: ["we'll", "I'll", "he'll", "she'll", "you'll", "they'll"],
  review: ["haven't", "don't"],
  academic: ["government", "election"],
  bonus: "he'd" },

{ n: 35, focus: "Words ending in -er, review, and academic vocabulary",
  pattern: ["under", "never", "center", "border", "sister", "whether"],
  review: ["I've", "we'd"],
  academic: ["explorer", "glacier"],
  bonus: "clever" },

{ n: 36, focus: "Words ending -le and -al, review, and academic vocabulary",
  pattern: ["total", "central", "simple", "chuckle", "giggle", "middle"],
  review: ["summer", "finger"],
  academic: ["capital", "material"],
  bonus: "puzzle" },

];

/* The ten scored words in teaching order: this week's rule first, then the
   rule being carried forward, then the content words. Anything that renders a
   sheet reads `words` and does not need to tell the three kinds apart. */
for (const w of WEEKS) {
  w.words = [...w.pattern, ...w.review, ...w.academic];
}

/* ── CHECKS ──
   A word that turns up twice in the year is a wasted week, and a week with the
   wrong count breaks the sheet it prints onto. Both are easy to introduce by
   hand and impossible to spot by reading. Run: node spelling-words.js */
if (require.main === module) {
  const problems = [];

  if (WEEKS.length !== 36) problems.push(`${WEEKS.length} weeks, expected 36`);

  WEEKS.forEach((w, i) => {
    if (w.n !== i + 1) problems.push(`week ${i + 1} is numbered ${w.n}`);
    if (w.words.length !== 10) problems.push(`week ${w.n} has ${w.words.length} words, expected 10`);
    if (w.academic.length !== 2) problems.push(`week ${w.n} has ${w.academic.length} academic, expected 2`);
    if (w.n > 1 && w.review.length !== 2) problems.push(`week ${w.n} has ${w.review.length} review, expected 2`);
    if (w.n === 1 && w.review.length !== 0) problems.push(`week 1 has review, but nothing is taught yet`);
    if (!w.bonus) problems.push(`week ${w.n} has no bonus word`);
    if (!w.focus) problems.push(`week ${w.n} has no focus`);
    /* The label must match what is in the week. A week that says "review" and
       carries none is the sheet lying to the parent. */
    const saysReview = /review/i.test(w.focus);
    if (saysReview !== (w.review.length > 0)) {
      problems.push(`week ${w.n} label says review=${saysReview} but carries ${w.review.length}`);
    }
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
  const n = (k) => WEEKS.reduce((t, w) => t + w[k].length, 0);
  console.log(`OK  ${WEEKS.length} weeks · ${n("pattern")} pattern, ${n("review")} review, ` +
              `${n("academic")} academic, ${WEEKS.length} bonus · ${seen.size} distinct, no sight words.`);
}

module.exports = { WEEKS };
