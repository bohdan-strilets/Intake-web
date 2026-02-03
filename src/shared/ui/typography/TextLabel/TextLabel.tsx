import { Inline } from '@shared/ui/layout/Inline';

import { Paragraph } from '../Paragraph';

import type { TextLabelProps } from './TextLabel.types';

export const TextLabel = ({ children, required, ...rest }: TextLabelProps) => {
  return (
    <label {...rest}>
      <Inline gap="sm" align="center">
        <Paragraph size="md" tone="secondary" weight="regular">
          {children}
        </Paragraph>
        {required && (
          <Paragraph size="sm" tone="danger" aria-hidden>
            *
          </Paragraph>
        )}
      </Inline>
    </label>
  );
};
