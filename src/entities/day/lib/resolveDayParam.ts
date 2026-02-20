import { formatDate } from '@shared/lib/date';

import { DAY_ALIAS } from '../enums';

export const resolveDayParam = (date: string) => {
  if (date === DAY_ALIAS.TODAY) {
    return formatDate(new Date());
  }

  return date;
};
