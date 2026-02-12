export const ACTIVITY_LEVEL = {
  SEDENTARY: 1.2,
  LIGHT: 1.375,
  MODERATE: 1.55,
  HIGH: 1.725,
  VERY_HIGH: 1.9,
};

export type ActivityLevel =
  (typeof ACTIVITY_LEVEL)[keyof typeof ACTIVITY_LEVEL];
