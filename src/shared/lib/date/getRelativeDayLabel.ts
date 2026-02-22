export const getRelativeDayLabel = (dateString: string) => {
  const today = new Date();
  const date = new Date(dateString);

  const diffInMs =
    new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() -
    new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays === 0) return 'today';
  if (diffInDays === 1) return 'yesterday';

  return null;
};
