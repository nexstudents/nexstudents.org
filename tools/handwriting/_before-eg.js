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

/* caps: 96 wide on 120 tall */
const L = 26, R = 114, C = 70;

const UPPER = {
  /* 🚨 Both slants start at the same apex, so the collision push separated the
     badges but had no reason to keep 1 on the left - it came out reading 2, 1.
     numSide states which side each belongs on BEFORE the push runs. */
  A: [opt({ lead: { off: 22, len: 32 }, numSide: [-1.7, 0.3] }, line([C, TOP], [L - 2, BASE])),
      opt({ lead: { off: 22, len: 32 }, numSide: [1.7, 0.3] }, line([C, TOP], [R + 2, BASE])),
      S(line([40, 92], [100, 92]))],
  /* 🚨 B D P R all hang a bowl off the stem as an arc that bulges RIGHT, so the
     letter's width is the stem plus rx - not the L..R rails the straight-sided
     caps use. When the alphabet was widened these four kept their old radii and
     stayed narrow while everything around them grew. Paul: "that curve in the B
     needs to be bigger." Their rx is now set from R, like everything else. */
  /* 🚨 DO NOT put a circular bowl() on Cap B. Tried twice on 2026-08-27, wrong
     both times: B's bowls span 60 where D's spans 120, so a circle through both
     ends that still bulges out far enough to look wide is a MAJOR arc - it
     wraps past itself and closes into a ring. Paul, on the second attempt: "you
     messed up the Cap B again." The half-ellipse below is the shape he approved;
     leave its geometry alone.

     The ONE thing that changed: the stem and the top bowl both begin at the same
     top-left corner, so their arrows met and read as a single bent arrow. Paul:
     "I don't want them to connect together but put a space between them at the
     top left corner." The bowl arrows now start a little way along their arc. */
  B: [S(line([L, TOP], [L, BASE])),
      opt({ lead: { off: 24, deg: 30 } }, arc(L, 40, 74, 30, -90, 90)),
      opt({ lead: { off: 24, deg: 30 } }, arc(L, 100, 80, 30, -90, 90))],
  C: [S(arc(C, 70, 46, 60, -50, -310))],
  /* Same top-left corner as B: the stem and the bowl both start there, so their
     arrows ran together into one bent arrow. The bowl's arrow starts along the
     curve. Geometry untouched - only where the arrow begins. */
  D: [S(line([L, TOP], [L, BASE])),
      opt({ lead: { off: 22, deg: 26 } }, arc(L, 70, 94, 60, -90, 90))],
  E: [S(line([L, TOP], [L, BASE])), S(line([L, TOP], [R - 6, TOP])),
      S(line([L, 70], [R - 16, 70])), S(line([L, BASE], [R - 6, BASE]))],
  F: [S(line([L, TOP], [L, BASE])), S(line([L, TOP], [R - 6, TOP])),
      S(line([L, 70], [R - 16, 70]))],
  G: [S(arc(C, 70, 46, 60, -50, -360)), S(line([C + 46, 70], [C + 18, 70]))],
  H: [S(line([L, TOP], [L, BASE])), S(line([R, TOP], [R, BASE])),
      S(line([L, 70], [R, 70]))],
  I: [S(line([C, TOP], [C, BASE])), S(line([C - 24, TOP], [C + 24, TOP])),
      S(line([C - 24, BASE], [C + 24, BASE]))],
  J: [S(line([C + 18, TOP], [C + 18, 100]), arc(C - 8, 100, 26, 30, 0, 90))],
  /* the arms have to MEET the stem - ending them short left a visible gap */
  K: [S(line([L, TOP], [L, BASE])), S(line([R - 4, TOP], [L + 3, 74])),
      S(line([L + 3, 74], [R, BASE]))],
  L: [S(line([L, TOP], [L, BASE])), S(line([L, BASE], [R - 6, BASE]))],
  M: [S(line([L - 2, TOP], [L - 2, BASE])), S(line([L - 2, TOP], [C, 80])),
      S(line([C, 80], [R + 2, TOP])), S(line([R + 2, TOP], [R + 2, BASE]))],
  N: [S(line([L, TOP], [L, BASE])), S(line([L, TOP], [R, BASE])),
      S(line([R, TOP], [R, BASE]))],
  O: [S(arc(C, 70, 46, 60, -90, -445))],
  P: [S(line([L, TOP], [L, BASE])), S(arc(L, 43, 80, 33, -90, 90))],
  Q: [S(arc(C, 70, 46, 60, -90, -445)), S(line([C + 20, 102], [C + 48, 136]))],
  R: [S(line([L, TOP], [L, BASE])), S(arc(L, 43, 80, 33, -90, 90)),
      S(line([L + 22, 76], [R - 4, BASE]))],
  S: [S(arc(C, 40, 36, 30, -20, -270), arc(C, 100, 36, 30, -90, 160))],
  T: [S(line([C, TOP], [C, BASE])), S(line([L, TOP], [R, TOP]))],
  U: [S(line([L, TOP], [L, 100]), arc(C, 100, 44, 30, 180, 0), line([R, 100], [R, TOP]))],
  V: [S(line([L, TOP], [C, BASE])), S(line([C, BASE], [R, TOP]))],
  W: [S(line([L - 6, TOP], [L + 20, BASE])), S(line([L + 20, BASE], [C, 44])),
      S(line([C, 44], [R - 20, BASE])), S(line([R - 20, BASE], [R + 6, TOP]))],
  X: [S(line([L, TOP], [R, BASE])), S(line([R, TOP], [L, BASE]))],
  Y: [S(line([L, TOP], [C, 72])), S(line([R, TOP], [C, 72])),
      S(line([C, 72], [C, BASE]))],
  Z: [S(line([L, TOP], [R, TOP]), line([R, TOP], [L, BASE]), line([L, BASE], [R, BASE]))],
};

