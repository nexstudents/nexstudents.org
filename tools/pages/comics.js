/* The comics reader, and the SERIES list it renders.
   Lifted out of build-pages.js so it can be edited on its own. */
'use strict';
const SERIES = [
  { id: "donut",
    title: "The Adventures of Donut Boy: The Hole Wonder",
    blurb: "Our first strip. A hero with a hole in the middle and a habit of falling through things.",
    status: "8 episodes",
    cover: "/assets/comics/donut-boy-cover",   // .webp with a .jpg fallback
    /* One page per episode. `img` is the path WITHOUT extension - the reader
       adds .webp with a .jpg fallback. Leave img null and the reader shows an
       honest "being drawn" panel instead of a broken image.
       `title` is left blank deliberately: naming each episode is Paul's call,
       not mine to invent. */
    episodes: [
      { n: "Episode 1", title: "", img: "/assets/comics/donut-boy-ep1" },
      { n: "Episode 2", title: "", img: "/assets/comics/donut-boy-ep2" },
      { n: "Episode 3", title: "", img: "/assets/comics/donut-boy-ep3" },
      { n: "Episode 4", title: "", img: "/assets/comics/donut-boy-ep4" },
      { n: "Episode 5", title: "", img: "/assets/comics/donut-boy-ep5" },
      { n: "Episode 6", title: "", img: "/assets/comics/donut-boy-ep6" },
      { n: "Episode 7", title: "", img: "/assets/comics/donut-boy-ep7" },
      { n: "Episode 8", title: "", img: "/assets/comics/donut-boy-ep8" },
    ] },
];

const comicsPage = () => {
  const cards = SERIES.map((s, i) =>
    '<button class="ser" data-ser="' + s.id + '" aria-pressed="' + (i === 0) + '">' +
      (s.cover
        ? '<picture class="cover art">' +
            '<source srcset="' + s.cover + '.webp" type="image/webp">' +
            '<img src="' + s.cover + '.jpg" alt="' + s.title + ' cover art" ' +
              'width="960" height="640" loading="lazy" decoding="async">' +
          '</picture>'
        : '<div class="cover">Cover</div>') +
      '<h3>' + s.title + '</h3>' +
      '<p>' + s.blurb + '</p>' +
      '<span class="st">' + s.status + '</span>' +
    '</button>'
  ).join("\n    ") +
  '\n    <div class="ser" aria-disabled="true" style="opacity:.45">' +
    '<div class="cover">More soon</div>' +
    '<h3>More strips</h3>' +
    '<p>Other series will appear here as they are drawn.</p>' +
    '<span class="st">Not started</span>' +
  '</div>';

  /* One reader per series. Episodes are one page each, so this is a simple
     prev/next flip rather than a scrolling page stack. */
  const panels = SERIES.map((s, i) =>
    '<div class="reader" data-eps="' + s.id + '"' + (i === 0 ? '' : ' hidden') + '>' +
      '<div class="rframe"><div class="rslot"></div></div>' +
      '<div class="rbar">' +
        '<button class="rnav" data-go="-1" aria-label="Previous episode">&#8249;</button>' +
        '<div class="rmeta"><b></b><span></span></div>' +
        '<button class="rnav" data-go="1" aria-label="Next episode">&#8250;</button>' +
      '</div>' +
    '</div>'
  ).join("\n  ");

  return '<div class="band"><div class="wrap">\n' +
    '  <p class="kick">Pick a comic</p>\n' +
    '  <div class="series" id="series">\n    ' + cards + '\n  </div>\n  ' +
    panels + '\n' +
    '  <p class="h2s" style="margin-top:30px">Episodes read straight on the page. Nothing to ' +
    'download and no account to make &mdash; your student just reads the next one.</p>\n' +
    '</div></div>\n\n' +
    '<scr' + 'ipt>\n' +
    'const SERIES = ' + JSON.stringify(SERIES.map(s => ({ id: s.id, title: s.title, episodes: s.episodes }))) + ';\n' +
    'const at = {};   // current episode index per series\n' +
    '\n' +
    'function render(id){\n' +
    '  const s = SERIES.find(x => x.id === id); if(!s) return;\n' +
    '  const box = document.querySelector(\'[data-eps="\' + id + \'"]\');\n' +
    '  const i = at[id] || 0, ep = s.episodes[i];\n' +
    '  const slot = box.querySelector(".rslot");\n' +
    '  slot.innerHTML = ep.img\n' +
    '    ? \'<picture><source srcset="\' + ep.img + \'.webp" type="image/webp">\' +\n' +
    '      \'<img src="\' + ep.img + \'.jpg" alt="\' + s.title + \', \' + ep.n + \'" decoding="async"></picture>\'\n' +
    '    : \'<div class="rsoon">Being drawn</div>\';\n' +
    '  box.querySelector(".rmeta b").textContent = ep.n;\n' +
    '  box.querySelector(".rmeta span").textContent =\n' +
    '    (ep.title ? ep.title + " \\u00b7 " : "") + (i+1) + " of " + s.episodes.length;\n' +
    '  box.querySelectorAll(".rnav").forEach(btn => {\n' +
    '    const next = i + Number(btn.dataset.go);\n' +
    '    btn.disabled = next < 0 || next >= s.episodes.length;\n' +
    '  });\n' +
    '  /* preload the next page so the flip is instant */\n' +
    '  const nxt = s.episodes[i+1];\n' +
    '  if (nxt && nxt.img) { const p = new Image(); p.src = nxt.img + ".webp"; }\n' +
    '}\n' +
    '\n' +
    'function step(id, dir){\n' +
    '  const s = SERIES.find(x => x.id === id);\n' +
    '  const n = (at[id] || 0) + dir;\n' +
    '  if (n < 0 || n >= s.episodes.length) return;\n' +
    '  at[id] = n; render(id);\n' +
    '}\n' +
    '\n' +
    'function current(){\n' +
    '  const open = [...document.querySelectorAll("[data-eps]")].find(p => !p.hidden);\n' +
    '  return open ? open.dataset.eps : null;\n' +
    '}\n' +
    '\n' +
    'document.getElementById("series").addEventListener("click", e => {\n' +
    '  const b = e.target.closest("button.ser"); if(!b) return;\n' +
    '  document.querySelectorAll("button.ser").forEach(x => x.setAttribute("aria-pressed", x===b));\n' +
    '  document.querySelectorAll("[data-eps]").forEach(p => p.hidden = p.dataset.eps !== b.dataset.ser);\n' +
    '  render(b.dataset.ser);\n' +
    '});\n' +
    '\n' +
    'document.addEventListener("click", e => {\n' +
    '  const btn = e.target.closest(".rnav"); if(!btn) return;\n' +
    '  step(btn.closest("[data-eps]").dataset.eps, Number(btn.dataset.go));\n' +
    '});\n' +
    '\n' +
    '/* arrow keys flip pages, which is what anyone reading a comic reaches for */\n' +
    'addEventListener("keydown", e => {\n' +
    '  const id = current(); if(!id) return;\n' +
    '  if (e.key === "ArrowLeft")  step(id, -1);\n' +
    '  if (e.key === "ArrowRight") step(id,  1);\n' +
    '});\n' +
    '\n' +
    '/* swipe on touch */\n' +
    'document.querySelectorAll(".rframe").forEach(f => {\n' +
    '  let x0 = null;\n' +
    '  f.addEventListener("touchstart", e => { x0 = e.changedTouches[0].clientX; }, {passive:true});\n' +
    '  f.addEventListener("touchend", e => {\n' +
    '    if (x0 === null) return;\n' +
    '    const dx = e.changedTouches[0].clientX - x0; x0 = null;\n' +
    '    if (Math.abs(dx) < 45) return;\n' +
    '    step(f.closest("[data-eps]").dataset.eps, dx < 0 ? 1 : -1);\n' +
    '  }, {passive:true});\n' +
    '});\n' +
    '\n' +
    'SERIES.forEach(s => render(s.id));\n' +
    '</scr' + 'ipt>';
};

