import { FoodConstraints, FoodValidationMessages } from '@entities/food';

import { z } from '@shared/lib/zod';

export const schema = z.object({
  weight: z
    .number(FoodValidationMessages.weight.required)
    .min(FoodConstraints.weight.min, {
      message: FoodValidationMessages.weight.min,
    })
    .max(FoodConstraints.weight.max, {
      message: FoodValidationMessages.weight.max,
    })
    .int(FoodValidationMessages.weight.integer),
});
