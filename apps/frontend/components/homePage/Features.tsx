import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { HeadingWithDivider } from '@nx-lms/chakra-hoc';
import { FiBook, FiDollarSign, FiUser, FiUsers } from 'react-icons/fi';

export default function Features() {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={'teal.500'}
            color="white"
          >
            <Icon
              as={props.icon}
              boxSize={6}
              viewBox="0 0 24 24"
              aria-hidden="true"
            ></Icon>
          </Flex>
        </Flex>
        <Box ms={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={'gray.900'}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue('gray.500', 'gray.400')}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Box py={12} bg={useColorModeValue('white', 'gray.800')} rounded="xl">
      <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
        <Box textAlign={{ lg: 'center' }}>
          <HeadingWithDivider rightDivider leftDivider>
            طريقة افضل لاداره جامعتك
          </HeadingWithDivider>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: 'auto' }}
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            مميزات لن تجدها في اي منصه اخرى مع مميزات تسهل لك من اداره مكتبتك
            الخاصه
          </chakra.p>
        </Box>

        <Box mt={10}>
          <Stack
            spacing={{ base: 10, md: 0 }}
            display={{ md: 'grid' }}
            gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
            gridColumnGap={{ md: 8 }}
            gridRowGap={{ md: 10 }}
          >
            <Feature title="نظام اداره الطلاب" icon={FiUser}>
              قم باداره طلابك مع داشبورد متميزه وسهلة جداو تباع نشاطاتهم اول
              باول
            </Feature>

            <Feature title="نظام اداره الاساتذه" icon={FiUsers}>
              اداره الاساتذه وتحكم بصلاحيات دخولهم ونشاطاتهم على المنصة وتفاعلهم
              مع الطلاب
            </Feature>

            <Feature title="نظام اداره الاطاريح" icon={FiBook}>
              يمكنك من رفع الاطاريح الخاصة بجامعتك ونشرها
            </Feature>

            <Feature title="نظام اداره المدفوعات" icon={FiDollarSign}>
              تمكن من بيع الكتب من خلال واجهة المتسخدم السهلة وتابع حالات
              الطلبات اول باول
            </Feature>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
