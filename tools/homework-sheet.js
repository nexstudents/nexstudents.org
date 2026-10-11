/* ─────────────────────────────────────────────────────────────────────────
   THE HOMEWORK SHEET — the paper half of an English lesson.

   🚨 A HOMEWORK SHEET CARRIES ITS OWN SENTENCES, and that is the opposite of
   what split-sheet.js does. The split sheet reads its sentences out of the
   lesson so the two can never drift. A homework sheet must NOT.
   Paul, 2026-09-17: "please use different examples for the worksheet not the
   same exact examples ... this is a homework worksheet so it's a different
   thing."
   The reason follows from what it is FOR. The lesson page is retry-until-right
   on purpose, so a student reaches the end of it having been shown every
   answer. Reprinting those same sentences asks him to remember them, and
   remembering an answer he saw an hour ago is not the skill. Paul again:
   "these are like ones to make sure that you actually understand what you're
   learning and not you're not just pressing a bunch of multiple choices and
   skipping through the lesson."

   🔑 SO THE GUARD IS INVERTED. split-sheet.js exists to guarantee the sheet
   MATCHES its lesson; `checkFresh` below fails the build when a sentence on the
   sheet ALSO appears in the lesson, in its questions, its prose, its marked
   story or its worked examples. Same instinct, opposite direction: the build
   refuses to ship a sheet whose relationship to its lesson is wrong.

   ⚠️ SAME WORLD THOUGH, NEVER A SECOND ONE. The airfield lesson gets an
   airfield sheet and the baseball lesson gets a baseball sheet. A new setting
   on the homework is one more thing to absorb at the exact moment he is
   supposed to be proving he learned the first.

   🚨 NOTHING HERE USES COLOUR TO CARRY MEANING. Paul, 2026-09-08: "dont do alot
   of boarders or backgrounds i only have a black and white printer." Halves are
   shown with a printed rule and a drawn line, never a fill.

   ── THE PART KINDS ────────────────────────────────────────────────────────
   A sheet is `parts: [...]`, each { kind, heading, note, items }.

     divide   draw the line between the two halves.   item: { sentence, split }
     circle   circle the word or words asked for.     item: { sentence, ask, words }
     name     write the answer(s) on the rules.       item: { sentence, mark?, answers[] }
     combine  fold short sentences into one.          item: { given[], answer }
     own      write your own. NO KEY, by design.      item: { ask, markLabel }
     solve    a Math problem, work lines, an answer.  item: { problem, answer, calc? }

   🚨 `solve` (Math, 2026-10-05). Paul: "there is not full examples or questions
   that put that into practice what he learned." A numeric answer carries `calc`,
   the arithmetic that produces it, and the build FAILS when the two disagree, so
   a wrong key cannot ship. calc is plain arithmetic plus r(x,n) to round to n
   places, up(x,n) to round up, and down(x,n). A non-numeric answer ("yes, it is
   reasonable") has no calc and says why in `answer`.

   `name` takes `labels: [...]` on the part, one per rule. `mark` underlines one
   half of the sentence with a rule, for a "name the half" question.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

const { ENGLISH } = require('./english-lessons.js');
const { SPLIT } = require('./split-lessons.js');

function fail(msg) { console.error('FAIL: ' + msg); process.exit(1); }

/* A lesson may live in any registry, so look in all of them rather than making
   the sheet declare which file its lesson happens to sit in. Math reading
   lessons live in lessons.js, keyed by id ("maths/dividing-decimals"). */
