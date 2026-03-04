/**
 * Supported app locales. Source of truth for i18n; entities/user re-exports for domain use.
 */
export const LANGUAGE = {
  English: 'en',
  Polish: 'pl',
  Ukrainian: 'uk',
} as const;

export type Language = (typeof LANGUAGE)[keyof typeof LANGUAGE];
