import { useTranslation } from '@shared/i18n';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { ProfileDailyIntakeProps } from './ProfileDailyIntake.types';

export const ProfileDailyIntake = ({
  recommendedCalories,
  goal,
}: ProfileDailyIntakeProps) => {
  const { t } = useTranslation('profile');

  return (
    <Card shadow="md" tone="accentSoft">
      <Stack align="center" gap="lg">
        <Paragraph tone="muted" weight="medium">
          {t('intake.recommended')}
        </Paragraph>

        <Stack gap="none" align="center">
          <Paragraph size="3xl" weight="bold" tone="accentPrimary">
            {recommendedCalories}
          </Paragraph>
          <Paragraph size="sm" tone="muted">
            {t('intake.kcalPerDay')}
          </Paragraph>
        </Stack>

        <Stack align="center">
          <Paragraph size="sm" tone="muted">
            {goal === 'lose' && t('intake.includesDeficit')}
            {goal === 'gain' && t('intake.includesSurplus')}
            {goal === 'maintain' && t('intake.maintainsCurrentWeight')}
          </Paragraph>
          <Paragraph size="xs" tone="muted">
            {t('intake.basedOnParams')}
          </Paragraph>
        </Stack>
      </Stack>
    </Card>
  );
};
