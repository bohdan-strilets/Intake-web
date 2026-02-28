export const calcGoalProgressPercent = (
  startWeight: number,
  currentWeight: number,
  targetWeight: number,
): number => {
  const totalDistance = Math.abs(targetWeight - startWeight);
  if (totalDistance === 0) return 100;

  const distanceTraveled = Math.abs(currentWeight - startWeight);
  const percent = (distanceTraveled / totalDistance) * 100;
  return Math.min(100, Math.max(0, percent));
};
