/* ─────────────────────────────────────────────────────────────────────────
   READING LOG — the styles and markup. Split out of reading-log.js so that
   file stays readable; the engine lives beside it.

   🚨 THE TIMER IS THE VOICE PLAYER'S DOCK, NOT A CARD. Paul, 2026-09-03:
   "take the same idea from the voice engine but turn it into a countdown
   timer. the scrub would be the timer countdown. I like the play and pause
   icon not start and stop name and reset. you should make icons not names.
   center it and on mobile like the voice make it lock to the bottom even
   when you scroll."

   So it copies the lesson player's behaviour deliberately:
     - fixed to the bottom, full width, above the page, on every size
     - icon buttons, no words
     - a scrub bar that shows position - here the countdown, not a sentence
   ⚠️ The lesson player is `position:fixed;left:0;right:0;bottom:0` with a
   top border only and a shadow going UP. Same here, so the two feel like the
   same control rather than two takes on one idea.

   ⚠️ THE PAGE NEEDS BOTTOM PADDING TO MATCH. A fixed dock covers the end of
   the page otherwise, which is exactly the bug the lesson template's comment
   at line 181 warns about. body gets padding-bottom, not the dock a margin.
   ───────────────────────────────────────────────────────────────────────── */

const styles = `
<style>
  .rl-wrap { display:grid; gap:22px; }
  .rl-card { background:var(--panel); border:1px solid var(--line);
             border-radius:14px; padding:22px 20px; }
  .rl-card h2 { margin:0 0 4px; font-size:1.18rem; letter-spacing:-.01em; }
  .rl-card .rl-note { margin:0 0 18px; color:var(--dim); font-size:.92rem; }

  /* ── THE DOCK ───────────────────────────────────────────────────────── */
  body { padding-bottom:132px; }          /* room for the fixed dock */
  .rl-dock {
    position:fixed; left:0; right:0; bottom:0; z-index:40;
    background:var(--panel); border-top:1px solid var(--line);
    box-shadow:0 -6px 24px rgba(0,0,0,.30);
    padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px));
  }
  .rl-dockin { max-width:760px; margin-inline:auto; display:grid; gap:8px;
               justify-items:center; }

  .rl-clock { font-variant-numeric:tabular-nums; font-weight:700;
              font-size:clamp(1.9rem,7vw,2.6rem); line-height:1;
              letter-spacing:-.03em; margin:0; text-align:center; }
  .rl-clock.is-over { color:#5cc98a; }
  .rl-elapsed { color:var(--dim); font-size:.82rem; margin:0; text-align:center; }

  /* 🚨 THE SCRUB IS TICK BARS, LIKE THE VOICE PLAYER, AND IT EMPTIES RIGHT
     TO LEFT. Paul, 2026-09-03: "I also wanted the countdown bar to match the
     scrubber with the little tiny bars and it counts down backwards from
     right to left so you see the bars and the countdown similar to the scrub
     exactly but instead it is a timer."
     The lesson player is a row of flex:1 ticks with gap:2px, one per
     sentence. Here one tick is a slice of the target, and a tick going dim
     means that slice is spent. Because time RUNS OUT rather than fills up,
     the dim end is the RIGHT: a full bar is a full timer.
     ⚠️ Same shape and same gap as the lesson player on purpose. If that one
     changes, change this one, or the two controls stop looking related. */
  .rl-scrub { display:flex; gap:2px; height:18px; align-items:stretch;
              cursor:pointer; touch-action:none; width:100%; }
  .rl-tick { flex:1; background:var(--fg); border-radius:1px;
             transition:background .14s ease, opacity .14s ease; }
  .rl-tick.spent { background:var(--line); }
  .rl-tick.edge  { background:var(--fg); }
  .rl-scrub.dragging .rl-tick { transition:none; }
  .rl-scrub.is-over .rl-tick { background:#5cc98a; }

  /* 🚨 PLAY SITS ALONE SO IT IS ACTUALLY CENTRED. Paul, 2026-09-03: "the
     play button also needs to be centered and you can put the reset next to
     the time limit adjustment." Two buttons centred as a PAIR leaves neither
     on the centre line - the same mistake as centring a box instead of its
     text. Reset moves down beside the target, where it belongs anyway:
     both are settings, and play is the thing you press. */
  .rl-row { display:flex; align-items:center; justify-content:center; }
  .rl-ico.rl-small { width:38px; height:38px; }
  .rl-ico.rl-small svg { width:17px; height:17px; }
  .rl-ico { width:52px; height:52px; border-radius:50%; display:grid;
            place-items:center; cursor:pointer; padding:0;
            border:1px solid var(--line); background:var(--panel-2); color:var(--fg); }
  .rl-ico svg { width:22px; height:22px; display:block; }
  .rl-ico.is-go { background:var(--fg); color:var(--bg); border-color:var(--fg);
                  width:60px; height:60px; }
  .rl-ico.is-go svg { width:26px; height:26px; }
  .rl-ico:hover { border-color:var(--fg); }
  .rl-ico:disabled { opacity:.4; cursor:default; }

  .rl-target { display:flex; align-items:center; justify-content:center; gap:8px;
               color:var(--dim); font-size:.84rem; margin:0; }
  .rl-target input { font:inherit; width:4.6em; text-align:center; padding:6px 8px;
                     border-radius:9px; border:1px solid var(--line);
                     background:var(--bg); color:var(--fg); }

  /* ── THE FORM ─────────────────────────────────────────────────────────
     🚨 THE FIELDS DO NOT RUN THE WIDTH OF THE PAGE. Paul, 2026-09-03: "yeah
     these text boxes they don't need to be so large. we kind of fixed this
     issue even with the last voice engine." Same complaint, same answer: a
     control is sized to what it holds, not to the container it sits in.
     560px is about 70 characters, which is a comfortable line for the two
     written answers and generous for everything shorter.
     ⚠️ It is a MAX, not a width, so a phone still fills edge to edge. */
  .rl-form { display:grid; gap:14px; max-width:560px; }
  .rl-field { display:grid; gap:6px; }
  .rl-field label { font-weight:600; font-size:.93rem; }
  .rl-field .rl-hint { color:var(--dim); font-size:.84rem; font-weight:400; }
  .rl-field input, .rl-field textarea, .rl-field select {
    font:inherit; padding:11px 12px; border-radius:10px; border:1px solid var(--line);
    background:var(--bg); color:var(--fg); width:100%; }
  .rl-field textarea { min-height:96px; resize:vertical; line-height:1.5; }

  /* 🚨 THE SELECT ARROW WAS OFF CENTRE. Paul: "the arrow is off center."
     A native select draws its own arrow at a size the OS picks, and it does
     not line up with a 10px radius box. So the arrow is ours: appearance:none
     kills the native one and a background SVG sits at a fixed distance from
     the right edge, vertically centred by background-position. ⚠️ The right
     padding must clear the arrow or long titles run underneath it. */
  /* ⚠️ AND IT IS NOT FULL WIDTH. Paul, 2026-09-03: "the text box for start
     new book doesn't have to be so big it doesn't have to cover the entire
     screen." A control holding two or three short words should not run the
     width of a desktop page. It caps here and still fills a phone, because
     the cap is larger than any phone is wide. */
  .rl-field select {
    appearance:none; -webkit-appearance:none; -moz-appearance:none;
    max-width:420px;
    padding-right:42px;
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat:no-repeat;
    background-position:right 14px center;
    background-size:18px 18px;
  }

  .rl-pages { display:grid; grid-template-columns:minmax(0,150px) minmax(0,150px); gap:14px; }
  .rl-check { display:flex; align-items:center; gap:10px; font-weight:600; font-size:.93rem; }
  .rl-check input { width:20px; height:20px; accent-color:#5cc98a; }
  .rl-save { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
  .rl-btn { font:inherit; font-weight:600; cursor:pointer; border-radius:999px;
            border:1px solid var(--line); background:var(--panel-2); color:var(--fg);
            padding:11px 20px; min-height:44px; }
  .rl-btn.is-go { background:var(--fg); color:var(--bg); border-color:var(--fg); }
  .rl-msg { color:var(--dim); font-size:.88rem; }
  .rl-msg.is-ok { color:#5cc98a; }
  .rl-msg.is-bad { color:#e0a33c; }

  /* ── ISBN LOOKUP ────────────────────────────────────────────────────── */
  .rl-isbn { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:10px; }
  .rl-found { display:flex; gap:14px; align-items:flex-start; padding:12px;
              border:1px solid var(--line); border-radius:12px;
              background:var(--panel-2); }
  .rl-found img { width:56px; height:84px; object-fit:cover; border-radius:6px;
                  background:var(--line); flex:0 0 auto; }
  .rl-found div { display:grid; gap:3px; font-size:.9rem; }
  .rl-found b { font-size:.98rem; }
  .rl-found span { color:var(--dim); }

  /* ── PAST ENTRIES ───────────────────────────────────────────────────── */
  .rl-list { display:grid; gap:10px; }
  .rl-entry { border:1px solid var(--line); border-radius:12px; background:var(--panel-2);
              overflow:hidden; }
  .rl-entry > summary { cursor:pointer; padding:12px 16px; display:flex; gap:12px;
                        align-items:center; flex-wrap:wrap; list-style:none; }
  .rl-entry > summary::-webkit-details-marker { display:none; }
  .rl-entry > summary::after { content:"+"; margin-left:auto; color:var(--dim);
                               font-weight:700; font-size:1.1rem; }
  .rl-entry[open] > summary::after { content:"\\2013"; }
  .rl-cover { width:34px; height:50px; object-fit:cover; border-radius:4px;
              background:var(--line); flex:0 0 auto; }
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


  /* ── CENTRED, AND FULL-STRENGTH TEXT ──────────────────────────────────
     Paul, 2026-09-03: "make all of the text in content boxes White. and also
     send her them in the middle of the page."

     🚨 IT IS var(--fg), NOT #fff. The site has a light mode, and hardcoding
     white would put white text on a white card the moment the theme flips -
     exactly the failure already recorded in CLAUDE.md, where a worksheet set
     background:#fff and left dark-theme text white on white. --fg is white
     in dark and near-black in light, which is what "white" means here.
     ⚠️ The hint text under a label stays --dim ON PURPOSE. It is a second
     voice, and making everything one weight loses the difference between a
     label and its explanation. */
  .rl-card, .rl-card p, .rl-field label, .rl-body p, .rl-body dd { color:var(--fg); }
  .rl-card .rl-note { color:var(--fg); }
  .rl-total { color:var(--fg); }

  /* The cards and the form sit on the page's centre line rather than hard
     left. ⚠️ margin-inline:auto as well as the max-width - centring a box
     needs both, which is the note already in CLAUDE.md. */
  .rl-wrap { max-width:760px; margin-inline:auto; }
  .rl-form { margin-inline:auto; }
  .rl-card h2, .rl-card > .rl-note { text-align:center; }


  /* ── THE VOICE PLAYER'S PALETTE ───────────────────────────────────────
     Paul, 2026-09-03: "can you also make this match the same theme as the
     voice engine?"

     🚨 THE VALUES ARE LIFTED FROM lesson-template.html, NOT INVENTED. That
     file is the master for the reading player, and its accent is verdigris:
       light  --verdigris:#25664A  --tick-now:#14432E  --tick-done:rgba(37,102,74,.30)
       dark   --verdigris:#66C293  --tick-now:#3F9B69  --tick-done:rgba(102,194,147,.28)

     ⚠️ THEY CANNOT BE USED DIRECTLY. A lesson page defines --verdigris; an
     ns.css page does NOT, and a custom property with no declaration resolves to
     nothing rather than falling back - the exact trap already recorded in
     CLAUDE.md, where --muted was used on a lesson page and five rules shipped
     rendering full white. So the log declares its own tokens with the same
     values, and follows ns.css's own theming rules: bare :root for light,
     then the two dark selectors.
     ⚠️ If lesson-template.html ever re-tunes verdigris, re-tune these to
     match, or the two players drift apart - which is the whole thing Paul is
     asking to avoid. */
  .rl-dock, .rl-wrap {
    --rl-accent:#25664A;
    --rl-live:#14432E;
    --rl-spent:rgba(37,102,74,.30);
    --rl-on-accent:#F2F7EF;
  }
  @media (prefers-color-scheme:dark) {
    :root:not([data-theme="light"]) .rl-dock,
    :root:not([data-theme="light"]) .rl-wrap {
      --rl-accent:#66C293; --rl-live:#3F9B69;
      --rl-spent:rgba(102,194,147,.28); --rl-on-accent:#0B160F;
    }
  }
  :root[data-theme="dark"] .rl-dock, :root[data-theme="dark"] .rl-wrap {
    --rl-accent:#66C293; --rl-live:#3F9B69;
    --rl-spent:rgba(102,194,147,.28); --rl-on-accent:#0B160F;
  }

  /* The ticks read like the lesson player's: accent for time you still have,
     faint accent for time spent. ⚠️ NOT --line for spent. A neutral grey next
     to a green bar looks broken rather than dimmed. */
  .rl-tick { background:var(--rl-live); }
  .rl-tick.spent { background:var(--rl-spent); }
  .rl-scrub.is-over .rl-tick { background:var(--rl-accent); }

  .rl-ico.is-go { background:var(--rl-accent); color:var(--rl-on-accent);
                  border-color:var(--rl-accent); }
  .rl-ico.is-go:hover { filter:brightness(1.08); }
  .rl-clock.is-over { color:var(--rl-accent); }
  .rl-btn.is-go { background:var(--rl-accent); color:var(--rl-on-accent);
                  border-color:var(--rl-accent); }
  .rl-msg.is-ok { color:var(--rl-accent); }
  .rl-tag.is-done { color:var(--rl-accent); border-color:var(--rl-accent); }
  .rl-check input { accent-color:var(--rl-accent); }

  @media (max-width:520px) {
    .rl-pages { grid-template-columns:1fr; }
    .rl-isbn { grid-template-columns:1fr; }
    body { padding-bottom:150px; }
  }
</style>`;

