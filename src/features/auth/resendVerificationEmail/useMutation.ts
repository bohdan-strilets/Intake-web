import { useMutation } from '@tanstack/react-query';

import { resendVerificationEmailApi } from './api';

export const useResendVerificationEmailMutation = () =>
  useMutation({ mutationFn: resendVerificationEmailApi });
