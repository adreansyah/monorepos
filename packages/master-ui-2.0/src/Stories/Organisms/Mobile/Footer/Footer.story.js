import React from "react";
import { Footer, FooterLeft, FooterBody } from "../../../../Components/Organisms/Mobile";
import { ButtonGroup, Button, ButtonLink } from "../../../../Components/Atom";
import { Icon } from "../../../../Components/Atom";
import { boolean } from "@storybook/addon-knobs";
import mdx from './Footer.mdx'

const fixedFooter = () => boolean("Fixed", true, "Footer");
const borderFooter = () => boolean("Border", true, "Footer");

export default {
  title: "Organisms/Mobile/Footer",
  component: { Footer },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const OneButton = () => {
  return (
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
  );
};

export const TwoButton = () => {
  return (
    <Footer fixed={fixedFooter()} border={borderFooter()}>
      <FooterBody>
        <ButtonGroup responsive space={4}>
          <Button
            size="medium"
            variant="secondary">
            LOREM IPSUM SIT
          </Button>
          <Button
            size="medium"
            variant="primary-alt">
            LOREM IPSUM SIT
          </Button>
        </ButtonGroup>
      </FooterBody>
    </Footer>
  );
};

export const ThreeButton = () => {
  return (
    <Footer fixed={fixedFooter()} border={borderFooter()}>
      <FooterLeft>
        <ButtonLink><Icon name={"cart"} size={24} fillColor="black40" /></ButtonLink>
      </FooterLeft>
      <FooterBody>
        <ButtonGroup responsive space={4}>
          <Button
            size="medium"
            variant="secondary">
            Button 1
          </Button>
          <Button
            size="medium"
            variant="primary-alt">
            Button 1
          </Button>
        </ButtonGroup>
      </FooterBody>
    </Footer>
  );
};
