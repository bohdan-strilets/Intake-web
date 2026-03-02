export type PeriodCardProps = {
  periodStart: string;
  periodEnd: string;
  loggedDays: number;
  totalDays: number;
  onPrev?: () => void;
  onNext?: () => void;
};
