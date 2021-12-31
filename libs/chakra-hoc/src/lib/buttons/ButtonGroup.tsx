import { Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';

export interface GroubedButtonsProps {
  buttons: ButtonProps[];
  defaultValue: string;
  onChange: (val: string) => unknown;
}

export interface ButtonProps {
  name: string;
  value: string;
}

export function GroubedButtons(props: GroubedButtonsProps) {
  const [selected, setSelected] = useState<string>(props.defaultValue);

  const onChangeHandler = (val: string) => {
    setSelected(val);
    props.onChange(val);
  };

  return (
    <ButtonGroup isAttached variant={'outline'} width={'full'}>
      {props.buttons.map((button) => {
        const isSelected = selected === button.value;

        return (
          <Button
            variant={isSelected ? 'solid' : 'outline'}
            colorScheme={isSelected ? 'teal' : 'gray'}
            width={'full'}
            onClick={() => onChangeHandler(button.value)}
          >
            {button.name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
