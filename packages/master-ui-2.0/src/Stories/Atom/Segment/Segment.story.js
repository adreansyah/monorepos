import React from "react";
import { Segment, Text } from "../../../Components/Atom";
import mdx from "./Segment.mdx";

export default {
  title: "Utils/Layout/Segment",
  component: Segment,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Margin = () => {
  return (
    <Segment bg="primary">
      <Segment m={16}>
        <Text type="B1" color="white">This segment with margin</Text>
      </Segment>
    </Segment>
  );
};

export const Padding = () => {
  return (
    <Segment bg="primary">
      <Segment p={16}>
        <Text type="B1" color="white">This segment with padding</Text>
      </Segment>
    </Segment>
  );
};

export const BackgroundColor = () => {
  return (
    <>
    <Segment bg="orange30" p={8}>
      <Text type="B1" color="white">This segment background-color orange30</Text>
    </Segment>
    <Segment p={8}>
      <Text type="B1" color="orange30">This segment text color red30</Text>
    </Segment>
    </>
  );
};

export const Border = () => {
  return (
    <Segment border="1px solid dark" p={8}>
      <Text type="B1">I'm a text inside of segment</Text>
    </Segment>
  );
};

export const Sizing = () => {
  return (
    <Segment width="300px" bg="orange30" p={8}>
      <Text type="B1" color="white">This segment width is 300px</Text>
    </Segment>
  )
}

export const Flexbox = () => {
  return (
    <Segment justifyContent="space-between" bg="orange30" p={8}>
      <Segment bg="white" width="200px" p={8}>We're justified with space-between</Segment>
      <Segment bg="white" width="200px" p={8}>We're justified with space-between</Segment>
      <Segment bg="white" width="200px" p={8}>We're justified with space-between</Segment>
    </Segment>
  )
}

export const Display = () => {
  return (
    <Segment display="inline-block" bg="orange30" p={8}>
      <Text type="B1" color="white">This segment display as inline-block element</Text>
    </Segment>
  )
}