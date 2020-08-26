import React, { useState } from "react";
import { Tray, TrayHeader, TrayTitle, TrayContent, TrayFooter } from "../../../Components/Molecules";
import { Button, ButtonLink, Icon, Segment } from "../../../Components/Atom";
import { select, text } from "@storybook/addon-knobs";
import mdx from './Tray.mdx'

const backdrop = [true, false, "static"];

const trayType = () => select("Backdrop", backdrop, "true", "Tray");
const trayHeader = () => text("Header", "Lorem Ipsum", "Tray");
const trayContent = () => text("Content", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Tray");
const trayFooter = () => text("Footer", "Lorem Ipsum", "Tray");

export default {
  title: "Molecules/Tray",
  component: { Tray },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  const [isModalShow, setModal] = useState(false);

  const toggleModalClose = () => {
    setModal(!isModalShow);
  }

  return (
    <Segment style={{width: "200px", height:"400px", overflowY:"hidden"}}>
      <Button onClick={() => toggleModalClose()}>Tray</Button>
      <Tray isOpen={isModalShow} overlayClick={() => toggleModalClose()} backdrop={trayType()}>
        <TrayHeader>
          <TrayTitle>{trayHeader()}</TrayTitle>
          <ButtonLink onClick={() => toggleModalClose()}>
            <Icon name="cancel" size="24" fillColor="black50" />
          </ButtonLink>
        </TrayHeader>
        <TrayContent style={{ padding: '16px' }}>
          {trayContent()}
        </TrayContent>
        <TrayFooter>
          {trayFooter()}
        </TrayFooter>
      </Tray>
    </Segment>
  );
};


