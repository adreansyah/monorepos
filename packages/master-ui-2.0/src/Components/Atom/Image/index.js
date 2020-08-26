import React from "react";
import styled from "styled-components";
import { spacing, border, position } from "../../Utils";

const StyledImage = styled.img`
    ${spacing}
    ${border}
    ${position}
`;

const Img = props => {
  return <StyledImage {...props}>{props.children}</StyledImage>;
};

export default Img;
