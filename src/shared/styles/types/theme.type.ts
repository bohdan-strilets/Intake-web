import type { THEME } from '../enums';

export type Theme = (typeof THEME)[keyof typeof THEME];

export type ThemeMode = 'light' | 'dark';
