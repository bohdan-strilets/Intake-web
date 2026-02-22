import { useTranslation } from '@shared/i18n';
import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { ProfileErrorStateProps } from './ProfileErrorState.types';

export const ProfileErrorState = ({ refetch }: ProfileErrorStateProps) => {
  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  return (
    <ErrorState
      title={tProfile('errors.profileLoad.title')}
      description={tProfile('errors.profileLoad.description')}
      actionLabel={tCommon('actions.tryAgain')}
      onAction={refetch}
    />
  );
};
