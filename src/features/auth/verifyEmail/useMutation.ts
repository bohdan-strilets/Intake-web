import { useMutation } from '@tanstack/react-query';

import { verifyEmailApi } from './api';

export const useVerifyEmailMutation = () =>
  useMutation({ mutationFn: verifyEmailApi });
