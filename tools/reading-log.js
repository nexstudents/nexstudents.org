/* ─────────────────────────────────────────────────────────────────────────
   THE READING LOG — /extras/

   Paul, 2026-09-03: "HG has one but it doesn't work well. I mentioned it in
   support to them but they still haven't fixed it properly even though they
   said they have."

   So this is a REPLACEMENT for something that already failed him, which sets
   the bar: it has to keep the data, and it has to not lose a session.

   WHAT HE ASKED FOR, point by point, so nothing quietly goes missing:
     - a timer, defaulting to 30 minutes, that REMEMBERS a longer target
     - type what book you are reading
     - after finishing, write a brief summary and what you liked
     - record what page to what page
     - saves to browser storage "for now"
     - previous logs listed underneath, click one to see everything: what you
       typed, how long you read, what pages, the lot
     - mark whether you finished the book; if not, remember the title

   TWO DECISIONS HE MADE WHEN ASKED (2026-09-03):
     1. COUNTDOWN from the target, but LOG THE ACTUAL TIME READ. The target is
        a goal, not the record. Reading 41 minutes against a 30 minute target
        logs 41. Passing zero does not stop the clock.
     2. A LOG SAVES WITHOUT THE WRITING, flagged incomplete. "Save anyway,
        mark it incomplete." Losing a real 40-minute session because a summary
        was not typed yet is the worse failure — that is the HG behaviour we
        are replacing. The badge is the nag.

   🚨 STORAGE IS PER DEVICE AND PER BROWSER. localStorage, so a log written on
   the PC is not on the phone. Paul said "for now", so this is understood, not
   overlooked. ⚠️ Every read and write is wrapped — a private window, cleared
   site data, or a browser blocking storage all throw rather than return null,
   and an unguarded read would take the whole page down with it.

   KEYS
     ns:readlog        the entries, newest first
     ns:readlog:target the remembered target in minutes

   ⚠️ NO BACKTICKS ANYWHERE BELOW, including in comments inside the returned
   script. A backtick inside a JS template literal closes the string and the
   build dies on the next word — it has cost this repo two failed builds
   already, in progressScript and build-worksheets.js.
   ───────────────────────────────────────────────────────────────────────── */

const readingLogStyles = `
<style>
  .rl-wrap { display:grid; gap:22px; }
  .rl-card { background:var(--panel); border:1px solid var(--line);
             border-radius:14px; padding:22px 20px; }
  .rl-card h2 { margin:0 0 4px; font-size:1.18rem; letter-spacing:-.01em; }
  .rl-card .rl-note { margin:0 0 18px; color:var(--dim); font-size:.92rem; }

  /* the clock. Big, because it is read from across a desk. */
  .rl-clock { font-variant-numeric:tabular-nums; font-weight:700;
              font-size:clamp(2.6rem,11vw,4.2rem); line-height:1;
              letter-spacing:-.03em; text-align:center; margin:6px 0 2px; }
  .rl-clock.is-over { color:#5cc98a; }
  .rl-elapsed { text-align:center; color:var(--dim); font-size:.9rem; margin:0 0 16px; }

  .rl-row { display:flex; gap:10px; flex-wrap:wrap; justify-content:center; }
  .rl-btn { font:inherit; font-weight:600; cursor:pointer; border-radius:999px;
            border:1px solid var(--line); background:var(--panel-2); color:var(--fg);
            padding:11px 20px; min-height:44px; }
  .rl-btn:hover { border-color:var(--fg); }
  .rl-btn.is-go { background:var(--fg); color:var(--bg); border-color:var(--fg); }
  .rl-btn:disabled { opacity:.45; cursor:default; }

  .rl-target { display:flex; align-items:center; justify-content:center; gap:10px;
               margin:16px 0 0; color:var(--dim); font-size:.9rem; flex-wrap:wrap; }
  .rl-target input { font:inherit; width:5.5em; text-align:center; padding:8px 10px;
                     border-radius:10px; border:1px solid var(--line);
                     background:var(--bg); color:var(--fg); }

  .rl-form { display:grid; gap:14px; }
  .rl-field { display:grid; gap:6px; }
  .rl-field label { font-weight:600; font-size:.93rem; }
  .rl-field .rl-hint { color:var(--dim); font-size:.84rem; font-weight:400; }
  .rl-field input, .rl-field textarea, .rl-field select {
    font:inherit; padding:11px 12px; border-radius:10px; border:1px solid var(--line);
    background:var(--bg); color:var(--fg); width:100%; }
  .rl-field textarea { min-height:96px; resize:vertical; line-height:1.5; }
  .rl-pages { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:14px; }
  .rl-check { display:flex; align-items:center; gap:10px; font-weight:600; font-size:.93rem; }
  .rl-check input { width:20px; height:20px; accent-color:#5cc98a; }
  .rl-save { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
  .rl-msg { color:var(--dim); font-size:.88rem; }
  .rl-msg.is-ok { color:#5cc98a; }

  /* the previous entries */
  .rl-list { display:grid; gap:10px; }
  .rl-entry { border:1px solid var(--line); border-radius:12px; background:var(--panel-2);
              overflow:hidden; }
  .rl-entry > summary { cursor:pointer; padding:14px 16px; display:flex; gap:12px;
                        align-items:baseline; flex-wrap:wrap; list-style:none; }
  .rl-entry > summary::-webkit-details-marker { display:none; }
  .rl-entry > summary::after { content:"+"; margin-left:auto; color:var(--dim);
                               font-weight:700; font-size:1.1rem; }
  .rl-entry[open] > summary::after { content:"\\2013"; }
  .rl-entry b { font-size:1rem; }
  .rl-when { color:var(--dim); font-size:.85rem; }
  .rl-tag { font-size:.72rem; font-weight:700; text-transform:uppercase;
            letter-spacing:.06em; padding:3px 9px; border-radius:999px;
            border:1px solid var(--line); color:var(--dim); }
  .rl-tag.is-done { color:#5cc98a; border-color:#5cc98a; }
  .rl-tag.is-todo { color:#e0a33c; border-color:#e0a33c; }
  .rl-body { padding:2px 16px 18px; display:grid; gap:12px; }
  .rl-body dl { margin:0; display:grid; grid-template-columns:auto minmax(0,1fr);
                gap:6px 16px; font-size:.92rem; }
  .rl-body dt { color:var(--dim); }
  .rl-body dd { margin:0; }
  .rl-body h4 { margin:6px 0 2px; font-size:.86rem; text-transform:uppercase;
                letter-spacing:.06em; color:var(--dim); }
  .rl-body p { margin:0; line-height:1.6; white-space:pre-wrap; }
  .rl-empty { color:var(--dim); }
  .rl-total { color:var(--dim); font-size:.9rem; margin:0 0 14px; }
  @media (max-width:520px) { .rl-pages { grid-template-columns:1fr; } }
</style>`;

