import { useSoundStore } from './soundStore';

export const useSound = () => {
  const play = useSoundStore((store) => store.play);
  const setEnabled = useSoundStore((store) => store.setEnabled);
  const enabled = useSoundStore((store) => store.enabled);

  const success = () => play('success');
  const remove = () => play('delete');

  const playSounds = {
    success,
    remove,
  };

  return {
    enabled,
    play,
    playSounds,
    setEnabled,
  };
};
