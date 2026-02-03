import { Inline } from '@shared/ui/layout/Inline';

import { Paragraph } from '../Paragraph';

import type { TextLabelProps } from './TextLabel.types';

export const TextLabel = ({ children, required }: TextLabelProps) => {
  return (
    <Inline gap="sm" align="center">
      <Paragraph size="sm" tone="muted">
        {children}
      </Paragraph>
      {required && (
        <Paragraph size="sm" tone="danger">
          *
        </Paragraph>
      )}
    </Inline>
  );
};
