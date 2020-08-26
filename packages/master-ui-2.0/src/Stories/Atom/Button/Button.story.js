import React, { useState } from "react";
import { Button, Icon } from "../../../Components/Atom";
import mdx from './Button.mdx';

export default {
  title: "Atom/Button",
  component: Button,
  subcomponent: { Icon },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Basic = () => {
  return <Button>Button Text</Button>;
};

export const variant = () => {
  const btnVariants = ["primary", "primary-alt", "secondary", "secondary-alt"];
  return btnVariants.map((item, idx) => {
    return (
      <React.Fragment key={idx}>
        <Button variant={item}>{item}</Button>
      </React.Fragment>
    );
  });
};

export const size = () => {
  const btnSizes = ["small", "medium", "large"];
  return btnSizes.map((item, idx) => {
    return (
      <React.Fragment key={idx}>
        <Button size={item}>{item}</Button>
      </React.Fragment>
    );
  });
};

export const disabled = () => {
  return (
    <Button variant="primary" size="medium" disabled>
      Button Text
    </Button>
  );
};

export const spinner = () => {
  const [isSpinner, setSpinner] = useState(false);
  const handleSpinner = () => {
    setSpinner(!isSpinner);
  };
  return (
    <Button
      onClick={handleSpinner}
      spinner={isSpinner}
    >
      Click me!
    </Button>
  );
};

export const withIcon = () => {
  return (
    <Button>
      <Icon name="cart" size="large" fillColor="white" mr={4} />
      Button Text
    </Button>
  );
};

withIcon.story = {
  parameters: {
    docs: {
      storyDescription:
        "Button component is a flexbox component. When default condition, **Icon** component inside the button takes position on left."
    }
  }
};

