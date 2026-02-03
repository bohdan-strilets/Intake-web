import { Paragraph } from '../Paragraph';

import type { HelperTextProps } from './HelperText.types';

export const HelperText = ({ children, ...rest }: HelperTextProps) => {
  return (
    <Paragraph size="sm" tone="muted" {...rest}>
      {children}
    </Paragraph>
  );
};
