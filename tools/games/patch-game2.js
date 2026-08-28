/* Paul and Kolten's notes after a real play, 2026-08-27. */
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

/* ── 1. state nicknames, for the after-the-game round ───────────────────── */
edit("build-states-game.js", [[
  "/* ── assemble ──────────────────────────────────────────────────────────────*/",
`/* What each state calls itself. Paul, 2026-08-27: "after you get them all
   filled in you can click each one and they say their motto in their state like
   how Missouri is called the Show Me State." These are nicknames rather than
   official mottos - a motto is usually Latin and means nothing to a nine year
   old, while "the Show Me State" is the thing people actually say. */
const NICK = {
  Alabama: "the Yellowhammer State", Alaska: "the Last Frontier",
  Arizona: "the Grand Canyon State", Arkansas: "the Natural State",
  California: "the Golden State", Colorado: "the Centennial State",
  Connecticut: "the Constitution State", Delaware: "the First State",
  Florida: "the Sunshine State", Georgia: "the Peach State",
  Hawaii: "the Aloha State", Idaho: "the Gem State",
  Illinois: "the Prairie State", Indiana: "the Hoosier State",
  Iowa: "the Hawkeye State", Kansas: "the Sunflower State",
  Kentucky: "the Bluegrass State", Louisiana: "the Pelican State",
  Maine: "the Pine Tree State", Maryland: "the Old Line State",
  Massachusetts: "the Bay State", Michigan: "the Great Lakes State",
  Minnesota: "the North Star State", Mississippi: "the Magnolia State",
  Missouri: "the Show Me State", Montana: "the Treasure State",
  Nebraska: "the Cornhusker State", Nevada: "the Silver State",
  "New Hampshire": "the Granite State", "New Jersey": "the Garden State",
  "New Mexico": "the Land of Enchantment", "New York": "the Empire State",
  "North Carolina": "the Tar Heel State", "North Dakota": "the Peace Garden State",
  Ohio: "the Buckeye State", Oklahoma: "the Sooner State",
  Oregon: "the Beaver State", Pennsylvania: "the Keystone State",
  "Rhode Island": "the Ocean State", "South Carolina": "the Palmetto State",
  "South Dakota": "the Mount Rushmore State", Tennessee: "the Volunteer State",
  Texas: "the Lone Star State", Utah: "the Beehive State",
  Vermont: "the Green Mountain State", Virginia: "the Old Dominion",
  Washington: "the Evergreen State", "West Virginia": "the Mountain State",
  Wisconsin: "the Badger State", Wyoming: "the Equality State",
};

/* ── assemble ──────────────────────────────────────────────────────────────*/`
], [
  'n: s.name, c: s.cap, d: s.d, b: s.bb.map(f2), s: s.star.map(f2), m: s.mid.map(f2),',
  'n: s.name, c: s.cap, k: NICK[s.name] || "", d: s.d, b: s.bb.map(f2),\n  s: s.star.map(f2), m: s.mid.map(f2),'
]]);

/* ── 2..6, all in the template ─────────────────────────────────────────── */
edit("states-template.html", [
  /* 🚨 THE SIZE BUG. Every piece had its width and height set from one shared
     scale, and then this rule threw both away by stretching the SVG to fill its
     box. Small states have a 46px minimum box so they stay grabbable, so THOSE
     were the ones that came out wrong - exactly what Paul saw. The SVG keeps
     the size it was given; the box may be bigger, and the shape sits centred
     inside it as an invisible bit of extra hit area. */
  [".piece svg{overflow:visible;width:100%;height:100%;pointer-events:none}",
   ".piece svg{overflow:visible;pointer-events:none;flex:none}"],

  /* 3. missing the grab used to drag the page instead */
  ["#pile{flex:none;width:260px;background:var(--panel);border-left:1px solid var(--line);\n        position:relative;overflow:hidden}",
   "#pile{flex:none;width:260px;background:var(--panel);border-left:1px solid var(--line);\n        position:relative;overflow:hidden;touch-action:none}"],
  ["#stack{position:absolute;inset:34px 0 0 0}",
   "/* 🚨 touch-action:none and no text selection. Paul: \"when we try to grab\n     them somtimes you miss grabbing it and you just drag the screen\", and\n     \"can we not add the hightlighted like we did with the hamburger icon that\n     highlights the text of the states on accident\". Missing a piece must do\n     NOTHING, not pan the page or select the label underneath. */\n  #stack{position:absolute;inset:34px 0 0 0;touch-action:none}"],
  ["*{box-sizing:border-box}",
   "*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\n  body,svg,#pile,#stack,.piece,.card h2,.big,.stat,.clock{user-select:none;-webkit-user-select:none}"],
  ["min-width:46px;min-height:46px}", "min-width:54px;min-height:54px}"],

  /* 4. eight seconds is a long wait */
  ["const SPAWN_MS = 8000;", "const SPAWN_MS = 5000;"],

  /* 5. the voice starts OFF, and picks a natural one when it is on */
  ["let VOICE_OFF = false;",
   "/* 🚨 STARTS OFF. Kolten, 2026-08-27: it \"sounds too robotic\". A default\n   voice on Windows usually is. Off by default, and when it is switched on we\n   look for a natural or neural voice by name before settling for the default -\n   those are markedly better where they exist. */\nlet VOICE_OFF = true;"],
  ['const v = speechSynthesis.getVoices().find(x => /en[-_]US/i.test(x.lang));',
   'const all = speechSynthesis.getVoices().filter(x => /^en/i.test(x.lang));\n    const v = all.find(x => /natural|neural|online|aria|jenny|guy/i.test(x.name))\n      || all.find(x => /google/i.test(x.name))\n      || all.find(x => /en[-_]US/i.test(x.lang))\n      || all[0];'],
  ['<button id="mute" type="button" aria-pressed="false">Voice on</button>',
   '<button id="mute" type="button" aria-pressed="true">Voice off</button>'],

  /* 6. when it is finished, tapping a state tells you what it is called */
  [`  got++; $("got").textContent = got;`,
   `  got++; $("got").textContent = got;
  slots[s.n].dataset.n = s.n;`],
  [`function star(cx, cy, r) {`,
   `/* 🚨 AFTER THE RUN, THE MAP BECOMES THE LESSON. Paul: "after you get them all
   filled in you can click each one and they say their motto." Only once every
   state is down - during play a stray tap should never do anything. */
map.addEventListener("click", (e) => {
  if (got < STATES.length) return;
  const p = e.target.closest("[data-n]");
  if (!p) return;
  const s = STATES.find(x => x.n === p.dataset.n);
  if (!s) return;
  say("<b>" + s.n + "</b> &middot; " + (s.k || s.c));
  speak(s.n + ", " + (s.k || "capital " + s.c) + ".");
});

function star(cx, cy, r) {`],
  [`  if (got === STATES.length) finish();`,
   `  if (got === STATES.length) { map.style.cursor = "pointer"; finish(); }`],
  [`    <p id="verdict">&nbsp;</p>`,
   `    <p id="verdict">&nbsp;</p>
    <p style="margin:-8px 0 14px">Now tap any state to hear what it is called.</p>`],
]);

console.log("applied " + n + " edits");
