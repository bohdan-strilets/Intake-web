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

import { useSubmit } from './model';
import { createSchema } from './schema';
import type { FormProps, FormValues } from './types';

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

  const { start, stop, isRecording, isSupported } = useHoldToRecord({
    onResult: handleVoiceResult,
    lang: i18n.language,
  });

  const voiceButtonRef = useRef<HTMLButtonElement>(null);
  const releasedRef = useRef(false);

  const handleVoiceStart = useCallback(() => {
    useSoundStore.getState().play('micStart');
    start();
    releasedRef.current = false;

    const onRelease = () => {
      if (releasedRef.current) return;
      releasedRef.current = true;
      useSoundStore.getState().play('micStop');
      stop();
    };

    document.addEventListener('touchend', onRelease, { passive: true, once: true });
    document.addEventListener('mouseup', onRelease, { once: true });
  }, [start, stop]);

  useEffect(() => {
    const el = voiceButtonRef.current;
    if (!el || !isSupported) return;
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      handleVoiceStart();
    };
    el.addEventListener('touchstart', onTouchStart, { passive: false });
    return () => el.removeEventListener('touchstart', onTouchStart);
  }, [isSupported, handleVoiceStart]);

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
            disabled={isPending}
            aria-pressed={isRecording}
            aria-label={
              isRecording
                ? tFood('actions.voiceInputRecording')
                : tFood('actions.voiceInput')
            }
            onMouseDown={(e) => {
              e.preventDefault();
              handleVoiceStart();
            }}
          />
        )}
      </Inline>
    </Form>
  );
};
