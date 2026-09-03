/* Builds every inner page for NexStudents from one shell, so the nav and the
   slide-out drawer are identical on every page and there is exactly one place
   to change them. Guarded: refuses to write if the shared stylesheet is gone. */
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2];
if (!ROOT) { console.error("usage: node build-pages.js <site root>"); process.exit(1); }
if (!fs.existsSync(path.join(ROOT, "assets/ns.css"))) {
  console.error("FAIL: assets/ns.css missing - pages would render unstyled");
  process.exit(1);
}

/* Cache buster: changes whenever the stylesheet changes, and only then. */
const CSS_V = require("crypto")
  .createHash("sha1")
  .update(fs.readFileSync(path.join(ROOT, "assets/ns.css")))
  .digest("hex")
  .slice(0, 8);

/* The nav moved to tools/nav.js so the WORKSHEET generator can use the same
   one. It lived here under a comment promising "ONE nav definition", which was
   only ever true of the pages this file builds - worksheet pages had no nav at
   all, and a parent landing on one from a search could not reach the site. */
const { NAV, SUBJECTS, LIVE_GRADES, ALL_GRADES, tabs, drawerLinks, navMarkup, navScript, modeBoot, faviconTags,
        footerMarkup } = require("./nav.js");

/* The live origin. Canonicals and the sitemap are absolute URLs by spec. */
const SITE = "https://nexstudents.org";

function shell(o) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- DO NOT REMOVE: Google Search Console verification. Google re-checks
     periodically and the property silently drops if this disappears. -->
<meta name="google-site-verification" content="bsZnURtv4LFARU3XuxGED8inYJB45arSOPHbTJSqgIQ">
<link rel="canonical" href="${SITE}/${o.dir}/">${o.noindex ? `
<!-- An empty shelf for a year with nothing in it. Reachable, but not offered
     to search until it holds something worth ranking. Drops off by itself the
     moment the grade goes live. -->
<meta name="robots" content="noindex,follow">` : ""}
<title>${o.title}</title>
<meta name="description" content="${o.desc}">
<meta name="theme-color" content="#0a0b0d">
${faviconTags()}
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
${modeBoot()}${o.head || ""}
</head>
<body>

${navMarkup(o.active)}

<div class="wrap phead ${o.pclass || ""}">
  ${o.crumb ? '<p class="crumb">' + o.crumb + '</p>' : ""}
  <h1>${o.h1}</h1>
  <p>${o.lead}</p>
  ${o.count ? '<p class="shelfcount">' + o.count + "</p>" : ""}
</div>

${o.body}

${footerMarkup()}

${navScript()}${o.script || ""}
</body>
</html>
`;
}

/* Comics: a SERIES SELECTOR, because there will be several strips. Adding one
   is a single entry in SERIES below - the picker and the episode panels both
   build from it. Only real series are listed; inventing titles for comics that
   do not exist would put fake products on the site. */
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
const privacyBody = () => `<div class="band"><div class="wrap prose policy">

  <p>NexStudents is built for families and educators, so we believe privacy should be simple and easy to understand.</p>
  <p>We do not require student accounts. We do not currently process payments. We do not sell personal information.</p>
  <p>When we need information to provide a feature, we try to collect only what we actually need.</p>

  <h2 class="mid">Information We Collect</h2>
  <p>You do not need to create an account to use NexStudents or access our educational resources.</p>
  <p>For certain features, such as our placement exams, we may ask for a parent or guardian&rsquo;s email address so that we can send the student&rsquo;s results to them.</p>
  <p>A placement exam may also create information such as the student&rsquo;s answers, score, placement result, or other information necessary to evaluate the exam.</p>
  <p>We use this information to operate the placement exam, calculate the results, and deliver those results to the parent or guardian.</p>

  <h2 class="mid">Why We Ask for a Parent&rsquo;s Email Address</h2>
  <p>The email address provided for a placement exam is used to send the student&rsquo;s results to the parent or guardian.</p>
  <p>Providing an email address for this purpose does not automatically subscribe you to a newsletter or marketing list.</p>
  <p>We do not sell or rent that email address.</p>

  <h2 class="mid">Children&rsquo;s Privacy</h2>
  <p>NexStudents is an educational website, and we know that many of the people using our resources are children.</p>
  <p>Our website is designed so that children do not need to create personal accounts to use our educational materials.</p>
  <p>When an email address is requested for a placement exam, the parent or guardian should provide their own email address rather than the child&rsquo;s.</p>
  <p>We do not knowingly ask children under 13 to provide their own email address or other personal contact information through our placement exams.</p>
  <p>If we learn that personal information was collected directly from a child under 13 in a situation where parental consent was required under the Children&rsquo;s Online Privacy Protection Act, or COPPA, we will take appropriate steps to remove that information.</p>
  <p>If you are a parent or guardian and believe your child has provided personal information to NexStudents, please <a href="/contact/">contact us</a>. We will work with you to review and, when appropriate, delete that information.</p>

  <h2 class="mid">How We Use Information</h2>
  <p>Information collected through a placement exam may be used to:</p>
  <ul class="gets">
    <li>Process and score the exam.</li>
    <li>Generate the student&rsquo;s placement results.</li>
    <li>Send those results to the parent or guardian.</li>
    <li>Diagnose technical problems or correct errors with the exam.</li>
    <li>Protect NexStudents from spam, abuse, fraud, or misuse.</li>
  </ul>
  <p>We do not use a child&rsquo;s placement exam results to build an advertising profile.</p>

  <h2 class="mid">We Do Not Sell Personal Information</h2>
  <p>NexStudents does not sell personal information.</p>
  <p>We also do not rent parent email addresses or student placement information to advertisers or data brokers.</p>

  <h2 class="mid">Services That Help Us Run NexStudents</h2>
  <p>Like most websites, NexStudents relies on other services to keep the site running. These may include website hosting, email delivery, security, and other technical services.</p>
  <p>Those providers may process limited information when necessary to provide their services to us.</p>
  <p>We do not authorize these providers to use placement exam information for their own advertising purposes.</p>

  <h2 class="mid">Basic Website Information</h2>
  <p>When someone visits a website, some technical information may be received automatically by the website or the services that help operate it.</p>
  <p>Depending on the technology being used, this may include an IP address, browser type, device type, pages requested, and basic security or diagnostic information.</p>
  <p>This information may be used to keep NexStudents working properly, diagnose problems, understand basic website performance, and protect the site from abuse.</p>
  <p>We do not use a student&rsquo;s placement exam results for targeted advertising.</p>

  <h2 class="mid">Scores and Progress Are Saved on Your Device</h2>
  <p>Some parts of NexStudents, such as our games and lessons, save information in your web browser so that a student&rsquo;s scores, best times, and lesson progress are still there the next time they visit. Your display settings, like light or dark mode, are saved the same way.</p>
  <p>This information stays in the browser on the device being used. It is not sent to NexStudents, it is not attached to a name or an account, and we cannot see it.</p>
  <p>Because it is stored in the browser, it is not shared between devices. A score set on a tablet will not appear on a computer. Clearing your browser&rsquo;s data or using private browsing will remove it.</p>

  <h2 class="mid">How Long We Keep Information</h2>
  <p>We do not want to keep personal information simply because we can.</p>
  <p>We keep personal information only for as long as reasonably necessary to provide the feature for which it was collected, deliver placement results, resolve technical problems, maintain security, or meet applicable legal obligations.</p>
  <p>When we no longer reasonably need the information, we may delete or anonymize it.</p>
  <p>Some information may remain temporarily in routine system backups until those backups are replaced or deleted.</p>

  <h2 class="mid">Requesting Deletion</h2>
  <p>Parents and guardians may contact us to request deletion of personal information associated with their child or a placement exam.</p>
  <p>We may ask for enough information to reasonably verify the request and locate the correct records.</p>
  <p>Once we can identify the information, we will delete the information we control unless we are required or permitted by law to retain it.</p>

  <h2 class="mid">Third-Party Links</h2>
  <p>NexStudents may link to educational websites, videos, resources, or services operated by other organizations.</p>
  <p>Once you leave NexStudents, those websites have their own privacy practices. This Privacy Policy applies to NexStudents and does not control how another website handles information.</p>
  <p>Parents and educators should review outside services before allowing children to provide personal information to them.</p>

  <h2 class="mid">Changes to This Privacy Policy</h2>
  <p>As NexStudents grows, we may add new resources or features. If those features change the information we collect or how we use it, we will update this Privacy Policy.</p>
  <p>The &ldquo;Last updated&rdquo; date on this page will change when the policy is updated.</p>
  <p>If we make a significant change involving children&rsquo;s personal information, we will also take any additional steps required by applicable law.</p>

  <h2 class="mid">Questions or Privacy Requests</h2>
  <p>If you have a question about this Privacy Policy, believe your child provided personal information to NexStudents, or would like information deleted, please <a href="/contact/">contact us</a>.</p>

  <p class="muted" style="margin-top:34px">Last updated: September 2, 2026</p>

  <p class="muted">NexStudents<br>An educational resource by NexEdge Studios<br>
  <a href="mailto:contact@nexedgestudios.com">contact@nexedgestudios.com</a><br>
  &copy; 2026 NexEdge Studios. All rights reserved.</p>

</div></div>`;

/* ── THE TERMS PAGE BODY ───────────────────────────────────────────────────
   Written in plain language on purpose. A parent deciding whether they may
   print thirty copies for a co-op should get that answer in one read, not
   from a wall of "hereinafter". The permissions come FIRST for the same
   reason - most people arriving here want a yes, and burying it under
   restrictions makes a generous licence feel mean.

   ⚠️ Every clause must stay true of the site as it stands. No refunds
   section until paid downloads exist; no account clause until accounts do. */
/* ── THE TERMS PAGE BODY ───────────────────────────────────────────────────
   🚨 THIS TEXT IS PAUL'S, WORD FOR WORD. He wrote it with ChatGPT on
   2026-09-02 after reading my draft: "chat gpt just knows how to write better
   than you regarding the terms and services. I'm sending it over next and I
   want you to use it."

   ⚠️ DO NOT REWRITE, TIGHTEN OR "IMPROVE" THIS. It is a licence, not copy.
   Changing a word changes what people are permitted to do. Edits come from
   Paul, or from a lawyer, and nowhere else. My earlier draft was replaced
   wholesale and is in git history if it is ever wanted.

   It is better than what I wrote in three specific ways worth remembering:
     - it names NexEdge Studios AND NexStudents as owner, matching the real
       org structure, where mine named only the site
     - it handles future paid products with a conditional clause instead of
       omitting the subject, so the page does not go stale the day checkout
       ships - which was the flaw I had flagged in my own version
     - it separates "free" from "copyright-free", which is the distinction
       people actually get wrong

   Delivered a line at a time over ~40 messages because a paste kept breaking;
   one sentence arrived scrambled and was re-sent rather than guessed at. */
/* ── THE TERMS PAGE BODY ───────────────────────────────────────────────────
   🚨 THIS TEXT IS PAUL'S, WORD FOR WORD. Second version, 2026-09-02, after he
   had ChatGPT extend it to cover the gaps I flagged. Do not rewrite, tighten
   or "improve" it. It is a licence, not copy: changing a word changes what
   people are permitted to do. Edits come from Paul or a lawyer.

   What this version adds over the first, all of it worth having:
     - NexStudents Is a Learning Resource: not a school, not accredited, no
       grades, credits, transcripts or diplomas, and no guarantee of meeting
       any state's homeschool requirements. That last point is the one
       homeschool parents genuinely need, because some states require an
       accredited provider.
     - Placement Exams: results are a starting point, not an evaluation.
     - Limitation of Liability, which pairs with No Warranty. Having one
       without the other was the gap.
     - Governing Law: Missouri.
     - A short Privacy section pointing at the full policy.

   ⚠️ LAST UPDATED SITS AT THE FOOT, by Paul's instruction on layout. His text
   said "at the top of this page"; changed to "on this page" - the smallest
   edit that keeps the sentence true - and flagged to him rather than silently
   reworded. If the date ever moves back to the top, restore the original.

   ⚠️ "Privacy Policy" is PLAIN TEXT, not a link, until /privacy/ exists.
   check-links.js fails the build on a dead root-absolute link, and a promise
   to a page that 404s is worse than no link. Link it the moment that page
   ships. */
const termsBody = () => `<div class="band"><div class="wrap prose policy">

  <p>We create educational resources to make teaching and learning easier for families, teachers, tutors, and educational groups. We want our materials to be used, printed, and enjoyed. We just ask that our work is not resold, reposted, or claimed as someone else&rsquo;s.</p>

  <h2 class="mid">The Short Version</h2>
  <p>Print them. Teach with them. Use them again.</p>
  <p>You may use NexStudents materials with your own students as often as you like.</p>
  <p>Please do not sell our materials, repost our files somewhere else, remove our branding, or claim our work as your own.</p>

  <h2 class="mid">What You May Do</h2>
  <p>You may use NexStudents materials with students you personally teach or supervise, including:</p>
  <ul class="gets">
    <li>Your own children</li>
    <li>Students in your classroom</li>
    <li>Homeschool students</li>
    <li>Homeschool co-op students</li>
    <li>Tutoring students</li>
    <li>Students in a church or educational group you teach</li>
  </ul>
  <p>You may print as many copies as reasonably needed for those students. There is no per-copy limit and no expiration date on this permission.</p>
  <p>You may save downloaded files to your own computer, tablet, cloud storage, or other personal storage so that you can use and print them again later.</p>
  <p>You may link to pages on NexStudents from your website, blog, lesson plan, newsletter, social media page, school website, or other educational resource. Links to NexStudents are welcome and do not require permission.</p>
  <p>You may also mention NexStudents by name and quote a short portion of our material when reviewing, discussing, or recommending one of our resources.</p>

  <h2 class="mid">What You May Not Do</h2>
  <p>Unless you receive written permission from NexStudents, you may not:</p>
  <ul class="gets">
    <li>Sell NexStudents worksheets, lessons, artwork, downloads, or other materials.</li>
    <li>Include NexStudents materials inside another product, bundle, course, subscription, or download that is sold or offered for a fee.</li>
    <li>Upload or re-host NexStudents files on another website, file-sharing service, course platform, marketplace, shared resource library, or similar service. Please link people to NexStudents instead.</li>
    <li>Present NexStudents materials as your own work.</li>
    <li>Remove, cover, alter, or intentionally obscure NexStudents branding, copyright notices, watermarks, or attribution included on our materials.</li>
    <li>Redistribute our files in bulk to people who are not your own students.</li>
    <li>Create another website, resource library, collection, or service that substantially republishes NexStudents materials.</li>
    <li>Scrape, crawl, systematically download, or otherwise collect substantial portions of NexStudents content for the purpose of creating a competing resource or database.</li>
    <li>Use NexStudents materials to train, fine-tune, or develop an artificial intelligence or machine-learning model without our written permission.</li>
  </ul>
  <p>In simple terms: use our resources to teach, not to become another source for distributing them.</p>
  <p>If you are unsure whether a particular use is allowed, contact us. We would rather answer your question than have you avoid using a resource that could help your students.</p>

  <h2 class="mid">Who Owns the Materials?</h2>
  <p>Unless otherwise stated on a particular page or resource, the original worksheets, lessons, written content, illustrations, graphics, designs, and other original materials published by NexStudents are owned by NexEdge Studios and/or NexStudents and are protected by applicable copyright laws.</p>
  <p>Some educational resources may incorporate or build upon public-domain works, openly licensed materials, quotations, historical documents, or other third-party content. When appropriate, those sources or licenses will be identified.</p>
  <p>Facts themselves are not owned by NexStudents. Historical events, scientific principles, mathematical concepts, and other factual information may be taught and discussed by anyone.</p>
  <p>Our copyright applies to our original expression of those ideas, including our writing, explanations, illustrations, worksheets, graphics, organization, and design.</p>

  <h2 class="mid">Free Educational Materials</h2>
  <p>Many NexStudents resources are provided free of charge because we want families and educators to have access to useful educational materials.</p>
  <p>Free does not mean copyright-free or public domain.</p>
  <p>Unless a resource specifically states otherwise, a free NexStudents resource remains subject to these Terms of Use.</p>
  <p>If NexStudents introduces paid resources, memberships, courses, or other paid services in the future, those products will be clearly identified along with their applicable price and any additional terms.</p>
  <p>Resources already identified as free will not suddenly require payment simply because additional paid resources are introduced.</p>

  <h2 class="mid">NexStudents Is a Learning Resource</h2>
  <p>NexStudents exists to support homeschool families, parents, teachers, tutors, and other educators by providing educational materials they can use alongside the way they already teach.</p>
  <p>NexStudents is not a school, an accredited educational institution, or an accredited curriculum provider. Using NexStudents does not enroll a student in a school or educational program.</p>
  <p>We do not issue official grades, academic credits, transcripts, or diplomas.</p>
  <p>Our lessons, worksheets, placement exams, games, and other resources are tools to help parents and educators teach. They are not intended to take the place of the parent or educator directing a student&rsquo;s education.</p>
  <p>Homeschool laws and educational requirements are different from state to state and can change over time. NexStudents cannot guarantee that using our resources will satisfy the homeschool requirements of your state.</p>
  <p>Parents and educators are responsible for understanding and following the homeschool or educational requirements that apply where they live.</p>
  <p>Our role is simple: we provide resources to help you teach. You decide how those resources fit into your student&rsquo;s education.</p>

  <h2 class="mid">Placement Exams</h2>
  <p>NexStudents may provide placement exams or similar tools to help parents and educators get a better idea of where a student may be academically.</p>
  <p>Placement results are intended as a helpful starting point. They are not an official academic evaluation, diagnosis, grade, transcript, or guarantee that a student should be placed at a particular grade level.</p>
  <p>Every student learns differently. Parents and educators should use placement results together with their own knowledge of the student when deciding what material is appropriate.</p>

  <h2 class="mid">Educational Use</h2>
  <p>NexStudents provides educational materials and resources. We work to make our content useful and accurate, but every student, classroom, homeschool, and educational situation is different.</p>
  <p>Parents, teachers, tutors, and other educators remain responsible for deciding whether a particular resource is appropriate for their students and how it should be used.</p>

  <h2 class="mid">Errors and Corrections</h2>
  <p>We review our materials and try to correct errors when we find them. However, educational materials may occasionally contain mistakes, outdated information, typographical errors, or other inaccuracies.</p>
  <p>If you find something that appears incorrect, please contact us. We appreciate corrections and want our materials to be as accurate and useful as possible.</p>

  <h2 class="mid">No Warranty</h2>
  <p>NexStudents materials and this website are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;</p>
  <p>We do our best to create useful, accurate educational resources, but we cannot promise that every lesson, worksheet, answer key, placement exam, game, or other resource will always be completely free of errors or appropriate for every student.</p>
  <p>We also cannot guarantee that the website or every feature will always be available without interruption.</p>
  <p>Parents and educators are responsible for reviewing materials and using their own judgment before using them with their students.</p>

  <h2 class="mid">Limitation of Liability</h2>
  <p>NexStudents is provided as an educational resource for families and educators.</p>
  <p>To the fullest extent permitted by law, NexStudents and NexEdge Studios will not be responsible for indirect, incidental, special, consequential, or similar damages resulting from the use of, or inability to use, NexStudents, its website, or its materials.</p>
  <p>This includes decisions made based on our lessons, worksheets, answer keys, placement exams, educational information, links, or other resources.</p>
  <p>Parents and educators remain responsible for deciding how NexStudents materials should be used and whether they are appropriate for a particular student.</p>
  <p>Nothing in these Terms of Use is intended to exclude or limit responsibility where doing so would not be permitted by law.</p>

  <h2 class="mid">Website Availability</h2>
  <p>We may update, revise, replace, move, or discontinue pages, features, or resources on NexStudents from time to time.</p>
  <p>We cannot guarantee that every page, download, feature, or resource will remain available indefinitely.</p>
  <p>If there is something you use regularly, you are welcome to save a permitted copy for your own educational use as described in these terms.</p>

  <h2 class="mid">Third-Party Links and Resources</h2>
  <p>NexStudents may occasionally link to websites, videos, books, services, or resources operated by other organizations.</p>
  <p>Those websites and resources are controlled by their respective owners. A link from NexStudents does not necessarily mean that we endorse everything available on that website.</p>
  <p>We are not responsible for the content, availability, privacy practices, or policies of third-party websites.</p>

  <h2 class="mid">Acceptable Use of the Website</h2>
  <p>Please do not use NexStudents in a way that interferes with the website, attempts to gain unauthorized access to its systems, distributes malicious software, or prevents other people from accessing our resources.</p>
  <p>Automated activity that places an unreasonable burden on the website or systematically collects our content may be restricted or blocked.</p>

  <h2 class="mid">Privacy</h2>
  <p>We believe families should be able to understand what happens to their information without having to work through pages of legal language.</p>
  <p>NexStudents does not require students to create accounts, does not currently process payments, and does not sell personal information.</p>
  <p>Some features, such as placement exams, may ask for a parent or guardian&rsquo;s email address so that we can deliver a student&rsquo;s results.</p>
  <p>More information about what we collect, why we collect it, children&rsquo;s privacy, and how parents can request deletion is available in our <a href="/privacy/">Privacy Policy</a>.</p>

  <h2 class="mid">Governing Law</h2>
  <p>NexStudents is operated by NexEdge Studios in Missouri, United States.</p>
  <p>These Terms of Use and any dispute relating to NexStudents or the use of our materials are governed by the laws of the State of Missouri, without regard to conflict-of-law principles.</p>
  <p>Nothing in these terms is intended to take away rights that cannot legally be limited or waived under applicable law.</p>

  <h2 class="mid">Changes to These Terms</h2>
  <p>NexStudents will continue to grow, and we may update these Terms of Use as our resources and features change.</p>
  <p>When we make changes, we will update the &ldquo;Last updated&rdquo; date on this page.</p>
  <p>Your continued use of NexStudents after updated terms are posted means that your future use of the website and materials is subject to the updated terms, to the extent permitted by applicable law.</p>

  <h2 class="mid">Questions, Corrections, and Special Permission</h2>
  <p>If you would like to use NexStudents material in a way that is not covered by these terms, please <a href="/contact/">contact us</a>.</p>
  <p>We are often happy to grant additional permission for educational uses. Permission outside these terms must be requested and granted before that use occurs.</p>
  <p>And if you find a mistake in one of our lessons, worksheets, answer keys, or other resources, please tell us. We want to know so we can fix it.</p>

  <p class="muted" style="margin-top:34px">Last updated: September 2, 2026</p>

  <p class="muted">NexStudents<br>An educational resource by NexEdge Studios<br>
  <a href="mailto:contact@nexedgestudios.com">contact@nexedgestudios.com</a><br>
  &copy; 2026 NexEdge Studios. All rights reserved.</p>

