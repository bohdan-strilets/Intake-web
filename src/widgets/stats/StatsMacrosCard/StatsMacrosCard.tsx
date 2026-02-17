import { Progress } from '@shared/ui/feedback/Progress';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { StatsMacrosCardProps } from './StatsMacrosCard.types';

export const StatsMacrosCard = ({
  protein,
  fat,
  carbs,
}: StatsMacrosCardProps) => {
  return (
    <Card shadow="sm" gap="lg">
      <Paragraph>Average Macros</Paragraph>
      <Stack gap="xs">
        <Paragraph size="sm" tone="muted">
          Protein
        </Paragraph>
        <Inline justify="between">
          <Paragraph>{protein.average}g</Paragraph>
          <Paragraph>{protein.target}g</Paragraph>
        </Inline>
        <Progress value={protein.average} target={protein.target} unit="g" />
      </Stack>

      <Divider spacing="none" />

      <Stack gap="xs">
        <Paragraph size="sm" tone="muted">
          Fat
        </Paragraph>
        <Inline justify="between">
          <Paragraph>{fat.average}g</Paragraph>
          <Paragraph>{fat.target}g</Paragraph>
        </Inline>
        <Progress value={fat.average} target={fat.target} unit="g" />
      </Stack>

      <Divider spacing="none" />

      <Stack gap="xs">
        <Paragraph size="sm" tone="muted">
          Carbs
        </Paragraph>
        <Inline justify="between">
          <Paragraph>{carbs.average}g</Paragraph>
          <Paragraph>{carbs.target}g</Paragraph>
        </Inline>
        <Progress value={carbs.average} target={carbs.target} unit="g" />
      </Stack>
    </Card>
  );
};
