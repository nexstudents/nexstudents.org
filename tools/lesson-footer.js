/* tools/lesson-footer.js — THE END OF EVERY LESSON, ONE DEFINITION
   ==================================================================
   Built 2026-09-19, after Paul read Finding the Subject and found the bottom of
   the page wrong for the third time:

     "espically along the bottom of these lesson pages and the way the text is
      centered, going back and forth between older and new lesson, pront the
      answers for your results, and even a homework button if one comes
      available and if not it just says unavailable."

   🚨 WHY THIS FILE EXISTS. There are FIVE lesson templates and every one of them
   grew its own ending. Audited 2026-09-19 across all 37 built lessons:

     | piece              | reading(30) | english(3) | integers(2) | division(2) | split(1) |
     | Teacher Notes      |     Y*      |     Y      |      Y      |      Y      |    Y     |
     | results / score    |     Y       |     Y      |      Y      |      Y      |    Y     |
     | Print Answer Sheet |     Y       |     Y      |      .      |      .      |    .     |
     | Retake             |     Y       |     Y      |      .      |      .      |    .     |
     | Homework button    |     .       |     Y      |      .      |      .      |    Y     |
     | prev / next        |     Y       |     Y      |      .      |      .      |    .     |

   * two history lessons have no Teacher Notes at all.

   The homework button existed on THREE lessons out of thirty-seven, which is why
   moving a lesson from one engine to another silently dropped it. That is not a
   bug in a lesson, it is four copies of one idea.

   🚨 WHAT IS SHARED AND WHAT IS NOT, AND WHY THE LINE IS HERE.
   Shared: the homework button, the prev/next arrows, and the CSS for the whole
   closing strip. None of them depend on how a lesson is answered.
   NOT shared: the score itself, the printed answer sheet and retake. A reading
   lesson scores multiple choice, long division scores typed digits, and the
   English worksheet scores tapped words. One "scoring engine" for all three
   would be a lie wrapped around three different things. They stay per engine and
   `check-lesson-parts.js` FAILS THE BUILD if an engine stops emitting them.

   🚨 THE COLOUR TOKENS CHAIN, AND THAT IS DELIBERATE.
   The reading template styles against --rule/--surface/--ink-soft/--verdigris.
   The English one uses --line/--panel/--dim/--a. CLAUDE.md records that using
   one set inside the other renders invisible rules - it has cost real time twice.
   So every colour here is written:
       var(--lf-x, var(--reading-name, var(--english-name, <literal>)))
   A template MAY map --lf-* onto its palette; if it never does, the chain still
   lands on a real colour. The footer cannot go invisible on a template nobody
   remembered to update. Do not "tidy" these into single variables.

   Consumed by: build-lessons.js · build-english.js · build-math.js ·
                build-integers.js · build-split.js
   Each one fills a single __LESSONFOOT__ slot. */
'use strict';

const fs = require('fs');
const path = require('path');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ── the styles ───────────────────────────────────────────────────────────
   Covers the closing strip only: homework button and the prev/next arrows.
   Each engine keeps its own .score / .status rules, because those are its own
   markup; what this guarantees is that the two SHARED pieces look identical on
   every lesson type. */
