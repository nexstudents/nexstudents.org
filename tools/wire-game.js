/* Put Place the State on the Games page and in the menu. */
const fs = require("fs");
const q = String.fromCharCode(96);        /* backtick, kept out of the source */

let p = fs.readFileSync("build-pages.js", "utf8");

const oldBody = '    body: empty("The first games are being built. They will appear here as they are finished.") },';
if (!p.includes(oldBody)) { console.error("MISS games body"); process.exit(1); }
p = p.replace(oldBody, "    body: gamesPage() },");

const fn = [
'/* The games shelf. One real entry so far; the rest say plainly that they are',
'   not built rather than pretending to be links. */',
'const GAMES = [',
'  { title: "Place the State", href: "/games/place-the-state/", subject: "History",',
'    blurb: "Drag all fifty states onto the map against the clock, then place the capitals. Warm and cold guides you, and the map colours in by region as you go.",',
'    note: "Three levels &middot; 50 states &middot; 50 capitals" },',
'  { title: "Remainder race", subject: "Maths" },',
'  { title: "Fraction match", subject: "Maths" },',
'  { title: "Spelling ladder", subject: "English" },',
'  { title: "Comma catcher", subject: "English" },',
'  { title: "Sort the mixture", subject: "Science" },',
'];',
'',
'const gameTile = (g) => g.href',
'  ? \'<a class="tile" href="\' + g.href + \'">\' +',
'    \'<p class="kick">\' + g.subject + "</p><h4>" + g.title + "</h4>" +',
'    "<p>" + g.blurb + "</p><u>" + g.note + " &rarr;</u></a>"',
'  : \'<div class="tile is-soon" aria-disabled="true">\' +',
'    \'<p class="kick">\' + g.subject + "</p><h4>" + g.title + "</h4>" +',
'    "<p>Not built yet.</p></div>";',
'',
'const gamesPage = () =>',
'  \'<div class="band"><div class="wrap"><div class="tiles">\' +',
'  GAMES.map(gameTile).join("") +',
'  "</div></div></div>";',
'',
'const subjectsPage = () =>',
].join("\n");

if (!p.includes("const subjectsPage = () =>")) { console.error("MISS anchor"); process.exit(1); }
p = p.replace("const subjectsPage = () =>", fn);
fs.writeFileSync("build-pages.js", p, "utf8");

/* the nav stops calling it unbuilt */
let n = fs.readFileSync("nav.js", "utf8");
const a1 = 'col("History", [{ label: "Place the state" }]) +';
const b1 = 'col("History", [{ label: "Place the State", href: "/games/place-the-state/" }]) +';
if (n.includes(a1)) n = n.replace(a1, b1); else console.error("MISS mega col");

const a2 = '  { label: "Place the state", soon: true }, { label: "Sort the mixture", soon: true },';
const b2 = '  { label: "Place the State", href: "/games/place-the-state/", note: "Fifty states and capitals" },\n  { label: "Sort the mixture", soon: true },';
if (n.includes(a2)) n = n.replace(a2, b2); else console.error("MISS sheet row");

const a3 = "'<p class=\"mg-note\">None of these are playable yet. They go up as they are built.</p>'";
const b3 = "'<p class=\"mg-note\">Place the State is playable now. The rest go up as they are built.</p>'";
if (n.includes(a3)) n = n.replace(a3, b3); else console.error("MISS mg-note");

fs.writeFileSync("nav.js", n, "utf8");
console.log("wired");
