import { useCallback } from 'react';

import type { ModalVariant } from '@shared/ui/overlay/Modal';

import { useModalStore } from './useModalStore';

export const useModal = () => {
  const openStore = useModalStore((state) => state.open);
  const closeStore = useModalStore((state) => state.close);

  const open = useCallback(
    (node: React.ReactNode, variant?: ModalVariant) => {
      openStore(node, variant);
    },
    [openStore],
  );

  const close = useCallback(() => {
    closeStore();
  }, [closeStore]);

  return { open, close };
};
