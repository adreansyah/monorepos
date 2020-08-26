import React, { useState } from "react";
import { Segment } from "../../../Components/Atom";
import { Tabs } from "../../../Components/Molecules";
import mdx from './Tabs.mdx'

export default {
  title: "Molecules/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const _0Tabs = () => {
  const [active, setActive] = useState("aTab");

  return (
    <Segment border="1px solid black" p={8}>
      <Tabs active={active} onChange={active => setActive(active)}>
        <div key="aTab">A Title</div>
        <div key="bTab">B Very Long Title</div>
        <div key="cTab">C Long Title</div>
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};

export const UnderlineSize = () => {
  const [active, setActive] = useState("aTab");

  return (
    <Segment border="1px solid black" p={8}>
      <Tabs active={active} onChange={active => setActive(active)} underlineSize={8}>
        <div key="aTab">A Title</div>
        <div key="bTab">B Very Long Title</div>
        <div key="cTab">C Long Title</div>
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};

export const UnderlineColor = () => {
  const [active, setActive] = useState("aTab");

  return (
    <Segment border="1px solid black" p={8}>
      <Tabs active={active} onChange={active => setActive(active)} underlineColor="black50">
        <div key="aTab">A Title</div>
        <div key="bTab">B Very Long Title</div>
        <div key="cTab">C Long Title</div>
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};

export const Responsive = () => {
  const [active, setActive] = useState("aTab");

  return (
    <Segment border="1px solid black" p={8}>
      <Tabs active={active} onChange={active => setActive(active)} responsive>
        <div key="aTab">A Title</div>
        <div key="bTab">B Very Long Title</div>
        <div key="cTab">C Long Title</div>
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};

export const Dots = () => {
  const [active, setActive] = useState("aTab");

  return (
    <Segment border="1px solid black" p={8}>
      <Tabs active={active} onChange={active => setActive(active)} dots>
        <div key="aTab">A Title</div>
        <div key="bTab">B Very Long Title</div>
        <div key="cTab">C Long Title</div>
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};
