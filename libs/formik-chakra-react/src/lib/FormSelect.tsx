import React from 'react';
import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormControlProps,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';

interface Props extends FormControlProps {
  name: string;
  isLoading?: boolean;
  placeholder?: string;
  label?: string;
  Icon?: React.ReactNode;
  width?: number;
  children: any;
}

export const FormSelect = ({ name, label, children, isRequired }: Props) => {
  // Get input info using formik context
  const { values, setFieldValue, errors, touched } = useFormikContext();

  // Detect if error happened
  const error = (touched as any)[name] && (errors as any)[name];
  return (
    <FormControl isRequired={isRequired} isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      <Select
        value={(values as any)[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
      >
        {children}
      </Select>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
