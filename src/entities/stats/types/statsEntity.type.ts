import type { DailyStatsItem } from './dailyStatsItem.type';

export type StatsEntity = {
  period: {
    start: string;
    end: string;
    totalDays: number;
    loggedDays: number;
  };

  calories: {
    tdee: number;
    average: number;
    goal: number;
    delta: number;
  };

  macros: {
    protein: {
      average: number;
      target: number;
    };
    fat: {
      average: number;
      target: number;
    };
    carbs: {
      average: number;
      target: number;
    };
  };

  weight?: {
    delta: number;
  };

  days: DailyStatsItem[];
};
