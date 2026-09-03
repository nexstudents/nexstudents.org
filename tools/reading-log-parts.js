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
  /* The How This Works disclosure. Same shape as a past entry so the page
     has one kind of expandable thing rather than two. */
  .rl-how { margin:0 auto 18px; max-width:560px; border:1px solid var(--line);
            border-radius:10px; background:var(--panel-2); overflow:hidden; }
  .rl-how > summary { cursor:pointer; padding:11px 14px; font-size:.9rem;
                      font-weight:600; list-style:none; display:flex;
                      align-items:center; gap:8px; }
  .rl-how > summary::-webkit-details-marker { display:none; }
  .rl-how > summary::after { content:"+"; margin-left:auto; color:var(--dim);
                             font-weight:700; font-size:1.05rem; }
  .rl-how[open] > summary::after { content:"–"; }
  .rl-how p { margin:0; padding:0 14px 14px; font-size:.9rem; line-height:1.6;
              color:var(--fg); }

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
  .rl-clock.is-over { color:var(--rl-accent); }
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
  /* .14s ease is the lesson player's own timing - lesson-template.html
     line 252. Kept identical so the two bars feel like one control. */
  .rl-tick { flex:1; background:var(--fg); border-radius:1px;
             transition:background .14s ease, opacity .14s linear; }
  .rl-tick.spent { background:var(--line); }
  /* The live edge keeps the unspent colour and fades by inline opacity. */
  .rl-tick.edge { background:var(--rl-live); }
  .rl-scrub.dragging .rl-tick { transition:none; }
  .rl-scrub.is-over .rl-tick { background:var(--rl-accent); }

  /* 🚨 PLAY SITS ALONE SO IT IS ACTUALLY CENTRED. Paul, 2026-09-03: "the
     play button also needs to be centered and you can put the reset next to
     the time limit adjustment." Two buttons centred as a PAIR leaves neither
     on the centre line - the same mistake as centring a box instead of its
     text. Reset moves down beside the target, where it belongs anyway:
     both are settings, and play is the thing you press. */
  .rl-row { display:flex; align-items:center; justify-content:center; }
  /* ⚠️ RESET IS A SMALL CIRCLE, and the GLYPH inside it does not shrink.
     Paul, 2026-09-03: "make that reset timer box button smaller not the
     icon itself inside of it. and maybe if you really want you can make it
     a circle I think it might match better."
     He is right that it matches: play is the rectangle because it is the
     primary control the lesson player draws that way, and a round secondary
     beside it reads as a different KIND of button rather than a competing
     one. Padding goes to zero and the box becomes square-then-round, so the
     17px icon is unchanged and only the box around it tightens. */
  .rl-ico.rl-small { width:34px; height:34px; min-width:0; padding:0;
                     border-radius:50%; opacity:1; }
  .rl-ico.rl-small svg { width:17px; height:17px; }
  /* 🚨 SQUARE, NOT ROUND. Paul, 2026-09-03: "the play button doesnt have to
     be circle it can be square like the voice engine." The lesson player draws
     every control as border-radius:3px (lesson-template.html line 230), so a
     pill or a circle here was the last thing making the two look unrelated. */
  /* ⚠️ RECTANGLE, wider than tall. Paul: "well I guess it is rectangle not
     really square." The player draws its controls with padding:9px 10px on a
     3px radius, so they come out wider than they are tall. Sized the same way
     here - padding sets the width, height is fixed. */
  .rl-ico { min-width:56px; height:40px; padding:0 14px; border-radius:3px; display:grid;
            place-items:center; cursor:pointer; padding:0;
            border:1px solid var(--line); background:var(--panel-2); color:var(--fg); }
  .rl-ico svg { width:22px; height:22px; display:block; }
  .rl-ico.is-go { background:var(--fg); color:var(--bg); border-color:var(--fg);
                  min-width:74px; height:46px; padding:0 20px; border-radius:3px; }
  .rl-ico.is-go svg { width:26px; height:26px; }
  /* The bell state. A gentle pulse so it reads as ASKING for a tap rather
     than as a new button that appeared. ⚠️ Honours reduced-motion: the
     colour change alone still says time is up. */
  .rl-ico.is-ringing { animation:rl-ring 1.1s ease-in-out infinite; }
  @keyframes rl-ring { 0%,100% { transform:scale(1); } 50% { transform:scale(1.06); } }
  @media (prefers-reduced-motion:reduce) { .rl-ico.is-ringing { animation:none; } }
  .rl-ico:hover { border-color:var(--fg); }
  /* 🚨 RESET IS NEVER DISABLED-INVISIBLE. Paul, 2026-09-03: "I do not see
     restart icon." It was there - disabled at .4 opacity, which on a dark
     dock reads as absent rather than as unavailable. A control the eye
     cannot find is a missing control, whatever the DOM says.
     Reset does nothing harmful when the timer is at zero, so it is simply
     always available now, and drawn in the dock ink like the clock. */
  .rl-ico:disabled { opacity:.55; cursor:default; }

  /* A visually-hidden label: present for a screen reader, gone from the eye. */
  .rl-sr { position:absolute; width:1px; height:1px; padding:0; margin:-1px;
           overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; border:0; }
  /* 🚨 THE ROW CENTRES ON THE NUMBER, NOT ON NUMBER-PLUS-RESET. Reset is
     taken out of flow and pinned right, so the figure stays on the dock
     centre line - the same fix as the play button, which stopped being
     centred the moment a second control shared its row. */
  /* 🚨 A THREE COLUMN GRID SO THE BOX ITSELF LANDS ON THE CENTRE LINE.
     justify-content:center centred the input AND the word min as a pair,
     which left the box 15px off. Same failure as the play button beside
     reset, and as centring a heading whose box has a max-width: centring a
     GROUP is not centring the thing inside it.
     Column 2 holds only the input, so it sits dead centre; min sits in
     column 3 and reset is absolute, neither pulling on it. */
  .rl-target { position:relative; display:grid;
               grid-template-columns:1fr auto 1fr; align-items:center;
               column-gap:8px; width:100%; max-width:320px;
               color:var(--dim); font-size:.84rem; margin:0; }
  .rl-target input { grid-column:2; }
  /* ⚠️ RESET HUGS THE BOX, MIRRORING "min". Paul, 2026-09-03: "move that
     restart icon closer to the timer text about the same length as the min
     abbreviation." It was absolute at left:0 of a 320px row, so it sat far
     out on its own. It is column 1 with justify-self:end now, so the gap on
     its side equals the column-gap on min's side - symmetric, and the input
     still owns column 2 and stays dead centre. */
  .rl-target .rl-ico.rl-small { grid-column:1; justify-self:end; position:static;
                                transform:none; }
  .rl-target > span { grid-column:3; justify-self:start; }
  .rl-target input { font:inherit; width:4.6em; text-align:center; padding:6px 8px;
                     border-radius:9px; border:1px solid var(--line);
                     background:var(--bg); color:var(--fg); }

  /* 🚨 THE SPINNER WAS PUSHING THE DIGITS OFF CENTRE. Paul, 2026-09-03:
     "the 30 minute text in the middle of the time adjuster box is not
     Center so when you type something like 60 in there the text will be
     Center ... if I type in 120 it will still be Center."
     text-align:center was already set and was already doing its job - but a
     number input reserves room on the RIGHT for its up/down arrows, and the
     text centres in what is LEFT OVER. So the digits sat left of true
     centre, and by a different amount for 30, 60 and 120.
     ⚠️ Same shape of mistake as the heading and the play button: the thing
     was centred inside a box that was not the box you can see.
     The arrows go; the field is typed into, not nudged. */
  .rl-spot input[type=number]::-webkit-outer-spin-button,
  .rl-spot input[type=number]::-webkit-inner-spin-button,
  .rl-target input::-webkit-outer-spin-button,
  .rl-target input::-webkit-inner-spin-button {
    -webkit-appearance:none; appearance:none; margin:0;
  }
  .rl-spot input[type=number], .rl-target input { -moz-appearance:textfield;
                                                  appearance:textfield; }

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
  /* ⚠️ CENTRED, NOT LEFT. Paul, 2026-09-03: "that text box for which book
     doesn't look centered." It is the only capped control in a 560px form,
     so at 420px it sat left with 140px of empty space beside it while everything else
     ran full width. margin-inline:auto puts it on the form's centre line.
     ⚠️ Capping a width and centring its box are two separate jobs - the same
     note that already applies to the heading and the crumb. */
  .rl-field select {
    appearance:none; -webkit-appearance:none; -moz-appearance:none;
    max-width:420px; margin-inline:auto;
    padding-right:42px;
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat:no-repeat;
    background-position:right 14px center;
    background-size:18px 18px;
  }

  .rl-lab { font-weight:600; font-size:.93rem; }
  /* THE STAR IS DECORATION, THE MESSAGE IS THE ANSWER. It is aria-hidden,
     because a screen reader saying "Book star" tells nobody anything; the
     inputs carry aria-required instead.
     Red alone is not a signal every reader can see, which is why each
     required box also refuses to save and says which one it is by name. */
  .rl-req { color:#c0392b; font-weight:700; margin-left:2px; }
  :root:not([data-theme=light]) .rl-req { color:#ff8a84; }
  /* One end of the range: Ch [ ] p. [ ]. The little words carry the
     meaning so the boxes can stay small. */
  /* 🚨 THREE COLUMNS: 1fr auto 1fr. Paul, 2026-09-03: "spread out the four
     boxes ... center to in the middle. you have Ch and To too close
     together. make the end of the second box the same distance at the end
     of the book text box."
     A flex row packed everything to the left and left to hard against the
     second Ch. With 1fr on each side the first pair sits at the form's left
     edge, the second pair ENDS on its right edge - flush with the Book
     field above, because the range spans the same 560px form - and to lands
     dead centre with equal air on both sides.
     ⚠️ It is the same fix as the timer row: centring a GROUP is not centring
     the thing inside it. Give the middle item its own column. */
  .rl-range { display:grid; grid-template-columns:1fr auto 1fr;
              align-items:center; column-gap:16px; width:100%; }
  .rl-range > .rl-spot:first-of-type { justify-self:start; }
  .rl-range > .rl-spot:last-of-type  { justify-self:end; }
  /* ⚠️ THE SAME FIVE-COLUMN SHAPE ON DESKTOP. A flex row opens with a
     label and closes with a box, so the boxes sit right of the row's
     centre - the exact thing Paul spotted on mobile. The trailing empty
     column balances it here too. */
  .rl-spot { display:grid; grid-template-columns:2.1rem 70px 2.1rem 70px 2.1rem;
             align-items:center; column-gap:10px; }
  .rl-spot::after { content:""; }
  .rl-spot .rl-mini { text-align:center; }
  .rl-spot input { width:100%; max-width:none; text-align:center; }
  .rl-mini { color:var(--dim); font-size:.84rem; white-space:nowrap; }
  .rl-to { color:var(--fg); font-weight:600; font-size:.9rem; text-align:center; }
  .rl-pages { display:flex; align-items:center; gap:8px; }
  /* ⚠️ DIGITS CENTRE IN THEIR BOX. Paul, 2026-09-03: "make when you write
     those numbers those numbers are centered in that text box." A page or
     chapter number is one to three characters in a 110px box, so left-aligned
     it floats against the edge. The target already did this; these did not. */
  .rl-pages input { width:100%; max-width:110px; text-align:center; }
  .rl-dash { color:var(--dim); }
  /* ⚠️ TALLER WRITING BOXES. Paul, 2026-09-03: "on the text where you write
     your own summaries you can make those slightly bigger from top and down."
     96px was two lines and made a few sentences feel like too much to ask. */
  .rl-field textarea { min-height:150px; }
  .rl-check { display:flex; align-items:center; gap:10px; font-weight:600; font-size:.93rem; }
  .rl-check input { width:20px; height:20px; accent-color:var(--rl-accent); }
  .rl-save { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
  /* ⚠️ A PLAIN BUTTON MUST NOT SINK INTO THE CARD IN DARK MODE. Paul,
     2026-09-03: "that look up button is also a little too dark on dark
     mode." --panel-2 is barely lighter than --panel, so on a dark card the
     button had almost no edge and read as disabled. It sits on --panel-2
     with a FIRMER border and full-strength text now, which is the same
     lesson already in CLAUDE.md: light needs firmer borders than dark, and
     a .5 opacity that reads as dimmed on one theme reads as broken on the
     other. Here the fix runs the other way - dark needed the firmer edge. */
  /* 🚨 GRAPHITE BLUE, SAME AS PLAY. Paul, 2026-09-03: "make the lookup play
     button the same thing color like graphite blue." Look It Up and Save are
     the two things you press on this page, so they wear the accent the play
     button wears. An outline button beside a filled one read as secondary and
     as too dark before that.
     ⚠️ --rl-accent is declared on .rl-wrap as well as .rl-dock, which is why
     a button inside a CARD can reach it. Declare it in one place only and
     these go colourless. */
  .rl-btn { font:inherit; font-weight:600; cursor:pointer; border-radius:3px;
            border:1px solid var(--rl-accent); background:var(--rl-accent);
            color:var(--rl-on-accent); padding:11px 20px; min-height:44px; }
  .rl-btn:hover { filter:brightness(1.06); }
  /* ⚠️ .is-go NO LONGER RECOLOURS. Save used to be white while Look It Up
     went graphite blue, which made the SECONDARY action the loud one. Both
     are accent now; is-go is kept only as a hook. */
  .rl-btn.is-go { font-weight:700; }
  .rl-msg { color:var(--dim); font-size:.88rem; }
  .rl-msg.is-ok { color:var(--rl-accent); }
  .rl-msg.is-bad { color:#e0a33c; }
  .rl-msg.is-hint { color:var(--dim); }
  /* the locked Save. Faint and unclickable, never hidden - a button that
     disappears reads as broken, one that is dimmed reads as not yet. */
  .rl-btn.is-locked { opacity:.42; cursor:not-allowed; }
  #rlTarget:disabled { opacity:.55; cursor:not-allowed; }
  .rl-btn.is-locked:hover { filter:none; }

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
  /* The time read, on the closed row. Same weight as the date, in the
     accent, because it is the number the log exists for. */
  .rl-dur { color:var(--rl-accent); font-size:.85rem; font-weight:700;
            white-space:nowrap; }
  .rl-tag { font-size:.72rem; font-weight:700; text-transform:uppercase;
            letter-spacing:.06em; padding:3px 9px; border-radius:999px;
            border:1px solid var(--line); color:var(--dim); }
  .rl-tag.is-done { color:var(--rl-accent); border-color:var(--rl-accent); }
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
  /* 🚨 text-align ALONE DID NOT CENTRE THE HEADING. Paul, 2026-09-03: "also
     the what you read title can be Center." It already computed
     text-align:center - but ns.css gives a heading a max-width for line
     length, so its BOX was 259px inside a 760px card and sat 229px left of
     centre. The text was centred inside a box that was not.
     ⚠️ THIRD TIME THIS EXACT TRAP HAS BITTEN ON THIS PAGE: the page header,
     the crumb, and now this. It is already written in CLAUDE.md - anything
     with a max-width needs margin-inline:auto as well as text-align. */
  .rl-card h2, .rl-card > .rl-note {
    text-align:center; margin-inline:auto; max-width:100%;
  }


  /* ── THE VOICE PLAYER'S PALETTE ───────────────────────────────────────
     Paul, 2026-09-03: "can you also make this match the same theme as the
     voice engine?"

     🚨 GRAPHITE, NOT VERDIGRIS. Paul, 2026-09-03: "that green does not match
     make it match like the graphite theme color." He is right and I picked the
     wrong one: verdigris is the palette the CSS variables are NAMED after, but
     THEMES.graphite is what the player actually loads - lesson-template.html
     line 1107, "Graphite is the default reading theme. Paul, 2026-08-29."
     ⚠️ Reading the variable names is not reading the theme. The values below
     are THEMES.graphite, lifted, not invented:
       light  accent #3A4A63  tickNow #242E3F  tickDone rgba(58,74,99,.30)  onAccent #F5F5F7
       dark   accent #8CA5CC  tickNow #5C79A6  tickDone rgba(140,165,204,.28) onAccent #0F1013

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
    --rl-accent:#3A4A63;
    --rl-live:#242E3F;
    --rl-spent:rgba(58,74,99,.30);
    --rl-on-accent:#F5F5F7;
  }
  @media (prefers-color-scheme:dark) {
    :root:not([data-theme="light"]) .rl-dock,
    :root:not([data-theme="light"]) .rl-wrap {
      --rl-accent:#8CA5CC; --rl-live:#5C79A6;
      --rl-spent:rgba(140,165,204,.28); --rl-on-accent:#0F1013;
    }
  }
  :root[data-theme="dark"] .rl-dock, :root[data-theme="dark"] .rl-wrap {
    --rl-accent:#8CA5CC; --rl-live:#5C79A6;
    --rl-spent:rgba(140,165,204,.28); --rl-on-accent:#0F1013;
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

  .rl-msg.is-ok { color:var(--rl-accent); }
  .rl-tag.is-done { color:var(--rl-accent); border-color:var(--rl-accent); }
  .rl-check input { accent-color:var(--rl-accent); }


  /* ── THE DOCK WEARS THE PLAYER'S SKIN, NOT JUST ITS ACCENT ────────────
     Paul, 2026-09-03: "yeah but make it look closer to the actual engine."
     Matching only the accent left a graphite BUTTON on an ns.css panel, so
     it still read as a different control. The lesson player's bar is built
     from --surface, --rule, --surface-2, --ink and --control-bg, so the dock
     takes all of them from THEMES.graphite too.
     ⚠️ Only the DOCK. The cards above it stay on ns.css tokens, because they
     are page furniture and should match the rest of the site - the player is
     the thing that should feel lifted out of a lesson. */
  .rl-dock {
    --rl-surface:#F5F5F7; --rl-s2:#DBDBDF; --rl-rule:#C6C7CC;
    --rl-ink:#17181B; --rl-ink-soft:#4C4E54;
    --rl-ctl-bg:#333F55; --rl-ctl-ink:#EFF0F3; --rl-ctl-border:#242E3F;
    background:var(--rl-surface);
    border-top:1px solid var(--rl-rule);
    box-shadow:0 -1px 2px rgba(21,32,24,.07), 0 -8px 24px rgba(21,32,24,.07);
    color:var(--rl-ink);
  }
  @media (prefers-color-scheme:dark) {
    :root:not([data-theme="light"]) .rl-dock {
      --rl-surface:#1B1D21; --rl-s2:#25272D; --rl-rule:#2F323A;
      --rl-ink:#E4E5E9; --rl-ink-soft:#989BA4;
      --rl-ctl-bg:#222630; --rl-ctl-ink:#E0E3EA; --rl-ctl-border:#414755;
      box-shadow:0 -6px 24px rgba(0,0,0,.34);
    }
  }
  :root[data-theme="dark"] .rl-dock {
    --rl-surface:#1B1D21; --rl-s2:#25272D; --rl-rule:#2F323A;
    --rl-ink:#E4E5E9; --rl-ink-soft:#989BA4;
    --rl-ctl-bg:#222630; --rl-ctl-ink:#E0E3EA; --rl-ctl-border:#414755;
    box-shadow:0 -6px 24px rgba(0,0,0,.34);
  }

  .rl-dock .rl-clock { color:var(--rl-ink); }
  .rl-dock .rl-elapsed, .rl-dock .rl-target { color:var(--rl-ink-soft); }
  .rl-dock .rl-target input { background:var(--rl-surface); color:var(--rl-ink);
                              border-color:var(--rl-rule); }

  /* An unspent tick is the player's --surface-2, exactly as in a lesson. */
  .rl-dock .rl-tick { background:var(--rl-live); }
  .rl-dock .rl-tick.spent { background:var(--rl-s2); }

  /* 🚨 PLAY IS THE ACCENT, NOT ctlBg. Paul, 2026-09-03: "you also made the
     play button too dark so make sure it matches the same theme color."
     I had used graphite ctlBg #222630, which is what the player uses for a
     control - but in the player that button sits inside a lit settings row,
     whereas here it is the one thing you press on a #1B1D21 dock. Near-black
     on near-black. The ACCENT is the theme colour in the sense he means:
     #8CA5CC dark, #3A4A63 light, with onAccent ink on top. */
  .rl-dock .rl-ico.is-go { background:var(--rl-accent); color:var(--rl-on-accent);
                           border-color:var(--rl-accent); }
  .rl-dock .rl-ico.is-go:hover { filter:brightness(1.06); }
  .rl-dock .rl-ico { background:var(--rl-surface); color:var(--rl-ink);
                     border-color:var(--rl-rule); }
  /* ⚠️ RESET IS A FILLED GRAPHITE BOX WITH A DARK GLYPH. Paul, 2026-09-03:
     "on the reset timer icon box can you make that the same graphite color
     and then the icon itself make that black." It was an outline, which read
     as secondary next to the filled play button. Filled now, same accent as
     play, with the on-accent ink on top so the glyph reads dark. */
  .rl-dock .rl-ico.rl-small { background:var(--rl-accent); color:var(--rl-on-accent);
                              border-color:var(--rl-accent); opacity:1; }
  .rl-dock .rl-ico.rl-small:hover { filter:brightness(1.06); }
  .rl-dock .rl-ico:hover { border-color:var(--rl-ctl-bg); }


  /* ── THE FIELDS ARE WHITE INSIDE, IN BOTH THEMES ──────────────────────
     Paul, 2026-09-03: "all of the text boxes are still black and I need them
     to be white on the inside. including the one to a drop down options."

     They were var(--bg), which is near-black in dark mode, so a form on a
     dark page was black boxes on a dark card. They are paper now: white
     ground, graphite ink, whatever the theme is.

     🚨 THE INK MUST MOVE WITH THE GROUND. A white background with var(--fg)
     text is white-on-white the moment dark mode is on - the exact bug already
     recorded in CLAUDE.md about a worksheet that set background:#fff alone.
     So every one of these sets BOTH.
     ⚠️ AND THE PLACEHOLDER TOO. It inherits nothing useful and would stay a
     pale grey that vanishes on white.
     ⚠️ <option> needs its own colours. A native dropdown list is drawn by the
     OS and does not inherit the select's background on Windows or Android. */
  /* 🚨 background-color, NOT background. Paul, 2026-09-03: "there is also a
     bunch of down arrows right now in what book drop down window?" The
     shorthand RESETS background-repeat to repeat, so the select arrow tiled
     across the whole box - a row of chevrons instead of one.
     ⚠️ This is the exact rule already written in CLAUDE.md: "Never leave a
     shorthand after the longhand it overwrites." It caught the lesson
     player once and it caught me here. Longhands only in this block. */
  .rl-field input, .rl-field textarea, .rl-field select,
  .rl-dock .rl-target input {
    background-color:#FFFFFF; color:#17181B; border-color:#C6C7CC;
  }
  .rl-field input::placeholder, .rl-field textarea::placeholder,
  .rl-dock .rl-target input::placeholder { color:#7F8189; opacity:1; }
  .rl-field select option { background:#FFFFFF; color:#17181B; }
  .rl-field input:focus-visible, .rl-field textarea:focus-visible,
  .rl-field select:focus-visible {
    outline:2px solid var(--rl-accent); outline-offset:1px; border-color:var(--rl-accent);
  }
  /* The arrow is drawn on that white ground now, so it needs the ink colour
     rather than the mid grey that suited a dark box. */
  .rl-field select {
    background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2317181B' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-color:#FFFFFF;
  }


  /* 🚨 TOUCH TARGETS ON A PHONE. Measured at 320x568: reset was 40x32 and
     the target box 62x36, both under the 44px minimum a finger needs. They
     were sized for a mouse, and the dock is the part of this page most
     likely to be used one-handed while actually holding a book.
     ⚠️ Only under 560px, so the desktop dock keeps its tighter proportions. */
  @media (max-width:560px) {
    /* ⚠️ Still 44px on a phone - it shrinks, but not below a finger. */
    .rl-ico.rl-small { width:44px; height:44px; min-width:0; }
    .rl-target input { height:44px; padding-block:0; }
    .rl-spot input { height:44px; }
  }


  /* 🚨 A SHORTER PAGE HEADER ON A PHONE, SO THE LOG IS THE FIRST THING YOU
     REACH. Paul, 2026-09-03: "that way they only see the log itself which is
     further down the page." Collapsing the instructions was most of it, but
     on a 320px screen the site header still ate 320px and pushed the first
     control below the fold. Trimmed here rather than in ns.css, because this
     style block only ships on this page - every other page keeps its
     generous header. */
  @media (max-width:560px) {
    .phead { padding-block:22px 16px; }
    .phead h1 { font-size:clamp(1.7rem,8vw,2.2rem); margin-bottom:8px; }
    .phead p { font-size:.95rem; }
    .rl-card { padding:16px 14px; }
    .rl-card h2 { font-size:1.05rem; }
  }



  @media (max-width:520px) {
    /* 🚨 THE TWO ROWS SHARE ONE COLUMN GRID SO THEY LINE UP EXACTLY. Paul,
       2026-09-03: "the chapter and page boxes are not exactly adjusted for
       the center on Mobile. they need to be spaced apart symmetrically. I
       don't know how to explain but it's off."
       Each row was its OWN centred flex line, so the two rows centred
       independently and their boxes did not sit above one another. Both
       rows are the same four-column grid now - label, box, label, box - at
       fixed widths, so Ch sits over Ch and Pg sits over Pg, and the pair is
       centred as a unit rather than line by line.
       ⚠️ Same mistake as everything else on this page: centring each PIECE
       is not the same as centring the thing they make together. */
    .rl-range { grid-template-columns:1fr; row-gap:10px; justify-items:center; }
    /* ⚠️ WIDER GAPS INSIDE EACH ROW, ROW STILL CENTRED. Paul, 2026-09-03:
       "space chapter and Page further apart by still making them Center
       though ... I really wanted you to still keep them symmetrical but I
       think theyre still close together."
       The earlier fix made the two rows line up, which was the alignment
       problem, but left them cramped at an 8px gap. 20px now. The row is a
       grid centred as a unit, so widening the gaps pushes Ch and Pg apart
       WITHOUT moving the row off centre - which is the thing that kept
       going wrong when this was a flex line.
       ⚠️ Fits 320px: 17+70+16+70 plus three 20px gaps is 233 in a 263 form. */
    /* 🚨 CENTRE THE BOXES, NOT THE ROW. Paul, 2026-09-03: "it needs to come
       over to the left slightly because it just does not look Center and I
       think you're trying to send her on the text and not on the boxes."
       He read it exactly right. The row measured 0px off centre every time,
       but a row runs [Ch][box][Pg][box] - it OPENS with a label and CLOSES
       with a box. So the two white boxes, which are the only things the eye
       tracks, sat 18.7px right of centre while the maths said perfect.
       The fix is a fifth, empty column the same width as a label, added
       through ::after. With equal label columns L and gap g the row is
       L g 70 g L g 70 g L, and the boxes are then symmetric about the
       centre by construction rather than by a nudge.
       ⚠️ The label columns must be a FIXED width for that symmetry to hold;
       auto columns size to their text and Ch is wider than Pg. */
    .rl-range > .rl-spot {
      display:grid;
      grid-template-columns:2.2rem 70px 2.2rem 70px 2.2rem;
      align-items:center; column-gap:16px; justify-self:center;
    }
    .rl-range > .rl-spot::after { content:""; }
    .rl-range > .rl-spot .rl-mini { text-align:center; }
    .rl-range > .rl-spot input { max-width:none; width:100%; }
    /* 🚨 THESE TWO MUST NAME THE SAME PSEUDO-CLASSES AS THE DESKTOP RULES.
       .rl-range > .rl-spot:first-of-type is MORE SPECIFIC than
       .rl-range > .rl-spot, so the desktop start/end pinning survived inside
       the media query and kept the two rows hard left and hard right - which
       is exactly the off-centre stagger Paul described. A media query does
       not raise specificity; only the selector does. */
    .rl-range > .rl-spot:first-of-type,
    .rl-range > .rl-spot:last-of-type { justify-self:center; }
    .rl-to { justify-self:center; }
    /* 🚨 A STACKED BUTTON MUST NOT STRETCH. Paul, 2026-09-03: "that look it
       up button on mobile is way too large. remember buttons and text boxes
       dont need to be fully like that."
       Dropping to one column made the button a grid ITEM in a 1fr track, so
       it filled the width - a full-bleed bar for two words. Same complaint
       he already made about the desktop fields. A button is sized by its
       label; justify-self:start keeps it that size and puts it under the
       input where a stacked control belongs. */
    .rl-isbn { grid-template-columns:1fr; }
    /* ⚠️ CENTRED ON MOBILE. Paul, 2026-09-03: "center that lookup button on
       mobile. make it on the left side on desktop if you want."
       Centred here because a stacked control under a full-width input has
       no edge to belong to, so left-aligned it reads as orphaned.
       ⚠️ DESKTOP LEFT WAS OFFERED AND DECLINED. There the button sits to the
       RIGHT of the ISBN field, which is the order you use it in - type the
       number, then press. Putting it left would have you reaching back past
       the field you just filled. Say the word if you would rather have it
       left anyway; this is a judgement call, not a rule. */
    .rl-isbn .rl-btn { justify-self:center; width:auto; }
    .rl-save .rl-btn { width:auto; }
    body { padding-bottom:150px; }
  }

  /* 🚨 THIS BLOCK MUST STAY LAST. It narrows the row for the smallest
     phones, and the 520px block above also sets grid-template-columns on
     the same selector at the same specificity - so whichever comes LATER
     wins. Placed before it, this rule was simply ignored and 320px kept
     overflowing. Order is the only thing separating them.
     parts to keep the same symmetry. At 320px the five-column row came to
     310px and overflowed. Narrower labels, narrower boxes and a tighter gap
     keep the SHAPE identical - three equal label columns, two equal boxes -
     which is what makes the boxes centre. Do not drop the fifth column to
     save space; that is the thing doing the centring. */
  @media (max-width:360px) {
    .rl-range > .rl-spot {
      grid-template-columns:1.9rem 60px 1.9rem 60px 1.9rem;
      column-gap:10px;
    }
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
  bell:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6a1.15 1.15 0 0 1 1.15 1.15v.7A6.1 6.1 0 0 1 18.1 10.4v3.05l1.5 2.4a.9.9 0 0 1-.76 1.38H5.16a.9.9 0 0 1-.76-1.38l1.5-2.4V10.4A6.1 6.1 0 0 1 10.85 4.45v-.7A1.15 1.15 0 0 1 12 2.6z"/><path d="M9.9 18.9h4.2a2.1 2.1 0 0 1-4.2 0z"/></svg>',
  reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4.5V10h5.5"/></svg>',
};

function markup() {
  return styles + `
<div class="rl-wrap">

  <section class="rl-card">
    <h2>What You Read</h2>
    <!-- 🚨 THE EXPLANATION IS COLLAPSED, AND CLOSED BY DEFAULT. Paul,
         2026-09-03: "there is a bunch of text under the reading log ... can
         you make them into one and put it in a collapsible window ... that
         way they only see the log itself which is further down the page."
         Two paragraphs of instructions sat between the heading and the first
         field, so the thing you actually use was pushed off the screen. It
         is one paragraph now, behind a native <details> - no script, works
         with a keyboard, and open by choice rather than by default. -->
    <details class="rl-how">
      <summary>How this works</summary>
      <p>Start the timer at the bottom of the screen, read, then fill this in when you stop.
         Put in the book, where you started and where you stopped, and a few sentences about
         what happened. Everything marked with a red star has to be filled in, and the timer has
         to finish, before a session will save. Every session is stored underneath so you can look
         back at what you have read and how long you spent on it.</p>
    </details>

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
        <label for="rlTitle">Book<span class="rl-req" aria-hidden="true">*</span></label>
        <input type="text" id="rlTitle" placeholder="The title of the book" autocomplete="off" aria-required="true">
      </div>

      <!-- 🚨 CHAPTER AND PAGES, not "from page" and "to page". Paul,
           2026-09-03: "you can also put the page start and Page end I would
           change it to chapter and pages."
           ⚠️ THE TWO PAGE BOXES SURVIVE, grouped under one Pages label. They
           are what makes "Continue [Book]" able to prefill the next page, so
           collapsing them into one free-text box would quietly kill that.
           Chapter is free text because a chapter can be "4" or "4-5" or
           "The Long Winter". -->
      <!-- 🚨 THE AXIS IS FROM / TO, NOT CHAPTER / PAGE. Paul, 2026-09-03:
           "you have chapter from chapter and page to page. it's chapter and
           page from chapter and page. so chapter 3 page 8 to chapter 5 to
           page 9."
           I had grouped it by FIELD - a chapter pair and a page pair - which
           reads as two unrelated ranges. A reading session is ONE range with
           two ends, and each end is a chapter AND a page. Grouped by end now.
           ⚠️ The four input ids are unchanged, so the engine, the saved
           entries and the Continue prefill all still work. -->
      <!-- ⚠️ Ch and Pg. Paul, 2026-09-03, in two steps: first "I don't like
           that chapter Ch and p for your abbreviations", then "instead of
           chapter and page you can use abbreviations Ch and Pg."
           The objection was to "p." specifically, not to abbreviating at
           all - p. is a citation mark, Pg is what a person actually writes.
           Spelling both words out was the overcorrection in between.
           The word "to" stays: it is what makes the two halves read as ONE
           range rather than two separate questions. -->
      <div class="rl-field">
        <span class="rl-lab">What you read<span class="rl-req" aria-hidden="true">*</span></span>
        <!-- ⚠️ PLACEHOLDERS ARE 0, NOT EXAMPLE NUMBERS. Paul, 2026-09-03:
           "if you're going to put free text in those boxes just put zeros."
           They read as 3, 8, 5, 9 - which looks like a filled-in answer
           rather than an empty box, and invites copying the example. A zero
           says the shape of what goes here and nothing more. -->
      <div class="rl-range">
          <span class="rl-spot">
            <span class="rl-mini">Ch</span>
            <input type="text" id="rlChapter" aria-label="Chapter you started at"
                   placeholder="0" autocomplete="off">
            <span class="rl-mini">Pg</span>
            <input type="number" id="rlFrom" min="1" max="99999" inputmode="numeric"
                   aria-label="Page you started at" placeholder="0">
          </span>
          <span class="rl-to">To</span>
          <span class="rl-spot">
            <span class="rl-mini">Ch</span>
            <input type="text" id="rlChapterTo" aria-label="Chapter you stopped at"
                   placeholder="0" autocomplete="off">
            <span class="rl-mini">Pg</span>
            <input type="number" id="rlTo" min="1" max="99999" inputmode="numeric"
                   aria-label="Page you stopped at" placeholder="0">
          </span>
        </div>
      </div>

      <div class="rl-field">
        <label for="rlSummary">What happened<span class="rl-req" aria-hidden="true">*</span> <span class="rl-hint">a few sentences is plenty</span></label>
        <textarea id="rlSummary" placeholder="Write briefly about what you just read." aria-required="true"></textarea>
      </div>

      <div class="rl-field">
        <label for="rlLiked">What you liked<span class="rl-req" aria-hidden="true">*</span> <span class="rl-hint">or did not like, that counts too</span></label>
        <textarea id="rlLiked" placeholder="What you liked about it?" aria-required="true"></textarea>
      </div>

      <label class="rl-check"><input type="checkbox" id="rlFinished"> I finished this book</label>

      <div class="rl-save">
        <button type="button" class="rl-btn is-go" id="rlSave">Save Session</button>
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
      <button type="button" class="rl-ico rl-small" id="rlReset" aria-label="Reset the timer">${ICON.reset}</button>
      <!-- ⚠️ NO VISIBLE "Target" LABEL. Paul, 2026-09-03: "dont put the word
           Target in the time adjuster just put that text box and put it in
           the center." The box sits under a clock and is followed by "min",
           so a word saying what it is adds nothing. The label stays for
           screen readers: a bare number input with no accessible name is a
           real problem, not a cosmetic one. -->
      <label class="rl-sr" for="rlTarget">Target in minutes</label>
      <input type="number" id="rlTarget" min="1" max="600" step="5" value="30">
      <span>min</span>
    </p>
    <p class="rl-elapsed" id="rlElapsed">Not started</p>
  </div>
</div>`;
}

module.exports = { markup, ICON };
