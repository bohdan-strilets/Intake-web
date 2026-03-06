import { useMemo } from 'react';

import { useTranslation } from '@shared/i18n';
import { formatShortWeekday } from '@shared/lib/date';
import { Icon } from '@shared/ui/controls/Icon';

import {
  card,
  description,
  progressBlock,
  weekGrid,
  weekdayLabel,
  flameWrap,
} from './StreakCard.css';
import type { StreakCardProps } from './StreakCard.types';

function getLast7DateStrings(): string[] {
  const dates: string[] = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    dates.push(`${y}-${m}-${day}`);
  }
  return dates;
}

export const StreakCard = ({
  currentStreak,
  activityLast7Days,
  firstActivityDate = null,
}: StreakCardProps) => {
  const { t } = useTranslation('stats');

  const last7Dates = useMemo(getLast7DateStrings, []);

  const skippedInLast7 = useMemo(() => {
    if (firstActivityDate == null) {
      return activityLast7Days.filter((active) => !active).length;
    }
    return activityLast7Days.filter((active, i) => {
      if (active) return false;
      const dateStr = last7Dates[i];
      return dateStr >= firstActivityDate;
    }).length;
  }, [activityLast7Days, firstActivityDate, last7Dates]);

  const isZeroStreak = currentStreak === 0;
  const daysInRowText = !isZeroStreak
    ? t('streak.daysInRow', { count: currentStreak })
    : null;
  const skippedText =
    skippedInLast7 > 0
      ? t('streak.skippedInLast7', { count: skippedInLast7 })
      : null;

  return (
    <div className={card}>
      {isZeroStreak ? (
        <p className={description}>{t('streak.description0')}</p>
      ) : (
        <>
          {daysInRowText != null && (
            <p className={description}>{daysInRowText}</p>
          )}
          {skippedText != null && (
            <p className={description} aria-live="polite">
              {skippedText}
            </p>
          )}
        </>
      )}
      <div
        className={progressBlock}
        role="img"
        aria-label={t('streak.last7DaysLabel')}
      >
        <div className={weekGrid}>
          {last7Dates.map((dateStr) => (
            <div key={dateStr} className={flameWrap}>
              <span className={weekdayLabel}>
                {formatShortWeekday(dateStr)}
              </span>
            </div>
          ))}
        </div>
        <div className={weekGrid}>
          {activityLast7Days.map((active, i) => (
            <div key={i} className={flameWrap}>
              <Icon
                name="flame"
                size="sm"
                color={active ? 'warning' : 'muted'}
                decorative
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
