import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { useUpdateSettingsMutation } from '@features/user/updateSettings';

import { useTranslation } from '@shared/i18n';
import { useModal } from '@shared/lib/modal';
import { usePWAInstall } from '@shared/lib/pwa';
import { useSound } from '@shared/lib/sound';
import { fadeTransition, fadeUp } from '@shared/motion';
import { Range } from '@shared/ui/controls/Range';
import { Switch } from '@shared/ui/controls/Switch';
import { Card } from '@shared/ui/layout/Card';

import { InfoRow } from '../InfoRow';
import { LanguageSheet } from '../LanguageSheet';
import { SectionTitle } from '../SectionTitle';
import { ThemeSheet } from '../ThemeSheet';

import type { SettingsSectionProps } from './SettingsSection.types';

export const SettingsSection = ({ settings }: SettingsSectionProps) => {
  const { canInstall, install } = usePWAInstall();
  const { theme, language, sound, volume } = settings;

  const [localVolume, setLocalVolume] = useState(volume);

  const latestVolumeRef = useRef(volume);

  useEffect(() => {
    setLocalVolume(volume);
    latestVolumeRef.current = volume;
  }, [volume]);

  const { open } = useModal();
  const { setEnabled, setVolume } = useSound();

  useEffect(() => {
    if (volume !== undefined) {
      setVolume(volume);
    }
  }, [volume, setVolume]);

  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const handleTheme = () => {
    open(<ThemeSheet theme={theme} />);
  };

  const handleLanguage = () => {
    open(<LanguageSheet language={language} />);
  };

  const { mutateAsync: updateSettings, isPending } =
    useUpdateSettingsMutation();

  const soundOffTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (soundOffTimeoutRef.current) {
        clearTimeout(soundOffTimeoutRef.current);
      }
    };
  }, []);

  const handleSounds = async (enabled: boolean) => {
    setEnabled(enabled);
    if (enabled) {
      setVolume(25);
      await updateSettings({ sound: true, volume: 25 });
    } else {
      await updateSettings({ sound: false });
    }
  };

  const handleVolume = (value: number) => {
    setLocalVolume(value);
    latestVolumeRef.current = value;

    if (soundOffTimeoutRef.current) {
      clearTimeout(soundOffTimeoutRef.current);
      soundOffTimeoutRef.current = null;
    }

    setVolume(value);

    if (value === 0) {
      soundOffTimeoutRef.current = setTimeout(() => {
        soundOffTimeoutRef.current = null;
        setEnabled(false);
      }, 500);
    } else {
      setEnabled(true);
    }
  };

  const handleVolumeCommit = () => {
    const v = latestVolumeRef.current;
    updateSettings({ volume: v, sound: v > 0 });
  };

  return (
    <Card shadow="sm" gap="lg">
      <SectionTitle title={tProfile('sections.settings')} />

      {canInstall && (
        <InfoRow
          label={tProfile('actions.installApp')}
          value={null}
          onClick={() => void install()}
        />
      )}

      <InfoRow
        label={tProfile('fields.theme')}
        value={tCommon(`themes.${theme}`)}
        onClick={handleTheme}
      />

      <InfoRow
        label={tProfile('fields.language')}
        value={tCommon(`languages.${language}`)}
        onClick={handleLanguage}
      />

      <InfoRow
        label={tProfile('fields.sounds')}
        value={
          <Switch
            checked={sound}
            onCheckedChange={handleSounds}
            disabled={isPending}
          />
        }
      />
      <AnimatePresence initial={false}>
        {sound && (
          <motion.div
            key="volume"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={fadeTransition}
          >
            <InfoRow
              label={tProfile('fields.volume')}
              value={
                <Range
                  min={0}
                  max={100}
                  step={1}
                  value={localVolume}
                  onValueChange={handleVolume}
                  onMouseUp={handleVolumeCommit}
                  onTouchEnd={handleVolumeCommit}
                  onBlur={handleVolumeCommit}
                  disabled={isPending}
                />
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