</div></div>`;

/* ── THE REFUND POLICY ─────────────────────────────────────────────────────
   🚨 PAUL'S TEXT, WORD FOR WORD, 2026-09-02. Third of the set after /terms/
   and /privacy/, same rule as both: do not rewrite, tighten or "improve" it.
   A refund policy is a promise about someone's money. Edits come from Paul.

   ⚠️ HIS TEXT ARRIVED AS ONE SENTENCE PER LINE. Paul: "make it more paragraph
   and the same theme as the other pages we just made." Related sentences are
   grouped into paragraphs; not one word changed, nothing reordered, nothing
   dropped. Structure only - the same call as on the other two pages.

   ⚠️ TWO SECTIONS ARE NOT IN HIS PASTED TEXT. He asked for them by message,
   in his own words, and both close a real gap:
     - DIGITAL DOWNLOADS, NOT PHYSICAL ITEMS. Paul: "we dont plan as of now to
       ship any real phyiscial items. only digital downloads and affliate
       sale." Without it the policy is silent on shipping, returns and damaged
       goods, which is the first thing a reader looks for in a refund policy.
     - AFFILIATE LINKS. Paul: "our page will have affliate links." This is the
       one section that is TRUE TODAY - /resources/ already carries them, and
       tools/resources.js requires an explicit affiliate flag on every link.
       An affiliate purchase is money paid to another retailer, so we cannot
       refund it and must not imply we can. Saying so is the honest answer.

   ⚠️ NOTHING IS SOLD ON NEXSTUDENTS YET. Everything else on this page is
   forward-looking, exactly like the paid-downloads note on /terms/. That is
   fine for a published policy, but re-read this page BEFORE checkout ships
   (ROADMAP 23-25), not after.

   ⚠️ LAST UPDATED SITS AT THE FOOT, matching /terms/ and /privacy/. His text
   said the date is "at the top of this page"; changed to "on this page" - the
   smallest edit that keeps the sentence true - and flagged rather than
   silently reworded. Same call as on the other two.

   ⚠️ THE .policy CLASS IS WHAT NUMBERS THE SECTIONS. It belongs to the legal
   pages only. /contact/ shares .prose and briefly grew a "SECTION 2" because
   the counter was scoped there instead. Style the thing you mean. */
const refundBody = () => `<div class="band"><div class="wrap prose policy">

  <p>If something does not work out, we will do our best to make it right.</p>

  <h2 class="mid">30-Day Refund Window</h2>
  <p>Unless a product or service says otherwise, you may request a refund within 30 days of the original purchase date. Refund requests made after 30 days may not be eligible for a refund.</p>
  <p>To request a refund, contact us at <a href="mailto:contact@nexedgestudios.com">contact@nexedgestudios.com</a>. Please include enough information for us to identify the purchase, such as the email address used at checkout and the name of the item purchased.</p>

  <h2 class="mid">Digital Downloads, Not Physical Items</h2>
  <p>NexStudents does not sell or ship physical products. Our paid resources are digital downloads, so there is nothing to mail back and no shipping charges, return labels, or restocking fees involved in a refund.</p>
  <p>If you were expecting a printed or physical item, please contact us before purchasing so we can tell you exactly what you would be buying.</p>

  <h2 class="mid">Digital Products</h2>
  <p>Because many NexStudents products may be delivered digitally, we ask that refund requests be made in good faith. If you purchased the wrong item, were charged incorrectly, received a file that does not work, or believe there is a problem with your purchase, please contact us. We would rather help fix the problem than leave you with something you cannot use.</p>
  <p>We may deny a refund request if there is evidence of fraud, abuse, repeated refund activity, or an attempt to receive and keep paid materials without paying for them.</p>

  <h2 class="mid">Affiliate Links</h2>
  <p>Some pages on NexStudents, such as our <a href="/resources/">Resources</a> page, include affiliate links to books, supplies, and other materials sold by outside retailers. If you buy something through one of those links, you are purchasing from that retailer and not from NexStudents. We may earn a small commission at no additional cost to you.</p>
  <p>Because we never receive that payment, we cannot refund it. Returns, refunds, shipping, and order problems for those purchases are handled by the retailer under their own policies, so please contact them directly.</p>
  <p>If an affiliate link on our site is broken, points to the wrong item, or sends you somewhere unexpected, please tell us. That part is ours to fix.</p>

  <h2 class="mid">Duplicate Purchases</h2>
  <p>If you accidentally purchase the same item more than once, contact us. Once we confirm the duplicate charge, we will normally refund the duplicate purchase.</p>

  <h2 class="mid">Technical Problems</h2>
  <p>If a digital file is missing, corrupted, will not download, or otherwise does not work as intended, please contact us first. We may be able to replace the file or correct the problem immediately.</p>
  <p>If we cannot reasonably provide the product you purchased, we may issue a refund.</p>

  <h2 class="mid">Donations</h2>
  <p>Donations made to support NexStudents are voluntary and are not purchases of a product or service. Because of this, donations are generally non-refundable.</p>
  <p>If a donation was made accidentally, duplicated, or submitted in the wrong amount, please contact us as soon as possible. We will review the situation and may correct or refund the payment when appropriate.</p>

  <h2 class="mid">Subscriptions or Memberships</h2>
  <p>If NexStudents offers subscriptions or memberships in the future, cancellation will stop future renewals. Unless otherwise stated at the time of purchase, canceling a subscription does not automatically refund previous charges.</p>
  <p>A recent subscription charge may still be eligible for a refund if the request is made within our 30-day refund window.</p>

  <h2 class="mid">Refund Processing</h2>
  <p>Approved refunds will be returned to the original payment method whenever possible. After we issue a refund, your bank, card issuer, or payment provider may take additional time to show the credit on your account. NexStudents does not control those processing times.</p>

  <h2 class="mid">Discounts, Coupons, and Promotional Purchases</h2>
  <p>Refunds are based on the amount actually paid. If a discount or coupon was used, the refund will not exceed the amount charged for that purchase.</p>
  <p>Purchases made as part of a bundle may be refunded according to the amount paid for the bundle rather than the individual retail price of each item.</p>

  <h2 class="mid">Chargebacks and Payment Disputes</h2>
  <p>If you believe there is a problem with a purchase, please contact us before filing a chargeback or payment dispute. We are happy to review billing mistakes, duplicate charges, missing files, and other purchase problems.</p>
  <p>We reserve the right to restrict future purchases or access to paid services in cases involving fraudulent chargebacks, payment abuse, or repeated misuse of our refund policy.</p>

  <h2 class="mid">Changes to This Policy</h2>
  <p>We may update this Refund Policy as NexStudents adds new products or services. When we make changes, the &ldquo;Last updated&rdquo; date on this page will be updated.</p>

  <h2 class="mid">Questions About a Purchase</h2>
  <p>If you have a question about a purchase, refund, duplicate charge, or donation, please <a href="/contact/">contact us</a>.</p>

  <p class="muted" style="margin-top:34px">Last updated: September 2, 2026</p>

  <p class="muted">NexStudents<br>An educational resource by NexEdge Studios<br>
  <a href="mailto:contact@nexedgestudios.com">contact@nexedgestudios.com</a><br>
  &copy; 2026 NexEdge Studios. All rights reserved.</p>

</div></div>`;

/* ── THE CONTACT PAGE ──────────────────────────────────────────────────────
   🚨 THE TERMS DEPEND ON THIS PAGE WORKING. /terms/ tells people to contact
   us five times - to ask permission for a use outside the licence, and to
   report errors - and written permission is REQUIRED for anything the licence
   does not cover. Until 2026-09-02 this page said "an address will go here as
   soon as there is one worth publishing", so the mechanism the terms rely on
   did not exist. A licence that points at a dead end is not a licence.

   Address given by Paul, 2026-09-02: contact@nexedgestudios.com. It is the
   NexEdge Studios address, which matches who the terms name as owner.

   ⚠️ A PLAIN mailto FOR NOW, DELIBERATELY. A form needs a third-party
   backend on a static site, and an address that works forever beats a form
   that quietly breaks when a free tier changes. Web3Forms (250/month free) is
   the upgrade path if the address starts attracting spam; the address stays
   as the fallback either way.
   ⚠️ Paul is sending his own wording for this page. This is the honest
   minimum until it arrives, not the final copy. */
/* ── THE CONTACT PAGE ──────────────────────────────────────────────────────
   🚨 THIS TEXT IS PAUL'S, WORD FOR WORD, same as /terms/. He wrote the
   headings and all five items on 2026-09-02 after rejecting mine: "I also
   don't like that wording 'what we would like to hear about' it sounds
   different." His version is warmer and the question-led items read better
   than my flat noun phrases. Do not rewrite it.

   🚨 THE TERMS DEPEND ON THIS PAGE WORKING. /terms/ tells people to contact
   us five times, and written permission is REQUIRED for any use the licence
   does not cover. Until 2026-09-02 this page said an address would appear
   "as soon as there is one worth publishing", so the mechanism the terms rely
   on did not exist. A licence that points at a dead end is not a licence.

   ⚠️ A PLAIN mailto, DELIBERATELY. A form on a static site needs a
   third-party backend, and an address that works forever beats a form that
   breaks when a free tier changes. Web3Forms (250/month free, checked
   2026-09-02) is the upgrade path if spam ever forces it; the address stays
   as the fallback either way.

   ⚠️ THE HEADING BOX MUST BE CENTRED, NOT JUST ITS TEXT. .prose h2 carries a
   max-width for readable line length, so text-align:center alone centres the
   words inside a narrow left-aligned box - 200px off, and it looks fine in a
   screenshot. See .contactfoot in ns.css. */
const contactBody = () => `<div class="band"><div class="wrap prose">

  <h2 class="mid">We&rsquo;d Love to Hear From You</h2>
  <p>Whether you found something that needs fixing, have a question, or just have an idea for NexStudents, feel free to reach out.</p>

  <ul class="gets asklist">
    <li><b>Found a mistake?</b> If you spot a wrong answer, confusing wording, or something that doesn&rsquo;t look right in a worksheet or lesson, please tell us. We want to fix it.</li>
    <li><b>Something not working?</b> Broken link, missing download, page not loading, or something not printing correctly? Let us know.</li>
    <li><b>Need permission?</b> If you would like to use our materials in a way that isn&rsquo;t covered by our <a href="/terms/">Terms of Use</a>, just ask. We&rsquo;re often happy to say yes.</li>
    <li><b>Have an idea?</b> Is there a lesson, worksheet, subject, activity, or feature you&rsquo;d like to see on NexStudents? We&rsquo;d love to hear your suggestion.</li>
    <li><b>Just want to say hello?</b> That&rsquo;s okay too. We enjoy hearing from the families and educators using NexStudents.</li>
  </ul>

  <div class="contactfoot">
    <h2>Contact Us</h2>
    <a class="btn" href="mailto:contact@nexedgestudios.com">contact@nexedgestudios.com</a>
  </div>

</div></div>`;

/* Honest empty state - better than fake cards implying content exists. */
const empty = (line) => `<div class="band"><div class="wrap">
  <div class="tile" style="min-height:230px;align-items:center;justify-content:center;text-align:center">
    <div>
      <h4 style="font-size:1.35rem">Nothing here yet</h4>
      <p style="max-width:46ch;margin-top:8px">${line}</p>
    </div>
  </div>
