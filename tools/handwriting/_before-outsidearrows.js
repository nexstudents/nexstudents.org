/* ═══════════════════════════════════════════════════════════════════════════
   MANUSCRIPT PRINT ALPHABET - stroke order and direction, all 52 forms.

   Every letter is geometry: straight lines and elliptical arcs, nothing else.
   Drawing them rather than setting type in a font buys two things:
     1. no licence question on a typeface we may sell worksheets with, and
     2. the letterform and the stroke order are THE SAME DATA. The letter is
        these paths drawn thick; the arrow is the head of the same path drawn
        thin. They cannot drift apart, because there is only one set of numbers.

   Stroke order follows standard manuscript teaching: top to bottom, left to
   right, circles counterclockwise, and the pen lifts between numbered strokes.

   🚨 PROPORTIONS. Paul, 2026-08-27: "I need those letters to not look so narrow
   ... you need to make them more bubble letter like." The first cut ran caps at
   62 wide on 120 tall, about half as wide as tall, which is a text face rather
   than a teaching hand. Caps are now 96 on 120 - four fifths - the bowls are
   wider than they are tall, and the pen is thicker. Everything below is
   expressed against the rails, so the whole alphabet moves together.
   ═══════════════════════════════════════════════════════════════════════════ */
const fs = require("fs");

/* The writing grid. Every coordinate below is in these units. */
const TOP = 10, MID = 70, BASE = 130, DESC = 170, W = 140, H = 182;

/* ── primitives ──────────────────────────────────────────────────────────────
   Angles are in SVG screen terms: 0 is right, and INCREASING angle sweeps
   CLOCKWISE on screen, because SVG's y axis points down. A counterclockwise
   letter stroke is therefore a DECREASING angle. Getting this backwards draws
   a letter that looks right and teaches the wrong direction, which is the one
   failure this whole worksheet exists to prevent. */
const line = (from, to) => ({ k: "line", from, to });
const arc = (cx, cy, rx, ry, a0, a1) => ({ k: "arc", cx, cy, rx, ry, a0, a1 });
const dot = (x, y) => ({ k: "dot", x, y });

const rad = (d) => (d * Math.PI) / 180;
const f = (n) => Math.round(n * 100) / 100;
const at = (s, a) => [s.cx + s.rx * Math.cos(rad(a)), s.cy + s.ry * Math.sin(rad(a))];

function segStart(s) {
  if (s.k === "line") return s.from;
  if (s.k === "dot") return [s.x, s.y];
  return at(s, s.a0);
}

function heading(s) {
  if (s.k === "line") {
    const [x0, y0] = s.from, [x1, y1] = s.to;
    const L = Math.hypot(x1 - x0, y1 - y0) || 1;
    return [(x1 - x0) / L, (y1 - y0) / L];
  }
  if (s.k === "dot") return [0, -1];
  const sgn = s.a1 > s.a0 ? 1 : -1;
  const dx = -s.rx * Math.sin(rad(s.a0)) * sgn;
  const dy = s.ry * Math.cos(rad(s.a0)) * sgn;
  const L = Math.hypot(dx, dy) || 1;
  return [dx / L, dy / L];
}

function segPath(s) {
  if (s.k === "line")
    return `M${f(s.from[0])},${f(s.from[1])} L${f(s.to[0])},${f(s.to[1])}`;
  if (s.k === "dot") return "";
  const [x0, y0] = at(s, s.a0), [x1, y1] = at(s, s.a1);
  const large = Math.abs(s.a1 - s.a0) > 180 ? 1 : 0;
  const sweep = s.a1 > s.a0 ? 1 : 0;
  return `M${f(x0)},${f(y0)} A${s.rx},${s.ry} 0 ${large} ${sweep} ${f(x1)},${f(y1)}`;
}

/* The direction mark: a SHORT arrow at the head of the stroke, not a dashed
   line down its whole length - that made the letter read as hollow rather than
   as a letter with a direction on it. `off` starts the arrow a little way IN,
   so two strokes sharing a corner (the apex of A) do not stack two arrowheads
   in the same few pixels. Paul: "they need to come down slightly." */
