import type { Language, Theme } from '@entities/user';

export type ApiDto = {
  language?: Language;
  theme?: Theme;
  sound?: boolean;
};
