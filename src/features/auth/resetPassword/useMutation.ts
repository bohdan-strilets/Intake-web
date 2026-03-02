import { useMutation } from '@tanstack/react-query';

import { resetPasswordApi } from './api';

export const useResetPasswordMutation = () =>
  useMutation({ mutationFn: resetPasswordApi });
