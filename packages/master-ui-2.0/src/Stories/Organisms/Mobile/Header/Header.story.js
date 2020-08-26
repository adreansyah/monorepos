import React from "react";
import { Header, HeaderLeft, HeaderRight, HeaderBody } from "../../../../Components/Organisms/Mobile";
import { SearchBar } from "../../../../Components/Molecules";
import { ButtonLink } from "../../../../Components/Atom";
import { Icon } from "../../../../Components/Atom";
import { text, boolean } from "@storybook/addon-knobs";
import mdx from './Header.mdx'

const knobContent = () => text("Content", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Header");

const fixedHeader = () => boolean("Fixed", true, "Header");
const borderHeader = () => boolean("Border", true, "Header");

export default {
  title: "Organisms/Mobile/Header",
  component: { Header },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Search2IconRight = () => {
  return (
    <>
      <Header border={borderHeader()} fixed={fixedHeader()}>
        <HeaderBody>
          <SearchBar />
        </HeaderBody>
        <HeaderRight>
          <ButtonLink><Icon name={"cart"} size={24} fillColor="orange30" /></ButtonLink>
          <ButtonLink><Icon name={"cart"} size={24} fillColor="orange30" /></ButtonLink>
        </HeaderRight>
      </Header>
      {knobContent()}
    </>
  );
};

export const SearchRightAction = () => {
  return (
    <>
      <Header border={borderHeader()} fixed={fixedHeader()}>
        <HeaderBody>
          <SearchBar />
        </HeaderBody>
        <HeaderRight>
          <ButtonLink>Lorem</ButtonLink>
        </HeaderRight>
      </Header>
      {knobContent()}
    </>
  );
};

export const IconLeftTitleRightAction = () => {
  return (
    <>
      <Header border={borderHeader()} fixed={fixedHeader()}>
        <HeaderLeft>
          <ButtonLink><Icon name={"arrow-left"} size={24} fillColor="black70" /></ButtonLink>
        </HeaderLeft>
        <HeaderBody>
          Lorem Ipsum
        </HeaderBody>
        <HeaderRight>
          <ButtonLink>Lorem</ButtonLink>
        </HeaderRight>
      </Header>
      {knobContent()}
    </>
  );
};

export const IconLeftTitle2IconRight = () => {
  return (
    <>
      <Header border={borderHeader()} fixed={fixedHeader()}>
        <HeaderLeft>
          <ButtonLink><Icon name={"arrow-left"} size={24} fillColor="black70" /></ButtonLink>
        </HeaderLeft>
        <HeaderBody>
          Lorem Ipsum
        </HeaderBody>
        <HeaderRight>
          <ButtonLink><Icon name={"cart"} size={24} fillColor="orange30" /></ButtonLink>
          <ButtonLink><Icon name={"cart"} size={24} fillColor="orange30" /></ButtonLink>
        </HeaderRight>
      </Header>
      {knobContent()}
    </>
  );
};

export const LeftActionSearch = () => {
  return (
    <>
      <Header border={borderHeader()} fixed={fixedHeader()}>
        <HeaderLeft>
          <ButtonLink><Icon name={"arrow-left"} size={24} fillColor="black70" /></ButtonLink>
        </HeaderLeft>
        <HeaderBody>
          <SearchBar />
        </HeaderBody>
      </Header>
      {knobContent()}
    </>
  );
};

