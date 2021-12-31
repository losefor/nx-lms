import { Button, ButtonProps } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { RippledButton } from '@nx-lms/chakra-hoc';
interface Props extends ButtonProps {
  children: string;
  isLoading?: boolean;
  color?: string;
}

export function FormButton({ children, isLoading, color, ...rest }: Props) {
  const { handleSubmit } = useFormikContext();

  return (
    <RippledButton
      color={color}
      // htmlType="submit"
      onClick={() => handleSubmit()}
      isLoading={isLoading}
      type="submit"
      colorScheme="teal"
      fontSize="md"
      {...rest}
    >
      {children}
    </RippledButton>
  );
}
