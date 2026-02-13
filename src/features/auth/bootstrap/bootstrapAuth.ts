import { authSelectors, tokenStorage } from '@entities/session';

import { getAuthUserApi } from './api';

export const bootstrapAuth = async (): Promise<void> => {
  const refreshToken = tokenStorage.get();
  if (!refreshToken) return;

  try {
    const data = await getAuthUserApi({ refreshToken });

    authSelectors.setAccessToken(data.accessToken);
    tokenStorage.set(data.refreshToken);
  } catch {
    authSelectors.clear();
    tokenStorage.clear();
  }
};
