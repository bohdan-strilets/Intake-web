import type { Infer } from '@shared/lib/zod';

import type { loginSchema } from '../schema';

export type LoginFormValues = Infer<typeof loginSchema>;
