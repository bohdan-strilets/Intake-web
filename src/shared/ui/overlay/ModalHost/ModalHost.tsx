import { useModalStore } from '@shared/lib/modal';

import { Modal } from '../Modal';

export const ModalHost = () => {
  const { content, close, variant } = useModalStore();

  const isOpen = Boolean(content);

  return (
    <Modal open={isOpen} onClose={close} variant={variant}>
      {content}
    </Modal>
  );
};
