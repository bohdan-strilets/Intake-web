import type { ReminderChannels } from '@entities/user';

export type UpdateRemindersDto = {
  enabled?: boolean;
  time?: string;
  timezone?: string;
  channels?: ReminderChannels;
};
