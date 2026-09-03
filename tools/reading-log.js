/* ─────────────────────────────────────────────────────────────────────────
   THE READING LOG — /extras/reading-log/

   Paul, 2026-09-03: "HG has one but it doesn't work well. I mentioned it in
   support to them but they still haven't fixed it properly even though they
   said they have."

   A REPLACEMENT for something that already failed him, which sets the bar:
   keep the data, and never lose a session.

   WHAT HE ASKED FOR, so nothing quietly goes missing:
     - a timer defaulting to 30 minutes that REMEMBERS a longer target
     - type what book you are reading; a summary and what you liked
     - what page to what page
     - saves to browser storage "for now"
     - past logs underneath, click one to see everything
     - whether the book is finished; if not, remember the title

   SECOND PASS, 2026-09-03, after he saw it live:
     - "take the same idea from the voice engine but turn it into a countdown
       timer. the scrub would be the timer countdown. I like the play and
       pause icon not start and stop name and reset. you should make icons
       not names. center it and on mobile like the voice make it lock to the
       bottom even when you scroll."  -> the dock, in reading-log-parts.js
     - "the arrow is off center"      -> our own select arrow, not the OS one
     - "start something new I don't understand ... maybe say Start New Book.
       then the option is after you create one is is two options Start New
       Book or Continue [Book Name]"  -> exactly those two wordings
     - "I wonder if possible if we can put the ISBN ... and it can pull the
       data in the info and add a thumbnail"  -> Open Library lookup

   DECISIONS HE MADE WHEN ASKED:
     1. COUNTDOWN from the target, but LOG THE ACTUAL TIME READ. Reading 41
        minutes against a 30 minute target logs 41. Zero does not stop it.
     2. A LOG SAVES WITHOUT THE WRITING, flagged incomplete. Losing a real
        40-minute session because a summary was not typed is the HG failure
        we are replacing. The badge is the nag.

   🚨 STORAGE IS PER DEVICE AND PER BROWSER. A log written on the PC is not on
   the phone. Paul said "for now", so this is understood, not overlooked.
   ⚠️ Every read and write is wrapped: a private window or a browser blocking
   storage THROWS rather than returning null, and an unguarded read would take
   the page down with it.

   KEYS
     ns:readlog        the entries, newest first
     ns:readlog:target the remembered target in minutes

   ⚠️ NO BACKTICKS ANYWHERE IN THE RETURNED SCRIPT, including inside comments.
   A backtick in a JS template literal closes the string and the build dies on
   the next word - it has cost this repo two failed builds already.
   ───────────────────────────────────────────────────────────────────────── */

const { markup, ICON } = require("./reading-log-parts.js");

function readingLogMarkup() { return markup(); }

