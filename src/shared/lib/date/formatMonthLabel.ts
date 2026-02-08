export const formatMonthLabel = (
  year: number,
  month: number,
  locale: string = 'en-US',
) => {
  return new Date(year, month).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  });
};
