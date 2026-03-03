import { useQuery } from '@tanstack/react-query';

import { promptsQueryKeys } from '@entities/savedPrompt';

import { getRecentPromptsApi } from './api';

export const useRecentPrompts = () => {
  return useQuery({
    queryKey: promptsQueryKeys.recent,
    queryFn: getRecentPromptsApi,
  });
};
