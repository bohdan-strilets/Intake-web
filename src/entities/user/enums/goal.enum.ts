export const GOAL = {
  Lose: 'lose',
  Maintain: 'maintain',
  Gain: 'gain',
} as const;

export type Goal = (typeof GOAL)[keyof typeof GOAL];
