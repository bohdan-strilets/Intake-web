import { useTranslation } from '@shared/i18n';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { AnimatedCounter } from '@shared/ui/motion/AnimatedCounter';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { CaloriesCardProps } from './CaloriesCard.types';

export const CaloriesCard = ({
  caloriesAverage,
  caloriesGoal,
  caloriesDelta,
}: CaloriesCardProps) => {
  const { t } = useTranslation('stats');

  const calorieTone =
    caloriesDelta > 0 ? 'warning' : caloriesDelta < 0 ? 'success' : 'secondary';

  return (
    <Card shadow="sm" tone="accentSoft">
      <Paragraph align="center">{t('summary.averagePerDay')}</Paragraph>

      <Paragraph weight="bold" size="display" align="center">
        <AnimatedCounter value={caloriesAverage} />
      </Paragraph>

      <Stack>
        <Paragraph align="center" size="sm" tone="muted">
          {caloriesGoal} {t('summary.kcalPerDay')}
        </Paragraph>
        <Paragraph size="lg" align="center" weight="bold" tone={calorieTone}>
          {caloriesDelta === 0
            ? t('summary.onTarget')
            : `${caloriesDelta > 0 ? '+' : ''}${caloriesDelta} ${t('summary.kcalVsGoal')}`}
        </Paragraph>
      </Stack>
    </Card>
  );
};
