// Edit this file to add real projects.
//
// A project with status 'placeholder' shows as a blank polaroid and has no
// detail page. Change it to 'live' (and fill in the fields) and a page is
// generated at /projects/<slug>. To use an image, drop it in public/projects/
// and set `image: '/projects/my-image.png'`.

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  status: 'placeholder' | 'live';
  title: string;
  summary: string;
  tags: string[];
  /** Short handwritten label beside the polaroid. */
  caption: string;
  /** Which way the doodle arrow points: top/bottom + left/right. */
  arrow: 'tl' | 'tr' | 'bl' | 'br';
  /** Tilt in degrees. */
  rot: number;
  /** Position on the 12 x 9 collage grid (desktop). */
  pos: { col: string; row: string };
  size: 'lg' | 'sm';
  image?: string;
  imageAlt?: string;
  context?: string;
  problem?: string;
  approach?: string;
  results?: string;
  role?: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    status: 'placeholder',
    title: 'Project one',
    summary: 'Something good coming soon.',
    tags: [],
    caption: 'watch this space',
    arrow: 'br',
    rot: -3,
    pos: { col: '1 / 5', row: '1 / 4' },
    size: 'lg',
  },
  {
    slug: 'project-two',
    status: 'placeholder',
    title: 'Project two',
    summary: 'Still cooking.',
    tags: [],
    caption: 'still cooking',
    arrow: 'bl',
    rot: 2.5,
    pos: { col: '5 / 8', row: '1 / 3' },
    size: 'sm',
  },
  {
    slug: 'project-three',
    status: 'placeholder',
    title: 'Project three',
    summary: 'Something good coming soon.',
    tags: [],
    caption: 'next up?',
    arrow: 'bl',
    rot: -2,
    pos: { col: '9 / 13', row: '1 / 4' },
    size: 'lg',
  },
  {
    slug: 'project-four',
    status: 'placeholder',
    title: 'Project four',
    summary: 'Still cooking.',
    tags: [],
    caption: 'work in progress',
    arrow: 'tr',
    rot: 3,
    pos: { col: '1 / 4', row: '6 / 9' },
    size: 'sm',
  },
  {
    slug: 'project-five',
    status: 'placeholder',
    title: 'Project five',
    summary: 'Something good coming soon.',
    tags: [],
    caption: 'what could it be?',
    arrow: 'tl',
    rot: -2.5,
    pos: { col: '5 / 9', row: '7 / 10' },
    size: 'lg',
  },
  {
    slug: 'project-six',
    status: 'placeholder',
    title: 'Project six',
    summary: 'Still cooking.',
    tags: [],
    caption: 'one day',
    arrow: 'tl',
    rot: 2,
    pos: { col: '10 / 13', row: '6 / 9' },
    size: 'sm',
  },
];

/** The "passion project" slot. Set `enabled: false` to remove it. */
export const passionProject = {
  enabled: true,
  title: 'Passion project',
  summary: 'The one I build just because I want to. Coming soon.',
  caption: 'just for fun',
  tags: [] as string[],
  image: undefined as string | undefined,
  href: undefined as string | undefined,
};
