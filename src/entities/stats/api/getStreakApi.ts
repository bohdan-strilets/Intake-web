import type { StreakEntity } from '@entities/stats';

import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

export const getStreakApi = async (): Promise<StreakEntity> => {
  return get<StreakEntity>(API_ROUTES.stats.streak);
};
