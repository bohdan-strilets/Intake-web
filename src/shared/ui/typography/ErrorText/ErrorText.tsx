import { Paragraph } from '../Paragraph';

import type { ErrorTextProps } from './ErrorText.types';

export const ErrorText = ({ children, ...rest }: ErrorTextProps) => {
  return (
    <Paragraph size="sm" tone="danger" {...rest}>
      {children}
    </Paragraph>
  );
};
