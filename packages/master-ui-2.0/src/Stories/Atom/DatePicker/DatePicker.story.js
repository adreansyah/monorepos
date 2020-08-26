import React, { useState } from "react";
import { DatePicker, Icon } from "../../../Components/Atom";
import mdx from './DatePicker.mdx';

export default {
  title: "Atom/Date Picker",
  component: DatePicker,
  parameters: {
    docs: {
      page: mdx
    }
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
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        inputClassName={'sample-className'}
      />
    </div>
  );
};

export const MonthYear = () => {
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
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        inputClassName={'sample-className'}
        startYearRange={'1970'}
      />
    </div>
  );
};


export const Status = () => {
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
      <label>Normal</label>
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        status={'normal'}
      />
      <label>Success</label>
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        status={'success'}
      />
      <label>Error</label>
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        status={'error'}
      />
    </div>
  );
};

export const Disabled = () => {
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
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        disabled
      />
    </div>
  );
};

export const WithIconLeft = () => {
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
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        left={<Icon name={"date"} size={24} fillColor="primary" />}
      />
    </div>
  );
};

export const WithIconRight = () => {
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
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        right={<Icon name={"date"} size={24} fillColor="primary" />}
      />
    </div>
  );
};

export const DontHideSelected = () => {
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
      <DatePicker
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        shouldCloseOnSelect={false}
        onChange={data => onChange("singleDate", data)}
      />
    </div>
  );
};

export const MonthPicker = () => {
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
      <DatePicker
        placeholderText="Masukkan Bulan"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        calendarClassName="month-picker"
      />
    </div>
  )
}

export const YearPicker = () => {
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
      <DatePicker
        placeholderText="Masukkan Tahun"
        selected={data.singleDate}
        onChange={data => onChange("singleDate", data)}
        dateFormat="yyyy"
        showYearPicker
        calendarClassName="year-picker"
      />
    </div>
  );
};