</div></div>`;

/* ── THE HOME RAIL ────────────────────────────────────────────────────────
   Free first, then paid, so the strongest thing the site has leads. Only ever
   what exists - see tools/add-home-rail.js for what this replaced. */
const SUBJ_TOKEN = { English: "english", History: "history", Maths: "maths", Science: "science" };

const railCard = (x) => {
  const free = (x.price || "$0") === "$0";
  return '<a class="res" href="' + x.href + '" data-kind="' + (free ? "free" : "paid") +
    '" data-subject="' + (SUBJ_TOKEN[x.subject] || "") + '">' +
    '<div class="thumb">' +
    '<span class="badge ' + (free ? "free" : "paid") + '">' + (free ? "Free" : "Packet") + "</span>" +
    (x.thumb ? '<img src="' + x.thumb + '" alt="" loading="lazy" decoding="async">' : "<u>Preview</u>") +
    "</div>" +
    '<div class="body"><h4>' + x.title + "</h4>" +
    "<p>" + x.blurb + "</p>" +
    '<div class="meta"><span>' + x.meta + "</span><b>" +
    (free ? "Free" : x.price) + "</b></div></div></a>";
};

/* free first, then paid - the order IS the message */
const railCards = () => {
  const items = WORKSHEETS.slice().sort((a, b) => {
    const fa = (a.price || "$0") === "$0", fb = (b.price || "$0") === "$0";
    return fa === fb ? 0 : fa ? -1 : 1;
  });
  return items.map(railCard).join("\n    ");
};

const railFilters = () => {
  const live = [...new Set(WORKSHEETS.map(w => w.subject))];
  return ['<button aria-pressed="true" data-f="all">Everything</button>',
    '<button aria-pressed="false" data-f="free">Free</button>',
    '<button aria-pressed="false" data-f="paid">Packets</button>']
    .concat(SUBJECTS.filter(s => live.includes(s.name))
      .map(s => '<button aria-pressed="false" data-f="' + SUBJ_TOKEN[s.name] + '">' + s.name + "</button>"))
    .join("\n    ");
};

/* The grade picker, as its own page. Each grade needs a real URL eventually -
   /grade-7/ is exactly the sort of page that can rank against nexstudent.org. */
/* Which grades are live, derived from the two registries rather than listed by
   hand. Used by /grades/ and by the home page picker, so the two can never
   disagree the way they did before 2026-08-26 (home said 7 only). */
/* ⚠️ Sorted against the real grade order, NOT numerically. "K" - 3 is NaN, and
   a comparator that returns NaN leaves the array in whatever order it happened
   to be in - which would then disagree with LIVE_GRADES and fail the build for
   no visible reason. */
const GRADE_ORDER = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];
const liveGrades = () => [...new Set(
  LESSONS.flatMap(l => l.grades).concat(WORKSHEETS.flatMap(w => w.grades))
)].map(String).sort((a, b) => GRADE_ORDER.indexOf(a) - GRADE_ORDER.indexOf(b));


/* A grade's URL is its label lowercased: "K" lives at /grade-k/. Build a
   grade href ANY other way and Kindergarten 404s - see tools/fix-grade-slug.js. */
const gslug = (g) => String(g).toLowerCase();

/* Every grade tile is a link — home page, /grades/ and the nav all agree.
   Paul, 2026-08-29: "i want this the entire site."

   🚨 NO "SOON" BADGE, AND NO DIMMING. Paul, 2026-08-29: "remove the soon from
   the homepage grade icons and even perhaps the dropdown since they are
   connected." Once every tile opens a real page, a Soon label sitting under a
   half-faded tile reads as "this one is broken" — it argues with the tile's
   own behaviour. A year with depth still gets the accent fill and says Live;
   the rest are simply ordinary tiles. */
/* 🚨 EVERY GRADE READS LIVE. Paul, 2026-08-29: "1, 2, 4, 5 make it say live and
   make them white because i dont want to waste time changing them later. i know
   they dont have content but we will get to that over the weeks."

   His call, made knowing the years are still thin. The `live` argument is kept
   in the signature rather than deleted, because it is still what decides
   indexing elsewhere — this is a presentation decision, not a claim about
   content. */
const gradeCells = (live, cls) => ["K","1","2","3","4","5","6","7","8"].map(g =>
  '<a class="gr live" href="/grade-' + gslug(g) + '/"><b>' + g +
  "</b><span>Live</span></a>"
).join("\n    " + (cls || ""));

const gradeGrid = () => {
  const cells = gradeCells(liveGrades());
  return `<div class="band"><div class="wrap">
  <div class="grades">
    ${cells}
  </div>
  <p class="h2s" style="margin-top:28px">7th grade is up first because that is the year being
    taught in our own house right now. The grades either side follow, then outward. A grade goes
    live when it has enough in it to be worth your time, not before.</p>
</div></div>`;
};

/* A subject hub: Lessons on top, Worksheets under it. Both groups are real or
   honestly empty - never a fake card implying something is there.
   HISTORY_LESSONS is the list to add to as each lesson goes up. */
/* ONE registry. The subject hub and the grade page are both views of it, so a
   lesson is added in exactly one place and shows up on both. */

/* The lessons named on the booklet's contents page but not built yet. Order is
   the booklet's order, so the shelf reads as the unit does. */
const PLANNED = [
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 3",  title: "Engineering, Roads, and Military Power" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 4",  title: "Conquest, Provinces, and Daily Life" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 5",  title: "Social Class, Slavery, and Daily Life" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 6",  title: "Judea Under Rome" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 7",  title: "Jesus and the Early Church" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 8",  title: "Paul, Persecution, and the Early Church" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 9",  title: "Crisis and Reform in the Late Empire" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 10", title: "Review of Rome and Early Christianity" },
  /* 🚨 SCIENCE UNIT 1 REVIEW — THE COVER EXISTS, THE LESSON DOES NOT.
     Paul drew it 2026-09-01 and asked for the file to be parked ahead of the
     content. It is a SLOT, not a card: `.is-slot` renders no <a>, so this
     cover cannot be clicked into a page that is not there. A cover is not a
     lesson, the same way a title is not a lesson
     → [[feedback-never-assign-an-unbuilt-lesson]].
     ⚠️ WHEN THE REVIEW IS BUILT: delete this line, and add the lesson to
     lessons.js with `seq` n:5 and `thumb: true`. The thumb.jpg is already at
     the path below. Leaving this line in as well would show the review twice. */
  { kind: "lesson", subject: "Science", grade: 7, unit: "Unit 1 &middot; Lesson Review",
    title: "Unit 1 Lesson Review", thumb: "/lessons/science/unit-1-review/thumb.jpg" },
];

/* Grade 8 US history: the Colonies to Reconstruction sequence, thirty sheets
   across ten units. Three are built; these are the rest, in teaching order. */
const PLANNED_8 = [
  ["Unit 1", "Two Worlds Meet",        ["Before Columbus", "Why Europe Sailed", "Jamestown and Plymouth"]],
  ["Unit 2", "The Thirteen Colonies",  ["Life in the Colonies", "Who Governed the Colonies"]],
  ["Unit 3", "Road to Revolution",     ["Taxes and Protest", "The Intolerable Acts"]],
  ["Unit 4", "War for Independence",   ["The Declaration", "Fighting the War", "Winning Independence"]],
  ["Unit 5", "Building a Government",  ["Articles to Constitution", "How the Government Works", "The Bill of Rights"]],
  ["Unit 6", "The New Republic",       ["Washington's Precedents", "The War of 1812"]],
  ["Unit 7", "Expansion and Reform",   ["Jackson and Removal", "Manifest Destiny", "The Reformers"]],
  ["Unit 8", "A Nation Dividing",      ["Two Economies", "The Compromises", "Secession"]],
  ["Unit 9", "The Civil War",          ["Two Sides, Two Plans", "Turning Points", "The War Ends"]],
  ["Unit 10", "Reconstruction",        ["Three Amendments", "Reconstruction and Its End", "Unit Review"]],
].flatMap(([u, name, sheets]) => sheets.map(t => ({
  kind: "worksheet", subject: "History", grade: 8,
  unit: u + " &middot; " + name, title: t
})));

const ALL_PLANNED = PLANNED.concat(PLANNED_8);
/* 🚨 `sameGrade`, NOT `===`. Found 2026-09-01 and it had been broken the whole
   time: LIVE_GRADES in nav.js are STRINGS ("7") and every PLANNED entry writes
   the grade as a NUMBER (7), so `7 === "7"` was false and this function
   returned NOTHING on every grade+subject page. No "Being Built" card had ever
   appeared on one.

   It stayed invisible because the only shelf with planned items was grade-7
   History, which uses the unit pager instead and never calls this. The bug
   surfaced only when a Science slot was added.

   ⚠️ This is the SAME number-vs-string grade bug already recorded in
   CLAUDE.md - the one where only Kindergarten built and the guard meant to
   catch it used the same broken helper. `sameGrade()` was written for exactly
   this and simply never applied here. Use it everywhere a grade is compared. */
const plannedFor = (subject, grade, kind) => ALL_PLANNED.filter(x =>
  (subject == null || x.subject === subject) &&
  (grade == null || sameGrade(x.grade, grade)) &&
  (kind == null || x.kind === kind));

/* ── ONE REGISTRY, DERIVED FROM THE LESSON DATA FILES ──────────────────────
   Paul, 2026-08-29: "build a lesson page and a worksheet page you can drop in
   for each grade then build each page for that so it is ready to work" and
   "foundation is key."

   A lesson used to be registered TWICE: once in its subject's data file, which
   is what actually renders the page, and again in a hand-written array here,
   which is what put a card on the shelf. Two sources for one fact, so they
   could disagree - and the shelf card is the half a parent sees.

   Worksheets never had this problem: their cards were always derived from
   worksheets.js. Lessons now work the same way. Add a lesson to its data file
   with a `shelf` block and it appears on its subject shelf, its grade shelf,
   its grade+subject shelf and the sitemap, with no change to this file.

   Adding a whole new SUBJECT still needs its data file required below - that
   is one line, and it is the only line. */
const LESSON_SOURCES = [
  { file: "./lessons.js",           key: "LESSONS"  },  /* history, story shape  */
  { file: "./math-lessons.js",      key: "MATH"     },  /* maths, show-your-work */
  { file: "./english-lessons.js",   key: "ENGLISH"  },  /* english, rule + test  */
  { file: "./integers-lessons.js",  key: "INTEGERS" },  /* maths, rule + drill   */
];

const LESSONS = LESSON_SOURCES.flatMap(({ file, key }) => {
  const rows = require(file)[key];
  if (!Array.isArray(rows)) {
    console.error("FAIL: " + file + " does not export " + key);
    process.exit(1);
  }
  return rows.map((L) => {
    /* A lesson with no shelf block would build a page nobody can reach. That
       is the same failure Paul hit from the other direction on 2026-08-29, so
       it fails the build rather than going quietly missing. */
    if (!L.shelf || !(L.shelf.grade || L.shelf.grades) || !L.shelf.subject) {
      console.error("FAIL: " + L.id + " in " + file + " has no shelf block " +
        "(needs at least { grade, subject }), so it would build a page with " +
        "no way in.");
      process.exit(1);
    }
    /* 🚨 A LESSON MAY SIT ON MORE THAN ONE GRADE, the way a worksheet already
       could. Paul, 2026-08-29: "you decide where you think it needs to go based
       on its actual level." A skill is usually TAUGHT in one grade and REVIEWED
       in the next, and forcing one number meant either overstating the level or
       hiding the lesson from the shelf that still needs it.
       ⚠️ `grade` stays supported and is just the one-item case. Nothing that
       reads `.grade` breaks, because the first entry is still written there. */
    const gradeList = L.shelf.grades || [L.shelf.grade];
    if (!Array.isArray(gradeList) || !gradeList.length) {
      console.error("FAIL: " + L.id + ": shelf.grades must be a non-empty array");
      process.exit(1);
    }
    if (!Array.isArray(L.shelf.contains) || !L.shelf.contains.length) {
      console.error("FAIL: " + L.id + " has no shelf.contains - the card would " +
        "not say what is in the lesson.");
      process.exit(1);
    }
    return {
      href: "/lessons/" + L.id + "/",
      id: L.id,
      contains: L.shelf.contains,
      subject: L.shelf.subject,
      grade: gradeList[0],   /* the grade it is TAUGHT in - kept for anything reading one grade */
      grades: gradeList,     /* every shelf it appears on */
      unit: L.unit,
      title: L.title,
      blurb: L.shelf.blurb || L.dek,
      meta: L.shelf.meta || "Interactive",
      price: L.shelf.price || "$0",
      /* Same shape worksheets already use below: the lesson says it HAS art,
         the path is derived, so a card and its picture cannot disagree. A
         lesson with no art gets null and the card keeps the plain panel it
         has always had. The file sits beside the lesson's index.html. */
      thumb: L.shelf.thumb ? "/lessons/" + L.id + "/thumb.jpg" : null,
      seq: L.seq || null,
    };
  });
});

/* ══ THE MODULE ORDER ══
   Paul, 2026-08-31: "once finished with this lesson the next one unlocks and i
   would like to have a way inside to switch to the next one."

   A lesson's prerequisite is simply the lesson before it in the same subject
   and unit. Working it out HERE, once, means the shelf script does not have to
   understand units - it just reads `data-needs` off the card and asks whether
   that one lesson is finished.

   ⚠️ A lesson with no `seq` gets no prerequisite and never locks. That is on
   purpose: the history and maths lessons predate this and must keep behaving
   exactly as they did. Locking is opt-in, per lesson, by adding `seq`. */
LESSONS.forEach(l => {
  if (!l.seq) { l.needs = null; return; }
  const prev = LESSONS.find(o => o.seq && o.subject === l.subject &&
                                 o.seq.unit === l.seq.unit && o.seq.n === l.seq.n - 1);
  l.needs = prev ? prev.id : null;   /* n:1 has no prerequisite, so it is always open */
});


/* Printables. Empty on purpose - an honest empty state beats a fake card. */
/* Derived from worksheets.js, the same file build-worksheets.js renders the
   sheets from, so a sheet and its shelf card can never disagree. */
const WORKSHEETS = require("./worksheets.js").SHEETS.map(w => ({
  href: "/worksheets/" + w.subject.toLowerCase() + "/" + w.slug + "/",
  id: w.subject.toLowerCase() + "/" + w.slug,
  subject: w.subject, grade: w.grade,
  /* A blank sheet serves more than one year. grades is every shelf it belongs
     on; grade stays the primary one, so nothing that reads it has to change. */
  grades: w.grades || [w.grade],
  /* A blank sheet has no answer key, so it says so rather than claiming one. */
  unit: w.unit || "Printable &middot; answer key included",
  title: w.title, blurb: w.blurb, contains: w.contains,
  thumb: w.thumb ? "/worksheets/" + w.subject.toLowerCase() + "/" + w.slug + "/thumb.jpg" : null,
  meta: "Print or Download", price: w.price,
}));

/* The core subjects, in the order they appear everywhere on the site.
   `live` gates whether the subject gets its own pages: a subject with nothing
   in it gets a Soon badge and no link, rather than three empty pages. */
/* Fixed order, alphabetical: English, History, Maths, Science. Paul,
   2026-08-26. It used to sort live subjects to the top, which meant the list
   reshuffled itself every time something went live.

   Paul, 2026-08-26: "I really don't like the ELA name", then "change Ela to
   English across the board of the whole website." So the label, the data tag
   and the URL all say English, and every old /ela/ path is left behind as a
   redirect rather than a 404. */
/* SUBJECTS moved to tools/nav.js: the NAV needs it on every page, and one
   copy means the dropdown and the subject pages cannot disagree. */
const keyOf = (s) => s.key || s.name;

/* 🚨 A GRADE IS SOMETIMES A NUMBER AND SOMETIMES A STRING, SO NEVER USE ===.
   The registries write `grade: 7` as a number, but liveGrades() ends in
   .map(String) so it hands back "7". Comparing those with === silently finds
   nothing, and because "K" is a string either way, Kindergarten keeps working
   while every numbered grade quietly returns an empty list.

   That bit twice on 2026-08-29: the grade+subject pages generated for K alone,
   AND the guard meant to catch it used the same helper, so it agreed that
   nothing was missing. A guard that shares the bug it is guarding is worse
   than no guard, because it reads as proof. One comparison, used everywhere. */
const sameGrade = (a, b) => String(a) === String(b);

const bySubject = (s) => LESSONS.filter(l => l.subject === s);
/* ⚠️ `l.grades`, not `l.grade`. A lesson taught in 3 and reviewed in 4 belongs
   on both shelves, and filtering on the single grade would drop it from the
   second one silently - the shelf would simply look empty. */
const byGrade   = (g) => LESSONS.filter(l => l.grades.some(x => sameGrade(x, g)));
const sheetsByGrade   = (g) => WORKSHEETS.filter(w => w.grades.some(x => sameGrade(x, g)));
const sheetsBySubject = (s) => WORKSHEETS.filter(w => w.subject === s);

const group = (heading, note, cards) => `<h2 class="h2s" style="margin:0 0 4px">${heading}</h2>
  <p style="margin:0 0 20px;color:var(--dim);font-size:.9rem;max-width:56ch">${note}</p>
  ${cards}`;


/* Compact cards, several to a row. The short line always shows; a native
   <details> lists what the item actually contains. No JS, keyboard accessible.
   The card is a div rather than an anchor - a disclosure control cannot
   legally sit inside a link. */
/* 🚨 ONE constant, because this label appears on every unbuilt slot on the
   site. Paul, 2026-09-03: "one thing you can do on these templates is say
   coming soon." It was "Being Built", which claims work is underway on that
   specific item — untrue of 107 of the 108 grade 3 English slots, which are
   a transcribed table of contents. "Coming Soon" promises the same thing
   without the false claim. Title Case, per the UI-label rule. */
const SLOT_LABEL = "Coming Soon";

/* One card. Shared by the flat shelves and the unit pager so they cannot
   drift apart. `eyebrow` is whatever label suits that shelf. */
const oneCard = (l, eyebrow) => `<div class="card${l.thumb ? " has-thumb" : ""}" data-lesson="${l.id}"${
      l.needs ? ` data-needs="${l.needs}"` : ""}${
      l.seq ? ` data-unit="${l.subject}|${l.seq.unit}" data-n="${l.seq.n}"` : ""}>
      <span class="tick-done" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.3l4.6 4.6L19 7.4"/></svg></span>
      <a class="clink" href="${l.href}">
        <span class="cthumb">${l.thumb ? `<img src="${l.thumb}" alt="" loading="lazy" decoding="async">` : ""}</span>
        <span class="cbody">
          <em>${eyebrow}</em>
          <b class="ctitle">${l.title}</b>
          <span class="cblurb">${l.blurb}</span>
        </span>
      </a>
      ${(l.contains && l.contains.length) ? `<details class="cmore">
        <summary>What's inside</summary>
        <ul>${l.contains.map(c => "<li>" + c + "</li>").join("")}</ul>
      </details>` : ""}
      <div class="cmeta">
        <span>${l.meta}</span>
        <u class="${(l.price || "$0") === "$0" ? "free" : "paid"}">${l.price || "$0"}</u>
      </div>
      <span class="tick-score"></span>
    </div>`;

/* `thumb` is optional and most slots will never have one. It exists because a
   cover sometimes lands before the lesson does - Paul drew the Unit 1 Review
   cover on 2026-09-01, before the review itself was written.
   🚨 A slot card is STILL NOT A LINK, art or no art. `.is-slot` carries no
   <a>, so a cover here can never be clicked into a page that does not exist -
   which is the whole reason the review is a slot and not a real card
   → [[feedback-never-assign-an-unbuilt-lesson]]. */
const slotCard = (eyebrow, title, blurb, thumb) => `<div class="card is-slot" aria-hidden="true">
      <span class="cthumb">${thumb ? `<img src="${thumb}" alt="" loading="lazy" decoding="async">` : ""}</span>
      <span class="cbody">
        <em>${eyebrow}</em>
        <b class="ctitle">${title}</b>
        <span class="cblurb">${blurb}</span>
      </span>
    </div>`;

const lessonCards = (list, showSubject, slots) => {
  const blanks = Math.max(0, (slots == null ? 3 : slots));
  const real = list.map(l => oneCard(l, showSubject ? l.subject + " &middot; " + l.unit : l.unit)).join("\n    ");

  const named = Array.isArray(slots) ? slots : [];
  const generic = Array.isArray(slots) ? 0 : blanks;
  const empty =
    named.map(x => slotCard(x.unit, x.title, SLOT_LABEL, x.thumb)).join("\n    ") +
    (named.length && generic ? "\n    " : "") +
    Array.from({ length: generic }, () => slotCard(SLOT_LABEL, "Coming Soon", "Another one is on the way.")).join("\n    ");

  return `<div class="cardgrid">
    ${real}
    ${empty}
  </div>
  ${progressScript}`;
};

/* ── the unit pager ──────────────────────────────────────────────────────
   🚨 THIS USED TO BE HARDCODED TO leif-units.js, so it could only ever page
   grade 7 history. When the English course outlines arrived (2026-09-03,
   108 slots for grade 3 alone) the shelf still showed one card, because
   nothing read the new file. Paul: "I don't see the lessons on the website."

   It takes NORMALISED units now — [{ n, name, items:[{label,title,slug}] }] —
   and each course supplies its own adapter below. Adding a course means
   writing an adapter, never touching the pager. */
const { UNITS, BUILT } = require("./leif-units.js");
const { GRADE3, GRADE4, GRADE7 } = require("./english-units.js");

/* Leif world history: lessons are bare strings, BUILT maps "unit:n" to a slug.
   🚨 FILTERED BY GRADE, because this course spans two. Unit 1 is Rome, which
   both McDougal Littell volumes put in grade 6; Units 2-5 are medieval and
   early modern, which is grade 7. See the header of leif-units.js for the
   evidence. Calling this with no grade returns the whole course, which is
   right for the subject-wide /history/ shelf and wrong for a grade page. */
const leifPager = (grade) => UNITS
  .filter((u) => grade == null || sameGrade(u.grade, grade))
  .map((u) => ({
    n: u.n, name: u.name,
    items: u.lessons.map((title, i) => ({
      label: "Unit " + u.n + " &middot; Lesson " + (i + 1),
      title, slug: BUILT[u.n + ":" + (i + 1)] || null,
    })),
  }));

/* English: Harcourt nests unit > chapter > lesson, Houghton Mifflin has no
   chapter layer. Both flatten to one list per unit, with the chapter name
   carried into the label so the nesting is not lost on the card.
   ⚠️ A `gap` entry is a page the SCAN lost, not a lesson. It is skipped
   entirely rather than shown as an empty slot, which would read as a lesson
   we chose not to name. */
const englishPager = (course) => course.units
  .filter((u) => !u.gap)
  .map((u) => {
    const items = [];
    const push = (l, chapterN) => {
      if (l.gap || !l.title) return;
      /* 🚨 NO PAGE NUMBERS ON THE CARD. Paul, 2026-09-03: "was that for you to
         remember because we need you to remember these books but I don't want
         those pages on our lessons." `page` stays in english-units.js — it is
         how the right spread gets opened when a lesson is built — but it is a
         build-time note, not something a student should ever see. A page
         number on a card also implies the reader has the book, which they
         do not; these are borrow-only scans. */
      items.push({
        label: "Unit " + u.n + (chapterN ? " &middot; Chapter " + chapterN : ""),
        title: l.title, slug: l.slug || null,
      });
    };
    if (u.chapters) for (const c of u.chapters) for (const l of c.lessons) push(l, c.n);
    else if (u.lessons) for (const l of u.lessons) push(l, null);
    return { n: u.n, name: u.name, items };
  })
  .filter((u) => u.items.length);

const unitPager = (shelfKey, units) => {
  units = units || leifPager();
  const panels = units.map((u) => {
    const cards = u.items.map((it) => {
      const L = it.slug ? LESSONS.find((x) => x.href.indexOf("/" + it.slug + "/") !== -1) : null;
      return L ? oneCard(L, it.label) : slotCard(it.label, it.title, "Not built yet.");
    }).join("\n        ");
    const built = u.items.filter((it) => it.slug).length;
    return `<section class="unitpanel" data-unit="${u.n}" data-built="${built}" data-total="${u.items.length}" hidden>
      <div class="cardgrid">
        ${cards}
      </div>
    </section>`;
  }).join("\n    ");

  const dots = units.map((u) =>
    `<button type="button" class="unitdot" data-go="${u.n}" title="${u.name}">${u.n}</button>`).join("");

  return `<div class="unitpager" data-shelf="${shelfKey}">
    <div class="unithead">
      <button type="button" class="unitnav" data-step="-1" aria-label="Previous unit">&#8249;</button>
      <div class="unitmid">
        <p class="unittag" id="utag"></p>
        <h3 class="unitname" id="uname"></h3>
        <p class="unitcount" id="ucount"></p>
      </div>
      <button type="button" class="unitnav" data-step="1" aria-label="Next unit">&#8250;</button>
    </div>
    ${panels}
    <div class="unitdots">${dots}</div>
  </div>
  ${pagerScript(units)}
  ${progressScript}`;
};

/* 🚨 STEPS BY INDEX, NOT BY UNIT NUMBER. It used to do
   parseInt(cur.dataset.unit) + step, which is only correct while unit numbers
   run 1..N with no holes. Leif does; the grade 4 English course does NOT --
   its Unit 1 contents leaf is missing from the scan, so its units start at 2.
   Stepping arithmetically off 2 lands on a unit with no panel and blanks the
   shelf. Index-stepping cannot do that. Keep it this way. */
const pagerScript = (units) => `<script>
(function(){
  var wrap = document.querySelector(".unitpager");
  if (!wrap) return;
  var key = "ns:unit:" + wrap.dataset.shelf;
  var panels = [].slice.call(wrap.querySelectorAll(".unitpanel"));
  var NAMES = ${JSON.stringify(Object.fromEntries(units.map(u => [u.n, u.name])))};
  var prev = wrap.querySelectorAll(".unitnav")[0];
  var next = wrap.querySelectorAll(".unitnav")[1];

  function idxOf(n){
    for (var i = 0; i < panels.length; i++){ if (panels[i].dataset.unit === String(n)) return i; }
    return 0;
  }

  function showIdx(i){
    if (i < 0) i = 0;
    if (i > panels.length - 1) i = panels.length - 1;
    var cur = panels[i];
    var n = cur.dataset.unit;
    panels.forEach(function(p){ p.hidden = (p !== cur); });
    [].forEach.call(wrap.querySelectorAll(".unitdot"), function(b){
      b.setAttribute("aria-current", b.dataset.go === n ? "true" : "false");
    });
    wrap.querySelector("#utag").textContent = "Unit " + n + " of " + panels.length;
    wrap.querySelector("#uname").textContent = NAMES[n] || "";
    wrap.querySelector("#ucount").textContent = cur.dataset.built + " of " + cur.dataset.total + " built";
    try { localStorage.setItem(key, n); } catch(e){}
    prev.disabled = (i <= 0);
    next.disabled = (i >= panels.length - 1);
  }

  // last unit viewed, else the first unit with unfinished work, else the first
  var start = null;
  try { start = parseInt(localStorage.getItem(key), 10) || null; } catch(e){}
  var startIdx = null;
  if (start !== null && idxOf(start) >= 0) startIdx = idxOf(start);
  if (startIdx === null){
    for (var i = 0; i < panels.length && startIdx === null; i++){
      var cards = panels[i].querySelectorAll("[data-lesson]");
      for (var j = 0; j < cards.length; j++){
        var d = null;
        try { d = JSON.parse(localStorage.getItem("ns:done:" + cards[j].dataset.lesson)); } catch(e){}
        if (!d || d.complete === false){ startIdx = i; break; }
      }
    }
  }
  showIdx(startIdx === null ? 0 : startIdx);

  wrap.addEventListener("click", function(e){
    var nav = e.target.closest(".unitnav");
    if (nav && !nav.disabled){
      var cur = panels.filter(function(x){ return !x.hidden; })[0];
      showIdx(panels.indexOf(cur) + parseInt(nav.dataset.step, 10));
      return;
    }
    var dot = e.target.closest(".unitdot");
    if (dot) showIdx(idxOf(parseInt(dot.dataset.go, 10)));
  });
})();
<\/script>`;

/* Reads the same localStorage the lesson page writes, so finishing a lesson
   ticks it off here. Same origin, so no server and nothing to sign in to. */
const progressScript = `<script>
(function(){
  var cards = [].slice.call(document.querySelectorAll("[data-lesson]"));

  function read(k, id){ try { return JSON.parse(localStorage.getItem(k + id)); } catch(e){ return null; } }
  function isDone(id){ var d = read("ns:done:", id); return !!(d && d.complete !== false); }

  /* PASS 1 - what each card is on its own. */
  cards.forEach(function(c){
    var id = c.dataset.lesson;
    var d = read("ns:done:", id), pr = read("ns:prog:", id);

    if (d && d.complete !== false){
      c.classList.add("is-done");
      var s = c.querySelector(".tick-score");
      if (s) s.textContent = "Completed \\u00b7 best " + d.score + "/" + d.total + " (" + d.pct + "%)";
      var t = c.querySelector(".tick-done");
      if (t) t.setAttribute("title", "Completed");
      return;
    }

    if (pr && pr.done > 0){
      c.classList.add("is-part");
      var ps = c.querySelector(".tick-score");
      if (ps) ps.textContent = pr.done + " of " + pr.total + " answered";
      var pb = document.createElement("span");
      pb.className = "cbar";
      pb.innerHTML = '<i style="width:' + Math.round(pr.done / pr.total * 100) + '%"></i>';
      var body = c.querySelector(".cbody");
      if (body) body.appendChild(pb);
      return;
    }

    /* 🚨 SOFT LOCK, ON PURPOSE. The card dims and says so; the link still
       works. Progress lives in localStorage, which is PER DEVICE - a cleared
       browser or a new phone would hard-lock Kolten out of a course he has
       already done. A lock that can strand the student is worse than no lock.
       Paul chose faded-60% for this state, 2026-08-31. */
    if (c.dataset.needs && !isDone(c.dataset.needs)) c.classList.add("is-locked");
  });

  /* PASS 2 - exactly ONE "up next" per unit: the lowest-numbered lesson that is
     neither finished nor locked. Grouped by data-unit so a mixed shelf marks one
     per course rather than one per page. A lesson with no seq has no data-unit,
     so history and maths are untouched by any of this.
     WARNING: this whole block is inside a JS template literal. A backtick in a
     comment here closes the string and the build dies on the next word. */
  var groups = {};
  cards.forEach(function(c){
    var g = c.dataset.unit;
    if (!g || c.classList.contains("is-done") || c.classList.contains("is-locked")) return;
    var n = parseInt(c.dataset.n, 10);
    if (!groups[g] || n < groups[g].n) groups[g] = { n: n, el: c };
  });
  Object.keys(groups).forEach(function(g){
    var c = groups[g].el;
    c.classList.add("is-next");
    if (!c.classList.contains("is-part")){
      var s = c.querySelector(".tick-score");
      if (s) s.textContent = "Start here";
    }
  });
})();
<\/script>`;

/* Subject landing: same two doors as a grade landing, so both paths through the
   site have the same shape. Lessons and worksheets are different jobs. */
const subjectLanding = (s, slugIn) => {
  const slug = slugIn || s.toLowerCase();
  const lessons = bySubject(s), sheets = sheetsBySubject(s);
  /* flatMap, so a lesson listed on two grades shows under both here too */
  const grades = [...new Set(lessons.flatMap(l => l.grades))].sort((a, b) => a - b);
  return `<div class="band"><div class="wrap">
  <div class="two">
    <a class="tile" href="/${slug}/lessons/" style="min-height:210px">
      <em>Worked through on screen</em>
      <h4 style="font-size:1.5rem">Lessons</h4>
      <p>The reading is built in and read aloud, then questions with the answers hidden in the text. Nothing to print.</p>
      <p style="margin-top:16px;font-size:.78rem;font-weight:800;color:var(--a)">${countLabel(lessons.length, "lesson", "lessons")} &rarr;</p>
    </a>
    <a class="tile" href="/${slug}/worksheets/" style="min-height:210px">
      <em>Printed and written on</em>
      <h4 style="font-size:1.5rem">Worksheets</h4>
      <p>Printables and term packets to work through on paper. Answer keys are always included free.</p>
      <p style="margin-top:16px;font-size:.78rem;font-weight:800;color:var(--a)">${countLabel(sheets.length, "sheet", "sheets")} &rarr;</p>
    </a>
  </div>
