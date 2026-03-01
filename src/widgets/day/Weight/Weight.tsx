import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { EditWeightForm } from '@features/day/editWeight';
import {
  calcGoalProgressPercent,
  useGoalProgressQuery,
} from '@features/user/goalProgress';

import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { collapse } from '@shared/motion';
import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Progress } from '@shared/ui/feedback/Progress';
import { Card } from '@shared/ui/layout/Card';
import { Divider } from '@shared/ui/layout/Divider';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { AnimatedNumber } from '@shared/ui/motion/AnimatedNumber';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { root } from './Weight.css';
import type { WeightProps } from './Weight.types';

export const Weight = ({ dayId, date, weight }: WeightProps) => {
  const [isGoalProgressVisible, setIsGoalProgressVisible] = useState(false);
  const { open } = useModal();
  const { data: goalProgress, isPending: isGoalProgressPending } =
    useGoalProgressQuery();

  const isWeightEmpty = weight == null;
  const hasValidGoalProgress = Boolean(
    goalProgress &&
      !isGoalProgressPending &&
      goalProgress.targetWeight != null &&
      goalProgress.targetWeight > 0,
  );

  const { t: tDay } = useTranslation('day');
  const { t: tCommon } = useTranslation('common');
  const { t: tProfile } = useTranslation('profile');

  const handleEdit = () => {
    open(
      <EditWeightForm dayId={dayId} date={date} initialState={{ weight }} />,
    );
  };

  return (
    <Card shadow="sm">
      <Stack gap="lg">
        <AnimatePresence mode="wait">
          {isWeightEmpty ? (
            <motion.div
              key="empty"
              variants={collapse}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Stack gap="md">
                <Button variant="ghost" size="sm" onClick={handleEdit} fullWidth>
                  {tDay('actions.addWeight')}
                </Button>

                <Paragraph tone="muted" size="xs" align="center">
                  {tDay('summary.addWeightDescription')}
                </Paragraph>
              </Stack>
            </motion.div>
          ) : (
            <motion.div
              key="value"
              variants={collapse}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Inline justify="between">
                <Inline justify="between" className={root}>
                  <Paragraph>{tDay('entities.weight')}:</Paragraph>
                  <Paragraph weight="medium">
                    <AnimatedNumber value={weight} /> {tCommon('units.kilograms')}
                  </Paragraph>
                </Inline>
                <Button variant="ghost" size="sm" onClick={handleEdit}>
                  <Icon name="edit" size="sm" />
                </Button>
              </Inline>
            </motion.div>
          )}
        </AnimatePresence>

        {hasValidGoalProgress && goalProgress ? (
          <>
            {isGoalProgressVisible ? (
              <Stack gap="md" as="section" role="region" aria-label={tProfile('sections.goalProgress')}>
                <Divider />
                <Inline gap="sm" align="center" wrap>
                  <Paragraph size="xs" tone="muted">
                    {goalProgress.startWeight}
                  </Paragraph>
                  <Paragraph size="xs" tone="muted" aria-hidden>
                    →
                  </Paragraph>
                  <Paragraph size="md" weight="bold">
                    {goalProgress.currentWeight}
                  </Paragraph>
                  <Paragraph size="xs" tone="muted" aria-hidden>
                    →
                  </Paragraph>
                  <Paragraph size="xs" tone="muted">
                    {goalProgress.targetWeight}
                  </Paragraph>
                  <Paragraph size="xs" tone="muted">
                    {tCommon('units.kilograms')}
                  </Paragraph>
                </Inline>
                <Progress
                  value={Math.round(
                    calcGoalProgressPercent(
                      goalProgress.startWeight,
                      goalProgress.currentWeight,
                      goalProgress.targetWeight,
                    ),
                  )}
                  target={100}
                  unit="%"
                  valueSize="md"
                  valueWeight="bold"
                />
                {goalProgress.kgPerWeek != null && (
                  <Paragraph size="xs" tone="muted">
                    {tProfile('goalProgress.averagePace', {
                      value: Math.abs(goalProgress.kgPerWeek).toFixed(1),
                    })}
                  </Paragraph>
                )}
                {goalProgress.estimatedWeeks === 0 ? (
                  <Paragraph size="xs" tone="muted">
                    {tProfile('goalProgress.goalAchieved')}
                  </Paragraph>
                ) : (
                  goalProgress.estimatedWeeks != null &&
                  goalProgress.estimatedWeeks > 0 && (
                    <Paragraph size="xs" tone="muted">
                      {tProfile('goalProgress.estimatedTime', {
                        weeks: goalProgress.estimatedWeeks,
                      })}
                    </Paragraph>
                  )
                )}
                {goalProgress.kgPerWeek == null &&
                  goalProgress.estimatedWeeks == null && (
                    <Paragraph size="xs" tone="muted">
                      {tProfile('goalProgress.notEnoughData')}
                    </Paragraph>
                  )}
                <Button
                  variant="ghostMuted"
                  size="xs"
                  onClick={() => setIsGoalProgressVisible(false)}
                >
                  {tProfile('goalProgress.tapToHide')}
                </Button>
              </Stack>
            ) : (
              <Button
                variant="ghostMuted"
                size="xs"
                fullWidth
                onClick={() => setIsGoalProgressVisible(true)}
              >
                {tProfile('goalProgress.tapToViewProgress')}
              </Button>
            )}
          </>
        ) : (
          <>
            <Divider />
            <Stack gap="sm">
              <Paragraph size="xs" tone="muted">
                1. {tProfile('goalProgress.condition1')}
              </Paragraph>
              <Paragraph size="xs" tone="muted">
                2. {tProfile('goalProgress.condition2')}
              </Paragraph>
            </Stack>
          </>
        )}
      </Stack>
    </Card>
  );
};
