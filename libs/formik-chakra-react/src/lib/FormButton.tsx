import { Button, ButtonProps } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Props extends ButtonProps {
  children: string;
  isLoading?: boolean;
  color?: string;
}

export function FormButton({ children, isLoading, color, ...rest }: Props) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      color={color}
      htmlType="submit"
      onClick={() => handleSubmit()}
      isLoading={isLoading}
      type="submit"
      colorScheme="teal"
      fontSize="md"
      {...rest}
    >
      {children}
    </Button>
  );
}
