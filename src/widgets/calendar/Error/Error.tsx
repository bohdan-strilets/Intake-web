import { useTranslation } from '@shared/i18n';
import { QueryErrorWithVerification } from '@shared/ui/feedback/QueryErrorWithVerification';

import type { ErrorProps } from './Error.types';

export const Error = ({ refetch, error }: ErrorProps) => {
  const { t } = useTranslation('calendar');
  return (
    <QueryErrorWithVerification
      refetch={refetch}
      error={error}
      title={t('errors.calendarLoad.title')}
      description={t('errors.calendarLoad.description')}
    />
  );
};
