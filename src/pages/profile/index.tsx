import { AccountSection } from '@widgets/profile/AccountSection';
import { BodySection } from '@widgets/profile/BodySection';
import { DailyIntake } from '@widgets/profile/DailyIntake/DailyIntake';
import { DangerZone } from '@widgets/profile/DangerZone';
import { Error } from '@widgets/profile/Error';
import { Header } from '@widgets/profile/Header';
import { Loading } from '@widgets/profile/Loading';
import { SettingsSection } from '@widgets/profile/SettingsSection';

import { useProfileDetailsQuery } from '@features/user/profileDetails';

import { useTranslation } from '@shared/i18n';
import { Stack } from '@shared/ui/layout/Stack';

export const ProfilePage = () => {
  const { data, isPending, isError, refetch } = useProfileDetailsQuery();
  const { t } = useTranslation('profile');

  if (isPending) return <Loading />;
  if (isError) return <Error refetch={refetch} />;

  const userProfile = data;

  return (
    <Stack gap="lg">
      <Header title={t('title')} showDropdown />

      <DailyIntake
        recommendedCalories={userProfile.metabolism.recommendedCalories}
        goal={userProfile.goal}
      />

      <AccountSection name={userProfile.name} email={userProfile.email} />

      <BodySection
        sex={userProfile.sex}
        age={userProfile.age}
        dateOfBirth={userProfile.dateOfBirth}
        height={userProfile.height}
        weight={userProfile.weight}
        targetWeight={userProfile.targetWeight}
        goal={userProfile.goal}
        activityLevel={userProfile.activityLevel}
      />

      <SettingsSection settings={userProfile.settings} />

      <DangerZone />
    </Stack>
  );
};
