import nl from '../content/nl.json';
import en from '../content/en.json';
import pt from '../content/pt.json';

/**
 * Het register van talen.
 *
 * Nederlands is de standaardtaal en staat op de wortel; de andere talen
 * krijgen een voorvoegsel. Een taal erbij is een contentbestand plus een
 * regel hieronder plus een regel in astro.config.mjs.
 *
 * `htmlLang` is niet altijd gelijk aan de code: het Portugees op deze site
 * is Braziliaans, want daar staat het programma.
 */
export const standaardTaal = 'nl' as const;

export const talen = {
  nl: { content: nl, label: 'NL', htmlLang: 'nl', naam: 'Nederlands', pad: '/' },
  en: { content: en, label: 'EN', htmlLang: 'en', naam: 'English', pad: '/en/' },
  pt: { content: pt, label: 'PT', htmlLang: 'pt-BR', naam: 'Português', pad: '/pt/' },
} as const;

export type TaalCode = keyof typeof talen;

export const taalCodes = Object.keys(talen) as TaalCode[];

/* De talen die een eigen pad onder /<code>/ krijgen. */
export const bijkomendeTalen = taalCodes.filter((c) => c !== standaardTaal);
