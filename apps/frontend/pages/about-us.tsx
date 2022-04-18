import {
  Container,
  HStack,
  Text,
  VStack,
  Avatar,
  Divider,
  Box,
} from '@chakra-ui/react';
import React from 'react';

export default function AboutUS() {
  const User = (props: any) => {
    return (
      <HStack py={2} justify={'space-between'}>
        <VStack align={'flex-start'}>
          <Text fontWeight={'bold'}>{props.name}</Text>
          <Text>{props.caption}</Text>
        </VStack>
        <Avatar size={'md'} />
      </HStack>
    );
  };

  return (
    <Container maxW={'lg'}>
      <Box mt={4} bgColor={'gray.50'} p={4} borderRadius={10}>
        <Text py={2}>مشرف المشروع</Text>
        <Divider />
        <VStack align={'stretch'} width={'full'}>
          <User
            name={'د.يسرى حسين'}
            caption={'تدريسية في الجامعه التكنلوجيه قسم علوم الحاسوب'}
          />
        </VStack>
      </Box>

      <Text mt={4} py={2}>منفذي المشروع</Text>
      <Divider />
      <VStack align={'stretch'} width={'full'}>
        <User name={'محمد باقر احمد عباس'} caption={'مبرمج مواقع full-stack'} />
        <User name={'عباس حازم'} caption={'مصمم ودزاينر'} />
      </VStack>
    </Container>
  );
}