function readingLogMarkup() {
  return readingLogStyles + `
<div class="rl-wrap">

  <section class="rl-card">
    <h2>The Timer</h2>
    <p class="rl-note">Set how long you mean to read, then press Start. It counts down, but it
      keeps going past zero and logs the time you actually read.</p>

    <p class="rl-clock" id="rlClock">30:00</p>
    <p class="rl-elapsed" id="rlElapsed">Not started</p>

    <div class="rl-row">
      <button type="button" class="rl-btn is-go" id="rlStart">Start</button>
      <button type="button" class="rl-btn" id="rlPause" disabled>Pause</button>
      <button type="button" class="rl-btn" id="rlReset" disabled>Reset</button>
    </div>

    <p class="rl-target">
      <label for="rlTarget">Target</label>
      <input type="number" id="rlTarget" min="1" max="600" step="5" value="30">
      <span>minutes</span>
    </p>
  </section>

  <section class="rl-card">
    <h2>What You Read</h2>
    <p class="rl-note">Fill this in when you stop. If you are not ready to write the summary yet,
      save anyway and it will be kept and marked as needing one.</p>

    <div class="rl-form">
      <div class="rl-field">
        <label for="rlUnfinished">Carry on with a book <span class="rl-hint">picks up where you stopped</span></label>
        <select id="rlUnfinished"><option value="">Start something new</option></select>
      </div>

      <div class="rl-field">
        <label for="rlTitle">Book</label>
        <input type="text" id="rlTitle" placeholder="The title of the book" autocomplete="off">
      </div>

      <div class="rl-pages">
        <div class="rl-field">
          <label for="rlFrom">From page</label>
          <input type="number" id="rlFrom" min="1" max="99999" inputmode="numeric">
        </div>
        <div class="rl-field">
          <label for="rlTo">To page</label>
          <input type="number" id="rlTo" min="1" max="99999" inputmode="numeric">
        </div>
      </div>

      <div class="rl-field">
        <label for="rlSummary">What happened <span class="rl-hint">a few sentences is plenty</span></label>
        <textarea id="rlSummary" placeholder="Write briefly about what you just read."></textarea>
      </div>

      <div class="rl-field">
        <label for="rlLiked">What you liked <span class="rl-hint">or did not like, that counts too</span></label>
        <textarea id="rlLiked" placeholder="What was good about it?"></textarea>
      </div>

      <label class="rl-check"><input type="checkbox" id="rlFinished"> I finished this book</label>

      <div class="rl-save">
        <button type="button" class="rl-btn is-go" id="rlSave">Save This Session</button>
        <span class="rl-msg" id="rlMsg"></span>
      </div>
    </div>
  </section>

  <section class="rl-card">
    <h2>Everything You Have Read</h2>
    <p class="rl-total" id="rlTotal"></p>
    <div class="rl-list" id="rlList"></div>
  </section>

</div>`;
}