</div></div>

<div class="wrap" style="padding-top:56px;padding-bottom:56px">
  ${group("Or Jump to a Grade", "The years this subject has something built for so far.",
    grades.length
      ? `<div class="grades">
    ${grades.map(g => `<a class="gr live" href="/grade-${gslug(g)}/"><b>${g}</b><span>Live</span></a>`).join("\n    ")}
    </div>`
      : emptyTile("Grades appear here as lessons are added."))}
</div>`;
};

const subjectLessons = (s) => s === "History"
  ? `<div class="band"><div class="wrap">${unitPager("history-lessons")}</div></div>`
  : `<div class="band"><div class="wrap">
  ${bySubject(s).length ? lessonCards(bySubject(s), false, plannedFor(s, null, "lesson"))
    : emptyTile("The first lessons for this subject are being built.")}
</div></div>`;

const subjectSheets = (s) => `<div class="band"><div class="wrap">
  ${sheetsBySubject(s).length ? lessonCards(sheetsBySubject(s), false, plannedFor(s, null, "worksheet"))
    : emptyTile("The printables follow the lessons. They go up as each unit is finished.")}
</div></div>`;

const countLabel = (n, one, many) => n + " " + (n === 1 ? one : many);

/* A grade has two shelves and both counts belong on both of them. `here` is
   "l" or "w" - whichever page is being rendered - so the current shelf reads as
   a plain fact and the other as somewhere to go. */
const gradeSwitch = (g, here) => {
  const nl = byGrade(g).length, nw = sheetsByGrade(g).length;
  const les = countLabel(nl, "lesson", "lessons");
  const wks = countLabel(nw, "sheet", "sheets");
  const link = (label, href) => '<a href="' + href + '">' + label + "</a>";
  return (here === "l" ? "<b>" + les + "</b>" : link(les, "/grade-" + gslug(g) + "/lessons/"))
    + '<i aria-hidden="true">&middot;</i>'
    + (here === "w" ? "<b>" + wks + "</b>" : link(wks, "/grade-" + gslug(g) + "/worksheets/"));
};

const emptyTile = (line) => `<div class="tile" style="min-height:170px;align-items:center;justify-content:center;text-align:center">
      <div><h4 style="font-size:1.2rem">Nothing here yet</h4>
      <p style="max-width:44ch;margin-top:8px">${line}</p></div></div>`;

/* ── RESOURCES ─────────────────────────────────────────────────────────────
   Rendered from tools/resources.js, so a recommendation is added in one file
   and lands on both its category page and the Resources index.

   Every card carries WHY it earned a place, because a list with no reasoning
   on it is just a list — the same argument as Ground Control on a lesson. */
const { RESOURCES } = require("./resources.js");
const fail = (msg) => { console.error("FAIL: " + msg); process.exit(1); };

(function checkResources(){
  const cats = new Set(["books-and-readers", "tools-and-supplies",
                        "science-experiments", "reading-lists", "placement-tests"]);
  for (const r of RESOURCES) {
    /* 🚨 `affiliate` must be EXPLICIT. BEHAVIOR.md: any affiliate link is
       marked as one. Defaulting a missing value to false is how an unmarked
       affiliate link ships by accident, so it fails the build instead. */
    if (typeof r.affiliate !== "boolean")
      fail("resource " + r.slug + " must set affiliate: true or false, explicitly");
    if (!r.url || !/^https?:\/\//.test(r.url))
      fail("resource " + r.slug + " needs a real URL — no placeholder links");
    if (!r.why || r.why.length < 80)
      fail("resource " + r.slug + " needs a real `why`. A link with no reasoning is just a list");
    if (!cats.has(r.cat))
      fail("resource " + r.slug + ' has cat "' + r.cat + '", which is not a resources page');
  }
})();

/* `links` lets one card carry several editions or volumes. Six McGuffey
   readers under one explanation beats six cards repeating the same paragraph.
   Every link opens in a new tab, because leaving the site mid-lesson to look
   at a book is not the same as navigating away from it. */
const resourceCard = (r) => `<div class="tile res-card" style="display:block;padding:24px">
    <p class="kick">${r.cost}${r.affiliate ? " &middot; affiliate link" : ""}</p>
    <h4 style="margin:6px 0 10px"><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a></h4>
    <p style="margin:0 0 12px;line-height:1.65"><b>${r.what}</b></p>
    <p style="margin:0 0 12px;line-height:1.7">${r.why}</p>
    <p style="margin:0 0 ${r.links ? "14px" : "0"};color:var(--dim);font-size:.9rem;line-height:1.6">${r.note}</p>${
    r.links ? `
    <ul style="margin:0;padding-left:18px;line-height:1.9;font-size:.94rem">
      ${r.links.map(([label, href]) =>
        '<li><a href="' + href + '" target="_blank" rel="noopener">' + label + "</a></li>").join("\n      ")}
    </ul>` : ""}
  </div>`;

const resourcesIn = (cat) => RESOURCES.filter((r) => r.cat === cat);

const resourceList = (cat, emptyLine) => {
  const list = resourcesIn(cat);
  return `<div class="band"><div class="wrap">
  ${list.length
    ? '<div class="tiles">' + list.map(resourceCard).join("\n    ") + "</div>"
    : emptyTile(emptyLine)}