function footerCss() {
  return `
/* ── the end of the lesson: shared by all five templates (lesson-footer.js) ── */
.lfoot{
  --lf-l: var(--lf-line,   var(--rule,    var(--line,    rgba(255,255,255,.16))));
  --lf-p: var(--lf-panel,  var(--surface, var(--panel,   rgba(255,255,255,.04))));
  --lf-i: var(--lf-ink,    var(--ink,     var(--fg,      #f2f4f7)));
  --lf-d: var(--lf-dim,    var(--ink-soft,var(--dim,     rgba(255,255,255,.62))));
  --lf-a: var(--lf-accent, var(--verdigris, var(--a,     #7fd1c1)));
  margin:26px 0 0;
}
/* The homework row. One button, full width, so it reads as a destination and
   not as a third control beside Print and Retake. */
.lfoot-hw{display:block;width:100%;box-sizing:border-box;text-align:center;
  padding:13px 16px;border:1px solid var(--lf-l);border-radius:10px;
  background:var(--lf-p);color:var(--lf-i);font-weight:600;font-size:.95rem;
  text-decoration:none;line-height:1.35}
a.lfoot-hw:hover{border-color:var(--lf-a);color:var(--lf-i)}
/* 🚨 NO HOMEWORK YET = FADED AND NOT CLICKABLE, and it is a <span>, never an <a>.
   Paul, 2026-09-19: "even a homework button if one comes available and if not it
   just says unavailable." A disabled-looking <a> that still navigates is worse
   than no button, so there is no href to follow in the first place. */
.lfoot-hw.is-off{opacity:.42;border-style:dashed;cursor:default;font-weight:500}
.lfoot-hw small{display:block;font-weight:400;font-size:.8rem;color:var(--lf-d);
  margin-top:2px}

/* ── prev / next ──────────────────────────────────────────────────────────
   🚨 SMALL ARROWS, NOT CARDS. Paul, 2026-09-19: "i want a smaller jump to the
   next and previous lesson arrwo button honestly." They used to be two large
   tiles carrying the full lesson title, which ate the bottom of the page and
   competed with the results. The title is still there for a reader and a screen
   reader, just no longer set at heading size. */
.lfoot-nav{display:flex;align-items:center;gap:10px;margin:16px 0 0;flex-wrap:wrap}
.lfoot-nav a{display:inline-flex;align-items:center;gap:7px;max-width:46%;
  padding:8px 13px;border:1px solid var(--lf-l);border-radius:999px;
  background:var(--lf-p);color:var(--lf-i);text-decoration:none;
  font-size:.86rem;line-height:1.3}
.lfoot-nav a:hover{border-color:var(--lf-a)}
.lfoot-nav a .t{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  color:var(--lf-d)}
.lfoot-nav a .ar{font-size:1rem;line-height:1;color:var(--lf-a);flex:0 0 auto}
.lfoot-nav .next{margin-left:auto}
.lfoot-nav .lfoot-end{margin:0;color:var(--lf-d);font-size:.84rem}
@media (max-width:560px){
  .lfoot-nav a{max-width:100%;flex:1 1 auto;justify-content:center}
  .lfoot-nav .next{margin-left:0}
}
@media print{ .lfoot{display:none!important} }

/* ── ONE CORNER RADIUS, EVERY LESSON TYPE ─────────────────────────────────
   Paul, 2026-09-19: "even on the teacher notes panel you have rounded corners
   but not on the neewer ones they are more angle corners."

   He is right, and it is the same failure as the footer: a shared surface with
   no shared definition. Measured across the two prose engines that evening:

     Teacher Notes    reading 10px   english 4px    <- the same panel, two shapes
     results / score  reading  4px   english 4px
     visual panel     reading 10px   -

   So a student walking from Writing Good Sentences to Simple Subjects saw the
   identical Teacher Notes panel change shape, and inside one reading lesson the
   Teacher Notes and the results panel disagreed with each other.

   🚨 PANELS ARE 10px. PILLS STAY 999px. Those are the only two shapes a lesson
   page uses, and --lf-r is here so a future template can read the number instead
   of typing it again.

   🚨 SCOPED TO THE LESSON WRAPPER, and that is not decoration. This block is
   injected near the TOP of lesson-template.html and at the END of the <style> in
   the other four, so source order cannot be relied on to win. .wrap/.wrapx is

   ⚠️ AND NOTE WHAT THE CSS COMMENTS HERE MUST NEVER DO: name a slot token. The
   generators fill slots with a plain .replace, which takes the FIRST match, so a
   token spelled inside this string gets substituted into the page and the
   unfilled-slot guard then fails on the copy it just injected. That is exactly
   how this block failed its first build, and split/template.html already carried
   the same warning. Spell it "the CSS slot", never the token itself.

   .wrap/.wrapx puts these at
   two-class specificity, which beats each template's own single-class rule
   wherever the block happens to sit. Do not "simplify" these to bare classes. */
.wrap, .wrapx{ --lf-r:10px }
.wrap .ground,   .wrapx .ground,
.wrap .score,    .wrapx .score,
.wrap .status,   .wrapx .status,
.wrap .scorebar, .wrapx .scorebar,
.wrap .dbox,     .wrapx .dbox,
.wrap .lfoot-hw, .wrapx .lfoot-hw{ border-radius:var(--lf-r,10px) }
`;
}

