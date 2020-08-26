import React from "react";
import { Ribbon } from "../../../Components/Atom";
import mdx from './Ribbon.mdx';

export default {
  title: "Atom/Ribbon",
  component: Ribbon,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const RibbonSuccess = () => {
  return (
    <>
      <Ribbon type="success">This is example of success</Ribbon>
    </>
  );
};

export const RibbonWarning = () => {
  return (
    <>
      <Ribbon type="warning">This is example of warning</Ribbon>
    </>
  );
};
export const RibbonError = () => {
  return (
    <>
      <Ribbon type="error">This is example of error</Ribbon>
    </>
  );
};

