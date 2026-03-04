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
      percent: number;
    };
    fat: {
      average: number;
      target: number;
      percent: number;
    };
    carbs: {
      average: number;
      target: number;
      percent: number;
    };
  };

  weight?: {
    delta: number;
  };

  /** Day closest to calorie goal (among logged days) */
  bestDay?: {
    date: string;
    calories: number;
    deviation: number;
  };

  /** Day farthest from calorie goal (among logged days); deviation = calories - goal */
  worstDay?: {
    date: string;
    calories: number;
    deviation: number;
  };

  /** Day with highest calories above goal; deviation = calories - goal */
  mostAboveTarget?: {
    date: string;
    calories: number;
    deviation: number;
  };

  days: DailyStatsItem[];
};
