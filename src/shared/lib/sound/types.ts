export type SoundKey = 'success' | 'delete';

export type SoundStore = {
  enabled: boolean;
  volume: number;
  sounds: Record<SoundKey, HTMLAudioElement> | null;

  init: () => void;
  play: (key: SoundKey) => void;
  setEnabled: (value: boolean) => void;
  setVolume: (value: number) => void;
};
