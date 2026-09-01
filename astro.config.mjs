import { defineConfig } from 'astro/config';

// Drie talen. Nederlands staat op de wortel, en en pt krijgen een
// voorvoegsel. Een taal erbij: een contentbestand in src/content/, een regel
// in src/i18n/talen.ts en de code hieronder. De componenten hoeven niet mee.
export default defineConfig({
  site: 'https://maisesporte.nl',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'always' },
});
