import { Paragraph } from '../Paragraph';

import type { ErrorTextProps } from './ErrorText.types';

export const ErrorText = ({ children }: ErrorTextProps) => {
  return (
    <Paragraph size="sm" tone="danger">
      {children}
    </Paragraph>
  );
};
