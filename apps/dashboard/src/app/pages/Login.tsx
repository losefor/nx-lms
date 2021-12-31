import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { EmailLoginForm } from '../components/forms/EmailLoginForm';
import { PhoneNumberLoginForm } from '../components/forms/PhoneNumberLoginForm';
import * as authApi from '../api/auth';
import * as tokenStorage from '../storage/token';
import { colors } from '../config/colors';

export default function Login() {
  const toast = useToast();
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState<'SMS' | 'EMAIL'>('SMS');

  const loginHandler = async (val: any) => {
    const response = await authApi.login(val);
    const data = response.data as any;
    if (!response.ok) {
      return toast({
        title: 'حدث خطا ما',
        description: 'يرجى التاكد من المعلومات التي ادخلتها',
        status: 'error',
      });
    }

    tokenStorage.setToken(data.tokens.accessToken);
    toast({
      title: 'تم تسجيل الدخول بنجاح',
      status: 'success',
    });

    return setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>تسجيل الدخول</Heading>
          <Text fontSize={'lg'} color={'gray.600'} textAlign={'center'}>
            منصة اداره المكتبات الخاصه بالجامعات العراقية
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={'6'}>
            <ButtonGroup
              isAttached
              variant={'outline'}
              dir="ltr"
              width={'full'}
            >
              <Button
                bg={loginType === 'EMAIL' ? colors.primary : ''}
                color={loginType === 'EMAIL' ? 'white' : ''}
                borderColor={loginType === 'EMAIL' ? colors.primary : 'inherit'}
                width={'full'}
                onClick={() => setLoginType('EMAIL')}
                _hover={{
                  bg: loginType === 'EMAIL' ? colors.primaryDark : 'inherit',
                }}
              >
                باستخدام الايميل
              </Button>
              <Button
                bg={loginType === 'SMS' ? colors.primary : ''}
                color={loginType === 'SMS' ? 'white' : ''}
                borderColor={loginType === 'SMS' ? colors.primary : 'inherit'}
                width={'full'}
                onClick={() => setLoginType('SMS')}
                _hover={{
                  bg: loginType === 'SMS' ? colors.primaryDark : 'inherit',
                }}
              >
                باستخدام الهاتف
              </Button>
            </ButtonGroup>
            {loginType === 'SMS' ? (
              <PhoneNumberLoginForm onSubmit={loginHandler} />
            ) : (
              <EmailLoginForm />
            )}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
