export type StreakEntity = {
  currentStreak: number;
  longestStreak: number;
  activityLast7Days: boolean[];
  /** First date user had activity (YYYY-MM-DD). Days before this are not counted as "skipped". */
  firstActivityDate: string | null;
};
