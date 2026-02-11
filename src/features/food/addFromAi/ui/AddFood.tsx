import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FoodFieldHelpers, FoodFieldLabels } from '@entities/food/meta';

import { Button } from '@shared/ui/controls/Button';
import { Textarea } from '@shared/ui/controls/Textarea';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';
import { Paragraph } from '@shared/ui/typography/Paragraph';

import { useAddFromAiSubmit } from '../model';
import { addFromAiSchema } from '../schema';
import type { AddFromAiFormValues } from '../types';

import type { AddFoodProps } from './AddFood.types';

export const AddFood = ({ date }: AddFoodProps) => {
  const resolver = zodResolver(addFromAiSchema);
  const methods = useForm<AddFromAiFormValues>({ resolver, mode: 'onChange' });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useAddFromAiSubmit(methods, date);

  return (
    <Form<AddFromAiFormValues> methods={methods} onSubmit={onSubmit}>
      <Field<AddFromAiFormValues>
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
