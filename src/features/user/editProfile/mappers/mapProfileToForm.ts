import type { UserEntity } from '@entities/user';

import type { FormValues } from '../types';

export const mapProfileToForm = (user: UserEntity): FormValues => {
  return {
    name: user.name,
    sex: user.sex,
    age: user.age,
    height: user.height,
    weight: user.weight,
    targetWeight: user.targetWeight ?? undefined,
    goal: user.goal,
    goalDelta: user.goalDelta ?? undefined,
    activityLevel: user.activityLevel,
  };
};