function lessonFor(slug) {
  const { LESSONS } = require('./lessons.js');
  const L = ENGLISH.find((x) => x.slug === slug) || SPLIT.find((x) => x.slug === slug) ||
            LESSONS.find((x) => x.id === slug);
  if (!L) fail('homework sheet names a lesson that does not exist: ' + slug);
  return L;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const asList = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
const bare = (w) => String(w).replace(/[^A-Za-z']/g, '').toLowerCase();
const norm = (s) => String(s).toLowerCase().replace(/[^a-z ]/g, '').replace(/\s+/g, ' ').trim();

/* ── the guard ──────────────────────────────────────────────────────────── */
function checkFresh(s, L) {
  const seen = new Map();
  const note = (t, where) => { const k = norm(t); if (k) seen.set(k, where); };

  [].concat(L.practice || [], L.sort || [], L.choose || [])
    .forEach((p) => p.sentence && note(p.sentence, 'a question'));
  (L.parts || []).forEach((pt) => (pt.s || []).forEach((line) =>
    note(String(line).replace(/^\[(ex|verse)\] /, ''), 'the lesson prose')));
  (L.showcase || []).forEach((sc) => note(sc.sentence, 'the marked story'));
  (L.examples || []).forEach((e) => note(Array.isArray(e) ? e[0] : e.sentence, 'a worked example'));

  const sentences = [];
  const problems = [];
  (s.parts || []).forEach((part) => (part.items || []).forEach((it) => {
    if (it.sentence) sentences.push(it.sentence);
    (it.given || []).forEach((g) => sentences.push(g));
    if (it.problem) problems.push(it.problem);
    (it.sub || []).forEach((q) => q.q && problems.push(q.q));
  }));
  if (!sentences.length && !problems.length) fail(s.slug + ': the sheet has no sentences of its own');

  /* ⚠️ A Math problem is mostly digits, and norm() strips digits, so "0.7 ÷ 0.05"
     and "3.2 ÷ 0.4" would both collapse to nothing. Problems are compared
     with their numbers kept: same rule, the lesson's own example is not homework. */
  const keep = (t) => String(t).toLowerCase().replace(/\[(ex|verse|story)\] /, '')
    .replace(/\s+/g, ' ').trim();
  const shown = new Set();
  (L.parts || []).forEach((pt) => (pt.s || []).forEach((line) => shown.add(keep(line))));
  (L.questions || []).forEach((q) => shown.add(keep(q.q)));
  const localP = new Set();
  const shownList = [...shown];
  problems.forEach((p) => {
    /* inside a line too: the lesson writes "[ex] 0.7 ÷ 0.05 = 14", the sheet "0.7 ÷ 0.05" */
    const kp = keep(p);
    if (shown.has(kp) || (/\d/.test(kp) && kp.length >= 5 && shownList.some((l) => l.includes(kp))))
      fail(s.slug + ' prints a problem the lesson already worked:\n        ' + p +
           '\n      Change the numbers. Homework that reprints the example tests memory, not the skill.');
    if (localP.has(keep(p))) fail(s.slug + ': this problem is printed twice:\n        ' + p);
    localP.add(keep(p));
  });

  sentences.forEach((sent) => {
    const hit = seen.get(norm(sent));
    if (hit)
      fail(s.slug + ' reuses a sentence the lesson already showed him, as ' + hit + ':\n        ' +
           sent + '\n      Homework that reprints a practice sentence tests his memory of the' +
           '\n      page, not whether he can work the rule. Write a different one.');
  });

  const local = new Set();
  sentences.forEach((sent) => {
    const k = norm(sent);
    if (local.has(k)) fail(s.slug + ': this sentence is printed twice on the sheet:\n        ' + sent);
    local.add(k);
  });
}

/* 🚨 THE KEY IS COMPUTED, NOT TRUSTED. `calc` is evaluated and must equal the
   number in `answer` (commas, $ and units ignored). Only digits, operators,
   brackets and the three rounding helpers are allowed through, so this can
   never run anything but arithmetic. */
function checkSolve(it, where) {
  if (!it.problem || it.answer == null || String(it.answer).trim() === '')
    fail(where + ': a solve item needs a problem and an answer for the key');
  /* 🚨 A WORD CHECK MUST AGREE WITH ITS KEY (2026-10-11). The box is marked
     against `check`, the printed key shows `answer`; if one of check's words
     is not in the answer, the two say different things and one of them is
     wrong. Same matcher the page uses: whole words, "a|b" = either. */
  const sp = (x) => String(x).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/ +/g, ' ').trim();
  const words = (c) => (typeof c === 'string' ? [c] : c && typeof c === 'object' && !Array.isArray(c)
    ? Object.values(c).filter((x) => typeof x === 'string') : []);
  words(it.check).forEach((c) => {
    if (c === 'none') return;
    const alts = c.split('|').map(sp);
    if (alts.some((a) => !a)) fail(where + ': an empty alternative in check "' + c + '"');
    const t = ' ' + sp(it.answer) + ' ';
    if (!alts.some((a) => t.indexOf(' ' + a + ' ') > -1))
      fail(where + ': check "' + c + '" does not appear in the key answer "' + it.answer + '"');
  });
  if (it.calc == null) return;
  const src = String(it.calc);
  if (!/^[0-9+\-*/(). ,]*$/.test(src.replace(/\b(r|up|down)\(/g, '(')))
    fail(where + ': calc may only hold arithmetic and r()/up()/down(): ' + src);
  const p = (n) => Math.pow(10, n);
  const r = (x, n) => Math.round((x + Number.EPSILON) * p(n)) / p(n);
  const up = (x, n) => Math.ceil(x * p(n) - 1e-9) / p(n);
  const down = (x, n) => Math.floor(x * p(n) + 1e-9) / p(n);
  let got;
  try { got = Function('r', 'up', 'down', '"use strict"; return (' + src + ');')(r, up, down); }
  catch (e) { fail(where + ': calc does not evaluate: ' + src); }
  const m = String(it.answer).replace(/,/g, '').match(/-?\d*\.?\d+/);
  if (!m) fail(where + ': calc is given but the answer has no number in it: ' + it.answer);
  if (Math.abs(got - Number(m[0])) > 1e-9)
    fail(where + ': the key says ' + it.answer + ' but ' + src + ' = ' + got +
         '\n      Problem: ' + it.problem);
}

/* every answer word has to be findable, exactly once, in its own sentence, or
   the key points at nothing */
function checkItems(s) {
  (s.parts || []).forEach((part) => (part.items || []).forEach((it, n) => {
    const where = s.slug + ' ' + part.kind + ' ' + (n + 1);
    if (part.kind === 'circle') {
      const words = it.sentence.split(' ').map(bare);
      asList(it.words).forEach((wd) => {
        const hits = words.filter((x) => x === bare(wd)).length;
        if (hits === 0) fail(where + ': the answer "' + wd + '" is not in "' + it.sentence + '"');
        if (hits > 1) fail(where + ': "' + wd + '" appears ' + hits + ' times, so the key is ambiguous');
      });
      if (!asList(it.words).length) fail(where + ': needs at least one answer word');
    }
    if (part.kind === 'divide' || (part.kind === 'name' && it.mark)) {
      const at = part.kind === 'divide' ? it.split : it.mark.split;
      const w = it.sentence.split(' ');
      if (typeof at !== 'number' || at < 1 || at >= w.length)
        fail(where + ': split ' + at + ' is not inside "' + it.sentence + '"');

      /* ⭐ A COMPLETE SUBJECT CANNOT END ON A WORD THAT IS STILL POINTING AT
         SOMETHING. Four of the first six splits written for this sheet cut one
         word short - "The tallest player on our | team pitched..." - and the
         answer key would have taught that division as correct. The build cannot
         know where the real boundary is, but it CAN know that a half ending on
         an article or a preposition is unfinished, which is exactly how every
         one of those four went wrong. */
      const DANGLING = ["the", "a", "an", "of", "in", "on", "at", "to", "for",
                        "from", "with", "by", "near", "behind", "under", "over",
                        "and", "or", "but", "his", "her", "its", "their", "our", "my"];
      const last = bare(w[at - 1]);
      if (DANGLING.indexOf(last) >= 0)
        fail(where + ': the first half ends on "' + last + '", which is still pointing at'
             + ' something. Move the split right so the half is finished.  '
             + w.slice(0, at).join(' ') + ' | ' + w.slice(at).join(' '));
    }
    if (part.kind === 'name' && (!asList(it.answers).length))
      fail(where + ': a name item needs its answers for the key');
    if (part.kind === 'combine' && (!it.given || it.given.length < 2 || !it.answer))
      fail(where + ': a combine item needs two or more given sentences and an answer');
    if (part.kind === 'solve' && it.sub) {
      if (!it.problem) fail(where + ': a lettered set needs its stem in `problem`');
      it.sub.forEach((q, k) => checkSolve({ problem: q.q, answer: q.answer, calc: q.calc, check: q.check },
        where + String.fromCharCode(97 + k)));
    } else if (part.kind === 'solve') checkSolve(it, where);
  }));
}

/* ── the parts ──────────────────────────────────────────────────────────── */
const spaced = (sentence) =>
  sentence.split(' ').map((w) => '<span>' + esc(w) + '</span>').join('');

function divideItem(it, n) {
  return '<li><b>' + (n + 1) + '.</b><p class="spl">' + spaced(it.sentence) + '</p></li>';
}

function circleItem(it, n, part) {
  const ask = it.ask || part.ask || '';
  /* 🚨 THE VERB IS SAID ONCE, IN THE PART NOTE - NOT ON EVERY ROW. Six rows
     each reading "Circle the simple predicate" is one sentence printed six
     times, and the length of that phrase is what forced it to wrap mid-word
     on the rendered sheet. What changes row to row is only WHICH half, so
     that is all this column carries. Seen 2026-09-17 on a real render. */
  const tail = ask ? '<p class="sortans"><u>' + esc(ask) + '</u></p>' : '';
  return '<li><b>' + (n + 1) + '.</b><p class="spl">' + spaced(it.sentence) + '</p>' + tail + '</li>';
}

/* One half marked with a RULE rather than a fill, so it survives a black and
   white printer. */
function markedSentence(it) {
  if (!it.mark) return esc(it.sentence);
  const w = it.sentence.split(' ');
  const a = w.slice(0, it.mark.split).join(' ');
  const b = w.slice(it.mark.split).join(' ');
  return it.mark.shaded === 'second'
    ? '<span class="pl">' + esc(a) + '</span> <u class="mk">' + esc(b) + '</u>'
    : '<u class="mk">' + esc(a) + '</u> <span class="pl">' + esc(b) + '</span>';
}

function nameItem(it, n, part) {
  const labels = part.labels || [''];
  const rules = labels.map((l) =>
    '<p class="ownhalf"><span class="olbl">' + esc(l) + '</span><u></u></p>').join('');
  return '<li><b>' + (n + 1) + '.</b><div class="ownrow">' +
         '<p class="sortsent">' + markedSentence(it) + '</p>' + rules + '</div></li>';
}

function combineItem(it, n, part) {
  return '<li><b>' + (n + 1) + '.</b><div class="ownrow">' +
         it.given.map((g) => '<p class="sortsent">' + esc(g) + '</p>').join('') +
         '<p class="ownline"><span class="olbl">' + esc(part.lineLabel || 'One sentence') +
         '</span><u></u></p></div></li>';
}

function ownItem(it, n) {
  return '<li><b>' + (n + 1) + '.</b><div class="ownrow">' +
         '<p class="ownline"><span class="olbl">' + esc(it.ask) + '</span><u></u></p>' +
         (it.markLabel
           ? '<p class="ownhalf"><span class="olbl">' + esc(it.markLabel) + '</span><u></u></p>'
           : '') +
         '</div></li>';
}

/* 🚨 COMPACT BY DEFAULT. Paul, 2026-10-05: "you dont need to give so many lines
   for the answers ... you have alot of wasted space just for lines." A problem
   and its answer rule share ONE row. Work rules are added only where `lines`
   is set, on the item or the part, for the multi-step ones that need room. */
const workLines = (k) => Array.from({ length: k || 0 }, () => '<p class="ownline"><u></u></p>').join('');

/* ── TYPE IT IN AND CHECK IT (2026-10-11) ───────────────────────────────────
   Paul: "i would even test you to make interactive worksheets ... saves me on
   paper. but i dont want to spend hours trying to make sure the interactive
   sheet actually work". So the PRINT page is the online page too: every blank
   that has a checkable answer is a box, and Check My Answers marks each one.
   Printed, the boxes are just the blanks they replaced. One page, one source.
   An item's check is `check` if it has one, otherwise the number its `calc`
   produces. A check is a number, a list of numbers (any order), a word
   ("none" also takes "no"), or { Label: check, ... } for several boxes.
   An item with neither is checked BY HIM against the key, and the score says so. */
const calcValue = (src) => {
  const p = (n) => Math.pow(10, n);
  const r = (x, n) => Math.round((x + Number.EPSILON) * p(n)) / p(n);
  const up = (x, n) => Math.ceil(x * p(n) - 1e-9) / p(n);
  const down = (x, n) => Math.floor(x * p(n) + 1e-9) / p(n);
  return Function('r', 'up', 'down', '"use strict"; return (' + src + ');')(r, up, down);
};
let ONLINE = false;   /* set per sheet in homeworkSheetBody: only `online: true` sheets get boxes */
function checkFor(it) {
  if (!ONLINE) return null;
  if (it.check != null) return it.check;
  if (it.calc != null) return calcValue(String(it.calc));
  return null;
}
const attr = (s) => esc(s).replace(/"/g, '&quot;');
function blank(check, aria) {
  if (check == null) return '<u></u>';
  return '<u class="hwu"><input class="hwin" type="text" autocomplete="off" spellcheck="false" placeholder="Type here" aria-label="' +
    attr(aria) + '" data-check="' + attr(JSON.stringify(check)) + '"></u>';
}
const answerRow = (text, label, check) => {
  const head = '<p class="ownline' + (!ONLINE ? '' : check != null ? ' hwitem' : ' hwself') + '"><span class="hwq">' + esc(text) + '</span>';
  if (check != null && typeof check === 'object' && !Array.isArray(check)) {
    return head + Object.keys(check).map((k) =>
      '<span class="olbl hwa">' + esc(k) + '</span>' + blank(check[k], k)).join('') + '</p>';
  }
  return head + '<span class="olbl hwa">' + esc(label || 'Answer') + '</span>' + blank(check, label || 'Answer') + '</p>';
};

/* A blank number line to plot on. Geometry only, so it is SVG; every label is
   real text (a font), never drawn glyphs. Ticks every `step`, a label on each
   tick while there are 11 or fewer, otherwise on every other one. */
function numberLine(nl) {
  const n = Math.round((nl.to - nl.from) / nl.step);
  const dp = Math.max(0, (String(nl.step).split('.')[1] || '').length);
  const W = 600, L = 20, R = 580, every = n > 10 ? 2 : 1;
  let ticks = '';
  for (let i = 0; i <= n; i++) {
    const x = L + (R - L) * i / n;
    ticks += '<line x1="' + x + '" y1="18" x2="' + x + '" y2="32" stroke="#000" stroke-width="1"/>';
    if (i % every === 0)
      ticks += '<text x="' + x + '" y="48" font-size="12" text-anchor="middle">' +
               (nl.from + nl.step * i).toFixed(dp) + '</text>';
  }
  return '<svg class="hwnl" viewBox="0 0 ' + W + ' 56" width="100%" role="img" aria-label="number line from ' +
         nl.from + ' to ' + nl.to + '"><line x1="' + (L - 12) + '" y1="25" x2="' + (R + 12) +
         '" y2="25" stroke="#000" stroke-width="1.5"/>' + ticks + '</svg>';
}

/* A small data table for an Applications set. Thin rules only (black and
   white printer), no fills. */
function dataTable(rows) {
  return '<table class="hwtab">' + rows.map((r, i) => '<tr>' +
    r.map((c) => (i === 0 ? '<th>' : '<td>') + esc(c) + (i === 0 ? '</th>' : '</td>')).join('') +
    '</tr>').join('') + '</table>';
}

function solveItem(it, n, part) {
  const lines = it.lines != null ? it.lines : part.lines;
  let body;
  if (it.sub) {
    body = '<p class="sortsent">' + esc(it.problem) + '</p>' + (it.table ? dataTable(it.table) : '') +
      it.sub.map((q, k) => answerRow(String.fromCharCode(97 + k) + '. ' + q.q, part.answerLabel, checkFor(q)) +
        workLines(q.lines != null ? q.lines : lines)).join('');
  } else if (it.numberline) {
    body = '<p class="sortsent">' + esc(it.problem) + '</p>' + numberLine(it.numberline) +
      answerRow('', part.answerLabel, checkFor(it));
  } else {
    body = answerRow(it.problem, part.answerLabel, checkFor(it)) + workLines(lines);
  }
  return '<li><b>' + (n + 1) + '.</b><div class="ownrow">' + body + '</div></li>';
}
const weight = (it) => (it.sub ? it.sub.length : 1);

const RENDER = {
  solve: { cls: 'owns', item: solveItem },
  divide: { cls: 'splits', item: divideItem },
  circle: { cls: 'splits', item: circleItem },
  /* ⚠️ `owns`, NOT `sorts`. A name item is built out of .ownrow and .ownhalf,
     and worksheet.css styles those write-on rules under .owns only. Inside a
     .sorts list the labels render with no line to write on at all, which is how
     this shipped the first time. */
  name: { cls: 'owns', item: nameItem },
  combine: { cls: 'owns', item: combineItem },
  own: { cls: 'owns', item: ownItem },
};

const LETTER = ['A', 'B', 'C', 'D', 'E', 'F'];

function partHtml(part, i) {
  const r = RENDER[part.kind];
  if (!r) fail('unknown homework part kind: ' + part.kind);
  const items = (part.items || []).map((it, n) => r.item(it, n, part)).join('\n    ');
  return `
  <h2 class="scored">Part ${LETTER[i]} &mdash; ${part.heading} <span class="pts"><u></u> / ${part.items.reduce((t, it) => t + weight(it), 0)}</span></h2>
  <p class="inst">${part.note}</p>
  <ul class="${r.cls}">
    ${items}
  </ul>
`;
}

/* ── the key ────────────────────────────────────────────────────────────── */
function keyHtml(part, i) {
  /* 🚨 `own` HAS NO KEY AND MUST NOT PRETEND TO. The only wrong answer lives in
     a sentence nobody has written yet, so the key says what to LOOK FOR. */
  if (part.kind === 'own')
    return '<p class="kv"><b>Part ' + LETTER[i] + '</b> &mdash; answers vary. ' + part.key + '</p>';

  const rows = (part.items || []).map((it) => {
    if (part.kind === 'divide') {
      const w = it.sentence.split(' ');
      return '<li>' + esc(w.slice(0, it.split).join(' ')) + ' <b>|</b> ' +
             esc(w.slice(it.split).join(' ')) + '</li>';
    }
    if (part.kind === 'circle') return '<li>' + asList(it.words).map(esc).join(' &middot; ') + '</li>';
    if (part.kind === 'name') return '<li>' + asList(it.answers).map(esc).join(' &middot; ') + '</li>';
    if (part.kind === 'solve' && it.sub)
      return '<li>' + it.sub.map((q, k) => '<b>' + String.fromCharCode(97 + k) + '.</b> ' + esc(q.answer)).join(' &nbsp; ') + '</li>';
    if (part.kind === 'solve') return '<li>' + esc(it.answer) + '</li>';
    return '<li>' + esc(it.answer) + '</li>';
  }).join('\n      ');

  return '<p class="kv"><b>Part ' + LETTER[i] + '</b>' + (part.key ? ' &mdash; ' + part.key : '') +
         '</p>\n    <ol>\n      ' + rows + '\n    </ol>';
}

/* ── the grading block ─────────────────────────────────────────────────────
   🚨 THIS IS WHY THE SHEET EXISTS AT ALL. Paul, 2026-09-17: "it will feel like
   personalized graded material by hand."
   ⚠️ The total is added up BY HAND and signed BY HAND. Do not "improve" this by
   printing a computed score. There is nothing to compute from, and the
   signature is the point rather than the arithmetic. */
function gradingBlock(total) {
  return `
  <div class="grading">
    <p class="gtotal"><span class="olbl">Total</span><u></u> <b>/ ${total}</b></p>
    <p class="gline"><span class="olbl">Graded by</span><u></u></p>
    <p class="gline"><span class="olbl">Notes</span><u></u></p>
    <p class="gline"><u></u></p>
  </div>
`;
}

/* ── the online half: Check My Answers, the score, the key behind a button,
   and the record that tells the lesson it's done (2026-10-11).
   Paul: "can we have it saved and confirmed with lesson that its complete and
   has the score on the lesson page and create an auto score in the worksheet if
   he prints it out it will show."
   - SAVED: every keystroke goes to ns:hwdraft:<slug> on this device, so he can
     leave and come back.
   - CHECKED: Check My Answers writes ns:done:hw/<slug> {complete, score, total,
     pct, answers, at}. nav.js syncs every ns:done record to the student's
     account (migration 017), so the score follows Kolten to any device, and
     lesson-footer.js reads the same record to show it under the Homework button.
     complete = no checked box left blank.
   - PRINTED: each checked box prints a ✓ or ✗ beside it, and an Auto Score line
     prints above the hand Total. The hand Total and the signature stay: the
     write-your-own items are still marked by a person.
   The key hides on screen once the script runs, so with no JavaScript the page
   is exactly the paper sheet.
   ⚠️ No backticks in this script, and never the u-word the build greps for. */
function onlineBlock(slug) {
  const id = 'hw/' + slug;
  return `
  <div class="hwcheck" id="hwcheck" data-hw="${id}" data-draft="ns:hwdraft:${slug}">
    <p class="hwc-h">Done? Check your answers.</p>
    <p class="hwc-p">Wrong ones turn red, so you can fix them and check again. Your answers save as you type, and your score goes on the lesson page.</p>
    <div class="hwc-bar">
      <button type="button" class="btn" id="hwgo">Check My Answers</button>
      <button type="button" class="btn ghost" id="hwkey" aria-expanded="false">Show Answer Key</button>
    </div>
    <p class="hwc-score" id="hwscore" aria-live="polite"></p>
  </div>
  <script>
  (function(){
    var box = document.getElementById("hwcheck");
    if (!box) return;
    document.body.classList.add("hwon");
    var KEY = "ns:done:" + box.getAttribute("data-hw"), DRAFT = box.getAttribute("data-draft");
    var ins = document.querySelectorAll(".hwin"), rows = document.querySelectorAll(".hwitem");
    function get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
    function put(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
    function values(){ var a = []; for (var i = 0; i < ins.length; i++) a.push(ins[i].value); return a; }
    function nums(t){ return (String(t).replace(/,/g, "").match(/-?\\d*\\.?\\d+/g) || []).map(Number); }
    function same(v, c){
      v = String(v).trim().toLowerCase();
      if (!v) return null;
      if (typeof c === "number"){ var n = nums(v); return n.length > 0 && Math.abs(n[0] - c) <= 0.01; }
      if (Array.isArray(c)){
        var got = nums(v).sort(function(a, b){ return a - b; });
        var want = c.slice().sort(function(a, b){ return a - b; });
        return got.length === want.length && got.every(function(x, i){ return Math.abs(x - want[i]) <= 0.01; });
      }
      var w = String(c).toLowerCase();
      if (w === "none") return /^(none|no|no mode|there is no mode|there's no mode)\\.?$/.test(v);
      /* "a|b" = any of these; a phrase matches as whole words inside the answer
         (2026-10-11, the Science/History/English sheets) */
      /* a plural "s" never makes an answer wrong: serfs = serf (words over 3 letters) */
      var sp = function(s){ return s.replace(/[^a-z0-9 ]/g, " ").replace(/ +/g, " ").trim()
        .split(" ").map(function(x){ return x.length > 3 ? x.replace(/s$/, "") : x; }).join(" "); };
      var t = " " + sp(v) + " ";
      return w.split("|").some(function(a){
        a = sp(a);
        return !!a && (t.indexOf(" " + a + " ") > -1 || t.replace(/ /g, "") === a.replace(/ /g, ""));
      });
    }
    /* the ✓ / ✗ beside each box: on screen AND on paper */
    function mark(inp, r){
      var m = inp.parentNode.nextSibling;
      if (!m || !m.classList || !m.classList.contains("hwmark")){
        m = document.createElement("span"); m.className = "hwmark";
        inp.parentNode.parentNode.insertBefore(m, inp.parentNode.nextSibling);
      }
      m.textContent = r === true ? "\\u2713" : r === false ? "\\u2717" : "";
      m.className = "hwmark" + (r === true ? " is-right" : r === false ? " is-wrong" : "");
    }
    /* the line that prints above the hand Total */
    function autoLine(t){
      var g = document.querySelector(".grading");
      if (!g) return;
      var p = document.getElementById("hwauto");
      if (!p){ p = document.createElement("p"); p.id = "hwauto"; p.className = "gauto"; g.insertBefore(p, g.firstChild); }
      p.textContent = t;
    }
    function check(save){
      var right = 0, blank = 0;
      for (var i = 0; i < rows.length; i++){
        var bx = rows[i].querySelectorAll(".hwin"), all = true, any = false;
        for (var k = 0; k < bx.length; k++){
          var r = same(bx[k].value, JSON.parse(bx[k].getAttribute("data-check")));
          bx[k].classList.toggle("is-right", r === true);
          bx[k].classList.toggle("is-wrong", r === false);
          mark(bx[k], r);
          if (r !== null) any = true;
          if (r !== true) all = false;
        }
        if (!any) blank++;
        if (all) right++;
      }
      var self = document.querySelectorAll(".hwself").length, total = rows.length;
      var pct = total ? Math.round(right / total * 100) : 0;
      var when = new Date();
      document.getElementById("hwscore").textContent = right + " of " + total + " right (" + pct + "%)" +
        (blank ? ". " + blank + " still blank." : ".") +
        (self ? " Check the other " + self + " yourself against the answer key." : "");
      autoLine("Auto score: " + right + " of " + total + " checked answers right (" + pct + "%)" +
        (blank ? ", " + blank + " left blank" : "") + (self ? ". " + self + " more to mark by hand" : "") +
        ". Checked " + when.toLocaleDateString() + ".");
      if (save) put(KEY, { complete: blank === 0, score: right, total: total, pct: pct, answers: values(), at: when.toISOString() });
    }
    /* bring back what he typed: the checked record first, then any newer draft */
    var rec = get(KEY), draft = get(DRAFT);
    var back = (draft && draft.length === ins.length) ? draft : (rec && rec.answers && rec.answers.length === ins.length ? rec.answers : null);
    if (back) for (var i = 0; i < ins.length; i++) ins[i].value = back[i] || "";
    if (rec && rec.answers) check(false);
    for (var j = 0; j < ins.length; j++) ins[j].addEventListener("input", function(){ put(DRAFT, values()); });
    document.getElementById("hwgo").addEventListener("click", function(){ check(true); });
    var kb = document.getElementById("hwkey");
    kb.addEventListener("click", function(){
      var on = document.body.classList.toggle("hwkey-open");
      kb.textContent = on ? "Hide Answer Key" : "Show Answer Key";
      kb.setAttribute("aria-expanded", on ? "true" : "false");
    });
  })();
  </script>
`;
}

function homeworkSheetBody(s) {
  const L = lessonFor(s.lesson);
  checkFresh(s, L);
  checkItems(s);
  if (s.parts.length > LETTER.length) fail(s.slug + ': more parts than there are letters for them');

  const total = s.parts.reduce((n, p) => n + p.items.reduce((t, it) => t + weight(it), 0), 0);

  ONLINE = !!s.online;
  const partsHtml = s.parts.map(partHtml).join('');
  const online = ONLINE ? onlineBlock(s.slug) : '';
  ONLINE = false;

  /* the way in, at the TOP: Paul could not tell the blanks took typing */
  const top = online ? '\n  <div class="hwtop"><b>Doing it on screen?</b>Tap or click a box and type your answer. ' +
    'When you&rsquo;re done, press Check My Answers at the bottom of the sheet.</div>\n' : '';
  return top + partsHtml + online +
    gradingBlock(total) +
    '\n  <div class="key">\n    <h2>Answer key</h2>\n    ' +
    s.parts.map(keyHtml).join('\n    ') +
    '\n  </div>\n';
}

module.exports = { homeworkSheetBody, lessonFor };
