export const COMMON_TIMEZONES = [
  'Europe/Kyiv',
  'Europe/Warsaw',
  'Europe/London',
  'Europe/Berlin',
  'America/New_York',
  'America/Los_Angeles',
  'Asia/Tokyo',
  'UTC',
] as const;

const pad = (n: number) => String(n).padStart(2, '0');

export const REMINDER_HOUR_OPTIONS: { value: string; label: string }[] =
  Array.from({ length: 24 }, (_, h) => {
    const value = pad(h);
    return { value, label: value };
  });

const MINUTE_STEP = 10;
export const REMINDER_MINUTE_OPTIONS: { value: string; label: string }[] =
  Array.from({ length: 60 / MINUTE_STEP }, (_, i) => {
    const value = pad(i * MINUTE_STEP);
    return { value, label: value };
  });
