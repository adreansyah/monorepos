import React, { useState } from "react";
import { Stepper } from "../../Components/Atom";

export default {
  title: "Atom/Stepper",
  component: Stepper
};

export const Basic = () => {
  const [value, setValue] = useState(0);
  const limit = 10;

  return (
    <Stepper
      value={value}
      limit={limit}
      onChange={value => setValue(value)}
    ></Stepper>
  );
};
