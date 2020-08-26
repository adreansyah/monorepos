import React, { useState } from "react";
// import { text, radios } from "@storybook/addon-knobs";
import { SelectList } from "../../../Components/Molecules";
import mdx from './SelectList.mdx'

export default {
  title: "Molecules/SelectList",
  component: SelectList,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  const [active, setActive] = useState("list1");

  return (
    <React.Fragment>
      <SelectList active={active} onChange={active => setActive(active)}>
        <div key="list1">List 1</div>
        <div key="list2">List 2</div>
        <div key="list3">List 3</div>
        <div key="list4">List 4</div>
        <div key="list5">List 5</div>
        <div key="list6">List 6</div>
      </SelectList>
      <p>Chosen List: {active}</p>
    </React.Fragment>
  );
};
