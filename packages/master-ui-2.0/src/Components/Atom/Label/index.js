import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-family: inherit;
  font-size: 14px;
  line-height: 16px;
`;

const Label = ({ children, ...props }) => {
    return <StyledLabel {...props}>
        {children}
    </StyledLabel>;
};

export default Label;
