import { useModalStore } from '@shared/lib/modal';

import { Modal } from '../Modal';

export const ModalHost = () => {
  const { content, close, variant } = useModalStore();

  if (!content) return null;

  return (
    <Modal open onClose={close} variant={variant}>
      {content}
    </Modal>
  );
};
