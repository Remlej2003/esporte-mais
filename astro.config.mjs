import { defineConfig } from 'astro/config';

// Eén taal actief. EN en PT toevoegen = een vertaalbestand in src/content/
// plus de code hieronder uitbreiden; de componenten hoeven niet mee.
export default defineConfig({
  site: 'https://maisesporte.nl',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'always' },
});
