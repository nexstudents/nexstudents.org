/* ─────────────────────────────────────────────────────────────────────────
   INTEGERS LESSON DATA. One entry per lesson.

   ⭐ RULES FIRST, ON PURPOSE.
   Paul, 2026-08-30, comparing how he learned this in the 1990s with how
   Spectrum Math Grade 7 teaches it: *"i like that way then because we should
   get things quicker so lets do that approach if possible. we should nto over
   complicate it."* Spectrum builds the number line across five lessons and
   lets the rules emerge at the end. We state the rule, walk through two
   examples, then drill. It collapses to two lessons, because subtraction
   becomes a conversion into addition rather than its own skill.

   ⚠️ THE FAST ROUTE MUST NOT STATE THE RULE LOOSELY. "Two negatives make a
   positive" is FALSE for addition: -3 + (-5) is -8. build-integers.js refuses
   to build a lesson whose short rule matches that phrasing. Keep the full
   conditional.

   ⭐ NO DUPLICATED EXPLANATION. Paul, same day: *"i think you doubled up the
   sign part of the number and the lesson"* and *"it doesnt need to be so long
   you know."* The rule is stated ONCE in `rule`, summarised ONCE in
   `signTable`, and then DEMONSTRATED in `demo`. There is no prose section
   restating it a third time. Do not add one back.

   SHAPE
     ground     the teaching half for the PARENT, which workbooks leave out
     rule       short / long / test
     signTable  the chart, as data
     demo       the worked examples the walkthrough steps through
     practice   a SPEC, not a list - problems reseed daily
     todo       what the questions involve and what to do

   🚨 PUBLIC SITE. No student's name, no aviation framing. Settled 2026-08-29,
   and it is what lets this same page be the one Kolten is graded on in HG.

   practice spec:
     count  how many problems   kind  "add" or "subtract"
     max    largest absolute value    mix   sign combinations, all must appear
   ───────────────────────────────────────────────────────────────────────── */

/* One lesson, one file, filed under its own grade / subject / unit.
   Add a lesson by dropping a file in the right folder and listing it here. */
const INTEGERS = [
  require('./content/grade-6/maths/unit-1/adding-integers'),
  require('./content/grade-6/maths/unit-1/subtracting-integers'),
];

module.exports = { INTEGERS };
