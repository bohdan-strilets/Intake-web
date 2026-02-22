import { Skeleton } from '@shared/ui/feedback/Skeleton';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';

export const Loading = () => {
  return (
    <Stack gap="lg">
      <Card shadow="md">
        <Skeleton />
      </Card>

      <Card shadow="md">
        <Stack align="center" gap="lg">
          <Skeleton />

          <Skeleton width={85} height={50} />

          <Skeleton width="65%" />
          <Skeleton width="90%" />
        </Stack>
      </Card>

      <Card shadow="sm" gap="lg">
        <Skeleton width="50%" />
        <Skeleton />
        <Skeleton />
      </Card>

      <Card shadow="sm" gap="lg">
        <Skeleton width="50%" />
        <Skeleton />
        <Skeleton />

        <Spacer size="lg" />

        <Skeleton />
        <Skeleton />
        <Skeleton />

        <Divider />

        <Skeleton />
        <Skeleton />
      </Card>

      <Card>
        <Skeleton height={40} />
        <Divider />
        <Skeleton height={30} />
      </Card>
    </Stack>
  );
};
