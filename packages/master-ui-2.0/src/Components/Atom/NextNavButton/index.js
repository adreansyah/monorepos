import React from "react";
import styled from "styled-components";
import { Icon } from "../index";

const NavButton = styled.button`
  position: ${props => props.ps ? props.ps : "absolute"};
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.border.radius};
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.color.white};
  /* box-shadow: $shadow-hover; */

  &:hover {
    background-color: ${props => props.theme.color.black10};
  }
  &:hover:active {
    /* box-shadow: $shadow-default-action; */
  }
  cursor: pointer;
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  height: 100%;
  width: 5%;
  max-width: 32px;

  cursor: pointer;
`;

const NextNavWrapper = styled(NavWrapper)`
  right: 0px;
  ${NavButton} {
    right: -16px;
  }
`;

const PrevNavWrapper = styled(NavWrapper)`
  left: 0px;
  ${NavButton} {
    left: -16px;
  }
`;

const NextNavButton = () => {
  return (
    <NextNavWrapper>
      <NavButton>
        <Icon name="chevron-right" size={24} fillColor="black50" />
      </NavButton>
    </NextNavWrapper>
  );
};

const PrevNavButton = () => {
  return (
    <PrevNavWrapper>
      <NavButton>
        <Icon name="chevron-left" size={24} fillColor="black50" />
      </NavButton>
    </PrevNavWrapper>
  );
};

export { NextNavButton, PrevNavButton };
