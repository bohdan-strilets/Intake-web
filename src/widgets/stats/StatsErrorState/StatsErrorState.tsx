import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { StatsErrorStateProps } from './StatsErrorState.types';

export const StatsErrorState = ({ refetch }: StatsErrorStateProps) => {
  return (
    <ErrorState
      title="Failed to load statistics"
      description="Unable to fetch your stats for this period. Please check your connection and try again."
      actionLabel="Try again"
      onAction={refetch}
    />
  );
};
