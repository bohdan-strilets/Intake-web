import type { UserEntity } from '@entities/user';

export type AccountSectionProps = {
  name: UserEntity['name'];
  email: UserEntity['email'];
};
