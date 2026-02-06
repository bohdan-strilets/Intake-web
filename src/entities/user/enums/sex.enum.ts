export const SEX = {
  Male: 'male',
  Female: 'female',
} as const;

export type Sex = (typeof SEX)[keyof typeof SEX];
