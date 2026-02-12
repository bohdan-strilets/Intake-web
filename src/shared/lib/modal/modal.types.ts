import type { ReactNode } from 'react';

import type { ModalVariant } from '@shared/ui/overlay/Modal';

export type ModalState = {
  content: ReactNode | null;
  variant?: ModalVariant;

  open: (node: ReactNode, variant?: ModalVariant) => void;
  close: () => void;
};
