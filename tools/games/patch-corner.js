/* Paul, 2026-08-28: "a box on the bottom right like I said that way you can
   make the map larger. and the box fits the max size of the largest state. put
   the box on the bottom right corner ... for landscape it's good."

   So on a phone the panel stops being a BAR that takes a strip of height and
   becomes a small box FLOATING over the bottom-right of the map. The map then
   gets the entire area rather than the area minus a bar. */
const fs = require("fs");
const F = "states-template.html";
let s = fs.readFileSync(F, "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 58)); process.exitCode = 1; return; }
  s = s.replace(a, b); n++;
};

sub(`  @media(max-width:820px), (max-height:520px){
    #wrap{flex-direction:column}`,
`  @media(max-width:820px), (max-height:520px){
    /* 🚨 A FLOATING CORNER BOX, not a bar. A bar costs the map a strip of
       height it cannot spare on a phone; the box sits over water in the
       bottom-right and costs nothing. It is sized ONCE to the largest state so
       it never jumps about as pieces come and go - a panel that resizes under
       your thumb is far worse than one that is slightly too big. */
    #wrap{position:relative}
    #board{position:absolute;inset:0}
    #next{position:absolute;right:10px;bottom:10px;width:auto;height:auto;
      flex:none;border:1px solid var(--line);border-top:1px solid var(--line);
      border-radius:14px;background:rgba(22,28,35,.93);padding:10px 12px 8px;
      box-shadow:0 10px 26px rgba(0,0,0,.55);gap:4px;z-index:5;
      flex-direction:column;justify-content:center}`);

sub(`    #next h2{display:none}
    #hint{min-height:0;max-width:15ch;text-align:left}`,
`    #next h2{display:none}
    #hint{min-height:0;max-width:16ch;text-align:center;font-size:.72rem;margin:0}`);

/* the very short breakpoint no longer needs a bar height */
sub(`  @media(max-height:430px){
    header{padding:4px 10px} h1{display:none}
    #next{height:96px}
  }`,
`  @media(max-height:430px){
    header{padding:4px 10px} h1{display:none}
    #next{padding:8px 10px 6px}
    #hint{display:none}          /* every pixel counts once the phone is flat */
  }`);

/* ── size the box to the biggest state, once ──────────────────────────── */
sub(`function deal() {`,
`/* The box is sized to the LARGEST state at the current map scale, so whatever
   turns up fits without the panel resizing. Recomputed only when the map is,
   because that is the only thing that changes it. */
function sizeBox() {
  const K = mapScale();
  let w = 0, h = 0;
  STATES.forEach(s => {
    w = Math.max(w, (s.b[2] - s.b[0]) * K);
    h = Math.max(h, (s.b[3] - s.b[1]) * K);
  });
  const box = $("next");
  const floating = getComputedStyle(box).position === "absolute";
  if (floating) {
    box.style.minWidth = Math.ceil(w) + 24 + "px";
    box.style.minHeight = Math.ceil(h) + 34 + "px";
  } else {
    box.style.minWidth = ""; box.style.minHeight = "";
  }
}

function deal() {`);

sub(`  holder.appendChild(box);
  setTimeout(() => box.classList.remove("in"), 360);`,
`  holder.appendChild(box);
  sizeBox();
  setTimeout(() => box.classList.remove("in"), 360);`);

sub(`  tick = setInterval(() => {
    $("clock").textContent = mmss(Math.floor((Date.now() - t0) / 1000));
  }, 200);
  deal();`,
`  tick = setInterval(() => {
    $("clock").textContent = mmss(Math.floor((Date.now() - t0) / 1000));
  }, 200);
  sizeBox();
  deal();`);

sub(`    if (!running || !current || phase !== 1) return;
    queue.unshift(current);
    deal();`,
`    sizeBox();
    if (!running || !current || phase !== 1) return;
    queue.unshift(current);
    deal();`);

fs.writeFileSync(F, s, "utf8");
console.log("applied " + n + " of 6");
