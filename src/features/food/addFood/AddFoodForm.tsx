import { useCallback, useEffect, useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { PromptSuggestions } from '@widgets/day/PromptSuggestions';

import { useTranslation } from '@shared/i18n';
import { useOnline } from '@shared/lib/online';
import { useSoundStore } from '@shared/lib/sound/soundStore';
import { useHoldToRecord } from '@shared/lib/voice';
import { Button } from '@shared/ui/controls/Button';
import { IconButton } from '@shared/ui/controls/IconButton';
import { Textarea } from '@shared/ui/controls/Textarea';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Inline } from '@shared/ui/layout/Inline';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { useSubmit } from './model';
import { createSchema } from './schema';
import type { FormProps, FormValues } from './types';

/** Затримка (мс) утримання перед стартом запису — запис не почнеться при короткому кліку */
const VOICE_RECORD_START_DELAY_MS = 300;

export const AddFoodForm = ({ date }: FormProps) => {
  const isOnline = useOnline();
  const { t: tFood, i18n } = useTranslation('food');

  const schema = createSchema(tFood);
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { isValid, errors } = methods.formState;
  const { setValue } = methods;
  const { onSubmit, isPending } = useSubmit(methods, date);

  const submitDisabled = !isValid || isPending || !isOnline;

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

  const { start, stop, isRecording, isSupported, permissionDenied } = useHoldToRecord({
    onResult: handleVoiceResult,
    lang: i18n.language,
  });

  const voiceButtonRef = useRef<HTMLButtonElement>(null);
  const releasedRef = useRef(false);
  const removeReleaseListenersRef = useRef<(() => void) | null>(null);
  const pendingStartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const permissionDeniedRef = useRef(permissionDenied);
  permissionDeniedRef.current = permissionDenied;

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
          label={tFood('fields.text.label')}
          helperText={tFood('fields.text.helper')}
          required
        >
          <Textarea readOnly={isPending} size="lg" />
        </Field>

        <PromptSuggestions onSelect={handleSelectPrompt} />
      </Stack>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Stack gap="xs">
        <Inline gap="sm" align="stretch" style={{ alignItems: 'stretch' }}>
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
        </Inline>
        {permissionDenied && (
          <Paragraph size="xs" tone="muted" style={{ textAlign: 'right' }}>
            {tFood('voice.microphoneDisabled')}
          </Paragraph>
        )}
      </Stack>
    </Form>
  );
};
