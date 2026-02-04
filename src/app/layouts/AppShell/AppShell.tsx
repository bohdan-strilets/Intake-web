import {
  container,
  content,
  headerSection,
  navigationSection,
  root,
} from './AppShell.css';
import type { AppShellProps } from './AppShell.types';

export const AppShell = ({ header, navigation, children }: AppShellProps) => {
  return (
    <div className={root}>
      <div className={container}>
        {header && <header className={headerSection}>{header}</header>}

        <main className={content}>{children}</main>

        {navigation && <nav className={navigationSection}>{navigation}</nav>}
      </div>
    </div>
  );
};
