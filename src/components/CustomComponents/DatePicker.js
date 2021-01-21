import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

function CustomDatePicker() {
  const initialState = {
    selectdate: new Date(),
  };

  const [date, setDate] = useState(initialState);

  return (
    <div className="ml-auto mr-auto" style={{ maxWidth: 600 }}>
      <DatePicker
        id="datePicker-1"
        value={date.selectdate}
        onChange={(dateValue) => setDate({ selectdate: dateValue })}
        label="Please Select Date"
        formatStyle="large"
      />
    </div>
  );
}

export default CustomDatePicker;
