import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useTranslation } from '@shared/i18n';
import { Button } from '@shared/ui/controls/Button';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';

import { useSubmit } from './model';
import { createSchema } from './schema';
import type { FormProps, FormValues } from './types';

export const EditWeightForm = ({ dayId, date, initialState }: FormProps) => {
  const { t: tDay } = useTranslation('day');
  const { t: tCommon } = useTranslation('common');

  const schema = createSchema(tDay);
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: initialState,
    mode: 'onChange',
  });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useSubmit(methods, { dayId, date });

  return (
    <Form<FormValues> methods={methods} onSubmit={(data) => onSubmit(data)}>
      <Field<FormValues>
        name="weight"
        label={tDay('fields.weight.label')}
        helperText={tDay('fields.weight.helper')}
        valueAsNumber
      >
        <TextInput type="number" inputMode="decimal" />
      </Field>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        {tCommon('actions.save')}
      </Button>
    </Form>
  );
};
