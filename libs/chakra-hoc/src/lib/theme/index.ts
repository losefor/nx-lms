import { extendTheme } from '@chakra-ui/react';
import { ButtonTheme } from './Button';
export * from './ChakraRtlProvider';

export const theme = extendTheme({ components: { Button: ButtonTheme } });
