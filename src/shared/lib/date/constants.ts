export const WEEK_DAYS = 7;

export const WEEK_DAY_KEYS = [
  'mn',
  'tu',
  'we',
  'th',
  'fr',
  'sa',
  'su',
] as const;

export type WeekDayKey = (typeof WEEK_DAY_KEYS)[number];
