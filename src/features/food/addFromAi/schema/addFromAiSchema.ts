import { FoodConstraints, FoodValidationMessages } from '@entities/food/meta';

import { z } from '@shared/lib/zod';

export const addFromAiSchema = z.object({
  text: z
    .string(FoodValidationMessages.text.required)
    .min(FoodConstraints.text.minLength, {
      message: FoodValidationMessages.text.minLength,
    })
    .max(FoodConstraints.text.maxLength, {
      message: FoodValidationMessages.text.maxLength,
    }),
});
