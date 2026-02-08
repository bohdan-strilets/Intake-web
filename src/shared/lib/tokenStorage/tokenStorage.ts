import { STORAGE_KEYS } from '@shared/config/storageKeys';

let memoryToken: string | null = null;

export const tokenStorage = {
  get(): string | null {
    return memoryToken ?? localStorage.getItem(STORAGE_KEYS.AUTH);
  },

  set(token: string) {
    memoryToken = token;
    localStorage.setItem(STORAGE_KEYS.AUTH, token);
  },

  clear() {
    memoryToken = null;
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  },
};
