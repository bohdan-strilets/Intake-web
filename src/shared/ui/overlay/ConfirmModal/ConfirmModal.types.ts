export type ConfirmModalProps = {
  title: string;
  description?: string;

  confirmText?: string;
  cancelText?: string;
  confirmVariant?: 'primary' | 'danger' | 'success';

  onConfirm: () => Promise<void> | void;
};
