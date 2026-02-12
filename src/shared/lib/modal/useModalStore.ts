import { create } from 'zustand';

import type { ModalState } from './modal.types';

export const useModalStore = create<ModalState>((set) => ({
  content: null,
  variant: 'sheet',

  open: (node, variant = 'sheet') =>
    set({
      content: node,
      variant,
    }),

  close: () =>
    set({
      content: null,
      variant: 'sheet',
    }),
}));
