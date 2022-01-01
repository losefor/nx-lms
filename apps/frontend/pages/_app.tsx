import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ChakraRtlProvider, theme } from '@nx-lms/chakra-hoc';

// 👇🏻 Here's the place we add direction to the theme
// const theme = extendTheme({
//   components: { Button: { baseStyle: { _focus: { boxShadow: 'none' } } } },
// });

// Import the styles provided by the react-pdf-viewer packages
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Nav from '../layouts/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraRtlProvider>
      <ChakraProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ChakraProvider>
    </ChakraRtlProvider>
  );
}

export default MyApp;
