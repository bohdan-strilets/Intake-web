import i18n, { I18nextProvider } from '@shared/i18n';

import type { I18nProviderProps } from './I18nProvider.types';

export const I18nProvider = ({ children }: I18nProviderProps) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
