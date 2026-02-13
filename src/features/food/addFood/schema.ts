import { FoodConstraints, FoodValidationMessages } from '@entities/food';

import { z } from '@shared/lib/zod';

export const schema = z.object({
  text: z
    .string(FoodValidationMessages.text.required)
    .min(FoodConstraints.text.minLength, {
      message: FoodValidationMessages.text.minLength,
    })
    .max(FoodConstraints.text.maxLength, {
      message: FoodValidationMessages.text.maxLength,
    }),
});
