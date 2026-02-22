import { Skeleton } from '@shared/ui/feedback/Skeleton';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Stack } from '@shared/ui/layout/Stack';

export const Loading = () => {
  return (
    <Stack gap="lg">
      <Skeleton height={35} />

      <Card shadow="sm">
        <Skeleton />
        <Skeleton />
      </Card>

      <Card shadow="sm">
        <Skeleton />

        <Skeleton height={40} />

        <Stack gap="xs">
          <Skeleton />
          <Skeleton />
        </Stack>
      </Card>

      <Card shadow="sm" gap="lg">
        <Skeleton width="50%" />
        <Stack gap="xs">
          <Skeleton width="30%" />
          <Skeleton height={20} />
        </Stack>

        <Divider spacing="none" />

        <Stack gap="xs">
          <Skeleton width="40%" />
          <Skeleton height={20} />
        </Stack>

        <Divider spacing="none" />

        <Stack gap="xs">
          <Skeleton width="35%" />
          <Skeleton height={20} />
        </Stack>
      </Card>

      <Card shadow="sm">
        <Skeleton width="60%" />
        <Skeleton height={20} />
      </Card>
    </Stack>
  );
};
