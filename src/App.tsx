import { useForm } from 'react-hook-form';

import { Button } from '@shared/ui/controls/Button';
import { Textarea } from '@shared/ui/controls/Textarea';
import { TextInput } from '@shared/ui/controls/TextInput';
import { Field } from '@shared/ui/form/Field';
import { Form } from '@shared/ui/form/Form';
import { Card } from '@shared/ui/layout/Card';
import { Stack } from '@shared/ui/layout/Stack';
import { Paragraph } from '@shared/ui/typography/Paragraph';

type LoginFormValues = {
  email: string;
  password: string;
  textarea: string;
};

const App = () => {
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      textarea: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('submit', data);
  };

  return (
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

        <Field<LoginFormValues>
          name="textarea"
          label="Textarea"
          helperText="Enter your text here"
          required
        >
          <Textarea size="lg" />
        </Field>

        <Button type="submit">Log in</Button>
      </Form>

      <Card>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate
          temporibus? Nulla eos nesciunt tenetur quod mollitia quas iste ipsam fugiat alias culpa!
          Dolore doloremque qui fuga asperiores, ratione officia? Harum ad animi doloremque! Nam,
          vero? Minima, consectetur error. Reprehenderit delectus, atque vitae ab voluptas eum
          minima illo eius in laborum perspiciatis magni, placeat voluptate, aliquam quidem
          consequatur maxime dolorem ad aut soluta. Eius tempora quia quasi ratione nesciunt autem,
          labore magni reiciendis explicabo maiores quae recusandae rem totam quisquam doloremque,
          ex dolorum nobis. Minus nemo similique, commodi natus a asperiores voluptatem tempora
          dicta, culpa, voluptatibus rem quasi! Pariatur vitae animi dolorum optio iste at,
          laboriosam voluptas obcaecati iusto facilis. Nulla autem hic dolor omnis, eligendi, optio
          perferendis ipsum dolorem asperiores vitae ratione veniam ex laboriosam tenetur distinctio
          odit porro labore error culpa facere ipsam voluptatibus. Consectetur sequi animi,
          praesentium adipisci quia obcaecati quidem nisi hic, architecto et, blanditiis commodi!
        </Paragraph>
      </Card>
    </Stack>
  );
};

export default App;
