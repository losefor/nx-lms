import { VStack, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Scrollchor } from 'react-scrollchor';

interface Props {
  to: string;
  children: React.ReactNode;
}

export function SectionScroll(props: Props) {
  return (
    <VStack
      _hover={{
        transform: 'translateY(10px)',
      }}
      cursor={'pointer'}
      transition={'.3s'}
      role={'group'}
      spacing={'-1'}
    >
      <Text
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
        transition={'.4s'}
        fontWeight={'bold'}
        color={"gray.600"}
      >
        {props.children}
      </Text>
      <Scrollchor to={props.to}>
        <Icon fontSize={'6xl'} color={'gray.400'} as={FiChevronDown} />
      </Scrollchor>
    </VStack>
  );
}
