import type { ReactNode } from 'react';

export type FormProps = {
  date: string;
  /** Optional slot to render prompt suggestions. Receives callback to set form text. Composed by page/widget to avoid feature→widget dependency. */
  suggestionsSlot?: (onSelect: (text: string) => void) => ReactNode;
};
