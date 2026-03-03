import type { ReminderSettings } from '../types/userSettings';

export const DEFAULT_REMINDERS: ReminderSettings = {
  enabled: false,
  time: '20:00',
  timezone: 'Europe/Kyiv',
  channels: { push: false, email: false },
};
