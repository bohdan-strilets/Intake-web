export const dayQueryKeys = {
  all: ['days'] as const,

  calendar: (month: string) => ['days', 'calendar', month] as const,

  byDate: (date: string) => ['days', 'day', date] as const,
} as const;
