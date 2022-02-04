import { Button, ButtonProps } from '@chakra-ui/react';
import { colorParser } from '../utils/colorParser';

export function RippledButton(props: ButtonProps) {
  const { color, saturation } = colorParser(props.bgColor as string);

  return (
    <Button
      {...props}
      _focus={{
        outline: 'none',
      }}
      transition="background 0.8s"
      backgroundPosition="center"
      _hover={{
        bgColor: `${color}.${saturation + 100}`,
        bgGradient: `radial(circle, transparent 1%, ${color}.${
          saturation + 100
        } 1%)`,
        bgPos: 'center',
        backgroundSize: '15000%',
      }}
      _active={{
        bgColor: `${color}.${saturation - 100}`,
        backgroundSize: '100%',
        transition: 'background 0s',
      }}
    >
      {props.children}
    </Button>
  );
}
