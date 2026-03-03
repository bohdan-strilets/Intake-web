import { useMutation, useQueryClient } from '@tanstack/react-query';

import { promptsQueryKeys } from '@entities/savedPrompt';

import { useSound } from '@shared/lib/sound';

import { deletePromptApi } from './api';

export const useDeletePromptMutation = () => {
  const queryClient = useQueryClient();
  const { playSounds } = useSound();

  return useMutation({
    mutationFn: deletePromptApi,
    onSuccess: () => {
      playSounds.promptDelete();
      queryClient.invalidateQueries({ queryKey: promptsQueryKeys.recent });
    },
  });
};
