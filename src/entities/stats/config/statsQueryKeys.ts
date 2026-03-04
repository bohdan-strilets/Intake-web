export const statsQueryKeys = {
  all: ['stats'] as const,

  range: (start: string, end: string) =>
    ['stats', 'range', start, end] as const,

  streak: ['stats', 'streak'] as const,
} as const;
