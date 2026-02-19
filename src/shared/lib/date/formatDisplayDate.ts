export const formatDisplayDate = (
  date: string,
  locale: string = 'en-US',
  showYear: boolean = false,
) =>
  new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: showYear ? 'numeric' : undefined,
  });
