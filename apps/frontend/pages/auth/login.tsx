import React from 'react';
import {
  FormInput,
  Form,
  FormPasswordInput,
  FormButton,
} from '@nx-lms/formik-chakra-react';
import { Flex, Heading, VStack } from '@chakra-ui/react';
export default function login() {
  return (
    <Flex
      h={'calc(100vh - 65px)'}
      align={'center'}
      justify={'center'}
      mx={'auto'}
      maxW={'sm'}
      direction={'column'}
    >
      <Heading color={'gray.600'} fontFamily={'Cairo'}>
        تسجيل الدخول
      </Heading>
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={(e) => console.log(e)}
      >
        <VStack mt={8} spacing={6}>
          <VStack spacing={2}>
            <FormInput name="email" label="الايميل" />
            <FormPasswordInput label="الرمز السري" />
          </VStack>
          <FormButton mt={2} width={'full'}>
            تسجيل الدخول
          </FormButton>
        </VStack>
      </Form>
    </Flex>
  );
}
