import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FoodFieldHelpers, FoodFieldLabels } from '@entities/food';

import { Button } from '@shared/ui/controls/Button';
import { Textarea } from '@shared/ui/controls/Textarea';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { useSubmit } from './model';
import { schema } from './schema';
import type { FormProps, FormValues } from './types';

export const AddFoodForm = ({ date }: FormProps) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useSubmit(methods, date);

  return (
    <Form<FormValues> methods={methods} onSubmit={onSubmit}>
      <Field<FormValues>
        name="text"
        label={FoodFieldLabels.text}
        helperText={FoodFieldHelpers.text}
        required
      >
        <Textarea readOnly={isPending} />
      </Field>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        {isPending ? 'Analyzing...' : 'Add Food'}
      </Button>

      {isPending && (
        <Paragraph size="sm" tone="muted">
          Calculating nutrition...
        </Paragraph>
      )}
    </Form>
  );
};
