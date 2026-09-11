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
node tools/check-escape.js .     # account-panel text escaped for the attribute it lands in
node tools/check-links.js .      # LAST OF ALL
```

## 📋 THE REVIEW QUEUE — MOVED TO Core_Memory, 2026-09-11

```
node tools/build-review.js --serve      # from Core_Memory, NOT from here
```

🚨 **It is not a NexStudents tool any more.** Paul widened it to cover every question I
have, on any project: *"if you can give me all your questions this way it help me not miss
them while you are trying to write code."* A queue buried in one site.s repo has nowhere to
put a MyWika or a YouTube-script question, so it lives in `Core_Memory/tools/` with the queue
at `Core_Memory/review-queue.json`, grouped by project.

⚠️ **Never ask him a question in chat.** It goes in the queue; chat gets one line and the
Tailscale link. → `feedback-one-review-queue` and `feedback-remote-means-tailscale` in memory.

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
