import React from 'react';
import { FormInput, Form } from '@nx-lms/formik-chakra-react';
export default function login() {
  return (
    <div>
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={(e) => console.log(e)}
      >
        <FormInput name="email" />
      </Form>
    </div>
  );
}
