import {
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useBoolean,
} from '@chakra-ui/react';
import { DateRange } from 'react-date-range';
import { FiCalendar } from 'react-icons/fi';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';

export function DateRangePicker() {
  const [isSelected, setSelected] = useBoolean(false);

  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleChange = (data: any) => {
    console.log(data.selection);
    setSelected.on();

    setState([data.selection]);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <ButtonGroup isAttached>
          <Button rightIcon={<FiCalendar />}>
            {isSelected
              ? ` ${state[0].startDate?.getDate()}/${
                  state[0].startDate?.getMonth() + 1
                }
            /${state[0].startDate?.getFullYear()}`
              : 'Select date'}
          </Button>
          <Button rightIcon={<FiCalendar />}>
            {isSelected
              ? ` ${state[0].endDate?.getDate()}/${
                  state[0].endDate?.getMonth() + 1
                }
            /${state[0].endDate?.getFullYear()}`
              : 'Select date'}
          </Button>
        </ButtonGroup>
      </PopoverTrigger>
      <PopoverContent _focus={{ shadow: 'none' }}>
        <PopoverArrow />
        <div dir="ltr">
          <DateRange
            date={new Date()}
            onChange={handleChange}
            ranges={state}
            rangeColors={['teal']}
            showMonthAndYearPickers={false}
            fixedHeight={true}
            showDateDisplay={false}
            minDate={new Date()}
          />
        </div>

        <Button size={'sm'} m={2} onClick={() => setSelected.off()}>
          Clear
        </Button>
      </PopoverContent>
    </Popover>
  );
}
