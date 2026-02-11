import { useMutation } from '@tanstack/react-query';

import { addFromAi } from '../api';

export const useAddFromAiMutation = () =>
  useMutation({
    mutationFn: addFromAi,
  });