function readingLogScript() {
  return `<script>
(function(){
  var KEY = "ns:readlog", TKEY = "ns:readlog:target";
  var PLAY = ${JSON.stringify(ICON.play)};
  var PAUSE = ${JSON.stringify(ICON.pause)};

  var $ = function(id){ return document.getElementById(id); };
  var elClock = $("rlClock");
  if (!elClock) return;

  function load(){
    try { var v = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(v) ? v : []; }
    catch(e){ return []; }
  }
  function save(list){ try { localStorage.setItem(KEY, JSON.stringify(list)); } catch(e){} }
  function loadTarget(){
    var n = 30;
    try { n = parseInt(localStorage.getItem(TKEY), 10) || 30; } catch(e){}
    return (n < 1 || n > 600) ? 30 : n;
  }
  function saveTarget(n){ try { localStorage.setItem(TKEY, String(n)); } catch(e){} }

  function two(n){ return (n < 10 ? "0" : "") + n; }
  function clockText(sec){
    var neg = sec < 0, s = Math.abs(sec);
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
    return (neg ? "+" : "") + (h > 0 ? h + ":" + two(m) + ":" + two(r) : m + ":" + two(r));
  }
  function spell(sec){
    var m = Math.round(sec / 60);
    if (sec < 60) return sec + (sec === 1 ? " second" : " seconds");
    if (m < 60) return m + (m === 1 ? " minute" : " minutes");
    var h = Math.floor(m / 60), r = m % 60;
    return h + (h === 1 ? " hour" : " hours") + (r ? " " + r + " min" : "");
  }
  function esc(s){
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ── the dock ─────────────────────────────────────────────────────── */
  var elTarget = $("rlTarget"), elElapsed = $("rlElapsed");
  var bPlay = $("rlPlay"), bReset = $("rlReset");
  var scrub = $("rlScrub");

  /* One tick per minute of the target, capped so a three hour target does
     not draw 180 slivers a pixel wide. 40 is about the most that stays
     readable on a phone. */
  var TICKS = 0;
  function buildTicks(){
    TICKS = Math.max(6, Math.min(40, target));
    scrub.innerHTML = "";
    for (var i = 0; i < TICKS; i++){
      var t = document.createElement("span");
      t.className = "rl-tick";
      scrub.appendChild(t);
    }
  }

  var target = loadTarget();
  elTarget.value = target;
  var elapsed = 0, running = false, tick = null;

  function paint(){
    var total = target * 60, left = total - elapsed;
    elClock.textContent = clockText(left);
    elClock.classList.toggle("is-over", left < 0);

    /* 🚨 RIGHT TO LEFT, AND THE BOUNDARY TICK FADES. Paul, 2026-09-03: "the
       scrub timer is a little too fast and not smooth. look at the reference
       at the voice engine for it."
       It was Math.round on whole ticks, so nothing moved for a minute and
       then a whole bar flipped at once - a step, not a drain. The lesson
       player avoids this by marking the CURRENT position separately from the
       done ones (.tick.now against .tick.done), so the eye always has
       something in between to read.
       Same idea here: whole ticks past the edge go spent, and the ONE tick
       being consumed carries a partial opacity that falls smoothly across
       its own minute. Nothing jumps.
       ⚠️ opacity is set inline because it is a continuous value; the class
       only says which tick is the live edge. */
    var exact = total > 0 ? (elapsed / total) * TICKS : 0;
    var whole = Math.floor(exact);
    var frac  = exact - whole;
    var edgeIdx = TICKS - whole - 1;
    var kids = scrub.children;
    for (var i = 0; i < kids.length; i++){
      var k = kids[i];
      var isSpent = i > edgeIdx;
      k.classList.toggle("spent", isSpent);
      k.classList.toggle("edge", i === edgeIdx && frac > 0);
      k.style.opacity = (i === edgeIdx && frac > 0) ? String(1 - frac * 0.72) : "";
    }
    scrub.classList.toggle("is-over", left < 0);
    /* ⚠️ NO BACKTICKS IN THIS FILE, not even here. Derived from exact rather
       than from a pct variable: an earlier edit removed pct but left this
       line, so paint() threw on EVERY call. Because reset calls pause, and
       pause calls paint, the throw killed reset before it zeroed the timer.
       The clock still updated, because that happens above the throw - which
       is why it looked like a dead button rather than a crash. */
    scrub.setAttribute("aria-valuenow", String(Math.round(TICKS ? (exact / TICKS) * 100 : 0)));
    scrub.setAttribute("aria-valuetext", clockText(left) + " remaining");

    elElapsed.textContent = elapsed === 0
      ? (running ? "Starting" : "Not started")
      : "Read for " + spell(elapsed) + (left < 0 ? " - past your target" : "");

    bPlay.innerHTML = running ? PAUSE : PLAY;
    bPlay.setAttribute("aria-label", running ? "Pause reading" : "Start reading");
    /* left enabled on purpose - see the note in reading-log-parts.js */
    bReset.disabled = false;
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
  bPlay.addEventListener("click", function(){ running ? pause() : start(); });
  bReset.addEventListener("click", function(){ pause(); elapsed = 0; paint(); });

  // Dragging the scrub moves the countdown, the way dragging the lesson
  // player's bar moves the reading. It sets time ALREADY READ, so releasing
  // part way through a 30 minute target means 15 minutes are logged.
  function seekFromEvent(e){
    var r = scrub.getBoundingClientRect();
    var x = (e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX) - r.left;
    var pct = Math.max(0, Math.min(1, r.width ? x / r.width : 0));
    elapsed = Math.round(pct * target * 60);
    paint();
  }
  var dragging = false;
  scrub.addEventListener("pointerdown", function(e){
    dragging = true; scrub.classList.add("dragging");
    /* 🚨 setPointerCapture THROWS if the pointer id is not currently active,
       and an uncaught throw here aborts the handler BEFORE the seek runs -
       the bar then looks dead while every other control still works. Found
       2026-09-03 by dragging twice in a row during testing: the first drag
       moved the timer, the second silently did nothing. Capture is a nicety
       (it keeps a drag alive if the finger leaves the bar); the seek is the
       point. So it is wrapped, and the seek happens either way. */
    try { scrub.setPointerCapture && scrub.setPointerCapture(e.pointerId); } catch(err){}
    seekFromEvent(e); e.preventDefault();
  });
  scrub.addEventListener("pointermove", function(e){ if (dragging) seekFromEvent(e); });
  function endDrag(e){
    dragging = false; scrub.classList.remove("dragging");
    try { if (e && e.pointerId != null) scrub.releasePointerCapture(e.pointerId); } catch(err){}
  }
  scrub.addEventListener("pointerup", endDrag);
  scrub.addEventListener("pointercancel", endDrag);
  scrub.addEventListener("keydown", function(e){
    var step = e.shiftKey ? 300 : 60;
    if (e.key === "ArrowRight" || e.key === "ArrowUp"){ elapsed += step; paint(); e.preventDefault(); }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown"){ elapsed = Math.max(0, elapsed - step); paint(); e.preventDefault(); }
  });

  // A longer target is remembered. Paul: "saves your timer if you add like
  // more than 30 minutes." A shorter one is a one-off and is not stored.
  elTarget.addEventListener("change", function(){
    var n = parseInt(elTarget.value, 10);
    if (!n || n < 1) n = 30;
    if (n > 600) n = 600;
    target = n; elTarget.value = n; buildTicks();
    if (n > 30) saveTarget(n);
    paint();
  });

  /* ── the form ─────────────────────────────────────────────────────── */
  var elTitle = $("rlTitle"), elFrom = $("rlFrom"), elTo = $("rlTo");
  var elSummary = $("rlSummary"), elLiked = $("rlLiked"), elFinished = $("rlFinished");
  var elChapter = $("rlChapter"), elChapterTo = $("rlChapterTo");
  var elPick = $("rlPick"), elMsg = $("rlMsg"), elList = $("rlList"), elTotal = $("rlTotal");
  var elIsbn = $("rlIsbn"), elIsbnMsg = $("rlIsbnMsg"), elFound = $("rlFound");
  var pendingCover = null, pendingAuthor = null;
  /* ⚠️ A LOOKUP TOKEN. Two lookups can be in flight at once (type, click,
     correct a digit, click again) and the SLOWER one can land last and
     overwrite the newer answer with a stale book. Each call takes a ticket
     and a response that is not the current ticket is dropped. */
  var lookupSeq = 0;

  /* ── ISBN lookup ──────────────────────────────────────────────────────
     Open Library, because it needs no key and no account. Two calls in one:
     the data endpoint gives title, authors and a cover url.
     ⚠️ EVERY FAILURE IS SILENT-SAFE. No network, a bad number, or a book
     nobody has catalogued all end the same way: a message, and the title
     field still typeable by hand. The lookup is a shortcut, never a gate. */
  function cleanIsbn(s){ return String(s || "").replace(/[^0-9Xx]/g, "").toUpperCase(); }

  function showFound(title, author, cover){
    elFound.hidden = false;
    elFound.innerHTML = "<div class='rl-found'>" +
      (cover ? "<img src='" + esc(cover) + "' alt='' loading='lazy'>" : "") +
      "<div><b>" + esc(title) + "</b>" +
      (author ? "<span>" + esc(author) + "</span>" : "") + "</div></div>";
  }

  function lookup(){
    var mine = ++lookupSeq;
    var isbn = cleanIsbn(elIsbn.value);
    if (isbn.length !== 10 && isbn.length !== 13){
      elIsbnMsg.className = "rl-msg is-bad";
      elIsbnMsg.textContent = "An ISBN is 10 or 13 digits.";
      return;
    }
    elIsbnMsg.className = "rl-msg";
    elIsbnMsg.textContent = "Looking...";
    var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + isbn +
              "&format=json&jscmd=data";
    fetch(url).then(function(r){ return r.json(); }).then(function(j){
      if (mine !== lookupSeq) return;   // a newer lookup has started
      var b = j["ISBN:" + isbn];
      if (!b){
        elIsbnMsg.className = "rl-msg is-bad";
        elIsbnMsg.textContent = "No book found for that number. Type the title yourself.";
        return;
      }
      var title = b.title || "";
      if (b.subtitle) title += ": " + b.subtitle;
      var author = (b.authors || []).map(function(a){ return a.name; }).join(", ");
      var cover = b.cover ? (b.cover.medium || b.cover.small || "") : "";
      elTitle.value = title;
      pendingAuthor = author || null;
      pendingCover = cover || null;
      showFound(title, author, cover);
      elIsbnMsg.className = "rl-msg is-ok";
      elIsbnMsg.textContent = "Found it.";
    }).catch(function(){
      if (mine !== lookupSeq) return;
      elIsbnMsg.className = "rl-msg is-bad";
      elIsbnMsg.textContent = "Could not reach the book service. Type the title yourself.";
    });
  }
  $("rlLookup").addEventListener("click", lookup);
  elIsbn.addEventListener("keydown", function(e){ if (e.key === "Enter"){ e.preventDefault(); lookup(); } });

  /* Books started and not finished, with the furthest page and any cover. */
  function openBooks(list){
    var seen = {}, order = [];
    for (var i = list.length - 1; i >= 0; i--){
      var e = list[i], t = (e.title || "").trim();
      if (!t) continue;
      if (!seen[t]) { seen[t] = { title: t, last: 0, done: false, cover: null, author: null }; order.push(t); }
      if (e.to && e.to > seen[t].last) seen[t].last = e.to;
      if (e.cover && !seen[t].cover) seen[t].cover = e.cover;
      if (e.author && !seen[t].author) seen[t].author = e.author;
      if (e.finished) seen[t].done = true;
    }
    return order.map(function(t){ return seen[t]; }).filter(function(b){ return !b.done; });
  }

  /* 🚨 EXACTLY TWO WORDINGS. Paul: "maybe say Start New Book. then the option
     is after you create one is is two options Start New Book or Continue
     [Book Name]." So the blank option is Start New Book, and every unfinished
     book reads Continue followed by its title. Nothing else goes in here. */
  function fillPick(list){
    var books = openBooks(list), keep = elPick.value;
    elPick.innerHTML = "";
    var first = document.createElement("option");
    first.value = ""; first.textContent = "Start New Book";
    elPick.appendChild(first);
    books.forEach(function(b){
      var o = document.createElement("option");
      o.value = b.title;
      o.textContent = "Continue " + b.title;
      o.dataset.last = b.last || 0;
      o.dataset.cover = b.cover || "";
      o.dataset.author = b.author || "";
      elPick.appendChild(o);
    });
    if (keep) elPick.value = keep;
  }

  elPick.addEventListener("change", function(){
    var o = elPick.options[elPick.selectedIndex];
    if (!elPick.value){
      elTitle.value = ""; elFrom.value = ""; elTo.value = ""; elChapter.value = ""; elChapterTo.value = "";
      pendingCover = null; pendingAuthor = null;
      elFound.hidden = true; elFound.innerHTML = "";
      $("rlIsbnField").hidden = false;
      return;
    }
    elTitle.value = elPick.value;
    var last = parseInt(o.dataset.last, 10) || 0;
    if (last) elFrom.value = last + 1;
    elTo.value = "";
    /* 🚨 CLEAR THE CHAPTERS TOO. Choosing Continue prefills the next PAGE,
       but the chapter boxes kept whatever the last session left in them -
       so a new session could be saved carrying the previous chapter. Caught
       in the final pass: an entry read "page 42 to Chapter 5", where 5 was
       stale. The page is known from where you stopped; the chapter is not,
       so it starts empty. */
    elChapter.value = "";
    elChapterTo.value = "";
    pendingCover = o.dataset.cover || null;
    pendingAuthor = o.dataset.author || null;
    // Carrying on a known book needs no ISBN - it is already identified.
    $("rlIsbnField").hidden = true;
    if (pendingCover || pendingAuthor) showFound(elPick.value, pendingAuthor, pendingCover);
    else { elFound.hidden = true; elFound.innerHTML = ""; }
  });

  /* One end of a reading range, as the form now asks for it: a chapter
     and a page together. Either half may be blank. */
  function spot(ch, pg){
    var bits = [];
    if (ch) bits.push("Chapter " + ch);
    if (pg) bits.push("page " + pg);
    return bits.length ? bits.join(", ") : "not recorded";
  }

  function dateText(iso){
    var d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString([], { weekday:"short", day:"numeric", month:"short", year:"numeric" })
      + " at " + d.toLocaleTimeString([], { hour:"numeric", minute:"2-digit" });
  }

  function render(){
    var list = load();
    fillPick(list);

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
      var cover = e.cover ? "<img class='rl-cover' src='" + esc(e.cover) + "' alt='' loading='lazy'>" : "";
      return "<details class='rl-entry'>" +
        "<summary>" + cover + "<b>" + esc(e.title || "Untitled") + "</b>" +
        "<span class='rl-when'>" + esc(dateText(e.date)) + "</span>" + tag + "</summary>" +
        "<div class='rl-body'>" +
          "<dl>" +
            (e.author ? "<dt>By</dt><dd>" + esc(e.author) + "</dd>" : "") +
            "<dt>Read for</dt><dd>" + esc(spell(e.seconds || 0)) +
              (e.target ? " (target " + e.target + " min)" : "") + "</dd>" +
            "<dt>Read</dt><dd>" + esc(spot(e.chapter, e.from)) +
              ((e.chapterTo || e.to) ? " to " + esc(spot(e.chapterTo, e.to)) : "") +
              ((e.from && e.to && e.to >= e.from) ? " (" + (e.to - e.from + 1) + " pages)" : "") + "</dd>" +
            (e.isbn ? "<dt>ISBN</dt><dd>" + esc(e.isbn) + "</dd>" : "") +
            "<dt>Finished</dt><dd>" + (e.finished ? "Yes" : "Not yet") + "</dd>" +
          "</dl>" +
          "<h4>What happened</h4><p>" + (((e.summary || "").trim()) ? esc(e.summary) : "<span class='rl-empty'>Not written yet.</span>") + "</p>" +
          "<h4>What you liked</h4><p>" + (((e.liked || "").trim()) ? esc(e.liked) : "<span class='rl-empty'>Not written yet.</span>") + "</p>" +
        "</div>" +
      "</details>";
    }).join("");
  }

  $("rlSave").addEventListener("click", function(){
    var title = elTitle.value.trim();
    if (!title){
      elMsg.className = "rl-msg is-bad";
      elMsg.textContent = "Type the book first.";
      elTitle.focus();
      return;
    }
    if (elapsed === 0){
      elMsg.className = "rl-msg is-bad";
      elMsg.textContent = "Run the timer before saving a session.";
      return;
    }
    pause();

    var summary = elSummary.value.trim(), liked = elLiked.value.trim();
    var list = load();
    list.unshift({
      id: String(Date.now()),
      date: new Date().toISOString(),
      title: title,
      author: pendingAuthor || null,
      cover: pendingCover || null,
      isbn: cleanIsbn(elIsbn.value) || null,
      seconds: elapsed,
      target: target,
      chapter: (elChapter.value || "").trim() || null,
      chapterTo: (elChapterTo.value || "").trim() || null,
      from: parseInt(elFrom.value, 10) || null,
      to: parseInt(elTo.value, 10) || null,
      summary: summary,
      liked: liked,
      finished: elFinished.checked
    });
    save(list);

    elMsg.className = "rl-msg is-ok";
    elMsg.textContent = (summary && liked) ? "Saved." : "Saved, and marked as needing a summary.";

    elSummary.value = ""; elLiked.value = "";
    elFrom.value = ""; elTo.value = ""; elChapter.value = "";
    elIsbn.value = ""; elIsbnMsg.textContent = "";
    elFinished.checked = false;
    elPick.value = "";
    $("rlIsbnField").hidden = false;
    elFound.hidden = true; elFound.innerHTML = "";
    pendingCover = null; pendingAuthor = null;
    elapsed = 0;
    paint();
    render();
  });

  buildTicks();
  /* 🚨 THE PAGE MUST RESERVE THE DOCK'S REAL HEIGHT. A hardcoded
     padding-bottom was 150px while the dock measured 230px on a 320px
     phone, so the dock sat over the last 80px of the page - the Save button
     among it. The dock wraps differently at every width, so the number
     cannot be guessed: it is measured, and re-measured on resize.
     ⚠️ Found 2026-09-03 by measuring in an iframe, not by looking. */
  var dock = $("rlDock");
  function reserve(){
    if (!dock) return;
    document.body.style.paddingBottom = (dock.offsetHeight + 16) + "px";
  }
  reserve();
  window.addEventListener("resize", reserve);
  if (window.ResizeObserver) new ResizeObserver(reserve).observe(dock);

  buildTicks();
  paint();
  render();
})();
</script>`;
}

module.exports = { readingLogMarkup, readingLogScript };
