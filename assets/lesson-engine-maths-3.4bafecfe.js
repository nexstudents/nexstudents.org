
(function(){
"use strict";


/* 🚨 The player speaks SENTENCES; the demo draws ROWS. Both come from CAPS,
   so the narration and the drawing cannot fall out of step - the same
   arrangement the long division bracket uses.

   🚨 TWO PARTS, NOT ONE. Paul, 2026-08-30: "i told you that you need to
   seperate the question part as a seperate paragraph." The first version
   handed the player one flat list, so the four lines about the questions ran
   straight on from the worked example as more of the same paragraph - and I
   had then bolted a second copy of them underneath as their own block, so the
   same text appeared twice on the page. Splitting PARTS is the fix: the
   player renders the second part under its own heading and reads straight
   into it, and there is only one copy.
   ⚠️ No empty strings in `s` - a blank is a paragraph break to the player and
   must never enter the sentence list, or every later clip plays one late. */
var TODO_FROM = CAPS.findIndex(function(c){ return c.todo; });
if (TODO_FROM < 0) TODO_FROM = CAPS.length;
var PARTS = [
  { title: "", s: CAPS.slice(0, TODO_FROM).map(function(c){ return c.text; }) },
  { title: "What The Questions Ask", s: CAPS.slice(TODO_FROM).map(function(c){ return c.text; }) },
];

/* ── colours ───────────────────────────────────────────────────────────────
   The same five palettes every other lesson type uses, spliced in from
   lesson-template.html at build time, stored under the same ns:theme key so a
   colour picked in a history lesson is already picked here.
   ------------------------------------------------------------------------ */
function load(k, d){ try { var v = localStorage.getItem("ns:" + k); return v === null ? d : v; } catch (e){ return d; } }
function store(k, v){ try { localStorage.setItem("ns:" + k, v); } catch (e){} }
function drop(k){ try { localStorage.removeItem("ns:" + k); } catch (e){} }

var THEMES = {
  forest: { name:"Forest",
    light:{ ground:"#E7EDE4",surface:"#F2F7EF",s2:"#D8E2D2",ink:"#152018",inkSoft:"#48594D",inkFaint:"#7B8C7F",rule:"#C2CFBD",
            accent:"#25664A",accentInk:"#174630",accentSoft:"rgba(37,102,74,.12)",onAccent:"#F2F7EF",
            ctlBg:"#1F5A41",ctlInk:"#EDF4EA",ctlBorder:"#164630",tickNow:"#14432E",tickDone:"rgba(37,102,74,.30)",
            brass:"#7E6A16",band:"rgba(158,138,40,.42)",word:"rgba(158,138,40,.74)" },
    dark:{  ground:"#0E1A13",surface:"#14251A",s2:"#1C3123",ink:"#E2EBE2",inkSoft:"#93A896",inkFaint:"#6B8071",rule:"#27402F",
            accent:"#66C293",accentInk:"#93D9B2",accentSoft:"rgba(102,194,147,.16)",onAccent:"#0B160F",
            ctlBg:"#17301F",ctlInk:"#DCEADF",ctlBorder:"#345A41",tickNow:"#3F9B69",tickDone:"rgba(102,194,147,.28)",
            brass:"#D8B355",band:"rgba(216,179,85,.3)",word:"rgba(216,179,85,.62)" } },

  ocean: { name:"Ocean",
    light:{ ground:"#E4EBF0",surface:"#F1F6FA",s2:"#D3DFE8",ink:"#111C24",inkSoft:"#455663",inkFaint:"#788996",rule:"#BCCCD8",
            accent:"#1F5E80",accentInk:"#154257",accentSoft:"rgba(31,94,128,.12)",onAccent:"#F1F6FA",
            ctlBg:"#1B5170",ctlInk:"#E8F1F7",ctlBorder:"#123C53",tickNow:"#123D53",tickDone:"rgba(31,94,128,.30)",
            brass:"#8A6410",band:"rgba(196,132,24,.38)",word:"rgba(196,132,24,.68)" },
    dark:{  ground:"#0B1620",surface:"#122130",s2:"#182C3D",ink:"#DEE9F1",inkSoft:"#8CA1B2",inkFaint:"#657A8B",rule:"#233A4C",
            accent:"#59B4DC",accentInk:"#8CCFEC",accentSoft:"rgba(89,180,220,.16)",onAccent:"#08131B",
            ctlBg:"#152B3C",ctlInk:"#D9E8F2",ctlBorder:"#2E5068",tickNow:"#3A8CB4",tickDone:"rgba(89,180,220,.28)",
            brass:"#E0B65C",band:"rgba(224,182,92,.3)",word:"rgba(224,182,92,.62)" } },

  ember: { name:"Ember",
    light:{ ground:"#F0E9E3",surface:"#F9F4EF",s2:"#E3D8CD",ink:"#231A14",inkSoft:"#5B4C41",inkFaint:"#8E7E72",rule:"#D3C5B7",
            accent:"#96441C",accentInk:"#6C3013",accentSoft:"rgba(150,68,28,.12)",onAccent:"#F9F4EF",
            ctlBg:"#7A3A18",ctlInk:"#F7EDE5",ctlBorder:"#5C2B11",tickNow:"#5C2B11",tickDone:"rgba(150,68,28,.30)",
            brass:"#6B5A11",band:"rgba(120,104,26,.38)",word:"rgba(120,104,26,.68)" },
    dark:{  ground:"#1A120C",surface:"#241A12",s2:"#2F231A",ink:"#EDE2D8",inkSoft:"#AC998A",inkFaint:"#82705F",rule:"#3E2E22",
            accent:"#E08A4E",accentInk:"#EEAB79",accentSoft:"rgba(224,138,78,.16)",onAccent:"#15100A",
            ctlBg:"#2C2016",ctlInk:"#EFE3D8",ctlBorder:"#54402E",tickNow:"#B96C31",tickDone:"rgba(224,138,78,.28)",
            brass:"#D6C169",band:"rgba(214,193,105,.28)",word:"rgba(214,193,105,.59)" } },

  violet: { name:"Violet",
    light:{ ground:"#E9E6EF",surface:"#F4F2F9",s2:"#DAD5E5",ink:"#1A1626",inkSoft:"#4F485F",inkFaint:"#827A93",rule:"#C6BFD6",
            accent:"#553093",accentInk:"#3D216B",accentSoft:"rgba(85,48,147,.12)",onAccent:"#F4F2F9",
            ctlBg:"#4A2A80",ctlInk:"#EFEAF7",ctlBorder:"#361D5F",tickNow:"#341C5D",tickDone:"rgba(85,48,147,.30)",
            brass:"#7A6212",band:"rgba(150,122,26,.38)",word:"rgba(150,122,26,.68)" },
    dark:{  ground:"#130F1D",surface:"#1C1729",s2:"#261E36",ink:"#E5E0EE",inkSoft:"#9E95B2",inkFaint:"#7A7090",rule:"#332944",
            accent:"#A585E4",accentInk:"#C0A9EE",accentSoft:"rgba(165,133,228,.16)",onAccent:"#0E0A16",
            ctlBg:"#241C33",ctlInk:"#E3DCF0",ctlBorder:"#443761",tickNow:"#7B5BBC",tickDone:"rgba(165,133,228,.28)",
            brass:"#DCBB63",band:"rgba(220,187,99,.28)",word:"rgba(220,187,99,.59)" } },

  graphite: { name:"Graphite",
    light:{ ground:"#EAEAEC",surface:"#F5F5F7",s2:"#DBDBDF",ink:"#17181B",inkSoft:"#4C4E54",inkFaint:"#7F8189",rule:"#C6C7CC",
            accent:"#3A4A63",accentInk:"#273448",accentSoft:"rgba(58,74,99,.12)",onAccent:"#F5F5F7",
            ctlBg:"#333F55",ctlInk:"#EFF0F3",ctlBorder:"#242E3F",tickNow:"#242E3F",tickDone:"rgba(58,74,99,.30)",
            brass:"#7A6318",band:"rgba(152,124,32,.38)",word:"rgba(152,124,32,.68)" },
    dark:{  ground:"#131417",surface:"#1B1D21",s2:"#25272D",ink:"#E4E5E9",inkSoft:"#989BA4",inkFaint:"#70737C",rule:"#2F323A",
            accent:"#8CA5CC",accentInk:"#AFC1DE",accentSoft:"rgba(140,165,204,.16)",onAccent:"#0F1013",
            ctlBg:"#222630",ctlInk:"#E0E3EA",ctlBorder:"#414755",tickNow:"#5C79A6",tickDone:"rgba(140,165,204,.28)",
            brass:"#D6BC66",band:"rgba(214,188,102,.28)",word:"rgba(214,188,102,.59)" } }
};

/* ns.css names its variables differently from the history template, so the
   palette is mapped onto the names this page actually uses. Same map as
   math/template.html. */
var VAR_MAP = {
  ground:"--bg", surface:"--panel", s2:"--boxfill", ink:"--fg",
  inkSoft:"--dim", inkFaint:"--boxline", rule:"--line",
  accent:"--a", accentSoft:"--accent-soft", onAccent:"--on-accent"
};

var themeKey = load("theme", "graphite");
if (!THEMES[themeKey]) themeKey = "graphite";

function currentMode(){
  var t = document.documentElement.getAttribute("data-theme");
  if (t === "dark" || t === "light") return t;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(){
  var set = THEMES[themeKey][currentMode()];
  var root = document.documentElement;
  for (var k in VAR_MAP){ if (set[k]) root.style.setProperty(VAR_MAP[k], set[k]); }
  [].forEach.call(document.querySelectorAll(".sw"), function(b){
    b.setAttribute("aria-pressed", b.getAttribute("data-t") === themeKey ? "true" : "false");
  });
}
/* 🚨 THIS PAGE DOES NOT BUILD SWATCHES. The player builds them. What this
   page owns is the MAPPING, handed to the player as a hook - same split as
   maths, and the reason maths once rendered ten colour dots instead of five. */
window.nsOnTheme = function(k){ themeKey = k; applyTheme(); };
applyTheme();
if (window.matchMedia){
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(applyTheme);
}
new MutationObserver(applyTheme).observe(document.documentElement, { attributes:true, attributeFilter:["data-theme"] });
document.body.style.background = "var(--bg)";

var synth = window.speechSynthesis;
var supported = !!synth && typeof window.SpeechSynthesisUtterance === "function";
if (!supported) document.getElementById("nospeech").classList.add("show");

/* Defaults for hosts that do not define these. See voice-player.js. */
if (typeof ART === 'undefined')      { var ART = {}; }
if (typeof VISUALS === 'undefined')  { var VISUALS = []; }
if (typeof WORK === 'undefined')     { var WORK = []; }
if (typeof WORDS === 'undefined')    { var WORDS = []; }
if (typeof QUESTIONS === 'undefined'){ var QUESTIONS = []; }

/* ---------- saved settings and progress ----------
   Keys are shared site-wide on purpose:
     ns:voice / ns:speed / ns:theme   settings, so they carry to every lesson
     ns:done:<lessonId>               progress, so the lesson list can tick it off
   Same origin means /grade-7/ and /history/ read the very same store. */
function load(k, d){ try { var v = localStorage.getItem("ns:" + k); return v === null ? d : v; } catch(e){ return d; } }
function store(k, v){ try { localStorage.setItem("ns:" + k, v); } catch(e){} }
function drop(k){ try { localStorage.removeItem("ns:" + k); } catch(e){} }

/* ---------- colour themes ---------- */
/* Each theme carries a full light and dark set, so switching theme never leaves
   half the page on the old palette. --control-bg stays dark in every theme because
   the select arrow is a light-stroked SVG. */
var THEMES = {
  forest: { name:"Forest",
    light:{ ground:"#E7EDE4",surface:"#F2F7EF",s2:"#D8E2D2",ink:"#152018",inkSoft:"#48594D",inkFaint:"#7B8C7F",rule:"#C2CFBD",
            accent:"#25664A",accentInk:"#174630",accentSoft:"rgba(37,102,74,.12)",onAccent:"#F2F7EF",
            ctlBg:"#1F5A41",ctlInk:"#EDF4EA",ctlBorder:"#164630",tickNow:"#14432E",tickDone:"rgba(37,102,74,.30)",
            brass:"#7E6A16",band:"rgba(158,138,40,.42)",word:"rgba(158,138,40,.74)" },
    dark:{  ground:"#0E1A13",surface:"#14251A",s2:"#1C3123",ink:"#E2EBE2",inkSoft:"#93A896",inkFaint:"#6B8071",rule:"#27402F",
            accent:"#66C293",accentInk:"#93D9B2",accentSoft:"rgba(102,194,147,.16)",onAccent:"#0B160F",
            ctlBg:"#17301F",ctlInk:"#DCEADF",ctlBorder:"#345A41",tickNow:"#3F9B69",tickDone:"rgba(102,194,147,.28)",
            brass:"#D8B355",band:"rgba(216,179,85,.3)",word:"rgba(216,179,85,.62)" } },

  ocean: { name:"Ocean",
    light:{ ground:"#E4EBF0",surface:"#F1F6FA",s2:"#D3DFE8",ink:"#111C24",inkSoft:"#455663",inkFaint:"#788996",rule:"#BCCCD8",
            accent:"#1F5E80",accentInk:"#154257",accentSoft:"rgba(31,94,128,.12)",onAccent:"#F1F6FA",
            ctlBg:"#1B5170",ctlInk:"#E8F1F7",ctlBorder:"#123C53",tickNow:"#123D53",tickDone:"rgba(31,94,128,.30)",
            brass:"#8A6410",band:"rgba(196,132,24,.38)",word:"rgba(196,132,24,.68)" },
    dark:{  ground:"#0B1620",surface:"#122130",s2:"#182C3D",ink:"#DEE9F1",inkSoft:"#8CA1B2",inkFaint:"#657A8B",rule:"#233A4C",
            accent:"#59B4DC",accentInk:"#8CCFEC",accentSoft:"rgba(89,180,220,.16)",onAccent:"#08131B",
            ctlBg:"#152B3C",ctlInk:"#D9E8F2",ctlBorder:"#2E5068",tickNow:"#3A8CB4",tickDone:"rgba(89,180,220,.28)",
            brass:"#E0B65C",band:"rgba(224,182,92,.3)",word:"rgba(224,182,92,.62)" } },

  ember: { name:"Ember",
    light:{ ground:"#F0E9E3",surface:"#F9F4EF",s2:"#E3D8CD",ink:"#231A14",inkSoft:"#5B4C41",inkFaint:"#8E7E72",rule:"#D3C5B7",
            accent:"#96441C",accentInk:"#6C3013",accentSoft:"rgba(150,68,28,.12)",onAccent:"#F9F4EF",
            ctlBg:"#7A3A18",ctlInk:"#F7EDE5",ctlBorder:"#5C2B11",tickNow:"#5C2B11",tickDone:"rgba(150,68,28,.30)",
            brass:"#6B5A11",band:"rgba(120,104,26,.38)",word:"rgba(120,104,26,.68)" },
    dark:{  ground:"#1A120C",surface:"#241A12",s2:"#2F231A",ink:"#EDE2D8",inkSoft:"#AC998A",inkFaint:"#82705F",rule:"#3E2E22",
            accent:"#E08A4E",accentInk:"#EEAB79",accentSoft:"rgba(224,138,78,.16)",onAccent:"#15100A",
            ctlBg:"#2C2016",ctlInk:"#EFE3D8",ctlBorder:"#54402E",tickNow:"#B96C31",tickDone:"rgba(224,138,78,.28)",
            brass:"#D6C169",band:"rgba(214,193,105,.28)",word:"rgba(214,193,105,.59)" } },

  violet: { name:"Violet",
    light:{ ground:"#E9E6EF",surface:"#F4F2F9",s2:"#DAD5E5",ink:"#1A1626",inkSoft:"#4F485F",inkFaint:"#827A93",rule:"#C6BFD6",
            accent:"#553093",accentInk:"#3D216B",accentSoft:"rgba(85,48,147,.12)",onAccent:"#F4F2F9",
            ctlBg:"#4A2A80",ctlInk:"#EFEAF7",ctlBorder:"#361D5F",tickNow:"#341C5D",tickDone:"rgba(85,48,147,.30)",
            brass:"#7A6212",band:"rgba(150,122,26,.38)",word:"rgba(150,122,26,.68)" },
    dark:{  ground:"#130F1D",surface:"#1C1729",s2:"#261E36",ink:"#E5E0EE",inkSoft:"#9E95B2",inkFaint:"#7A7090",rule:"#332944",
            accent:"#A585E4",accentInk:"#C0A9EE",accentSoft:"rgba(165,133,228,.16)",onAccent:"#0E0A16",
            ctlBg:"#241C33",ctlInk:"#E3DCF0",ctlBorder:"#443761",tickNow:"#7B5BBC",tickDone:"rgba(165,133,228,.28)",
            brass:"#DCBB63",band:"rgba(220,187,99,.28)",word:"rgba(220,187,99,.59)" } },

  graphite: { name:"Graphite",
    light:{ ground:"#EAEAEC",surface:"#F5F5F7",s2:"#DBDBDF",ink:"#17181B",inkSoft:"#4C4E54",inkFaint:"#7F8189",rule:"#C6C7CC",
            accent:"#3A4A63",accentInk:"#273448",accentSoft:"rgba(58,74,99,.12)",onAccent:"#F5F5F7",
            ctlBg:"#333F55",ctlInk:"#EFF0F3",ctlBorder:"#242E3F",tickNow:"#242E3F",tickDone:"rgba(58,74,99,.30)",
            brass:"#7A6318",band:"rgba(152,124,32,.38)",word:"rgba(152,124,32,.68)" },
    dark:{  ground:"#131417",surface:"#1B1D21",s2:"#25272D",ink:"#E4E5E9",inkSoft:"#989BA4",inkFaint:"#70737C",rule:"#2F323A",
            accent:"#8CA5CC",accentInk:"#AFC1DE",accentSoft:"rgba(140,165,204,.16)",onAccent:"#0F1013",
            ctlBg:"#222630",ctlInk:"#E0E3EA",ctlBorder:"#414755",tickNow:"#5C79A6",tickDone:"rgba(140,165,204,.28)",
            brass:"#D6BC66",band:"rgba(214,188,102,.28)",word:"rgba(214,188,102,.59)" } }
};

var VAR_MAP = {
  ground:"--ground", surface:"--surface", s2:"--surface-2", ink:"--ink",
  inkSoft:"--ink-soft", inkFaint:"--ink-faint", rule:"--rule",
  accent:"--verdigris", accentInk:"--verdigris-ink", accentSoft:"--verdigris-soft",
  onAccent:"--on-accent", ctlBg:"--control-bg", ctlInk:"--control-ink",
  ctlBorder:"--control-border", tickNow:"--tick-now", tickDone:"--tick-done",
  brass:"--brass", band:"--band", word:"--word"
};

/* Graphite is the default reading theme. Paul, 2026-08-29. Forest was only
   ever the default because it was written first. */
var themeKey = load("theme", "graphite");
if (!THEMES[themeKey]) themeKey = "graphite";

function currentMode(){
  var t = document.documentElement.getAttribute("data-theme");
  if (t === "dark" || t === "light") return t;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(){
  var set = THEMES[themeKey][currentMode()];
  var root = document.documentElement;
  for (var k in VAR_MAP){
    if (set[k]) root.style.setProperty(VAR_MAP[k], set[k]);
  }
  [].forEach.call(document.querySelectorAll(".sw"), function(b){
    b.setAttribute("aria-pressed", b.getAttribute("data-t") === themeKey ? "true" : "false");
  });
  /* Math and English map the same palette onto ns.css names (--bg, --panel,
     --fg) rather than the history names. They hang their own mapper here, so
     one set of swatches drives every page instead of each template building a
     second row of its own. */
  if (typeof window.nsOnTheme === "function") { try { window.nsOnTheme(themeKey); } catch (e) {} }
}

(function buildSwatches(){
  var wrap = document.getElementById("swatches");
  Object.keys(THEMES).forEach(function(k){
    var b = document.createElement("button");
    b.className = "sw";
    b.type = "button";
    b.setAttribute("data-t", k);
    b.title = THEMES[k].name;
    b.setAttribute("aria-label", THEMES[k].name + " colours");
    var d = THEMES[k].dark;
    b.style.background = "linear-gradient(135deg," + d.accent + " 0 50%," + d.ground + " 50% 100%)";
    b.addEventListener("click", function(){
      themeKey = k;
      store("theme", k);
      applyTheme();
    });
    wrap.appendChild(b);
  });
})();

applyTheme();
if (window.matchMedia){
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(applyTheme);
}
new MutationObserver(applyTheme).observe(document.documentElement, { attributes:true, attributeFilter:["data-theme"] });

/* 🚨 The explainer's script, or []. build-lessons.js rewrites this ONE line and
   fails the build if it does not find exactly one of it, so the template's own
   value can never reach a student. */
/* ── THE DRAWING LIBRARY ───────────────────────────────────────────────────
   Paul, 2026-09-05: "i think that would be kind of cool if we did more svgs as
   visual elements."
   One place for every drawing a Visual Panel can show. A lesson names one with
   `art: "car"` and never contains SVG itself, so a drawing is written once,
   reused across lessons and subjects, and a lesson author picks it off a list.

   🚨 THESE ARE LUCIDE ICONS, ISC LICENSED, COPIED IN RATHER THAN LINKED.
   lucide.dev · ISC · Copyright (c) Lucide Icons and Contributors. Permissive,
   commercial use fine, NO attribution required - which is why this set and not
   Font Awesome free (CC BY) or OpenMoji (share-alike).
   ⚠️ COPIED, NOT HOTLINKED, on purpose: no external dependency, nothing to break
   when a CDN moves, and the site keeps working offline.
   ⚠️ Paul sent svgrepo.com/svg/490618/car-sports and it may well be fine - SVG
   Repo is a search engine over many sets and the licence varies per icon. It was
   not used because its page sits behind a rate limiter and the licence could not
   be read, and an unverified third-party asset does not go on a public site.
   My own hand-drawn car was the interim and Paul's verdict was "kind of ugly",
   which it was. Use a real icon set.

   🚨 RULES FOR ANYTHING ADDED HERE
   1. `currentColor` for every stroke. A drawing then takes the lesson's own
      palette and works on both themes with no second copy.
   2. No text inside the SVG. Letters are a FONT problem and this repo has
      rejected hand-drawn letterforms twice - the label, body and note around the
      drawing are real text and always will be.
   3. Keep the source set's own viewBox and stroke width. Redrawing an icon to
      "fit" is how a set stops looking like a set.
   4. Record the licence above before adding from a new source.
   ⚠️ These are ICONS - small, uniform, abstract. They are for a car beside a
   distance or a cart beside a total. They are NOT a substitute for the lesson
   artwork Paul generates in ChatGPT, which is settled and stays. */
/* 🚨 A SECOND STYLE: SOLID, FILLED SILHOUETTES.
   Paul picked this car himself and confirmed the licence off the icon page:
     svgrepo.com/svg/490618/car-sports
     COLLECTION: Home Assistant Outlined Icons · LICENSE: PD License
     AUTHOR: IonutNeagu
   PD is Public Domain - copy, use commercially, modify, no attribution owed.
   The provenance is recorded anyway, because the next person to look at this
   file should not have to re-derive whether it was allowed.
   ⚠️ SOLID AND STROKE DO NOT MIX WELL IN ONE PANEL. A filled silhouette beside
   single-weight line art reads as two sets, because it is two sets. If solid
   wins, the Lucide entries above should be swapped for their filled variants
   rather than left to sit alongside. Paul's call. */

/* ---------- build the story ---------- */
/* 🚨 WHICH PARAGRAPH EACH SENTENCE IS IN. The explainer blanks the moment the
   reading leaves the paragraph its picture belongs to. Paul, 2026-09-04: "i
   would suggest if you are not showing an example at that point it is blank."
   The paragraph is the right unit because it is already the lesson's own: an
   empty string inside a part closes one and opens the next, so "the three
   examples" and "the explanation after them" are separate by construction
   rather than by a sentence range someone has to keep in step. */
var SENTPARA = [];
var paraNo = 0;

var SENT = [];
var storyEl = document.getElementById("story");

PARTS.forEach(function(part){
  /* A new section always starts a new paragraph, even though no empty string
     separates them - without this the last paragraph of one part and the first
     of the next share a number, and a picture bleeds across the heading. */
  paraNo++;
  var sec = document.createElement("section");
  sec.className = "part";
  /* A part may have no title - maths uses one untitled block, because its
     heading is already the page section above it. An empty <h2> would still
     take its margin and read as a gap. */
  if (part.title) {
    var h = document.createElement("h2");
    h.textContent = part.title;
    sec.appendChild(h);
  }
  var p = document.createElement("p");
  p.className = "para";
  part.s.forEach(function(text){
    /* 🚨 AN EMPTY STRING IS A PARAGRAPH BREAK, not a sentence.
       Paul, 2026-08-29: "i think you need to use paragraphs and make it simple
       to understand." A section used to be ONE paragraph however long it ran,
       which gave a struggling reader a nine-sentence wall with no landing spot.
       ⚠️ It must NOT enter SENT. The clip index in voice.json is a position in
       SENT, so counting a break as a sentence would play every line's audio one
       place late. tools/bake-voice.js skips them by the same rule - if you
       change the rule, change it in BOTH or the whole lesson goes off by one. */
    if (!String(text).trim()) {
      if (p.childNodes.length) sec.appendChild(p);
      paraNo++;
      p = document.createElement("p");
      p.className = "para";
      return;
    }
    var i = SENT.length;
    var span = document.createElement("span");
    span.className = "sent";
    span.id = "s" + i;
    span.setAttribute("data-i", i);
    // word spans with char offsets, so speech boundaries can light them up
    var offsets = [];
    var cursor = 0;
    text.split(" ").forEach(function(w, k){
      if (k > 0) { span.appendChild(document.createTextNode(" ")); cursor += 1; }
      var ws = document.createElement("span");
      ws.className = "w";
      ws.textContent = w;
      span.appendChild(ws);
      offsets.push({ el: ws, start: cursor, end: cursor + w.length });
      cursor += w.length;
    });
    p.appendChild(span);
    p.appendChild(document.createTextNode(" "));
    SENT.push({ text: text, el: span, words: offsets });
    SENTPARA.push(paraNo);
  });
  /* the last paragraph, unless a stray break at the end left it empty */
  if (p.childNodes.length) sec.appendChild(p);

  /* 🚨 THE COMPARE BOX IS BUILT AFTER THE PARAGRAPHS AND OUTSIDE SENT.
     Every sentence in it is quoted from the story above, so the student is
     re-reading, not being told something new. build-lessons.js FAILS the build
     if a quoted line is not in the lesson verbatim - see requireBoxes(). */
  if (part.box) {
    var bx = part.box;
    var box = document.createElement("div");
    box.className = "cbox";

    var bh = document.createElement("p");
    bh.className = "cbox-h";
    bh.textContent = bx.title;
    box.appendChild(bh);

    if (bx.lead) {
      var bl = document.createElement("p");
      bl.className = "cbox-lead";
      bl.textContent = bx.lead;
      box.appendChild(bl);
    }

    var cols = document.createElement("div");
    cols.className = "cbox-cols";
    bx.cols.forEach(function(c){
      var col = document.createElement("div");
      col.className = "cbox-col";
      var lb = document.createElement("p");
      lb.className = "cbox-label";
      lb.textContent = c.label;
      col.appendChild(lb);
      var cs = document.createElement("p");
      cs.className = "cbox-s";
      cs.textContent = c.s;
      col.appendChild(cs);
      var cw = document.createElement("p");
      cw.className = "cbox-why";
      cw.textContent = c.why;
      col.appendChild(cw);
      cols.appendChild(col);
    });
    box.appendChild(cols);

    var bt = document.createElement("p");
    bt.className = "cbox-test";
    bt.textContent = bx.test;
    box.appendChild(bt);

    sec.appendChild(box);
  }

  storyEl.appendChild(sec);
});

/* ---------- read aloud ---------- */
/* Two engines.
   STUDIO  — pre-rendered Google Cloud TTS clips, embedded below as data URIs, with a
             per-word timing array from Google's SSML timepoints. Best quality, no network.
   DEVICE  — the browser's own speechSynthesis. Always present, always the fallback.
   AUDIO stays null until the clips are generated; the page runs on DEVICE until then. */
var AUDIO = null;        /* the ACTIVE baked track: { voice, clips:[...] } */
var AUDIO_TRACKS = [];   /* every baked track for this lesson */

/* Fingerprint of the text this page is actually showing, used to refuse audio
   baked from a different version of the lesson.
   🚨 tools/bake-voice.js runs the IDENTICAL function over the sentences it
   bakes. If you change one you MUST change the other, or every lesson loses its
   baked voice at once - the hashes would never match again. FNV-1a over UTF-16
   code units: no crypto, works the same in Node and in a browser. */
function nsTextHash(list){
  var h = 2166136261;
  var s = list.join("\n");
  for (var i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return ("0000000" + h.toString(16)).slice(-8);
}
var TEXT_HASH = nsTextHash(SENT.map(function(s){ return s.text; }));

var MEDIA_BASE = "";

(function loadBakedVoice(){
  fetch("voice.json", { cache: "force-cache" })
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(j){
      var tr = (j && j.tracks) || [];
      if (!tr.length) return;
      /* Absent on lessons baked before R2, and that is what keeps their
         absolute /lessons/... paths working. See mediaUrl(). */
      MEDIA_BASE = (j && j.base) || "";
      /* 🚨 A STALE MANIFEST IS WORSE THAN NO AUDIO, because it is confidently
         wrong: the highlight walks the new text while the voice reads the old.

         ⚠️ COUNTING SENTENCES IS NOT ENOUGH, and this nearly shipped. On
         2026-08-29 the history lessons lost a six-line opening block and gained
         a six-line closing one. The count matched exactly, the count check
         passed, and every clip would have played against a different sentence.

         So the manifest carries a hash of the text it was baked FROM, and the
         page carries the hash of the text it is showing. If they differ the
         lesson has been edited since the bake and the audio is refused - the
         page falls back to a device voice, which is always in step because it
         reads what is actually on screen. */
      if (j.textHash && TEXT_HASH && j.textHash !== TEXT_HASH){
        AUDIO = null;
        return;
      }
      tr = tr.filter(function(t){ return t.clips && t.clips.length === SENT.length; });
      if (!tr.length){ AUDIO = null; return; }
      AUDIO_TRACKS = tr;
      AUDIO = tr[0];
      engine = "baked";
      /* Rebuild the picker: it was built before this arrived, so it does not
         know the Built-in voice exists yet. Rebuilding also re-runs the
         "restore the saved pick" logic, which now prefers the baked voice. */
      if (typeof window.nsRebuildVoices === "function") window.nsRebuildVoices();
      if (typeof window.syncVoiceUI === "function") window.syncVoiceUI();
      var ns = document.getElementById("nospeech");
      if (ns){ ns.style.display = "none"; ns.classList.remove("show"); }
      var pb = document.getElementById("play");
      if (pb){ pb.disabled = false; pb.style.opacity = ""; }
    })
    .catch(function(){ /* not baked yet - the device voice still works */ });
})();

/* Google Cloud voices, fetched live with the viewer's own key. Curated rather
   than listed from the API: these are the ones that support SSML marks, which
   is what gives exact per-word timing. British first, per Paul. */
/* 🚨 UK ONLY. THE TWO US VOICES ARE GONE, 2026-09-04.
   They should never have been offered: the UK-only rule was settled on
   2026-08-29 and it is a correctness argument, not taste. Paul: "even if i
   select US voices it wont say 3s as three's it will say instead three es."
   A voice that mispronounces the material is not a lesser option, it is a
   wrong one.
   They also caused the highlight bug he found on 2026-09-04 - picking one put
   the player in word-highlight mode, the request failed, and the lesson read
   aloud with nothing lit up.
   ⚠️ Do not add a US voice back. If one is ever needed, the pronunciation
   problem has to be solved first. */
var GOOGLE_VOICES = [
  { id:"en-GB-Neural2-B", label:"UK male (Neural2 B)" },
  { id:"en-GB-Neural2-D", label:"UK male (Neural2 D)" },
  { id:"en-GB-Neural2-A", label:"UK female (Neural2 A)" }
];
var ttsKey = load("ttskey", "");

/* Bounded, oldest-out. 60 clips is more than two full lessons on one voice,
   so in normal use nothing is ever evicted and the cache behaves exactly as it
   did before. It only bites when someone switches voices repeatedly, which is
   the case that used to grow without limit. */
var CLIP_CAP = 60;
var clipCache = {};          // "voice|index" -> { src, marks }
var clipOrder = [];          // keys, oldest first
function cacheClip(key, clip){
  if (!clipCache[key]) clipOrder.push(key);
  clipCache[key] = clip;
  while (clipOrder.length > CLIP_CAP){
    var old = clipOrder.shift();
    if (old !== key) delete clipCache[old];
  }
}

function hasKey(){ return !!ttsKey; }

function hasStudio(){
  return !!(AUDIO && AUDIO.clips && AUDIO.clips.length === SENT.length);
}
/* Point AUDIO at a named track. Returns false if this lesson has no such
   voice, so the caller can fall back rather than play silence. */
function useTrack(id){
  for (var i = 0; i < AUDIO_TRACKS.length; i++){
    if (AUDIO_TRACKS[i].id === id){ AUDIO = AUDIO_TRACKS[i]; return true; }
  }
  return false;
}

function xmlEsc(s){
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
          .replace(/"/g,"&quot;").replace(/'/g,"&apos;");
}

/* One sentence -> MP3 + a start time per word. Cached, so replaying a sentence
   or scrubbing back costs nothing and never bills twice. */
function fetchClip(i, voiceId){
  var ck = voiceId + "|" + i;
  if (clipCache[ck]) return Promise.resolve(clipCache[ck]);
  var words = SENT[i].text.split(" ");
  var ssml = "<speak>" + words.map(function(w, k){
    return '<mark name="w' + k + '"/>' + xmlEsc(w);
  }).join(" ") + "</speak>";

  return fetch("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=" + encodeURIComponent(ttsKey), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input: { ssml: ssml },
      voice: { languageCode: voiceId.slice(0, 5), name: voiceId },
      audioConfig: { audioEncoding: "MP3", speakingRate: rateVal() },
      enableTimePointing: ["SSML_MARK"]
    })
  }).then(function(r){
    return r.json().then(function(j){
      if (!r.ok) throw new Error(j.error ? j.error.message : "HTTP " + r.status);
      return j;
    });
  }).then(function(j){
    var marks = new Array(words.length).fill(0);
    (j.timepoints || []).forEach(function(tp){
      var n = parseInt(String(tp.markName).slice(1), 10);
      if (!isNaN(n) && n < marks.length) marks[n] = tp.timeSeconds;
    });
    var clip = { src: "data:audio/mpeg;base64," + j.audioContent, marks: marks };
    cacheClip(ck, clip);
    return clip;
  });
}

var synth = window.speechSynthesis;
var supported = !!synth && typeof window.SpeechSynthesisUtterance === "function";
var idx = 0, playing = false, gen = 0, voice = null;
var engine = "device";       // "google" | "baked" | "device"
var googleVoice = load("gvoice", GOOGLE_VOICES[0].id);
var audioEl = null, rafId = null;
var playBtn = document.getElementById("play");
var scrub = document.getElementById("scrub");
var posEl = document.getElementById("pos");

function note(msg, kind){
  var el = document.getElementById("keynote");
  if (!el) return;
  el.className = "keynote" + (kind ? " " + kind : "");
  if (msg) { el.textContent = msg; } else { el.innerHTML = "Your key is stored only in this browser and is sent only to the provider it belongs to. Paste a Google Cloud Text-to-Speech key for the built-in voices. <a href=\"https://cloud.google.com/text-to-speech\" target=\"_blank\" rel=\"noopener\">Google Cloud TTS</a> &middot; <a href=\"https://elevenlabs.io/\" target=\"_blank\" rel=\"noopener\">ElevenLabs</a>"; }
  if (msg && kind === "bad") document.getElementById("keyrow").classList.add("show");
}
window.syncVoiceUI = function(){};

if (!supported && !hasStudio() && !hasKey()){
  document.getElementById("nospeech").style.display = "block";
  playBtn.disabled = true;
  playBtn.style.opacity = ".5";
} else {
  // The default browser voice on Windows is usually Microsoft David or Zira, the old
  // robotic SAPI pair. The good free voices are the non-local ones: Google's, and the
  // Windows 11 "Natural" set. Rank by name so the best available wins, and let him pick.
  var voiceSel = document.getElementById("voice");
  var voiceRow = document.getElementById("voicerow");
  var voices = [];

  function rank(v){
    var n = v.name || "";
    // Paul's pick. Wins outright wherever Chrome ships it.
    if (/^google uk english male$/i.test(n.trim())) return 1000;
    var score = 0;
    if (/natural/i.test(n)) score += 100;          // Windows 11 neural voices
    if (/neural/i.test(n)) score += 90;
    if (/^google/i.test(n)) score += 75;           // Chrome's own, clearly better than SAPI
    if (/online/i.test(n)) score += 55;
    if (/\b(ava|andrew|emma|brian|aria|guy|jenny|michelle|steffan|christopher|eric)\b/i.test(n)) score += 45;
    if (/\b(samantha|alex|siri|evan|nathan|serena|daniel|arthur|oliver)\b/i.test(n)) score += 60; // macOS / iOS
    if (/\b(david|zira|mark|hazel|susan|george|catherine)\b/i.test(n)) score -= 60; // legacy SAPI
    if (/compact|eloquence|espeak/i.test(n)) score -= 80;
    if (v.localService === false) score += 15;
    if (/^en[-_]GB/i.test(v.lang)) score += 12;    // British first, per Paul
    else if (/^en[-_]US/i.test(v.lang)) score += 6;
    return score;
  }

  function saved(){ return load("voice", null); }
  function save(name){ store("voice", name); }

  window.nsRebuildVoices = function(){ loadVoices(); };
  var lastVoiceCount = -1;
  function loadVoices(){
    var all = supported ? (synth.getVoices() || []) : [];
    lastVoiceCount = all.length;
    voices = all.filter(function(v){ return /^en([-_]|$)/i.test(v.lang || ""); });
    if (!voices.length) voices = all.slice();
    voices.sort(function(a, b){ return rank(b) - rank(a); });
    if (voices.length) voice = voices[0];

    voiceSel.innerHTML = "";

    /* 🚨 THE LIVE GOOGLE VOICES ARE NOT OFFERED, 2026-09-04.
       They appeared whenever a key was stored in the browser, and Paul still had
       one from testing on 2026-08-29. It no longer works, so every Neural2 option
       failed: the player switched to word-highlight mode, suppressed the sentence
       band, lost the request, fell back to a device voice, and read the whole
       lesson with nothing lit up.

       Paul, after finding it himself: "you have now two uk male voices on the pc.
       i think you added voices in but its not the Neural2 ones that work at all.
       just the regular ones for UK Voice Male and UK Voice Female work for the
       highlighted."

       He is right. Three broken options, two working ones, and duplicate "UK
       male" labels between the two groups. The picker now offers only what
       actually plays: NexVoice where a lesson is baked, and the device's own UK
       voices otherwise.
       ⚠️ THIS IS NOT THE SAME AS NexVoice. Baked audio comes from
       tools/bake-voice.js at BUILD time and still works - that is the path with
       real per-word timings. What is gone is the in-page live fetch.
       ⚠️ GOOGLE_VOICES and the fetch code are left in place, unreferenced by the
       picker, so re-enabling is one block when a key is rotated (ROADMAP 14).
       Deleting them would mean rebuilding the SSML mark handling from scratch. */
    /* NexVoice is always listed. When a lesson has not been recorded yet it
       is greyed out rather than hidden, so a reader can see it is coming and
       we can keep writing lessons without waiting on the audio. */
    if (AUDIO_TRACKS.length){
      AUDIO_TRACKS.forEach(function(t){
        var o = document.createElement("option");
        o.value = "__studio__:" + t.id;
        o.textContent = t.label || "NexVoice";
        voiceSel.appendChild(o);
      });
    } else {
      var nv = document.createElement("option");
      nv.value = "__studio__";
      nv.textContent = "NexVoice — not available";
      nv.disabled = true;
      voiceSel.appendChild(nv);
    }

    /* ── THE FALLBACK VOICES ──────────────────────────────────────────────
       🚨 NEVER REQUIRE A NAME TO CONTAIN "MALE" OR "FEMALE". Paul, 2026-08-29,
       from his S26: the phone reported 92 voices and the lesson offered none.

       Desktop Chrome names voices "Google UK English Male". Android does not -
       it uses identifiers like en-gb-x-gbb-network, with no gender word and
       often no readable name at all. The old picker asked every candidate
       whether it was male or female, got "neither" 92 times, and produced an
       empty list on the exact device this was all built for.

       So selection is by LANGUAGE and quality, which every platform reports
       honestly. Gender is used only to LABEL, never to qualify. */
    function scoreOf(v){
      var n = (v.name || "") + " " + (v.voiceURI || "");
      var s = 0;
      if (/natural|neural|wavenet|enhanced|premium/i.test(n)) s += 60;
      if (/network|online/i.test(n)) s += 25;   /* Android marks its good ones */
      if (/google|siri/i.test(n)) s += 20;
      if (v.localService === false) s += 12;
      if (/microsoft (david|zira|mark)/i.test(n)) s -= 50;
      if (/espeak|compact|pico/i.test(n)) s -= 60;
      return s;
    }
    function isGB(v){ return /^en[-_]GB/i.test(v.lang || ""); }
    function isUS(v){ return /^en[-_]US/i.test(v.lang || ""); }
    function genderOf(v){
      var n = v.name || "";
      if (/female/i.test(n)) return "female";
      if (/male/i.test(n)) return "male";
      /* no name to read - fall back to the Android voice id */
      var id = ((v.voiceURI || "") + " " + n).toLowerCase();
      if (/-x-(gbb|gbd|usm|iom|ahb)/.test(id)) return "male";
      if (/-x-(gba|gbc|usf|iof|aha)/.test(id)) return "female";
      return "";
    }
    function bestOf(list, taken){
      var pool = list.filter(function(v){ return taken.indexOf(v) < 0; });
      pool.sort(function(a, b){ return scoreOf(b) - scoreOf(a); });
      return pool[0] || null;
    }

    var taken = [];
    var picks = [];
    function add(v, label){
      if (!v) return;
      taken.push(v);
      picks.push([v, label]);
    }

    /* 🚨 UK ONLY. The US voices read "3s" as "three es" instead of "threes",
       which is wrong in a maths lesson about the three times table - a voice
       that mispronounces the material is not a lesser choice, it is an
       incorrect one. Two entries, and only two. */
    var gb = voices.filter(isGB);
    var male = gb.filter(function(v){ return genderOf(v) === "male"; });
    var female = gb.filter(function(v){ return genderOf(v) === "female"; });
    /* Android names carry no gender, so when it cannot be read we simply take
       the two best British voices and label them 1 and 2 rather than guessing
       at which is which. */
    /* One of each gender where the device says so, otherwise the best British
       voices it has. */
    add(bestOf(male, taken) || bestOf(gb, taken), null);
    add(bestOf(female, taken) || bestOf(gb, taken), null);
    /* Still short? Only then reach outside Britain - and it will be labelled
       for what it actually is, not as a British voice. */
    while (picks.length < 2){
      var any = bestOf(voices, taken);
      if (!any) break;
      add(any, null);
    }

    /* ── LABEL FROM THE VOICE, NEVER FROM ITS POSITION ──────────────────── */
    function accentOf(v){
      var l = (v.lang || "").toUpperCase();
      if (/^EN[-_]GB/.test(l)) return "UK";
      if (/^EN[-_]US/.test(l)) return "US";
      if (/^EN[-_]AU/.test(l)) return "Australian";
      if (/^EN[-_]IN/.test(l)) return "Indian";
      if (/^EN[-_]IE/.test(l)) return "Irish";
      if (/^EN[-_]ZA/.test(l)) return "South African";
      if (/^EN[-_]CA/.test(l)) return "Canadian";
      return "English";
    }
    var used = {};
    picks.forEach(function(p){
      var acc = accentOf(p[0]);
      var g = genderOf(p[0]);
      var base = (acc === "English" ? "Voice" : acc + " Voice") + (g ? " " + (g === "male" ? "Male" : "Female") : "");
      used[base] = (used[base] || 0) + 1;
      p[1] = base;
      p[2] = base;                 /* remember the base for the numbering pass */
    });
    /* number only where two entries would otherwise read identically */
    var seenBase = {};
    picks.forEach(function(p){
      if (used[p[2]] > 1){
        seenBase[p[2]] = (seenBase[p[2]] || 0) + 1;
        p[1] = p[2] + " " + seenBase[p[2]];
      }
    });

    if (picks.length){
      picks.forEach(function(p){
        var o = document.createElement("option");
        o.value = "d:" + p[0].name;
        o.textContent = p[1];
        voiceSel.appendChild(o);
      });
      /* the device default used elsewhere should be the best of these, not
         whatever the OS listed first */
      voice = picks[0][0];
    }

    /* 🚨 DROP A SAVED GOOGLE PICK. The live Google voices are no longer offered
       (see the note above), but a reader who chose one before still has "g:..."
       in their browser storage. Without this it is restored, fails to match any
       option, and the fallback below is reached only by luck. Paul had exactly
       this state on his PC on 2026-09-04. */
    var want = saved();
    if (want && want.indexOf("g:") === 0) { want = null; store("voice", ""); }
    if (!want || !selectValue(want)){
      /* NexVoice first when the lesson has it - it is the reason the site has
         a voice at all. A saved pick still wins, so a reader who chose
         something else keeps it. */
      if (AUDIO_TRACKS.length) selectValue("__studio__:" + AUDIO_TRACKS[0].id);
      else if (AUDIO_TRACKS.length) selectValue("__studio__:" + AUDIO_TRACKS[0].id);
      else if (voice) selectValue("d:" + voice.name);
    }
    applyVoiceChoice(voiceSel.value, false);
    if (voiceSel.options.length) voiceRow.classList.add("show");
    renderVsel();
  }

  /* Mirror the hidden select into our own dropdown. Rebuilt whenever the
     voice list changes, which is the only time it can differ. */
  function renderVsel(){
    var btn = document.getElementById("vselBtn");
    var list = document.getElementById("vselList");
    var label = document.getElementById("vselLabel");
    if (!btn || !list || !label) return;
    list.innerHTML = "";
    [].forEach.call(voiceSel.options, function(o){
      var li = document.createElement("li");
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", String(o.selected));
      if (o.disabled) li.setAttribute("aria-disabled", "true");
      li.textContent = o.textContent;
      if (!o.disabled){
        li.addEventListener("click", function(){
          voiceSel.value = o.value;
          voiceSel.dispatchEvent(new Event("change", { bubbles: true }));
          closeVsel();
          renderVsel();
        });
      }
      list.appendChild(li);
    });
    var sel = voiceSel.options[voiceSel.selectedIndex];
    label.textContent = sel ? sel.textContent : "Voice";
  }
  function closeVsel(){
    var btn = document.getElementById("vselBtn");
    var list = document.getElementById("vselList");
    if (!btn || !list) return;
    list.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }
  (function wireVsel(){
    var btn = document.getElementById("vselBtn");
    var list = document.getElementById("vselList");
    if (!btn || !list) return;
    btn.addEventListener("click", function(e){
      e.stopPropagation();
      var open = list.hidden;
      list.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
    /* a menu that will not close is worse than no menu */
    document.addEventListener("click", function(e){
      if (!list.hidden && !list.contains(e.target) && e.target !== btn) closeVsel();
    });
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape") closeVsel();
    });
  })();
  window.nsRenderVsel = renderVsel;

  function selectValue(v){
    var found = false;
    [].forEach.call(voiceSel.querySelectorAll("option"), function(o){
      if (o.value === v){ o.selected = true; found = true; }
    });
    return found;
  }

  function applyVoiceChoice(val, persist){
    if (!val) return;
    if (val.indexOf("g:") === 0){
      engine = "google";
      googleVoice = val.slice(2);
      store("gvoice", googleVoice);
    } else if (val.indexOf("__studio__") === 0){
      var id = val.split(":")[1];
      if (id) useTrack(id);
      engine = "baked";
    } else {
      engine = "device";
      voice = voices.filter(function(v){ return "d:" + v.name === val; })[0] || voice;
    }
    if (persist) save(val);
  }

  window.syncVoiceUI = function(){
    if (engine === "device" && voice) selectValue("d:" + voice.name);
  };

  voiceSel.addEventListener("change", function(){
    applyVoiceChoice(voiceSel.value, true);
    note("", "");
    if (playing) speak(idx);
  });

  /* ---- API key ---- */
  var keyRow = document.getElementById("keyrow");
  var keyIn = document.getElementById("ttskey");
  document.getElementById("keyToggle").addEventListener("click", function(){
    var open = keyRow.classList.toggle("show");
    this.setAttribute("aria-expanded", String(open));
    if (open) keyIn.focus();
  });
  if (ttsKey) keyIn.value = ttsKey;
  document.getElementById("keySave").addEventListener("click", function(){
    var v = keyIn.value.trim();
    if (!v){ note("Paste a key first.", "bad"); return; }
    ttsKey = v; store("ttskey", v); clipCache = {};
    note("Key saved. Google Cloud voices are now in the list.", "good");
    loadVoices();
    selectValue("g:" + googleVoice);
    applyVoiceChoice(voiceSel.value, true);
  });
  document.getElementById("keyClear").addEventListener("click", function(){
    ttsKey = ""; drop("ttskey"); clipCache = {}; keyIn.value = "";
    engine = "device";
    note("Key removed. Back to this device's voice.", "");
    loadVoices();
  });

  loadVoices();
  // Chrome populates the list asynchronously, so this fires after the first empty read
  if (supported && typeof synth.onvoiceschanged !== "undefined") synth.onvoiceschanged = loadVoices;

  /* The event is unreliable, so watch the count as well. Rebuilds only when it
     actually changes, and gives up after ~20s by which point any device that
     is going to report voices has done so. */
  (function warmVoicesOnGesture(){
    if (!supported) return;
    var done = false;
    function warm(){
      if (done) return;
      done = true;
      try {
        /* an empty utterance: no sound, but it forces Android to load voices */
        var u = new SpeechSynthesisUtterance(" ");
        u.volume = 0;
        synth.speak(u);
        synth.cancel();
      } catch (e) {}
      /* the list can take a moment to appear even after the nudge */
      setTimeout(loadVoices, 120);
      setTimeout(loadVoices, 600);
      setTimeout(loadVoices, 1600);
      ["pointerdown", "touchstart", "keydown"].forEach(function(ev){
        document.removeEventListener(ev, warm, true);
      });
    }
    ["pointerdown", "touchstart", "keydown"].forEach(function(ev){
      document.addEventListener(ev, warm, true);
    });
  })();

  (function watchVoices(){
    if (!supported) return;
    var checks = 0;
    var t = setInterval(function(){
      checks++;
      var n = (synth.getVoices() || []).length;
      if (n !== lastVoiceCount) loadVoices();
      if (checks > 80 || (n > 0 && checks > 12)) clearInterval(t);
    }, 250);
  })();
}

var ticks = SENT.map(function(_, i){
  var t = document.createElement("span");
  t.className = "tick";
  t.setAttribute("data-i", i);
  scrub.appendChild(t);
  return t;
});
scrub.setAttribute("aria-valuemax", String(SENT.length));

function paint(){
  SENT.forEach(function(s, i){
    /* 🚨 WORD OR SENTENCE, NEVER BOTH. NexVoice has real per-word timings, so
       it marks the WORD and the sentence band would only compete with it.
       Every other voice has no usable timing at all, so it marks the SENTENCE.
       Dragging always shows the band, because then you are looking for a line
       rather than following one. */
    /* 🚨 NO HIGHLIGHT WHILE THE VISUAL PANEL IS OPEN. Paul, 2026-09-05: "i
       noticed the highlighted text still shows with the panel open and it should
       not do that. the understanding is the highlighted text only shows and
       moves down the page if the visual panel is closed."
       Consistent with the panel already freezing the scroll: with it open the
       student is watching the panel, and a band creeping down text he is not
       looking at is the divided attention this whole feature exists to remove.
       Closing it hands both the highlight and the scrolling back at once. */
    s.el.classList.toggle("reading",
      i === idx && !demoOpen() && ((playing && !wordMode()) || dragging));
    var want = "tick" + (i < idx ? " done" : (i === idx ? " now" : ""));
    if (ticks[i].className !== want) ticks[i].className = want;   /* only if changed */
  });
  posEl.textContent = "Sentence " + (idx + 1) + " of " + SENT.length;
  scrub.setAttribute("aria-valuenow", String(idx + 1));
  /* 🚨 AN ICON, AND THE BUTTON KEEPS ITS SHAPE. Paul, 2026-08-29: "instead of
     the button say read to me it just shows a play and pause icon inside of
     the button. dont change the shape of the button." The min-width stays, so
     it does not resize as it toggles - a transport button that changes width
     every time you press it never feels solid. The words move to aria-label
     and title, so a screen reader still hears a verb. */
  playBtn.innerHTML = playing ? "<svg width=\"17\" height=\"17\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M4 2.5h3.1v11H4zM8.9 2.5H12v11H8.9z\"/></svg>" : "<svg width=\"17\" height=\"17\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M4 2.2l9 5.8-9 5.8z\"/></svg>";
  playBtn.setAttribute("aria-label", playing ? "Pause" : "Read to me");
  playBtn.setAttribute("title", playing ? "Pause" : "Read to me");
  /* A lesson can hang something off the current sentence. Math uses it to
     draw its division grid up to this step, so the worked example and the
     narration move together instead of being two separate players. Generic,
     so science gets it free. */
  if (typeof window.nsOnSentence === "function") { try { window.nsOnSentence(idx); } catch (e) {} }
  if (typeof window.nsSavePos === "function") window.nsSavePos();
}

/* 🚨 ONLY SCROLL WHEN THE THING IS ACTUALLY OFF SCREEN.
   Reported from a real lesson, 2026-08-29: "after he answered a question the page jumped
   up or around."

   He was right, and there were two causes stacked on each other. Answering a
   question ALWAYS pulled its card to the centre of the screen, even when the
   card was already sitting under his eyes - so the page moved for no reason
   the moment he clicked. And where a hunt was involved, endHunt fired at the
   same time, so a second smooth scroll started before the first had finished
   and the page appeared to swing around.

   A scroll should answer a question the reader is asking: "where did it go?"
   If he can already see it, he is not asking. The sticky player is counted as
   covered screen, because an element hidden behind it is not visible either. */
/* The band of screen a reader can actually see: the viewport, less whatever
   the player is sitting over. It handles the player docked at the bottom (the
   layout today) and stuck at the top (what it used to be, and what a future
   change might want again) without either caller knowing which. */
function nsReadArea(){
  var vh = window.innerHeight || document.documentElement.clientHeight;
  var top = 0, bottom = vh;
  /* 🚨 THE PINNED BARS AT THE TOP COVER SCREEN TOO. This only ever subtracted
     the player at the bottom, so the nav - sticky since 2026-08-26 - was counted
     as readable the whole time, and the explainer pinned beneath it makes the
     same error about 130px worse. Everything that decides where the page should
     sit runs through here: nsInView() would call a sentence visible while it sat
     behind the bars, so nsReveal() declined to scroll to it, and nsEyeTargetY()
     aimed 42% down a band that started underneath them.
     MEASURED from the elements, never a constant: both heights change with the
     viewport, and either can be absent. */
  var nav = document.querySelector(".ns-nav");
  if (nav){
    var nr = nav.getBoundingClientRect();
    if (nr.top <= 4 && nr.bottom > top) top = nr.bottom;
  }
  var p = document.getElementById("player");
  if (p && !document.body.classList.contains("player-hidden")){
    var pr = p.getBoundingClientRect();
    if (pr.top <= 4) top = pr.bottom;                 /* stuck at the top    */
    else if (pr.bottom >= vh - 4) bottom = pr.top;    /* docked at the bottom */
  }
  return { top: top, bottom: bottom, height: Math.max(120, bottom - top) };
}

/* Where the page must sit for this element to land on the eye line. Reading is
   comfortable slightly above centre - more text ahead of you than behind - so
   the line is 42% down the READABLE area, not the viewport. */
function nsEyeTargetY(el){
  var a = nsReadArea();
  var r = el.getBoundingClientRect();
  return window.scrollY + (r.top + r.height / 2) - (a.top + a.height * 0.42);
}

function nsInView(el){
  var a = nsReadArea();
  var r = el.getBoundingClientRect();
  return r.top >= a.top - 4 && r.bottom <= a.bottom + 4;
}
function nsReveal(el, block){
  if (!el || nsInView(el)) return;
  try { el.scrollIntoView({ behavior:"smooth", block: block || "center" }); }
  catch(e){ el.scrollIntoView(); }
}

/* Voice and colours are OPEN on a desktop and FOLDED on a phone, where the
   player was eating 45% of the screen. It cannot be done in CSS - <details>
   open state is an attribute, not a style - so the width decides it here, and
   it follows a rotation. A choice the reader makes by hand is respected: once
   he opens or closes it himself we stop overriding him. */
(function playerSettings(){
  var box = document.getElementById("psettings");
  if (!box) return;
  /* Folded on every width, not just phones. A reader picks a voice once; it
     should not cost a third of the bar on every page load. Remembered, so a
     reader who does open it keeps it open. */
  /* the Reader switch owns this now - see settingsSwitch() */
})();

/* ── FOLLOWING THE READER ──────────────────────────────────────────────────
   🚨 THE READER MUST NOT FIGHT THE READER. Paul, 2026-08-29: "if you try to
   scroll down while its playing the page move as it goes to the next section."

   Auto-following is right by default - a student listening should not have to
   scroll - but the moment a person scrolls on purpose, the page yanking itself
   back on the next sentence is the software arguing with them. It also makes it
   impossible to look ahead, or to check the question while it reads.

   So: any real scroll gesture turns following OFF, and a small chip appears
   offering to resume. Nothing moves under your hands again until you ask.

   Paul also suggested letting the player travel down the page instead. This is
   the cheaper answer: it costs no screen, and on a phone the player is already
   the most expensive thing on the page. */
var following = true;
var selfScrollAt = 0;

function nsEyeLine(el, smooth){
  var delta = nsEyeTargetY(el) - window.scrollY;
  if (Math.abs(delta) < 2) return;
  try { window.scrollBy({ top: delta, behavior: smooth === false ? "auto" : "smooth" }); }
  catch(e){ window.scrollBy(0, delta); }
}

function followScroll(el){
  if (!following) return;
  /* 🚨 THE EXPLAINER STOPS THE PAGE, NOT THE VOICE. Paul, 2026-09-04: "with the
     panel open it will stop the scroll but still read it", and "panel open it
     doesnt follow down the page."
     It is the whole point of the panel for a student who loses his place: while
     it is open there is ONE thing to look at and it does not move. The reading
     carries on underneath, the drawing keeps step with it, and the text stops
     sliding past. Closing the panel hands the page back and following resumes
     from the next sentence with nothing to reset. */
  if (demoOpen()) return;
  selfScrollAt = Date.now();
  nsEyeLine(el);
}
var chipTimer = null;
function chip(show){
  var c = document.getElementById("followchip");
  if (!c) return;
  var on = !!show && playing;
  var wasOn = c.classList.contains("show");
  c.classList.toggle("show", on);
  if (on && wasOn) return;        /* already counting down - do not restart it */
  clearTimeout(chipTimer);
  /* It disappears on its own. Paul, 2026-08-29. An offer that never withdraws
     stops being an offer and becomes furniture - and this one sits in a row
     that is otherwise empty, so leaving it there permanently would make the
     bar look busier than it is. Following stays OFF when it goes; the chip
     going away is not the page deciding to grab the screen back. */
  if (on) chipTimer = setTimeout(function(){ c.classList.remove("show"); }, 7000);
}
/* 🚨 PRESSING PLAY IS ASKING. Paul, 2026-09-03: "if i click anywhere on the story
   ... it read the story if i press play but the text doesnt move down with the tts
   player running anymore."
   `following` was turned off by any scroll during playback and NOTHING ever turned
   it back on except catching the chip inside its 7 second timeout. Miss that window
   and the page never auto-scrolled again for the life of the page - play, a tapped
   sentence, the step arrows, none of them reset it. It reads like the follow feature
   simply broke, because from the reader's side it has.
   The rule the comment above already states is "nothing moves under your hands again
   until you ask", and a deliberate start IS asking: the play button, tapping a
   sentence to read from there, or stepping with the arrows. A scroll still turns it
   off for that run, and the chip still offers it straight back. */
function resumeFollowing(){
  following = true;
  chip(false);
}
function stopFollowing(){
  following = false;
  /* every deliberate scroll re-offers the way back, and restarts its timer -
     the offer is cheap and only appears while a voice is actually reading */
  chip(true);
}
/* ── THE WORKED PROBLEMS ───────────────────────────────────────────────────
   Glencoe's four steps, with the student typing every number.
   🚨 EXPLORE -> ESTIMATE -> SOLVE -> EXAMINE, AND THE ORDER IS ENFORCED. Solve
   is disabled until the estimate is in, and Examine until Solve is right. The
   book brackets 810 ÷ 5 between 100 and 200 BEFORE it divides, and that bracket
   is the whole defence against an answer you cannot sanity-check - see the CSS
   note above for why that matters more now than it did in 1998.
   ⚠️ A wrong answer is never replaced with the right one. It says so and lets
   him go again: this lesson is about trying a plan, noticing it failed, and
   picking another, which is question 3 on the book's own page. */
var WORKED = document.getElementById("worked");

function wnum(v){
  /* commas are how a 12-year-old writes 1,000 and it is not a mistake */
  var n = parseFloat(String(v).replace(/[, ]/g, ""));
  return isNaN(n) ? null : n;
}

function wstep(host, key, label, intro){
  var d = document.createElement("div");
  d.className = "wstep is-locked";
  d.setAttribute("data-step", key);
  var h = document.createElement("p");
  h.className = "wstep-h";
  h.textContent = label;
  d.appendChild(h);
  if (intro){ var p = document.createElement("p"); p.textContent = intro; d.appendChild(p); }
  host.appendChild(d);
  return d;
}

function wbox(row, width){
  var i = document.createElement("input");
  i.className = "wbox";
  i.type = "text";
  i.inputMode = "decimal";
  i.autocomplete = "off";
  i.disabled = true;
  if (width) i.style.width = width;
  row.appendChild(i);
  return i;
}
function wtext(row, t){
  var s = document.createElement("span");
  s.textContent = t;
  row.appendChild(s);
  return s;
}
function wnote(host){
  var p = document.createElement("p");
  p.className = "wnote";
  host.appendChild(p);
  return p;
}
function say(note, msg, good){
  note.textContent = msg;
  note.className = "wnote show" + (good ? " good" : "");
}

/* close enough: the book's own answer to 1,000 ÷ 65 is not a round number, so a
   tolerance is the honest way to mark it rather than demanding 15.384615 */
function near(a, b, tol){ return Math.abs(a - b) <= (tol == null ? 0.01 : tol); }

function openStep(d){ d.classList.remove("is-locked"); d.classList.add("is-open");
  d.querySelectorAll(".wbox").forEach(function(b){ b.disabled = false; }); }

function buildWork(){
  if (!WORK || !WORK.length || !WORKED) return;
  WORKED.hidden = false;

  WORK.forEach(function(W, wi){
    var box = document.createElement("div");
    box.className = "work";

    var h = document.createElement("p");
    h.className = "work-h";
    h.textContent = "Problem " + (wi + 1) + " \u00b7 " + W.title;
    box.appendChild(h);

    var ask = document.createElement("p");
    ask.className = "work-ask";
    ask.textContent = W.ask;
    box.appendChild(ask);

    /* EXPLORE - what you were given. Printed, because the book prints it too:
       explore is about noticing which of these you actually need. */
    var ul = document.createElement("ul");
    ul.className = "work-given";
    (W.given || []).forEach(function(g){
      var li = document.createElement("li");
      var b = document.createElement("b"); b.textContent = g[0] + ":";
      li.appendChild(b);
      li.appendChild(document.createTextNode(" " + g[1]));
      ul.appendChild(li);
    });
    box.appendChild(ul);

    /* PLAN + ESTIMATE */
    var est = wstep(box, "estimate", "Plan \u00b7 Estimate first", W.estimate.intro);
    var erow = document.createElement("div"); erow.className = "wrow";
    wtext(erow, "Between");
    var lo = wbox(erow);
    wtext(erow, "and");
    var hi = wbox(erow);
    if (W.estimate.unit) { var u = wtext(erow, W.estimate.unit); u.className = "wunit"; }
    est.appendChild(erow);
    var enote = wnote(est);

    /* SOLVE */
    var sol = wstep(box, "solve", "Solve", W.solve.intro);
    var srow = document.createElement("div"); srow.className = "wrow";
    wtext(srow, W.solve.expr + "  =");
    var sBox = wbox(srow);
    if (W.solve.unit) { var u2 = wtext(srow, W.solve.unit); u2.className = "wunit"; }
    sol.appendChild(srow);
    var snote = wnote(sol);

    /* EXAMINE */
    var exa = wstep(box, "examine", "Examine \u00b7 Check it", W.examine.intro);
    var xrow = document.createElement("div"); xrow.className = "wrow";
    wtext(xrow, W.examine.expr + "  =");
    var xBox = wbox(xrow);
    if (W.examine.unit) { var u3 = wtext(xrow, W.examine.unit); u3.className = "wunit"; }
    exa.appendChild(xrow);
    var xnote = wnote(exa);

    openStep(est);

    function checkEstimate(){
      var a = wnum(lo.value), b = wnum(hi.value);
      if (a === null || b === null) return;
      var okLo = near(a, W.estimate.lo, W.estimate.tol);
      var okHi = near(b, W.estimate.hi, W.estimate.tol);
      lo.classList.toggle("is-right", okLo); lo.classList.toggle("is-wrong", !okLo);
      hi.classList.toggle("is-right", okHi); hi.classList.toggle("is-wrong", !okHi);
      if (okLo && okHi){
        say(enote, W.estimate.why, true);
        openStep(sol);
      } else {
        say(enote, W.estimate.hint || "Round the numbers to something easy and divide those instead.");
      }
    }
    function checkSolve(){
      var v = wnum(sBox.value);
      if (v === null) return;
      var ok = near(v, W.solve.answer, W.solve.tol);
      sBox.classList.toggle("is-right", ok); sBox.classList.toggle("is-wrong", !ok);
      if (ok){
        /* 🚨 The point of the estimate is only made HERE, by saying the answer
           landed inside the bracket he chose before he had it. */
        say(snote, W.solve.why, true);
        openStep(exa);
      } else {
        say(snote, W.solve.hint || "Not yet. Try the plan again, and check it against your estimate.");
      }
    }
    function checkExamine(){
      var v = wnum(xBox.value);
      if (v === null) return;
      var ok = near(v, W.examine.answer, W.examine.tol);
      xBox.classList.toggle("is-right", ok); xBox.classList.toggle("is-wrong", !ok);
      say(xnote, ok ? W.examine.why : (W.examine.hint || "Work it back the other way and see if you land where you started."), ok);
    }

    [[lo, checkEstimate], [hi, checkEstimate], [sBox, checkSolve], [xBox, checkExamine]]
      .forEach(function(pair){
        /* `change` alone is not enough - Android number fields often do not fire
           it until the box loses focus, the same trap the reading log hit. */
        pair[0].addEventListener("change", pair[1]);
        pair[0].addEventListener("blur", pair[1]);
        pair[0].addEventListener("keydown", function(e){ if (e.key === "Enter") pair[1](); });
      });

    WORKED.appendChild(box);
  });
}
buildWork();

/* ── THE EXPLAINER ────────────────────────────────────────────────────────
   Paul, 2026-09-04: "explaining how these sentences worked as it was reading it
   to you ... just like how you explained with the math problem", and what it is
   for: "basically make this a way for attention issue students to still stay
   engaged."
   🚨 DRIVEN BY THE SENTENCE BEING READ, through window.nsOnSentence(idx) - the
   same hook the maths bracket uses, which is why this needed no change to the
   player at all. paint() calls it on every index move, so the drawing keeps step
   with playback, the step arrows, a tapped sentence AND a dragged scrub without
   any of them knowing it exists.
   Each visual's `at` is resolved AT BUILD TIME from the sentence it belongs to -
   see requireVisuals(). There is no hand-counted index here to go stale, which
   is the failure `find` needs findsAt to guard against. */
var dbox  = document.getElementById("dbox");
var dboxX = document.getElementById("dboxx");
var curVis = -2;

/* Decided ONCE, from the lesson's own frames. A lesson with pictures is wide for
   all of it; a lesson with only drawings is never wide. Neither ever changes
   mid-read - see the note in paintDemo(). */
var HAS_PICS = VISUALS.some(function(v){ return !!v.pic; });
if (dbox && HAS_PICS) dbox.classList.add("is-wide");

function demoOpen(){ return !!(dbox && !dbox.hidden && !dbox.classList.contains("is-shut")); }

/* 🚨 A PICTURE BELONGS TO ITS PARAGRAPH AND BLANKS OUTSIDE IT. Paul: "i would
   suggest if you are not showing an example at that point it is blank."
   It used to be the last visual at or before the sentence, full stop, so a
   drawing stood until the next one replaced it - which meant the imperative
   diagram was still up during "Think of declarative as declare", claiming to
   illustrate a line it had nothing to do with. Holding the last picture is the
   lazy default and it quietly turns the panel into decoration.
   ⚠️ It is the PARAGRAPH, not the sentence. Blanking between every sentence
   would flicker the panel through the three examples it is there to show. */
/* ── which HALF the panel is naming right now ───────────────────────────────
   🚨 THE PANEL WALKS THE SENTENCE; IT DOES NOT SIT ON IT. Paul, 2026-09-08:
   "the first half shows the green side ... then the second half plays and ...
   has already mixed nine cans of paint (orange with complete predicate over
   it)". Showing both halves lit at once names the parts; showing them in turn,
   as the voice crosses the split, is what teaches WHERE the line falls.

   🚨 IT IS DRIVEN BY REAL WORD POSITION, NEVER BY A TIMER. `flip` is how far
   through the sentence the split sits, and NexVoice's timepoints say how far
   through the sentence the reading is. A device voice reports nothing usable -
   the same reason there is no word highlight on one - so it keeps both halves
   lit rather than guessing. A panel that names the wrong half is worse than a
   panel that names both.

   phase -1 = both halves lit (at rest, and on a device voice)
   phase  0 = the complete subject      phase 1 = the complete predicate */
var curV = null, curStep = 0;
var vPhase = -2;
function setPhase(p){
  if (p === vPhase || !dbox) return;
  vPhase = p;
  var line = dbox.querySelector(".dbox-line");
  var kind = dbox.querySelector(".dbox-kind");
  [line, kind].forEach(function(el){
    if (!el) return;
    el.classList.toggle("phase-a", p === 0);
    el.classList.toggle("phase-b", p === 1);
  });
}
/* ── STEPS: the panel MOVES THROUGH a sentence ─────────────────────────────
   🚨 ONE SENTENCE CAN NAME MORE THAN ONE EXAMPLE, AND THE PANEL HAS TO KEEP UP.
   Paul, 2026-09-08, on sentence 14: "the voice reader says the old floorboards
   near the register is six words ... you needed to match the story to the text
   on the panel". That sentence counts TWO subjects. Holding one frame across it
   left the panel showing a sentence the voice had already moved off, so the
   halves on screen were not the halves being talked about.

   A step is a whole frame - its own sentence, its own split, its own note - and
   `from` is how far through the reading it takes over, computed at build from a
   phrase in the sentence. A frame with no steps behaves exactly as before. */
function stepSpec(v, i){
  if (v && v.steps && v.steps.length) return v.steps[Math.max(0, Math.min(i, v.steps.length - 1))];
  return v;
}
function stepAt(f){
  if (!curV || !curV.steps || !curV.steps.length) return 0;
  var k = 0;
  for (var i = 0; i < curV.steps.length; i++) if (curV.steps[i].from <= f) k = i;
  return k;
}
/* 🚨 Text nodes, never innerHTML. This is lesson prose and must not be able to
   carry markup into the page. */
function paintHalves(line, spec){
  if (!line || !spec) return;
  var old = line.querySelectorAll(".dbox-pre, .dbox-body");
  for (var i = 0; i < old.length; i++) old[i].remove();
  var before = line.querySelector(".dbox-mark:not(.dbox-pre)");
  if (spec.pre){
    var pre = document.createElement("span");
    /* Two classes: dbox-mark keeps the shared shape, dbox-pre is the hook a
       lesson can recolour. A lesson about two named halves needs the panel to
       use ITS two colours, not the theme accent. */
    pre.className = "dbox-mark dbox-pre";
    pre.textContent = spec.pre;
    line.insertBefore(pre, before);
  }
  var body = document.createElement("span");
  body.className = "dbox-body";   /* a hook only; unstyled by default */
  body.textContent = spec.body || "";
  line.insertBefore(body, before);
  if (dbox) dbox.querySelector(".dbox-note").textContent = spec.note || "";
}
/* 🚨 REWIND ON EVERY PLAY, NOT ON EVERY FRAME CHANGE. paint() returns early
   when the frame has not changed, so pressing play again on the SAME sentence
   left the panel on the step the last pass ended on - the second example on
   screen while the voice started the first one again. */
function resetSteps(){
  if (!curV || !curV.steps || !curV.steps.length) return;
  curStep = -1;
  applyStep(0);
  var s0 = curV.steps[0];
  vPhase = -2;
  setPhase((s0.lock === 0 || s0.lock === 1) ? s0.lock : -1);
}
function applyStep(i){
  if (i === curStep || !curV || !curV.steps || !curV.steps[i]) return;
  curStep = i;
  paintHalves(dbox.querySelector(".dbox-line"), curV.steps[i]);
  vPhase = -2;                       /* force the phase classes to be rewritten */
}

/* How far through the sentence the reading is, 0 to 1. Everything that knows
   the position converts to this, so there is one rule for the flip. */
function phaseFromFraction(f){
  if (!curV) { setPhase(-1); return; }
  if (curV.steps && curV.steps.length) applyStep(stepAt(f));
  var curV0 = curV;
  curV = stepSpec(curV0, curStep);          /* read lock/flip off the live step */
  try {
  /* 🚨 A FRAME CAN BE LOCKED TO ONE HALF, AND THAT IS NOT THE SAME AS HAVING NO
     FLIP. Most of the explanation is about the complete subject alone. Lighting
     the predicate there - or trading to it - makes the panel claim something the
     narration never said. Paul, 2026-09-08, on sentence 14: "the predicate part
     is incorrect". `lock` is 0 or 1 and it outranks every position report. */
  if (curV.lock === 0 || curV.lock === 1) { setPhase(curV.lock); return; }
  if (curV.flip == null) { setPhase(-1); return; }
  setPhase(f > curV.flip ? 1 : 0);
  } finally { curV = curV0; }
}
/* Called from the clip tick with the word index the audio has reached. */
function phaseFromWord(k, total){
  if (!total || k < 0) { setPhase(-1); return; }
  phaseFromFraction((k + 1) / total);
}

/* 🚨 THE FLIP RUNS ON EVERY VOICE, INCLUDING A DEVICE ONE. This is deliberately
   NOT the rule that governs the word highlight, and the difference matters:

     word highlight - twenty-odd positions. Off by half a second and it points a
                      struggling reader at the wrong word. So it is NexVoice only.
     panel flip     - TWO positions. Off by half a second and the green half
                      stays lit a moment longer than it should.

   Applying the highlight's rule here meant the one thing Paul asked for did not
   happen on the only voice his machine can play, and he could not see his own
   feature. Paul, 2026-09-08: "im just fighting with you to fix something so
   simple." A guess that cannot mislead is not the guess that rule is about.

   Local voices fire onboundary and give a real character position. Network
   voices fire nothing, so a clock takes over at the estimated pace. Whichever
   arrives first wins, and the boundary events keep correcting the clock. */
var phaseRaf = null, sawBoundary = false;
function stopPhaseClock(){
  if (phaseRaf){ cancelAnimationFrame(phaseRaf); phaseRaf = null; }
}
function runPhaseClock(text, rate){
  stopPhaseClock();
  sawBoundary = false;
  /* 🚨 A STEPPED FRAME NEEDS THE CLOCK TOO. The first version started it only
     when the frame had a `flip`, so a frame whose halves are locked but whose
     STEPS move never advanced: it sat on step 0 for the whole sentence. The
     clock drives both jobs now, which step and which half. */
  if (!curV) return;
  if (curV.flip == null && !(curV.steps && curV.steps.length)) return;
  resetSteps();
  var words = String(text || "").trim().split(/\s+/).length;
  /* ~2.6 words a second is speech-synthesis pace at rate 1. Only ever used to
     decide WHEN to cross a single line, never to place a highlight. */
  var secs = words / (2.6 * Math.max(0.5, rate || 1));
  var t0 = (window.performance && performance.now) ? performance.now() : Date.now();
  (function tick(){
    if (!demoOpen()) { stopPhaseClock(); return; }
    if (sawBoundary) { stopPhaseClock(); return; }   /* real positions took over */
    var now = (window.performance && performance.now) ? performance.now() : Date.now();
    phaseFromFraction(((now - t0) / 1000) / secs);
    phaseRaf = requestAnimationFrame(tick);
  })();
}

function visualFor(i){
  var found = null;
  for (var k = 0; k < VISUALS.length; k++){
    if (VISUALS[k].at <= i) found = VISUALS[k]; else break;
  }
  if (!found) return null;
  if (SENTPARA[found.at] !== SENTPARA[i]) return null;
  return found;
}

/* 🚨 A PICTURE CARRIES FORWARD; THE WORDS DO NOT. Paul, 2026-09-05: "i wonder if
   we can fill the blank spaces that have no images by prolonging the elements to
   other sentences."
   Not every frame carries an image, and in this lesson the gaps run one to three
   frames - so the panel was dropping to text, then back to a picture, then to
   text again, several times a paragraph. The picture is the thing the paragraph
   is ABOUT; the kind, the line and the note are the thing THIS frame is about.
   So the picture holds while the explanation underneath it changes.
   ⚠️ THE PICTURE CROSSES PARAGRAPHS; THE FRAME STILL DOES NOT. visualFor() keeps
   its paragraph boundary, so a frame with nothing to say still blanks the panel
   entirely - the picture only holds while a frame is up. That is a deliberate
   softening of the "stale picture" rule written up above, and it is a trade: a
   held picture over a related paragraph, against an empty 16:9 hole on the
   frames between pictures, which is what reserving the slot leaves behind. */
function picFor(v, i){
  if (!v) return null;
  if (v.pic) return { pic: v.pic, alt: v.picAlt || "" };
  /* The nearest picture BEFORE this frame. Paragraphs are contiguous, so if that
     one is not in this paragraph then nothing in this paragraph has a picture at
     all, and the choice is a held picture or an empty 16:9 hole under the text.
     Paul asked for the held picture. */
  for (var k = VISUALS.length - 1; k >= 0; k--){
    var c = VISUALS[k];
    if (c.at > v.at) continue;                 /* not reached yet */
    if (c.pic) return { pic: c.pic, alt: c.picAlt || "" };
  }
  return null;
}

/* 🚨 SHRINK THE TYPE, NEVER THE BAR. The bar's height is fixed in CSS so the
   panel cannot breathe; this is what stops a long sentence being clipped by that
   decision. Step down half a point at a time until it fits, with a floor - past
   about 10px it would be doing the student no favours, and at that point letting
   the tail clip is the lesser harm, because the sentence is also on the page
   below in full size.
   ⚠️ Reset to the base size FIRST. Without that the type only ever ratchets
   downwards: one long sentence early on would leave every later one tiny. */
var SENT_BASE = 13.5, SENT_MIN = 10;
function fitSentence(el){
  el.style.fontSize = SENT_BASE + "px";
  if (!el.textContent) return;
  var size = SENT_BASE;
  /* scrollHeight beats clientHeight only once the text no longer fits */
  while (el.scrollHeight > el.clientHeight && size > SENT_MIN) {
    size -= 0.5;
    el.style.fontSize = size + "px";
  }
}

/* 🚨 SHRINK THE EXAMPLE, NEVER THE PANEL. The same rule as fitSentence(), applied
   to the example and its note together, because their block is reserved at a
   fixed height in CSS. Both scale off ONE factor so the example stays visibly
   larger than the note it is annotated with; scaling them independently let a
   long note creep up to the size of the sentence it was explaining.
   ⚠️ is-shout sets its own size and is left alone - it is a whole frame about a
   sentence being shouted, and quietly shrinking it would undo the point. */
var LINE_BASE = 21, NOTE_BASE = 14, WORDS_MIN = 0.62;
function fitWords(box){
  if (!box) return;
  var line = box.querySelector(".dbox-line");
  var note = box.querySelector(".dbox-note");
  var shout = line && line.classList.contains("is-shout");
  var f = 1;
  if (line && !shout) line.style.fontSize = LINE_BASE + "px";
  if (note) note.style.fontSize = NOTE_BASE + "px";
  while (box.scrollHeight > box.clientHeight && f > WORDS_MIN) {
    f -= 0.04;
    if (line && !shout) line.style.fontSize = (LINE_BASE * f).toFixed(1) + "px";
    if (note) note.style.fontSize = (NOTE_BASE * f).toFixed(1) + "px";
  }
}


function showFull(src, alt) {
  var host = document.getElementById("picfull");
  if (!host) return;
  host.innerHTML = "";
  var big = document.createElement("img");
  big.src = src; big.alt = alt || "";
  host.appendChild(big);
  host.hidden = false;
  document.body.style.overflow = "hidden";
}
function hideFull() {
  var host = document.getElementById("picfull");
  if (!host || host.hidden) return;
  host.hidden = true; host.innerHTML = "";
  document.body.style.overflow = "";
}
(function () {
  var host = document.getElementById("picfull");
  if (host) host.addEventListener("click", hideFull);
  /* Escape closes it. A full-screen overlay with no visible way out is a trap
     for anyone not on a touchscreen. */
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") hideFull(); });
})();

function paintDemo(i){
  if (!dbox) return;

  /* 🚨 THE SENTENCE UPDATES EVERY TIME, BEFORE THE EARLY RETURN BELOW.
     The example only repaints when it actually changes - that guard is what
     stops the drawing flickering through a run of sentences it covers - but the
     sentence line has to move on every single one, or it would freeze on
     whichever line last happened to carry a frame. */
  var sl = document.getElementById("dboxsent");
  if (sl) {
    sl.textContent = (SENT[i] && SENT[i].text) ? SENT[i].text : "";
    fitSentence(sl);
  }

  var v = visualFor(i);
  var key = v ? v.at : -1;
  if (key === curVis) return;                 /* repaint only on a real change */
  curVis = key;
  /* A new frame starts on the half it is about. A locked frame stays there; an
     unlocked one shows both until the reading walks it from one to the other. */
  curV = v;
  curStep = 0;
  var s0 = stepSpec(v, 0);
  setPhase(s0 && (s0.lock === 0 || s0.lock === 1) ? s0.lock : -1);

  /* 🚨 `blank: true` is a visual that deliberately shows NOTHING, and it is not
     the same as having no visual at all. Paul: "you could leave the box blank if
     you have nothing to show." It is how a lesson says "this stretch is not
     about a single sentence any more" - the opening story, the closing Proverbs
     - so the last drawing stops standing over text it does not describe. A stale
     picture is read as a claim about what is on screen now. */
  /* A Coming Soon panel has no frames to paint. The sentence bar above it is
     written before this point and keeps updating, which is the whole idea. */
  if (typeof PANEL_SOON !== "undefined" && PANEL_SOON) return;
  if (!v || v.blank){
    dbox.classList.add("is-blank");
    return;
  }
  dbox.classList.remove("is-blank");
  /* 🚨 THE KIND ROW NAMES *BOTH* HALVES, EACH IN ITS OWN COLOUR. A frame that
     highlights two parts and labels one of them says the wrong thing: the
     student cannot tell which colour he is being told about. `kinds` is a list
     of { text, cls } chips; plain `kind` still works for every other lesson. */
  var kindRow = dbox.querySelector(".dbox-kind");
  kindRow.textContent = "";
  if (v.kinds && v.kinds.length){
    for (var ki = 0; ki < v.kinds.length; ki++){
      var chip = document.createElement("span");
      chip.className = "dbox-kindchip" + (v.kinds[ki].cls ? " " + v.kinds[ki].cls : "");
      chip.textContent = v.kinds[ki].text;
      kindRow.appendChild(chip);
    }
  } else {
    kindRow.textContent = v.kind || "";
  }

  /* 🚨 THE ART SLOT. Paul, 2026-09-05: "For a drive show a car in the panel and
     show the 1000mi", then "i think we could do more svgs that would be nice."
     `art` names a drawing from ART below rather than carrying markup, so a
     lesson file never contains SVG - the drawings live in one place, they can be
     reused across lessons, and a lesson author picks one by name.
     ⚠️ Drawn with currentColor, so a drawing takes the lesson's palette and
     works on both themes without a second copy. */
  var artBox = dbox.querySelector(".dbox-art");
  /* 🚨 A PICTURE, NOT AN ICON. `pic` names an image file beside the lesson;
     `art` names an inline drawing from ART. A frame carries one or the other,
     never both - different sizes doing different jobs. The panel WIDENS for a
     picture and does not for an icon, because a 16:9 illustration in the 584px
     reading column is too small to read the detail in. */
  /* 🚨 THE PANEL IS ONE SIZE FOR THE WHOLE LESSON. Paul, 2026-09-05: "when you
     switch to your explaination over the images the panel shrinks to fit that
     size. it should just stay consistant."
     `is-wide` used to be added and removed per frame, so the panel jumped
     between 860px and 760px - and its height jumped with it - every time the
     reading moved off a picture. That is the same breathing the fixed-height
     sentence bar exists to stop, only worse, because it moved the whole page
     under the reader. HAS_PICS is decided once at init from the lesson's own
     data and never changes after. */
  var shown = picFor(v, i);
  if (shown) {
    artBox.innerHTML = "";
    var im = document.createElement("img");
    im.src = shown.pic;
    im.alt = shown.alt;
    im.loading = "lazy";
    im.decoding = "async";
    im.addEventListener("click", function () { showFull(shown.pic, shown.alt); });
    artBox.appendChild(im);
    artBox.className = "dbox-art pic";
    artBox.hidden = false;
  } else if (v.art && ART[v.art]) {
    artBox.innerHTML = ART[v.art];
    artBox.className = "dbox-art";
    artBox.hidden = false;
  } else {
    artBox.textContent = "";
    /* On a picture lesson the slot stays in the layout even when it is empty,
       so the frames that genuinely have nothing to show do not collapse the
       panel around themselves. */
    artBox.className = "dbox-art";
    artBox.hidden = !HAS_PICS;
  }

  var line = dbox.querySelector(".dbox-line");
  line.textContent = "";
  /* A verse keeps the frame and the timing and drops the grammar furniture. */
  line.classList.toggle("is-verse", !!v.verse);
  line.classList.toggle("is-shout", !!v.shout);
  if (v.ghost){
    var g = document.createElement("span");
    g.className = "dbox-ghost";
    g.textContent = v.ghost;
    line.appendChild(g);
  }
  /* 🚨 `pre` IS A HIGHLIGHT THAT LEADS. `mark` already highlights, but it renders
     AFTER the body, and a lesson about complete subjects needs the highlight on the
     FRONT half: the subject is the part that comes first, and putting it last would
     teach the wrong shape. Added 2026-09-08 for the split lessons.
     ⚠️ Additive on purpose. A lesson that does not set `pre` renders exactly as it
     did before, which is why this went here rather than into a fork of the panel. */
  paintHalves(line, stepSpec(v, 0));
  if (v.mark){
    var m = document.createElement("span");
    m.className = "dbox-mark";
    m.textContent = v.mark;
    line.appendChild(m);
  }
  /* the note is written by paintHalves, which owns the whole step */

  /* 🚨 A STAGED REVEAL. Paul, 2026-09-05, on the line that names all four steps:
     "you can show each one popping them up one at a time Explore → Plan → Solve
     → Examine from left to right as that sentence speaks."
     `seq` is a list of words that arrive in turn rather than all at once, which
     is the difference between a diagram of the routine and watching it being
     counted out. Timed to land across roughly the length of the sentence.
     ⚠️ prefers-reduced-motion gets the whole thing at once. The point is the
     order, and the order is still readable without the animation. */
  if (v.seq && v.seq.length) {
    line.textContent = "";
    var slow = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var gap = slow ? 0 : 620;
    v.seq.forEach(function(word, k){
      var w = document.createElement("span");
      w.className = "dbox-pop";
      w.textContent = word;
      if (!slow) { w.style.animationDelay = (k * gap) + "ms"; }
      else { w.style.animation = "none"; w.style.opacity = "1"; }
      line.appendChild(w);
      if (k < v.seq.length - 1) {
        var ar = document.createElement("span");
        ar.className = "dbox-pop dbox-arrow";
        ar.textContent = "→";
        if (!slow) ar.style.animationDelay = (k * gap + gap / 2) + "ms";
        else { ar.style.animation = "none"; ar.style.opacity = "1"; }
        line.appendChild(ar);
      }
    });
  }

  /* LAST, because `seq` above rewrites the example line after it is set. Fitting
     before that measured the wrong content and let the staged reveal overflow
     its reserved block. */
  fitWords(dbox.querySelector(".dbox-words"));
}

/* 🚨 MEASURED, NOT GUESSED. --navh positions the panel under the nav and
   --stickytop is what .para and .sent use for scroll-margin. Both change with
   the viewport and with whether the panel is open, so they are read off the
   elements every time rather than written down once. */
/* 🚨 ONLY THE NAV IS PINNED NOW. The explainer sits in normal flow, so its
   height is no longer part of the offset - but the nav's is, and always was.
   --stickytop is what .para and .sent use for scroll-margin, and it was a
   hardcoded 180px against a nav that changes height with the viewport. */
function measureSticky(){
  var nav = document.querySelector(".ns-nav");
  var nh = nav ? Math.round(nav.getBoundingClientRect().height) : 56;
  document.documentElement.style.setProperty("--navh", nh + "px");
  document.documentElement.style.setProperty("--stickytop", (nh + 24) + "px");
}

/* 🚨 CENTRED IN THE READABLE BAND, NOT IN THE VIEWPORT. Paul, 2026-09-05: "when
   you click to open the panel it needs to be center on the screen."
   Centring on window.innerHeight would put it visibly low, because the player is
   docked over the bottom ~120px and the nav is pinned over the top. nsReadArea()
   already knows what both of those cover - it is the same measurement the reader
   uses to decide where a sentence should sit - so the panel lands in the middle
   of the screen a person can actually see. */
function nsCentre(el){
  var a = nsReadArea();
  var r = el.getBoundingClientRect();
  var y = window.scrollY + r.top + r.height / 2 - (a.top + a.height / 2);
  try { window.scrollTo({ top: Math.max(0, y), behavior: "smooth" }); }
  catch(e){ window.scrollTo(0, Math.max(0, y)); }
}

/* 🚨 EXPANDED AND COLLAPSED ARE TWO READING MODES, not just two sizes.
   Paul, 2026-09-04: "the show and hide is just to expand a collapse it. when it
   is closed the reader works normally. when it is expanded the auto reader stops
   moving so you can watch it at the top of the page with the story going down to
   the section it is reading at."
     collapsed - the reader follows the text down the page, as it always has
     expanded  - the page STOPS moving. One deliberate scroll puts the panel at
                 the top with the story beneath it, and it stays there while the
                 voice reads on and the drawing keeps up.
   The single scroll on expand is what makes the freeze usable: without it the
   panel could be freezing the page while sitting off screen above, which reads
   as the reader having simply stopped. */
function setDemoOpen(on, why){
  if (!dbox) return;
  dbox.classList.toggle("is-shut", !on);
  dboxX.textContent = on ? "Close Visual Panel" : "Open Visual Panel";
  dboxX.setAttribute("aria-expanded", on ? "true" : "false");
  store("demo", on ? "1" : "0");
  /* 🚨 REPAINT IMMEDIATELY. The highlight rules read demoOpen(), so without this
     the band or the lit word stays exactly as it was until the reader happens to
     move to the next sentence - which on a slow line is several seconds of the
     page contradicting the control that was just pressed. */
  if (typeof clearWords === "function") clearWords();
  if (typeof paint === "function") paint();
  if (why !== "init"){
    /* 🚨 CENTRED. Not the eye line, and no longer the top. nsEyeLine() aims 42%
       down, which is right for a sentence being read and wrong for a panel you
       deliberately opened to look at. It went just under the nav while the panel
       was pinned there; now that it scrolls with the page, Paul asked for the
       middle: "when you click to open the panel it needs to be center on the
       screen."
       ⚠️ ONE SCROLL, NOT A LOCK. "the user can still scroll away but
       automatically it centered." Nothing holds it there afterwards - a panel
       that fought the reader's own scrolling would be the unasked-for movement
       nsInView() exists to prevent. */
    if (on) nsCentre(dbox);
    /* Closing hands the page back and catches the reader up to the sentence
       being read, which is very likely to be off screen after sitting still. */
    else if (playing && SENT[idx]) { resumeFollowing(); followScroll(SENT[idx].el); }
  }
}

/* 🚨 A LESSON WITH NO FRAMES STILL GETS THE PANEL, MARKED COMING SOON.
   Paul, 2026-09-09: "this lesson also doesnt have a visual panel. we can create
   it as a coming soon feature ... the panel is there and the text still shows,
   the inside the panel where it shows more in the middle it just says coming
   soon. the top of it still shows the text like now."
   Writing the frames is the expensive, hand-made part of a lesson - see
   ROADMAP 38 - so this is what lets a lesson ship without them while still
   showing the reader where the drawing will be. The sentence bar across the
   top keeps working, because that part is generated and costs nothing.
   ⚠️ NOT a fake frame. It says the feature is not built yet, in words. A panel
   that sat empty would read as broken, and one that invented a diagram would be
   worse than either. */
var PANEL_SOON = !VISUALS.length;
if (PANEL_SOON && dbox){
  dbox.classList.add("is-soon");
  dbox.classList.remove("is-blank");
  var soon = document.createElement("p");
  soon.className = "dbox-soon";
  soon.textContent = "Visual panel coming soon";
  var soonNote = document.createElement("p");
  soonNote.className = "dbox-soonnote";
  soonNote.textContent = "The sentence being read shows above. The drawing for this lesson is not built yet.";
  var inBox = dbox.querySelector(".dbox-in");
  if (inBox){ inBox.textContent = ""; inBox.appendChild(soon); inBox.appendChild(soonNote); }
}

if ((VISUALS.length || PANEL_SOON) && dbox){
  dbox.hidden = false;
  /* 🚨 Remembered per reader, and OPEN by default. It is the reason the lesson
     looks the way it does, so a student meeting the page for the first time has
     to see it working before he can decide he does not want it. */
  setDemoOpen(load("demo", "1") !== "0", "init");
  measureSticky();
  paintDemo(0);
  dboxX.addEventListener("click", function(){ setDemoOpen(!demoOpen()); });
  window.addEventListener("resize", measureSticky);

  /* 🚨 CHAIN, DO NOT CLOBBER. nsOnSentence is a single global and maths already
     hangs its bracket off it. Assigning over the top would silently switch the
     other one off on any page that used both. */
  var prevOnSentence = window.nsOnSentence;
  window.nsOnSentence = function(i){
    if (typeof prevOnSentence === "function") { try { prevOnSentence(i); } catch(e){} }
    paintDemo(i);
  };
}

/* A wheel or a finger is unambiguous intent. A plain scroll event is not - our
   own smooth scrolling fires it too - so that path is time-guarded against the
   scroll we just started ourselves. */
addEventListener("wheel", function(){ if (playing && !dragging) stopFollowing(); }, { passive: true });
addEventListener("touchmove", function(e){
  /* a finger ON the bar is scrubbing, not scrolling the page away */
  if (dragging) return;
  if (e.target && e.target.closest && e.target.closest("#scrub")) return;
  if (playing) stopFollowing();
}, { passive: true });
addEventListener("scroll", function(){
  if (dragging) return;
  if (playing && Date.now() - selfScrollAt > 900) stopFollowing();
}, { passive: true });

(function playerDock(){
  var P = document.getElementById("player");
  if (!P) return;
  function fit(){
    /* only meaningful while the bar is actually docked */
    var docked = getComputedStyle(P).position === "fixed";
    var hidden = document.body.classList.contains("player-hidden");
    var pad = (docked && !hidden) ? Math.ceil(P.getBoundingClientRect().height) + 12 : 0;
    document.documentElement.style.setProperty("--player-pad", pad + "px");
  }
  fit();
  addEventListener("resize", fit, { passive: true });
  addEventListener("orientationchange", fit);
  /* the settings disclosure changes the height */
  var s = document.getElementById("psettings");
  if (s) s.addEventListener("toggle", fit);
  var hb = document.getElementById("playerhide");
  if (hb) hb.addEventListener("click", function(){ setTimeout(fit, 260); });
  if (window.ResizeObserver) new ResizeObserver(fit).observe(P);
})();

(function settingsSwitch(){
  var box = document.getElementById("playerhide");
  var panel = document.getElementById("psettings");
  if (!box || !panel) return;

  /* The slider decides whether the Settings row exists on the bar. */
  var shown = load("settingsrow", "0") === "1";
  var keyRow = document.getElementById("keyrow");
  var keyToggle = document.getElementById("keyToggle");
  function paintRow(){
    panel.hidden = !box.checked;
    if (!box.checked){
      /* Collapse on the way out, so switching it back on gives a closed row
         rather than one already sprawling open. */
      panel.open = false;
      /* ⚠️ The API panel lives OUTSIDE the settings row, so it has to be shut
         explicitly or it stays on the bar after everything else has gone. */
      if (keyRow) keyRow.classList.remove("show");
      if (keyToggle) keyToggle.setAttribute("aria-expanded", "false");
    }
  }
  box.checked = shown;
  paintRow();
  box.addEventListener("change", function(){
    paintRow();
    store("settingsrow", box.checked ? "1" : "0");
  });

  /* The arrow keeps its own job: expanding the row once it is there. */
  panel.addEventListener("toggle", function(){
    store("vsettings", panel.open ? "1" : "0");
  });
})();

(function followChip(){
  var c = document.getElementById("followchip");
  if (!c) return;
  c.addEventListener("click", function(){
    following = true;
    chip(false);
    if (SENT[idx]) followScroll(SENT[idx].el);
  });
})();

/* True when the engine can say exactly which word is being spoken. Only baked
   NexVoice clips and live Google clips carry timepoints. */
function wordMode(){
  return (engine === "baked" && hasStudio()) || (engine === "google" && hasKey());
}

function clearWords(){
  SENT.forEach(function(s){
    s.words.forEach(function(w){ w.el.classList.remove("on"); });
  });
}

function rateVal(){ return parseFloat(document.getElementById("rate").value); }

function stopEngines(){
  gen++;
  /* Back to both halves the moment the reading stops. A frozen half-lit frame
     would claim the reading is still sitting in that half. */
  stopPhaseClock();
  setPhase(-1);
  if (supported){ try { synth.cancel(); } catch(e){} }
  if (rafId){ cancelAnimationFrame(rafId); rafId = null; }
  if (audioEl){
    try {
      audioEl.pause();
      audioEl.onended = null;
      audioEl.removeAttribute("src");
      audioEl.load();          /* drop the decoded buffer now, not eventually */
    } catch(e){}
    audioEl = null;
  }
}

function finished(mine){
  if (mine !== gen || !playing) return;
  if (idx < SENT.length - 1) speak(idx + 1);
  else { playing = false; clearWords(); paint(); }
}

// GOOGLE CLOUD: fetched live with the viewer's own key, then played like a clip.
// Prefetches the next sentence so playback does not stall between sentences.
function playGoogle(mine){
  var v = googleVoice;
  playBtn.textContent = "Loading…";
  fetchClip(idx, v).then(function(clip){
    if (mine !== gen) return;
    /* 🚨 AN ICON, AND THE BUTTON KEEPS ITS SHAPE. Paul, 2026-08-29: "instead of
     the button say read to me it just shows a play and pause icon inside of
     the button. dont change the shape of the button." The min-width stays, so
     it does not resize as it toggles - a transport button that changes width
     every time you press it never feels solid. The words move to aria-label
     and title, so a screen reader still hears a verb. */
  playBtn.innerHTML = playing ? "<svg width=\"17\" height=\"17\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M4 2.5h3.1v11H4zM8.9 2.5H12v11H8.9z\"/></svg>" : "<svg width=\"17\" height=\"17\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M4 2.2l9 5.8-9 5.8z\"/></svg>";
  playBtn.setAttribute("aria-label", playing ? "Pause" : "Read to me");
  playBtn.setAttribute("title", playing ? "Pause" : "Read to me");
    playClipFrom(mine, clip);
    if (idx + 1 < SENT.length) fetchClip(idx + 1, v).catch(function(){});
  }).catch(function(err){
    if (mine !== gen) return;
    note(String(err.message || err), "bad");
    engine = "device";
    syncVoiceUI();
    /* 🚨 REPAINT AFTER THE FALLBACK OR NOTHING EVER HIGHLIGHTS AGAIN.
       paint() ran in speak(), BEFORE this request was made, and at that moment
       wordMode() was true because a Google voice was selected and a key exists -
       so the sentence band was deliberately suppressed to leave room for per-word
       timings. The request then failed, we dropped to the device voice, and the
       band was never asked for again. The lesson reads aloud with NOTHING lit up.

       Paul found it on 2026-09-04: "US male Neural2 D that didnt highlight at all
       but when i swith to UK male and uk female it worked", and "it sounded like
       the UK male until i checked and switched it even though it was wrong" -
       which is this exact path: Google voice selected, Google request failed,
       device voice heard, picker still showing the Google one, no highlight.
       ⚠️ engine changed, so wordMode() is false now and paint() will draw the band. */
    paint();
    playSynth(mine);
  });
}

// STUDIO: pre-rendered clip baked into the page at build time
function playClip(mine){
  playClipFrom(mine, AUDIO.clips[idx]);
}

/* 🚨 ONE PLACE RESOLVES A CLIP PATH — ROADMAP 27.
   Clips baked to R2 are stored RELATIVE ("lessons/x/voice/male/000.mp3") and
   voice.json carries `base`. Clips baked before R2 are absolute ("/lessons/...")
   and carry no base. Both must keep working: history and maths were baked long
   before this and must not need re-baking.

   ⭐ This is also what makes the host swappable. Moving from workers.dev to
   media.nexstudents.org changes MEDIA_BASE in the build and nothing else -
   no page edit, no re-bake, however many lessons exist by then. */
function mediaUrl(src){
  if (!src) return src;
  if (src.charAt(0) === "/" || /^https?:\/\//i.test(src)) return src;
  return (MEDIA_BASE || "").replace(/\/+$/, "") + "/" + src.replace(/^\/+/, "");
}

function playClipFrom(mine, clip){
  var s = SENT[idx];
  if (demoOpen()) resetSteps();
  var marks = clip.marks || [];
  audioEl = new Audio(mediaUrl(clip.src));
  /* 🚨 SPEED COMES FROM PLAYBACK, NOT FROM THE CLIP. Baked audio is generated
     once at natural speed, so Slow / Normal / Fast are applied here. 0.85 is
     what the picker calls "Normal", so dividing by it keeps Normal at exactly
     the recorded pace and makes the other two relative to it.
     Word marks need no adjustment: currentTime reports MEDIA time, which does
     not change when playbackRate does. */
  audioEl.playbackRate = Math.max(0.5, Math.min(2, rateVal() / 0.85));

  function tick(){
    if (mine !== gen || !audioEl) return;
    var t = audioEl.currentTime, k = -1;
    for (var j = 0; j < marks.length; j++){
      if (marks[j] <= t) k = j; else break;
    }
    /* 🚨 THE WORD HIGHLIGHT OBEYS THE PANEL TOO. The sentence band is switched
       off in paint() while the Visual Panel is open; NexVoice marks the WORD
       instead of the band, so it needs the same rule here or the two engines
       would behave differently on the one thing Paul actually asked for. */
    var lit = demoOpen() ? -1 : k;
    s.words.forEach(function(w, wi){ w.el.classList.toggle("on", wi === lit); });
    /* The same word index the highlight uses. While the panel is open it moves
       the panel from one half to the other instead of moving a word band. */
    if (demoOpen()) phaseFromWord(k, s.words.length);
    rafId = requestAnimationFrame(tick);
  }

  audioEl.onended = function(){ finished(mine); };
  var p = audioEl.play();
  if (p && p.then){
    p.then(function(){ rafId = requestAnimationFrame(tick); })
     .catch(function(){ if (mine === gen) playSynth(mine); });   // clip broken -> device voice
  } else {
    rafId = requestAnimationFrame(tick);
  }
}

/* ── picking the voice at SPEAK time, not at page load ──────────────────────
   Paul, 2026-08-26: "the voices for desktop dont work if i select them on
   mobile". Two Android behaviours cause that:
     1. getVoices() is repopulated, so the object saved at load no longer
        matches anything and the engine quietly uses its own default.
     2. Android honours utterance.voice far more reliably when lang is set
        to that voice s language as well.
   So the choice is stored as a NAME and re-resolved every time we speak. */
function resolveVoice(){
  if (!supported) return null;
  var want = voice && voice.name;
  var all = synth.getVoices() || [];
  if (want){
    for (var i = 0; i < all.length; i++) if (all[i].name === want) return all[i];
  }
  return voice && all.indexOf(voice) >= 0 ? voice : null;
}
function applyVoiceTo(u){
  var v = resolveVoice();
  if (v){ u.voice = v; if (v.lang) u.lang = v.lang; }
}

// DEVICE: the browser's own voice, and the fallback for everything
function playSynth(mine){
  if (!supported) return;
  var s = SENT[idx];
  var u = new SpeechSynthesisUtterance(s.text);
  u.rate = rateVal();
  applyVoiceTo(u);
  /* 🚨 NO WORD HIGHLIGHTING ON DEVICE VOICES. Paul, 2026-08-29: "when the
     other voices play the highlighted doesnt keep up compared to NexVoice ...
     NexVoice can highlight individual words while the rest can highlight
     sentences."

     He is right and it is the better answer. A device voice reports nothing
     usable - network voices fire no boundary events at all - so any word
     highlight is a guess, and a guess that drifts is worse than none: it
     teaches a struggling reader to look at the wrong word. The sentence band
     is always correct, because we know exactly which sentence is playing.
     The estimator is gone rather than disabled; dead code that once ran is how
     it comes back by accident. */
  /* A local voice reports a real character position. Use it when it comes, and
     let it switch the clock off - the same flip, driven by better evidence. */
  u.onboundary = function(e){
    if (mine !== gen || !demoOpen()) return;
    if (e == null || e.charIndex == null || !s.text.length) return;
    sawBoundary = true;
    phaseFromFraction(e.charIndex / s.text.length);
  };
  u.onend = function(){ finished(mine); };
  if (demoOpen()) runPhaseClock(s.text, u.rate);
  // Chrome drops long queues if the tab throttles; one sentence at a time avoids it
  synth.speak(u);
}

function speak(i){
  if (!supported && !hasStudio()) return;
  stopEngines();
  var mine = gen;
  idx = Math.max(0, Math.min(SENT.length - 1, i));
  clearWords();
  paint();
  var s = SENT[idx];
  followScroll(s.el);

  if (engine === "google" && hasKey()) playGoogle(mine);
  else if (engine === "baked" && hasStudio()) playClip(mine);
  else playSynth(mine);
}

playBtn.addEventListener("click", function(){
  if (!supported && !hasStudio()) return;
  if (playing){
    playing = false;
    stopEngines();
    clearWords();
    paint();
  } else {
    playing = true;
    resumeFollowing();
    speak(idx);
  }
});

/* The arrows are a deliberate "take me to that sentence", so they resume following
   too - see resumeFollowing(). They already scrolled when paused; the bug was that
   while PLAYING they handed off to speak(), which respected the stuck flag. */
document.getElementById("back").addEventListener("click", function(){
  var t = Math.max(0, idx - 1);
  resumeFollowing();
  if (playing) speak(t); else { idx = t; paint(); nsEyeLine(SENT[idx].el); }
});
document.getElementById("fwd").addEventListener("click", function(){
  var t = Math.min(SENT.length - 1, idx + 1);
  resumeFollowing();
  if (playing) speak(t); else { idx = t; paint(); nsEyeLine(SENT[idx].el); }
});
var rateSel = document.getElementById("rate");
(function restoreRate(){
  var r = load("speed", null);
  if (r && [].some.call(rateSel.options, function(o){ return o.value === r; })) rateSel.value = r;
})();
rateSel.addEventListener("change", function(){
  store("speed", rateSel.value);
  /* With baked or studio audio the speed can change under a playing clip, so
     the sentence carries on instead of starting again - restarting a line
     every time a reader nudges the speed is its own small punishment. The
     device voice cannot do that, so it still re-speaks. */
  if (playing && audioEl){
    audioEl.playbackRate = Math.max(0.5, Math.min(2, rateVal() / 0.85));
  } else if (playing){
    speak(idx);
  }
});

function targetFromEvent(e){
  var el = document.elementFromPoint(e.clientX, e.clientY);
  var tk = el && el.closest ? el.closest(".tick") : null;
  if (tk){
    var i = ticks.indexOf(tk);
    if (i >= 0) return i;
  }
  var r = scrub.getBoundingClientRect();
  var x = (e.clientX - r.left) / Math.max(1, r.width);
  return Math.max(0, Math.min(SENT.length - 1, Math.floor(x * SENT.length)));
}
function seekTo(t){
  if (t === idx && playing) return;          /* do not restart the same clip */
  if (playing) speak(t);
  else { idx = t; paint(); nsEyeLine(SENT[idx].el); }
}
function seekFromEvent(e){ seekTo(targetFromEvent(e)); }

/* ── 3. PRESS AND DRAG ────────────────────────────────────────────────────
   It only listened for click, so nothing happened until the finger came back
   up and dragging along the bar did nothing at all - which feels broken rather
   than slow. Pointer events give an immediate response and scrubbing, and the
   capture keeps it working when the finger leaves the bar mid-drag.
   ⚠️ While dragging we only MOVE, never re-speak on every tick - restarting
   audio 26 times across a swipe is the stutter. The voice follows on release. */
var dragging = false, dragTo = -1;
var dragWantY = null, dragRaf = 0;

function dragGlide(){
  if (!dragging){ dragRaf = 0; return; }
  selfScrollAt = Date.now();          /* this scrolling is ours, not the reader is */
  if (dragWantY !== null){
    var cur = window.scrollY;
    var delta = dragWantY - cur;
    if (Math.abs(delta) < 0.5) window.scrollTo(0, dragWantY);
    else window.scrollTo(0, cur + delta * 0.22);   /* ease, never snap */
  }
  dragRaf = requestAnimationFrame(dragGlide);
}
scrub.addEventListener("pointerdown", function(e){
  e.preventDefault();
  dragging = true; scrub.classList.add("dragging");
  try { scrub.setPointerCapture(e.pointerId); } catch(err){}
  dragTo = targetFromEvent(e);
  idx = dragTo; paint();
  dragWantY = nsEyeTargetY(SENT[dragTo].el);
  if (!dragRaf) dragRaf = requestAnimationFrame(dragGlide);
});
scrub.addEventListener("pointermove", function(e){
  if (!dragging) return;
  var t = targetFromEvent(e);
  if (t === dragTo) return;
  dragTo = t;
  idx = t; paint();
  dragWantY = nsEyeTargetY(SENT[t].el);   /* the loop eases toward it */
});
scrub.addEventListener("pointerup", function(e){
  if (!dragging) return;
  dragging = false; scrub.classList.remove("dragging");
  if (dragRaf){ cancelAnimationFrame(dragRaf); dragRaf = 0; }
  dragWantY = null;
  selfScrollAt = Date.now();          /* momentum after release is still ours */
  try { scrub.releasePointerCapture(e.pointerId); } catch(err){}
  paint();                            /* drops the scrubbing highlight if paused */
  if (playing) speak(dragTo); else nsEyeLine(SENT[dragTo].el);
});
function endDrag(){
  if (!dragging && !dragRaf) return;
  dragging = false;
  scrub.classList.remove("dragging");
  if (dragRaf){ cancelAnimationFrame(dragRaf); dragRaf = 0; }
  dragWantY = null;
}
scrub.addEventListener("pointercancel", endDrag);
scrub.addEventListener("lostpointercapture", endDrag);
addEventListener("blur", endDrag);
document.addEventListener("visibilitychange", function(){
  if (document.visibilityState === "hidden"){ endDrag(); stopEngines(); playing = false; paint(); }
});
scrub.addEventListener("keydown", function(e){
  if (e.key === "ArrowLeft"){ e.preventDefault(); document.getElementById("back").click(); }
  if (e.key === "ArrowRight"){ e.preventDefault(); document.getElementById("fwd").click(); }
});

/* ── ADDED, not asked for ──────────────────────────────────────────────────
   Paul, 2026-08-29: "if you have any suggestions go ahead and add it."

   1. KEYBOARD CONTROL ANYWHERE ON THE PAGE, not just when the scrub bar has
      focus. Space plays and stops, the arrows step a sentence. A student
      re-reading a hard line should not have to find a 44px target with a
      mouse every time; the most repeated action on this page deserves a key.

      ⚠️ It must NOT fire while typing. Without the tag guard, pressing space
      inside the API key field would swallow the space AND start the reader,
      which looks like the page fighting you. */
(function keyboard(){
  document.addEventListener("keydown", function(e){
    var t = e.target || {};
    var tag = (t.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select" || t.isContentEditable) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === " " || e.key === "Spacebar"){ e.preventDefault(); playBtn.click(); }
    else if (e.key === "ArrowLeft"){ e.preventDefault(); document.getElementById("back").click(); }
    else if (e.key === "ArrowRight"){ e.preventDefault(); document.getElementById("fwd").click(); }
  });
})();

/* 2. COME BACK TO WHERE HE STOPPED. A lesson is longer than one sitting, and
      starting at sentence 1 every time is how a student re-reads the opening
      four times and never reaches the end. The position is per lesson and
      per device.

      It does NOT auto-play on load - landing on a page that starts talking is
      hostile. It sets the place; he presses play. */
(function resume(){
  var RK = "pos:" + LESSON_ID;
  var saved = parseInt(load(RK, "0"), 10);
  if (saved > 0 && saved < SENT.length){
    idx = saved;
    paint();
    /* no scrollIntoView on load: a page that jumps before you have read the
       title is disorienting. The scrub bar shows where he is. */
  }
  var last = idx;
  window.nsSavePos = function(){
    if (idx === last) return;
    last = idx;
    store(RK, String(idx));
  };
  /* and once more on the way out, in case the last move was the last thing
     that happened */
  addEventListener("pagehide", function(){ last = -1; window.nsSavePos(); });
  document.addEventListener("visibilitychange", function(){
    if (document.visibilityState === "hidden"){ last = -1; window.nsSavePos(); }
  });
})();

/* Tap a sentence to read from there. This lives in the ENGINE so every
   lesson type gets it, not just history.

   ⚠️ History has its own click handler on the story, because tapping is also
   how the answer hunt works there. It bails out if that pages hunt control is
   present, so the two never both fire and speak the same line twice. */
(function tapToRead(){
  if (document.getElementById("huntcancel")) return;   /* history handles its own */
  storyEl.addEventListener("click", function(e){
    var t = e.target.closest ? e.target.closest(".sent") : null;
    if (!t) return;
    var i = parseInt(t.getAttribute("data-i"), 10);
    if (isNaN(i)) return;
    playing = true;
    resumeFollowing();
    speak(i);
  });
})();



/* ── the walkthrough ───────────────────────────────────────────────────────
   paintDemo(i) draws the state at sentence i: which example is on screen, how
   many of its rows have been revealed, and whether the number line has drawn
   its jump. `ex`, `show` and `line` on each caption are what carry that, so
   they are structure rather than decoration.
   ------------------------------------------------------------------------ */
var workEl = document.getElementById("work");
var nlEl   = document.getElementById("nlwrap");

function nlSvg(S, ring){
  /* Range is derived from the numbers in play, padded so the jump is never
     flush against an edge. */
  var lo = Math.min(S.start, S.ans, 0), hi = Math.max(S.start, S.ans, 0);
  var padN = Math.max(1, Math.round((hi - lo) * 0.18));
  lo -= padN; hi += padN;
  var W = 640, H = 96, pad = 26, span = hi - lo || 1;
  function x(v){ return pad + ((v - lo) / span) * (W - pad * 2); }
  var axisY = 62, out = [];
  /* One tick per unit while that stays legible, otherwise only the numbers
     that matter. A 120-wide range drawn per unit is a grey smear. */
  var stepN = span > 40 ? Math.ceil(span / 20) : 1;
  for (var v = Math.ceil(lo); v <= hi; v++){
    var isZero = v === 0, keyN = (v === S.start || v === S.ans);
    if (!isZero && !keyN && (v % stepN)) continue;
    out.push('<line x1="' + x(v).toFixed(1) + '" y1="' + (axisY - (isZero ? 9 : 5)) +
      '" x2="' + x(v).toFixed(1) + '" y2="' + (axisY + (isZero ? 9 : 5)) +
      '" stroke="currentColor" stroke-width="' + (isZero ? 2 : 1) + '"/>');
    if (isZero || keyN)
      out.push('<text x="' + x(v).toFixed(1) + '" y="' + (axisY + 26) +
        '" text-anchor="middle" font-size="12" fill="currentColor">' + v + "</text>");
  }
  /* Circles round the values being compared, so "further from zero" is a
     thing you can SEE rather than a claim. Paul, 2026-08-30: "perhaps put a
     circle around the -9 and the put one around 0 to show it in the walk
     through as it is speaking." */
  var rings = (ring || []).map(function(v){
    return '<circle cx="' + x(v).toFixed(1) + '" cy="' + axisY + '" r="13" fill="none" ' +
      'stroke="var(--a)" stroke-width="2" stroke-dasharray="3 3"/>';
  }).join("");
  /* The span being compared, drawn under the axis between the two circled
     values, so the distance itself is visible. */
  if ((ring || []).length === 2){
    var rA = x(ring[0]), rB = x(ring[1]);
    rings += '<line x1="' + Math.min(rA, rB).toFixed(1) + '" y1="' + (axisY + 34) +
      '" x2="' + Math.max(rA, rB).toFixed(1) + '" y2="' + (axisY + 34) +
      '" stroke="var(--a)" stroke-width="1.5" stroke-dasharray="2 3"/>';
  }

  var x1 = x(S.start), x2 = x(S.ans);
  return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="number line from ' +
    S.start + " to " + S.ans + '">' +
    '<defs><marker id="nlar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" ' +
      'markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--a)"/></marker></defs>' +
    '<line x1="' + pad + '" y1="' + axisY + '" x2="' + (W - pad) + '" y2="' + axisY +
      '" stroke="currentColor" stroke-width="1.5"/>' + out.join("") + rings +
    '<path d="M ' + x1.toFixed(1) + " 30 L " + x2.toFixed(1) + ' 30" stroke="var(--a)" ' +
      'stroke-width="2.5" fill="none" marker-end="url(#nlar)"/>' +
    '<circle cx="' + x1.toFixed(1) + '" cy="' + axisY + '" r="4.5" fill="var(--a)"/>' +
    '<text x="' + ((x1 + x2) / 2).toFixed(1) + '" y="20" text-anchor="middle" font-size="12.5" ' +
      'fill="var(--a)">' + (S.move >= 0 ? "+" : "") + S.move + "</text></svg>";
}

/* 🚨 THE ROWS ARE BUILT ONCE PER EXAMPLE AND THEN ONLY TOGGLED.
   The first version rebuilt every row on every paint and added the reveal
   class inside requestAnimationFrame. That was wrong twice over: a rebuilt
   element starts at its final style, so the fade could never actually run,
   and rAF does not fire in a BACKGROUND TAB - a student who switched away and
   came back found the walkthrough completely blank. Building once and
   toggling a class fixes both, and needs no rAF at all. */
var curEx = -1, rowEls = [];

function buildRows(S){
  workEl.innerHTML = "";
  rowEls = S.rows.map(function(html, r){
    var d = document.createElement("div");
    d.className = "row" + (r === 1 && S.kind !== "subtract" ? " note" : "") +
                  (r === S.rows.length - 1 ? " ans" : "");
    /* The rows carry their own markup - the minus signs are wrapped in spans
       by integer-captions.js so they can be highlighted. Generated here, not
       user content, so innerHTML is safe. */
    d.innerHTML = html;
    workEl.appendChild(d);
    return d;
  });
}

function paintDemo(upto){
  /* Walk forward to the latest caption belonging to an example. The closing
     instructions carry no `ex`, so the last worked example stays on screen
     behind the questions block. */
  var ex = -1, show = 0, line = false, ring = null, hi = "";
  for (var k = 0; k <= upto && k < CAPS.length; k++){
    var c = CAPS[k];
    if (c.ex === undefined) continue;
    if (c.ex !== ex){ ex = c.ex; show = 0; line = false; ring = null; }
    show = Math.max(show, c.show || 0);
    if (c.line) line = true;
    if (c.ring) ring = c.ring;
    /* The highlight belongs to the sentence being read, not to everything
       read so far, so it is taken from the LAST caption rather than merged. */
    hi = (k === upto && c.hi) ? c.hi : (k === upto ? "" : hi);
  }
  if (ex < 0){ ex = 0; show = 0; line = false; }

  var S = DEMO[ex];
  if (ex !== curEx){ curEx = ex; buildRows(S); }
  rowEls.forEach(function(d, r){ d.classList.toggle("on", r < show); });
  workEl.className = "work" + (hi ? " hi-" + hi : "");

  var key = (line ? "1" : "0") + "|" + ex + "|" + (ring ? ring.join(",") : "");
  if (nlEl.getAttribute("data-key") !== key){
    nlEl.setAttribute("data-key", key);
    nlEl.innerHTML = line ? nlSvg(S, ring) : "";
  }
}

/* One hook, one engine: the demo follows the reader. */
window.nsOnSentence = function(i){ paintDemo(i); };
paintDemo(0);

/* ── where the problems come from ──────────────────────────────────────────
   Not a list. Paul, 2026-08-26: "retesting yourself with the same questions
   doesn't help improve." Rolled from SPEC and seeded by the date, so the set
   holds still all day and changes tomorrow. New Problems reseeds by hand.
   ------------------------------------------------------------------------ */
function rng(seed){                       /* mulberry32, small and repeatable */
  var a = seed >>> 0;
  return function(){
    a = (a + 0x6D2B79F5) >>> 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function seedFromString(s){
  var h = 2166136261;
  for (var i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function today(){
  var d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

var SIGNS = { pp:[1,1], nn:[-1,-1], pn:[1,-1], np:[-1,1] };

/* An answer of exactly 0 is a real case but a poor practice item: zero has no
   sign, so it hides the exact mistake this page is trying to catch. Skipped
   here and in build-integers.js by the same rule. */
/* 🚨 EASY FIRST, AND IN THAT ORDER.
   Paul, 2026-08-30: "you are doing double digit questions and it might be
   easier to do single digit at first. spectrum does this", then the sharper
   version - "your wlk through was only single digits so why would you make
   the questions not the same?" He was right: the walkthrough demonstrates
   -4 + (-9) and the first version then asked 41 + (-40). The first tier now
   matches the walkthrough exactly, and the tiers are dealt IN ORDER so the
   page gets harder as it goes rather than at random. */
function magsFor(tier, side){
  var round = side === "a" ? tier.aRound : tier.bRound;
  if (round) return round.slice();
  var max = side === "a" ? tier.aMax : tier.bMax, out = [];
  for (var i = 1; i <= max; i++) out.push(i);
  return out;
}

function makeProblem(rand, key, tier){
  var s = SIGNS[key];
  var As = magsFor(tier, "a"), Bs = magsFor(tier, "b");
  for (var tries = 0; tries < 400; tries++){
    var a = As[Math.floor(rand() * As.length)] * s[0];
    var b = Bs[Math.floor(rand() * Bs.length)] * s[1];
    var ans = SPEC.kind === "add" ? a + b : a - b;
    if (ans === 0) continue;
    return { a:a, b:b, ans:ans, mix:key, span:Math.max(Math.abs(a), Math.abs(ans)) };
  }
  return SPEC.kind === "add" ? { a:-9, b:4, ans:-5, mix:"np", span:9 }
                             : { a:5, b:-3, ans:8, mix:"pn", span:8 };
}

/* 🚨 THE SIGN MIX IS DEALT, NOT DRAWN.
   Picking each problem's sign combination at random looked fine and was not:
   a real generated set came out with seven negative+positive and ONE
   positive+negative, so a student could work the whole page and barely meet
   one of the four cases the lesson teaches. Drawing 15 times from 4 buckets
   clusters badly far more often than it feels like it should.
   So the combinations are dealt round-robin first and then shuffled, which
   makes the balance structural instead of probabilistic. Same reasoning as
   the Part B guards in build-english.js, which refuse a set where one kind is
   over 70% or three run together. */
function mixOrder(rand){
  var order = [];
  for (var i = 0; i < SPEC.count; i++) order.push(SPEC.mix[i % SPEC.mix.length]);
  /* Fisher-Yates on the seeded rng, so the deal is even but the sequence is
     not the same four repeating down the page. */
  for (var j = order.length - 1; j > 0; j--){
    var k = Math.floor(rand() * (j + 1));
    var t = order[j]; order[j] = order[k]; order[k] = t;
  }
  /* A shuffle can still leave a run of three the same, which reads as a
     pattern and lets a student coast. Break any run by swapping the offender
     with the next item that differs from its new neighbours. */
  for (var m = 2; m < order.length; m++){
    if (order[m] !== order[m - 1] || order[m] !== order[m - 2]) continue;
    for (var n = m + 1; n < order.length; n++){
      if (order[n] === order[m]) continue;
      var swap = order[n]; order[n] = order[m]; order[m] = swap;
      break;
    }
  }
  return order;
}

function makeSet(seedStr){
  var rand = rng(seedFromString(LESSON_ID + "|" + seedStr));
  var order = mixOrder(rand);
  /* One tier per slot, dealt in order: the eight single-digit ones first,
     then the round tens, then the few harder. The SIGNS are shuffled within
     that, so the page gets harder without becoming predictable. */
  var tierOf = [];
  SPEC.tiers.forEach(function(t){
    for (var i = 0; i < t.n; i++) tierOf.push(t);
  });
  var out = [], seen = {};
  for (var i = 0; i < order.length && i < tierOf.length; i++){
    var p = null;
    for (var tries = 0; tries < 80; tries++){
      var c = makeProblem(rand, order[i], tierOf[i]);
      var k = c.a + "|" + c.b;
      if (seen[k]) continue;              /* never the same one twice on a page */
      seen[k] = true; p = c; break;
    }
    if (p) out.push(p);
  }
  return out;
}

/* A negative number after an operator wears brackets, the way a workbook
   writes it. Without them "8 + -3" reads as two operators in a row. */
function term(n){ return n < 0 ? "(" + n + ")" : String(n); }

/* ── the problems ──────────────────────────────────────────────────────── */
var host = document.getElementById("problems");
var solved = 0, PROBLEMS = [], BOXES = [];
var MODE = "practice";

function el(tag, cls, txt){
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt !== undefined) e.textContent = txt;
  return e;
}

/* Every answer box behaves the same way in both modes; only the CHECKING
   differs. Practice marks the moment the right number is typed, which is why
   there is no per-keystroke wrong marking: "-8" passes through "-" and "-"
   is not an answer. A wrong answer is only called wrong on Enter or on
   leaving the box. */
function answerBox(want, ask, nudge, box, onSolved){
  var inp = el("input", "ans");
  inp.type = "text";
  inp.inputMode = "text";        /* not numeric: the minus sign has to be typeable */
  inp.autocomplete = "off";
  inp.placeholder = "?";
  inp.setAttribute("aria-label", ask);
  var done = false;

  function markRight(){
    if (done) return;
    done = true;
    inp.classList.remove("bad", "wrong");
    inp.classList.add("ok");
    inp.disabled = true;
    nudge.classList.remove("warn");
    nudge.textContent = "";
    onSolved();
  }
  function markWrong(){
    if (done) return;
    inp.classList.add("bad");
    nudge.classList.add("warn");
    nudge.textContent = ask;
    setTimeout(function(){ inp.classList.remove("bad"); }, 320);
  }

  inp.addEventListener("input", function(){
    var v = inp.value.replace(/[^0-9-]/g, "");
    if (v.indexOf("-") > 0) v = v.replace(/-/g, "");   /* a minus only leads */
    inp.value = v;
    if (MODE !== "practice") return;
    if (/^-?\d+$/.test(v) && Number(v) === want) markRight();
  });
  inp.addEventListener("keydown", function(e){
    if (e.key !== "Enter" || MODE !== "practice") return;
    e.preventDefault();
    if (/^-?\d+$/.test(inp.value) && Number(inp.value) !== want) markWrong();
  });
  inp.addEventListener("blur", function(){
    if (MODE !== "practice" || inp.value === "") return;
    if (/^-?\d+$/.test(inp.value) && Number(inp.value) !== want) markWrong();
  });

  BOXES.push({ el: inp, want: want, box: box });
  return inp;
}

/* A number line the student can click to answer. Range covers the numbers in
   play with a little air; clicking snaps to the nearest whole number and
   fills the answer box, which then runs through the same checking as typing.

   🚨 EVERY PROBLEM GETS ONE. The first version hid the line whenever the span
   passed 26 units, which meant the harder questions - the ones where seeing
   it helps most - had none. Paul, 2026-08-30: "the larger digits dont have a
   line to tap on. i get the point its a long line to add but perhaps you can
   space them closer together with more tickes."

   The fix is to hold the SPACING steady instead of the width. Every tick gets
   at least MIN_PX, so a wide range simply makes a wide line and the wrapper
   scrolls sideways - the ticks stay the same comfortable distance apart at
   any range, rather than being squeezed into 3px each on a phone. */
var PNL_MIN_PX = 11;      /* pixels per unit, before the line starts scrolling */
var PNL_BASE_W = 620;

function problemLine(P, setAnswer){
  var lo = Math.min(P.a, P.ans, 0), hi = Math.max(P.a, P.ans, 0);
  lo -= 2; hi += 2;
  var span = hi - lo;

  var H = 62, pad = 18, axisY = 30;
  /* Wide enough to keep the ticks apart; never narrower than the panel. */
  var W = Math.max(PNL_BASE_W, span * PNL_MIN_PX + pad * 2);
  function x(v){ return pad + ((v - lo) / span) * (W - pad * 2); }

  /* Label density follows the range so the numbers never collide, while a
     tick still marks every single unit - which is what makes it clickable. */
  var labelEvery = span <= 14 ? 1 : span <= 40 ? 5 : span <= 120 ? 10 : 25;
  var parts = [];
  for (var v = Math.ceil(lo); v <= hi; v++){
    var zero = v === 0;
    var major = zero || v % labelEvery === 0;
    parts.push('<line x1="' + x(v).toFixed(1) + '" y1="' + (axisY - (zero ? 8 : major ? 6 : 4)) +
      '" x2="' + x(v).toFixed(1) + '" y2="' + (axisY + (zero ? 8 : major ? 6 : 4)) +
      '" stroke="currentColor" stroke-width="' + (zero ? 2 : 1) + '"/>');
    if (major)
      parts.push('<text x="' + x(v).toFixed(1) + '" y="' + (axisY + 22) +
        '" text-anchor="middle" font-size="10" fill="currentColor">' + v + "</text>");
  }

  var wrap = document.createElement("div");
  wrap.className = "pnl";
  var svgStyle = W > PNL_BASE_W ? ' style="width:' + W + 'px;max-width:none"' : "";
  wrap.innerHTML = '<svg viewBox="0 0 ' + W + " " + H + '"' + svgStyle + '>' +
    '<line class="axis" x1="' + pad + '" y1="' + axisY + '" x2="' + (W - pad) + '" y2="' + axisY +
      '" stroke="currentColor" stroke-width="1.5"/>' + parts.join("") +
    '<circle class="pick" cx="0" cy="' + axisY + '" r="5" style="display:none"/>' +
    '<rect class="hit" x="0" y="0" width="' + W + '" height="' + H + '"/></svg>';

  var svg = wrap.querySelector("svg"), dot = wrap.querySelector(".pick");
  function valueAt(clientX){
    /* getBoundingClientRect is the RENDERED box, so it already accounts for
       how far the wrapper has been scrolled sideways. */
    var r = svg.getBoundingClientRect();
    var vx = ((clientX - r.left) / r.width) * W;          /* into viewBox units */
    return Math.round(lo + ((vx - pad) / (W - pad * 2)) * span);
  }
  wrap.addEventListener("click", function(e){
    var v = valueAt(e.clientX);
    if (v < lo || v > hi) return;
    dot.setAttribute("cx", x(v).toFixed(1));
    dot.style.display = "";
    setAnswer(v);
  });

  /* A line that scrolls has to say so, or it looks truncated. */
  wrap.setAttribute("data-wide", W > PNL_BASE_W ? "1" : "0");
  return wrap;
}

function addProblem(P, pi){
  var box = el("div", "prob");
  box.setAttribute("data-i", pi);
  var head = el("div", "probhead");
  head.appendChild(el("span", "probnum", "Problem " + (pi + 1)));
  var tag = el("span", "tag", "");
  head.appendChild(tag);
  box.appendChild(head);

  var nudge = el("p", "nudge", "");
  var need = SPEC.kind === "subtract" ? 2 : 1;
  var got = 0;
  var ansInput = null;          /* the box holding the ANSWER, set below */
  function onSolved(){
    got++;
    if (got < need) return;
    box.classList.add("solved");
    tag.classList.add("done");
    tag.textContent = "Solved";
    nudge.classList.remove("warn");
    nudge.textContent = SPEC.kind === "subtract"
      ? "Right. " + P.a + " minus " + term(P.b) + " is the same as " + P.a + " plus " + term(-P.b) + "."
      : "Right.";
    solved++;
    save();
    paintScore();
  }

  if (SPEC.kind === "subtract"){
    /* Two boxes: the rewrite, then the answer. Keep, Change, Change is the
       whole lesson, so the conversion is typed rather than assumed - and when
       one of the two is wrong you can see WHICH half failed. */
    box.appendChild(el("p", "steplab", "Keep, change, change. Then add."));
    var r1 = el("div", "expr");
    r1.appendChild(el("span", null, String(P.a)));
    r1.appendChild(el("span", "op", "-"));
    r1.appendChild(el("span", null, term(P.b)));
    r1.appendChild(el("span", "op", "="));
    r1.appendChild(el("span", null, String(P.a)));
    r1.appendChild(el("span", "op", "+"));
    r1.appendChild(answerBox(-P.b, "Change the sign of " + P.b + ". What does it become?", nudge, box, onSolved));
    box.appendChild(r1);

    var r2 = el("div", "expr");
    r2.style.marginTop = "10px";
    r2.appendChild(el("span", "op", "="));
    ansInput = answerBox(P.ans, "Now add. Same signs add and keep the sign, different signs subtract.", nudge, box, onSolved);
    r2.appendChild(ansInput);
    box.appendChild(r2);
  } else {
    var r = el("div", "expr");
    r.appendChild(el("span", null, String(P.a)));
    r.appendChild(el("span", "op", "+"));
    r.appendChild(el("span", null, term(P.b)));
    r.appendChild(el("span", "op", "="));
    ansInput = answerBox(P.ans, "Are the signs the same or different? Same signs add and keep the sign. Different signs subtract, and take the sign of the one further from zero.", nudge, box, onSolved);
    r.appendChild(ansInput);
    box.appendChild(r);
  }

  /* The clickable line answers the ANSWER box - on a subtraction that is the
     second one, because the first is the rewrite and is not a place on the
     number line. Setting .value and firing `input` runs the same checking
     path as typing, so there is one place where an answer is judged. */
  var line = problemLine(P, function(v){
    if (ansInput.disabled) return;
    ansInput.value = String(v);
    ansInput.dispatchEvent(new Event("input", { bubbles: true }));
    ansInput.focus();
  });
  if (line){
    box.appendChild(line);
    var hint = el("p", "pnl-note", "Click the line to answer, or type it above.");
    box.appendChild(hint);
  }

  box.appendChild(nudge);
  host.appendChild(box);
}

function renderSet(list){
  PROBLEMS = list;
  solved = 0;
  BOXES = [];
  host.innerHTML = "";
  document.getElementById("check").hidden = MODE !== "test";
  document.getElementById("modenote").textContent = MODE === "practice"
    ? "A box turns green the moment you type the right number. Press Enter if you want to be told you are wrong."
    : "Nothing gets checked as you go. Fill in every box, wrong answers and all, then press Check my work. This is the one that tells you what you actually know.";
  list.forEach(addProblem);
  paintScore();
}

/* ── marking the test ─────────────────────────────────────────────────── */
function markTest(){
  var right = 0, blank = 0, perBox = {};
  BOXES.forEach(function(b){
    var v = b.el.value;
    b.el.classList.remove("ok", "wrong");
    if (v === "") blank++;
    else if (/^-?\d+$/.test(v) && Number(v) === b.want){ b.el.classList.add("ok"); right++; }
    else b.el.classList.add("wrong");
    b.el.disabled = true;
    var key = b.box.getAttribute("data-i");
    if (!perBox[key]) perBox[key] = { ok: true, box: b.box };
    if (!(/^-?\d+$/.test(v) && Number(v) === b.want)) perBox[key].ok = false;
  });

  solved = 0;
  Object.keys(perBox).forEach(function(k){
    var r = perBox[k];
    var P = PROBLEMS[Number(k)];
    var tag = r.box.querySelector(".tag");
    var nudge = r.box.querySelector(".nudge");
    if (r.ok){
      solved++;
      r.box.classList.add("solved");
      tag.classList.add("done");
      tag.textContent = "Solved";
      nudge.classList.remove("warn");
      nudge.textContent = "Right.";
    } else {
      nudge.classList.add("warn");
      nudge.textContent = SPEC.kind === "subtract"
        ? "The rewrite is " + P.a + " + " + term(-P.b) + ", and the answer is " + P.ans + "."
        : "The answer is " + P.ans + ". Check the signs first, then the digits.";
    }
  });

  document.getElementById("check").disabled = true;
  save();
  var el2 = document.getElementById("scorebar");
  el2.innerHTML = "<b>" + solved + " of " + PROBLEMS.length + " problems fully right.</b>" +
    '<p style="margin:6px 0 0;color:var(--dim)">' + right + " of " + BOXES.length +
    " boxes correct" + (blank ? ", " + blank + " left blank" : "") +
    ". Press New problems for another test.</p>";
}

var currentSeed = today();
function reload(seed){
  currentSeed = seed;
  document.getElementById("check").disabled = false;
  renderSet(makeSet(seed));
}
reload(currentSeed);

document.getElementById("reroll").addEventListener("click", function(){
  reload(String(Date.now()));
  host.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("check").addEventListener("click", markTest);

function setMode(m){
  if (MODE === m) return;
  MODE = m;
  var pt = document.getElementById("tabPractice"), tt = document.getElementById("tabTest");
  pt.classList.toggle("on", m === "practice");
  tt.classList.toggle("on", m === "test");
  pt.setAttribute("aria-selected", String(m === "practice"));
  tt.setAttribute("aria-selected", String(m === "test"));
  /* Same problems in both modes, so a test can be worked again in practice. */
  reload(currentSeed);
}
document.getElementById("tabPractice").addEventListener("click", function(){ setMode("practice"); });
document.getElementById("tabTest").addEventListener("click", function(){ setMode("test"); });

/* ── progress, stored the way the other lessons store it ──────────────── */
function save(){
  try {
    var K = "ns:prog:" + LESSON_ID;
    /* 🚨 NEVER LET A REOPEN UNDO A FINISHED LESSON. This page does not restore what
       was solved last time, so `solved` starts at 0 on every visit. A blind save
       then overwrote {done:5,total:5,complete:true} with {done:1,...,false} the
       moment a box was touched, and the shelf card lost its green tick — work the
       student really had done, gone, with nothing anywhere to say so. Found
       2026-09-08 on Kolten's own progress. The history template has carried this
       same guard since it was written; these two never got it.
       ⚠️ Only the teacher's Reset, in Teacher Notes, clears a completed record. */
    var prev = null;
    try { prev = JSON.parse(localStorage.getItem(K)); } catch (e2) {}
    var complete = solved === PROBLEMS.length;
    if (prev && prev.complete === true && !complete) return;
    localStorage.setItem(K, JSON.stringify({
      done: solved, total: PROBLEMS.length, complete: complete
    }));
  } catch (e) {}
}
/* The teacher's line and reset, in Teacher Notes. Mirrors the history and English
   templates so all three read the same on the page and in a screenshot for
   HomeschoolGrades.
   ⚠️ This lesson is retry-until-right by design (a wrong digit clears itself), so
   a finished one IS full marks. Say "practised to mastery" rather than printing a
   bare 100% that reads like a test result it never was. */
function paintTeacherScore(){
  var line = document.getElementById("gscoreline");
  var btn  = document.getElementById("greset");
  if (!line) return;
  /* 🚨 TAKE THE TOTAL FROM THE STORED RECORD WHEN THERE IS ONE. PROBLEMS is
     generated fresh on every visit and is still EMPTY the first time this paints,
     so PROBLEMS.length was 0, total was 0, and a completed lesson read "Not
     started yet." with Reset hidden. The saved record carries its own total and
     does not depend on render order. */
  var saved0 = null;
  try { saved0 = JSON.parse(localStorage.getItem("ns:prog:" + LESSON_ID)); } catch (e0) {}
  var total = PROBLEMS.length || (saved0 && saved0.total) || 0;
  if (total === 0) { line.textContent = "Not started yet."; if (btn) btn.hidden = true; return; }
  /* 🚨 READ THE STORED RECORD, NOT JUST THIS VISIT. The page does not restore what
     was solved last time, so `solved` is 0 on a reopen — and a teacher looking at
     a lesson the student finished last week saw "Not started yet." with the Reset
     button hidden, so there was no way to clear it and no grade to copy into
     HomeschoolGrades. The stored record is the truth; this visit only beats it. */
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem("ns:prog:" + LESSON_ID)); } catch (e) {}
  var done = solved;
  if (saved && typeof saved.done === "number" && saved.done > done) done = saved.done;
  if (saved && saved.complete === true) done = total;

  line.className = "gscore-line" + (done === 0 ? "" : done === total ? " good" : "");
  line.textContent = done === 0
    ? "Not started yet."
    : done === total
      ? "Completed · " + total + "/" + total + " (100%) · practised to mastery"
      : done + " of " + total + " solved · still in progress";
  if (btn) btn.hidden = done === 0;
}
/* 🚨 CALL IT DIRECTLY, NOT ONLY FROM paintScore(). paintScore() does not run on
   load here — the scorebar is empty until the first answer — so hanging the
   teacher line off it left a finished lesson reading "Not started yet." with the
   Reset hidden. Found in the browser 2026-09-08; nothing in the build could see it. */
paintTeacherScore();

(function wireTeacherReset(){
  var btn = document.getElementById("greset");
  if (!btn) return;
  btn.addEventListener("click", function(){
    try { localStorage.removeItem("ns:prog:" + LESSON_ID); } catch (e) {}
    location.reload();
  });
})();

function paintScore(){
  paintTeacherScore();
  var e = document.getElementById("scorebar");
  e.innerHTML = solved === PROBLEMS.length
    ? "<b>All " + PROBLEMS.length + " solved.</b>" +
      '<p style="margin:6px 0 0;color:var(--dim)">Every one checked out. That\'s the lesson finished.</p>'
    : "<b>" + solved + " of " + PROBLEMS.length + " solved.</b>" +
      '<p style="margin:6px 0 0;color:var(--dim)">Look at the signs before the digits. ' +
      "A wrong answer tells you which rule to check.</p>";
}
paintScore();

})();
