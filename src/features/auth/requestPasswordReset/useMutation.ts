import { useMutation } from '@tanstack/react-query';

import { requestPasswordResetApi } from './api';

export const useRequestPasswordResetMutation = () =>
  useMutation({ mutationFn: requestPasswordResetApi });
