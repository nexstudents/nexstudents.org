/* Mobile. Paul, 2026-08-28, playing on a phone:
   "this is too small for mobile ... can we do a full screen to see it larger in
   landscape, the states appear in a box in the bottom right corner and we have
   an issue drag them with my fingers I can't see the color temp while dragging
   it around."  Four separate problems, four fixes. */
const fs = require("fs");
const F = "states-template.html";
let s = fs.readFileSync(F, "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 58)); process.exitCode = 1; return; }
  s = s.replace(a, b); n++;
};

/* ── 1 + 3. LAYOUT. On a narrow or short screen the side panel becomes a full
      width BAR under the map instead of a cramped column in the corner. The map
      gets every pixel that is left. ───────────────────────────────────────── */
sub("  @media(max-width:760px){ #next{width:172px} .legend{display:none} }",
`  /* 🚨 THE PANEL BECOMES A BAR ON A PHONE. As a column it was a cramped box in
     the corner and it stole width the map badly needed. Across the bottom it
     costs height, which a landscape phone has spare, and the map gets the rest. */
  @media(max-width:820px), (max-height:520px){
    #wrap{flex-direction:column}
    #next{width:100%;flex-direction:row;justify-content:center;gap:16px;
          border-left:0;border-top:1px solid var(--line);padding:8px 14px;
          height:118px;flex:none}
    #next h2{display:none}
    #hint{min-height:0;max-width:15ch;text-align:left}
    .legend{display:none}
    header{gap:9px;padding:7px 10px}
    h1{font-size:.85rem} .clock{font-size:1.2rem}
    #round{display:none}
  }
  /* very short - a landscape phone - claws back every pixel */
  @media(max-height:430px){
    header{padding:4px 10px} h1{display:none}
    #next{height:96px}
  }
  #fs{display:none}
  @media(max-width:820px), (max-height:520px){ #fs{display:inline-block} }

  /* ── 4. THE HEAT RAIL ───────────────────────────────────────────────────
     A finger sits ON the piece, so the piece's own colour is the one thing you
     cannot see while dragging on a phone. The rail runs the full width under
     the header and carries the same temperature, where no hand can cover it. */
  #rail{height:6px;flex:none;background:var(--line);transition:background .12s linear}`);

/* the rail element and a fullscreen button */
sub('  <button class="go" id="start" type="button">Start</button>',
`  <button id="fs" type="button">Full screen</button>
  <button class="go" id="start" type="button">Start</button>`);
sub('<div id="wrap">', '<div id="rail"></div>\n<div id="wrap">');

/* ── 2. FULL SCREEN, and a nudge to turn the phone ────────────────────── */
sub('$("board-btn").onclick = () => showBoard();',
`/* Full screen is the difference between a usable map and a postage stamp on a
   phone. It has to be triggered by a real tap - browsers refuse it otherwise -
   so it is a button rather than something clever on load. */
$("fs").onclick = async () => {
  try {
    if (document.fullscreenElement) { await document.exitFullscreen(); return; }
    await document.documentElement.requestFullscreen();
    if (screen.orientation && screen.orientation.lock) {
      /* landscape suits a map that is wider than it is tall. Allowed to fail:
         most desktops and some phones refuse, and that is fine. */
      try { await screen.orientation.lock("landscape"); } catch (e) {}
    }
  } catch (e) {}
};
document.addEventListener("fullscreenchange", () => {
  $("fs").textContent = document.fullscreenElement ? "Exit full screen" : "Full screen";
});

$("board-btn").onclick = () => showBoard();`);

/* ── 4b. LIFT THE PIECE ABOVE THE FINGER ──────────────────────────────── */
sub(`  drag = { from: piece, fly, path: fly.querySelector("path"),
    dx: e.clientX - r.left, dy: e.clientY - r.top,`,
`  /* 🚨 ON TOUCH THE PIECE RIDES ABOVE THE FINGER. Dragging with a mouse you
     see the piece; dragging with a thumb your hand is on top of it, so both the
     shape AND its temperature are hidden under the very thing moving it. Lifting
     it clear is what makes warm-and-cold usable on a phone at all. The lift is
     part of dy, so where you SEE the piece is where it is judged - the finger is
     simply a handle below it. */
  const lift = e.pointerType === "touch" ? Math.max(58, r.height * 0.75) : 0;
  drag = { from: piece, fly, path: fly.querySelector("path"), lift,
    dx: e.clientX - r.left, dy: e.clientY - r.top + lift,`);

/* the rail follows the same temperature as the piece */
sub(`    drag.path.style.fill = heat(t);`,
`    const c = heat(t);
    drag.path.style.fill = c;
    $("rail").style.background = c;      /* where a hand cannot cover it */`);

/* clear the rail when the drag ends */
sub(`  const ok = distance() <= tolerance();
  const d = drag; drag = null;`,
`  const ok = distance() <= tolerance();
  const d = drag; drag = null;
  $("rail").style.background = "";`);
sub(`$("next").addEventListener("pointercancel", () => { if (drag) { goBack(drag); drag = null; } });`,
`$("next").addEventListener("pointercancel", () => {
  if (drag) { goBack(drag); drag = null; $("rail").style.background = ""; }
});`);

fs.writeFileSync(F, s, "utf8");
console.log("applied " + n + " of 8");
