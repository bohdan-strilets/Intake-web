import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { PromptSuggestions } from '@widgets/day/PromptSuggestions';

import { useTranslation } from '@shared/i18n';
import { useOnline } from '@shared/lib/online';
import { Button } from '@shared/ui/controls/Button';
import { Textarea } from '@shared/ui/controls/Textarea';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Stack } from '@shared/ui/layout/Stack';

import { useSubmit } from './model';
import { createSchema } from './schema';
import type { FormProps, FormValues } from './types';

export const AddFoodForm = ({ date }: FormProps) => {
  const isOnline = useOnline();
  const { t: tFood } = useTranslation('food');

  const schema = createSchema(tFood);
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { isValid, errors } = methods.formState;
  const { setValue } = methods;
  const { onSubmit, isPending } = useSubmit(methods, date);

  const submitDisabled = !isValid || isPending || !isOnline;

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

      <Button
        type="submit"
        disabled={submitDisabled}
        loading={isPending}
        fullWidth
        size="xl"
      >
        {isPending ? tFood('states.analyzing') : tFood('actions.addFood')}
      </Button>
    </Form>
  );
};
