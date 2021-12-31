import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import { useFormikContext } from "formik";

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
      <ButtonGroup isAttached variant={"outline"} dir="ltr" width={"full"}>
        {props.buttons.map((button) => (
          <Button
            bg={defaultValue === button.value ? props.primaryColor : ""}
            color={defaultValue === button.value ? "white" : ""}
            borderColor={
              defaultValue === button.value ? props.primaryColor : "inherit"
            }
            width={"full"}
            onClick={() => onChangeHandler(button.value)}
            _hover={{
              bg:
                defaultValue === button.value
                  ? props.primaryDarkColor
                  : "inherit",
            }}
          >
            {button.name}
          </Button>
        ))}
      </ButtonGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}
