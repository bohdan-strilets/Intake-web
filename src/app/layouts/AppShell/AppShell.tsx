import { AppContainer } from '@app/layouts/AppContainer';

import {
  content,
  headerSection,
  inner,
  navigationSection,
  root,
} from './AppShell.css';
import type { AppShellProps } from './AppShell.types';

export const AppShell = ({ header, navigation, children }: AppShellProps) => {
  return (
    <div className={root}>
      <AppContainer>
        <div className={inner}>
          {header && <header className={headerSection}>{header}</header>}

          <main className={content}>{children}</main>

          {navigation && <div className={navigationSection}>{navigation}</div>}
        </div>
      </AppContainer>
    </div>
  );
};
