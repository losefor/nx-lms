import { useColorModeValue as mode, Box, Flex, HStack } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';

interface SidebarContentProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export function SidebarContent({ title, children, ...rest }: any) {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      right="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={mode('white', 'gray.800')}
      borderColor={mode('inherit', 'gray.700')}
      borderEndWidth="1px"
      w="60"
      {...rest}
    >
      <Flex px="4" py="5" align="center">
        {title}
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <HStack>
          {children}
          <FiArrowLeft />
        </HStack>
      </Flex>
    </Box>
  );
}
