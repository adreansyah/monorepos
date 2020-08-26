import React from "react";
import { ButtonLink, Icon } from "../../../Components/Atom";
import mdx from "./ButtonLink.mdx";

export default {
  title: "Atom/Button Link",
  component: ButtonLink,
  subcomponent: { Icon },
  parameters: {
    docs: {
      page: mdx,
    }
  }
};

export const Basic = () => {
  return <ButtonLink>Button Text</ButtonLink>;
};

export const withIcon = () => {
  return (
    <ButtonLink>
      <Icon name="cart" size="small" fillColor="orange30" mr={4} />
      Button Text
    </ButtonLink>
  );
};
