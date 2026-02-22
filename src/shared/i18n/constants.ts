import { LANGUAGE, type Language } from '@entities/user';

export const DEFAULT_LANGUAGE: Language = LANGUAGE.English;

export const SUPPORTED_LANGUAGES = Object.values(LANGUAGE);
