import { useLogoutMutation } from '@features/auth/logout';
import { useDeleteProfileMutation } from '@features/user/deleteProfile';

import { useConfirm } from '@shared/lib/confirm';
import { Button } from '@shared/ui/controls/Button';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';

export const ProfileDangerZone = () => {
  const { mutate: logout, isPending: isLogout } = useLogoutMutation();
  const { mutate: deleteProfile, isPending: isDeleting } =
    useDeleteProfileMutation();

  const { openConfirm } = useConfirm();

  const handleDelete = () => {
    openConfirm({
      title: 'Delete your account?',
      description:
        'Your account will be deactivated and you will lose access. You can restore it later by signing in again.',
      confirmText: 'Delete account',
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
        Logout
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
        Delete Profile
      </Button>
    </Card>
  );
};
