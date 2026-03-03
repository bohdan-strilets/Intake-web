import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { EditWeightForm } from '@features/day/editWeight';
import { useGoalProgressQuery } from '@features/user/goalProgress';

import { useTranslation, type TFunction } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { collapse } from '@shared/motion';
import { Button } from '@shared/ui/controls/Button';
import { Icon } from '@shared/ui/controls/Icon';
import { Card } from '@shared/ui/layout/Card';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { AnimatedNumber } from '@shared/ui/motion/AnimatedNumber';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { GoalProgressResponse } from '@entities/user/types';

import { progressFill, progressTrack } from './Weight.css';
import type { WeightProps } from './Weight.types';

/** API sends progressPercent 0–100. Convert to 0–1 for the bar. */
function progressPercentToFactor(
  progressPercent: number | null | undefined,
): number {
  if (progressPercent == null || !Number.isFinite(progressPercent)) return 0;
  const value = progressPercent > 1 ? progressPercent / 100 : progressPercent;
  return Math.max(0, Math.min(1, value));
}

/** Format kg for display: integer when .0, otherwise one decimal. */
function formatKg(value: number): string {
  return value % 1 === 0 ? String(Math.round(value)) : value.toFixed(1);
}

const UNREALISTIC_TEMPO_THRESHOLD = 1.5;
const MIN_TEMPO_TO_SHOW = 0.01;
const expandTransition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
};

function ExpandedView({
  goalProgress,
  progressPercent,
  remainingKg,
  tProfile,
  tCommon,
}: {
  goalProgress: GoalProgressResponse;
  progressPercent: number;
  remainingKg: number;
  tProfile: TFunction<'profile', undefined>;
  tCommon: TFunction<'common', undefined>;
}) {
  const hasMeaningfulTempo =
    goalProgress.kgPerWeek != null &&
    Math.abs(goalProgress.kgPerWeek) >= MIN_TEMPO_TO_SHOW &&
    Math.abs(goalProgress.kgPerWeek) <= UNREALISTIC_TEMPO_THRESHOLD;
  const showTempoBlock = hasMeaningfulTempo;

  return (
    <Stack gap="lg" as="section" role="region" aria-label={tProfile('sections.goalProgress')}>
      <Stack gap="md">
        <Inline justify="between">
          <Paragraph size="xs" tone="muted">
            {tProfile('goalProgress.startLabel')} {goalProgress.startWeight}{' '}
            {tCommon('units.kilograms')}
          </Paragraph>
          <Paragraph size="xs" tone="muted">
            {tProfile('goalProgress.goalLabel')} {goalProgress.targetWeight}{' '}
            {tCommon('units.kilograms')}
          </Paragraph>
        </Inline>
        <div className={progressTrack}>
          <div
            className={progressFill}
            style={{ width: `${Math.round(progressPercent * 100)}%` }}
          />
        </div>
      </Stack>

      {remainingKg > 0 && (
        <Paragraph size="md" weight="medium">
          {tProfile('goalProgress.remaining', {
            value: formatKg(remainingKg),
          })}
        </Paragraph>
      )}

      {showTempoBlock && (
        <Stack gap="xs">
          <Paragraph size="xs" tone="muted">
            {tProfile('goalProgress.avgPacePerWeek', {
              value: formatKg(Math.abs(goalProgress.kgPerWeek!)),
            })}
          </Paragraph>
          {goalProgress.estimatedWeeks != null &&
            goalProgress.estimatedWeeks > 0 && (
              <Paragraph size="xs" tone="muted">
                {tProfile('goalProgress.weeksAtPace', {
                  weeks: goalProgress.estimatedWeeks,
                })}
              </Paragraph>
            )}
          {goalProgress.estimatedWeeks === 0 && (
            <Paragraph size="xs" tone="muted">
              {tProfile('goalProgress.goalAchieved')}
            </Paragraph>
          )}
        </Stack>
      )}

      {!showTempoBlock && (
        <Paragraph size="xs" tone="muted">
          {tProfile('goalProgress.notEnoughData')}
        </Paragraph>
      )}
    </Stack>
  );
}

export const Weight = ({ dayId, date, weight }: WeightProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    open(
      <EditWeightForm dayId={dayId} date={date} initialState={{ weight }} />,
    );
  };

  const progressFactor = progressPercentToFactor(goalProgress?.progressPercent);
  const remainingKg =
    goalProgress &&
    goalProgress.currentWeight != null &&
    goalProgress.targetWeight != null
      ? Math.abs(goalProgress.currentWeight - goalProgress.targetWeight)
      : 0;

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
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleEdit}
                  fullWidth
                >
                  {tDay('actions.setWeight')}
                </Button>
                {hasValidGoalProgress && goalProgress && (
                  <>
                    <Button
                      variant="ghostMuted"
                      size="sm"
                      fullWidth
                      onClick={() => setIsExpanded((e) => !e)}
                    >
                      {isExpanded
                        ? tProfile('goalProgress.hideProgress')
                        : tProfile('goalProgress.showProgress')}
                    </Button>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: expandTransition,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: expandTransition,
                          }}
                          transition={expandTransition}
                          style={{ overflow: 'hidden' }}
                        >
                          <ExpandedView
                            goalProgress={goalProgress}
                            progressPercent={progressFactor}
                            remainingKg={remainingKg}
                            tProfile={tProfile}
                            tCommon={tCommon}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
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
              <Stack gap="md">
                <Inline justify="between" align="center">
                  <Paragraph weight="bold">
                    {tDay('entities.weight')}
                  </Paragraph>
                  <Inline align="center" gap="md">
                    <Paragraph size="xl" weight="bold">
                      <AnimatedNumber value={weight!} /> {tCommon('units.kilograms')}
                    </Paragraph>
                    <Button variant="ghost" size="sm" onClick={handleEdit}>
                      <Icon name="edit" size="sm" />
                    </Button>
                  </Inline>
                </Inline>

                {(hasValidGoalProgress && goalProgress) ? (
                  <>
                    <Button
                      variant="ghostMuted"
                      size="sm"
                      fullWidth
                      onClick={() => setIsExpanded((e) => !e)}
                    >
                      {isExpanded
                        ? tProfile('goalProgress.hideProgress')
                        : tProfile('goalProgress.showProgress')}
                    </Button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: expandTransition,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: expandTransition,
                          }}
                          transition={expandTransition}
                          style={{ overflow: 'hidden' }}
                        >
                          <ExpandedView
                            goalProgress={goalProgress}
                            progressPercent={progressFactor}
                            remainingKg={remainingKg}
                            tProfile={tProfile}
                            tCommon={tCommon}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Stack gap="sm">
                    <Paragraph size="xs" tone="muted">
                      1. {tProfile('goalProgress.condition1')}
                    </Paragraph>
                    <Paragraph size="xs" tone="muted">
                      2. {tProfile('goalProgress.condition2')}
                    </Paragraph>
                  </Stack>
                )}
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
    </Card>
  );
};
