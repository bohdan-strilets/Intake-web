import { useTranslation } from '@shared/i18n';
import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { ErrorStateProps } from './Error.types';

export const Error = ({ refetch }: ErrorStateProps) => {
  const { t: tCalendar } = useTranslation('calendar');
  const { t: tCommon } = useTranslation('common');

  return (
    <ErrorState
      title={tCalendar('errors.calendarLoad.title')}
      description={tCalendar('errors.calendarLoad.description')}
      actionLabel={tCommon('actions.tryAgain')}
      onAction={refetch}
    />
  );
};
