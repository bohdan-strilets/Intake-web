export const formatDisplayDate = (date: string, locale: string = 'en-US') =>
  new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
  });
