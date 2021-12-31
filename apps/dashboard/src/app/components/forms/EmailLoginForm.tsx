import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Form, FormButton, FormInput } from '@nx-lms/formik-chakra-react';

export function EmailLoginForm() {
  return (
    <Form initialValues={{ email: '' }} onSubmit={(e) => console.log(e)}>
      <Stack spacing={6}>
        <FormInput
          placeholder="example@gmail.com"
          label="الايميل"
          dir="ltr"
          name="email"
        />
        <FormButton>تسجيل الدخول</FormButton>
      </Stack>
    </Form>
  );
}
