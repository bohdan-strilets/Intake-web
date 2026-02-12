import { root } from './Overlay.css';
import type { OverlayProps } from './Overlay.types';

export const Overlay = ({ children, onClick }: OverlayProps) => {
  return (
    <div onClick={onClick} className={root}>
      {children}
    </div>
  );
};
