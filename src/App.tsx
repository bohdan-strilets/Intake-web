import { useForm } from 'react-hook-form';

import { Button } from '@shared/ui/controls/Button';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { Container } from '@shared/ui/layout/Container';
import { Stack } from '@shared/ui/layout/Stack';

type LoginFormValues = {
  email: string;
  password: string;
};

const App = () => {
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('submit', data);
  };

  return (
    <Container>
      <Stack gap="lg">
        <Form<LoginFormValues> methods={methods} onSubmit={onSubmit}>
          <Field<LoginFormValues>
            name="email"
            label="Email"
            helperText="We will never share your email"
            required
          >
            <TextInput type="email" placeholder="email@example.com" />
          </Field>

          <Field<LoginFormValues>
            name="password"
            label="Password"
            helperText="Password must be longer than 8 characters"
            required
          >
            <TextInput type="password" />
          </Field>

          <Button type="submit">Log in</Button>
        </Form>
      </Stack>
    </Container>
  );
};

export default App;
