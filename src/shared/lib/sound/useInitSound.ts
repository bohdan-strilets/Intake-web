import { useEffect } from 'react';

import { useSoundStore } from './soundStore';

export const useInitSound = () => {
  const init = useSoundStore((store) => store.init);

  useEffect(() => {
    init();
  }, [init]);
};
