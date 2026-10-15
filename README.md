# Devilliers Cloete – Portfolio Website

Four pages: `index.html` (home), `portfolio.html`, `experience.html`, `about.html`, sharing `style.css` and `script.js`.

## Adding your images and videos
1. Create an `images/` folder (and `videos/` if you use video) next to the HTML files.
2. Drop your exported images in with the names the pages expect, e.g. `images/hero.jpg`, `images/godsaw-1.jpg`, `images/oblivis-1.jpg`, `images/2skate-1.jpg`, `images/portrait.jpg`. Showreel videos go in `videos/showreel-2026.mp4` and `videos/showreel-2021.mp4` (optional cover images: `images/showreel-2026.jpg`, `images/showreel-2021.jpg`).
   Each placeholder box shows the file name it is waiting for. Once the file exists, the image appears automatically.
3. Keep images under ~500 KB each (export as JPG/WebP) so the site loads quickly.
4. Videos: small clips can go in `videos/` (GitHub's file limit is 100 MB, so keep them well under). For anything larger, upload to YouTube and use the embed block in `portfolio.html` (replace `VIDEO_ID`).

## Things to edit
- Put your resume PDF in `documents/` named `Devilliers-Cloete-Resume.pdf` so the About page download button works.
- The "Read the Document" links on GODSAW and OBLIVIS in `portfolio.html` currently point to `#`. Put your PDFs in a `documents/` folder and change the `href` (e.g. `documents/godsaw.pdf`).
- Education details on `experience.html` and the tools list are still placeholders.
- To add a project to the portfolio page, copy one `<section class="case">…</section>` block and change the text and image names.

## Publishing on GitHub Pages
1. Create a GitHub account and click **New repository**. Name it `yourusername.github.io` for a clean address, or anything else.
2. Click **uploading an existing file**, drag in everything from this folder (keep the `images` folder), and commit.
3. Go to **Settings → Pages**. Under *Source* choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and Save.
4. After a minute or two your site is live at `https://yourusername.github.io/`.