/* lowercase: bowls 68 wide on 62 tall - wider than they are tall, which is what
   reads as a teaching hand rather than a text face */
const lx = 26, STEM = 94, BX = 60, BY = 100, BRX = 34, BRY = 31;

const LOWER = {
  a: [opt({ numSide: [-2.4, -2.9] }, arc(BX, BY, BRX, BRY, -45, -400)),
      S(line([STEM, MID], [STEM, BASE]))],
  /* 🚨 Small b runs CLOCKWISE. Paul, 2026-08-27: "the circle of the b the arrow
     does not go counter clockwise but clockwise. put the arrow at the top of the
     circle going clockwise instead. do not connect the arrow going down to it."
     The angle now INCREASES, which is clockwise on screen, and the arrow starts
     90 degrees along - at the top of the bowl - so it is nowhere near the stem's
     downward arrow and the two cannot read as one stroke. */
  b: [S(line([lx, TOP], [lx, BASE])),
      opt({ lead: { off: 90 } }, arc(BX, BY, BRX, BRY, 180, 535))],
  c: [S(arc(62, BY, BRX, BRY, -50, -310))],
  d: [opt({ numSide: [-2.4, -2.9] }, arc(BX, BY, BRX, BRY, -45, -400)),
      S(line([STEM, TOP], [STEM, BASE]))],
  e: [S(line([28, 101], [96, 101]), arc(62, BY, BRX, BRY, 0, -310))],
  f: [S(arc(48, 27, 18, 17, 0, -180), line([30, 27], [30, BASE])),
      S(line([14, MID], [56, MID]))],
  g: [opt({ numSide: [-2.4, -2.9] }, arc(BX, BY, BRX, BRY, -45, -400)),
      S(line([STEM, MID], [STEM, 150]), arc(74, 150, 20, 20, 0, 150))],
  h: [S(line([lx, TOP], [lx, BASE])),
      S(arc(BX, BY, BRX, BRY, 180, 360), line([STEM, BY], [STEM, BASE]))],
  i: [S(line([60, MID], [60, BASE])), opt({ noArrow: true }, dot(60, 50))],
  j: [S(line([64, MID], [64, 150]), arc(44, 150, 20, 20, 0, 150)),
      opt({ noArrow: true }, dot(64, 50))],
  k: [S(line([lx, TOP], [lx, BASE])), S(line([86, 72], [29, 103])),
      S(line([29, 103], [92, BASE]))],
  l: [S(line([60, TOP], [60, BASE]))],
  m: [S(line([18, MID], [18, BASE])),
      S(arc(37, BY, 19, BRY, 180, 360), line([56, BY], [56, BASE])),
      S(arc(75, BY, 19, BRY, 180, 360), line([94, BY], [94, BASE]))],
  n: [S(line([lx, MID], [lx, BASE])),
      S(arc(BX, BY, BRX, BRY, 180, 360), line([STEM, BY], [STEM, BASE]))],
  o: [S(arc(62, BY, BRX, BRY, -90, -445))],
  p: [S(line([lx, MID], [lx, DESC])), S(arc(BX, BY, BRX, BRY, 180, -175))],
  q: [opt({ numSide: [-2.4, -2.9] }, arc(BX, BY, BRX, BRY, -45, -400)),
      S(line([STEM, MID], [STEM, DESC]))],
  r: [S(line([32, MID], [32, BASE])), S(arc(BX, 92, 28, 22, 180, 292))],
  s: [S(arc(62, 85, 26, 15, -20, -270), arc(62, 115, 26, 15, -90, 160))],
  t: [S(line([60, 30], [60, BASE])), S(line([32, MID], [88, MID]))],
  u: [S(line([lx, MID], [lx, BY]), arc(BX, BY, BRX, BRY, 180, 0),
        line([STEM, BY], [STEM, MID])),
      S(line([STEM, MID], [STEM, BASE]))],
  v: [S(line([lx, MID], [BX, BASE])), S(line([BX, BASE], [STEM, MID]))],
  w: [S(line([16, MID], [37, BASE])), S(line([37, BASE], [58, 84])),
      S(line([58, 84], [79, BASE])), S(line([79, BASE], [100, MID]))],
  x: [S(line([lx, MID], [STEM, BASE])), S(line([STEM, MID], [lx, BASE]))],
  y: [S(line([lx, MID], [BX, 124])), S(line([STEM, MID], [44, DESC]))],
  z: [S(line([lx, MID], [STEM, MID]), line([STEM, MID], [lx, BASE]),
        line([lx, BASE], [STEM, BASE]))],
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
          markerWidth="12" markerHeight="12" orient="auto">
    <path d="M0.5,1 L9,5 L0.5,9 z" fill="#14181d"/>
  </marker>
  <marker id="ahead-i" viewBox="0 0 10 10" refX="8.5" refY="5" markerUnits="userSpaceOnUse"
          markerWidth="12" markerHeight="12" orient="auto">
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
  .ink{fill:none;stroke:var(--grey);stroke-width:14;stroke-linecap:round;stroke-linejoin:round}
  .ink.solid{stroke:var(--ink)}
  .ink.dt{fill:var(--grey);stroke:none}
  .ink.solid.dt{fill:var(--ink)}
  .ink.ghost{stroke:var(--ghost)} .ink.ghost.dt{fill:var(--ghost)}
  .guide{fill:none;stroke:var(--ink);stroke-width:2.8;stroke-linecap:round}
  .guide.on-ink{stroke:#fff;stroke-width:3.2}
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
