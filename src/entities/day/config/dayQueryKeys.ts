import type { DayDetailsQueryParams } from '@entities/day';

export const dayQueryKeys = {
  all: ['days'] as const,

  calendar: (month: string) => ['days', 'calendar', month] as const,

  byDate: (date: string, params?: DayDetailsQueryParams) =>
    ['days', 'day', date, params ?? null] as const,

  /** Use for invalidation so all day-detail queries for this date are invalidated */
  byDatePrefix: (date: string) => ['days', 'day', date] as const,
} as const;
