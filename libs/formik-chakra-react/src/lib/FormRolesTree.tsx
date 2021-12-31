import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  CheckboxProps,
  Stack,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { RoleTree } from "./components/RoleTree";

interface Props extends CheckboxProps {
  name: string;
  isLoading?: boolean;
  placeholder?: string;
  label?: string;
  Icon?: React.ReactNode;
  width?: number;
  perms: string[];
}

export const FormRolesTree = ({ name, label, perms, ...rest }: Props) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const error = (touched as any)[name] && (errors as any)[name];

  return (
    <FormControl isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      <Stack spacing={2}>
        {perms.map((permName, index) => (
          <RoleTree
            roleName={permName}
            permsValue={(values as any)[name][permName]}
            key={index}
            {...rest}
            onChangePerms={(e) =>
              setFieldValue(name, {
                ...(values as any)[name],
                [e.name]: e.permissions,
              })
            }
          />
        ))}
      </Stack>
      <FormErrorMessage>{(errors as any)[name]}</FormErrorMessage>
    </FormControl>
  );
};
