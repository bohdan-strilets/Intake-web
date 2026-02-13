import type { UserEntity } from '@entities/user';

export type ProfileAccountSectionProps = {
  name: UserEntity['name'];
  email: UserEntity['email'];
};
