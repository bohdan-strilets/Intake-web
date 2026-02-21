export const LANGUAGE = {
  EN: 'en',
  PL: 'pl',
  UK: 'uk',
} as const;

export type Language = (typeof LANGUAGE)[keyof typeof LANGUAGE];
