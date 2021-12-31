import { Form, FormInput, FormButton } from '@nx-lms/formik-chakra-react';

export function Index() {
  return (
    <Form onSubmit={(e) => console.log(e)} initialValues={{ email: '' }}>
      <FormInput name="email" />
      <FormButton>Submit</FormButton>
    </Form>
  );
}

export default Index;
