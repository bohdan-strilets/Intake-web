import { useMutation, useQueryClient } from '@tanstack/react-query';

import { promptsQueryKeys } from '@entities/savedPrompt';

import { useSound } from '@shared/lib/sound';

import { togglePromptFavoriteApi } from './api';

export const useTogglePromptFavorite = () => {
  const queryClient = useQueryClient();
  const { playSounds } = useSound();

  return useMutation({
    mutationFn: togglePromptFavoriteApi,
    onSuccess: (data) => {
      if (data.isFavorite) {
        playSounds.favoriteOn();
      } else {
        playSounds.favoriteOff();
      }
      queryClient.invalidateQueries({ queryKey: promptsQueryKeys.recent });
    },
  });
};
