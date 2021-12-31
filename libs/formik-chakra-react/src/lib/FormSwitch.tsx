import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Props {
  name: string;
  label: string;
}

export default function FormSwitch(props: Props) {
  // Get input info using formik context
  const { values, setFieldValue, errors, touched } = useFormikContext();

  // Detect if error happened
  const error = (touched as any)[props.name] && (errors as any)[props.name];
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        {props.label}
      </FormLabel>
      <Switch id="email-alerts" />
    </FormControl>
  );
}
