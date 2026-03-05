import { AppContainer } from '@app/layouts/AppContainer';

import {
  content,
  headerSection,
  inner,
  mainColumn,
  navigationSection,
  root,
  shellLayout,
  sidebarSection,
} from './AppShell.css';
import type { AppShellProps } from './AppShell.types';

export const AppShell = ({
  header,
  navigation,
  sidebar,
  children,
}: AppShellProps) => {
  return (
    <div className={root}>
      <AppContainer>
        <div className={shellLayout}>
          {sidebar && <aside className={sidebarSection}>{sidebar}</aside>}

          <div className={mainColumn}>
            <div className={inner}>
              {header && <header className={headerSection}>{header}</header>}

              <main className={content}>{children}</main>

              {navigation && (
                <div className={navigationSection}>{navigation}</div>
              )}
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
