import { Children, type ReactNode } from 'react';

import { Inline } from '@shared/ui/layout/Inline';

import { Paragraph } from '../Paragraph';

import type { TextLabelProps } from './TextLabel.types';

const paragraphProps = {
  size: 'md' as const,
  tone: 'secondary' as const,
  weight: 'regular' as const,
};

function wrapContent(children: ReactNode) {
  const childArray = Children.toArray(children);
  if (childArray.length <= 1 && (typeof children === 'string' || typeof childArray[0] === 'string')) {
    return (
      <Paragraph {...paragraphProps}>
        {children}
      </Paragraph>
    );
  }
  return Children.map(children, (child) =>
    typeof child === 'string' ? (
      <Paragraph {...paragraphProps}>{child}</Paragraph>
    ) : (
      child
    ),
  );
}

export const TextLabel = ({ children, required, ...rest }: TextLabelProps) => {
  const childArray = Children.toArray(children);
  const hasTrailing = childArray.length > 1;
  const labelContent = hasTrailing ? childArray.slice(0, -1) : children;
  const trailing = hasTrailing ? childArray[childArray.length - 1] : null;

  return (
    <label {...rest}>
      <Inline gap="sm" align="center" justify={hasTrailing ? 'between' : 'start'} wrap={false}>
        <Inline gap="sm" align="center">
          {wrapContent(labelContent)}
          {required && (
            <Paragraph size="sm" tone="danger" aria-hidden>
              *
            </Paragraph>
          )}
        </Inline>
        {trailing}
      </Inline>
    </label>
  );
};
