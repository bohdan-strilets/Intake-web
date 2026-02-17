import type { StatsEntity } from '@entities/stats';

import { API_ROUTES } from '@shared/api';
import { get } from '@shared/api/http';

import type { QueryParams } from './types';

export const getStatsApi = async (query: QueryParams): Promise<StatsEntity> => {
  return get<StatsEntity, QueryParams>(API_ROUTES.stats.range, query);
};
