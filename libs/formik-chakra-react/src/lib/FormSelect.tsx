import React from 'react';
import { Select, FormControl, FormLabel } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

interface Props {
  name: string;
  isLoading?: boolean;
  placeholder?: string;
  label?: string;
  Icon?: React.ReactNode;
  width?: number;
  children: any;
}

export const FormSelect = ({ name, label, width, children }: Props) => {
  // Get input info using formik context
  const { values, setFieldValue, errors, touched } = useFormikContext();

  // Detect if error happened
  const error = (touched as any)[name] && (errors as any)[name];
  return (
    <FormControl isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      <Select
        value={(values as any)[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
      >
        {children}
      </Select>
    </FormControl>
  );
};
