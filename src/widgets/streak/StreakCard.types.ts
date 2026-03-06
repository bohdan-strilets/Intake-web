export type StreakCardProps = {
  currentStreak: number;
  activityLast7Days: boolean[];
  /** First date user had activity. Skipped count only includes days on or after this date. */
  firstActivityDate?: string | null;
};
