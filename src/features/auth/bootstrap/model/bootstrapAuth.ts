import { authSelectors, tokenStorage } from '@entities/session/model';

import { getMe } from '../api';

export const bootstrapAuth = async (): Promise<void> => {
  const refreshToken = tokenStorage.get();
  if (!refreshToken) return;

  try {
    const data = await getMe({ refreshToken });

    authSelectors.setAccessToken(data.accessToken);
    tokenStorage.set(data.refreshToken);
  } catch {
    authSelectors.clear();
    tokenStorage.clear();
  }
};
