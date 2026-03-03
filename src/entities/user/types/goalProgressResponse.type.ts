/** progressPercent from API is 0–100 (integer). */
export type GoalProgressResponse = {
  startWeight: number;
  currentWeight: number;
  targetWeight: number;
  progressPercent: number | null;
  kgPerWeek: number | null;
  estimatedWeeks: number | null;
};
