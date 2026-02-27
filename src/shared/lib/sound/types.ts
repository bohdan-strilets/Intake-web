export type SoundKey = 'success' | 'delete';

export type SoundStore = {
  enabled: boolean;
  sounds: Record<SoundKey, HTMLAudioElement> | null;

  init: () => void;
  play: (key: SoundKey) => void;
  setEnabled: (value: boolean) => void;
};
