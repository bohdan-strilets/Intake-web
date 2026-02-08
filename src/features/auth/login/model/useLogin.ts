import { useMutation } from '@tanstack/react-query';

import { loginUser } from '../api';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: loginUser,
  });