function leadPath(s, len = 34, deg = 64, off = 0) {
  if (s.k === "dot") return "";
  if (s.k === "line") {
    const [x0, y0] = s.from, [x1, y1] = s.to;
    const L = Math.hypot(x1 - x0, y1 - y0) || 1;
    const ux = (x1 - x0) / L, uy = (y1 - y0) / L;
    const a = Math.min(off, L * 0.45);
    const use = Math.max(10, Math.min(len, L - a - 5));
    return `M${f(x0 + ux * a)},${f(y0 + uy * a)} L${f(x0 + ux * (a + use))},${f(y0 + uy * (a + use))}`;
  }
  const sgn = s.a1 > s.a0 ? 1 : -1;
  const total = Math.abs(s.a1 - s.a0);
  const a = Math.min(off, total * 0.35);
  const span = Math.max(14, Math.min(deg, total * 0.6 - a));
  const from = s.a0 + sgn * a, to = from + sgn * span;
  const [x0, y0] = at(s, from), [x1, y1] = at(s, to);
  return `M${f(x0)},${f(y0)} A${s.rx},${s.ry} 0 ${span > 180 ? 1 : 0} ${sgn > 0 ? 1 : 0} ${f(x1)},${f(y1)}`;
}

/* 🚨 A bowl hung off a stem, as a TRUE CIRCLE rather than a half-ellipse.
   Paul, 2026-08-27: "the bowls on all of those letters like even D need to be
   bigger and more almost like a circle."

   A half-ellipse from the top of the stem to the bottom is 120 tall and only as
   wide as its rx, so widening it just stretches a flat curve sideways - it
   never becomes round. The bowl a bubble letter wants is an arc of a real
   circle through both ends of the stem, bulging out to xMax, which is a MAJOR
   arc (more than half the circle) whenever it sticks out further than half the
   stem is long. Chord c and sagitta s give the radius: r = (c²/4 + s²) / 2s. */
function bowl(x, y0, y1, xMax) {
  const c = Math.abs(y1 - y0), s = xMax - x;
  const r = (c * c / 4 + s * s) / (2 * s);
  const cx = xMax - r, cy = (y0 + y1) / 2;
  const deg = (yy) => (Math.atan2(yy - cy, x - cx) * 180) / Math.PI;
  return arc(cx, cy, r, r, deg(y0), deg(y1));
}

/* ── the letters ─────────────────────────────────────────────────────────────
   A stroke is one pen-down. It may take several segments (U is down, round the
   bottom and back up without lifting), and it carries ONE number and ONE arrow,
   on its first segment - because that is the single instruction it gives:
   start here, go this way. */
const S = (...segs) => ({ segs });
const opt = (o, ...segs) => Object.assign({ segs }, o);

const C = 70;

/* 🚨 EVERY CAPITAL HAS ITS OWN WIDTH - see newtables.js for why. Round letters
   run wide, E F L S run narrow, M and W widest, I is a stem. Edit CW to
   re-proportion the alphabet; do not touch 26 sets of coordinates. */
const CW = { A: 86, B: 79, C: 86, D: 86, E: 72, F: 70, G: 91, H: 86, I: 48,
             J: 62, K: 82, L: 67, M: 106, N: 86, O: 94, P: 77, Q: 94, R: 79,
             S: 74, T: 77, U: 86, V: 84, W: 120, X: 84, Y: 82, Z: 77 };
const cl = (ch) => C - CW[ch] / 2;
const cr = (ch) => C + CW[ch] / 2;

