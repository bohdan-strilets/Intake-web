import { STORAGE_KEYS } from '@shared/config/storageKeys';

export const tokenStorage = {
  get(): string | null {
    return localStorage.getItem(STORAGE_KEYS.AUTH);
  },

  set(token: string) {
    localStorage.setItem(STORAGE_KEYS.AUTH, token);
  },

  clear() {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  },
};
