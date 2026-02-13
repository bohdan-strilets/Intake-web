import { Skeleton } from '@shared/ui/feedback/Skeleton';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Grid } from '@shared/ui/layout/Grid';
import { Inline } from '@shared/ui/layout/Inline';

export const CallendarSkeleton = () => {
  return (
    <Card shadow="sm">
      <Inline gap="md" align="center" justify="between">
        <Skeleton width={32} height={32} />
        <Skeleton width={150} />
        <Skeleton width={32} height={32} />
      </Inline>

      <Divider />

      <Grid columns={7} gap="sm">
        {Array.from({ length: 42 }).map((_, index) => (
          <Skeleton key={index} height={64} />
        ))}
      </Grid>
    </Card>
  );
};