const UPPER = {
  A: [opt({ lead: { off: 22, len: 32 } }, line([C, TOP], [cl("A"), BASE])),
      opt({ lead: { off: 22, len: 32 } }, line([C, TOP], [cr("A"), BASE])),
      S(line([C - 31.5, 98], [C + 31.5, 98]))],

  /* 🚨 DO NOT put a circular bowl() on B. Tried twice on 2026-08-27: its bowls
     span 60 where D spans 120, so a circle through both ends that still bulges
     wide is a MAJOR arc - it wraps past itself and closes into a ring. Paul:
     "you messed up the Cap B again." Half-ellipses, and leave them alone.
     The bowl arrows start a little way along so they do not run into the stem
     arrow at the shared top-left corner. */
  B: [S(line([cl("B"), TOP], [cl("B"), BASE])),
      opt({ lead: { off: 24, deg: 30 } }, arc(cl("B"), 40, CW.B, 30, -90, 90)),
      opt({ lead: { off: 24, deg: 30 } }, arc(cl("B"), 100, CW.B, 30, -90, 90))],
  C: [S(arc(C, 70, CW.C / 2, 60, -50, -310))],
  D: [S(line([cl("D"), TOP], [cl("D"), BASE])),
      opt({ lead: { off: 22, deg: 26 } }, arc(cl("D"), 70, CW.D, 60, -90, 90))],
  E: [S(line([cl("E"), TOP], [cl("E"), BASE])), S(line([cl("E"), TOP], [cr("E"), TOP])),
      S(line([cl("E"), 70], [cr("E") - 10, 70])), S(line([cl("E"), BASE], [cr("E"), BASE]))],
  F: [S(line([cl("F"), TOP], [cl("F"), BASE])), S(line([cl("F"), TOP], [cr("F"), TOP])),
      S(line([cl("F"), 70], [cr("F") - 10, 70]))],
  G: [S(arc(C, 70, CW.G / 2, 60, -50, -360)),
      S(line([cr("G"), 70], [cr("G") - 34, 70]))],
  H: [S(line([cl("H"), TOP], [cl("H"), BASE])), S(line([cr("H"), TOP], [cr("H"), BASE])),
      S(line([cl("H"), 70], [cr("H"), 70]))],
  I: [S(line([C, TOP], [C, BASE])), S(line([cl("I"), TOP], [cr("I"), TOP])),
      S(line([cl("I"), BASE], [cr("I"), BASE]))],
  J: [S(line([cr("J") - 8, TOP], [cr("J") - 8, 96]), arc(C - 4, 96, 27, 34, 0, 90))],
  /* the arms have to MEET the stem - ending them short left a visible gap */
  K: [S(line([cl("K"), TOP], [cl("K"), BASE])),
      S(line([cr("K"), TOP], [cl("K") + 3, 74])),
      S(line([cl("K") + 3, 74], [cr("K"), BASE]))],
  L: [S(line([cl("L"), TOP], [cl("L"), BASE])), S(line([cl("L"), BASE], [cr("L"), BASE]))],
  M: [S(line([cl("M"), TOP], [cl("M"), BASE])), S(line([cl("M"), TOP], [C, 82])),
      S(line([C, 82], [cr("M"), TOP])), S(line([cr("M"), TOP], [cr("M"), BASE]))],
  N: [S(line([cl("N"), TOP], [cl("N"), BASE])), S(line([cl("N"), TOP], [cr("N"), BASE])),
      S(line([cr("N"), TOP], [cr("N"), BASE]))],
  O: [S(arc(C, 70, CW.O / 2, 60, -90, -445))],
  P: [S(line([cl("P"), TOP], [cl("P"), BASE])),
      opt({ lead: { off: 24, deg: 30 } }, arc(cl("P"), 43, CW.P, 33, -90, 90))],
  Q: [S(arc(C, 70, CW.Q / 2, 60, -90, -445)), S(line([C + 20, 104], [C + 48, 138]))],
  /* 🚨 The leg has to spring from the STEM, at the point where the bowl rejoins
     it. Paul, 2026-08-27: "look at the capital R." It was starting at x+24 -
     a good 24 units out into open space inside the bowl - so it read as a
     stroke floating in the middle of the letter rather than part of the R.
     The bowl also now closes on the midline, which is where the reference puts
     the junction, instead of 6 units below it. */
  R: [S(line([cl("R"), TOP], [cl("R"), BASE])),
      opt({ lead: { off: 24, deg: 30 } }, arc(cl("R"), 41, CW.R, 31, -90, 90)),
      S(line([cl("R") + 4, 72], [cr("R"), BASE]))],
  S: [S(arc(C, 40, CW.S / 2, 30, -20, -270), arc(C, 100, CW.S / 2, 30, -90, 160))],
  T: [S(line([C, TOP], [C, BASE])), S(line([cl("T"), TOP], [cr("T"), TOP]))],
  U: [S(line([cl("U"), TOP], [cl("U"), 88]), arc(C, 88, CW.U / 2, 42, 180, 0),
        line([cr("U"), 88], [cr("U"), TOP]))],
  V: [S(line([cl("V"), TOP], [C, BASE])), S(line([C, BASE], [cr("V"), TOP]))],
  W: [S(line([cl("W"), TOP], [cl("W") + 29, BASE])),
      S(line([cl("W") + 29, BASE], [C, 46])),
      S(line([C, 46], [cr("W") - 29, BASE])),
      S(line([cr("W") - 29, BASE], [cr("W"), TOP]))],
  X: [S(line([cl("X"), TOP], [cr("X"), BASE])), S(line([cr("X"), TOP], [cl("X"), BASE]))],
  Y: [S(line([cl("Y"), TOP], [C, 74])), S(line([cr("Y"), TOP], [C, 74])),
      S(line([C, 74], [C, BASE]))],
  Z: [S(line([cl("Z"), TOP], [cr("Z"), TOP]), line([cr("Z"), TOP], [cl("Z"), BASE]),
        line([cl("Z"), BASE], [cr("Z"), BASE]))],
};

