import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { FoodFieldHelpers, FoodFieldLabels } from '@entities/food/meta';

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
