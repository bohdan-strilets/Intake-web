export const statsQueryKeys = {
  all: ['stats'] as const,

  range: (start: string, end: string) =>
    ['stats', 'range', start, end] as const,
} as const;