/* ── THE PRIVACY POLICY ────────────────────────────────────────────────────
   🚨 PAUL'S TEXT, WORD FOR WORD, 2026-09-02. Same rule as /terms/: do not
   rewrite, tighten or "improve" it. A privacy policy is a set of promises
   about real data belonging to real families; changing a word changes a
   promise. Edits come from Paul or a lawyer.

   WHY THIS PAGE EXISTS. /for-parents/ advertises that placement exam results
   "land in your inbox". That is personal data, collected from families, about
   children. The Terms were solid without it but only half a pair - a site
   that promises to email you and never says what it does with your address
   has a real gap, not a theoretical one.

   ⚠️ COPPA IS ADDRESSED DIRECTLY because the data concerns under-13s. That is
   the same reason ROADMAP item 23 says accounts must be parent-owned from day
   one: Kolten alone is nothing, strangers' children are a legal surface.

   ⚠️ THIS PAGE DESCRIBES THE SITE AS IT IS TODAY. No accounts, no payments,
   no newsletter, nothing sold. Every one of those becomes false the moment
   the backend in ROADMAP 23-25 ships. Re-read this page BEFORE launching
   accounts or checkout, not after.

   ⚠️ LAST UPDATED SITS AT THE FOOT, matching /terms/. Paul, 2026-09-02: "yes
   keep my bottom placement". His text said the date is at the top of this
   page; changed to on this page - the smallest edit that keeps it true - and
   flagged rather than silently reworded. Same call as on /terms/.

   ⚠️ "SCORES AND PROGRESS ARE SAVED ON YOUR DEVICE" IS MINE, NOT PAUL'S, added
   2026-09-02 with his approval after he asked "do we need something for our
   games". It is the one section on this page not lifted from his text, so it
   is the one to re-check if the wording ever feels off. /terms/ already named
   games twice; this page had not mentioned them once, while the site quietly
   stored things in the browser. A leaderboard with no explanation reads like a
   database to a parent.

   🚨 IT IS A FACTUAL CLAIM AND IT WAS CHECKED, not assumed. No game page makes
   a network call - no fetch, no XHR, no remote script - so "not sent to
   NexStudents" is literally true today. Everything below is localStorage:
     ns:speedrunmath:best   ns:states:leaderboard   ns:prog:*   ns:done:*
     ns:mode   ns:repeat   ns:ann   nexstudents.placement.readingB
   ⚠️ THE DAY A GAME POSTS A SCORE ANYWHERE, THIS SECTION BECOMES FALSE. A
   shared leaderboard is exactly the kind of thing that gets built without
   thinking of this page. Re-read it before any backend touches a game. */
module.exports = { comicsPage, SERIES };
