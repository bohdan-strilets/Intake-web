export type ApiParams = {
  dayId: string;
  weight?: number | null;
};

export type MutationParams = {
  dayId: string;
  date: string;
  weight?: number | null;
};

export type SubmitParams = {
  dayId: string;
  date: string;
};
