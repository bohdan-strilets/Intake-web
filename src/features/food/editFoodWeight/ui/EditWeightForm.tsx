import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@shared/ui/controls/Button';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';

import { useEditWeightSubmit } from '../model';
import { editWeightSchema } from '../schema';
import type { EditWeightFormProps, EditWeightFormValues } from '../types';

export const EditWeightForm = ({
  foodId,
  date,
  initialState,
}: EditWeightFormProps) => {
  const resolver = zodResolver(editWeightSchema);
  const methods = useForm<EditWeightFormValues>({
    resolver,
    defaultValues: initialState,
    mode: 'onChange',
  });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useEditWeightSubmit(methods, {
    foodId,
    date,
  });

  return (
    <Form<EditWeightFormValues>
      methods={methods}
      onSubmit={(data) => onSubmit(data)}
    >
      <Field<EditWeightFormValues>
        name="weight"
        label="Food Weight (grams)"
        helperText="Enter the weight of the food in grams. This will help us calculate the nutritional information accurately."
        valueAsNumber
      >
        <TextInput type="number" step={1} inputMode="numeric" />
      </Field>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        Edit Weight
      </Button>
    </Form>
  );
};
