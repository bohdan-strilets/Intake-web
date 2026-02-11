import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@shared/ui/controls/Button';
import { Textarea } from '@shared/ui/controls/Textarea';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';

import { useAddFromAiSubmit } from '../model';
import { addFromAiSchema } from '../schema';
import type { AddFromAiFormValues } from '../types';

import type { AddFoodProps } from './AddFood.types';

export const AddFood = ({ date }: AddFoodProps) => {
  const resolver = zodResolver(addFromAiSchema);
  const methods = useForm<AddFromAiFormValues>({ resolver });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useAddFromAiSubmit(methods, date);

  return (
    <Form<AddFromAiFormValues> methods={methods} onSubmit={onSubmit}>
      <Field<AddFromAiFormValues>
        name="text"
        label="Food Description"
        helperText="Describe the food you ate (e.g., 'I had a sandwich with turkey and cheese, and a side of salad.')"
        required
      >
        <Textarea />
      </Field>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        Add Food
      </Button>
    </Form>
  );
};
