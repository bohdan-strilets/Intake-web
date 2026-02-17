export type StatsEntity = {
  period: {
    start: string;
    end: string;
    totalDays: number;
    loggedDays: number;
  };

  calories: {
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
};
