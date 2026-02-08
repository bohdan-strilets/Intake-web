import { UserValidationMessages } from '@entities/user/meta';

import { z } from '@shared/lib/zod';

export const loginSchema = z.object({
  email: z.string().email({ message: UserValidationMessages.email.invalid }),

  password: z.string().min(1, {
    message: UserValidationMessages.password.required,
  }),
});
