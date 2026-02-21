import {
  changeLanguage,
  LANGUAGE,
  languageLabelMap,
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

  return (
    <Stack gap="2xl">
      <Paragraph weight="medium">Choose Language</Paragraph>

      <Stack gap="xl">
        <SelectionItem
          label={languageLabelMap[LANGUAGE.EN]}
          selected={language === LANGUAGE.EN}
          onClick={() => changeLanguageHandler(LANGUAGE.EN)}
        />

        <SelectionItem
          label={languageLabelMap[LANGUAGE.PL]}
          selected={language === LANGUAGE.PL}
          onClick={() => changeLanguageHandler(LANGUAGE.PL)}
        />

        <SelectionItem
          label={languageLabelMap[LANGUAGE.UK]}
          selected={language === LANGUAGE.UK}
          onClick={() => changeLanguageHandler(LANGUAGE.UK)}
        />
      </Stack>
    </Stack>
  );
};
