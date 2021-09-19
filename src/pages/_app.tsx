import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { PayrollContextProvider } from '../context/payroll';

import { theme } from '../../styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <PayrollContextProvider>
        <Component {...pageProps} />
      </PayrollContextProvider>
    </ChakraProvider>
  );
}
export default MyApp;
