import React from "react";
import styled from "styled-components";
import { TextType } from "../index";
import { color, spacing, typography } from "../../Utils";

export const StyledText = styled.p`
  white-space: ${props => (props.nowrap ? "nowrap" : "normal")};
  font-style: ${props => props.italic && "italic"};
  text-transform: ${props => props.transform};
  text-decoration: ${props => props.nodecor && "none"};
  ${props => TextType[Object.keys(props)[0]]}
  ${spacing};
  ${typography};
  ${color};

`;

const Text = ({ children, ...props }) => {
    return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
