import { Form, FormButton, FormInput } from '@nx-lms/formik-chakra-react';

export function NxWelcome({ title }: { title: string }) {
  return (
    <Form onSubmit={(e) => console.log(e)} initialValues={{ email: '' }}>
      <FormInput name="email" />
      <FormButton>Submit</FormButton>
    </Form>
  );
}

export default NxWelcome;
