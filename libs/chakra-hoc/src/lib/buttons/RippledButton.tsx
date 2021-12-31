import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

export function RippledButton(props: ButtonProps) {
  const colorData = props.bgColor
    ? (props.bgColor as string).split('.')
    : ['teal', '400'];
  const color = colorData[0];
  const saturation = parseInt(colorData[1]);

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
      Click Me
    </Button>
  );
}
