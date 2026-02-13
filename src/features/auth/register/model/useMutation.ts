import { useMutation } from '@tanstack/react-query';

import { registerUserApi } from '../api';

export const useRegisterMutation = () => {
  return useMutation({ mutationFn: registerUserApi });
};
