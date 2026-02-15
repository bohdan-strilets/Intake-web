import { useLogoutMutation } from '@features/auth/logout';

import { Button } from '@shared/ui/controls/Button';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';

export const ProfileDangerZone = () => {
  const { mutate: logout, isPending: isLogout } = useLogoutMutation();

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
      >
        Delete Profile
      </Button>
    </Card>
  );
};
