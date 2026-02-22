export const LANGUAGE = {
  English: 'en',
  Polish: 'pl',
  Ukrainian: 'uk',
} as const;

export type Language = (typeof LANGUAGE)[keyof typeof LANGUAGE];