/* ── the homework button ──────────────────────────────────────────────────
   `sheet` on a lesson names a worksheet slug. The real page is the /print/ one,
   never the folder index: the folder is the SHOP page (price, Add To Cart), and
   sending a student who just finished the lesson to a checkout for something he
   already owns is the bug Paul caught on 2026-09-17.

   ⚠️ IT FAILS THE BUILD ON A MISSING PAGE rather than shipping a dead link, so
   build-worksheets.js has to run before any lesson generator. That order is in
   tools/README.md. */
function homeworkCta(L, ROOT, subjectHint) {
  const sheet = L.sheet;
  if (!sheet) {
    return '<span class="lfoot-hw is-off" aria-disabled="true">' +
      'Homework Sheet: Unavailable' +
      '<small>There is no homework sheet for this lesson yet.</small></span>';
  }
  const subject = String(
    sheet.subject || (L.shelf && L.shelf.subject) || subjectHint || 'english'
  ).toLowerCase();
  const base = '/worksheets/' + subject + '/' + sheet.slug + '/';
  const href = base + 'print/';
  if (ROOT) {
    const disk = path.join(ROOT, href.slice(1), 'index.html');
    if (!fs.existsSync(disk)) {
      console.error('FAIL: ' + (L.id || L.slug) +
        ': links a homework sheet that is not built - ' + href +
        '\n      Run build-worksheets.js before this generator.');
      process.exit(1);
    }
  }
  const note = sheet.note
    ? '<small>' + esc(sheet.note) + '</small>'
    : '<small>Print it and do it on paper.</small>';
  return '<a class="lfoot-hw" href="' + href + '">Open The Homework Sheet' + note + '</a>';
}

/* ── WHO IS NEXT, ACROSS ALL FIVE REGISTRIES ──────────────────────────────
   🚨 THIS IS THE ACTUAL "CONFLICTING LESSON STRUCTURE" PAUL HIT.
   English Unit 1 runs L1..L9, and those nine lessons are spread over THREE
   registries and three engines:

     L1 Kinds of Sentences                    lessons.js        reading
     L2 Writing Good Sentences                lessons.js        reading
     L3 Complete Subjects and Predicates      split-lessons.js  split
     L4 Simple Subjects and Simple Predicates english-lessons   worksheet
     L6 Finding the Subject                   lessons.js        reading

   Every generator used to look for a neighbour inside ITS OWN registry only, so
   L3 could never find L2 or L4 and the chain broke at every engine boundary.
   That is why the arrows sent you "back and forth between older and new lesson"
   and then dead-ended. A unit is one sequence to a student; which generator
   built a given page is an implementation detail he should never feel.

   So the lookup reads EVERY registry and matches on subject + unit + n.
   ⚠️ Required lazily, inside the function: build-lessons.js requires this file
   while lessons.js is still being evaluated, and requiring it at module scope
   would hand back a half-built export. */
let _all = null;
function allLessons() {
  if (_all) return _all;
  const out = [];
  const add = (arr) => {
    (arr || []).forEach((L) => {
      if (L && L.id && L.seq) out.push(L);
    });
  };
  const tryLoad = (file, key) => {
    try { add(require('./' + file)[key]); } catch (e) { /* a registry may not exist yet */ }
  };
  tryLoad('lessons.js', 'LESSONS');
  tryLoad('english-lessons.js', 'ENGLISH');
  tryLoad('split-lessons.js', 'SPLIT');
  tryLoad('math-lessons.js', 'MATH');
  tryLoad('integers-lessons.js', 'INTEGERS');
  _all = out;
  return out;
}

/* The subject a lesson belongs to is the first segment of its id, which is the
   same rule build-lessons.js uses to decide the output folder. */
function subjectOf(L) { return String(L.id).split('/')[0]; }

