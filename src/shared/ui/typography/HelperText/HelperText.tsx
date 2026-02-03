import { Paragraph } from '../Paragraph';

import type { HelperTextProps } from './HelperText.types';

export const HelperText = ({ children }: HelperTextProps) => {
  return (
    <Paragraph size="sm" tone="muted">
      {children}
    </Paragraph>
  );
};
