import type { Language, Theme } from '../enums';

export type ReminderChannels = {
  push?: boolean;
  email?: boolean;
};

export type ReminderSettings = {
  enabled?: boolean;
  time?: string;
  timezone?: string;
  channels?: ReminderChannels;
};

export type UserSettings = {
  theme: Theme;
  language: Language;
  sound: boolean;
  volume: number;
  reminders?: ReminderSettings;
};
