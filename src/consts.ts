// ---------------------------------------------------------------------------
// Everything personal lives here. Edit this file to make the site yours.
// ---------------------------------------------------------------------------

export const SITE = {
  /** Your name, shown under the avatar and as the site title. */
  name: 'Mobin Rajaei',
  /** Short wordmark used in the side rail. */
  wordmark: 'diy0',
  /** One-line slogan under your name on the home page. */
  slogan: 'building things from zero',
  /** Used for <title>, meta description, and RSS. */
  description: 'Personal site, projects and writing by Mobin Rajaei.',
  /** Path to your avatar in /public. Swap in a real photo (e.g. avatar.jpg) and update this. */
  avatar: '/avatar.svg',
};

// Primary navigation — appears in the side rail (desktop) and top bar (mobile).
export const NAV = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'blog', href: '/blog' },
];

// Social links. Each `icon` is a Tabler icon name (https://tabler.io/icons).
// Remove any you don't want; add more by copying a line.
export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/itsdiy0', icon: 'github' },
  { label: 'X', href: 'https://x.com/', icon: 'x' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:you@diy0.dev', icon: 'mail' },
];
