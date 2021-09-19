import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

import { useField } from 'formik';

export type FormControlProps = ChakraFormControlProps & {
  name: string;
  label?: string;
};

export const FormControl = ({
  name,
  label,
  children,
  ...rest
}: FormControlProps) => {
  const [, { error }] = useField(name);

  return (
    <ChakraFormControl id={name} isInvalid={!!error} {...rest}>
      {label && (
        <FormLabel fontWeight="bold" htmlFor={name} id={name}>
          {label}
        </FormLabel>
      )}
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </ChakraFormControl>
  );
};
