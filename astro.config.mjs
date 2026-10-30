import { defineConfig } from 'astro/config';

// Static output so the same build works on Vercel, Netlify and GitHub Pages.
//
// Vercel / Netlify / custom domain: leave BASE_PATH and SITE_URL unset.
// GitHub Pages project site (user.github.io/repo-name): the workflow sets
// BASE_PATH=/repo-name and SITE_URL=https://user.github.io.
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || undefined;

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
});
