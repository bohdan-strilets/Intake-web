import { useMutation } from '@tanstack/react-query';

import { editPasswordApi } from '../api';

export const useEditPasswordMutation = () => {
  return useMutation({
    mutationFn: editPasswordApi,
  });
};
