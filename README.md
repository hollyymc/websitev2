# Holly McHugh: portfolio

Static site built with [Astro](https://astro.build). Deploys unchanged to Vercel,
Netlify or GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Where things live

| To change | Edit |
|---|---|
| Name, intro, links, about text | `src/data/site.ts` |
| Experience, education, skills, "beyond code" | `src/data/profile.ts` |
| Projects (and the passion-project slot) | `src/data/projects.ts` |
| The home-page Note card | `src/data/note.ts` |
| Colours and fonts | `src/styles/global.css` (tokens at the top) |
| CV PDF | put it at `public/cv/holly-mchugh-cv.pdf` |
| Favicon | `public/favicon.svg` |

### Adding a project
In `src/data/projects.ts`, change a placeholder's `status` to `'live'` and fill in
`title`, `summary`, `tags`, `problem`, `approach`, `results`, `role`, `links`.
A page is generated at `/projects/<slug>`. For an image, put it in
`public/projects/` and set `image: '/projects/name.png'`.

### The Note
`src/data/note.ts` has three modes:
- `link`: the card links to an external post (Medium, Substack, LinkedIn).
- `local`: write Markdown in `src/notes/<slug>.md`; it renders at `/notes/<slug>`.
- `embed`: `/notes/<slug>` frames `embedUrl` in an iframe (many sites block this).

Set `hidden: true` to remove the section.

### Adding photos later
`/about` uses text frames in a film strip. Add `image: '/about/me.jpg'` to a frame
in `src/pages/about.astro` (file in `public/about/`) to swap in a photo.

## Deploying

Everything is static, with no server code, so any static host works.

**Vercel / Netlify:** import the repo. Both detect Astro (build `npm run build`,
output `dist`). No environment variables needed.

**GitHub Pages:** in the repo, Settings → Pages → Source: *GitHub Actions*. The
workflow in `.github/workflows/deploy.yml` builds on every push to `main`.
- Project site (`user.github.io/repo-name`): works as is. The workflow sets
  `BASE_PATH=/repo-name`.
- User site (repo named `user.github.io`) or custom domain: delete the
  `BASE_PATH` line in the workflow.

All internal links and assets go through `withBase()` in `src/lib/url.ts`, so
they respect the sub-path. To test a sub-path build locally:

```bash
BASE_PATH=/repo-name npm run build && npm run preview
```

(In Git Bash on Windows, prefix with `MSYS_NO_PATHCONV=1`, or it rewrites `/repo-name`
into a Windows path.)

## Contact
There is deliberately no contact form: GitHub Pages has no backend. The site
uses email, GitHub and LinkedIn links, which work everywhere.
