import { Divider, Heading, HStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
  leftDivider?: boolean;
  rightDivider?: boolean;
}

export function HeadingWithDivider(props: Props) {
  return (
    <HStack w={'full'}>
      {props.leftDivider && <Divider />}
      <Heading
        flexShrink={0}
        fontFamily={'Cairo'}
        as="h1"
        fontSize={['2xl', '4xl']}
        paddingX={'4'}
      >
        {props.children}
      </Heading>
      {props.rightDivider && <Divider />}
    </HStack>
  );
}
