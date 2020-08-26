import React, { useState } from "react";
import { AlertBox, Segment, Button } from "../../../Components/Atom";
import { select, boolean } from "@storybook/addon-knobs";
import mdx from './AlertBox.mdx';

export default {
  title: "Atom/Alert Box",
  component: AlertBox,
  parameters: {
    docs: {
      page: mdx,
    }
  }
};

const color = ["success", "warning", "error"];
const animate = ["fade", "slide", false];

const knobsType = () => select("Type", color, "success", "Alert");
const knobsAnimate = () => select("Animate", animate, "fade", "Alert");
const knobsResponsive = () => boolean("Responsice", false, "Alert");

export const Basic = () => {
  return (
    <AlertBox type={knobsType()} responsive={knobsResponsive()} animate={knobsAnimate()}>
      Placeholder is the default for text.
    </AlertBox>
  );
};

export const Dismissable = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAlert = () => setIsOpen(!isOpen);

  return (
    <>
      <Segment>
        <AlertBox type={knobsType()} isOpen={isOpen} toggle={toggleAlert} responsive={knobsResponsive()} animate={knobsAnimate()}>
          Placeholder is the default for text.
        </AlertBox>
      </Segment>
      <Button mt={16} size="small" onClick={() => setIsOpen(true)}>Open</Button>
    </>
  );
};