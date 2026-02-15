import type { ApiDto, FormValues } from '../types';

export const mapValueToDto = (values: FormValues): ApiDto => {
  return {
    ...values,
    goalDelta: values.goalDelta ?? null,
    targetWeight: values.targetWeight ?? null,
  };
};
