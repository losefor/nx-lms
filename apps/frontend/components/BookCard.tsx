import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  HStack,
  Button,
} from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
  offerType: string;
  type: string;
}

export const BookCard = (props: Props) => {
  return (
    <Flex
      bg={useColorModeValue('#F9FAFB', 'gray.600')}
      px={50}
      py={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="sm"
        borderColor={'gray.100'}
        borderWidth={'thin'}
        bg={useColorModeValue('white', 'gray.800')}
        width={'full'}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Mar 10, 2019
          </chakra.span>
          <HStack>
            <Link
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{ bg: 'gray.500' }}
            >
              {props.type}
            </Link>
            <Button
              px={3}
              py={1}
              size={"sm"}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{ bg: 'gray.500' }}
            >
              {props.offerType}
            </Button>
          </HStack>
        </Flex>

        <Box mt={2}>
          <Link
            fontSize="2xl"
            color={useColorModeValue('gray.700', 'white')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('gray.600', 'gray.200'),
              textDecor: 'underline',
            }}
          >
            {props.title}
          </Link>
          <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
            {props.description}
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
};
