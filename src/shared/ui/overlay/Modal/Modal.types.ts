export type ModalVariant = 'sheet' | 'centered';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: ModalVariant;
};
