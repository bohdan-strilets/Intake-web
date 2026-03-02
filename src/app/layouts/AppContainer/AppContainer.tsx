import { root } from './AppContainer.css';
import type { AppContainerProps } from './AppContainer.types';

export const AppContainer = ({ children }: AppContainerProps) => {
  return <div className={root}>{children}</div>;
};