/* lowercase: bowls 68 wide on 62 tall - wider than they are tall, which is what
   reads as a teaching hand rather than a text face */

/* Lowercase bowls are CIRCLES on the x-height: 62 across on 62 tall. They were
   68 across, which is what made the e read as an oval. Stems sit on the bowl
   edge, so a letter is bowl plus stem with nothing left over. */
const lx = 29, STEM = 91, BX = 60, BY = 100, BR = 31;

const LOWER = {
  a: [S(arc(BX, BY, BR, BR, -45, -400)), S(line([STEM, MID], [STEM, BASE]))],
  /* 🚨 Small b runs CLOCKWISE. Paul: "the arrow does not go counter clockwise
     but clockwise. put the arrow at the top of the circle ... do not connect
     the arrow going down to it." Increasing angle is clockwise on screen, and
     the arrow starts 90 degrees along - at the top - clear of the stem arrow. */
  b: [S(line([lx, TOP], [lx, BASE])),
      opt({ lead: { off: 90 } }, arc(BX, BY, BR, BR, 180, 535))],
  c: [S(arc(BX, BY, BR, BR, -50, -310))],
  d: [S(arc(BX, BY, BR, BR, -45, -400)), S(line([STEM, TOP], [STEM, BASE]))],
  /* 🚨 The e is a circle and its mouth stays OPEN. Paul: "the e still needs a
     space ... you are kind of making it too wide and more like an oval." The
     wider the bowl, the further its tail had to travel to reach the bar, so
     extending it to match the top sealed the mouth shut. */
  e: [S(line([BX - BR, BY], [BX + BR, BY]), arc(BX, BY, BR, BR, 0, -327))],
  f: [S(arc(48, 27, 17, 17, 0, -180), line([31, 27], [31, BASE])),
      S(line([16, MID], [56, MID]))],
  /* the hook was too short AND did not meet the stem - its arc started a couple
     of units off it. Anchored to STEM and carried round to 176 degrees. */
  g: [S(arc(BX, BY, BR, BR, -45, -400)),
      /* 🚨 The tail is NOT a C. Looked at Paul's reference properly on
         2026-08-27 instead of guessing a fourth time: the descender runs
         straight down, takes a TIGHT quarter turn, and then runs FLAT to the
         left. Every version before this tried to express it as one arc, which
         is why it kept coming out either as a nick or as a curl that rode back
         up. Three segments, one pen-down, and the shape falls out on its own. */
      S(line([STEM, MID], [STEM, 146]), arc(STEM - 22, 146, 22, 22, 0, 90),
        line([STEM - 22, 168], [40, 168]))],
  h: [S(line([lx, TOP], [lx, BASE])),
      S(arc(BX, BY, BR, BR, 180, 360), line([STEM, BY], [STEM, BASE]))],
  i: [S(line([BX, MID], [BX, BASE])), opt({ noArrow: true }, dot(BX, 50))],
  j: [S(line([64, MID], [64, 144]), arc(41, 144, 23, 25, 0, 140)),
      opt({ noArrow: true }, dot(64, 50))],
  k: [S(line([lx, TOP], [lx, BASE])), S(line([80, 70], [33, 96])),
      S(line([33, 96], [82, BASE]))],
  l: [S(line([BX, TOP], [BX, BASE]))],
  m: [S(line([22, MID], [22, BASE])),
      S(arc(46, BY, 24, BR, 180, 360), line([70, BY], [70, BASE])),
      S(arc(94, BY, 24, BR, 180, 360), line([118, BY], [118, BASE]))],
  n: [S(line([lx, MID], [lx, BASE])),
      S(arc(BX, BY, BR, BR, 180, 360), line([STEM, BY], [STEM, BASE]))],
  o: [S(arc(BX, BY, BR, BR, -90, -445))],
  p: [S(line([lx, MID], [lx, DESC])), S(arc(BX, BY, BR, BR, 180, -175))],
  /* The q finishes with a hook to the RIGHT - Paul, 2026-08-27. Measured off
     his reference rather than mirroring the g: the q's hook is much SMALLER,
     a tight quarter turn about 18 units across, where the g's tail runs flat
     back under its own bowl. Same three-part construction, opposite hand. */
  q: [S(arc(BX, BY, BR, BR, -45, -400)),
      S(line([STEM, MID], [STEM, 150]), arc(STEM + 13, 150, 13, 13, 180, 90),
        line([STEM + 13, 163], [STEM + 19, 163]))],
  r: [S(line([34, MID], [34, BASE])), S(arc(BX, 92, 26, 24, 180, 292))],
  /* each lobe was 52 across on 30 tall, nearly twice as wide as high - Paul:
     "the lowercase s ... looks smushed". An s is narrower than an o. */
  /* 🚨 The two lobes have to MEET, or the s is just two c shapes stacked -
     Paul, 2026-08-27. They were centred 87 and 113 with ry 17, so the upper
     one bottomed out at 104 while the lower one started at 96: they overlapped
     by 8 and their arc ends never touched. Centres 84 and 116 with ry 16 put
     the upper lobe bottom and the lower lobe top on the SAME point, 60,100, so
     the two arcs join into one spine. The lower lobe is a little wider than the
     upper, which is what stops an s looking top-heavy. */
  s: [S(arc(BX, 84, 19, 16, -22, -270), arc(BX, 116, 21, 16, -90, 158))],
  t: [S(line([BX, 30], [BX, BASE])), S(line([36, MID], [84, MID]))],
  u: [S(line([lx, MID], [lx, BY]), arc(BX, BY, BR, BR, 180, 0),
        line([STEM, BY], [STEM, MID])),
      S(line([STEM, MID], [STEM, BASE]))],
  v: [S(line([31, MID], [BX, BASE])), S(line([BX, BASE], [89, MID]))],
  w: [S(line([16, MID], [38, BASE])), S(line([38, BASE], [BX, 86])),
      S(line([BX, 86], [82, BASE])), S(line([82, BASE], [104, MID]))],
  x: [S(line([31, MID], [89, BASE])), S(line([89, MID], [31, BASE]))],
  y: [S(line([31, MID], [BX, 124])), S(line([89, MID], [38, DESC]))],
  z: [S(line([31, MID], [89, MID]), line([89, MID], [31, BASE]),
        line([31, BASE], [89, BASE]))],
};

