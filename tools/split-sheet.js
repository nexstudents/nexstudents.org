/* ─────────────────────────────────────────────────────────────────────────
   THE SPLIT WORKSHEET — the paper half of a split lesson.

   🚨 THE SENTENCES COME FROM THE LESSON, NEVER FROM A SECOND COPY. It reads
   `split-lessons.js`, the same file the page is generated from, so the sheet
   and the lesson cannot drift apart. Retyping seven sentences into
   worksheets.js is exactly how the nav and the drawer ended up disagreeing.

   🚨 NOTHING ON THIS SHEET USES COLOUR TO CARRY MEANING. Paul, 2026-09-08:
   "dont do alot of boarders or backgrounds i only have a black and white
   printer." The lesson teaches with green and orange; the sheet says the same
   thing with a printed rule and a drawn line, because a colour printed grey is
   a worksheet that cannot be answered.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

const { SPLIT } = require('./split-lessons.js');

function lessonFor(slug) {
  const L = SPLIT.find((x) => x.slug === slug);
  if (!L) {
    console.error('FAIL: split worksheet names a lesson that does not exist: ' + slug);
    process.exit(1);
  }
  return L;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

/* Part A: the sentence, spaced out, with room to draw the line between words.
   The gaps are real spacing rather than printed marks - a printed tick at every
   gap would be the answer sheet doing the looking for him. */
function partAItem(P, n) {
  const words = P.sentence.split(' ').map((w) => '<span>' + esc(w) + '</span>').join('');
  return '<li><b>' + (n + 1) + '.</b><p class="spl">' + words + '</p></li>';
}

/* Part B: one half is already marked, and it is marked with a RULE, not a fill.
   The student writes which half it is on the line beside it. */
function partBItem(S, n) {
  const w = S.sentence.split(' ');
  const a = w.slice(0, S.split).join(' ');
  const b = w.slice(S.split).join(' ');
  const marked = S.shaded === 'subject'
    ? '<u class="mk">' + esc(a) + '</u> <span class="pl">' + esc(b) + '</span>'
    : '<span class="pl">' + esc(a) + '</span> <u class="mk">' + esc(b) + '</u>';
  return '<li><b>' + (n + 1) + '.</b><div class="sortrow">' +
         '<p class="sortsent">' + marked + '</p>' +
         '<p class="sortans">The underlined half is the <u></u></p></div></li>';
}

function keyItem(P) {
  const w = P.sentence.split(' ');
  return '<li>' + esc(w.slice(0, P.split).join(' ')) + ' <b>|</b> ' +
         esc(w.slice(P.split).join(' ')) + '</li>';
}

/* 🚨 PART C IS THE ONLY PART THE PAGE CANNOT DO. Paul, 2026-09-09: "it needs a
   spot for the student to write a personal sentence they write. like write your
   own sentence and point out which side is the complete subject and complete
   predicate."
   Everything above this checks whether he can find a line someone else drew.
   This checks whether he can build a sentence and then take it apart, which is
   what the lesson is actually for.
   ⚠️ It has no answer key and must not pretend to. The key says what to LOOK FOR
   instead, because the only wrong answer here lives in a sentence nobody has
   seen yet. */
function ownItem(n) {
  return '<li><b>' + (n + 1) + '.</b><div class="ownrow">' +
         '<p class="ownline"><span class="olbl">My sentence</span><u></u></p>' +
         '<p class="ownhalf"><span class="olbl">Complete subject</span><u></u></p>' +
         '<p class="ownhalf"><span class="olbl">Complete predicate</span><u></u></p>' +
         '</div></li>';
}

function keyItemB(S) {
  return '<li>' + (S.shaded === 'subject' ? 'complete subject' : 'complete predicate') + '</li>';
}

function splitSheetBody(s) {
  const L = lessonFor(s.lesson);
  return `
  <h2 class="scored">Part A &mdash; Place the line <span class="pts"><u></u> / ${L.practice.length}</span></h2>
  <p class="inst">${s.noteA}</p>
  <ul class="splits">
    ${L.practice.map(partAItem).join('\n    ')}
  </ul>

  <h2 class="scored">Part B &mdash; Name the half <span class="pts"><u></u> / ${L.sort.length}</span></h2>
  <p class="inst">${s.noteB}</p>
  <ul class="sorts">
    ${L.sort.map(partBItem).join('\n    ')}
  </ul>

  <h2 class="scored">Part C &mdash; Write your own <span class="pts"><u></u> / ${s.ownCount}</span></h2>
  <p class="inst">${s.noteC}</p>
  <ul class="owns">
    ${Array.from({ length: s.ownCount }, function (_, i) { return ownItem(i); }).join('\n    ')}
  </ul>

  <div class="key">
    <h2>Answer key</h2>
    <p class="kv"><b>Part A</b> &mdash; the line goes where the bar is.</p>
    <ol>
      ${L.practice.map(keyItem).join('\n      ')}
    </ol>
    <p class="kv"><b>Part B</b></p>
    <ol>
      ${L.sort.map(keyItemB).join('\n      ')}
    </ol>
    <p class="kv"><b>Part C</b> &mdash; answers vary. Look for a complete subject that keeps every
      word telling you WHICH one, and a complete predicate that starts at the verb and runs to the
      end. A subject cut short &mdash; <em>The man</em> where the sentence says <em>The man behind
      the paint counter</em> &mdash; is the mistake to watch for.</p>
  </div>
`;
}

module.exports = { splitSheetBody, lessonFor };
