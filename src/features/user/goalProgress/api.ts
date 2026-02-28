import type { GoalProgressResponse } from '@entities/user/types';
import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

export const getGoalProgressApi = async (): Promise<GoalProgressResponse> => {
  return get<GoalProgressResponse>(API_ROUTES.users.goalProgress);
};
