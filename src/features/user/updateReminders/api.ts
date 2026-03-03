import type { UserEntity } from '@entities/user';

import { API_ROUTES } from '@shared/api';
import { patch } from '@shared/api/http';

import type { UpdateRemindersDto } from './types';

export const updateRemindersApi = (dto: UpdateRemindersDto) =>
  patch<UserEntity, UpdateRemindersDto>(API_ROUTES.users.reminders, dto);
