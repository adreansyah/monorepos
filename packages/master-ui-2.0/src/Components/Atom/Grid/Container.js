import React from "react";
import styled from "styled-components";
import Segment from "../Segment";
import { StyledRow } from "./Row";

const StyledContainer = styled(Segment)`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: ${props => (props.fluid ? "100%" : "1140px")};
`;

const Container = props => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
