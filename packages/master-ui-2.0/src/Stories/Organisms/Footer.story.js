import React from "react";
import { Footer, FooterLeft, FooterBody, FooterRight } from "../../Components/Organisms";
import { ButtonGroup, Button } from "../../Components/Atom";
import mdx from './Footer.mdx';

export default {
  title: "Organisms/Footer",
  component: { Footer },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  return (
    <Footer>
      <FooterLeft>
        <a href="http://www.elevenia.co.id">
          <img src="http://www.elevenia.co.id/img_11ia/logo.png" alt="elevenia" style={{ height: "30px", width: "120px" }} />
        </a>
        <div style={{fontSize:"12px", marginLeft: "8px"}}>© 2009-2018, PT XL Planet</div>
      </FooterLeft>
      <FooterBody>
      </FooterBody>
      <FooterRight>
        <ButtonGroup space={-1}>
          <Button size="medium" variant="secondary-alt" disabled> Indonesia</Button>
          <Button size="medium" variant="secondary-alt"> English </Button>
        </ButtonGroup>
      </FooterRight>
    </Footer>
  );
};
