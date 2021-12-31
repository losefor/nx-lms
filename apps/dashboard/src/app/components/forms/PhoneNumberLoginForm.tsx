import { Stack } from '@chakra-ui/react';
import React from 'react';
import {
  Form,
  FormButton,
  FormPhoneNumberInput,
} from '@nx-lms/formik-chakra-react';

interface Props {
  onSubmit: (val: any) => void;
}

export function PhoneNumberLoginForm({ onSubmit }: Props) {
  const initialValues = { phoneNumber: '' };

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      <Stack spacing={6}>
        <FormPhoneNumberInput label="رقم الهاتف" name="phoneNumber" />
        <FormButton>تسجيل الدخول</FormButton>
      </Stack>
    </Form>
  );
}
