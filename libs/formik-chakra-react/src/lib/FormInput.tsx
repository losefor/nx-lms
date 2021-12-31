import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputProps,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Props extends InputProps {
  name: string;
  label?: string;
  Icon?: React.ReactNode;
  width?: number;
}

export const FormInput = ({
  name,
  placeholder,
  label,
  width,
  ...rest
}: Props) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const error = (touched as any)[name] && (errors as any)[name];

  return (
    <FormControl isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      <Input
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        value={(values as any)[name]}
        {...rest}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
