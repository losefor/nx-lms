import { chakra, Box, Flex, useColorModeValue } from '@chakra-ui/react';

export const StudentCard = () => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="sm"
        mx="auto"
      >
        <Box
          bg="gray.300"
          h={64}
          w="full"
          rounded="lg"
          shadow="md"
          bgSize="cover"
          bgPos="center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
          }}
        ></Box>

        <Box
          w={{ base: 56, md: 64 }}
          bg={useColorModeValue('white', 'gray.800')}
          mt={-10}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <chakra.h3
            py={2}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color={useColorModeValue('gray.800', 'white')}
          >
            محمد باقر
          </chakra.h3>

          <Flex
            alignItems="center"
            justifyContent="space-around"
            py={2}
            px={3}
            bg={useColorModeValue('gray.200', 'gray.700')}
          >
            <chakra.button
              bg="blue.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="md"
              textTransform="uppercase"
              _hover={{
                bg: useColorModeValue('blue.700', 'blue.600'),
              }}
              _focus={{
                bg: useColorModeValue('blue.700', 'blue.600'),
                outline: 'none',
              }}
            >
              عرض الملف الشخصي
            </chakra.button>
            <chakra.button
              bg="green.600"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              width="40%"
              rounded="md"
              textTransform="uppercase"
              _hover={{
                bg: useColorModeValue('green.700', 'gray.600'),
              }}
              _focus={{
                bg: useColorModeValue('green.700', 'gray.600'),
                outline: 'none',
              }}
            >
              تسجيل حضور
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
