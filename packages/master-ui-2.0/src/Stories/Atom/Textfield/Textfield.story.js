import React from "react";
import { Textfield, Icon } from "../../../Components/Atom";
import mdx from './Textfield.mdx';

export default {
  title: "Atom/Textfield",
  component: Textfield,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const __DefaultModel = () => {
  return (
    <Textfield
      inputProps={{
        placeholder: "Fill the field...",
        onChange: e => console.log(e.target.value),
        "data-validation": "require,email",
      }}
    />
  );
};

export const LineModel = () => {
  return <Textfield model="line" placeholder="Fill the field..." />;
};

export const Status = () => {
  return (
    <div>
      <label>Normal</label>
      <Textfield status="normal" />
      <label>Success</label>
      <Textfield status="success" />
      <label>Error</label>
      <Textfield status="error" />
    </div>
  );
};

export const Readonly = () => {
  return <Textfield 
  inputProps={{
    placeholder: "Fill the field",
    onChange: e => console.log(e.target.value),
    "data-validation": "require,email",
    readonly: true
  }}
   />;
};

export const Disabled = () => {
  return <Textfield disabled />;
};

export const withIconOnRight = () => {
  return (
    <Textfield
      inputProps={{
        onChange: e => console.log(e.target.value),
        "data-validation": "require,email"
      }}
      right={<Icon name={"cart"} size={24} fillColor="black50" />}
    />
  );
};

export const withIconOnLeft = () => {
  return (
    <Textfield
      inputProps={{
        onChange: e => console.log(e.target.value),
        "data-validation": "require,email"
      }}
      left={<Icon name={"cart"} size={24} fillColor="black50" />}
    />
  );
};
