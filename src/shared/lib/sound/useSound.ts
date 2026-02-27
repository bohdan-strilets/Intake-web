import { useSoundStore } from './soundStore';

export const useSound = () => {
  const play = useSoundStore((store) => store.play);
  const setEnabled = useSoundStore((store) => store.setEnabled);
  const setVolume = useSoundStore((store) => store.setVolume);
  const enabled = useSoundStore((store) => store.enabled);
  const volume = useSoundStore((store) => store.volume);

  const success = () => play('success');
  const remove = () => play('delete');

  const playSounds = {
    success,
    remove,
  };

  const setVolumePercent = (percent: number) => {
    setVolume(Math.max(0, Math.min(100, percent)) / 100);
  };

  return {
    enabled,
    volume: Math.round(volume * 100),
    play,
    playSounds,
    setEnabled,
    setVolume: setVolumePercent,
  };
};
