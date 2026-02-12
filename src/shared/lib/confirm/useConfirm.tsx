import { useModal } from '@shared/lib/modal';
import { ConfirmModal } from '@shared/ui/overlay/ConfirmModal';

import type { ConfirmOptions } from './confirm.types';

export const useConfirm = () => {
  const { open } = useModal();

  const openConfirm = (options: ConfirmOptions) => {
    open(<ConfirmModal {...options} />);
  };

  return { openConfirm };
};
