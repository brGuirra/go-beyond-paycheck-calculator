import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
  },
  styles: {
    global: {
      body: {
        bg: '#fff',
        color: 'gray.900',
      },
      li: {
        listStyle: 'none',
      },
    },
  },
});
