import { useTranslation } from '@shared/i18n';
import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { ErrorProps } from './Error.types';

export const Error = ({ refetch }: ErrorProps) => {
  const { t: tDay } = useTranslation('day');
  const { t: tCommon } = useTranslation('common');

  return (
    <ErrorState
      title={tDay('errors.dayLoad.title')}
      description={tDay('errors.dayLoad.description')}
      actionLabel={tCommon('actions.tryAgain')}
      onAction={refetch}
    />
  );
};
