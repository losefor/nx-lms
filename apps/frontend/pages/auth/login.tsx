import React from 'react';
import {
  FormInput,
  Form,
  FormPasswordInput,
  FormButton,
} from '@nx-lms/formik-chakra-react';
import { Flex, VStack } from '@chakra-ui/react';
export default function login() {
  return (
    <div>
      <Flex
        height={'100vh'}
        align={'center'}
        justify={'center'}
        mx={'auto'}
        maxW={'sm'}
        direction={'column'}
      >
        <Form
          initialValues={{ email: '', password: '' }}
          onSubmit={(e) => console.log(e)}
        >
          <VStack spacing={2} >
            <FormInput name="email" label="الايميل" />
            <FormPasswordInput label="الرمز السري" />
            <FormButton mt={2} width={'full'}>
              تسجيل الدخول
            </FormButton>
          </VStack>
        </Form>
      </Flex>
    </div>
  );
}
