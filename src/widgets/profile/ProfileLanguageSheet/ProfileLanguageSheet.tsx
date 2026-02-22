import { useUpdateSettingsMutation } from '@features/user/updateSettings';

import { LANGUAGE, type Language } from '@entities/user';

import { changeLanguage, useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { notify } from '@shared/lib/notify';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { SelectionItem } from '../SelectionItem';

import type { ProfileLanguageSheetProps } from './ProfileLanguageSheetProps';

export const ProfileLanguageSheet = ({
  language,
}: ProfileLanguageSheetProps) => {
  const { close } = useModal();

  const { mutateAsync: updateSettings, isPending } =
    useUpdateSettingsMutation();

  const changeLanguageHandler = async (lang: Language) => {
    if (lang === language || isPending) return;

    const previousLanguage = language;

    try {
      await changeLanguage(lang);
      await updateSettings({ language: lang });
      close();
    } catch {
      await changeLanguage(previousLanguage);
      notify.error(tCommon('errors.generic'));
    }
  };

  const { t: tCommon } = useTranslation('common');
  const { t: tProfile } = useTranslation('profile');

  return (
    <Stack gap="2xl">
      <Paragraph weight="medium">
        {tProfile('actions.chooseLanguage')}
      </Paragraph>

      <Stack gap="xl">
        <SelectionItem
          label={tCommon(`languages.${LANGUAGE.English}`)}
          selected={language === LANGUAGE.English}
          onClick={() => changeLanguageHandler(LANGUAGE.English)}
          loading={isPending}
        />

        <SelectionItem
          label={tCommon(`languages.${LANGUAGE.Polish}`)}
          selected={language === LANGUAGE.Polish}
          onClick={() => changeLanguageHandler(LANGUAGE.Polish)}
          loading={isPending}
        />

        <SelectionItem
          label={tCommon(`languages.${LANGUAGE.Ukrainian}`)}
          selected={language === LANGUAGE.Ukrainian}
          onClick={() => changeLanguageHandler(LANGUAGE.Ukrainian)}
          loading={isPending}
        />
      </Stack>
    </Stack>
  );
};
