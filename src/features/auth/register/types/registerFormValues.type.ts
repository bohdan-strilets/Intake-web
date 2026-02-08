import type { Infer } from '@shared/lib/zod';

import type { registerSchema } from '../schema';

export type RegisterFormValues = Infer<typeof registerSchema>;
