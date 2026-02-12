import { useState } from 'react';

import { useModal } from '@shared/lib/modal';
import { Button } from '@shared/ui/controls/Button';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { ConfirmModalProps } from './ConfirmModal.types';

export const ConfirmModal = ({
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmVariant = 'primary',
  onConfirm,
}: ConfirmModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { close } = useModal();

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await onConfirm();
      close();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <Paragraph weight="bold">{title}</Paragraph>
        {description && <Paragraph>{description}</Paragraph>}
      </Stack>

      <Stack gap="sm">
        <Button
          variant={confirmVariant}
          onClick={handleConfirm}
          loading={isLoading}
          fullWidth
        >
          {confirmText}
        </Button>

        <Button variant="secondary" onClick={close} fullWidth>
          {cancelText}
        </Button>
      </Stack>
    </Stack>
  );
};
