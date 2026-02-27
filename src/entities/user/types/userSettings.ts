import type { Language, Theme } from '../enums';

export type UserSettings = {
  theme: Theme;
  language: Language;
  sound: boolean;
};
