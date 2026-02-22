export const THEME = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];
