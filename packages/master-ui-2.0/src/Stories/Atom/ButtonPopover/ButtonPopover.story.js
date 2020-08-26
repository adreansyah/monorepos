import React from "react";
import {
  Popover,
  Button,
  ButtonLink,
  Box,
  Icon,
  Segment
} from "../../../Components/Atom";
import mdx from './ButtonPopover.mdx';

export default {
  title: "Atom/Button Popover",
  component: Popover,
  parameters: {
    docs: {
      page: mdx,
    }
  }
};

export const _0Popover = () => {
  return (
    <>
      <Segment justifyContent="center">
        <Popover popoverPosition="bottom-left">
          <Popover.Trigger>
            <Button variant={"primary"} size={"medium"}>
              Button Popover
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Box style={{ width: "300px", padding: 8, background: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Box>
          </Popover.Content>
        </Popover>
      </Segment>
    </>
  );
};

export const LinkPopover = () => {
  return (
    <>
      <Segment justifyContent="center">
        <Popover popoverPosition="bottom-right">
          <Popover.Trigger>
            <ButtonLink alignItems="center">
              <Icon name={"more"} size={24} fillColor="black50" />
            </ButtonLink>
          </Popover.Trigger>
          <Popover.Content>
            <Box style={{ width: "300px", padding: 8, background: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Box>
          </Popover.Content>
        </Popover>
      </Segment>
    </>
  );
};

export const PopoverPosition = () => {
  return (
    <>
      <Segment justifyContent="center">
        <Popover popoverPosition="bottom-left">
          <Popover.Trigger>
            <Button variant={"primary"} size={"medium"}>
              Buttom Left
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Box style={{ width: "300px", padding: 8, background: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Box>
          </Popover.Content>
        </Popover>
      </Segment>
      <Segment justifyContent="center" mt={32}>
        <Popover popoverPosition="bottom-center">
          <Popover.Trigger>
            <Button variant={"primary"} size={"medium"}>
              Bottom Center
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Box style={{ width: "300px", padding: 8, background: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Box>
          </Popover.Content>
        </Popover>
      </Segment>
      <Segment justifyContent="center" mt={32}>
        <Popover popoverPosition="bottom-right">
          <Popover.Trigger>
            <Button variant={"primary"} size={"medium"}>
              Bottom Right
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Box style={{ width: "300px", padding: 8, background: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Box>
          </Popover.Content>
        </Popover>
      </Segment>
    </>
  );
};

export const HideAfterClicked = () => {
  return (
    <>
      <Segment justifyContent="center">
        <Popover popoverPosition="bottom-left" hideAfter>
          <Popover.Trigger>
            <Button variant={"primary"} size={"medium"}>
              Button Popover
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Box style={{ width: "300px", padding: 8, background: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Box>
          </Popover.Content>
        </Popover>
      </Segment>
    </>
  );
};