/* ── rendering ──────────────────────────────────────────────────────────────*/
const rules = () => `
  <line class="rule solid" x1="0" y1="${TOP}"  x2="${W}" y2="${TOP}"/>
  <line class="rule dash"  x1="0" y1="${MID}"  x2="${W}" y2="${MID}"/>
  <line class="rule solid" x1="0" y1="${BASE}" x2="${W}" y2="${BASE}"/>
  <line class="rule faint" x1="0" y1="${DESC}" x2="${W}" y2="${DESC}"/>`;

/* mode: "model" the dark letter carrying the arrows, "trace" the faded grey one
   he writes over, "ghost" fainter still, "blank" nothing but the ruled lines.

   Paul, 2026-08-27: "I wanted the darker one with lines and a blank grey one to
   trace to the right." So the demonstration is dark and the arrows are knocked
   out of it in white; everything to the right of it is pale and unmarked. */
function glyph(strokes, mode) {
  const d = strokes.flatMap((st) => st.segs.filter((s) => s.k !== "dot"))
    .map(segPath).join(" ");
  const dots = strokes.flatMap((st) => st.segs.filter((s) => s.k === "dot"));
  const cls = mode === "model" ? "ink solid" : mode === "ghost" ? "ink ghost" : "ink";
  let out = `<svg viewBox="0 0 ${W} ${H}" class="cell">${rules()}`;
  if (mode !== "blank") {
    if (d) out += `<path class="${cls}" d="${d}"/>`;
    dots.forEach((p) => { out += `<circle class="${cls} dt" cx="${p.x}" cy="${p.y}" r="7"/>`; });
  }
  if (mode === "model") {
    /* Arrows only. Paul, 2026-08-27: "don't add the 1 and 2 numbers." The arrow
       already carries the instruction that matters - where the pen starts and
       which way it travels - and the badges were crowding the small cells. */
    strokes.forEach((st) => {
      const s = st.segs[0], ld = st.lead || {};
      if (!st.noArrow && s.k !== "dot")
        out += `<path class="guide on-ink" marker-end="url(#ahead-i)" d="${leadPath(s, ld.len, ld.deg, ld.off)}"/>`;
    });
  }
  return out + "</svg>";
}

const DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <marker id="ahead" viewBox="0 0 10 10" refX="8.5" refY="5" markerUnits="userSpaceOnUse"
          markerWidth="8" markerHeight="8" orient="auto">
    <path d="M0.5,1 L9,5 L0.5,9 z" fill="#14181d"/>
  </marker>
  <marker id="ahead-i" viewBox="0 0 10 10" refX="8.5" refY="5" markerUnits="userSpaceOnUse"
          markerWidth="8" markerHeight="8" orient="auto">
    <path d="M0.5,1 L9,5 L0.5,9 z" fill="#fff"/>
  </marker></defs></svg>`;

const AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/* One row per letter: the capital and the small letter shown with their arrows,
   then the same pair faded for him to trace over, then a pair of empty rules to
   write them unaided. Paul: "make a fade grey one next to it with no arrows for
   them to trace." */
/* 🚨 TWO cells per letter, not three, and several letters to a row.
   Paul, 2026-08-27: "you have 3 in a row and I only wanted 2 ... I need one for
   the arrows and the second just the outline of the letters in a faded grey.
   this way you can fit multiple letters on the same row. so like Aa AA Bb Bb
   Cc Cc in a row to make the 8.5 x 11 sheet."

   A letter is a GROUP of four cells - capital and small carrying the arrows,
   then the same pair faded - and three groups sit side by side. The ghost pair
   and the empty pair are gone; they were what made the sheet run long. */
const PER_ROW = 3;

const wsGroup = (ch) => {
  const U = UPPER[ch], Lo = LOWER[ch.toLowerCase()];
  return `<div class="grp">${glyph(U, "model")}${glyph(Lo, "model")}` +
         `${glyph(U, "trace")}${glyph(Lo, "trace")}</div>`;
};

const wsRows = () => {
  const out = [];
  for (let i = 0; i < AZ.length; i += PER_ROW)
    out.push(`<div class="row">${AZ.slice(i, i + PER_ROW).map(wsGroup).join("")}</div>`);
  return out.join("\n");
};

const chartCell = (ch) => `<div class="two">
  ${glyph(UPPER[ch], "model")}${glyph(LOWER[ch.toLowerCase()], "model")}</div>`;

const page = `<!doctype html><html><head><meta charset="utf-8">
<title>Manuscript alphabet - stroke order</title>
<style>
  :root{--ink:#14181d;--grey:#c0c8d2;--ghost:#e4e9ef;--rule:#9fb2c9;--paper:#fff}
  *{box-sizing:border-box}
  body{margin:0;padding:28px 24px 70px;background:#eef1f5;color:var(--ink);
       font:16px/1.5 "Segoe UI",system-ui,sans-serif}
  h1{font-size:21px;margin:0 0 4px}
  h2{font-size:13px;letter-spacing:.09em;text-transform:uppercase;color:#5d6874;
     margin:30px 0 10px;font-weight:700}
  p.note{color:#5d6874;margin:0 0 6px;max-width:74ch;font-size:14px}
  .sheet{background:var(--paper);border:1px solid #cfd6de;border-radius:10px;
         padding:16px 18px;box-shadow:0 1px 3px rgba(20,24,29,.07)}
  .cell{width:58px;height:75px;flex:none;overflow:visible}
  .row{display:flex;align-items:flex-end;margin-bottom:7px}
  .grp{display:flex}
  .grp + .grp{margin-left:10px}
  .grid{display:grid;grid-template-columns:repeat(4,max-content);gap:12px 22px}
  .two{display:flex}
  .rule{stroke:var(--rule);stroke-width:1.4;fill:none}
  .rule.solid{opacity:.72} .rule.dash{stroke-dasharray:7 7;opacity:.55}
  .rule.faint{opacity:.26}
  .ink{fill:none;stroke:var(--grey);stroke-width:11;stroke-linecap:round;stroke-linejoin:round}
  .ink.solid{stroke:var(--ink)}
  .ink.dt{fill:var(--grey);stroke:none}
  .ink.solid.dt{fill:var(--ink)}
  .ink.ghost{stroke:var(--ghost)} .ink.ghost.dt{fill:var(--ghost)}
  .guide{fill:none;stroke:var(--ink);stroke-width:2.1;stroke-linecap:round}
  .guide.on-ink{stroke:#fff;stroke-width:2.4}
  .numdot{fill:#fff;stroke:var(--ink);stroke-width:1.8}
  .num{font:bold 10px "Segoe UI",sans-serif;fill:var(--ink);text-anchor:middle;
       dominant-baseline:central}
  @media print{
    body{background:#fff;padding:0}
    .sheet{border:0;box-shadow:none;padding:0;border-radius:0}
    h1,h2,p.note{margin-left:0}
    /* one ROW at a time, never the sheet - a block most of a page tall gets
       moved whole to the next page and hands you a blank one */
    .row{break-inside:avoid;page-break-inside:avoid}
  }
</style></head><body>
${DEFS}
<h1>Manuscript alphabet &mdash; stroke order and direction</h1>
<p class="note">The arrows show where each stroke starts and which way the pencil goes.
Trace the faded letters, then write your own on the empty lines.</p>

<h2>Worksheet &mdash; A to Z, capital and small</h2>
<div class="sheet">
${wsRows()}
</div>

<h2>The same thing as a wall chart</h2>
<div class="sheet"><div class="grid">
${AZ.map(chartCell).join("\n")}
</div></div>
</body></html>`;

fs.writeFileSync(process.argv[2], page, "utf8");
console.log("wrote " + process.argv[2] + " - " + AZ.length * 2 + " letterforms");
