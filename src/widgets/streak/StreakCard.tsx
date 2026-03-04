import { useMemo } from 'react';

import { useTranslation } from '@shared/i18n';
import { formatShortWeekday } from '@shared/lib/date';
import { Icon } from '@shared/ui/controls/Icon';

import {
  card,
  description,
  header,
  progressBlock,
  title,
  weekGrid,
  weekdayLabel,
  flameWrap,
} from './StreakCard.css';
import type { StreakCardProps } from './StreakCard.types';

const STREAK_DESCRIPTION_KEYS = [
  'streak.description0',
  'streak.description1',
  'streak.description2',
  'streak.description3',
] as const;

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

export const StreakCard = ({ currentStreak, activityLast7Days }: StreakCardProps) => {
  const { t } = useTranslation('stats');

  const last7Dates = useMemo(getLast7DateStrings, []);

  const descriptionKey =
    currentStreak <= 3 ? STREAK_DESCRIPTION_KEYS[currentStreak] : null;

  return (
    <div className={card}>
      {descriptionKey == null && (
        <div className={header}>
          <span className={title}>{currentStreak}</span>
        </div>
      )}
      {descriptionKey != null && (
        <p className={description}>{t(descriptionKey)}</p>
      )}
      <div className={progressBlock} role="img" aria-label={t('streak.last7DaysLabel')}>
        <div className={weekGrid}>
          {last7Dates.map((dateStr) => (
            <div key={dateStr} className={flameWrap}>
              <span className={weekdayLabel}>{formatShortWeekday(dateStr)}</span>
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
