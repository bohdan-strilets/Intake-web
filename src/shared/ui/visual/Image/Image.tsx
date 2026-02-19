import clsx from 'clsx';
import { useState } from 'react';

import { ImageFallback } from '../ImageFallback';

import { image, wrapper } from './Image.css';
import type { ImageProps } from './Image.types';

export const Image = ({
  src,
  alt,
  radius,
  objectFit,
  bordered,
  shadow,
  className,
  ...rest
}: ImageProps) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={clsx(wrapper({ radius, bordered, shadow }), className)}>
      {!hasError ? (
        <img
          {...rest}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
          className={image({ objectFit })}
        />
      ) : (
        <ImageFallback />
      )}
    </div>
  );
};
