# yushanwe.github.io

Personal academic website. Static HTML/CSS/JS — no build step, no dependencies.
Push to `main` and GitHub Pages serves it.

## Editing content

**All content lives in [`assets/js/data.js`](assets/js/data.js).** You never need to
touch the HTML to add a publication, project, job, or activity.

| Object         | Controls                                              |
| -------------- | ----------------------------------------------------- |
| `SITE`         | Name, role, photo, tagline, nav order, external links |
| `PROJECTS`     | Featured research cards + their detail pages          |
| `PUBLICATIONS` | Publication list (auto-grouped by year, newest first) |
| `EXPERIENCE`   | Timeline entries                                      |
| `ACTIVITIES`   | Activity cards                                        |
| `BEYOND`       | Beyond Research cards                                 |

Anything marked `TODO` or `Placeholder` is waiting on real content.

### Adding a publication

Append to `PUBLICATIONS`. `status` must be one of `published`, `under-review`,
`in-preparation`. Your own name is bolded automatically by matching `SITE.name`,
so write it exactly as `"Yushan Wei"` (a trailing `*` for equal contribution is fine).

### Adding a project detail page

Set `detail: true` on the project and give it a unique `slug`. The page is served
by [`project.html`](project.html) at `project.html?p=<slug>` — no new file needed.
Fill in `overview`, `sections`, and `gallery` for the long-form content.

## Assets to replace

- `assets/img/profile.svg` → a real square photo (≥600×600), then update `SITE.photo`
- `assets/img/project-*.svg` → real system screenshots
- `assets/files/cv.pdf` → your CV (referenced by `SITE.links`)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html          single-page homepage (section shells only)
project.html        project detail template, driven by ?p=<slug>
assets/css/style.css
assets/js/data.js   ← all content
assets/js/main.js   render components + nav, scroll-spy, reveal
```

## Accessibility notes

Skip link, keyboard-navigable nav with `aria-expanded`, `aria-current` scroll-spy,
alt text on every image, AA-contrast palette, and `prefers-reduced-motion` disables
scroll reveals and smooth scrolling.
