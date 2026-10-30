// The small "Note" card on the home page. One entry, three modes:
//
//   'link'  -> the card links out to `href` (Medium, Substack, LinkedIn...)
//   'local' -> write it here: a Markdown file in src/notes/<slug>.md,
//              rendered at /notes/<slug>
//   'embed' -> /notes/<slug> shows `embedUrl` in an iframe (many platforms
//              block this, so test it)
//
// Set `hidden: true` to remove the section entirely.

export interface Note {
  hidden: boolean;
  mode: 'link' | 'local' | 'embed';
  title: string;
  teaser: string;
  date: string;
  slug: string;
  href: string;
  embedUrl: string;
}

export const note: Note = {
  hidden: false,
  mode: 'local',
  title: 'Placeholder note',
  teaser: 'A short write-up on something I learned lately. The real one is on its way.',
  date: '2026-10-30',
  slug: 'placeholder-note',
  href: '',
  embedUrl: '',
};
