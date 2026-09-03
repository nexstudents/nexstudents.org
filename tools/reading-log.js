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
  var BELL  = ${JSON.stringify(ICON.bell)};

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
  /* 🚨 TWO NUMBERS, AND ONLY ONE OF THEM IS EVIDENCE. Paul, 2026-09-03:
     "we made the scrub to adjust the time and in theory the child could turn
     down the timer and it might still report they read for 30 min but really
     only read for 5min."
     He is right, and it was a hole I opened by making the scrub draggable.
       elapsed  where the scrub SITS. Draggable, drives the countdown.
       ran      seconds the timer ACTUALLY ticked. Only the interval below
                raises it, nothing else can touch it, and it is what gets
                saved and shown.
     ⚠️ Never write to ran from a seek, a keypress or a target change. The
     moment anything but the clock can raise it, the log stops being a
     record of reading and becomes a record of dragging. */
  var elapsed = 0, ran = 0, running = false, tick = null;

  /* 🚨 TIME'S UP. Paul, 2026-09-03: "add a times up sound and make it on the
     same play button but instead shows a bell icon and they hit it and it
     goes back to play and reset the timer."
     ⚠️ THE BELL RESETS THE COUNTDOWN BUT NOT THE RECORD. Pressing it puts
     the clock back to the target so the next session starts clean, and
     LEAVES ran alone - otherwise dismissing the alarm would silently throw
     away the half hour just read, before it had been saved.
     ⚠️ The sound is generated, not a file: no asset to load, nothing to 404,
     and the AudioContext is built on the first PLAY press, which is a real
     user gesture, so autoplay rules are satisfied by the time it rings. */
  var ringing = false, actx = null, bell = null;

  /* 🚨 TIME COMES FROM THE CLOCK, NOT FROM COUNTING TICKS. A phone suspends
     timers when the screen goes off, and reading a paper book with the phone
     face down is the NORMAL way this page gets used - counting setInterval
     firings would have paid him four minutes for half an hour of reading.
     runStart is when the current run began; the two bases are where elapsed
     and ran stood at that moment. Anything that moves elapsed out of band
     (a seek, a new target) must call rebase() or the next paint undoes it. */
  var runStart = 0, ranBase = 0, elapsedBase = 0;
  function rebase(){ runStart = Date.now(); ranBase = ran; elapsedBase = elapsed; }
  function sync(){
    if (!running) return;
    var d = Math.max(0, Math.round((Date.now() - runStart) / 1000));
    ran = ranBase + d;
    elapsed = elapsedBase + d;
  }

  /* 🚨 SAVE IS LOCKED UNTIL THE TIMER HAS RUNG. Paul: "save this session
     button should only be able to save after the timer goes off once."
     rangOut is the whole gate. It is raised ONLY by ring(), so like ran it
     cannot be reached by dragging the scrub - the two protections are the
     same protection, one on the number and one on the button. */
  var rangOut = false;

  function chime(){
    try {
      if (!actx) return;
      var now = actx.currentTime;
      [0, 0.28, 0.56].forEach(function(at, i){
        var osc = actx.createOscillator(), g = actx.createGain();
        osc.type = "sine";
        osc.frequency.value = i === 2 ? 1046.5 : 784;   // G5, G5, C6
        g.gain.setValueAtTime(0.0001, now + at);
        g.gain.exponentialRampToValueAtTime(0.22, now + at + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + at + 0.26);
        osc.connect(g); g.connect(actx.destination);
        osc.start(now + at); osc.stop(now + at + 0.3);
      });
    } catch(e){}
  }

  /* THE BELL REPEATS UNTIL IT IS STOPPED. Paul: "I wanted to keep playing
     that sound over on repeat until they stop it." One chime is easy to miss
     from across a room, which is the whole situation this is for - the child
     has put the screen down and is reading a paper book.
     The pattern runs 0.86s, so it repeats on a 1.9s cycle: long enough to
     read as a rung bell rather than a siren, short enough that no gap reads
     as over. */
  function ring(){
    ringing = true;
    rangOut = true;
    /* 🚨 PAUSE FIRST, THEN CLAMP. pause() calls sync(), which recomputes
       elapsed from the wall clock - so clamping before pausing was undone
       one line later and the alarm showed +0:29 instead of 0:00. */
    pause();
    elapsed = target * 60;
    chime();
    stopBell();
    bell = setInterval(function(){ if (ringing) chime(); else stopBell(); }, 1900);
    paint();
  }

  function stopBell(){
    if (bell) { clearInterval(bell); bell = null; }
  }

  function dismiss(){
    ringing = false;
    stopBell();
    elapsed = 0;          /* countdown back to the target */
    paint();              /* ran is deliberately untouched */
  }

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

    /* ⚠️ This line reports ran, never elapsed. Dragging the scrub moves
       the countdown but must not change what the page claims you read. */
    elElapsed.textContent = ran === 0
      ? (running ? "Starting" : "Not started")
      : "Read for " + spell(ran) + (left < 0 ? " - past your target" : "");

    bPlay.innerHTML = ringing ? BELL : (running ? PAUSE : PLAY);
    bPlay.setAttribute("aria-label", ringing ? "Time is up - tap to clear"
                                   : (running ? "Pause reading" : "Start reading"));
    bPlay.classList.toggle("is-ringing", ringing);
    /* left enabled on purpose - see the note in reading-log-parts.js */
    bReset.disabled = false;
    /* 🚨 THE TARGET IS LOCKED WHILE THE TIMER RUNS. Otherwise twenty minutes
       in you could wind it down to one, ring the bell on the spot and unlock
       Save. You choose the length before you start; reset gives it back. */
    elTarget.disabled = running;
    elTarget.title = running ? "Stop the timer to change how long you are reading for" : "";
    gateSave();
  }

  /* The lock has to EXPLAIN itself. A faint button that does nothing when it
     is tapped is a bug as far as a twelve year old is concerned, so the hint
     stands beside it the whole time the button is down. It writes into rlMsg
     only when rlMsg is not already carrying a real answer, which is why it
     tests the class rather than the text. */
  function gateSave(){
    var elSave = $("rlSave");
    elSave.disabled = !rangOut;
    elSave.classList.toggle("is-locked", !rangOut);
    if (!rangOut && (elMsg.className === "rl-msg" || elMsg.className === "rl-msg is-hint")){
      elMsg.className = "rl-msg is-hint";
      elMsg.textContent = "The timer has to finish before you can save.";
    } else if (rangOut && elMsg.className === "rl-msg is-hint"){
      elMsg.className = "rl-msg";
      elMsg.textContent = "";
    }
  }

  function start(){
    if (running) return;
    ringing = false;
    stopBell();   /* pressing play through the alarm silences it */
    running = true;
    rebase();
    tick = setInterval(function(){
      sync();
      /* 🚨 THE ALARM WATCHES ran, NOT elapsed. elapsed is draggable, so
         checking it let a child pull the bar to the end, ring the bell and
         unlock Save without reading. ran cannot be dragged, so the bell is
         now the same evidence the saved number is. */
      if (ran >= target * 60) { ring(); return; }
      paint();
    }, 1000);
    paint();
  }
  function pause(){
    sync();          /* bank the real time before the interval stops */
    running = false;
    if (tick) { clearInterval(tick); tick = null; }
    paint();
  }
  bPlay.addEventListener("click", function(){
    if (ringing) { dismiss(); return; }
    /* Built on a real press, which is what makes the sound allowed to play. */
    if (!actx) {
      try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){}
    }
    if (actx && actx.state === "suspended") { try { actx.resume(); } catch(e){} }
    running ? pause() : start();
  });
  bReset.addEventListener("click", function(){
    /* reset is the ONE control that clears ran - it is the deliberate
       "start this session over", not a way past the alarm. */
    ringing = false; stopBell();
    rangOut = false;
    pause(); elapsed = 0; ran = 0; paint();
  });

  // Dragging the scrub moves the countdown, the way dragging the lesson
  // player's bar moves the reading. It sets time ALREADY READ, so releasing
  // part way through a 30 minute target means 15 minutes are logged.
  /* 🚨 THE DRAG IS INVERTED RELATIVE TO A NORMAL SCRUB, ON PURPOSE.
     Paul, 2026-09-03: "if you move over it from right to left or left to
     right it goes the opposite direction. it also doesn't follow my finger."
     He is right and the cause is the countdown. This bar shows time
     REMAINING and empties from the right, so the lit portion IS the time
     left. Mapping the finger to ELAPSED made the lit edge run away from the
     finger: drag right, elapsed grows, the lit part shrinks leftward.
     The finger sets REMAINING now, so the boundary between lit and dark
     lands exactly under the finger and tracks it.
     ⚠️ This is why it differs from the lesson player's scrub, which counts
     UP through sentences and so maps straight to position. Do not "fix"
     this back by copying that one. */
  function seekFromEvent(e){
    var r = scrub.getBoundingClientRect();
    var x = (e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX) - r.left;
    var pct = Math.max(0, Math.min(1, r.width ? x / r.width : 0));
    elapsed = Math.round((1 - pct) * target * 60);
    rebase();
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
    // Right moves the lit edge right, which means MORE time remaining.
    if (e.key === "ArrowRight" || e.key === "ArrowUp"){ elapsed = Math.max(0, elapsed - step); rebase(); paint(); e.preventDefault(); }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown"){ elapsed += step; rebase(); paint(); e.preventDefault(); }
  });

  // A longer target is remembered. Paul: "saves your timer if you add like
  // more than 30 minutes." A shorter one is a one-off and is not stored.
  elTarget.addEventListener("change", function(){
    var n = parseInt(elTarget.value, 10);
    if (!n || n < 1) n = 30;
    if (n > 600) n = 600;
    target = n; elTarget.value = n; buildTicks();
    if (n > 30) saveTarget(n);
    rebase();
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

  /* 🚨 TWO SOURCES, BECAUSE ONE IS NOT ENOUGH. Paul, 2026-09-03: "I tried
     looking up the ISBN for the 100 book but it said it wasn't found."
     He was right and the book is not obscure. Open Library's /api/books
     endpoint returns an EMPTY object for masses of real editions - The 100
     among them - while its /search.json endpoint finds the same ISBN
     immediately with title, author and cover id. So the data endpoint is
     tried first for its richer record, and search is the fallback.
     ⚠️ Google Books was tested as a third source and REJECTED: it answered
     429 Quota exceeded without a key, so it would fail unpredictably.
     ⚠️ Both are still soft failures. A book neither service knows about
     leaves the title typeable by hand; the lookup is a shortcut, not a gate. */
  function applyFound(title, author, cover){
    if (title) elTitle.value = title;
    pendingAuthor = author || null;
    pendingCover = cover || null;
    showFound(title, author, cover);
    elIsbnMsg.className = "rl-msg is-ok";
    elIsbnMsg.textContent = "Found it.";
  }

  function searchFallback(isbn, mine){
    var url = "https://openlibrary.org/search.json?isbn=" + isbn +
              "&fields=title,author_name,cover_i&limit=1";
    return fetch(url).then(function(r){ return r.json(); }).then(function(j){
      if (mine !== lookupSeq) return;
      var d = j && j.docs && j.docs[0];
      if (!d){
        elIsbnMsg.className = "rl-msg is-bad";
        elIsbnMsg.textContent = "No book found for that number. Type the title yourself.";
        return;
      }
      applyFound(d.title || "",
                 (d.author_name || []).join(", "),
                 d.cover_i ? "https://covers.openlibrary.org/b/id/" + d.cover_i + "-M.jpg" : "");
    });
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
      if (mine !== lookupSeq) return;
      var b = j["ISBN:" + isbn];
      if (!b) return searchFallback(isbn, mine);
      var title = b.title || "";
      if (b.subtitle) title += ": " + b.subtitle;
      applyFound(title,
                 (b.authors || []).map(function(a){ return a.name; }).join(", "),
                 b.cover ? (b.cover.medium || b.cover.small || "") : "");
    }).catch(function(){
      if (mine !== lookupSeq) return;
      searchFallback(isbn, mine).catch(function(){
        elIsbnMsg.className = "rl-msg is-bad";
        elIsbnMsg.textContent = "Could not reach the book service. Type the title yourself.";
      });
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
        /* ⚠️ THE DURATION IS ON THE COLLAPSED ROW. Paul, 2026-09-03: "it also needs
           to be on the log after they hit save. you already have the date and time
           but not how long." It was only visible after opening the entry, which
           makes the one number the log exists to record the hardest to see. */
        "<summary>" + cover + "<b>" + esc(e.title || "Untitled") + "</b>" +
        "<span class='rl-when'>" + esc(dateText(e.date)) + "</span>" +
        "<span class='rl-dur'>" + esc(spell(e.seconds || 0)) + "</span>" + tag + "</summary>" +
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
    /* EVERY STARRED BOX IS REQUIRED. Paul: "make the info like they have to
       type something in the boxes a must and put a little red star."
       The star and this list have to stay in step - a star with no check is
       a suggestion, and a check with no star is an ambush. The message names
       the box and the focus goes to it, so the answer is never "something on
       this page is wrong, go and find it".
       ⚠️ The ISBN and "I finished this book" are deliberately NOT here. One
       is a shortcut for filling the title in and the other is only true at
       the end of a book. */
    var need = [
      [elTitle,     "Type the book first."],
      [elChapter,   "Put in the chapter you started at."],
      [elFrom,      "Put in the page you started at."],
      [elChapterTo, "Put in the chapter you stopped at."],
      [elTo,        "Put in the page you stopped at."],
      [elSummary,   "Write what happened before you save."],
      [elLiked,     "Write what you liked about it before you save."]
    ];
    for (var q = 0; q < need.length; q++){
      if (!String(need[q][0].value).trim()){
        elMsg.className = "rl-msg is-bad";
        elMsg.textContent = need[q][1];
        need[q][0].focus();
        return;
      }
    }
    var title = elTitle.value.trim();
    if (ran === 0){
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
      seconds: ran,          /* real timed reading, never the scrub */
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
    elMsg.textContent = "Saved.";

    elSummary.value = ""; elLiked.value = "";
    elFrom.value = ""; elTo.value = ""; elChapter.value = ""; elChapterTo.value = "";
    elIsbn.value = ""; elIsbnMsg.textContent = "";
    elFinished.checked = false;
    elPick.value = "";
    $("rlIsbnField").hidden = false;
    elFound.hidden = true; elFound.innerHTML = "";
    pendingCover = null; pendingAuthor = null;
    elapsed = 0; ran = 0; rangOut = false;   /* the next session earns its own save */
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
