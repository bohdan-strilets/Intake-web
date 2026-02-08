import { root } from './FormError.css';
import type { FormErrorProps } from './FormError.types';

export const FormError = ({ children, id }: FormErrorProps) => {
  if (!children) return null;

  return (
    <div id={id} role="alert" aria-live="assertive" className={root}>
      {children}
    </div>
  );
};
