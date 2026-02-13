import { API_ROUTES } from '@shared/api';
import { del } from '@shared/api/http';

export const deleteFoodApi = async (foodId: string) => {
  return await del<void>(API_ROUTES.food.delete(foodId));
};
