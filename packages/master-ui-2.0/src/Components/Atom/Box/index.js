import React from "react"
import PropTypes from "prop-types";
import styled from "styled-components";
import Segment from "../Segment";

const StyledBox = styled(Segment)`
  position: ${props => (props.ps ? props.ps : "relative")};
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  min-width: 0;
  word-wrap: break-word;
  border-radius: ${props => props.theme.border.radius};
  box-shadow: ${props => props.theme.shadow.default};
  &.action:hover {
    box-shadow: ${props => props.theme.shadow.hover};
  }
  &.action:active {
    box-shadow: ${props => props.theme.shadow.action};
  }
  &.disable {
    box-shadow: ${props => props.theme.shadow.disabled};
  }
`;

const Box = ({ children, ...props }) => {
  return (
    <StyledBox {...props}>
      {children}
    </StyledBox>
  )
}

//Props Validation
Box.propTypes = {
  type: PropTypes.oneOf(["active", "disabled"])
};

export default Box;
