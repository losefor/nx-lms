import {
  Avatar,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function index() {
  return (
    <Container maxW={'5xl'} mt={2}>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        <Flex
          px={4}
          py={4}
          boxShadow={'sm'}
          borderRadius={'lg'}
          borderWidth={1}
          borderColor={'gray.100'}
        >
          <HStack justify={'space-between'} width={'full'}>
            <VStack align={'start'}>
              <Heading fontFamily={"Cairo"} textAlign={'start'} size={'md'}>
                الجامعة التكنلوجية
              </Heading>
              <Text>الجامعه رقم واحد في العراق متميزه في الاداء</Text>
            </VStack>
            <Avatar size={'xl'} objectFit={'contain'} src="/uot2.png" />
          </HStack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
