import React from "react";
import { Segment, Spinner, Text } from "../../../Components/Atom";
import mdx from './Spinner.mdx';

export default {
  title: "Atom/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const __Default = () => {
  return (
    <>
      <Segment width={120} height={120}>
        <Spinner />
      </Segment>
    </>
  );
};

export const Color = () => {
  return (
    <>
      <Segment width={120} height={120}>
        <Spinner color="#000000" />
      </Segment>
    </>
  );
};

export const Speed = () => {
  return (
    <>
      <Segment width={120} height={120}>
        <Spinner speed={2} />
      </Segment>
    </>
  );
};
