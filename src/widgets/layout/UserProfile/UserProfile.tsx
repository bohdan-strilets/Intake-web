import { Link } from '@tanstack/react-router';

import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { ROUTES } from '@shared/routes';
import { Avatar } from '@shared/ui/visual/Avatar';

import { name, root } from './UserProfile.css';

type UserProfileProps = {
  showName?: boolean;
};

export const UserProfile = ({ showName = true }: UserProfileProps) => {
  const { data: user, isPending } = useProfileDetailsQuery();

  if (isPending || !user) {
    return (
      <Link to={ROUTES.app.profile} className={root}>
        {showName && <span className={name}>—</span>}
        <Avatar name="?" size="md" />
      </Link>
    );
  }

  return (
    <Link to={ROUTES.app.profile} className={root}>
      {showName && (
        <span className={name} title={user.name}>
          {user.name}
        </span>
      )}
      <Avatar name={user.name} size="md" />
    </Link>
  );
};
