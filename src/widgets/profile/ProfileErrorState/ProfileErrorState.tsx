import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { ProfileErrorStateProps } from './ProfileErrorState.types';

export const ProfileErrorState = ({ refetch }: ProfileErrorStateProps) => {
  return (
    <ErrorState
      title="Failed to load profile"
      description="Please check your connection and try again."
      actionLabel="Try again"
      onAction={refetch}
    />
  );
};
