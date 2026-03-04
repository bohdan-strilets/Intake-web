import { LANGUAGE, type Language } from '@shared/types';

export const isLanguage = (value: string): value is Language => {
  return Object.values(LANGUAGE).includes(value as Language);
};
