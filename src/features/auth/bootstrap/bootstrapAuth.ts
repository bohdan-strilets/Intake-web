import { authSelectors, tokenStorage } from '@entities/session';

import { refreshUserApi } from '../refresh/api';

export const bootstrapAuth = async (): Promise<void> => {
  const refreshToken = tokenStorage.get();
  if (!refreshToken) return;

  try {
    const data = await refreshUserApi({ refreshToken });

    authSelectors.setAccessToken(data.accessToken);
    tokenStorage.set(data.refreshToken);
  } catch {
    authSelectors.clear();
    tokenStorage.clear();
  }
};