</div></div>`;
};

/* The index shows everything, grouped by category, so a parent who does not
   know which sub-page they want still sees the lot. */
const resourcesIndex = () => {
  const groups = [
    ["books-and-readers", "Books and Readers",
     "Older books that teach better than most of what is sold new, and where to get them free."],
    ["tools-and-supplies", "Tools and Supplies",
     "What is actually in use here, including what we pay for."],
    ["science-experiments", "Science Experiments",
     "Experiments that run on what is already in the kitchen."],
    ["reading-lists", "Reading Lists",
     "By grade, honest about level rather than flattering about it."],
    ["placement-tests", "Placement Tests",
     "Free ways to find out where a student actually is, before you buy a year of the wrong thing."],
  ].filter(([cat]) => resourcesIn(cat).length);

  return `<div class="band"><div class="wrap">
  ${groups.map(([cat, name, note]) =>
    group(name, note, '<div class="tiles">' +
      resourcesIn(cat).map(resourceCard).join("\n    ") + "</div>") +
    '<p style="margin:14px 0 40px"><a href="/resources/' + cat + '/">All ' +
      name.toLowerCase() + " &rarr;</a></p>").join("\n  ")}
  <p class="h2s">Nothing is listed here because somebody paid for the slot. Anything that ever
    is an affiliate link will say so on the card.</p>
</div></div>`;
};

/* The grade landing: pick a grade, then pick lessons or worksheets.
   Two doors, because a lesson and a printable are different jobs -
   one is worked through on screen, the other gets printed. */
const gradeLanding = (g) => `<div class="band"><div class="wrap">
  ${group("Pick a Subject", "All four core subjects. Each one opens its lessons or its printables for this year.", subjectRows(g))}
</div></div>

<div class="wrap" style="padding-top:56px;padding-bottom:56px">
  ${group("Or Take the Whole Year at Once", "Everything built for this grade, all subjects together.",
    `<div class="subj-sub">
      <a class="minibox" href="/grade-${gslug(g)}/lessons/">
        <b>All lessons</b><span>Worked through on screen</span>
        <u>${countLabel(byGrade(g).length, "lesson", "lessons")} &rarr;</u>
      </a>
      <a class="minibox" href="/grade-${gslug(g)}/worksheets/">
        <b>All worksheets</b><span>Printed and written on</span>
        <u>${countLabel(sheetsByGrade(g).length, "sheet", "sheets")} &rarr;</u>
      </a>
    </div>`)}
</div>`;

/* Grade -> Lessons */
const gradeLessons = (g) => {
  const list = byGrade(g);
  /* Grade 7 leads with the Leif unit pager, because fifty history lessons on
     one page is not a shelf. ⚠️ That pager only knows about History: it is
     driven by leif-units.js. So every OTHER subject in this grade is listed
     under it as ordinary cards — without this, an English or Science lesson
     builds, links from its subject page, and is invisible from its own grade.
     Found 2026-08-29, when the first grade-7 English lesson went up. */
  /* ⚠️ leifPager(g), not the whole course. Grade 6 gets Rome, grade 7 gets
     medieval onward. Passing no grade here put all five units on grade 7,
     including the Rome one whose two built lessons are shelved at grade 6. */
  if (g === 7 || g === 6) {
    const others = list.filter((l) => l.subject !== "History");
    return `<div class="band"><div class="wrap">${unitPager("g" + g + "-lessons", leifPager(g))}</div></div>` +
      (others.length ? `<div class="band"><div class="wrap">
  <h2 class="section-head">The Other Subjects</h2>
  ${lessonCards(others, true, plannedFor(null, g, "lesson").filter(p => p.subject !== "History"))}
</div></div>` : "");
  }
  return `<div class="band"><div class="wrap">
  ${list.length ? lessonCards(list, true, plannedFor(null, g, "lesson"))
    : emptyTile("The first lessons for this year are being built.")}
</div></div>`;
};

/* Grade -> Worksheets */
const gradeSheets = (g) => `<div class="band"><div class="wrap">
  ${sheetsByGrade(g).length ? lessonCards(sheetsByGrade(g), true, plannedFor(null, g, "worksheet"))
    : emptyTile("The printables follow the lessons. They go up as each unit is finished.")}
</div></div>`;

/* ── Grade + Subject ───────────────────────────────────────────────────────
   🚨 A SUBJECT BOX ON A GRADE PAGE MUST LAND ON THAT SUBJECT.

   Paul, 2026-08-29: "i opened english in 7th grade and it still pulls to the
   lessons about history."

   All four subject boxes on /grade-7/ pointed at the same /grade-7/lessons/,
   which leads with the Leif history pager. So English said "1 lesson" and
   delivered a shelf of Rome. This is the SAME bug already commented in
   subjectRows — the Kindergarten worksheets one — where the count was scoped
   to the grade and the destination was not. It was fixed there for grade, and
   the subject half was left behind.

   So a grade+subject now has its own real page. That is also the SEO shape the
   roadmap wants: /grade-7/english/lessons/ is exactly the kind of URL that can
   rank against nexstudent.org, where a single shared shelf cannot. */
const gradeLabel = (g) => g === "K" || g === "k"
  ? "Kindergarten"
  : ({ 1: "1st", 2: "2nd", 3: "3rd" }[g] || g + "th") + " Grade";

const lessonsIn  = (g, sub) => byGrade(g).filter(l => l.subject === sub);
const sheetsIn   = (g, sub) => sheetsByGrade(g).filter(w => w.subject === sub);

/* 🚨 WHICH GRADE+SUBJECT SHELVES ARE DRIVEN BY A COURSE OUTLINE.
   A course here is a whole transcribed textbook, so it pages by unit instead
   of dumping every card on one shelf. Add a grade by adding a line, never by
   editing the pager. ⚠️ `sameGrade` — grades arrive as both strings and
   numbers, see the note further up this file. */
const COURSE_SHELVES = [
  { grade: 6, subject: "History", units: () => leifPager(6) },   /* Rome */
  { grade: 7, subject: "History", units: () => leifPager(7) },   /* medieval onward */
  { grade: 3, subject: "English", units: () => englishPager(GRADE3) },
  { grade: 4, subject: "English", units: () => englishPager(GRADE4) },
  { grade: 7, subject: "English", units: () => englishPager(GRADE7) },
];

const courseFor = (g, sub) =>
  COURSE_SHELVES.find((c) => sameGrade(c.grade, g) && c.subject === sub) || null;

const gradeSubjectLessons = (g, sub) => {
  const list = lessonsIn(g, sub);
  /* A course shelf keeps the unit pager it was built for rather than becoming
     a wall of cards — fifty history lessons, or a hundred and eight English
     ones, do not belong on one page. */
  const course = courseFor(g, sub);
  if (course)
    return `<div class="band"><div class="wrap">${
      unitPager("g" + g + "-" + gslug(sub) + "-lessons", course.units())}</div></div>`;
  return `<div class="band"><div class="wrap">
  ${list.length ? lessonCards(list, true, plannedFor(sub, g, "lesson"))
    : emptyTile("Nothing on screen for this subject this year yet.")}
</div></div>`;
};

const gradeSubjectSheets = (g, sub) => `<div class="band"><div class="wrap">
  ${sheetsIn(g, sub).length ? lessonCards(sheetsIn(g, sub), true, plannedFor(sub, g, "worksheet"))
    : emptyTile("No printables for this subject this year yet.")}
</div></div>`;

/* The subjects index: each subject as a row, with two smaller boxes under it
   for Lessons and Worksheets. Live subjects first, so what actually exists is
   at the top rather than buried under things that do not. */
/* One component, used by /subjects/ and by every grade page, so "pick a subject,
   then pick lessons or worksheets" looks the same wherever you meet it.
   grade = null means every grade; a number scopes the counts to that year. */
const subjectRows = (grade) => {
  const rows = SUBJECTS;          /* fixed order, never re-sorted by liveness */
  return `<div class="subj-list">
  ${rows.map((s, i) => {
    const nLes = bySubject(keyOf(s)).filter(l => grade == null || l.grades.some(x => sameGrade(x, grade))).length;
    const nWk  = sheetsBySubject(keyOf(s)).filter(w => grade == null || w.grades.some(x => sameGrade(x, grade))).length;
    const box = (label, note, n, one, many, href) => href
      ? `<a class="minibox" href="${href}">
          <b>${label}</b><span>${note}</span>
          <u>${countLabel(n, one, many)} &rarr;</u>
        </a>`
      : `<div class="minibox is-soon" aria-disabled="true">
          <b>${label}</b><span>${note}</span>
          <u>Not built yet</u>
        </div>`;
    return `<section id="subj-${s.slug}" class="subj-row${s.live ? "" : " is-soon"}">
      <div class="subj-head">
        <n>${String(i + 1).padStart(2, "0")}</n>
        <div>
          <h3>${s.name} <i>${s.live ? "Live" : "Soon"}</i></h3>
          <p>${s.blurb}</p>
        </div>
      </div>
      <div class="subj-sub">
        ${/* 🚨 ON A GRADE PAGE THE LINK MUST STAY INSIDE THE GRADE.
              Paul, 2026-08-27: "I tried going to kindergarten worksheets and for
              some reason I have the spelling test and spelling third grade words
              in the kindergarten."

              The counts here were already grade-filtered - Kindergarten English
              correctly said 1 sheet - but the href went to the whole-subject
              shelf, /english/worksheets/, which holds the 3rd grade spelling
              material. So the box promised one sheet and delivered a shelf of
              another year's work.

              With a grade in hand the box now points at that grade's own shelf.
              On /subjects/, where there is no grade, it still points at the
              subject shelf, which is correct there. */""}
        ${/* 🚨 AND IT MUST STAY INSIDE THE SUBJECT TOO. Paul, 2026-08-29:
              "i opened english in 7th grade and it still pulls to the lessons
              about history." Every subject box here used to point at the one
              shared /grade-N/lessons/ shelf, which grade 7 leads with the
              history unit pager. Now each grade+subject has its own page.

              A box with nothing behind it does NOT link. A live subject can
              still be empty in a particular year, and a link promising "1
              lesson" that opens an empty shelf is the same broken promise in
              a different costume. */""}
        ${/* On a GRADE page every subject box links, because every grade x
              subject shelf is built (see the generator below). Paul,
              2026-08-29: "build a lesson page and a worksheet page you can
              drop in for each grade then build each page for that so it is
              ready to work." An empty shelf says so plainly rather than
              pretending. On /subjects/, where there is no grade, a subject
              that is not live still has no page to point at. */""}
        ${box("Lessons", "Worked through on screen", nLes, "lesson", "lessons",
          grade != null ? "/grade-" + gslug(grade) + "/" + s.slug + "/lessons/"
            : s.live ? "/" + s.slug + "/lessons/" : null)}
        ${box("Worksheets", "Printed and written on", nWk, "sheet", "sheets",
          grade != null ? "/grade-" + gslug(grade) + "/" + s.slug + "/worksheets/"
            : s.live ? "/" + s.slug + "/worksheets/" : null)}
      </div>
    </section>`;
  }).join("\n  ")}
  </div>`;
};

/* The games shelf. One real entry so far; the rest say plainly that they are
   not built rather than pretending to be links. */
const GAMES = [
  { title: "Show Me The States", href: "/games/show-me-the-states/", subject: "History",
    blurb: "Drag all fifty states onto the map against the clock, then place the capitals. Warm and cold guides you, and the map colours in by region as you go.",
    note: "Three levels &middot; 50 states &middot; 50 capitals" },
  { title: "Speed Run Math", href: "/games/speed-run-math/", subject: "Maths",
    blurb: "A timed multiplication drill. Pick the tables you want to work on, answer against the clock, and earn a rank from Recruit to Pilot.",
    note: "Choose your tables &middot; 2 to 10 minutes" },
  /* Names are Title Case, matching their own pages and the nav. Every one has
     a page explaining what the game is for — none of them is a dead label. */
  { title: "Remainder Race", href: "/games/remainder-race/", subject: "Maths", soon: true,
    blurb: "Division where the leftover is the answer, not a mistake. Follows the Long Division lesson." },
  { title: "Fraction Match", href: "/games/fraction-match/", subject: "Maths", soon: true,
    blurb: "Spot that 2/4, 3/6 and 1/2 are the same number wearing different clothes." },
  { title: "Spelling Ladder", href: "/games/spelling-ladder/", subject: "English", soon: true,
    blurb: "Climb a word one letter at a time, drawn from the week's own spelling list." },
  { title: "Comma Catcher", href: "/games/comma-catcher/", subject: "English", soon: true,
    blurb: "Fix the sentence that says the wrong thing, using one comma." },
  { title: "Sort the Mixture", href: "/games/sort-the-mixture/", subject: "Science", soon: true,
    blurb: "Filter, evaporate or magnet. Pick wrong and watch nothing separate." },
];

/* Every game is a tile you can open, built or not. An unbuilt one says so on
   its badge and opens a page explaining what the game is for — Paul,
   2026-08-29: "i want this the entire site." */
const gameTile = (g) => '<a class="tile' + (g.soon ? " is-soon" : "") + '" href="' + g.href + '">' +
  '<p class="kick">' + g.subject + "</p><h4>" + g.title + "</h4>" +
  "<p>" + (g.blurb || "") + "</p>" +
  "<u>" + (g.note || (g.soon ? "What it will be" : "Play")) + " &rarr;</u></a>";

const gamesPage = () =>
  '<div class="band"><div class="wrap"><div class="tiles">' +
  GAMES.map(gameTile).join("") +
  "</div></div></div>";

const subjectsPage = () => `<div class="band"><div class="wrap">
  ${subjectRows(null)}
  <p class="h2s" style="margin-top:30px">A subject goes live when it has enough in it to be worth
    your time, not before. History is first because it is the one being taught in our own house
    right now.</p>
</div></div>`;

/* The two placement exams, moved off the homepage onto their own page. */
const parents = () => `<div class="band"><div class="wrap">
  <div class="two">
    <div class="plan free">
      <span class="tag">Free</span>
      <h3>Short placement</h3>
      <div class="price">$0</div>
      <ul>
        <li>One subject, about twenty minutes</li>
        <li>A grade level and the skill that gave way</li>
        <li>Results on screen and by email</li>
        <li>No account needed</li>
      </ul>
      <a class="btn ghost" href="/placement-exam.html">Take the short exam</a>
    </div>
    <div class="plan pro pick">
      <span class="tag">Extensive</span>
      <h3>Full placement</h3>
      <div class="price">$9 <s>one student</s></div>
      <ul>
        <li>All four subjects</li>
        <li>Skill-by-skill breakdown for each</li>
        <li>A recommended grade and starting packet</li>
        <li>Printable report to keep on file</li>
      </ul>
      <a class="btn" href="/placement-exam.html">See the exams</a>
    </div>
  </div>
  <p class="h2s" style="margin-top:34px">The full exam is not built yet. The short reading
    placement is live now and is genuinely free &mdash; no card, no account.</p>
