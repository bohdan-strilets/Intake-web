import { useNavigate } from '@tanstack/react-router';

import { useTranslation } from '@shared/i18n';
import { formatShortWeekday } from '@shared/lib/date';
import { ROUTES } from '@shared/routes';
import { Icon } from '@shared/ui/controls/Icon';

import { clsx } from 'clsx';

import {
  card,
  content,
  deviation,
  deviationDanger,
  deviationSuccess,
  deviationWarning,
  divider,
  iconWrap,
  insightList,
  insightRow,
  insightRowSuccess,
  insightRowWarning,
  line,
  title,
} from './WeeklyInsightCard.css';
import type { WeeklyInsightCardProps } from './WeeklyInsightCard.types';

type DayHighlight = {
  date: string;
  calories: number;
  deviation: number;
};

function formatDeviation(dev: number, unit: string): string {
  const sign = dev >= 0 ? '+' : '−';
  return `${sign}${Math.abs(dev)} ${unit}`;
}

function InsightRow({
  icon,
  iconColor,
  label,
  day,
  tone = 'default',
  rowGradient = 'none',
  onClick,
}: {
  icon: 'target' | 'warning';
  iconColor: 'success' | 'warning';
  label: string;
  day: DayHighlight;
  tone?: 'default' | 'warning';
  rowGradient?: 'none' | 'success' | 'warning';
  onClick: () => void;
}) {
  const { t: tCommon } = useTranslation('common');
  const weekday = formatShortWeekday(day.date);
  const deviationValue = day.deviation;
  const isPositive = deviationValue > 0;
  const deviationClass =
    tone === 'warning'
      ? deviationWarning
      : isPositive
        ? deviationDanger
        : deviationSuccess;
  const rowClass = clsx(
    insightRow,
    rowGradient === 'success' && insightRowSuccess,
    rowGradient === 'warning' && insightRowWarning,
  );

  return (
    <button
      type="button"
      className={rowClass}
      onClick={onClick}
      aria-label={`${label}: ${weekday}, ${day.calories} ${tCommon('units.kcal')}`}
    >
      <span className={iconWrap} aria-hidden>
        <Icon name={icon} size="sm" color={iconColor} />
      </span>
      <div className={content}>
        <div className={title}>{label}</div>
        <div className={line}>
          {weekday} · {day.calories} {tCommon('units.kcal')}
        </div>
        <div className={`${deviation} ${deviationClass}`}>
          {formatDeviation(deviationValue, tCommon('units.kcal'))}
        </div>
      </div>
    </button>
  );
}

export const WeeklyInsightCard = ({ stats }: WeeklyInsightCardProps) => {
  const navigate = useNavigate();
  const { t: tStats } = useTranslation('stats');
  const { bestDay, mostAboveTarget } = stats;

  const hasClosest = bestDay != null;
  const hasMostAbove = mostAboveTarget != null;
  const hasAny = hasClosest || hasMostAbove;

  if (!hasAny) return null;

  const goToDay = (date: string) => {
    navigate({
      to: ROUTES.app.day,
      params: { date },
    });
  };

  return (
    <div className={card}>
      <div className={insightList}>
        {hasClosest && (
          <InsightRow
            icon="target"
            iconColor="success"
            label={tStats('summary.insightClosestToTarget')}
            day={bestDay}
            rowGradient="success"
            onClick={() => goToDay(bestDay.date)}
          />
        )}
        {hasClosest && hasMostAbove && <div className={divider} aria-hidden />}
        {hasMostAbove && (
          <InsightRow
            icon="warning"
            iconColor="warning"
            label={tStats('summary.insightMostAboveTarget')}
            day={mostAboveTarget}
            tone="warning"
            rowGradient="warning"
            onClick={() => goToDay(mostAboveTarget.date)}
          />
        )}
      </div>
    </div>
  );
};
