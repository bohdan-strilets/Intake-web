import type { UserEntity } from '@entities/user';

export type ProfileSettingsSectionProps = {
  settings: UserEntity['settings'];
};
