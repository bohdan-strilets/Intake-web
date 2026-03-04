import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

import { useProfileDetailsQuery } from '@features/user/profileDetails';
import { useRegisterPushSubscriptionMutation } from '@features/user/pushSubscription';
import { useUpdateRemindersMutation } from '@features/user/updateReminders';

import { DEFAULT_REMINDERS } from '@entities/user';

import { useTranslation } from '@shared/i18n';
import { notify } from '@shared/lib/notify';
import { subscribeToPush } from '@shared/lib/push';
import { fadeTransition, fadeUp } from '@shared/motion';
import { Select } from '@shared/ui/controls/Select';
import { Switch } from '@shared/ui/controls/Switch';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import type { RemindersSheetProps } from './RemindersSheet.types';
import {
  COMMON_TIMEZONES,
  REMINDER_HOUR_OPTIONS,
  REMINDER_MINUTE_OPTIONS,
} from './timezones';

async function safeUnsubscribe(): Promise<void> {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if (subscription) await subscription.unsubscribe();
  } catch {
    // ignore
  }
}

export const RemindersSheet = ({ reminders: initial }: RemindersSheetProps) => {
  const { t: tProfile } = useTranslation('profile');
  const { t: tCommon } = useTranslation('common');

  const { data: profile } = useProfileDetailsQuery();
  const fromQuery = profile?.settings?.reminders;
  const source = fromQuery ?? initial;
  const reminders = {
    ...DEFAULT_REMINDERS,
    ...source,
    channels: { ...DEFAULT_REMINDERS.channels, ...source?.channels },
  };

  const { mutateAsync: updateReminders, isPending } =
    useUpdateRemindersMutation();
  const { mutateAsync: registerPush } = useRegisterPushSubscriptionMutation();
  const [isPushInProgress, setPushInProgress] = useState(false);

  const getErrorMessage = (err: unknown): string =>
    err instanceof Error ? err.message : tCommon('errors.generic');

  const handleEnabled = async (enabled: boolean) => {
    try {
      await updateReminders({
        enabled,
        ...(enabled && !reminders.channels?.email && !reminders.channels?.push
          ? { channels: { email: true } }
          : {}),
      });
    } catch {
      notify.error(tCommon('errors.generic'));
    }
  };

  const handleTimeChange = async (hour: string, minute: string) => {
    const time = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    try {
      await updateReminders({ time });
    } catch {
      notify.error(tCommon('errors.generic'));
    }
  };

  const handleTimezone = async (value: string | number | null) => {
    if (value === null || typeof value !== 'string') return;
    try {
      await updateReminders({ timezone: value });
    } catch {
      notify.error(tCommon('errors.generic'));
    }
  };

  const handleEmailChannel = async (email: boolean) => {
    try {
      const nextPush = reminders.channels?.push ?? false;
      const bothOff = !email && !nextPush;
      await updateReminders({
        ...(bothOff ? { enabled: false } : {}),
        channels: {
          email,
          push: nextPush,
        },
      });
    } catch {
      notify.error(tCommon('errors.generic'));
    }
  };

  const handlePushChannel = async (nextPush: boolean) => {
    if (nextPush) {
      const permissionPromise =
        typeof Notification !== 'undefined'
          ? Notification.requestPermission()
          : undefined;
      let dto;
      try {
        dto = await Promise.race([
          subscribeToPush(permissionPromise),
          new Promise<never>((_, reject) =>
            setTimeout(
              () => reject(new Error('Push subscription timed out')),
              45_000,
            ),
          ),
        ]);
      } catch (err) {
        const msg = getErrorMessage(err);
        if (
          err instanceof Error &&
          err.message.includes('Service worker not ready')
        ) {
          toast.error(msg, {
            action: {
              label: 'Retry',
              onClick: () => handlePushChannel(true),
            },
          });
        } else {
          notify.error(msg);
        }
        return;
      }

      setPushInProgress(true);
      try {
        await registerPush(dto);
        await updateReminders({
          enabled: true,
          channels: {
            push: true,
            email: reminders.channels?.email ?? false,
          },
        });
      } catch (err) {
        await safeUnsubscribe();
        notify.error(getErrorMessage(err));
      } finally {
        setPushInProgress(false);
      }
      return;
    }

    try {
      await safeUnsubscribe();
      const nextEmail = reminders.channels?.email ?? false;
      const shouldDisableAll = !nextEmail;
      await updateReminders({
        ...(shouldDisableAll ? { enabled: false } : {}),
        channels: {
          push: false,
          email: nextEmail,
        },
      });
    } catch (err) {
      notify.error(getErrorMessage(err));
    }
  };

  const timezoneOptions = (() => {
    const base = COMMON_TIMEZONES.map((tz) => ({
      value: tz,
      label: tz.replace(/_/g, ' '),
    }));
    const current = reminders.timezone;
    if (
      current &&
      !COMMON_TIMEZONES.includes(current as (typeof COMMON_TIMEZONES)[number])
    ) {
      return [{ value: current, label: current.replace(/_/g, ' ') }, ...base];
    }
    return base;
  })();

  const [timeHour, timeMinute] = (() => {
    const raw =
      typeof reminders.time === 'string'
        ? reminders.time
        : reminders.time != null
          ? String(reminders.time)
          : (DEFAULT_REMINDERS.time ?? '20:00');
    const [h, m] = raw.split(':');
    const parsedHour = /^\d{1,2}$/.test(h) ? parseInt(h, 10) : 0;
    const hour = String(parsedHour % 24).padStart(2, '0');
    const validMinutes = ['00', '10', '20', '30', '40', '50'];
    const minute = validMinutes.includes(m) ? m : '00';
    return [hour, minute];
  })();

  const timezoneValue =
    typeof reminders.timezone === 'string'
      ? reminders.timezone
      : reminders.timezone != null
        ? String(reminders.timezone)
        : (DEFAULT_REMINDERS.timezone ?? 'Europe/Kyiv');

  const stopPropagation = (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      role="presentation"
      style={{ pointerEvents: 'auto' }}
      onClick={stopPropagation}
      onPointerDown={stopPropagation}
    >
      <Stack gap="2xl">
        <Paragraph weight="medium">{tProfile('reminders.title')}</Paragraph>

        <Inline justify="between" align="center">
          <Paragraph>{tProfile('reminders.enabled')}</Paragraph>
          <Switch
            checked={reminders.enabled ?? false}
            onCheckedChange={handleEnabled}
            disabled={isPending}
          />
        </Inline>

        <AnimatePresence initial={false}>
          {reminders.enabled && (
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={fadeTransition}
            >
              <Stack gap="xl">
                <Stack gap="xs">
                  <Paragraph weight="medium" tone="secondary" size="sm">
                    {tProfile('reminders.time')}
                  </Paragraph>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'stretch',
                      gap: 'var(--spacing-sm, 8px)',
                    }}
                  >
                    <div style={{ flex: '1 1 50%', minWidth: 0 }}>
                      <Select
                        value={timeHour}
                        options={REMINDER_HOUR_OPTIONS}
                        onChange={(hour) =>
                          handleTimeChange(String(hour ?? timeHour), timeMinute)
                        }
                        disabled={isPending}
                      />
                    </div>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 2px',
                      }}
                      aria-hidden
                    >
                      :
                    </span>
                    <div style={{ flex: '1 1 50%', minWidth: 0 }}>
                      <Select
                        value={timeMinute}
                        options={REMINDER_MINUTE_OPTIONS}
                        onChange={(minute) =>
                          handleTimeChange(
                            timeHour,
                            String(minute ?? timeMinute),
                          )
                        }
                        disabled={isPending}
                      />
                    </div>
                  </div>
                </Stack>

                <Stack gap="xs">
                  <Paragraph weight="medium" tone="secondary" size="sm">
                    {tProfile('reminders.timezone')}
                  </Paragraph>
                  <Select
                    value={timezoneValue}
                    options={timezoneOptions}
                    onChange={handleTimezone}
                    disabled={isPending}
                  />
                </Stack>

                <Stack gap="md">
                  <Paragraph weight="medium" tone="secondary" size="sm">
                    {tProfile('reminders.channels')}
                  </Paragraph>
                  <Inline justify="between" align="center">
                    <Paragraph>{tProfile('reminders.channelEmail')}</Paragraph>
                    <Switch
                      checked={reminders.channels?.email ?? false}
                      onCheckedChange={handleEmailChannel}
                      disabled={isPending}
                    />
                  </Inline>
                  <Inline justify="between" align="center">
                    <Paragraph>{tProfile('reminders.channelPush')}</Paragraph>
                    <Switch
                      checked={reminders.channels?.push ?? false}
                      onCheckedChange={handlePushChannel}
                      disabled={isPending || isPushInProgress}
                    />
                  </Inline>
                </Stack>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
    </div>
  );
};
