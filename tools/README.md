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

node tools/check-nav-css.js .    # the shared nav is styled in BOTH stylesheets
node tools/check-links.js .      # LAST OF ALL
```

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
