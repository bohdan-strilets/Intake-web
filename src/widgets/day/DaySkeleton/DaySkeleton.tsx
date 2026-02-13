import { Skeleton } from '@shared/ui/feedback/Skeleton';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';

export const DaySkeleton = () => {
  return (
    <Stack gap="lg">
      <Card gap="xs" shadow="sm">
        <Skeleton width={100} />
        <Skeleton width={220} height={20} />
      </Card>

      <Card shadow="sm">
        <Inline align="baseline">
          <Skeleton width={80} height={80} />
          <Skeleton width={100} height={12} />
        </Inline>

        <Inline justify="between">
          <Skeleton width={80} height={50} />
          <Skeleton width={80} height={50} />
          <Skeleton width={80} height={50} />
        </Inline>
      </Card>

      <Card gap="md" shadow="sm">
        <Skeleton width="50%" />
        <Skeleton />
        <Skeleton />
      </Card>

      <Card shadow="sm">
        <Skeleton width="50%" />
        <Skeleton width="70%" />
        <Skeleton height={200} />
      </Card>
    </Stack>
  );
};
