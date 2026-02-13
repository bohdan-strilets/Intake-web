import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

export type ProfileDailyIntakeProps = {
  recommendedCalories: number;
  goal: 'lose' | 'gain' | 'maintain';
};

export const ProfileDailyIntake = ({
  recommendedCalories,
  goal,
}: ProfileDailyIntakeProps) => {
  return (
    <Card shadow="md" tone="accentSoft">
      <Stack align="center" gap="lg">
        <Paragraph tone="muted" weight="medium">
          Recommended daily intake
        </Paragraph>

        <Stack gap="none" align="center">
          <Paragraph size="2xl" weight="bold" tone="accentPrimary">
            {recommendedCalories}
          </Paragraph>
          <Paragraph size="sm" tone="muted">
            kcal per day
          </Paragraph>
        </Stack>

        <Stack align="center">
          <Paragraph size="sm" tone="muted">
            {goal === 'lose' && 'Includes calorie deficit'}
            {goal === 'gain' && 'Includes calorie surplus'}
            {goal === 'maintain' && 'Maintains current weight'}
          </Paragraph>
          <Paragraph size="xs" tone="muted">
            Based on your age, weight and activity level
          </Paragraph>
        </Stack>
      </Stack>
    </Card>
  );
};
