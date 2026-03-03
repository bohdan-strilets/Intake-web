import type { SavedPromptEntity } from '@entities/savedPrompt';

import { API_ROUTES } from '@shared/api';
import { del } from '@shared/api/http';
import { get } from '@shared/api/http';
import { patch } from '@shared/api/http';

const RECENT_LIMIT = 8;

type RecentParams = { limit: number };

export const getRecentPromptsApi = async (): Promise<SavedPromptEntity[]> => {
  return get<SavedPromptEntity[], RecentParams>(API_ROUTES.prompts.recent, {
    limit: RECENT_LIMIT,
  });
};

export const togglePromptFavoriteApi = async (
  id: string,
): Promise<SavedPromptEntity> => {
  return patch<SavedPromptEntity, Record<string, never>>(
    API_ROUTES.prompts.toggleFavorite(id),
    {},
  );
};

export const deletePromptApi = async (id: string): Promise<void> => {
  await del<void>(API_ROUTES.prompts.delete(id));
};
