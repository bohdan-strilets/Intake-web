import {
  changeLanguage,
  LANGUAGE,
  useTranslation,
  type Language,
} from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { SelectionItem } from '../SelectionItem';

export const ProfileLanguageSheet = () => {
  const { close } = useModal();
  const { i18n } = useTranslation();

  const language = i18n.language as Language;

  const changeLanguageHandler = (lang: Language) => {
    changeLanguage(lang);
    close();
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
          label={tCommon(`languages.${LANGUAGE.EN}`)}
          selected={language === LANGUAGE.EN}
          onClick={() => changeLanguageHandler(LANGUAGE.EN)}
        />

        <SelectionItem
          label={tCommon(`languages.${LANGUAGE.PL}`)}
          selected={language === LANGUAGE.PL}
          onClick={() => changeLanguageHandler(LANGUAGE.PL)}
        />

        <SelectionItem
          label={tCommon(`languages.${LANGUAGE.UK}`)}
          selected={language === LANGUAGE.UK}
          onClick={() => changeLanguageHandler(LANGUAGE.UK)}
        />
      </Stack>
    </Stack>
  );
};
