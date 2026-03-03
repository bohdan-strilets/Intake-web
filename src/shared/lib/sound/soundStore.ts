import { create } from 'zustand';

import type { SoundStore } from './types';

export const useSoundStore = create<SoundStore>((set, get) => ({
  enabled: true,
  volume: 0.25,
  sounds: null,

  init: () => {
    if (get().sounds) return;

    const { volume } = get();
    const success = new Audio('/sounds/intake-success.wav');
    const del = new Audio('/sounds/intake-delete.wav');
    const favoriteOn = new Audio('/sounds/intake-favorite-on.wav');
    const favoriteOff = new Audio('/sounds/intake-favorite-off.wav');
    const promptDelete = new Audio('/sounds/intake-prompt-delete.wav');

    success.preload = 'auto';
    del.preload = 'auto';
    favoriteOn.preload = 'auto';
    favoriteOff.preload = 'auto';
    promptDelete.preload = 'auto';

    success.volume = volume;
    del.volume = volume;
    favoriteOn.volume = volume;
    favoriteOff.volume = volume;
    promptDelete.volume = volume;

    set({
      sounds: {
        success,
        delete: del,
        favoriteOn,
        favoriteOff,
        promptDelete,
      },
    });
  },

  play: (key) => {
    if (!get().enabled) return;
    const sound = get().sounds?.[key];
    if (!sound) return;

    sound.volume = get().volume;
    sound.currentTime = 0;
    void sound.play().catch(() => {});
  },

  setEnabled: (value) => set({ enabled: value }),

  setVolume: (value) => {
    const clamped = Math.max(0, Math.min(1, value));
    const { sounds } = get();
    if (sounds) {
      sounds.success.volume = clamped;
      sounds.delete.volume = clamped;
      sounds.favoriteOn.volume = clamped;
      sounds.favoriteOff.volume = clamped;
      sounds.promptDelete.volume = clamped;
    }
    set({ volume: clamped });
  },
}));