/* Icons are inline SVG, not a font and not an image: they inherit currentColor
   so they flip with the theme, and there is nothing extra to load. */
const ICON = {
  /* 🚨 THE TRIANGLE IS CENTRED BY ITS OPTICAL CENTRE, NOT ITS BOX. Paul,
     2026-09-03: 'the Little triangle arrow on the play button is not
     centered.' Two things were wrong. The old path spanned x 8 to 20 in a
     24 box, so its BOUNDING BOX centre sat at 14 - two units right of the
     button's middle. And even centred by box a triangle reads left-heavy,
     because two thirds of its area sits behind the tip. So it is drawn
     symmetric about x=12 and then nudged +0.7 for the optical correction.
     ⚠️ VERIFY WITH getBBox AGAINST THE BUTTON RECT, never by looking. That
     is how the two-unit error survived a screenshot. */
  play:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.9 5.3a1 1 0 0 1 1.52-.85l9.6 6.7a1 1 0 0 1 0 1.7l-9.6 6.7A1 1 0 0 1 6.9 18.7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.5" y="5" width="4" height="14" rx="1.2"/><rect x="13.5" y="5" width="4" height="14" rx="1.2"/></svg>',
  reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4.5V10h5.5"/></svg>',
};

function markup() {
  return styles + `
<div class="rl-wrap">

  <section class="rl-card">
    <h2>What You Read</h2>
    <p class="rl-note">Start the timer at the bottom of the screen, then fill this in when you stop.
      If you are not ready to write the summary yet, save anyway and it will be kept and marked as
      needing one.</p>

    <div class="rl-form">
      <div class="rl-field">
        <label for="rlPick">Which book</label>
        <select id="rlPick"><option value="">Start New Book</option></select>
      </div>

      <div class="rl-field" id="rlIsbnField">
        <label for="rlIsbn">ISBN <span class="rl-hint">the number on the barcode, and it fills the rest in</span></label>
        <div class="rl-isbn">
          <input type="text" id="rlIsbn" placeholder="9780261102217" inputmode="numeric" autocomplete="off">
          <button type="button" class="rl-btn" id="rlLookup">Look It Up</button>
        </div>
        <span class="rl-msg" id="rlIsbnMsg"></span>
      </div>

      <div id="rlFound" hidden></div>

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

</div>

<div class="rl-dock" id="rlDock">
  <div class="rl-dockin">
    <p class="rl-clock" id="rlClock">30:00</p>
    <div class="rl-scrub" id="rlScrub" role="slider" tabindex="0"
         aria-label="Time remaining" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
    </div>
    <div class="rl-row">
      <button type="button" class="rl-ico is-go" id="rlPlay" aria-label="Start reading">${ICON.play}</button>
    </div>
    <p class="rl-target">
      <button type="button" class="rl-ico rl-small" id="rlReset" aria-label="Reset the timer" disabled>${ICON.reset}</button>
      <label for="rlTarget">Target</label>
      <input type="number" id="rlTarget" min="1" max="600" step="5" value="30">
      <span>min</span>
    </p>
    <p class="rl-elapsed" id="rlElapsed">Not started</p>
  </div>
</div>`;
}

module.exports = { markup, ICON };
