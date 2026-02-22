import { useTranslation } from '@shared/i18n';
import { Progress } from '@shared/ui/feedback/Progress';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { MacrosCardProps } from './MacrosCard.types';

export const MacrosCard = ({ protein, fat, carbs }: MacrosCardProps) => {
  const { t: tStats } = useTranslation('stats');
  const { t: tCommon } = useTranslation('common');

  return (
    <Card shadow="sm" gap="lg">
      <Paragraph>{tStats('summary.averageMacros')}</Paragraph>
      <Stack gap="xs">
        <Paragraph size="sm" tone="muted">
          {tCommon('macroNutrients.protein')}
        </Paragraph>
        <Inline justify="between">
          <Paragraph>
            {protein.average}
            {tCommon('units.gramsShort')}
          </Paragraph>
          <Paragraph>
            {protein.target}
            {tCommon('units.gramsShort')}
          </Paragraph>
        </Inline>
        <Progress
          value={protein.average}
          target={protein.target}
          unit={tCommon('units.gramsShort')}
        />
      </Stack>

      <Divider spacing="none" />

      <Stack gap="xs">
        <Paragraph size="sm" tone="muted">
          {tCommon('macroNutrients.fat')}
        </Paragraph>
        <Inline justify="between">
          <Paragraph>
            {fat.average} {tCommon('units.gramsShort')}
          </Paragraph>
          <Paragraph>
            {fat.target} {tCommon('units.gramsShort')}
          </Paragraph>
        </Inline>
        <Progress
          value={fat.average}
          target={fat.target}
          unit={tCommon('units.gramsShort')}
        />
      </Stack>

      <Divider spacing="none" />

      <Stack gap="xs">
        <Paragraph size="sm" tone="muted">
          {tCommon('macroNutrients.carbs')}
        </Paragraph>
        <Inline justify="between">
          <Paragraph>
            {carbs.average} {tCommon('units.gramsShort')}
          </Paragraph>
          <Paragraph>
            {carbs.target} {tCommon('units.gramsShort')}
          </Paragraph>
        </Inline>
        <Progress
          value={carbs.average}
          target={carbs.target}
          unit={tCommon('units.gramsShort')}
        />
      </Stack>
    </Card>
  );
};
