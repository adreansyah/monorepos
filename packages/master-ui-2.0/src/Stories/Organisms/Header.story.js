import React from "react";
import { Header, HeaderLeft, HeaderRight, HeaderBody } from "../../Components/Organisms";
import { SearchBar } from "../../Components/Molecules";
import { ButtonLink } from "../../Components/Atom";
import { Icon } from "../../Components/Atom";
import mdx from './Header.mdx';

export default {
  title: "Organisms/Header",
  component: { Header },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  return (
    <Header style={{ position: "relative" }}>
      <HeaderLeft>
        <a href="http://www.elevenia.co.id">
          <img src="http://www.elevenia.co.id/img_11ia/logo.png" alt="elevenia" style={{height: "30px", width:"120px"}}/>
        </a>
      </HeaderLeft>
      <HeaderBody>
        <SearchBar />
      </HeaderBody>
      <HeaderRight>
        <ButtonLink><Icon name={"cart"} size={24} fillColor="black40" /></ButtonLink>
        <ButtonLink><Icon name={"more-horizontal"} size={24} fillColor="black40" /></ButtonLink>
      </HeaderRight>
    </Header>
  );
};

