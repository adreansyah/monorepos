import React, { useState } from "react";
import { Switch } from "../../../Components/Atom";
import mdx from './Switch.mdx';

export default {
  title: "Atom/Switch",
  component: Switch,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const __Default = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return <Switch onChange={() => handleChange()} checked={checked} />;
};

export const LabelOnLeft = () => {
    const [checked, setChecked] = useState(false);
  
    const handleChange = () => {
      setChecked(!checked);
    };
  
    return (
      <Switch label={"label"} onChange={() => handleChange()} checked={checked} />
    );
  };

export const LabelOnRight = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Switch label={"label"} labelPosition={"right"} onChange={() => handleChange()} checked={checked} />
  );
};

export const LabelInside = () => {
    const [checked, setChecked] = useState(false);
  
    const handleChange = () => {
      setChecked(!checked);
    };
  
    return (
      <Switch labelInside onChange={() => handleChange()} checked={checked} />
    );
  };