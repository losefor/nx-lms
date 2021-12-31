import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

// Import the styles provided by the react-pdf-viewer packages
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Nav from "../layouts/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
