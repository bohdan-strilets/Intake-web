import { ErrorState } from '@shared/ui/feedback/ErrorState';

import type { CalendarErrorStateProps } from './CalendarErrorState.types';

export const CalendarErrorState = ({ refetch }: CalendarErrorStateProps) => {
  return (
    <ErrorState
      title="Failed to load calendar"
      description="Please check your connection and try again."
      actionLabel="Try again"
      onAction={refetch}
    />
  );
};
