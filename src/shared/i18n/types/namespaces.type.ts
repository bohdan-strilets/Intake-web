import type auth from '../resources/en/auth.json';
import type calendar from '../resources/en/calendar.json';
import type common from '../resources/en/common.json';
import type day from '../resources/en/day.json';
import type food from '../resources/en/food.json';
import type landing from '../resources/en/landing.json';
import type profile from '../resources/en/profile.json';
import type stats from '../resources/en/stats.json';
import type user from '../resources/en/user.json';

export type I18nNamespaces = {
  common: typeof common;
  user: typeof user;
  profile: typeof profile;
  auth: typeof auth;
  food: typeof food;
  landing: typeof landing;
  stats: typeof stats;
  calendar: typeof calendar;
  day: typeof day;
};
