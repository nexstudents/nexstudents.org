# NexStudents build tools

**Everything on this site is generated. Do not hand-edit a generated page** —
the next rebuild overwrites it. Edit the data, then rebuild.

These lived in a Windows temp folder until 2026-08-24. They are in the repo now
because they are the only things that can rebuild the site.

## Rebuild everything

```
node tools/build-worksheets.js .
node tools/build-lessons.js . tools/lesson-template.html
node tools/build-pages.js .
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
