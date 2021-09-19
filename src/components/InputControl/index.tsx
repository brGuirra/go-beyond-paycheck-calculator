import { Input, InputProps, FormLabel } from '@chakra-ui/react';
import { useField } from 'formik';
import { FormControl, FormControlProps } from '../FormControl';

type InputControlProps = FormControlProps & {
  inputProps?: InputProps;
  currency?: boolean;
};

export const InputControl = ({
  name,
  label,
  currency,
  inputProps,
  ...rest
}: InputControlProps) => {
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} {...rest}>
      <Input {...field} id={name} {...inputProps} />
    </FormControl>
  );
};
