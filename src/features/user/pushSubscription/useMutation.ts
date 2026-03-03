import { useMutation } from '@tanstack/react-query';

import { registerPushSubscriptionApi } from './api';
import type { RegisterPushSubscriptionDto } from './api';

export const useRegisterPushSubscriptionMutation = () =>
  useMutation({
    mutationFn: (dto: RegisterPushSubscriptionDto) =>
      registerPushSubscriptionApi(dto),
  });