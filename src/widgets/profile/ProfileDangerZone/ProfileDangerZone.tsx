import { useLogoutMutation } from '@features/auth/logout';
import { useDeleteProfileMutation } from '@features/user/deleteProfile';

import { useTranslation } from '@shared/i18n';
import { useConfirm } from '@shared/lib/confirm';
import { Button } from '@shared/ui/controls/Button';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';

export const ProfileDangerZone = () => {
  const { mutate: logout, isPending: isLogout } = useLogoutMutation();
  const { mutate: deleteProfile, isPending: isDeleting } =
    useDeleteProfileMutation();

  const { t } = useTranslation('profile');

  const { openConfirm } = useConfirm();

  const handleDelete = () => {
    openConfirm({
      title: t('dialogs.confirmDelete.title'),
      description: t('dialogs.confirmDelete.description'),
      confirmText: t('actions.deleteAccount'),
      confirmVariant: 'danger',
      onConfirm: deleteProfile,
    });
  };

  return (
    <Card>
      <Button
        variant="secondary"
        iconLeft="logout"
        iconSize="sm"
        onClick={() => logout()}
        loading={isLogout}
      >
        {t('actions.logout')}
      </Button>

      <Divider />

      <Button
        variant="danger"
        size="sm"
        iconLeft="trash"
        iconColor="danger"
        iconSize="sm"
        onClick={handleDelete}
        loading={isDeleting}
      >
        {t('actions.deleteAccount')}
      </Button>
    </Card>
  );
};
