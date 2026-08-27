/* 🚨 THE ARROWS MOVE OUTSIDE THE LETTER.

   Paul, 2026-08-27: "you can barely see which arrows are pointing what
   direction ... arrows facing the opposite direction and leaking together and
   you also don't have some in the certain same spots."

   Every one of those follows from where the arrow was drawn. Knocking it out in
   white INSIDE an 11-unit stroke gives it 11 units to express a direction in,
   so at worksheet size the head is a blob; two strokes that share a corner put
   two blobs in the same place, which is the "leaking together"; and the arrow
   competes with the letter it is annotating.

   His reference does it the other way: thin arrows sitting OUTSIDE the stroke,
   clear of the letterform. So the guide is now offset along the outward normal
   - away from the letter's own centre - and drawn in black beside the letter
   rather than in white through it. A curved stroke gets a curved arrow on a
   concentric radius, which is also what the reference draws.

   Also fixes p: its bowl ran counterclockwise while b ran clockwise, and they
   are the same shape upside down. That was a genuinely backwards arrow. */
const fs = require("fs");
let s = fs.readFileSync("build-handwriting.js", "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 70)); process.exitCode = 1; return; }
  s = s.split(a).join(b); n++;
};

/* ── the offset guide ─────────────────────────────────────────────────────── */
const oldLead = s.slice(s.indexOf("function leadPath("), s.indexOf("\n}", s.indexOf("function leadPath(")) + 2);
const newLead = [
'/* The direction mark: a short arrow sitting OUTSIDE the stroke it describes,',
'   offset along the normal pointing away from the letter centre `mid`, so it',
'   never overlaps the letterform and two strokes sharing a corner get pushed',
'   apart onto opposite sides. A curved stroke gets a concentric curved arrow.',
'   `off` starts it a little way along the stroke. */',
'const OFF = 12;',
'',
'function leadPath(seg, mid, len = 30, deg = 58, off = 0) {',
'  if (seg.k === "dot") return "";',
'  const far = (p) => Math.hypot(p[0] - mid[0], p[1] - mid[1]);',
'',
'  if (seg.k === "line") {',
'    const [x0, y0] = seg.from, [x1, y1] = seg.to;',
'    const L = Math.hypot(x1 - x0, y1 - y0) || 1;',
'    const ux = (x1 - x0) / L, uy = (y1 - y0) / L;',
'    /* the two normals; keep whichever points away from the letter centre */',
'    let nx = -uy, ny = ux;',
'    if (far([x0 + nx * OFF, y0 + ny * OFF]) < far([x0 - nx * OFF, y0 - ny * OFF])) {',
'      nx = -nx; ny = -ny;',
'    }',
'    const a = Math.min(off, L * 0.45);',
'    const use = Math.max(10, Math.min(len, L - a));',
'    const sx = x0 + nx * OFF + ux * a, sy = y0 + ny * OFF + uy * a;',
'    return `M${f(sx)},${f(sy)} L${f(sx + ux * use)},${f(sy + uy * use)}`;',
'  }',
'',
'  const sgn = seg.a1 > seg.a0 ? 1 : -1;',
'  const total = Math.abs(seg.a1 - seg.a0);',
'  const a = Math.min(off, total * 0.35);',
'  const span = Math.max(16, Math.min(deg, total * 0.6 - a));',
'  const from = seg.a0 + sgn * a, to = from + sgn * span;',
'  /* concentric: push the radius out or pull it in, whichever lands further',
'     from the letter centre */',
'  const out = { ...seg, rx: seg.rx + OFF, ry: seg.ry + OFF };',
'  const inn = { ...seg, rx: Math.max(3, seg.rx - OFF), ry: Math.max(3, seg.ry - OFF) };',
'  const use = far(at(out, from)) >= far(at(inn, from)) ? out : inn;',
'  const [x0, y0] = at(use, from), [x1, y1] = at(use, to);',
'  return `M${f(x0)},${f(y0)} A${f(use.rx)},${f(use.ry)} 0 ${span > 180 ? 1 : 0} ${sgn > 0 ? 1 : 0} ${f(x1)},${f(y1)}`;',
'}',
].join("\n");
if (!oldLead.startsWith("function leadPath(")) { console.error("leadPath not found"); process.exit(1); }
s = s.replace(oldLead, newLead + "\n");
n++;

/* ── glyph(): work out the letter centre, draw arrows in black outside ────── */
sub('    const inv = mode === "solid" ? " on-ink" : "";\n', "");
sub([
'    strokes.forEach((st) => {',
'      const s = st.segs[0], ld = st.lead || {};',
'      if (!st.noArrow && s.k !== "dot")',
'        out += `<path class="guide on-ink" marker-end="url(#ahead-i)" d="${leadPath(s, ld.len, ld.deg, ld.off)}"/>`;',
'    });',
].join("\n"), [
'    /* the letter centre, from every segment end - the arrows are pushed away',
'       from this, which is what puts them outside the letterform */',
'    const pts = [];',
'    strokes.forEach((st) => st.segs.forEach((g) => {',
'      if (g.k === "line") { pts.push(g.from, g.to); }',
'      else if (g.k === "arc") { pts.push(at(g, g.a0), at(g, g.a1), at(g, (g.a0 + g.a1) / 2)); }',
'    }));',
'    const mid = pts.length',
'      ? [pts.reduce((t, p) => t + p[0], 0) / pts.length,',
'         pts.reduce((t, p) => t + p[1], 0) / pts.length]',
'      : [70, 95];',
'    strokes.forEach((st) => {',
'      const g = st.segs[0], ld = st.lead || {};',
'      if (!st.noArrow && g.k !== "dot")',
'        out += `<path class="guide" marker-end="url(#ahead)" d="${leadPath(g, mid, ld.len, ld.deg, ld.off)}"/>`;',
'    });',
].join("\n"));

/* smaller head and a thinner line, now that they stand on their own */
sub('markerWidth="8" markerHeight="8"', 'markerWidth="7" markerHeight="7"');
sub(".guide{fill:none;stroke:var(--ink);stroke-width:2.1;stroke-linecap:round}",
    ".guide{fill:none;stroke:var(--ink);stroke-width:1.9;stroke-linecap:round}");

/* 🚨 p ran counterclockwise while b ran clockwise - the same bowl, upside down,
   turning opposite ways. Paul: "arrows facing the opposite direction." */
sub("  p: [S(line([lx, MID], [lx, DESC])), S(arc(BX, BY, BR, BR, 180, -175))],",
    "  p: [S(line([lx, MID], [lx, DESC])),\n      opt({ lead: { off: 90 } }, arc(BX, BY, BR, BR, 180, 535))],");

fs.writeFileSync("build-handwriting.js", s, "utf8");
console.log("applied " + n);
