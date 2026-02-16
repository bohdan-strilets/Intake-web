import { Skeleton } from '@shared/ui/feedback/Skeleton';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';

export const ProfileFormSkeleton = () => {
  return (
    <Stack gap="lg">
      <Skeleton height={55} />

      <Card gap="lg" shadow="sm">
        <Skeleton width="35%" />
        <Skeleton height={35} />
      </Card>
      <Card gap="lg" shadow="sm">
        <Skeleton width="38%" />
        <Skeleton height={35} />
      </Card>
      <Card gap="lg" shadow="sm">
        <Skeleton width="40%" />
        <Skeleton height={35} />
      </Card>

      <Skeleton height={35} />
    </Stack>
  );
};
