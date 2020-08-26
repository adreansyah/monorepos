import React, { useState } from "react";
import { Calendar } from "../../../Components/Atom";
import mdx from './Calendar.mdx';

export default {
  title: "Atom/Calendar",
  component: Calendar,
  parameters: {
    docs: {
      page: mdx,
    },
  }
};

export const Basic = () => {
  const [data, setData] = useState({});
  const onChange = (name, value) => {
    setData({
      ...data,
      [name]: new Date(value)
    });
  };

  return (
    // Exclude the "div", it just a wrapper
    <div style={{ height: "400px" }}>
      <Calendar
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        shouldCloseOnSelect={false}
        onChange={data => onChange("singleDate", data)}
        calendarClassName="calendar-full"
      />
    </div>
  );
};
