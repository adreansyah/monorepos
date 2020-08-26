import React, { useState } from "react";
import { TrayFull } from "../../../Components/Molecules";
import { Button, ButtonLink, ButtonGroup, Icon, Segment } from "../../../Components/Atom";
import { Header, HeaderLeft, HeaderRight, HeaderBody, Footer, FooterBody } from "../../../Components/Organisms/Mobile";
import { text, boolean } from "@storybook/addon-knobs";
import mdx from './TrayFull.mdx'

const trayContent = () => text("Content", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "TrayFull");
const fixedHeader = () => boolean("Fixed", true, "Header");
const fixedFooter = () => boolean("Fixed", true, "Footer");
const borderHeader = () => boolean("Border", true, "Header");
const borderFooter = () => boolean("Border", true, "Footer");


export default {
  title: "Molecules/Tray Full",
  component: { TrayFull },
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
    <Segment style={{width: "200px", height: "400px"}}>
      <Button onClick={() => toggleModalClose()}>Tray Full</Button>
      <TrayFull isOpen={isModalShow} overlayClick={() => toggleModalClose()}>
        <Header border={borderHeader()} fixed={fixedHeader()}>
          <HeaderLeft>
            <ButtonLink onClick={() => toggleModalClose()}>
              <Icon name={"arrow-left"} size={24} fillColor="black70" />
            </ButtonLink>
          </HeaderLeft>
          <HeaderBody>
            Lorem Ipsum
        </HeaderBody>
          <HeaderRight>
            <ButtonLink>Lorem</ButtonLink>
          </HeaderRight>
        </Header>
        {trayContent()}
        <Footer fixed={fixedFooter()} border={borderFooter()}>
          <FooterBody>
            <ButtonGroup responsive>
              <Button
                size="medium"
                variant="primary-alt">
                LOREM IPSUM SIT
              </Button>
            </ButtonGroup>
          </FooterBody>
        </Footer>
      </TrayFull>
    </Segment>
  );
};


