import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  FormErrorMessage,
  InputRightAddon,
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
  prefix?: string;
  suffix?: string;
  onPressEnterSubmit?: boolean;
}

export const FormPhoneNumberInput = (props: Props) => {
  const { values, setFieldValue, errors, touched, handleSubmit } =
    useFormikContext();
  const error = (touched as any)[props.name] && (errors as any)[props.name];

  return (
    <FormControl isRequired={props.isRequired} isInvalid={error}>
      <FormLabel>{props.label}</FormLabel>
      <InputGroup dir="ltr">
        <InputRightAddon children="+964" />
        <Input
          onKeyPress={
            props.onPressEnterSubmit
              ? (e) => {
                  if (e.key === 'Enter') {
                    handleSubmit();
                  }
                }
              : undefined
          }
          onChange={(e) => setFieldValue(props.name, e.target.value)}
          placeholder={props.placeholder}
          value={(values as any)[props.name]}
          type={'number'}
          prefix={props.prefix}
          suffix={props.suffix}
        />
      </InputGroup>
      <FormErrorMessage>{(errors as any)[props.name]}</FormErrorMessage>
    </FormControl>
  );
};