</div></div>`;

const pages = [
  /* /grades/ was DELETED on 2026-08-26. Paul: "get rid of the grades tab and
     replace it with the nav panel." The dropdown lists every grade and the
     home page still carries the picker at #grades, so the page had no job
     left. It redirects rather than 404s - see REDIRECTS below. */

  { dir: "worksheets", active: "w",
    title: "Worksheets — NexStudents",
    desc: "Every free worksheet and term packet, all grades and subjects, in one place.",
    crumb: "Worksheets", h1: "Every Sheet, in One Place.",
    lead: "Free printables and term packets across English, History, Maths and Science. Filter by grade, by subject, or by whether it costs anything. Answer keys are always included free.",
    body: empty("The shelf is being built. 7th grade goes up first, then the grades either side of it.") },

  { dir: "games", active: "g",
    title: "Games — NexStudents",
    desc: "Browser games that practise the same skills as the worksheets.",
    crumb: "Games", h1: "Practice that does not feel like a worksheet.",
    lead: "Short browser games built around the same skills the worksheets cover. Nothing to install and nothing to sign up for, and getting one wrong never sends a student back to the start.",
    body: gamesPage() },

  { dir: "comics", active: "c",
    title: "Comics — NexStudents",
    desc: "The Adventures of Donut Boy: The Hole Wonder, and more to follow.",
    crumb: "Comics", h1: "Comics worth coming back for.",
    lead: "Short strips your student reads right here on the page. Pick a series and read straight through - no download, no account, and no reason to stop at one.",
    body: comicsPage() },

  { dir: "subjects", active: "w",
    title: "Subjects — NexStudents",
    desc: "Every subject on NexStudents, with its lessons and worksheets.",
    crumb: "Subjects", h1: "Subjects.",
    lead: "Four core subjects. Each one holds lessons that are worked through on screen and worksheets that get printed. What is built is at the top.",
    body: subjectsPage() },

  /* 🚨 Kindergarten. Paul, 2026-08-27: "everything preschool ... and
     kindergarten will be free. everything from first grade will have a few
     options free resources and more paid packs." So this shelf never carries a
     price, and the copy says so plainly rather than leaving a parent to guess.
     LIVE_GRADES in nav.js lists "K" first, so these three pages MUST exist -
     without them the grade picker links at nothing. */
  { dir: "grade-k", active: "gr",
    title: "Kindergarten — NexStudents",
    desc: "Free kindergarten printables. Handwriting, letters and early practice.",
    crumb: "Kindergarten", h1: "Kindergarten.",
    lead: "Everything on the kindergarten shelf is free, and stays free. This is where a child meets letters for the first time, and that should not sit behind a price.",
    body: gradeLanding("K") },

  { dir: "grade-k/lessons", active: "gr",
    title: "Kindergarten Lessons — NexStudents",
    desc: "Kindergarten lessons worked through on screen.",
    crumb: '<a href="/grade-k/">Kindergarten</a> &rsaquo; Lessons', h1: "Kindergarten Lessons.",
    lead: "Nothing on screen for this year yet. At this age the work belongs on paper with a pencil in hand, so the printables came first.",
    count: gradeSwitch("K", "l"), body: gradeLessons("K") },

  { dir: "grade-k/worksheets", active: "gr",
    title: "Kindergarten Worksheets — NexStudents",
    desc: "Free kindergarten printables, starting with handwriting.",
    crumb: '<a href="/grade-k/">Kindergarten</a> &rsaquo; Worksheets', h1: "Kindergarten Worksheets.",
    lead: "Print these at full size and work one letter at a time. All free.",
    count: gradeSwitch("K", "w"), body: gradeSheets("K") },

  /* Grade 3 exists for the spelling sheet. It is deliberately thin: the sheet
     is blank, so it serves any year, and a 3rd grade shelf is where a parent
     looking for spelling practice actually goes. */
  { dir: "grade-3", active: "gr",
    title: "3rd Grade — NexStudents",
    desc: "3rd grade worksheets and printables, organised by subject.",
    crumb: "3rd Grade", h1: "3rd Grade.",
    lead: "The 3rd grade shelf is just getting started. What is here now is spelling practice you can use with any word list, week after week.",
    body: gradeLanding(3) },

  { dir: "grade-3/lessons", active: "gr",
    title: "3rd Grade Lessons — NexStudents",
    desc: "Every 3rd grade lesson, worked through on screen.",
    crumb: '<a href="/grade-3/">3rd Grade</a> &rsaquo; Lessons', h1: "3rd Grade Lessons.",
    lead: "Nothing on screen for this year yet. The printables came first, because spelling is worked on paper.",
    count: gradeSwitch(3, "l"), body: gradeLessons(3) },

  { dir: "grade-3/worksheets", active: "gr",
    title: "3rd Grade Worksheets — NexStudents",
    desc: "Every 3rd grade printable worksheet.",
    crumb: '<a href="/grade-3/">3rd Grade</a> &rsaquo; Worksheets', h1: "3rd Grade Worksheets.",
    lead: "Printables for working on paper. A blank sheet is one you print once a week and fill with your own words.",
    count: gradeSwitch(3, "w"), body: gradeSheets(3) },

  { dir: "grade-6", active: "gr",
    title: "6th Grade — NexStudents",
    desc: "Every 6th grade lesson and worksheet on NexStudents.",
    crumb: "6th Grade", h1: "6th Grade.",
    lead: "The year before 7th, and the one worth going back to when something is still shaky. Lessons are worked through on screen; worksheets get printed. Pick whichever you need.",
    body: gradeLanding(6) },

  { dir: "grade-6/lessons", active: "gr",
    title: "6th Grade Lessons — NexStudents",
    desc: "Every 6th grade lesson, worked through on screen.",
    crumb: '<a href="/grade-6/">6th Grade</a> &rsaquo; Lessons', h1: "6th Grade Lessons.",
    lead: "Each one opens straight away. The reading is read aloud with the words highlighted, and the questions send your student back into the text to find the answer rather than guess it.",
    count: gradeSwitch(6, "l"), body: gradeLessons(6) },

  { dir: "grade-6/worksheets", active: "gr",
    title: "6th Grade Worksheets — NexStudents",
    desc: "Every 6th grade printable worksheet and term packet.",
    crumb: '<a href="/grade-6/">6th Grade</a> &rsaquo; Worksheets', h1: "6th Grade Worksheets.",
    lead: "Printables and term packets for working on paper. Answer keys are always included free.",
    count: gradeSwitch(6, "w"), body: gradeSheets(6) },

  { dir: "grade-7", active: "gr",
    title: "7th Grade — NexStudents",
    desc: "Every 7th grade lesson and worksheet on NexStudents.",
    crumb: "7th Grade", h1: "7th Grade.",
    lead: "The year being taught in our own house right now, which is why it went up first. Lessons are worked through on screen; worksheets get printed. Pick whichever you need.",
    body: gradeLanding(7) },

  { dir: "grade-7/lessons", active: "gr",
    title: "7th Grade Lessons — NexStudents",
    desc: "Every 7th grade lesson, worked through on screen.",
    crumb: '<a href="/grade-7/">7th Grade</a> &rsaquo; Lessons', h1: "7th Grade Lessons.",
    lead: "Each one opens straight away. The reading is read aloud with the words highlighted, and the questions send your student back into the text to find the answer rather than guess it.",
    count: gradeSwitch(7, "l"), body: gradeLessons(7) },

  { dir: "grade-7/worksheets", active: "gr",
    title: "7th Grade Worksheets — NexStudents",
    desc: "Every 7th grade printable worksheet and term packet.",
    crumb: '<a href="/grade-7/">7th Grade</a> &rsaquo; Worksheets', h1: "7th Grade Worksheets.",
    lead: "Printables and term packets for working on paper. Answer keys are always included free.",
    count: gradeSwitch(7, "w"), body: gradeSheets(7) },

  { dir: "grade-8", active: "gr",
    title: "8th Grade — NexStudents",
    desc: "Every 8th grade lesson and worksheet on NexStudents.",
    crumb: "8th Grade", h1: "8th Grade.",
    lead: "American history, the course usually taught the year before high school. Lessons are worked through on screen; worksheets get printed. Pick whichever you need.",
    body: gradeLanding(8) },

  { dir: "grade-8/lessons", active: "gr",
    title: "8th Grade Lessons — NexStudents",
    desc: "Every 8th grade lesson, worked through on screen.",
    crumb: '<a href="/grade-8/">8th Grade</a> &rsaquo; Lessons', h1: "8th Grade Lessons.",
    lead: "Each one opens straight away. The reading is read aloud with the words highlighted, and the questions send your student back into the text to find the answer rather than guess it.",
    count: gradeSwitch(8, "l"), body: gradeLessons(8) },

  { dir: "grade-8/worksheets", active: "gr",
    title: "8th Grade Worksheets — NexStudents",
    desc: "Every 8th grade printable worksheet and term packet.",
    crumb: '<a href="/grade-8/">8th Grade</a> &rsaquo; Worksheets', h1: "8th Grade Worksheets.",
    lead: "Printables and term packets for working on paper. Answer keys are always included free.",
    count: gradeSwitch(8, "w"), body: gradeSheets(8) },

  { dir: "english", active: "w",
    title: "English — NexStudents",
    desc: "Spelling, reading and writing worksheets you print and work on paper.",
    crumb: "English", h1: "English.",
    lead: "Spelling, book reports, comprehension and reading lists worth actually reading. The spelling test is blank on purpose, so it works with whatever list you are teaching from.",
    body: subjectLanding("English") },

  { dir: "english/lessons", active: "w",
    title: "English Lessons — NexStudents",
    desc: "English lessons worked through on screen.",
    crumb: '<a href="/english/">English</a> &rsaquo; Lessons', h1: "English Lessons.",
    lead: "Nothing on screen for English yet. The printables came first, because spelling and writing are worked on paper.",
    count: countLabel(bySubject("English").length, "lesson", "lessons") + " available", body: subjectLessons("English") },

  { dir: "english/worksheets", active: "w",
    title: "English Worksheets — NexStudents",
    desc: "Printable English worksheets, including a blank weekly spelling test.",
    crumb: '<a href="/english/">English</a> &rsaquo; Worksheets', h1: "English Worksheets.",
    lead: "Printables for working on paper. A blank sheet is one you print once a week and fill with your own words.",
    count: countLabel(sheetsBySubject("English").length, "sheet", "sheets") + " available", body: subjectSheets("English") },

  /* Science joined the shelf on 2026-08-30 with the first science worksheet.
     ⚠️ These three are HAND-LISTED, like every other subject in this block -
     flipping `live` in nav.js is not enough on its own, and the link checker
     is what catches the difference. */
  { dir: "science", active: "w",
    title: "Science — NexStudents",
    desc: "Science worksheets and lessons you can work through at home.",
    crumb: "Science", h1: "Science.",
    lead: "Forces, motion and how things actually work, written so a student can follow it without a lab full of equipment. Worksheets get printed; the answer key is always included.",
    body: subjectLanding("Science") },

  { dir: "science/lessons", active: "w",
    title: "Science Lessons — NexStudents",
    desc: "Science lessons worked through on screen.",
    crumb: '<a href="/science/">Science</a> &rsaquo; Lessons', h1: "Science Lessons.",
    lead: "Nothing on screen for science yet. The printables came first.",
    count: countLabel(bySubject("Science").length, "lesson", "lessons") + " available", body: subjectLessons("Science") },

  { dir: "science/worksheets", active: "w",
    title: "Science Worksheets — NexStudents",
    desc: "Printable science worksheets with answer keys included.",
    crumb: '<a href="/science/">Science</a> &rsaquo; Worksheets', h1: "Science Worksheets.",
    lead: "Printables for working on paper. Read the passage, then answer &mdash; no equipment needed. Answer keys are always included free.",
    count: countLabel(sheetsBySubject("Science").length, "sheet", "sheets") + " available", body: subjectSheets("Science") },

  { dir: "history", active: "w",
    title: "History — NexStudents",
    desc: "History lessons and worksheets, worked through on screen.",
    crumb: "History", h1: "History.",
    lead: "American and Biblical history, taught properly rather than skipped over. Lessons are worked through on screen with the reading built in; worksheets get printed.",
    body: subjectLanding("History") },

  { dir: "history/lessons", active: "w",
    title: "History Lessons — NexStudents",
    desc: "Every history lesson on NexStudents, worked through on screen.",
    crumb: '<a href="/history/">History</a> &rsaquo; Lessons', h1: "History Lessons.",
    lead: "Each one opens straight away. The reading is read aloud with the words highlighted, and the questions send your student back into the text to find the answer rather than guess it.",
    count: countLabel(bySubject("History").length, "lesson", "lessons") + " available", body: subjectLessons("History") },

  { dir: "history/worksheets", active: "w",
    title: "History Worksheets — NexStudents",
    desc: "Printable history worksheets and term packets.",
    crumb: '<a href="/history/">History</a> &rsaquo; Worksheets', h1: "History Worksheets.",
    lead: "Printables and term packets for working on paper. Answer keys are always included free.",
    count: countLabel(sheetsBySubject("History").length, "sheet", "sheets") + " available", body: subjectSheets("History") },

  { dir: "maths", active: "w",
    title: "Maths — NexStudents",
    desc: "Maths lessons and worksheets, worked through on screen.",
    crumb: "Maths", h1: "Maths.",
    lead: "Practice that teaches, without punishing a student for getting things wrong. Lessons are worked through on screen with the explanation read aloud; worksheets get printed.",
    body: subjectLanding("Maths") },

  { dir: "maths/lessons", active: "w",
    title: "Maths Lessons — NexStudents",
    desc: "Every maths lesson on NexStudents, worked through on screen.",
    crumb: '<a href="/maths/">Maths</a> &rsaquo; Lessons', h1: "Maths Lessons.",
    lead: "Each one opens straight away. The method is read aloud one step at a time, with a full worked example, and the questions send your student back into the steps rather than leaving them to guess.",
    count: countLabel(bySubject("Maths").length, "lesson", "lessons") + " available", body: subjectLessons("Maths") },

  { dir: "maths/worksheets", active: "w",
    title: "Maths Worksheets — NexStudents",
    desc: "Printable maths worksheets and practice sets.",
    crumb: '<a href="/maths/">Maths</a> &rsaquo; Worksheets', h1: "Maths Worksheets.",
    lead: "Printables and practice sets for working on paper. Answer keys are always included free.",
    count: countLabel(sheetsBySubject("Maths").length, "sheet", "sheets") + " available", body: subjectSheets("Maths") },

  /* Three new top-level pages, 2026-08-26. Real pages from the start, even
     while two of them are empty, because a nav link to nowhere is worse than
     an honest empty page. */
  { dir: "resources", active: "r",
    title: "Resources — NexStudents",
    desc: "The books, tools and supplies we actually use for homeschooling.",
    crumb: "Resources", h1: "What We Actually Use.",
    lead: "Books, tools and supplies from our own shelf, not a list copied off somebody else's blog. Every entry says why it earned a place, because a list with no reasoning on it is just a list. Worksheets and lessons are not here; those live under each grade.",
    body: resourcesIndex() },

  { dir: "about", active: "a",
    title: "About — NexStudents",
    desc: "Who makes NexStudents, and why.",
    crumb: "About", h1: "About NexStudents.",
    lead: "A homeschool family building the resources it needed and could not find, then leaving them up for everyone else.",
    body: empty("This page is being written.") },

  { dir: "contact", active: "ct", pclass: "termshead",
    title: "Contact — NexStudents",
    desc: "How to reach NexStudents.",
    crumb: "", h1: "Get in Touch.",
    lead: "Questions about a worksheet, a broken link, or something you would like built. We read everything.",
    body: contactBody() },

  /* ── TERMS OF USE ──────────────────────────────────────────────────────
     Paul, 2026-09-02: "we might need to add a terms and service about these
     [worksheets] and lessons.. like they can use them personally but they
     can't copy them and distribute them as their own."

     🚨 THIS IS NOT LEGAL ADVICE AND THE PAGE DOES NOT PRETEND TO BE. It is
     the ordinary licence printable sites use, written plainly. If real money
     or a real dispute ever turns up, a lawyer reads it before it is relied on.

     ⚠️ WRITTEN TO BE TRUE OF THE SITE AS IT IS TODAY. It does not promise
     accounts, refunds, uptime or a purchase history, because none of those
     exist yet (ROADMAP 23-25). When paid downloads ship, this page needs a
     purchase and refund section - not before, or it makes a claim the site
     cannot keep. Same rule as the unsafe-claims list in BEHAVIOR.md. */
  { dir: "terms", active: "", noindex: false, pclass: "termshead",
    title: "Terms of Use — NexStudents",
    desc: "What you may and may not do with NexStudents worksheets and lessons. Free to use with your own students; not to redistribute or resell.",
    crumb: "", h1: "Terms of Use.",
    lead: "Welcome to NexStudents",
    body: termsBody() },

  /* Paired with /terms/. Same head treatment so the two read as a set. */
  { dir: "privacy", active: "", pclass: "termshead",
    title: "Privacy Policy — NexStudents",
    desc: "What NexStudents collects, why, and how parents can request deletion. No accounts, no payments, nothing sold.",
    crumb: "", h1: "Privacy Policy.",
    lead: "NexStudents is built for families and educators, so we believe privacy should be simple and easy to understand.",
    body: privacyBody() },

  /* Third of the legal set. Same head treatment as /terms/ and /privacy/ so the
     three read as one group. ⚠️ Nothing is sold yet, so every section here
     except Affiliate Links describes a future checkout - see the note above
     refundBody(). Paul asked for it now rather than at launch: a policy written
     under pressure after the first refund request is a worse policy. */
  { dir: "refund", active: "", pclass: "termshead",
    title: "Refund Policy — NexStudents",
    desc: "How refunds work on NexStudents. Digital downloads only, a 30-day window, and what happens with donations and affiliate purchases.",
    crumb: "", h1: "Refund Policy.",
    lead: "We want you to feel comfortable purchasing from NexStudents.",
    body: refundBody() },

  { dir: "for-parents", active: "p",
    title: "For Parents — NexStudents",
    desc: "Placement exams and planning tools for the parent doing the teaching.",
    crumb: "For Parents", h1: "Not sure which grade to start at?",
    lead: "A placement exam, taken online, marked the moment your student finishes. Results appear on screen and land in your inbox. One short version that costs nothing, one fuller version that covers every subject.",
    body: parents() },
];

/* ── THE WHOLE GRID: every grade x every subject, lessons and worksheets ────
   Paul, 2026-08-29: "build a lesson page and a worksheet page you can drop in
   for each grade then build each page for that so it is ready to work."

   So all nine grades get all four subjects, both shelves, whether or not there
   is anything in them yet — 72 pages, most of them honestly empty for now. A
   new lesson needs no build change at all: add it to its subject's data file
   and its shelf is already standing, waiting for it.

   ⚠️ This deliberately goes wider than "depth over breadth" in BEHAVIOR.md.
   That rule is about what is ADVERTISED, and it still holds: LIVE_GRADES gates
   the grade picker and the nav, so an empty year is reachable but not sold.
   Paul's call, made with the trade-off in front of him.

   Grades 1, 2, 4 and 5 have no hand-written landing page, so one is generated
   for them here too — without it their subject shelves would have breadcrumbs
   pointing at a 404. */
const HAND_WRITTEN_GRADES = new Set(pages.map(p => p.dir).filter(d => /^grade-[^/]+$/.test(d)));
const LIVE_NOW = liveGrades();

for (const g of ALL_GRADES) {
  const gs = gslug(g);
  const live = LIVE_NOW.some(x => sameGrade(x, g));
  const from = pages.length;   /* everything pushed below belongs to this grade */

  if (!HAND_WRITTEN_GRADES.has("grade-" + gs)) {
    pages.push({
      dir: "grade-" + gs, active: "gr",
      title: gradeLabel(g) + " — NexStudents",
      desc: gradeLabel(g) + " lessons and printables, organised by subject.",
      crumb: gradeLabel(g), h1: gradeLabel(g) + ".",
      lead: "Nothing is built for this year yet. The shelves below are ready and fill up as each subject goes in — pick a subject to see where it stands.",
      body: gradeLanding(g) });

    /* The landing also offers "the whole year at once", which points at the
       all-subject shelves. The hand-written grades have those already; a
       generated grade needs them or its own landing page links at a 404.
       Caught by tools/check-links.js on the first run, which is the entire
       reason that checker exists. */
    pages.push({
      dir: "grade-" + gs + "/lessons", active: "gr",
      title: gradeLabel(g) + " Lessons — NexStudents",
      desc: gradeLabel(g) + " lessons, worked through on screen.",
      crumb: '<a href="/grade-' + gs + '/">' + gradeLabel(g) + "</a> &rsaquo; Lessons",
      h1: gradeLabel(g) + " Lessons.",
      lead: "Nothing on screen for this year yet. Pick a subject from the year's page to see where each one stands.",
      count: gradeSwitch(g, "l"), body: gradeLessons(g) });

    pages.push({
      dir: "grade-" + gs + "/worksheets", active: "gr",
      title: gradeLabel(g) + " Worksheets — NexStudents",
      desc: gradeLabel(g) + " printables, with answer keys included free.",
      crumb: '<a href="/grade-' + gs + '/">' + gradeLabel(g) + "</a> &rsaquo; Worksheets",
      h1: gradeLabel(g) + " Worksheets.",
      lead: "No printables for this year yet. They go up as each unit is finished.",
      count: gradeSwitch(g, "w"), body: gradeSheets(g) });
  }

  for (const s of SUBJECTS) {
    const sub = keyOf(s);
    const base = "grade-" + gs + "/" + s.slug;
    const crumb = '<a href="/grade-' + gs + '/">' + gradeLabel(g) + "</a> &rsaquo; " + s.name;

    pages.push({
      dir: base + "/lessons", active: "gr",
      title: gradeLabel(g) + " " + s.name + " Lessons — NexStudents",
      desc: gradeLabel(g) + " " + s.name.toLowerCase() + " lessons, worked through on screen.",
      crumb: crumb + " &rsaquo; Lessons",
      h1: gradeLabel(g) + " " + s.name + " Lessons.",
      lead: s.blurb,
      body: gradeSubjectLessons(g, sub) });

    pages.push({
      dir: base + "/worksheets", active: "gr",
      title: gradeLabel(g) + " " + s.name + " Worksheets — NexStudents",
      desc: gradeLabel(g) + " " + s.name.toLowerCase() + " printables, with answer keys included free.",
      crumb: crumb + " &rsaquo; Worksheets",
      h1: gradeLabel(g) + " " + s.name + " Worksheets.",
      lead: s.blurb,
      body: gradeSubjectSheets(g, sub) });
  }

  /* ⚠️ The noindex that used to go on an empty year is GONE. Once every grade
     reads Live on the picker (Paul, 2026-08-29), telling search engines to
     ignore half of them contradicts what the site says about itself. Paul,
     the same day: "i dont think this matters because i think we are barely
     getting traffic anyway right now. what we need is to keep building more
     resources." Fair. `live` and `from` stay in scope because the loop still
     reads them; nothing is gated on them now. */
  void live; void from;
}

/* ── EVERY REMAINING MENU ITEM GETS A REAL PAGE ────────────────────────────
   Paul, 2026-08-29: "i want this the entire site claude. even the resources,
   about, for parents, games, comics, blog" and "stop resisting."

   Nothing in the nav, the mega menu or the drawer is a dead label any more.
   Where the thing is not built, the page says what it will be and why it is
   worth waiting for, which is a real answer. BEHAVIOR.md already said it: "A
   nav link to nowhere is worse than an empty page."

   A game that is not built does NOT claim to be playable. It gets a page that
   explains the game and what it drills, so a parent can see whether it is the
   thing their student needs. */
const soonPage = (heading, what, why, when) => `<div class="band"><div class="wrap">
  ${group(heading, what, `<div class="tile" style="display:block;padding:26px">
    <p style="margin:0 0 14px;line-height:1.7;max-width:62ch">${why}</p>
    <p style="margin:0;color:var(--dim);font-size:.92rem;max-width:62ch">${when}</p>
  </div>`)}
