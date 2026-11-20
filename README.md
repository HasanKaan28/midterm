# Midterm Study Desk

Interactive study pages for five midterm exams (Fall 2026), published with GitHub Pages.

**Site:** https://hasankaan28.github.io/midterm/

## Courses

| Course  | Exam (Sarajevo time)  | Page                                         |
| ------- | --------------------- | -------------------------------------------- |
| MATH101 | Sat 14 Nov 2026 12:30 | [MATH101/calis.html](MATH101/calis.html)     |
| NS102   | Mon 16 Nov 2026 09:00 | [NS102/calis.html](NS102/calis.html)         |
| ELIT100 | Tue 17 Nov 2026 17:45 | [ELIT100/calis.html](ELIT100/calis.html)     |
| CS103   | Thu 19 Nov 2026 17:45 | [CS103/calis.html](CS103/calis.html)         |
| TRD121  | Fri 20 Nov 2026 17:45 | [TRD121/calis.html](TRD121/calis.html)       |
| ENS101  | Sat 21 Nov 2026 12:30 | [ENS101/calis.html](ENS101/calis.html)       |

## Layout

- `index.html`: landing page with the exam calendar and a countdown per course.
- `<COURSE>/calis.html`: one self-contained study page per course (plan checklist, topic summaries, worked examples, self-graded practice).
- `<COURSE>/*.md`: the notes the pages were built from.
- `ENS101/kodlar/`: MATLAB solutions referenced by the ENS101 page.

The pages are in Turkish. Each one is a single HTML file with no build step; fonts, KaTeX and highlight.js load from a CDN, so they need an internet connection.

## Progress

Checked items and scores are stored in the browser's `localStorage`, per course. They stay on the device and browser where they were made.

## Not in this repository

Lecture slides, textbook slides, past exam files and their archives are kept locally and ignored by `.gitignore` (`materyal/`, `*.zip`, `*.pdf`, `*.docx`). Links from a study page to a file under `materyal/` work on the local copy only.

## Updating the site

```bash
git add -A
git commit -m "Update study pages"
git push
```

GitHub Pages rebuilds from `main` within a minute or two.
