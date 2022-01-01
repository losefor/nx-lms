import { ChakraProvider } from '@chakra-ui/provider';
import { extendTheme } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function ChakraRtlProvider({ children }: Props) {
  const direction = 'rtl';

  // 👇🏻 Here's the place we add direction to the theme
  const theme = extendTheme({
    direction,
  });
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
