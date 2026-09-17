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

   `name` takes `labels: [...]` on the part, one per rule. `mark` underlines one
   half of the sentence with a rule, for a "name the half" question.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

const { ENGLISH } = require('./english-lessons.js');
const { SPLIT } = require('./split-lessons.js');

function fail(msg) { console.error('FAIL: ' + msg); process.exit(1); }

/* A lesson may live in either registry, so look in both rather than making the
   sheet declare which file its lesson happens to sit in. */
function lessonFor(slug) {
  const L = ENGLISH.find((x) => x.slug === slug) || SPLIT.find((x) => x.slug === slug);
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
  (s.parts || []).forEach((part) => (part.items || []).forEach((it) => {
    if (it.sentence) sentences.push(it.sentence);
    (it.given || []).forEach((g) => sentences.push(g));
  }));
  if (!sentences.length) fail(s.slug + ': the sheet has no sentences of its own');

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

const RENDER = {
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
  <h2 class="scored">Part ${LETTER[i]} &mdash; ${part.heading} <span class="pts"><u></u> / ${part.items.length}</span></h2>
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

function homeworkSheetBody(s) {
  const L = lessonFor(s.lesson);
  checkFresh(s, L);
  checkItems(s);
  if (s.parts.length > LETTER.length) fail(s.slug + ': more parts than there are letters for them');

  const total = s.parts.reduce((n, p) => n + p.items.length, 0);

  return s.parts.map(partHtml).join('') +
    gradingBlock(total) +
    '\n  <div class="key">\n    <h2>Answer key</h2>\n    ' +
    s.parts.map(keyHtml).join('\n    ') +
    '\n  </div>\n';
}

module.exports = { homeworkSheetBody, lessonFor };
