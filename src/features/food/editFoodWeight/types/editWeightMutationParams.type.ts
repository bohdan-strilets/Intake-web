export type EditWeightMutationParams = {
  foodId: string;
  weight: number;
  date: string; // для invalidation
};
