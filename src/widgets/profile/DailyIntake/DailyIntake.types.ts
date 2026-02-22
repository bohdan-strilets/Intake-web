import type { UserEntity } from '@entities/user';

export type DailyIntakeProps = {
  recommendedCalories: UserEntity['metabolism']['recommendedCalories'];
  goal: UserEntity['goal'];
};
