import { FoodConstraints, FoodValidationMessages } from '@entities/food/meta';

import { z } from '@shared/lib/zod';

export const editWeightSchema = z.object({
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
