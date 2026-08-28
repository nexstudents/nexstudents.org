/* Difficulty and colour. Paul, 2026-08-28: "it needs some kind of challenge
   because it's a bit too simple to keep up with the timer. I thought about
   removing the lines on the inside of the map ... it needs some color to it and
   it needs something for the students to challenge themselves and remember what
   these states are and where they are located." */
const fs = require("fs");
let n = 0;
const edit = (file, pairs) => {
  let s = fs.readFileSync(file, "utf8");
  pairs.forEach(([a, b]) => {
    if (!s.includes(a)) { console.error("MISS in " + file + ": " + a.slice(0, 56)); process.exitCode = 1; return; }
    s = s.replace(a, b); n++;
  });
  fs.writeFileSync(file, s, "utf8");
};

/* ── regions, so the colour teaches something ───────────────────────────── */
edit("build-states-game.js", [[
  "/* ── assemble ──────────────────────────────────────────────────────────────*/",
`/* 🚨 COLOUR BY REGION, not at random. Paul asked for colour; a random palette
   is decoration, but the four Census regions are a second thing worth knowing
   and they make the finished map read as a map. A child who plays this a few
   times learns that Missouri is Midwest and Georgia is South without being
   told. */
const REGION = {
  Connecticut: "NE", Maine: "NE", Massachusetts: "NE", "New Hampshire": "NE",
  "Rhode Island": "NE", Vermont: "NE", "New Jersey": "NE", "New York": "NE",
  Pennsylvania: "NE",

  Illinois: "MW", Indiana: "MW", Michigan: "MW", Ohio: "MW", Wisconsin: "MW",
  Iowa: "MW", Kansas: "MW", Minnesota: "MW", Missouri: "MW", Nebraska: "MW",
  "North Dakota": "MW", "South Dakota": "MW",

  Delaware: "S", Florida: "S", Georgia: "S", Maryland: "S", "North Carolina": "S",
  "South Carolina": "S", Virginia: "S", "West Virginia": "S", Alabama: "S",
  Kentucky: "S", Mississippi: "S", Tennessee: "S", Arkansas: "S", Louisiana: "S",
  Oklahoma: "S", Texas: "S",

  Arizona: "W", Colorado: "W", Idaho: "W", Montana: "W", Nevada: "W",
  "New Mexico": "W", Utah: "W", Wyoming: "W", Alaska: "W", California: "W",
  Hawaii: "W", Oregon: "W", Washington: "W",
};

/* ── assemble ──────────────────────────────────────────────────────────────*/`
], [
  'n: s.name, c: s.cap, k: NICK[s.name] || "", d: s.d, b: s.bb.map(f2),',
  'n: s.name, c: s.cap, k: NICK[s.name] || "", r: REGION[s.name] || "", d: s.d, b: s.bb.map(f2),'
]]);

/* ── difficulty + colour, in the template ──────────────────────────────── */
edit("states-template.html", [
  /* the four region colours */
  ["--star:#facc15; --piece:#64748b;",
   `--star:#facc15; --piece:#64748b;
    --NE:#5b9cf6; --MW:#43c98a; --S:#e8a33d; --W:#a884e8;`],
  [".done{fill:#3d4c5e;stroke:#5b6f86;stroke-width:.7}",
   `/* a placed state takes its region's colour - see patch-game3.js for why
      region rather than a random palette */
  .done{stroke:#0f141a;stroke-width:.8}
  .done.NE{fill:var(--NE)} .done.MW{fill:var(--MW)}
  .done.S{fill:var(--S)}   .done.W{fill:var(--W)}
  .lbl{stroke:#0f141a}
  .cap{fill:#101820;stroke:none;font-weight:600}
  .legend{display:flex;gap:10px;align-items:center;font-size:.72rem;color:var(--dim)}
  .legend i{width:10px;height:10px;border-radius:2px;display:inline-block;
            margin-right:4px;vertical-align:-1px}
  select{font:inherit;font-size:.8rem;background:#12171d;color:var(--fg);
         border:1px solid var(--line);border-radius:999px;padding:5px 10px}`],

  /* 🚨 HIDING THE INTERNAL BORDERS IS THE REAL DIFFICULTY LEVER. With every
     outline showing, the game is shape-matching: find the hole this fits. With
     them hidden you have to know WHERE the state goes, which is the thing Paul
     actually wants taught. It is a level rather than a change, because for a
     five year old the outlines are the scaffolding that makes it possible. */
  [`  <button id="mute" type="button" aria-pressed="true">Voice off</button>`,
   `  <select id="level" aria-label="Difficulty">
    <option value="easy">Easy &middot; outlines shown</option>
    <option value="normal" selected>Normal &middot; faster</option>
    <option value="hard">Hard &middot; no outlines</option>
  </select>
  <span class="legend" aria-hidden="true">
    <span><i style="background:var(--NE)"></i>NE</span>
    <span><i style="background:var(--MW)"></i>MW</span>
    <span><i style="background:var(--S)"></i>S</span>
    <span><i style="background:var(--W)"></i>W</span>
  </span>
  <button id="mute" type="button" aria-pressed="true">Voice off</button>`],

  ["const SPAWN_MS = 5000;",
   `const LEVELS = {
  easy:   { ms: 6500, outlines: true  },
  normal: { ms: 4000, outlines: true  },
  hard:   { ms: 3000, outlines: false },
};
let SPAWN_MS = LEVELS.normal.ms;`],

  [`  STATES.forEach(s => { const p = el("path", { d: s.d, class: "slot" });
    slotG.appendChild(p); slots[s.n] = p; });`,
   `  const lv = LEVELS[$("level").value] || LEVELS.normal;
  SPAWN_MS = lv.ms;
  STATES.forEach(s => {
    const p = el("path", { d: s.d, class: "slot" });
    /* on hard the slot is invisible but still THERE - it has to be, because a
       placed state has to be able to fill it and the neighbours it reveals are
       the reward for getting one right */
    if (!lv.outlines) p.style.opacity = "0";
    slotG.appendChild(p); slots[s.n] = p;
  });`],

  [`  slots[s.n].setAttribute("class", "done");`,
   `  slots[s.n].setAttribute("class", "done " + (s.r || ""));
  slots[s.n].style.opacity = "";`],

  /* changing level restarts, because a level change mid-run means nothing */
  [`$("start").onclick = begin;`,
   `$("start").onclick = begin;
$("level").onchange = () => { reset(); $("start").textContent = "Start"; };`],
]);

console.log("applied " + n + " edits");
