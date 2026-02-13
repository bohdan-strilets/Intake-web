import { GOAL, type Goal } from '@entities/user/enums';

export const goalLabelMap: Record<Goal, string> = {
  [GOAL.Lose]: 'Lose weight',
  [GOAL.Maintain]: 'Maintain weight',
  [GOAL.Gain]: 'Gain weight',
};
