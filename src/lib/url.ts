// Base-aware URL helper so links and assets work under a GitHub Pages
// sub-path (/repo-name/) as well as at the root on Vercel and Netlify.
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function withBase(path: string): string {
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
