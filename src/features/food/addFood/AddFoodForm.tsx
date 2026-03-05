import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslation } from '@shared/i18n';
import { useOnline } from '@shared/lib/online';
import { useSoundStore } from '@shared/lib/sound/soundStore';
import { useHoldToRecord } from '@shared/lib/voice';
import { Button } from '@shared/ui/controls/Button';
import { IconButton } from '@shared/ui/controls/IconButton';
import { InfoTooltip } from '@shared/ui/controls/InfoTooltip';
import { Textarea } from '@shared/ui/controls/Textarea';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';
import { TextLabel } from '@shared/ui/typography/TextLabel';

import {
  actionsRow,
  hintContent,
  hintSection,
  hintSectionExamples,
  hintSectionLabel,
  hintTip,
  hintTitle,
  permissionNote,
} from './AddFoodForm.css';
import { useSubmit } from './model';
import { createSchema } from './schema';
import type { FormProps, FormValues } from './types';

/** Затримка (мс) утримання перед стартом запису — запис не почнеться при короткому кліку */
const VOICE_RECORD_START_DELAY_MS = 300;

/** Контент підказки «Як додавати їжу» — використовує локалізацію */
function AddFoodHintContent() {
  const { t } = useTranslation('food');
  return (
    <div className={hintContent}>
      <p className={hintTitle}>{t('hint.title')}</p>

      <section className={hintSection}>
        <p className={hintSectionLabel}>{t('hint.sectionSimple')}</p>
        <p className={hintSectionExamples}>{t('hint.simpleExamples')}</p>
      </section>

      <section className={hintSection}>
        <p className={hintSectionLabel}>{t('hint.sectionPortion')}</p>
        <p className={hintSectionExamples}>{t('hint.portionExamples')}</p>
      </section>

      <section className={hintSection}>
        <p className={hintSectionLabel}>{t('hint.sectionDish')}</p>
        <p className={hintSectionExamples}>{t('hint.dishExamples')}</p>
      </section>

      <p className={hintTip}>{t('hint.tip')}</p>
    </div>
  );
}

