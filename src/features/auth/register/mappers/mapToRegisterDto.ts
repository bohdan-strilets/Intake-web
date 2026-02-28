import type { FormValues } from '../types';

export const mapToRegisterDto = (values: FormValues) => {
  return {
    name: values.name,
    email: values.email,
    password: values.password,
    sex: values.sex,
    dateOfBirth: values.dateOfBirth,
    height: values.height,
    weight: values.weight,
    targetWeight: values.targetWeight ?? undefined,
    goal: values.goal,
    goalDelta: values.goalDelta ?? undefined,
    activityLevel: values.activityLevel,
  };
};
