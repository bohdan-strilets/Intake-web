import type { Infer } from '@shared/lib/zod';

import type { registerSchema } from '../schemas';

export type RegisterFormValues = Infer<typeof registerSchema>;
