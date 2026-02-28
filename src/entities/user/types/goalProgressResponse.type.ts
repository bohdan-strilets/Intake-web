export type GoalProgressResponse = {
  startWeight: number;
  currentWeight: number;
  targetWeight: number;
  progressPercent: number;
  kgPerWeek: number | null;
  estimatedWeeks: number | null;
};