/* ⚠️ ONE template literal, no backticks inside it, not even in a comment. */
function readingLogScript() {
  return `<script>
(function(){
  var KEY = "ns:readlog", TKEY = "ns:readlog:target";
  var elClock = document.getElementById("rlClock");
  if (!elClock) return;

  function load(){
    try { var v = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(v) ? v : []; }
    catch(e){ return []; }
  }
  function save(list){ try { localStorage.setItem(KEY, JSON.stringify(list)); } catch(e){} }
  function loadTarget(){
    var n = 30;
    try { n = parseInt(localStorage.getItem(TKEY), 10) || 30; } catch(e){}
    if (n < 1 || n > 600) n = 30;
    return n;
  }
  function saveTarget(n){ try { localStorage.setItem(TKEY, String(n)); } catch(e){} }

  function two(n){ return (n < 10 ? "0" : "") + n; }
  function clockText(sec){
    var neg = sec < 0, s = Math.abs(sec);
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
    var out = h > 0 ? h + ":" + two(m) + ":" + two(r) : m + ":" + two(r);
    return (neg ? "+" : "") + out;
  }
  function spell(sec){
    var m = Math.round(sec / 60);
    if (sec < 60) return sec + (sec === 1 ? " second" : " seconds");
    if (m < 60) return m + (m === 1 ? " minute" : " minutes");
    var h = Math.floor(m / 60), r = m % 60;
    return h + (h === 1 ? " hour" : " hours") + (r ? " " + r + " min" : "");
  }

  var elTarget = document.getElementById("rlTarget");
  var elElapsed = document.getElementById("rlElapsed");
  var bStart = document.getElementById("rlStart");
  var bPause = document.getElementById("rlPause");
  var bReset = document.getElementById("rlReset");

  var target = loadTarget();
  elTarget.value = target;

  var elapsed = 0, running = false, tick = null;

  function paint(){
    var left = target * 60 - elapsed;
    elClock.textContent = clockText(left);
    elClock.classList.toggle("is-over", left < 0);
    elElapsed.textContent = elapsed === 0
      ? (running ? "Starting" : "Not started")
      : "Read for " + spell(elapsed) + (left < 0 ? " - past your target" : "");
    bPause.disabled = !running;
    bReset.disabled = (elapsed === 0 && !running);
    bStart.textContent = running ? "Reading" : (elapsed > 0 ? "Continue" : "Start");
    bStart.disabled = running;
  }

  function start(){
    if (running) return;
    running = true;
    tick = setInterval(function(){ elapsed++; paint(); }, 1000);
    paint();
  }
  function pause(){
    running = false;
    if (tick) { clearInterval(tick); tick = null; }
    paint();
  }
  bStart.addEventListener("click", start);
  bPause.addEventListener("click", pause);
  bReset.addEventListener("click", function(){
    pause(); elapsed = 0; paint();
  });

  // A longer target is remembered. Paul: "saves your timer if you add like
  // more than 30 minutes." A shorter one is a one-off and is not stored.
  elTarget.addEventListener("change", function(){
    var n = parseInt(elTarget.value, 10);
    if (!n || n < 1) n = 30;
    if (n > 600) n = 600;
    target = n;
    elTarget.value = n;
    if (n > 30) saveTarget(n);
    paint();
  });

  var elTitle = document.getElementById("rlTitle");
  var elFrom = document.getElementById("rlFrom");
  var elTo = document.getElementById("rlTo");
  var elSummary = document.getElementById("rlSummary");
  var elLiked = document.getElementById("rlLiked");
  var elFinished = document.getElementById("rlFinished");
  var elUnfinished = document.getElementById("rlUnfinished");
  var elMsg = document.getElementById("rlMsg");
  var elList = document.getElementById("rlList");
  var elTotal = document.getElementById("rlTotal");

  // Books started and not finished, with the furthest page reached.
  function openBooks(list){
    var seen = {}, order = [];
    for (var i = list.length - 1; i >= 0; i--){
      var e = list[i], t = (e.title || "").trim();
      if (!t) continue;
      if (!seen[t]) { seen[t] = { title: t, last: 0, done: false }; order.push(t); }
      if (e.to && e.to > seen[t].last) seen[t].last = e.to;
      if (e.finished) seen[t].done = true;
    }
    return order.map(function(t){ return seen[t]; }).filter(function(b){ return !b.done; });
  }

  function fillCarryOn(list){
    var books = openBooks(list);
    var keep = elUnfinished.value;
    elUnfinished.innerHTML = "";
    var first = document.createElement("option");
    first.value = ""; first.textContent = "Start something new";
    elUnfinished.appendChild(first);
    books.forEach(function(b){
      var o = document.createElement("option");
      o.value = b.title;
      o.textContent = b.title + (b.last ? " - reached page " + b.last : "");
      o.dataset.last = b.last || 0;
      elUnfinished.appendChild(o);
    });
    if (keep) elUnfinished.value = keep;
  }

  elUnfinished.addEventListener("change", function(){
    var o = elUnfinished.options[elUnfinished.selectedIndex];
    if (!elUnfinished.value) return;
    elTitle.value = elUnfinished.value;
    var last = parseInt(o.dataset.last, 10) || 0;
    if (last) elFrom.value = last + 1;
    elTo.value = "";
  });

  function esc(s){
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function dateText(iso){
    var d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString([], { weekday:"short", day:"numeric", month:"short", year:"numeric" })
      + " at " + d.toLocaleTimeString([], { hour:"numeric", minute:"2-digit" });
  }

  function render(){
    var list = load();
    fillCarryOn(list);

    if (!list.length){
      elList.innerHTML = "<p class='rl-empty'>Nothing logged yet. Your first session will appear here.</p>";
      elTotal.textContent = "";
      return;
    }

    var secs = 0, books = {};
    list.forEach(function(e){ secs += (e.seconds || 0); if (e.title) books[e.title.trim()] = 1; });
    var nBooks = Object.keys(books).length;
    elTotal.textContent = list.length + (list.length === 1 ? " session" : " sessions") +
      " across " + nBooks + (nBooks === 1 ? " book" : " books") + " - " + spell(secs) + " in total.";

    elList.innerHTML = list.map(function(e){
      var needs = !((e.summary || "").trim()) || !((e.liked || "").trim());
      var tag = e.finished
        ? "<span class='rl-tag is-done'>Finished</span>"
        : (needs ? "<span class='rl-tag is-todo'>Needs Summary</span>" : "");
      var pages = (e.from && e.to) ? ("Pages " + e.from + " to " + e.to)
                : (e.from ? ("From page " + e.from) : "Pages not recorded");
      return "<details class='rl-entry'>" +
        "<summary><b>" + esc(e.title || "Untitled") + "</b>" +
        "<span class='rl-when'>" + esc(dateText(e.date)) + "</span>" + tag + "</summary>" +
        "<div class='rl-body'>" +
          "<dl>" +
            "<dt>Read for</dt><dd>" + esc(spell(e.seconds || 0)) +
              (e.target ? " (target " + e.target + " min)" : "") + "</dd>" +
            "<dt>Pages</dt><dd>" + esc(pages) +
              ((e.from && e.to && e.to >= e.from) ? " - " + (e.to - e.from + 1) + " pages" : "") + "</dd>" +
            "<dt>Finished</dt><dd>" + (e.finished ? "Yes" : "Not yet") + "</dd>" +
          "</dl>" +
          "<h4>What happened</h4><p>" + (((e.summary || "").trim()) ? esc(e.summary) : "<span class='rl-empty'>Not written yet.</span>") + "</p>" +
          "<h4>What you liked</h4><p>" + (((e.liked || "").trim()) ? esc(e.liked) : "<span class='rl-empty'>Not written yet.</span>") + "</p>" +
        "</div>" +
      "</details>";
    }).join("");
  }

  document.getElementById("rlSave").addEventListener("click", function(){
    var title = elTitle.value.trim();
    if (!title){
      elMsg.className = "rl-msg";
      elMsg.textContent = "Type the book first.";
      elTitle.focus();
      return;
    }
    if (elapsed === 0){
      elMsg.className = "rl-msg";
      elMsg.textContent = "Run the timer before saving a session.";
      return;
    }
    pause();

    var from = parseInt(elFrom.value, 10) || null;
    var to = parseInt(elTo.value, 10) || null;
    var summary = elSummary.value.trim();
    var liked = elLiked.value.trim();

    var list = load();
    list.unshift({
      id: String(Date.now()),
      date: new Date().toISOString(),
      title: title,
      seconds: elapsed,
      target: target,
      from: from,
      to: to,
      summary: summary,
      liked: liked,
      finished: elFinished.checked
    });
    save(list);

    elMsg.className = "rl-msg is-ok";
    elMsg.textContent = (summary && liked)
      ? "Saved."
      : "Saved, and marked as needing a summary.";

    elSummary.value = ""; elLiked.value = "";
    elFrom.value = ""; elTo.value = "";
    elFinished.checked = false;
    elUnfinished.value = "";
    elapsed = 0;
    paint();
    render();
  });

  paint();
  render();
})();
</script>`;
}

module.exports = { readingLogMarkup, readingLogScript };
