import { Button } from '@shared/ui/controls/Button';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';

export const ProfileDangerZone = () => {
  return (
    <Card>
      <Button variant="secondary" iconLeft="logout" iconSize="sm">
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
