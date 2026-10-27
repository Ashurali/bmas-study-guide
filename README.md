# BMAS Study Guide

An animation-first study site for NYCU *Biomedical Micro Analysis Systems*
(生物微型檢測技術). Every concept is an interactive diagram first, with a few
lines of text under it. Built with
[MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed
to GitHub Pages. `SITE_SPECIFICATION.md` governs everything here.

> **⚠️ NO IMAGES RULE: never commit a slide image, page render, PDF or raster
> image (png/jpg/gif/webp/bmp/tif/pdf/ppt/pptx).** The repo and the site are
> public and the slide figures are copyrighted. Every diagram and animation is
> an original SVG drawn in code. The pre-commit hook and the CI audit both
> reject these file types. **Only exception:** AI-generated illustrations as
> `docs/assets/ai/<name>.webp` (≤ 300 KB, text prompts only, never from a
> slide) under spec §8.4.

## Local development

```bash
python -m venv .venv
.venv/Scripts/activate            # Windows; source .venv/bin/activate elsewhere
pip install -r requirements.txt
git config core.hooksPath .githooks   # once per clone: enables the no-images hook
python scripts/build_glossary.py      # regenerate the glossary
mkdocs serve                          # http://127.0.0.1:8000/bmas-study-guide/
```

`mkdocs build --strict` must pass before pushing; CI runs the same command.

## Adding a lesson (spec §10)

1. Render the deck to `_slide_pages/LNN/` in the course folder (outside this repo).
2. Look at every page; write `plans/lNN-plan.md` (page audit, section outline, quiz topics).
3. Build the animations in `docs/lessons/lNN-…/anim/`, then the lesson page and `anim/quiz.html`.
4. Update the home status, `reference/animations.md`, `reference/quizzes.md`,
   `reference/cheat-sheet.md`, add the page to `nav:`, and run `scripts/build_glossary.py`.
5. Check the spec §16 list, then commit `Add L0N <topic>`.

## Publishing (one-time)

1. Create the public GitHub repo `Ashurali/bmas-study-guide` (no README, no license).
2. `git remote add origin https://github.com/Ashurali/bmas-study-guide.git`
3. `git push -u origin main`
4. Repo **Settings → Pages → Source: GitHub Actions**.

After that, every push to `main` runs `.github/workflows/deploy.yml`:
audit → glossary → `mkdocs build --strict` → deploy.