</div></div>`;


const SOON_PAGES = [
  { dir: "games/remainder-race", active: "g",
    title: "Remainder Race — NexStudents",
    desc: "A division game where the remainder is the point, not the mistake.",
    crumb: '<a href="/games/">Games</a> &rsaquo; Remainder Race',
    h1: "Remainder Race.",
    lead: "Not built yet. Here is what it will be.",
    body: soonPage("What This Game Is For",
      "Division where the remainder is the answer, not an error.",
      "Long Division on this site deliberately has no remainders, because \"how many 3s fit into 2\" is its own idea and belongs in its own lesson. This game is that lesson made playable: divide under a clock and the leftover is what you are racing to name. A student who has only ever seen clean division freezes the first time one does not come out even.",
      "It follows the Long Division lesson. That lesson is live now.") },

  { dir: "games/fraction-match", active: "g",
    title: "Fraction Match — NexStudents",
    desc: "Match fractions that look different and are worth the same.",
    crumb: '<a href="/games/">Games</a> &rsaquo; Fraction Match',
    h1: "Fraction Match.",
    lead: "Not built yet. Here is what it will be.",
    body: soonPage("What This Game Is For",
      "Seeing that 2/4, 3/6 and 1/2 are the same number wearing different clothes.",
      "Equivalence is the single idea the rest of fractions rests on. Adding, subtracting and comparing all quietly assume a student can see that two different-looking fractions are the same size. Matching them by sight, again and again, builds that faster than a rule about multiplying top and bottom ever does.",
      "After the maths shelf covers fractions.") },

  { dir: "games/spelling-ladder", active: "g",
    title: "Spelling Ladder — NexStudents",
    desc: "Climb a word one letter at a time, from the weekly spelling list.",
    crumb: '<a href="/games/">Games</a> &rsaquo; Spelling Ladder',
    h1: "Spelling Ladder.",
    lead: "Not built yet. Here is what it will be.",
    body: soonPage("What This Game Is For",
      "Practising the week's actual spelling words instead of a generic list.",
      "The 36-week phonics list already lives in the site's own data, so this game draws from the words a student is genuinely being tested on that week rather than words somebody else chose. Every word on that list is decodable by rule — no sight words — so climbing the ladder rewards knowing the pattern, not remembering a shape.",
      "Cheapest of the games to build, because the word list already exists.") },

  { dir: "games/comma-catcher", active: "g",
    title: "Comma Catcher — NexStudents",
    desc: "Find the missing comma before the sentence changes meaning.",
    crumb: '<a href="/games/">Games</a> &rsaquo; Comma Catcher',
    h1: "Comma Catcher.",
    lead: "Not built yet. Here is what it will be.",
    body: soonPage("What This Game Is For",
      "Comma rules taught by consequence rather than by list.",
      "Nobody remembers a list of eight comma rules. What sticks is watching a sentence change meaning when the comma moves. So the game shows a sentence that says the wrong thing, and the job is to fix it with one mark — the rule is learned from what went wrong, which is how the good grammar books did it.",
      "After the parts of speech run, since it assumes clauses.") },

  { dir: "games/sort-the-mixture", active: "g",
    title: "Sort the Mixture — NexStudents",
    desc: "Separate a mixture the way you actually would on a bench.",
    crumb: '<a href="/games/">Games</a> &rsaquo; Sort the Mixture',
    h1: "Sort the Mixture.",
    lead: "Not built yet. Here is what it will be.",
    body: soonPage("What This Game Is For",
      "Choosing the right way to separate things, and seeing why the wrong one fails.",
      "Filtering, evaporating, using a magnet, letting something settle: which one works depends on what is actually different about the two substances. Picking wrong and watching nothing separate teaches the property that matters far better than a labelled diagram does.",
      "Waiting on the science shelf, which has nothing on it yet.") },

  { dir: "comics/more-strips", active: "c",
    title: "More Strips — NexStudents",
    desc: "What is coming after Donut Boy.",
    crumb: '<a href="/comics/">Comics</a> &rsaquo; More Strips',
    h1: "More Strips.",
    lead: "Donut Boy has eight episodes. Here is what comes next.",
    body: soonPage("What Is Being Drawn",
      "A second series, and more Donut Boy.",
      "Comics are on this site for a plain reason: they are a reason to come back, and a student who returns reads more. Donut Boy runs to eight episodes with Kolten as the hero, and it keeps going. A second series has not been drawn yet.",
      "New episodes go up as they are finished. Nothing to download, all read on the site.") },

  { dir: "resources/books-and-readers", active: "r",
    title: "Books and Readers — NexStudents",
    desc: "The books we actually read, and the older readers we teach from.",
    crumb: '<a href="/resources/">Resources</a> &rsaquo; Books and Readers',
    h1: "Books and Readers.",
    lead: "What we actually read here, including the older books that teach better than most of what is sold new. Every one of these is free.",
    body: resourceList("books-and-readers",
      "The first books are being written up.") },

  { dir: "resources/tools-and-supplies", active: "r",
    title: "Tools and Supplies — NexStudents",
    desc: "The paper, pencils and gear we actually use.",
    crumb: '<a href="/resources/">Resources</a> &rsaquo; Tools and Supplies',
    h1: "Tools and Supplies.",
    lead: "The unglamorous half of homeschooling: what is actually in use here, including what we pay for.",
    body: resourceList("tools-and-supplies",
      "The first tools are being written up.") },

  { dir: "resources/science-experiments", active: "r",
    title: "Science Experiments — NexStudents",
    desc: "Experiments you can run at home with what is in the kitchen.",
    crumb: '<a href="/resources/">Resources</a> &rsaquo; Science Experiments',
    h1: "Science Experiments.",
    lead: "Experiments that run on what is already in the kitchen, with a record sheet for each.",
    body: soonPage("Being Written Up",
      "Run it, watch it, write down what happened.",
      "Science on a screen is not science. Each of these will be an experiment you can actually run at home, with a video walkthrough and a record sheet to write the observation on, because writing down what you saw is the part that turns a trick into a lesson.",
      "Several are already run here and not yet written up: static electricity, surface tension, centre of mass.") },

  { dir: "resources/placement-tests", active: "r",
    title: "Free Placement Tests — NexStudents",
    desc: "Free placement tests for maths and reading, and how to read the results honestly.",
    crumb: '<a href="/resources/">Resources</a> &rsaquo; Placement Tests',
    h1: "Placement Tests.",
    lead: "Find out where your student actually is before you buy a year of the wrong thing. All of these are free, and none of them is ours.",
    body: resourceList("placement-tests",
      "The placement tests are being written up.") },

  { dir: "resources/reading-lists", active: "r",
    title: "Reading Lists — NexStudents",
    desc: "Reading lists by grade, with a reason attached to every book.",
    crumb: '<a href="/resources/">Resources</a> &rsaquo; Reading Lists',
    h1: "Reading Lists.",
    lead: "By grade, and honest about level rather than flattering about it.",
    body: soonPage("Being Written Up",
      "Lists by year, with the real reading level stated.",
      "A list that flatters a student's level is worse than no list, because it ends with a book abandoned at chapter two. These will say the actual level, and offer something at it as well as something to reach for.",
      "Being written up now.") },

  /* The two nav icons. Neither the accounts backend (ROADMAP 6) nor the cart
     (ROADMAP 7) exists, so these say where things stand instead of being
     buttons that ignore you. */
  { dir: "account", active: "p",
    title: "Sign In — NexStudents",
    desc: "Accounts are being built. Here is what one will do.",
    crumb: "Sign In", h1: "Sign In.",
    lead: "There are no accounts yet. Here is what one will be for, and why it is taking a while.",
    body: soonPage("What an Account Will Do",
      "Carry progress between devices, and remember what you already bought.",
      "Right now progress is saved in the browser you are using, which means it does not follow a student from the PC to the tablet, and there is no record of what a family has already paid for. An account fixes both. It is the first part of this site that needs a real server, which is why it is not a weekend job.",
      "Accounts will be parent-owned, with students added underneath. A children's site holding children's own email addresses is a legal problem we are not going to create.") },

  { dir: "cart", active: "p",
    title: "Cart — NexStudents",
    desc: "The cart is being built. Most of the site is free in the meantime.",
    crumb: "Cart", h1: "Cart.",
    lead: "Nothing in it, because there is no cart yet.",
    body: soonPage("What the Shop Will Be",
      "One payment, lifetime access. No subscription.",
      "Most of this site is free and stays free. What gets paid for is the planning: a subject and a quarter, sequenced, with the pacing worked out. When the shop opens it will be a single payment that unlocks what you bought for good. There will be no subscription — that is a decision, not a placeholder.",
      "Answer keys are always included free with the sheet, and are never sold separately.") },

  { dir: "blog", active: "r",
    title: "Blog — NexStudents",
    desc: "Notes on teaching this material, from someone doing it.",
    crumb: '<a href="/resources/">Resources</a> &rsaquo; Blog',
    h1: "Blog.",
    lead: "Notes from actually teaching this, not advice from someone who never has.",
    body: soonPage("Nothing Posted Yet",
      "Written while teaching, not after.",
      "The first pieces are already obvious: why the workbooks stopped explaining things and what to do about it, what a 1990s teacher's edition had on every page that a modern one does not, and what actually moved the needle on reading. Written from a house where this is happening, not from a content calendar.",
      "First post coming.") },
];
for (const p of SOON_PAGES) pages.push(p);

/* 🚨 THE GUARD THAT KEEPS THE PROMISE HONEST.
   Every subject box on a grade page states a count and a destination. This
   walks the generated pages and fails the build if a box links somewhere that
   was never generated. Without it, the exact bug Paul found on 2026-08-29 —
   English on the 7th grade shelf opening a page full of Rome — comes back the
   next time a subject or a grade is added. */
(function checkSubjectShelves(){
  const built = new Set(pages.map(p => "/" + p.dir + "/"));
  const missing = [];
  for (const g of liveGrades()) {
    for (const s of SUBJECTS) {
      if (!s.live) continue;
      const sub = keyOf(s);
      if (lessonsIn(g, sub).length) {
        const href = "/grade-" + gslug(g) + "/" + s.slug + "/lessons/";
        if (!built.has(href)) missing.push(href);
      }
      if (sheetsIn(g, sub).length) {
        const href = "/grade-" + gslug(g) + "/" + s.slug + "/worksheets/";
        if (!built.has(href)) missing.push(href);
      }
    }
  }
  if (missing.length) {
    console.error("FAIL: a grade page links at pages that were never built:\n  " + missing.join("\n  "));
    process.exit(1);
  }
})();

/* nav.js mirrors the live-grade list for the dropdown. If the registries move
   and that mirror is not updated, the nav would quietly point at a dead grade.
   Fail the build instead. */
(function checkLiveGrades(){
  const derived = liveGrades().join(",");
  if (derived !== LIVE_GRADES.join(",")) {
    console.error("FAIL: LIVE_GRADES in tools/nav.js says [" + LIVE_GRADES.join(",") +
      "] but the registries derive [" + derived + "]. Update nav.js.");
    process.exit(1);
  }
})();

const written = [];
for (const p of pages) {
  const dir = path.join(ROOT, p.dir);
  fs.mkdirSync(dir, { recursive: true });
  const html = shell(p);
  if (html.includes("undefined")) { console.error("FAIL: undefined in " + p.dir); process.exit(1); }
  if (/href="#"/.test(html)) { console.error("FAIL: dead link in " + p.dir); process.exit(1); }
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  written.push(p.dir);
}
/* The home page is hand-written except for its grade picker, which is spliced
   from liveGrades() so it matches /grades/. Paul, 2026-08-26: he could not
   navigate from home because the picker still showed 7 as the only live year. */
const homeFile = path.join(ROOT, "index.html");
const home = fs.readFileSync(homeFile, "utf8");
const OPEN = '<div class="grades rv d1">', CLOSE = "</div>";
const a = home.indexOf(OPEN);
if (a < 0) { console.error("FAIL: home grade picker not found"); process.exit(1); }
const b = home.indexOf(CLOSE, a + OPEN.length);
if (b < 0) { console.error("FAIL: home grade picker not closed"); process.exit(1); }
const picker = OPEN + "\n    " + gradeCells(liveGrades()) + "\n  ";
let newHome = home.slice(0, a) + picker + home.slice(b);

/* The home subject tiles were hand-kept too, and had gone stale the same way:
   English and Maths both said "Soon" long after they went live, and it still
   said ELA. Generated from SUBJECTS now, in the same fixed order. */
const S_OPEN = '<div class="subs">', S_CLOSE = "\n</div>";
const sa = newHome.indexOf(S_OPEN);
if (sa < 0) { console.error("FAIL: home subject tiles not found"); process.exit(1); }
const sb = newHome.indexOf(S_CLOSE, sa + S_OPEN.length);
if (sb < 0) { console.error("FAIL: home subject tiles not closed"); process.exit(1); }
const tiles = SUBJECTS.map((s, i) =>
  `  <a class="sub-t is-${s.live ? "live" : "soon"}" href="${s.live ? "/" + s.slug + "/" : "/subjects/"}">` +
  `<n>${String(i + 1).padStart(2, "0")} <i>${s.live ? "Live" : "Soon"}</i></n><div><h3>${s.name}</h3>\n` +
  `    <p>${s.blurb}</p></div></a>`
).join("\n");
newHome = newHome.slice(0, sa) + S_OPEN + "\n" + tiles + newHome.slice(sb);

/* The home page kept its OWN copy of the nav, hand-written, so it still had
   Worksheets in the tab bar and no Home, About or Contact. Paul, 2026-08-26:
   "so the homepage still is set up for the old layout not the new one."
   Spliced from nav.js now, like the grade picker and the subject tiles. */
const N_OPEN = '<div class="scrim" id="scrim"></div>', N_CLOSE = "</nav>";
const na = newHome.indexOf(N_OPEN);
if (na < 0) { console.error("FAIL: home nav not found"); process.exit(1); }
const nb = newHome.indexOf(N_CLOSE, na);
if (nb < 0) { console.error("FAIL: home nav not closed"); process.exit(1); }
newHome = newHome.slice(0, na) + navMarkup("h") + newHome.slice(nb + N_CLOSE.length);

/* ⚠️ THE OLD PARTIAL FOOTER SPLICE WAS DELETED HERE, 2026-09-02. It rewrote
   only the Resources and Subjects columns of the home footer and left the rest
   hand-written - which is why the legal pages never appeared there. The WHOLE
   footer is replaced further down from footerMarkup(); patching two of its
   columns from a second place would just be a new way to drift. It also still
   sent Science to /subjects/, which stopped being true when science went live
   on 2026-08-30. */
newHome = newHome
  .split('<li><a href="mailto:contact@nexedgestudios.com">Contact</a></li>')
  .join('<li><a href="/contact/">Contact</a></li>\n      <li><a href="/about/">About</a></li>');

/* Day and night on the hand-written home page. It needs two things the shell
   gets for free: the boot script in <head>, so a reader who chose light never
   sees the dark page flash first, and the toggle behaviour, since the home
   carries its own nav script rather than the shared one. */
/* 🚨 The home page's cache-buster was hand-written and had gone stale, so
   browsers kept serving the OLD ns.css. That is how day/night shipped working
   on every generated page and dead on the home page: the attribute flipped,
   the stylesheet that knew what to do with it was months out of date. The
   generator owns this now. */
newHome = newHome.replace(/(\/assets\/ns\.css\?v=)[a-f0-9]+/g, "$1" + CSS_V);

{
  const cssLink = newHome.match(/<link rel="stylesheet" href="\/assets\/ns\.css[^>]*>/);
  if (!cssLink) { console.error("FAIL: home has no ns.css link to anchor the mode boot"); process.exit(1); }
  if (!newHome.includes('localStorage.getItem("ns:mode")')) {
    newHome = newHome.replace(cssLink[0], cssLink[0] + "\n" + modeBoot());
  }
  /* The favicon too. The home page is hand-written, so every <head> addition
     has to be spliced in here as well as put in the shell - the mode boot was
     missed the same way once already. */
  if (!newHome.includes("apple-touch-icon")) {
    newHome = newHome.replace(cssLink[0], faviconTags() + "\n" + cssLink[0]);
  }

  /* 🚨 The announcement used to be dismissed with a bare .remove(), so it came
     straight back on the next page load - and clicking the logo IS a page load.
     Paul, 2026-08-27: "when you press the logo it shows 7th grade is live now
     ... that should take you home." The choice is remembered now. */
  newHome = newHome.replace(
    /<button aria-label="Dismiss"[^>]*>&times;<\/button>/,
    '<button aria-label="Dismiss" data-ann-close>&times;</button>'
  );
  /* THE RAIL. Sentinel-delimited and REPLACED, never appended - the nav script
     taught us that an append-if-missing splice leaves the broken copy in place
     and looks like the fix did not work. */
  const R_OPEN = "<!-- ns:rail -->", R_END = "<!-- /ns:rail -->";
  const railBlock = R_OPEN + "\n    " + railCards() + "\n  " + R_END;
  if (newHome.includes(R_OPEN)) {
    newHome = newHome.replace(new RegExp(R_OPEN + "[\\s\\S]*?" + R_END), railBlock);
  } else {
    newHome = newHome.replace(/(<div class="rail rv d1" id="rail">)[\s\S]*?(\n  <\/div>)/,
      "$1\n  " + railBlock + "$2");
  }

  /* 🚨 THE GAMES RAIL WAS HAND-WRITTEN AND HAD GONE STALE, like everything
     else on this page that was. It advertised six games, listed "Place the
     state" — a name that has not existed since the game was renamed Show Me
     The States — and did not mention EITHER of the two games that are actually
     playable. Every card linked at /games/ rather than at a game.

     Generated from the GAMES registry now, playable ones first, so the home
     page cannot promise something the site does not have. That is the fifth
     hand-kept block on this page found stale. */
  const G_OPEN = "<!-- ns:games -->", G_END = "<!-- /ns:games -->";
  /* Playable first, so the two real games are what a visitor meets. Every card
     links at its own game, never at the shelf. */
  const gameCards = [...GAMES].sort((a, b) => (a.soon ? 1 : 0) - (b.soon ? 1 : 0))
    .map(g => '<a class="game" href="' + g.href + '">' +
      '<div class="gart"><u>' + (g.soon ? "Soon" : "Play") + "</u></div>" +
      '<div class="gbody"><em>' + g.subject + "</em><h4>" + g.title + "</h4>" +
      "<p>" + (g.blurb || "") + "</p></div></a>")
    .join("\n    ");
  if (newHome.includes(G_OPEN)) {
    newHome = newHome.replace(new RegExp(G_OPEN + "[\\s\\S]*?" + G_END),
      G_OPEN + "\n    " + gameCards + "\n    " + G_END);
  } else {
    console.error("FAIL: the home page lost its <!-- ns:games --> markers.");
    process.exit(1);
  }

  const F_OPEN = "<!-- ns:filters -->", F_END = "<!-- /ns:filters -->";
  const filterBlock = F_OPEN + "\n    " + railFilters() + "\n  " + F_END;
  if (newHome.includes(F_OPEN)) {
    newHome = newHome.replace(new RegExp(F_OPEN + "[\\s\\S]*?" + F_END), filterBlock);
  } else {
    newHome = newHome.replace(/(<div class="filters rv" id="filters">)[\s\S]*?(\n  <\/div>)/,
      "$1\n  " + filterBlock + "$2");
  }

  /* GUARD: the rail must hold only real, linked items. A card with no href is
     how the fictional shelf survived for months. */
  const cards = (newHome.match(/class="res"/g) || []).length;
  const linked = (newHome.match(/<a class="res" href="\//g) || []).length;
  if (!cards || cards !== linked) {
    console.error("FAIL: home rail has " + cards + " cards but " + linked + " links");
    process.exit(1);
  }

  if (!newHome.includes("ns:ann")) {
    newHome = newHome.replace(/<\/body>/,
      "<scr" + "ipt>(function(){var a=document.getElementById('ann');if(!a)return;" +
      "try{if(localStorage.getItem('ns:ann')==='off'){a.remove();return;}}catch(e){}" +
      "var b=a.querySelector('[data-ann-close]');if(b)b.addEventListener('click',function(){" +
      "try{localStorage.setItem('ns:ann','off');}catch(e){}a.remove();});})();</scr" + "ipt>\n</body>");
  }
  if (!newHome.includes("ns:ann")) {
    console.error("FAIL: the announcement dismissal script did not land");
    process.exit(1);
  }

  /* 🚨 The home page needs the WHOLE nav script, not a slice of it.
     It used to get only the day/night part lifted out, which is why the home
     page had the menu markup but none of its behaviour: the drawer chevrons
     did nothing and the mega panel never opened, while every generated page
     worked. Found 2026-08-26 by clicking Grades on the live home page and
     getting `nsOpenSub is not defined`.

     Appending it whole is safe: the home's own script assigns burger/scrim
     handlers with `onclick =`, so this simply replaces them with the same
     behaviour rather than double-binding. */
  /* 🚨 REPLACE, never "append if missing".
     The first version only appended when nsOpenSub was absent. Once a copy
     of the script was in index.html, every later build saw it as present and
     left it alone - so a STALE, broken copy sat there through several fixes
     while the generated pages were fine. The home page is hand-maintained, so
     anything injected into it has to be delimited and rewritten every time. */
  const S_OPEN = "<!-- ns:nav-script -->", S_END = "<!-- /ns:nav-script -->";
  const oldA = newHome.indexOf(S_OPEN);
  if (oldA >= 0) {
    const oldB = newHome.indexOf(S_END, oldA);
    if (oldB < 0) { console.error("FAIL: home nav script block not closed"); process.exit(1); }
    newHome = newHome.slice(0, oldA) + newHome.slice(oldB + S_END.length);
  }
  /* Sweep out any copy injected before the sentinels existed. Matched by the
     line the nav script always opens with, wrapped or not. */
  const stale = /<script>\s*(?:\(function\(\)\{)?\s*var burger=document[\s\S]*?<\/script>/g;
  newHome = newHome.replace(stale, "");

  /* 🚨 And the FIRST attempt, which spliced only the day/night part INTO the
     home page's own script. That copy survived every later sweep because it
     does not begin with `var burger`, so the page carried TWO toggle handlers.
     One click fired both - dark to light and straight back to dark - which
     looked exactly like a dead button. Paul, 2026-08-27: "night mode and light
     mode isnt working i press the button and its not changing."
     Removing it here means a rebuild always leaves exactly one. */
  newHome = newHome.replace(/\n?\/\* Day and night\. Default is dark[\s\S]*?(?=<\/script>)/, "\n");

  newHome = newHome.replace(/<\/body>/,
    S_OPEN + "\n" + navScript() + "\n" + S_END + "\n</body>");

  for (const must of ["nsPaintMode", "nsOpenSub", "megapanel", S_OPEN]) {
    if (!newHome.includes(must)) {
      console.error("FAIL: the home page is missing " + must);
      process.exit(1);
    }
  }
  if ((newHome.match(/nsOpenSub/g) || []).length > 4) {
    console.error("FAIL: the home page has more than one copy of the nav script");
    process.exit(1);
  }
}

/* "Resources" now means the recommendations page, so the shelf CTA that still
   pointed at the worksheet shelf had to stop calling itself that. */
newHome = newHome.split('<a class="btn rv d2" href="/worksheets/">Browse all resources</a>')
  .join('<a class="btn rv d2" href="/worksheets/">Browse all worksheets</a>');

/* The verification tag on the home page itself. Google checks the URL the
   property was created with, so the home page is the one that must carry it. */
{
  const VIEWPORT = '<meta name="viewport" content="width=device-width, initial-scale=1">';
  const GSC = '<!-- DO NOT REMOVE: Google Search Console verification. Google re-checks\n' +
              '     periodically and the property silently drops if this disappears. -->\n' +
              '<meta name="google-site-verification" content="bsZnURtv4LFARU3XuxGED8inYJB45arSOPHbTJSqgIQ">';
  if (!newHome.includes("google-site-verification")) {
    newHome = newHome.replace(VIEWPORT, VIEWPORT + "\n" + GSC);
  }
  if (!newHome.includes("google-site-verification")) {
    console.error("FAIL: could not place the Search Console tag on the home page");
    process.exit(1);
  }
}

/* 🚨 THE HOME FOOTER WAS THE LAST HAND-KEPT COPY, and it had gone stale the way
   every hand-kept copy on this page eventually does: it listed Contact and
   About but none of the three legal pages, so Terms, Privacy and Refund were
   reachable only from the drawer. Paul went looking in the footer, which is
   where a person looks for a policy, and found nothing. It is generated from
   footerMarkup() now, the same one every built page uses, so the two cannot
   disagree again.

   ⚠️ FAILS THE BUILD if the home has no footer to replace, rather than
   appending a second one. An append-if-missing splice leaves the broken copy
   in place and shows two footers - the exact mistake the nav splice above
   already made once. */
const F_OPEN = "<footer>", F_CLOSE = "</footer>";
const fa = newHome.indexOf(F_OPEN);
const fb = newHome.indexOf(F_CLOSE, fa + F_OPEN.length);
if (fa < 0 || fb < 0) { console.error("FAIL: home footer not found"); process.exit(1); }
if (newHome.indexOf(F_OPEN, fa + F_OPEN.length) >= 0) {
  console.error("FAIL: home has more than one footer"); process.exit(1);
}
newHome = newHome.slice(0, fa) + footerMarkup() + newHome.slice(fb + F_CLOSE.length);

/* Everything else on the hand-written home that still said ELA. */
newHome = newHome
  .split('data-f="ela">ELA<').join('data-f="ela">English<')
  .split("<em>ELA</em>").join("<em>English</em>")
  .split('<li><a href="/worksheets/">ELA</a></li>').join('<li><a href="/english/">English</a></li>')
  .split("across ELA, History, Science and Maths").join("across English, History, Maths and Science");
if (newHome !== home) fs.writeFileSync(homeFile, newHome, "utf8");

/* ELA became English on 2026-08-26. Anything already pointing at /ela/ - a
   bookmark, a search result, a printed worksheet footer - is redirected rather
   than 404'd. GitHub Pages has no redirect rules, so these are real pages. */
const REDIRECTS = [
  ["grades", "/#grades"],
  ["ela", "/english/"],
  ["ela/lessons", "/english/lessons/"],
  ["ela/worksheets", "/english/worksheets/"],
  ["worksheets/ela/weekly-spelling-test", "/worksheets/english/weekly-spelling-test/"],
  ["worksheets/ela/spelling-flashcards", "/worksheets/english/spelling-flashcards/"],
];
/* GitHub Pages serves /404.html for any path it does not have. Without one it
   shows its own generic page, which has no nav, so a bad link is a dead end.
   Built from the same shell, so it carries the drawer like everything else.
   noindex on purpose: a 404 must never be in the index. */
{
  const page = {
    dir: "", active: null,
    title: "Page not found — NexStudents",
    desc: "That page does not exist.",
    crumb: "Not found", h1: "That page is not here.",
    lead: "The link may be old, or something moved. Everything on the site is reachable from the menu, or start with a grade.",
    body: empty('Try <a href="/#grades">picking a grade</a>, or <a href="/">go back to the home page</a>.'),
  };
  let h = shell(page)
    .replace('<link rel="canonical" href="' + SITE + '//">',
             '<meta name="robots" content="noindex">');
  if (h.includes("canonical")) { console.error("FAIL: 404 kept a canonical"); process.exit(1); }
  fs.writeFileSync(path.join(ROOT, "404.html"), h, "utf8");
}

/* ── THE READING PLACEMENT EXAM ────────────────────────────────────────────
   🚨 THIS WAS THE LAST PAGE ON THE OLD CREAM STYLESHEET, and it was linked
   from 162 pages - the drawer, the For Parents sheet and, since 2026-09-02,
   the footer of every page on the site. So the most prominent outbound link
   we have went to the one page that looked like a different website. Paul,
   2026-09-02: "can you rebuild and replace the placement test exam".
   It is built from the same shell as everything else now: same nav, same
   drawer, same footer, same day/night switch, `ns.css` only.

   ⚠️ THE URL DOES NOT CHANGE. It stays /placement-exam.html rather than
   becoming /placement-exam/, because 162 pages point at it and a rename buys
   nothing. That is why this writes a ROOT FILE and fixes its own canonical,
   the same way the 404 above does.

   🚨 THE EXAM'S CSS, MARKUP AND JS LIVE IN tools/exam/ AND ARE READ FROM
   DISK, NOT PASTED INTO THIS FILE. exam.js contains SIXTEEN BACKTICKS - it
   builds its rows with template literals - and pasting it into a template
   literal here would close the string and kill the build on the next word.
   That trap has already cost this project two builds (progressScript, and
   build-worksheets.js on 2026-09-02). Reading the file sidesteps it entirely.

   ⚠️ THE EXAM LOGIC IS UNTOUCHED. The encoded item bank, the 3/3/3/3 answer
   spread, the scoring, the skill breakdown and the localStorage key are byte
   for byte what they were. Only the shell and the colour mapping changed -
   this is a re-skin, not a rewrite of a working assessment. */
{
  const dir = path.join(__dirname, "exam");
  const css = fs.readFileSync(path.join(dir, "exam.css"), "utf8");
  const screens = fs.readFileSync(path.join(dir, "screens.html"), "utf8");
  const js = fs.readFileSync(path.join(dir, "exam.js"), "utf8");

  /* Guards. Each one is a thing that would ship silently broken. */
  if (!/\.exam /.test(css)) {
    console.error("FAIL: exam.css is not scoped under .exam"); process.exit(1);
  }
  if (/var\(--(bg-2|bg-3|muted|accent|accent-2|max|gutter|good|warn|bad)\)/.test(css + js)) {
    console.error("FAIL: exam still references an old site.css token"); process.exit(1);
  }
  for (const id of ["s-intro", "s-test", "s-done", "qtext", "opts", "progbar", "skills", "misses"]) {
    if (!screens.includes('id="' + id + '"')) {
      console.error("FAIL: exam screens lost #" + id); process.exit(1);
    }
  }
  if (!/nexstudents\.placement\.readingB/.test(js)) {
    console.error("FAIL: exam lost its storage key"); process.exit(1);
  }

  const page = {
    dir: "", active: "p", pclass: "examhead",
    title: "Reading Comprehension — Short Exam | NexStudents",
    desc: "A free short reading comprehension exam, written at a grade 6 reading level. Marked instantly, with a breakdown by skill.",
    crumb: '<a href="/for-parents/">For Parents</a> &rsaquo; Reading Exam',
    h1: "Reading Comprehension: a short exam.",
    lead: "One passage, 12 questions, about 20 minutes. Written at a grade 6 reading level, and marked the moment you finish.",
    head: "\n<style>\n" + css + "</style>",
    body: '<div class="wrap examwrap"><div class="exam">\n' + screens + "</div></div>",
    script: "\n<script>\n" + js + "</scr" + "ipt>",
  };
  let h = shell(page).replace('<link rel="canonical" href="' + SITE + '//">',
                              '<link rel="canonical" href="' + SITE + '/placement-exam.html">');
  if (h.includes(SITE + "//")) { console.error("FAIL: exam canonical not fixed"); process.exit(1); }
  fs.writeFileSync(path.join(ROOT, "placement-exam.html"), h, "utf8");
}

const redirects = [];
for (const [from, to] of REDIRECTS) {
  const dir = path.join(ROOT, from);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"),
`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<link rel="canonical" href="${SITE}${to.split("#")[0]}">
<meta http-equiv="refresh" content="0;url=${to}">
<title>Moved to ${to}</title>
</head>
<body>
<p>This page is now at <a href="${to}">${to}</a>.</p>
<script>location.replace(${JSON.stringify(to)});</script>
</body>
</html>
`, "utf8");
  redirects.push(from + " -> " + to);
}

console.log(JSON.stringify({ written, redirects, navEntries: NAV.length,
  liveGrades: liveGrades(), homePickerUpdated: newHome !== home }, null, 1));
