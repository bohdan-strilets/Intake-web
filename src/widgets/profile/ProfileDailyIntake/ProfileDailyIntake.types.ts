import type { UserEntity } from '@entities/user';

export type ProfileDailyIntakeProps = {
  recommendedCalories: UserEntity['metabolism']['recommendedCalories'];
  goal: UserEntity['goal'];
};
