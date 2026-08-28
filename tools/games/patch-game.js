/* Paul's notes after playing to Delaware, 2026-08-27. */
const fs = require("fs");
const F = "states-template.html";
let s = fs.readFileSync(F, "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 60)); process.exitCode = 1; return; }
  s = s.replace(a, b); n++;
};

/* 1. SLOWER. "3 seconds is too fast. possibly 8 or 10 seconds?" */
sub("const SPAWN_MS = 1500;", "const SPAWN_MS = 8000;");

/* 2. 🚨 EVERY PIECE AT MAP SCALE. This was the real bug. Each piece was drawn
      to FILL its tile, so Delaware arrived the same size as Texas and there was
      no way to tell where it went - Paul: "it is too big i cant find where it
      fits. i think each state should be the same exac size in relation to the
      map." One scale for all of them now, so a piece's size is a clue rather
      than a lie. Small states get a padded hit area so they stay grabbable
      without being drawn wrong. */
sub(`  .piece{position:absolute;width:200px;height:168px;touch-action:none;cursor:grab;
         will-change:transform;filter:drop-shadow(0 5px 9px rgba(0,0,0,.55));
         transition:transform .28s cubic-bezier(.2,.85,.3,1)}`,
`  .piece{position:absolute;touch-action:none;cursor:grab;
         will-change:transform;filter:drop-shadow(0 5px 9px rgba(0,0,0,.55));
         transition:transform .28s cubic-bezier(.2,.85,.3,1);
         display:grid;place-items:center;min-width:46px;min-height:46px}`);
sub("  @media(max-width:900px){ #pile{width:190px} .piece{width:150px;height:126px} }\n  @media(max-width:640px){ #pile{width:140px} .piece{width:112px;height:94px} }",
    "  @media(max-width:900px){ #pile{width:210px} }\n  @media(max-width:640px){ #pile{width:150px} }");

sub(`  const pad = Math.max(2, (s.b[2] - s.b[0]) * 0.08);
  const svg = el("svg", { viewBox:
    (s.b[0]-pad) + " " + (s.b[1]-pad) + " " +
    (s.b[2]-s.b[0]+pad*2) + " " + (s.b[3]-s.b[1]+pad*2) });
  svg.appendChild(el("path", { d: s.d }));
  box.appendChild(svg);`,
`  /* ONE scale for every state, so the piece is the size it will be on the map */
  const K = pieceScale();
  const w = (s.b[2] - s.b[0]) * K, h = (s.b[3] - s.b[1]) * K;
  box.style.width = w + "px";
  box.style.height = h + "px";
  const svg = el("svg", { viewBox: s.b[0] + " " + s.b[1] + " " +
    (s.b[2]-s.b[0]) + " " + (s.b[3]-s.b[1]),
    width: w, height: h });
  svg.appendChild(el("path", { d: s.d }));
  box.appendChild(svg);`);

sub(`function layout() {`,
`/* the pile's scale: the widest state has to fit the panel with room to spare,
   and every other state is drawn at that same scale */
let PSCALE = 0;
function pieceScale() {
  if (PSCALE) return PSCALE;
  const wide = Math.max(...STATES.map(s => s.b[2] - s.b[0]));
  const tall = Math.max(...STATES.map(s => s.b[3] - s.b[1]));
  const av = (stack.clientWidth || 240) - 26;
  const ah = ((stack.clientHeight || 500) * 0.42);
  PSCALE = Math.min(av / wide, ah / tall);
  return PSCALE;
}

function layout() {`);

/* 3. EASIER SNAPPING. "allow easier snapping." */
sub(`  const tol = Math.max(24, Math.min(w, h) * 0.7);`,
`  /* generous on purpose - Paul asked for easier snapping, and a near miss on a
     small state is the difference between a child finishing and giving up */
  const tol = Math.max(46, Math.min(w, h) * 1.05);`);

/* 4. THE TWIST: it says the name out loud, and the state it belongs to glows
      while you carry it. Speech is the one that turns a puzzle into a lesson -
      the site already speaks in its lessons, so it fits. */
sub(`  got++; $("got").textContent = got;
  say(s.c + " &middot; " + s.n);`,
`  got++; $("got").textContent = got;
  say("<b>" + s.n + "</b> &middot; " + s.c);
  speak(s.n + ". Capital, " + s.c + ".");
  streak++;
  if (streak >= 3) say("<b>" + s.n + "</b> &middot; " + streak + " in a row");`);

sub(`  hit === d.n ? land(d) : goBack(d);`,
`  if (hit === d.n) land(d); else { streak = 0; goBack(d); }`);

sub(`let drag = null, raf = 0;`,
`let drag = null, raf = 0, streak = 0;

/* 🚨 SPEAKS THE NAME ON PLACEMENT. Paul: "maybe even after you place it the
   state says its name." Wrapped in every guard the site learned the hard way:
   the voice list is re-read at speak time because Android repopulates it and a
   voice held from page load silently stops matching, and lang is set alongside
   the voice because Android needs both. Silent everywhere it is unsupported. */
let VOICE_OFF = false;
function speak(text) {
  if (VOICE_OFF || !window.speechSynthesis) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 1.02;
    const v = speechSynthesis.getVoices().find(x => /en[-_]US/i.test(x.lang));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) {}
}`);

/* the mute control, because a classroom needs one */
sub(`  <button id="board-btn" type="button">Leaderboard</button>`,
`  <button id="mute" type="button" aria-pressed="false">Voice on</button>
  <button id="board-btn" type="button">Leaderboard</button>`);
sub(`$("board-btn").onclick = () => showBoard();`,
`$("mute").onclick = () => {
  VOICE_OFF = !VOICE_OFF;
  $("mute").textContent = VOICE_OFF ? "Voice off" : "Voice on";
  $("mute").setAttribute("aria-pressed", String(VOICE_OFF));
  if (VOICE_OFF && window.speechSynthesis) speechSynthesis.cancel();
};
$("board-btn").onclick = () => showBoard();`);

/* reset the streak on a new run */
sub(`  slots = {}; got = 0; running = false;`, `  slots = {}; got = 0; streak = 0; running = false;`);

fs.writeFileSync(F, s, "utf8");
console.log("applied " + n + " of 10");
