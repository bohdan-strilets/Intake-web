import { create } from 'zustand';

import type { SoundStore } from './types';

export const useSoundStore = create<SoundStore>((set, get) => ({
  enabled: true,
  sounds: null,

  init: () => {
    if (get().sounds) return;

    const success = new Audio('/sounds/intake-success.wav');
    const del = new Audio('/sounds/intake-delete.wav');

    success.preload = 'auto';
    del.preload = 'auto';

    success.volume = 0.25;
    del.volume = 0.25;

    set({
      sounds: {
        success,
        delete: del,
      },
    });
  },

  play: (key) => {
    if (!get().enabled) return;
    const sound = get().sounds?.[key];
    if (!sound) return;

    sound.currentTime = 0;
    void sound.play().catch(() => {});
  },

  setEnabled: (value) => set({ enabled: value }),
}));
