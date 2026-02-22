import { useTranslation } from '@shared/i18n';
import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { StatsErrorStateProps } from './StatsErrorState.types';

export const StatsErrorState = ({ refetch }: StatsErrorStateProps) => {
  const { t: tStats } = useTranslation('stats');
  const { t: tCommon } = useTranslation('common');

  return (
    <ErrorState
      title={tStats('errors.statsLoad.title')}
      description={tStats('errors.statsLoad.description')}
      actionLabel={tCommon('actions.tryAgain')}
      onAction={refetch}
    />
  );
};
