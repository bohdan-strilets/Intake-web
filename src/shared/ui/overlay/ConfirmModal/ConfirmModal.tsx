import { useState } from 'react';

import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { Button } from '@shared/ui/controls/Button';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { ConfirmModalProps } from './ConfirmModal.types';

export const ConfirmModal = ({
  title,
  description,
  confirmText,
  cancelText,
  confirmVariant = 'primary',
  onConfirm,
}: ConfirmModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation('common');
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
          {confirmText ? confirmText : t('actions.confirm')}
        </Button>

        <Button variant="secondary" onClick={close} fullWidth>
          {cancelText ? cancelText : t('actions.cancel')}
        </Button>
      </Stack>
    </Stack>
  );
};
