import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  FormErrorMessage,
  InputRightAddon,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';

interface Props {
  name: string;
  isLoading?: boolean;
  placeholder?: string;
  label?: string;
  Icon?: React.ReactNode;
  width?: number;
  prefix?: string;
  suffix?: string;
}

export const FormPhoneNumberInput = ({
  name,
  placeholder,
  label,
  width,
  prefix,
  suffix,
}: Props) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const error = (touched as any)[name] && (errors as any)[name];

  return (
    <FormControl isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      <InputGroup dir="ltr">
        <InputRightAddon children="+964" />
        <Input
          onChange={(e) => setFieldValue(name, e.target.value)}
          placeholder={placeholder}
          value={(values as any)[name]}
          type={'number'}
          prefix={prefix}
          suffix={suffix}
        />
      </InputGroup>
      <FormErrorMessage>{(errors as any)[name]}</FormErrorMessage>
    </FormControl>
  );
};
