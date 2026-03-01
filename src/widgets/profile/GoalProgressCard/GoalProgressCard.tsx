import {
  calcGoalProgressPercent,
  useGoalProgressQuery,
} from '@features/user/goalProgress';

import { useTranslation } from '@shared/i18n';
import { Progress } from '@shared/ui/feedback/Progress';
import { Spinner } from '@shared/ui/feedback/Spinner';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Spacer } from '@shared/ui/layout/Spacer';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { SectionTitle } from '../SectionTitle';

export const GoalProgressCard = () => {
  const { data, isPending, isError } = useGoalProgressQuery();
  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const sectionTitle = tProfile('sections.goalProgress');

  if (isPending) {
    return (
      <section role="region" aria-label={sectionTitle}>
        <Card shadow="sm" gap="lg">
          <Inline justify="center">
            <Spinner size="sm" />
          </Inline>
        </Card>
      </section>
    );
  }

  if (isError) {
    return (
      <section role="region" aria-label={sectionTitle}>
        <Card shadow="sm" gap="lg">
          <SectionTitle title={sectionTitle} />
          <Paragraph size="sm" tone="muted">
            {tProfile('goalProgress.errorLoad')}
          </Paragraph>
        </Card>
      </section>
    );
  }

  const progress = data;
  if (!progress) {
    return null;
  }

  const hasTargetWeight =
    progress.targetWeight != null && progress.targetWeight > 0;

  if (!hasTargetWeight) {
    return (
      <section role="region" aria-label={sectionTitle}>
        <Card shadow="sm" gap="lg">
          <SectionTitle title={sectionTitle} />
          <Stack gap="sm">
            <Paragraph size="sm" tone="muted">
              1. {tProfile('goalProgress.condition1')}
            </Paragraph>
            <Paragraph size="sm" tone="muted">
              2. {tProfile('goalProgress.condition2')}
            </Paragraph>
          </Stack>
        </Card>
      </section>
    );
  }

  const progressPercent = calcGoalProgressPercent(
    progress.startWeight,
    progress.currentWeight,
    progress.targetWeight,
  );
  const roundedPercent = Math.round(progressPercent);
  const isGoalAchieved = progress.estimatedWeeks === 0;

  return (
    <section role="region" aria-label={sectionTitle}>
      <Card shadow="sm" gap="lg">
        <SectionTitle title={sectionTitle} />

        <Inline gap="sm" align="center" wrap>
            <Paragraph size="sm" tone="muted">
              {progress.startWeight}
            </Paragraph>
            <Paragraph size="xs" tone="muted" aria-hidden>
              →
            </Paragraph>
            <Paragraph size="lg" weight="bold">
              {progress.currentWeight}
            </Paragraph>
            <Paragraph size="xs" tone="muted" aria-hidden>
              →
            </Paragraph>
            <Paragraph size="sm" tone="muted">
              {progress.targetWeight}
            </Paragraph>
            <Paragraph size="sm" tone="muted">
              {tCommon('units.kilograms')}
            </Paragraph>
        </Inline>

        <Spacer size="lg" />

        <>
          <Progress
              value={roundedPercent}
              target={100}
              unit="%"
              valueSize="md"
              valueWeight="bold"
            />
            <Spacer size="md" />
            {progress.kgPerWeek != null && (
              <Paragraph size="sm" tone="muted">
                {tProfile('goalProgress.averagePace', {
                  value: Math.abs(progress.kgPerWeek).toFixed(1),
                })}
              </Paragraph>
            )}
            {isGoalAchieved ? (
              <Paragraph size="sm" tone="muted">
                {tProfile('goalProgress.goalAchieved')}
              </Paragraph>
            ) : (
              progress.estimatedWeeks != null &&
              progress.estimatedWeeks > 0 && (
                <Paragraph size="sm" tone="muted">
                  {tProfile('goalProgress.estimatedTime', {
                    weeks: progress.estimatedWeeks,
                  })}
                </Paragraph>
              )
            )}
            {progress.kgPerWeek == null &&
              progress.estimatedWeeks == null &&
              !isGoalAchieved && (
                <Paragraph size="sm" tone="muted">
                  {tProfile('goalProgress.notEnoughData')}
                </Paragraph>
              )}
        </>
      </Card>
    </section>
  );
};
