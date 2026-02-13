import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FoodFieldHelpers, FoodFieldLabels } from '@entities/food';

import { Button } from '@shared/ui/controls/Button';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { FormError } from '@shared/ui/form/FormError';

import { useSubmit } from './model';
import { schema } from './schema';
import type { FormProps, FormValues } from './types';

export const EditWeightForm = ({ foodId, date, initialState }: FormProps) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: initialState,
    mode: 'onChange',
  });

  const { isValid, errors } = methods.formState;
  const { onSubmit, isPending } = useSubmit(methods, {
    foodId,
    date,
  });

  return (
    <Form<FormValues> methods={methods} onSubmit={(data) => onSubmit(data)}>
      <Field<FormValues>
        name="weight"
        label={FoodFieldLabels.weight}
        helperText={FoodFieldHelpers.weight}
        valueAsNumber
      >
        <TextInput type="number" step={1} inputMode="numeric" />
      </Field>

      {errors.root && <FormError>{errors.root.message}</FormError>}

      <Button type="submit" disabled={!isValid} loading={isPending} fullWidth>
        Save
      </Button>
    </Form>
  );
};
