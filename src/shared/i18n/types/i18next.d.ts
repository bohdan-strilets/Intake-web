import 'i18next';
import type { I18nNamespaces } from './namespaces.type';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
