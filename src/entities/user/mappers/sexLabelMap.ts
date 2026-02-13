import { SEX, type Sex } from '@entities/user/enums';

export const sexLabelMap: Record<Sex, string> = {
  [SEX.Male]: 'Male',
  [SEX.Female]: 'Female',
};
