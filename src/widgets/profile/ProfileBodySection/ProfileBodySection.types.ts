import type { UserEntity } from '@entities/user';

export type ProfileBodySectionProps = {
  sex: UserEntity['sex'];
  age: UserEntity['age'];
  height: UserEntity['height'];
  weight: UserEntity['weight'];
  targetWeight: UserEntity['targetWeight'];
  goal: UserEntity['goal'];
  activityLevel: UserEntity['activityLevel'];
};
