# NexStudents build tools

**Everything on this site is generated. Do not hand-edit a generated page** —
the next rebuild overwrites it. Edit the data, then rebuild.

These lived in a Windows temp folder until 2026-08-24. They are in the repo now
because they are the only things that can rebuild the site.

## Rebuild everything

🚨 **RUN EVERY GENERATOR, NOT THE ONE YOU THINK YOU CHANGED.** `nav.js` feeds
four of them. On 2026-09-02 the header fix went in, three were re-run, and
`build-lessons.js` was not — commit `f4bf66aa` touched 27 site pages, 12
worksheets and **zero lesson pages**. For a day every lesson on the live site
carried the old header and the old drawer while the home page carried the new
ones, and nothing said so. Paul found it on his phone.

```
node tools/build-worksheets.js .
node tools/build-lessons.js . tools/lesson-template.html
node tools/build-math.js .
node tools/build-english.js .
node tools/build-integers.js .
node tools/build-pages.js .
node tools/build-sitemap.js .

node tools/split-lesson-engine.js       # THEN THESE TWO, IN THIS ORDER
node tools/extract-lesson-assets.js

node tools/check-nav-css.js .    # the shared nav is styled in BOTH stylesheets
node tools/check-contrast.js .   # every text colour, in BOTH themes
node tools/check-links.js .      # LAST OF ALL
```

## 📋 THE REVIEW QUEUE — how a batch ends

```
node tools/build-review.js .          # build review/index.html from tools/review-queue.json
node tools/build-review.js . --serve  # build it and serve it on TAILSCALE + loopback
```

🚨 **IT SERVES ON TAILSCALE, NOT JUST LOOPBACK.** `http://100.91.145.95:4321/review/` reaches
this PC from his phone. 127.0.0.1 is reachable only from the machine itself, which is the one
place he is not — he reads this while settling the baby or editing video.
⚠️ **The bare root redirects to `/review/`.** The server has to serve the whole site root or
the iframes cannot load `/assets` and the lesson pages — which meant a URL without `/review/`
landed on NexStudents itself. It did, on his phone. This server exists for one page, so the root
belongs to that page.
⚠️ **The Tailscale address, never 0.0.0.0.** Binding to everything would put a page of
unfinished work and open questions on the local network too.

🚨 **NEVER ask Paul a question mid-batch.** Everything needing his judgement goes in the queue
and the batch keeps moving. He comes back from video editing to ONE page: what is done, and what
needs him now.

- **Write `tools/review-queue.json` as the batch runs.** Shape and every field:
  `tools/review-queue.example.json`. Two arrays, `done` and `needs`, and nothing else.
- **`decision` is the headline and must be answerable** — "One lesson or two?", not a paragraph
  about the page. Add `options` and he can reply in one word.
- **`kind:"page"` frames it live at phone AND desktop width.** A question about a picture cannot
  be answered in text, which is the whole reason this is a page.
- ⚠️ **It must be SERVED, never opened from disk.** The pages it frames link `/assets/...`
  root-absolute, which under `file://` resolves to the drive root and silently loads nothing —
  the same trap that shipped three history PDFs in Times New Roman.
- ⚠️ **`review/` is gitignored and `check-links` skips it.** It links to pages mid-build on
  purpose. The QUEUE JSON is committed, so the next session knows what is still pending.
- ✅ **An empty `needs` is the best result** and renders as one green line.

## 🔭 THE CHECKS ARE "THE OTHER SIDE" — the perspectives that get forgotten

Every check above exists because one perspective was looked at and its opposite was not.
Paul, 2026-09-11: *"you create things you look at it and let's go on one side but you forgot
to look at it on the other side."* The pattern is always the same, and it is always the
**same side that gets forgotten** — which is what makes it scriptable instead of a habit.

| Perspective | The side that gets forgotten | What looks at it |
|---|---|---|
| Dark / light | **light** — dark is the site default | `check-contrast.js` |
| Site page / lesson page | **lesson** — it loads a different stylesheet | `check-nav-css.js` |
| Screen / print | **print** — no check ever renders a page | read the PDF's own draw commands; see CLAUDE.md |
| Built / shelved | **shelved** — a lesson can be live and unreachable | `check-shelves.js` |
| Free / paid | **paid** — a paid file in a public repo | `check-links.js` |
| One grade / another | **the second** — two call sites shelve by grade | `check-shelves.js` |

⚠️ **A perspective with no check is a perspective that will be forgotten again.** When one of
these costs an evening, the fix is a line in this table, not a resolution to be more careful.

🚨 **THE TWO POST-STEPS ARE NOT OPTIONAL AND WERE MISSING FROM THIS LIST.**
`build-lessons.js` writes every lesson page with the whole engine inlined.
`split-lesson-engine.js` lifts the engine out per subject and
`extract-lesson-assets.js` lifts out whatever is still byte-identical across
pages. Skip them and the build "succeeds" while twelve lesson pages grow by
~4,500 lines each — 2,050 KB of pages instead of 559 KB. Found 2026-09-11, when
a rebuild for the history covers produced a 54,000-line diff out of a 15-line
change. **Order matters: split first, extract second.** Extract only pulls out
blocks shared by 2+ pages, and until the engine is split the data and the engine
sit in one script that is unique to each page, so extract finds nothing.

Order matters only in that `build-pages.js` reads `worksheets.js` for the
shelf cards, so run it last.

## What each file is

| File | Does |
|---|---|
| `build-pages.js` | Every inner page: grades, subjects, shelves, the unit pager. One `NAV`, one `shell()`. |
| `build-lessons.js` | Interactive lessons, from `lessons.js` through `lesson-template.html`. Shuffles answer positions with a stable seed. |
| `build-worksheets.js` | Printable worksheets from `worksheets.js`. Refuses to build if a **paid** item has a PDF in its folder. |
| `lessons.js` | Lesson content. Add a lesson here, nowhere else. |
| `worksheets.js` | Worksheet content **and** the paid bundle. `build-pages.js` derives shelf cards from it. |
| `leif-units.js` | The Leif book's 50 lesson titles + which are built. Drives the unit pager. |
| `lesson-template.html` | The lesson shell: read-aloud, themes, answer hunt, print sheet. |
| `make-pdf.js` | Renders a worksheet to a real PDF with headless Chrome. |
| `wrap-lesson.js` | Wraps an artifact-authored page as a standalone site page. |
| `calendar.js` / `schedule2.js` | School-year maths: what fits, what date it finishes. |

## Gotchas

- **`MSYS_NO_PATHCONV=1`** before any script taking a URL path as an argument.
  Git Bash rewrites `/history/` into `C:/Program Files/Git/history/`.
- **Pages serves the OLD build during a rebuild**, so a 200 proves nothing.
  Poll for a content marker, not a status code.
- **A paid PDF in git is a free PDF.** The guard in `build-worksheets.js`
  exists because Pages serves any file it holds.