/* 🚨 GRADE IS PART OF THE MATCH. Since 2026-09-25 every grade has a unit 4
   (k8-plan.js), so "same subject, same unit number" alone would chain a grade 3
   lesson to a grade 4 one. */
function gradeOf(L) {
  const s = L.shelf || {};
  return String((s.grades && s.grades[0]) != null ? s.grades[0] : s.grade).toLowerCase();
}

function siblings(L) {
  if (!L.seq) return { prev: null, next: null };
  const mine = subjectOf(L);
  const at = (n) => allLessons().find((o) =>
    o.id !== L.id &&
    subjectOf(o) === mine &&
    gradeOf(o) === gradeOf(L) &&
    o.seq.unit === L.seq.unit &&
    o.seq.n === n) || null;
  return { prev: at(L.seq.n - 1), next: at(L.seq.n + 1) };
}

/* ── prev / next ──────────────────────────────────────────────────────────
   `unitTitle` only labels the end of a unit. */
function unitNav(prev, next, unitTitle) {
  /* 🚨 NO NEIGHBOURS AT ALL = NO ROW. The four maths and integers lessons carry
     no `seq`, so they are not in a numbered unit; printing "Last lesson in this
     unit" under them would be inventing a unit they were never put in. */
  if (!prev && !next) return '';
  const link = (l, dir) => {
    const arrow = dir === 'prev' ? '&larr;' : '&rarr;';
    const word = dir === 'prev' ? 'Previous' : 'Next';
    const cls = dir === 'prev' ? 'prev' : 'next';
    const bits = dir === 'prev'
      ? '<span class="ar">' + arrow + '</span><span class="t">' + esc(l.title) + '</span>'
      : '<span class="t">' + esc(l.title) + '</span><span class="ar">' + arrow + '</span>';
    return '<a class="' + cls + '" href="/lessons/' + l.id + '/" ' +
      'aria-label="' + esc(word + ' lesson: ' + l.title) + '" ' +
      'title="' + esc(word + ': ' + l.title) + '">' + bits + '</a>';
  };
  const parts = [];
  if (prev) parts.push(link(prev, 'prev'));
  if (next) parts.push(link(next, 'next'));
  else parts.push('<p class="lfoot-end next">Last lesson in ' +
    esc(unitTitle || 'this unit') + '.</p>');
  if (!parts.length) return '';
  return '<div class="lfoot-nav" role="navigation" aria-label="Lesson navigation">' +
    parts.join('') + '</div>';
}

/* ── the whole strip ──────────────────────────────────────────────────────
   What every generator drops into its single __LESSONFOOT__ slot. The score,
   the Print Answer Sheet button and Retake are emitted by the engine ABOVE this
   point, because each engine scores its own work. */
function lessonFoot(L, opts) {
  const o = opts || {};
  /* A caller may pass its own neighbours; otherwise they are resolved across
     every registry, which is the only way a unit split over three engines keeps
     one unbroken chain. */
  const sib = (o.prev !== undefined || o.next !== undefined)
    ? { prev: o.prev || null, next: o.next || null }
    : siblings(L);
  return '<div class="lfoot">\n  ' +
    homeworkCta(L, o.root, o.subject) + '\n  ' +
    unitNav(sib.prev, sib.next, o.unitTitle || (L.seq && L.seq.unitTitle)) +
    '\n</div>';
}

/* 🚨 WHAT EVERY BUILT LESSON PAGE MUST CARRY. check-lesson-parts.js reads this
   list, so adding a row here adds it to the guard for all five engines at once.
   Each entry: [human name, regex the built page must match]. */
const REQUIRED = [
  ['Teacher Notes',      /class="ground"|id="ground"/],
  ['results / score',    /id="score"|id="scorebar"/],
  ['Print Answer Sheet', /id="printKey"/],
  ['Retake',             /id="retake"/],
  ['Homework button',    /class="lfoot-hw/],
  ['prev \/ next',       /class="lfoot-nav"/],
];

module.exports = { footerCss, homeworkCta, unitNav, lessonFoot, siblings, allLessons, REQUIRED, esc };