export const AddFoodForm = ({ date, suggestionsSlot }: FormProps) => {
  const isOnline = useOnline();
  const { t: tFood, i18n } = useTranslation('food');

  // Form
  const schema = createSchema(tFood);
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { isValid, errors } = methods.formState;
  const { setValue } = methods;
  const { onSubmit, isPending } = useSubmit(methods, date);
  const submitDisabled = !isValid || isPending || !isOnline;

  // Voice input
  const handleVoiceResult = useCallback(
    (text: string) => {
      setValue('text', text, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    },
    [setValue],
  );

  const { start, stop, isRecording, isSupported, permissionDenied } =
    useHoldToRecord({
      onResult: handleVoiceResult,
      lang: i18n.language,
    });

  const voiceButtonRef = useRef<HTMLButtonElement>(null);
  const releasedRef = useRef(false);
  const removeReleaseListenersRef = useRef<(() => void) | null>(null);
  const pendingStartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const permissionDeniedRef = useRef(permissionDenied);
  permissionDeniedRef.current = permissionDenied;

  // Voice handlers
  const handleVoiceStop = useCallback(() => {
    if (releasedRef.current) return;
    releasedRef.current = true;
    removeReleaseListenersRef.current?.();
    removeReleaseListenersRef.current = null;
    useSoundStore.getState().play('micStop');
    stop();
  }, [stop]);

  const handleVoicePress = useCallback(() => {
    if (permissionDeniedRef.current) return;
    releasedRef.current = false;

    const handleRelease = () => {
      if (pendingStartTimeoutRef.current !== null) {
        clearTimeout(pendingStartTimeoutRef.current);
        pendingStartTimeoutRef.current = null;
        removeReleaseListenersRef.current?.();
        removeReleaseListenersRef.current = null;
        return;
      }
      handleVoiceStop();
    };

    const remove = () => {
      document.removeEventListener('touchend', handleRelease);
      document.removeEventListener('touchcancel', handleRelease);
      document.removeEventListener('mouseup', handleRelease);
      document.removeEventListener('pointerup', handleRelease);
    };

    removeReleaseListenersRef.current = remove;
    document.addEventListener('touchend', handleRelease, { passive: true });
    document.addEventListener('touchcancel', handleRelease, { passive: true });
    document.addEventListener('mouseup', handleRelease);
    document.addEventListener('pointerup', handleRelease);

    pendingStartTimeoutRef.current = setTimeout(() => {
      pendingStartTimeoutRef.current = null;
      removeReleaseListenersRef.current?.();
      removeReleaseListenersRef.current = null;

      useSoundStore.getState().play('micStart');
      start();
      releasedRef.current = false;

      const onRelease = () => handleVoiceStop();
      const removeAfterStart = () => {
        document.removeEventListener('touchend', onRelease);
        document.removeEventListener('touchcancel', onRelease);
        document.removeEventListener('mouseup', onRelease);
        document.removeEventListener('pointerup', onRelease);
      };
      removeReleaseListenersRef.current = removeAfterStart;
      document.addEventListener('touchend', onRelease, { passive: true });
      document.addEventListener('touchcancel', onRelease, { passive: true });
      document.addEventListener('mouseup', onRelease);
      document.addEventListener('pointerup', onRelease);
    }, VOICE_RECORD_START_DELAY_MS);
  }, [start, handleVoiceStop]);

  useEffect(() => {
    const el = voiceButtonRef.current;
    if (!el || !isSupported || permissionDenied) return;
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      handleVoicePress();
    };
    const onTouchEnd = () => {
      if (pendingStartTimeoutRef.current !== null) {
        clearTimeout(pendingStartTimeoutRef.current);
        pendingStartTimeoutRef.current = null;
        removeReleaseListenersRef.current?.();
        removeReleaseListenersRef.current = null;
        return;
      }
      handleVoiceStop();
    };
    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      if (pendingStartTimeoutRef.current !== null) {
        clearTimeout(pendingStartTimeoutRef.current);
        pendingStartTimeoutRef.current = null;
      }
    };
  }, [isSupported, permissionDenied, handleVoicePress, handleVoiceStop]);

  // Prompt suggestions
  const handleSelectPrompt = useCallback(
    (text: string) => {
      setValue('text', text, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    },
    [setValue],
  );

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Stack gap="sm">
        <Field<FormValues>
          name="text"
          labelRow={(id) => (
            <Inline justify="between" align="center">
              <TextLabel htmlFor={id} required>
                {tFood('fields.text.label')}
              </TextLabel>
              <InfoTooltip content={<AddFoodHintContent />} size="md" />
            </Inline>
          )}
          helperText={tFood('fields.text.helper')}
          required
        >
          <Textarea readOnly={isPending} size="lg" />
        </Field>

        <Stack gap="xs">
          <div className={actionsRow}>
            <Button
              type="submit"
              disabled={submitDisabled}
              loading={isPending}
              fullWidth
              size="lg"
            >
              {isPending ? tFood('states.analyzing') : tFood('actions.addFood')}
            </Button>
            {isSupported && (
              <IconButton
                ref={voiceButtonRef}
                icon={isRecording ? 'micStop' : 'mic'}
                variant={isRecording ? 'danger' : 'secondary'}
                size="lg"
                iconSize="lg"
                pulse={isRecording}
                disabled={isPending || permissionDenied}
                aria-pressed={isRecording}
                aria-label={
                  isRecording
                    ? tFood('actions.voiceInputRecording')
                    : tFood('actions.voiceInput')
                }
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (permissionDenied) return;
                  handleVoicePress();
                }}
                onMouseUp={(e) => {
                  e.preventDefault();
                  if (pendingStartTimeoutRef.current !== null) {
                    clearTimeout(pendingStartTimeoutRef.current);
                    pendingStartTimeoutRef.current = null;
                    removeReleaseListenersRef.current?.();
                    removeReleaseListenersRef.current = null;
                    return;
                  }
                  handleVoiceStop();
                }}
              />
            )}
          </div>
          {permissionDenied && (
            <Paragraph size="xs" tone="muted" className={permissionNote}>
              {tFood('voice.microphoneDisabled')}
            </Paragraph>
          )}
        </Stack>

        {suggestionsSlot?.(handleSelectPrompt)}
      </Stack>

      {errors.root && <FormError>{errors.root.message}</FormError>}
    </Form>
  );
};
