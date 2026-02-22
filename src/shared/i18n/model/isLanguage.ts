import { LANGUAGE, type Language } from '@entities/user';

export const isLanguage = (value: string): value is Language => {
  return Object.values(LANGUAGE).includes(value as Language);
};
