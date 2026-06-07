// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Custom domain on GitHub Pages: set `site`, and leave `base` unset.
  site: 'https://diy0.dev',
  trailingSlash: 'ignore',
  integrations: [icon()],
});
