import type { Path } from 'react-hook-form';

import type { FormValues } from '../types';

/** Field names for each registration step. Used for validation trigger. */
export const STEP_FIELDS: Record<number, Path<FormValues>[]> = {
  0: ['name', 'email', 'password', 'confirmPassword'],
  1: ['sex', 'dateOfBirth'],
  2: ['height', 'weight'],
  3: ['goal', 'targetWeight', 'goalDelta'],
  4: ['activityLevel'],
} as const;

export const TOTAL_STEPS = 5;
