import { useMutation } from '@tanstack/react-query';

import { registerUser } from '../api';

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: registerUser,
  });
