export const DAY_ALIAS = {
  TODAY: 'today',
} as const;

export type DayAlias = (typeof DAY_ALIAS)[keyof typeof DAY_ALIAS];
