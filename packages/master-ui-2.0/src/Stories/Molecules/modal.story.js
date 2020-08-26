import React from "react";
import { select, text, boolean } from "@storybook/addon-knobs";
import { Button, ButtonLink, ButtonGroup } from "../../Components/Atom";
import { Modal } from "../../Components/Molecules";

const modalSize = ["small", "medium", "large", "xlarge"];
const justifyActionOption = ["flex-start", "center", "flex-end"];
const modalOrientation = ["vertical", "horizontal"];

//Sharing Knobs
const ModalSize = () => select("Size", modalSize, "small", "Modal");
const ModalOrientation = () =>
  select("Orientation", modalOrientation, "vertical", "Modal");
const ModalTitle = () => text("Title", "Lorem ipsum dolor sit amet", "Modal");
const ModalClose = () => boolean("Close Button", false, "Modal");
const ModalLink = () => boolean("Link Button", false, "Modal");
const ModalContent = () =>
  text(
    "Content",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
    "Modal"
  );
const ModalSeparator = () => boolean("Separator", false, "Modal");
const JustifyAction = () =>
  select("Justify Action", justifyActionOption, "center", "Modal");
const ActionType = () =>
  select("Action Type", ["single", "multiple"], "single", "Modal");

export default {
  title: "Molecules/Modal",
  component: { Button, ButtonLink, ButtonGroup, Modal }
};

export const SingleActionModal = () => {
  const BasicAction = <Button variant="primary-alt">Primary</Button>;
  return (
    <Modal
      size={ModalSize()}
      title={ModalTitle()}
      content={ModalContent()}
      justifyAction={"flex-end"}
      action={BasicAction}
    />
  );
};

export const MultipleActionModal = () => {
  const BasicAction = (
    <ButtonGroup>
      <Button variant="secondary-alt">Cancel</Button>
      <Button variant="primary-alt">Primary</Button>
    </ButtonGroup>
  );
  return (
    <Modal
      size={ModalSize()}
      title={ModalTitle()}
      content={ModalContent()}
      justifyAction={"flex-end"}
      action={BasicAction}
    />
  );
};

export const CustomModal = () => {
  //choose ActionType will return object Button
  const Action = () => {
    if (ActionType() === "single") {
      return <Button variant="primary-alt">Primary</Button>;
    } else if (ActionType() === "multiple") {
      return (
        <ButtonGroup>
          <Button variant="secondary-alt">Cancel</Button>
          <Button variant="primary-alt">Primary</Button>
        </ButtonGroup>
      );
    }
  };

  //choose Link will return object ButtonLink
  const Link = () => {
    if (ModalLink() === true) {
      return <ButtonLink>Button Link</ButtonLink>;
    } else {
      return false;
    }
  };

  return (
    <Modal
      size={ModalSize()}
      orientation={ModalOrientation()}
      title={ModalTitle()}
      modalClose={ModalClose()}
      modalLink={Link()}
      content={ModalContent()}
      separator={ModalSeparator()}
      justifyAction={JustifyAction()}
      action={Action()}
    />
  );
};

export const ToastModal = () => {
  const Action = () => {
    if (ActionType() === "single") {
      return <Button variant="primary-alt">Primary</Button>;
    } else if (ActionType() === "multiple") {
      return (
        <ButtonGroup>
          <Button variant="secondary-alt">Cancel</Button>
          <Button variant="primary-alt">Primary</Button>
        </ButtonGroup>
      );
    }
  };

  return (
    <Modal
      size={select("Size", ["large", "xlarge"], "large", "Modal")}
      orientation={"horizontal"}
      title={ModalTitle()}
      content={ModalContent()}
      action={Action()}
    />
  );
};
