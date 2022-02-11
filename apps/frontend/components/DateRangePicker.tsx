import { useState } from 'react';
import { DateRange, Range } from 'react-date-range';

export function DateRangePicker() {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleChange = (data: any) => {
    console.log(data.selection);

    setState([data.selection]);
  };
  return (
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
  );
}
