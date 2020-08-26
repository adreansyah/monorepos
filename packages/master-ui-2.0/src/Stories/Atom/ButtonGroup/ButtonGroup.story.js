import React from "react";
import { Button, ButtonLink, ButtonGroup } from "../../../Components/Atom";
import mdx from './ButtonGroup.mdx';

export default {
  title: "Atom/Button Group",
  component: ButtonGroup,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Basic = () => {
  return (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <ButtonLink>Button 3</ButtonLink>
    </ButtonGroup>
  );
};

export const Space = () => {
  return (
    <ButtonGroup space={16}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <ButtonLink>Button 3</ButtonLink>
    </ButtonGroup>
  );
};

export const Responsive = () => {
  return (
    <ButtonGroup responsive>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <ButtonLink>Button 3</ButtonLink>
    </ButtonGroup>
  );
};
