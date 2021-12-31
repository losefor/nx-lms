import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import React from 'react';
import { useFormikContext } from 'formik';
import { GroubedButtons } from '@nx-lms/chakra-hoc';

interface Props {
  name: string;
  label?: string;
  Icon?: React.ReactNode;
  width?: number;
  buttons: any[];
  primaryColor: any;
  primaryDarkColor: any;
}

export function FormButtonGroup(props: Props) {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const error = (touched as any)[props.name] && (errors as any)[props.name];
  const defaultValue = (values as any)[props.name];

  const onChangeHandler = (val: string) => {
    setFieldValue(props.name, val);
  };

  return (
    <FormControl isInvalid={error}>
      <FormLabel>{props.label}</FormLabel>
      <GroubedButtons
        onChange={(e) => console.log(e)}
        buttons={props.buttons}
        defaultValue={defaultValue}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}
