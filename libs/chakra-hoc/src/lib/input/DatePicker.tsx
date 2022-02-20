import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useBoolean,
} from '@chakra-ui/react';
import { Calendar } from 'react-date-range';
import { FiCalendar } from 'react-icons/fi';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';

export function DatePicker() {
  const [hover, setHover] = useBoolean(false);
  const [isSelected, setSelected] = useBoolean(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleSelect = (date: any) => {
    //   setIsSelected to true
    setSelected.on();
    setSelectedDate(date);
    console.log(date); // native Date object
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          //   colorScheme={hover ? 'teal' : 'gray'}
          onMouseEnter={() => setHover.on()}
          onMouseLeave={() => setHover.off()}
          rightIcon={<FiCalendar />}
        >
          {isSelected
            ? `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/
                ${selectedDate.getFullYear()}`
            : 'Select date'}
        </Button>
      </PopoverTrigger>
      <PopoverContent _focus={{ shadow: 'none' }}>
        <PopoverArrow />
        <div dir="ltr">
          <Calendar color="teal" date={selectedDate} onChange={handleSelect} />
        </div>

        <Button size={'sm'} m={2} onClick={() => setSelected.off()}>
          Clear
        </Button>
      </PopoverContent>
    </Popover>
  );
}
