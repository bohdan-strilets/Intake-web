import { authSelectors, tokenStorage } from '@entities/session';

import { refreshUserApi } from './api';

let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;

export const refreshAccessToken = async (): Promise<string> => {
  if (isRefreshing && refreshPromise) {
    return refreshPromise;
  }

  isRefreshing = true;

  refreshPromise = (async () => {
    const refreshToken = tokenStorage.get();
    if (!refreshToken) throw new Error('No refresh token');

    const data = await refreshUserApi({ refreshToken });

    authSelectors.setAccessToken(data.accessToken);
    tokenStorage.set(data.refreshToken);

    return data.accessToken;
  })();

  try {
    return await refreshPromise;
  } finally {
    isRefreshing = false;
    refreshPromise = null;
  }
};
